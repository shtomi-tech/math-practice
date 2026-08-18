const fs = require("fs");
const path = require("path");
const vm = require("vm");

const source = fs.readFileSync(path.join(__dirname, "..", "static", "mini-data.js"), "utf8");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(source, context);
const errors = [];
const allQuestionIds = new Set();
const duplicateIds = new Set();

// ミニ試験共通契約（30分・100点・12問）。回ごとに構成を変えた場合はここに上書き値を書く。
const DEFAULT_CONTRACT = { durationMinutes: 30, totalPoints: 100, questionCount: 12 };
const EXAM_CONTRACTS = {
  // 基礎ミックス ver2 第1回：小問集合(5)＋段階問題3大問(3,4,4)の45分版。
  mini_06: {
    durationMinutes: 45,
    totalPoints: 150,
    questionCount: 16,
    groupQuestionCounts: [5, 3, 4, 4],
    groupPoints: [40, 25, 35, 50],
    requireGroupStem: true,
  },
  // 基礎ミックス ver3 第1回：中学復習〜数学I（数と式・集合・場合の数）の45分版。
  mini_07: {
    durationMinutes: 45,
    totalPoints: 150,
    questionCount: 16,
    groupQuestionCounts: [5, 3, 4, 4],
    groupPoints: [40, 30, 40, 40],
    requireGroupStem: true,
  },
};

for (const exam of Object.values(context.window.MINI_EXAMS)) {
  const contract = { ...DEFAULT_CONTRACT, ...(EXAM_CONTRACTS[exam.id] || {}) };
  const questions = exam.groups.flatMap((group) => group.questions);
  const points = exam.groups.reduce((sum, group) => sum + group.points, 0);
  if (points !== exam.totalPoints) errors.push(`${exam.id}: group points ${points} !== total ${exam.totalPoints}`);
  if (exam.durationMinutes !== contract.durationMinutes) errors.push(`${exam.id}: durationMinutes ${exam.durationMinutes} !== ${contract.durationMinutes}`);
  if (exam.totalPoints !== contract.totalPoints) errors.push(`${exam.id}: totalPoints ${exam.totalPoints} !== ${contract.totalPoints}`);
  if (questions.length !== contract.questionCount) errors.push(`${exam.id}: question count ${questions.length} !== ${contract.questionCount}`);
  if (contract.groupQuestionCounts) {
    const counts = exam.groups.map((group) => group.questions.length);
    if (JSON.stringify(counts) !== JSON.stringify(contract.groupQuestionCounts)) {
      errors.push(`${exam.id}: group question counts ${JSON.stringify(counts)} !== ${JSON.stringify(contract.groupQuestionCounts)}`);
    }
  }
  if (contract.groupPoints) {
    const groupPointsList = exam.groups.map((group) => group.points);
    if (JSON.stringify(groupPointsList) !== JSON.stringify(contract.groupPoints)) {
      errors.push(`${exam.id}: group points ${JSON.stringify(groupPointsList)} !== ${JSON.stringify(contract.groupPoints)}`);
    }
  }
  if (contract.requireGroupStem) {
    for (const group of exam.groups) {
      if (typeof group.stem !== "string" || !group.stem.trim()) errors.push(`${exam.id} ${group.number}: group.stem is required`);
    }
  }

  for (const group of exam.groups) {
    const groupPoints = group.questions.reduce((sum, q) => sum + q.points, 0);
    if (groupPoints !== group.points) errors.push(`${exam.id} ${group.number}: question points ${groupPoints} !== ${group.points}`);
    for (const q of group.questions) {
      const qLabel = q.id || "unknown";
      if (!q.id || !q.stem || !q.solution) errors.push(`${qLabel}: missing required field`);
      if (!Number.isInteger(q.points) || q.points <= 0) errors.push(`${qLabel}: points must be a positive integer, got ${q.points}`);
      if (!["numeric", "choice", "multi"].includes(q.type)) errors.push(`${qLabel}: unknown type ${q.type}`);
      if (q.type === "numeric" && q.answers.length !== q.prompts.length) errors.push(`${qLabel}: answer/prompt mismatch`);
      if (q.type === "choice") {
        if (!Array.isArray(q.options) || q.options.length === 0) errors.push(`${qLabel}: choice missing options`);
        else if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) errors.push(`${qLabel}: choice answer ${q.answer} out of range`);
      }
      if (q.type === "multi") {
        if (!Array.isArray(q.options) || q.options.length === 0) errors.push(`${qLabel}: multi missing options`);
        if (!Array.isArray(q.answer) || q.answer.length === 0) errors.push(`${qLabel}: multi answer must be a non-empty array`);
        else {
          if (new Set(q.answer).size !== q.answer.length) errors.push(`${qLabel}: multi answer has duplicate indices`);
          if (q.answer.some((index) => !Number.isInteger(index) || index < 0 || index >= (q.options || []).length)) {
            errors.push(`${qLabel}: multi answer index out of range`);
          }
        }
      }
      if (q.id) {
        if (allQuestionIds.has(q.id)) duplicateIds.add(q.id);
        allQuestionIds.add(q.id);
      }
    }
  }

  console.log(`OK: ${exam.title} / ${questions.length} questions / ${exam.totalPoints} points`);
}

if (duplicateIds.size) errors.push(`duplicate question ids: ${[...duplicateIds].join(", ")}`);

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
