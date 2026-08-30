// 検証スクリプト用のヘルパー。
// アプリ本体は static/app/ のESモジュール群に分かれているため、
// 「app.js 1ファイル」を前提にした文字列検査はここで結合したソースに対して行う。
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const APP_DIR = path.join(root, "static", "app");

function appModuleFiles() {
  return fs.readdirSync(APP_DIR)
    .filter((name) => name.endsWith(".js"))
    .sort()
    .map((name) => path.join(APP_DIR, name));
}

function readAppModule(name) {
  return fs.readFileSync(path.join(APP_DIR, name), "utf8");
}

// 全モジュールを連結した文字列。どのモジュールにあるかを問わない契約検査に使う。
function readAppSource() {
  return appModuleFiles().map((file) => fs.readFileSync(file, "utf8")).join("\n");
}

module.exports = { root, APP_DIR, appModuleFiles, readAppModule, readAppSource };
