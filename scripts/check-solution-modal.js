const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const vm = require("node:vm");

const { root, readAppModule, readAppSource } = require("./app-source.js");
const source = readAppSource();
const solutionModule = readAppModule("solution.js");
const practiceModule = readAppModule("practice.js");
const solutions = fs.readFileSync(path.join(root, "static/rikaido2507-solutions.js"), "utf8");
const kawaiSolutionsSource = fs.readFileSync(path.join(root, "static/kawai-solutions.js"), "utf8");
const sougouSolutionsSource = fs.readFileSync(path.join(root, "static/sougou-solutions.js"), "utf8");
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
assert.match(practiceModule, /solution\?\.explainerUrl/);
assert.match(practiceModule, /window\.open\(url\.href, "_blank", "noopener"\)/);
assert.match(practiceModule, /openSolutionModal\(app\.currentGroup, subIndex\)/);
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

const kawaiContext = { window: {} };
vm.runInNewContext(kawaiSolutionsSource, kawaiContext);
const kawaiTypeIII = kawaiContext.window.MATH_SOLUTIONS.kawai_2026_zenkijutsu2_typeIII;
const expectedExplainers = {
  "1-(1)": "kawai-2026-typeIII-1-1-divisors-explainer-basic.html",
  "1-(2)": "kawai-2026-typeIII-1-2-dice-probability-explainer-basic.html",
  "1-(3)": "kawai-2026-typeIII-1-3-log-explainer-basic.html",
  "1-(4)": "kawai-2026-typeIII-1-4-tangent-inequality-explainer-basic.html",
  "2-(1)": "kawai-2026-typeIII-2-1-first-term-explainer-basic.html",
  "2-(2)": "kawai-2026-typeIII-2-2-recurrence-explainer-basic.html",
  "2-(3)": "kawai-2026-typeIII-2-3-common-terms-explainer-basic.html",
  "3-(1)": "kawai-2026-typeIII-3-1-inner-product-explainer-basic.html",
  "3-(2)": "kawai-2026-typeIII-3-2-perpendicular-foot-explainer-basic.html",
};
for (const [key, fileName] of Object.entries(expectedExplainers)) {
  assert.equal(kawaiTypeIII[key].explainerUrl, `./explainers/${fileName}`, `${key} の解説URLが不正です`);
  assert.equal(fs.existsSync(path.join(root, "explainers", fileName)), true, `${key} の解説HTMLがありません`);
}

const sougouContext = { window: {} };
vm.runInNewContext(sougouSolutionsSource, sougouContext);
const sougou = sougouContext.window.MATH_SOLUTIONS.sougou;
const expectedSougouExplainers = {
  "1-(1)": "sougou-2026-1-1-factorization-explainer-basic.html",
  "1-(2)": "sougou-2026-1-2-divisors-explainer-basic.html",
  "1-(3)": "sougou-2026-1-3-logarithms-explainer-basic.html",
  "1-(4)": "sougou-2026-1-4-common-tangents-explainer-basic.html",
  "1-(5)": "sougou-2026-1-5-integral-equation-explainer-basic.html",
};
for (const [key, fileName] of Object.entries(expectedSougouExplainers)) {
  assert.equal(sougou[key].explainerUrl, `./explainers/${fileName}`, `総合型選抜 ${key} の解説URLが不正です`);
  assert.equal(fs.existsSync(path.join(root, "explainers", fileName)), true, `総合型選抜 ${key} の解説HTMLがありません`);
}
const tanmonSolutionsSource = fs.readFileSync(path.join(root, "static/tanmon-solutions.js"), "utf8");
const tanmonContext = { window: {} };
vm.runInNewContext(tanmonSolutionsSource, tanmonContext);
const tanmon = tanmonContext.window.MATH_SOLUTIONS.tanmon_ippan;
const expectedTanmonExplainers = {
  "1-(1)": "tanmon-ippan-1-1-three-digit-basic.html",
  "1-(2)": "tanmon-ippan-1-2-five-multiple-basic.html",
  "2-(1)": "tanmon-ippan-2-1-girls-ends-basic.html",
  "2-(2)": "tanmon-ippan-2-2-girls-nonadjacent-basic.html",
  "3-(1)": "tanmon-ippan-3-1-circle-blocks-basic.html",
  "3-(2)": "tanmon-ippan-3-2-circle-alternate-basic.html",
  "3-(3)": "tanmon-ippan-3-3-circle-adjacent-basic.html",
  "3-(4)": "tanmon-ippan-3-4-circle-nonadjacent-basic.html",
  "4-(1)": "tanmon-ippan-4-1-combination-basic.html",
  "4-(2)": "tanmon-ippan-4-2-at-least-girl-basic.html",
  "5-(1)": "tanmon-ippan-5-1-radar-basic.html",
  "5-(2)": "tanmon-ippan-5-2-pqr-all-basic.html",
  "5-(3)": "tanmon-ippan-5-3-pq-four-basic.html",
  "5-(4)": "tanmon-ippan-5-4-pqr-five-basic.html",
  "6-(1)": "tanmon-ippan-6-1-grid-shortest-basic.html",
  "7-(1)": "tanmon-ippan-7-1-grid-via-c-basic.html",
  "8-(1)": "tanmon-ippan-8-1-pqr-all-basic.html",
  "8-(2)": "tanmon-ippan-8-2-via-p-basic.html",
  "8-(3)": "tanmon-ippan-8-3-via-r-basic.html",
  "8-(4)": "tanmon-ippan-8-4-via-p-or-q-basic.html",
  "8-(5)": "tanmon-ippan-8-5-via-pqr-basic.html",
  "9-(1)": "tanmon-ippan-9-1-staff-users-basic.html",
  "9-(2)": "tanmon-ippan-9-2-adults-students-basic.html",
  "10-(1)": "tanmon-ippan-10-1-two-rooms-basic.html",
  "10-(2)": "tanmon-ippan-10-2-pencils-basic.html",
};
for (const [key, fileName] of Object.entries(expectedTanmonExplainers)) {
  assert.equal(tanmon[key].explainerUrl, `./explainers/${fileName}`, `単問演習 ${key} の解説URLが不正です`);
  assert.equal(fs.existsSync(path.join(root, "explainers", fileName)), true, `単問演習 ${key} の解説HTMLがありません`);
}
// バージョン文字列そのものは check-app-modules.js が index.html と全importの一致を検査する。
assert.match(index, /<script type="module" src="\.\/static\/app\/main\.js\?v=/);
assert.equal(modalBody.includes("learningPointsHtml"), false);
assert.equal(modalBody.includes("learning-section"), false);

console.log("solution modal sections OK: HTML方式 問題 / 方針 / 解答、従来方式 問題 / 答え / 解説");
