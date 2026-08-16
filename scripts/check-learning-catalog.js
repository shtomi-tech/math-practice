const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (relative) => fs.readFileSync(path.join(root, relative), "utf8");
const app = read("static/app.js");
const styles = read("static/styles.css");
const index = read("index.html");
const errors = [];

const requireText = (content, marker, message) => {
  if (!content.includes(marker)) errors.push(message || `missing: ${marker}`);
};

for (const marker of [
  "function progressStorageKey",
  "function draftStorageKey",
  "function loadProgressSnapshot",
  "function loadDraftSnapshot",
  "function practiceCatalogState",
  "function miniCatalogState",
  "function catalogStateForExam",
  "function schoolCatalogSummary",
  "function practiceGroupState",
  "function examGroupState",
]) {
  requireText(app, marker, `カタログ状態helperがありません: ${marker}`);
}

for (const marker of [
  '"未着手"',
  '"学習中"',
  '"入力中"',
  '"完了"',
  '"未受験"',
  '"保存中"',
  '"受験済み"',
  '"未回答"',
  '"回答中"',
  '"回答済み"',
]) {
  requireText(app, marker, `状態語彙がありません: ${marker}`);
}

for (const marker of [
  "exam-option-no",
  "exam-option-mode",
  "exam-option-status",
  "exam-option-progress",
  "exam-option-action",
  "group-status",
  "group-progress",
  'aria-current="step"',
  'aria-selected="${',
]) {
  requireText(app, marker, `表示契約がありません: ${marker}`);
}

for (const marker of [
  ".exam-option-no",
  ".exam-option-mode",
  ".exam-option-status",
  ".exam-option-progress",
  ".exam-option-action",
  ".group-status",
  ".group-progress",
  "@media (max-width: 760px)",
  "@media (max-width: 390px)",
  "grid-template-columns: repeat(2",
  "grid-template-columns: 1fr",
]) {
  requireText(styles, marker, `CSS契約がありません: ${marker}`);
}

requireText(index, "id=\"groupSummaryText\"", "大問summaryの補助要素がありません");
requireText(index, "id=\"sourceSummary\"", "出典summaryの補助要素がありません");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("learning catalog contract OK");
