"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const { root, readAppSource } = require("./app-source.js");
const read = (name) => fs.readFileSync(path.join(root, name), "utf8");
const printPage = read("print.html");
const index = read("index.html");
const app = readAppSource();

for (const required of [
  'id="printContent"',
  'params.get("exam")',
  'params.get("group")',
  "katex@0.16.11",
  "./static/rikaido2507-data.js",
  "./static/rikaido2507-solutions.js",
  "window.MATH_DATASETS",
  "window.MATH_SOLUTIONS",
  "@page",
  "size: A4",
  "margin: 16mm",
  "break-before: page",
  "break-inside: avoid",
]) {
  assert.ok(printPage.includes(required), required);
}

assert.doesNotMatch(printPage, /static\/app\//, "print page must not load the practice app modules");
assert.match(index, /id="groupPrintLink"/, "the practice page needs a print link");
const legacySourceName = ["print", "sources"].join("-");
assert.doesNotMatch(index, new RegExp(legacySourceName), "the practice page must not load legacy print sources");
assert.match(app, /function groupPrintUrl\(/, "the practice page needs a group print URL");
const legacyRegistry = ["MATH", "PRINT", "SOURCES"].join("_");
const legacyUrlFunction = ["print", "UrlFor"].join("");
assert.doesNotMatch(app, new RegExp(`${legacyRegistry}|function ${legacyUrlFunction}\\(`), "legacy PDF URL code remains");

console.log("print page contract OK");
