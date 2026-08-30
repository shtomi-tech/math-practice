// アプリ本体（static/app/ のESモジュール）の読み込み契約を検査する。
//
// GitHub Pages は静的ファイルを短時間キャッシュするため、公開直後に
// 「新しい main.js ＋ 古い依存モジュール」が混ざると壊れる。
// それを防ぐため、index.html のエントリと全モジュールの import は
// 同じバージョン文字列を持たなければならない。
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { root, appModuleFiles } = require("./app-source.js");

const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const errors = [];

const entry = index.match(/<script type="module" src="\.\/static\/app\/main\.js\?v=([^"]+)"><\/script>/);
if (!entry) {
  errors.push('index.html が <script type="module" src="./static/app/main.js?v=..."> を読み込んでいません');
}
const version = entry ? entry[1] : null;

if (/static\/app\.js/.test(index)) {
  errors.push("index.html に旧 static/app.js の読み込みが残っています");
}

for (const file of appModuleFiles()) {
  const relative = path.relative(root, file).replaceAll("\\", "/");
  const source = fs.readFileSync(file, "utf8");
  for (const match of source.matchAll(/from\s+"(\.\/[^"]+)"/g)) {
    const specifier = match[1];
    const [target, query] = specifier.split("?");
    if (!fs.existsSync(path.join(path.dirname(file), target))) {
      errors.push(`${relative}: 存在しないモジュールをimportしています: ${target}`);
    }
    if (version && query !== `v=${version}`) {
      errors.push(`${relative}: import のバージョンが index.html と一致しません: ${specifier}（期待: ?v=${version}）`);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`app module contract OK (version: ${version})`);
