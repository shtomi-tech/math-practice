const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const file = path.join(root, "static/rikaido2507-data.js");
const source = fs.readFileSync(file, "utf8");
const solutionPattern = /^\s*"solution_md":\s*"(?:\\.|[^"\\])*",\r?\n/gm;
const learningPattern = /^\s*"learning_points":\s*\[[\s\S]*?^\s*\]\r?\n/gm;
const solutionCount = source.match(solutionPattern)?.length || 0;
const learningCount = source.match(learningPattern)?.length || 0;

if (solutionCount && solutionCount !== 30) {
  throw new Error(`solution_md count must be 30 before migration: ${solutionCount}`);
}
if (learningCount && learningCount !== 30) {
  throw new Error(`learning_points count must be 30 before migration: ${learningCount}`);
}

const migrated = source.replace(solutionPattern, "").replace(learningPattern, "");
if (migrated.includes('"solution_md"') || migrated.includes('"learning_points"')) {
  throw new Error("解説データの削除に失敗しました");
}

const context = { window: {} };
vm.runInNewContext(migrated, context, { filename: file });
const dataset = context.window.MATH_DATASETS?.rikaido_2507_beta;
const subProblems = (dataset?.problem_groups || []).flatMap((group) => group.sub_problems || []);
if (subProblems.length !== 30 || subProblems.some((sub) => !Array.isArray(sub.answer_fields))) {
  throw new Error(`移行後の小問または answer_fields が不正です: ${subProblems.length}`);
}

if (solutionCount || learningCount) fs.writeFileSync(file, migrated);
console.log(`rikaido print data ready: ${subProblems.length} subproblems, answer_fields preserved`);
