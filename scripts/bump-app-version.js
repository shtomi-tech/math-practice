// アプリ本体（static/app/）のキャッシュ用バージョンを一括更新する。
//
//   node scripts/bump-app-version.js 20260901-fix-keypad
//
// index.html のエントリと、全モジュールの import specifier を同じ文字列にそろえる。
// バージョンがそろっていないと、公開直後に古いモジュールが混ざって壊れる。
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { root, appModuleFiles } = require("./app-source.js");

const nextVersion = process.argv[2];
if (!nextVersion || !/^[\w.-]+$/.test(nextVersion)) {
  console.error("使い方: node scripts/bump-app-version.js <version>（例: 20260901-fix-keypad）");
  process.exit(1);
}

const indexPath = path.join(root, "index.html");
const index = fs.readFileSync(indexPath, "utf8");
const entryPattern = /(<script type="module" src="\.\/static\/app\/main\.js\?v=)([^"]+)(">)/;
if (!entryPattern.test(index)) {
  console.error("index.html に static/app/main.js のmoduleエントリが見つかりません");
  process.exit(1);
}
fs.writeFileSync(indexPath, index.replace(entryPattern, `$1${nextVersion}$3`));

let changed = 0;
for (const file of appModuleFiles()) {
  const source = fs.readFileSync(file, "utf8");
  const updated = source.replace(/(from\s+"\.\/[^"?]+\?v=)[^"]+(")/g, `$1${nextVersion}$2`);
  if (updated !== source) {
    fs.writeFileSync(file, updated);
    changed += 1;
  }
}

console.log(`app version -> ${nextVersion}（index.html と ${changed} モジュールを更新）`);
