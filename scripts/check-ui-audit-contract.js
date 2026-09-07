// 監査対応の最小契約を、外部依存なしで確認する。
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (relative) => fs.readFileSync(path.join(root, relative), "utf8");
const styles = read("static/styles.css");
const app = [
  "static/app/state.js",
  "static/app/storage.js",
  "static/app/main.js",
  "static/app/shell.js",
  "static/app/practice.js",
  "static/app/exam.js",
].map(read).join("\n");
const errors = [];

const requireText = (content, marker, message) => {
  if (!content.includes(marker)) errors.push(message || `missing: ${marker}`);
};

const contextbar = styles.match(/\.contextbar\s*\{([\s\S]*?)\n\}/)?.[1] || "";
const utilitySummary = styles.match(/\.utility-menu > summary\s*\{([\s\S]*?)\n\}/)?.[1] || "";
const contextLabel = styles.match(/\.context-label\s*\{([\s\S]*?)\n\}/)?.[1] || "";
const signalUses = styles.match(/var\(--signal\)/g) || [];

if (signalUses.length !== 2) errors.push(`--signalの使用箇所がCTAの2箇所以外にもあります: ${signalUses.length}`);
if ((contextbar.match(/\bwidth\s*:/g) || []).length !== 1) errors.push(".contextbarのwidth定義が1つではありません");
if (!/font-size:\s*11px/.test(contextLabel)) errors.push(".context-labelが11pxではありません");
if (!/min-height:\s*44px/.test(utilitySummary)) errors.push(".utility-menu > summaryが44pxではありません");

for (const marker of [
  "lastPracticePosition",
  "positionStorageKey",
  "loadPracticePosition",
  "savePracticePosition",
  "restorePracticePosition",
  "firstUnfinishedGroupIndex",
  "nextExam()",
  "chooseButton.classList.toggle(\"cta\", !next)",
]) {
  requireText(app, marker, `監査対応のアプリ契約がありません: ${marker}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("ui audit contract OK");
