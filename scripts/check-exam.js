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

for (const exam of Object.values(context.window.MINI_EXAMS)) {
  const questions = exam.groups.flatMap((group) => group.questions);
  const points = exam.groups.reduce((sum, group) => sum + group.points, 0);
  if (points !== exam.totalPoints) errors.push(`${exam.id}: group points ${points} !== total ${exam.totalPoints}`);
  if (exam.durationMinutes !== 30) errors.push(`${exam.id}: durationMinutes ${exam.durationMinutes} !== 30`);
  if (exam.totalPoints !== 100) errors.push(`${exam.id}: totalPoints ${exam.totalPoints} !== 100`);
  if (questions.length !== 12) errors.push(`${exam.id}: question count ${questions.length} !== 12`);

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

  // 基礎ミックス ver2（理解度確認テスト型）は、大問共通文つきの段階構成を持つ。
  if (exam.id === "mini_06") {
    const counts = exam.groups.map((group) => group.questions.length);
    const groupPointsList = exam.groups.map((group) => group.points);
    if (JSON.stringify(counts) !== JSON.stringify([5, 3, 4])) errors.push(`${exam.id}: group question counts ${JSON.stringify(counts)} !== [5,3,4]`);
    if (JSON.stringify(groupPointsList) !== JSON.stringify([40, 25, 35])) errors.push(`${exam.id}: group points ${JSON.stringify(groupPointsList)} !== [40,25,35]`);
    for (const group of exam.groups) {
      if (typeof group.stem !== "string" || !group.stem.trim()) errors.push(`${exam.id} ${group.number}: group.stem is required for ver2`);
    }
  }

  console.log(`OK: ${exam.title} / ${questions.length} questions / ${exam.totalPoints} points`);
}

if (duplicateIds.size) errors.push(`duplicate question ids: ${[...duplicateIds].join(", ")}`);

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
