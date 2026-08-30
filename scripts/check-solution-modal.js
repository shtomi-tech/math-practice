const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const vm = require("node:vm");

const { root, readAppModule, readAppSource } = require("./app-source.js");
const source = readAppSource();
const solutionModule = readAppModule("solution.js");
const solutions = fs.readFileSync(path.join(root, "static/rikaido2507-solutions.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "static/styles.css"), "utf8");
const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const start = solutionModule.indexOf("function renderSolutionModalBody");
const end = solutionModule.indexOf("export function openSolutionModal", start);
assert.ok(start >= 0 && end > start, "解説モーダルの描画関数が見つかりません");

const modalBody = solutionModule.slice(start, end);
assert.match(source, /const MATH_SOLUTIONS = window\.MATH_SOLUTIONS \|\| \{\};/);
assert.match(source, /function solutionForSub\(group, sub\)/);

const branches = modalBody.match(/const sections = solution\s*\?\s*`([\s\S]*?)`\s*:\s*`([\s\S]*?)`;/);
assert.ok(branches, "HTML方式と従来方式のモーダル分岐が見つかりません");
const htmlHeadings = [...branches[1].matchAll(/<h3>(.*?)<\/h3>/g)].map((match) => match[1]);
const legacyHeadings = [...branches[2].matchAll(/<h3>(.*?)<\/h3>/g)].map((match) => match[1]);
assert.deepEqual(htmlHeadings, ["問題", "方針", "解答"]);
assert.deepEqual(legacyHeadings, ["問題", "答え", "解説"]);
assert.match(branches[1], /solution\.formula/);
assert.match(branches[1], /solution\.figure/);
assert.match(branches[1], /solution\.answer/);
const legacyUrlFunction = ["print", "UrlFor"].join("");
assert.equal(modalBody.includes(legacyUrlFunction), false);
assert.match(source, /data-open-strategy/);
assert.match(source, /aria-expanded/);
assert.match(styles, /\.sub-strategy-button\s*\{[\s\S]*?min-height:\s*44px/);
for (const key of ["1-(1)", "1-(2)", "1-(3)", "1-(4)", "1-(5)"]) {
  assert.equal(solutions.includes(`"${key}":`), true, `${key} の解説データがありません`);
}
assert.match(solutions, /approach:/);
assert.match(solutions, /solution:/);
assert.match(solutions, /answer:/);
const solutionContext = { window: {} };
vm.runInNewContext(solutions, solutionContext);
const migratedSolutions = solutionContext.window.MATH_SOLUTIONS.rikaido_2507_beta;
for (const key of ["1-(1)", "1-(2)", "1-(3)", "1-(4)", "1-(5)"]) {
  assert.doesNotMatch(migratedSolutions[key].solution.trim(), /よって[\s\S]*。$/, `${key} の解答末尾に答えの重複があります`);
}
assert.match(migratedSolutions["1-(5)"].figure, /L213\.71 48\.22 Z/);
assert.match(migratedSolutions["1-(5)"].figure, /cx="200" cy="94\.22"/);
// バージョン文字列そのものは check-app-modules.js が index.html と全importの一致を検査する。
assert.match(index, /<script type="module" src="\.\/static\/app\/main\.js\?v=/);
assert.equal(modalBody.includes("learningPointsHtml"), false);
assert.equal(modalBody.includes("learning-section"), false);

console.log("solution modal sections OK: HTML方式 問題 / 方針 / 解答、従来方式 問題 / 答え / 解説");
