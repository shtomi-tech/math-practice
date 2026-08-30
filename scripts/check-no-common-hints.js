const fs = require("node:fs");
const path = require("node:path");

const { root, readAppSource } = require("./app-source.js");
// アプリ本体は static/app/ のモジュール群。連結ソースをまとめて検査する。
const APP_MODULES = "static/app/*.js";
const read = (relative) => (relative === APP_MODULES ? readAppSource() : fs.readFileSync(path.join(root, relative), "utf8"));
const errors = [];

const forbiddenByFile = {
  "index.html": ["hintMode", "hint-strategies.js", "ヒントモード"],
  [APP_MODULES]: [
    "HINT_LEVELS",
    "renderHintBox",
    "bindHints",
    "revealHint",
    "hintsUsed",
    "strategyViewed",
    "MATH_HINT_STRATEGIES",
    "data-hint",
    "hint-button",
    "hint-steps",
    "hint-strategy",
    "hint-prerequisite",
    "no-hint",
  ],
  "static/styles.css": [
    ".hint-box",
    ".hint-button",
    ".hint-steps",
    ".hint-strategy",
    ".hint-prerequisite",
    ".no-hint-badge",
    ".hint-log",
  ],
  "README.md": ["段階ヒント", "hint_strategy", "check-hints.js", "check-prerequisites.js", "hint-strategies.js"],
};

for (const [relative, forbidden] of Object.entries(forbiddenByFile)) {
  const content = read(relative);
  for (const marker of forbidden) {
    if (content.includes(marker)) errors.push(`${relative}: 共通ヒントの参照が残っています: ${marker}`);
  }
}

for (const relative of ["static/hint-strategies.js", "static/rikaido2507-hints.js", "scripts/check-hints.js", "scripts/check-prerequisites.js"]) {
  if (fs.existsSync(path.join(root, relative))) errors.push(`${relative}: 共通ヒント用ファイルが残っています`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("common hints removed");
