const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "static/app.js"), "utf8");
const printSources = fs.readFileSync(path.join(root, "static/print-sources.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "static/styles.css"), "utf8");
const start = source.indexOf("function renderSolutionModalBody");
const end = source.indexOf("\nfunction openSolutionModal", start);
assert.ok(start >= 0 && end > start, "解説モーダルの描画関数が見つかりません");

const modalBody = source.slice(start, end);
assert.match(source, /const PRINT_SOURCES = window\.MATH_PRINT_SOURCES \|\| \{\};/);
assert.match(source, /function printUrlFor\(group, sub\)/);
assert.match(modalBody, /const printUrl = printUrlFor\(group, sub\);/);

const branches = modalBody.match(/const sections = printUrl\s*\?\s*`([\s\S]*?)`\s*:\s*`([\s\S]*?)`;/);
assert.ok(branches, "プリント方式と従来方式のモーダル分岐が見つかりません");
const printHeadings = [...branches[1].matchAll(/<h3>(.*?)<\/h3>/g)].map((match) => match[1]);
const legacyHeadings = [...branches[2].matchAll(/<h3>(.*?)<\/h3>/g)].map((match) => match[1]);
assert.deepEqual(printHeadings, ["問題", "解説"]);
assert.deepEqual(legacyHeadings, ["問題", "答え", "解説"]);
assert.match(branches[1], /target="_blank" rel="noopener"/);
assert.match(branches[1], /解説プリントを開く/);
assert.match(printSources, /MATH_PRINT_SOURCES/);
assert.match(printSources, /rikaido_2507_beta/);
assert.match(printSources, /3-\(3\).*II/);
assert.match(styles, /\.detail-print-link\s*\{[\s\S]*?min-height:\s*44px/);
assert.equal(modalBody.includes("learningPointsHtml"), false);
assert.equal(modalBody.includes("learning-section"), false);

console.log("solution modal sections OK: プリント方式 問題 / 解説、従来方式 問題 / 答え / 解説");
