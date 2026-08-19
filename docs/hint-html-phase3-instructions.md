# 方針ヒント・HTML化 Phase 3 作業指示（Codex 向け）

設計は [`docs/hint-html-migration-plan.md`](hint-html-migration-plan.md)。
Phase 1・2 の経緯と修正は各 phase の指示書にある。**着手前に読むこと。**

対象リポジトリ：`C:\Users\shtom\dev\math-practice`

Phase 3 は **印刷ページの作成**と、**PDF方式の撤去**の2つからなる。

---

## 順序（重要）

**必ず 1 → 2 の順で行う。**印刷手段が無い状態でPDFを消すと、紙が必要になったときに手立てが無くなる。

1. 印刷ページを作り、**実際に印刷プレビューで確認する**
2. 確認できてから、PDF方式の資産を撤去する

**1 の確認が終わるまで 2 に着手しない。**

---

## 1. 印刷ページ

### 作るもの

`print.html`（リポジトリ直下、`index.html` と同階層）。

- URL パラメータ：`print.html?exam=rikaido_2507_beta&group=1`
  `group` を省いたら、その試験の全大問を出す。
- 読み込むもの：KaTeX、対象試験の `*-data.js` と `*-solutions.js`。
  `app.js` は読み込まない（演習UIは不要）。
- 出す内容：大問ごとに **問題 → 方針 → 解答**。小問単位で並べる。
  データは `MATH_DATASETS` の `stem_md` と `MATH_SOLUTIONS` を使う。**新しい文言を書かない。**
- `\bun` のKaTeXマクロは `app.js` と同じ定義を使う。共通化できるならそうする。

### 印刷CSS

- `@page { size: A4; margin: 16mm; }`
- **大問の切れ目で改ページ**する（`break-before: page`）。
- 小問が途中で切れないようにする（`break-inside: avoid`）。
- 画面表示用の装飾（背景色・影・面取り）は `@media print` で落とし、**黒一色**にする。
  SVG図は `currentColor` なのでそのまま黒になる。
- 2段組にはしない。LaTeXの組版品質は追わない方針である（Phase 3 の前提）。

### アプリからの導線

大問の見出し付近に「印刷」リンクを1つ置き、`print.html?exam=…&group=…` を別タブで開く。
`MATH_SOLUTIONS` にデータがある試験でだけ出す。操作領域は44px以上。

### 確認

ブラウザの印刷プレビューで、次を見る。**画面表示だけで完了としない。**

- A4に収まり、横が切れていないこと
- 大問の切れ目で改ページされ、小問が途中で分断されていないこと
- 数式・SVG図が黒で出ること。背景色や影が印刷されないこと
- 【IV】と【VI】の図が潰れず、ラベルが読めること
- 空白だけのページが出ないこと

---

## 2. PDF方式の撤去

### 2-1. 先に決めること：`prints/` の `.tex` をどうするか

**`prints/` は `.gitignore` の `/prints/` により git 未追跡である。削除すると復元できない。**
（`static/prints/*.pdf` は git 管理下なので、こちらは削除しても履歴から戻せる。）

`.tex` の内容は Phase 1・2 でデータへ移植済みだが、TikZの元ソースと LaTeX 原稿そのものは失われる。

**既定：削除ではなく、リポジトリ外へ退避する。**

```
prints/  →  C:\Users\shtom\dev\_archive\math-practice-prints-2026-08-19\
```

**ユーザーが「完全に削除してよい」と明示した場合のみ削除する。勝手に消さないこと。**

### 2-2. コードとファイルの撤去

| 対象 | 操作 |
|---|---|
| `static/prints/` | 削除（git履歴に残る） |
| `static/print-sources.js` | 削除。`index.html` の script タグも削除 |
| `static/app.js` の `PRINT_SOURCES`（241行付近）と `printUrlFor()`（1372行付近） | 削除。**他から呼ばれていないことを確認してから消す** |
| `scripts/build-print.sh` | 削除 |
| `scripts/publish-prints.sh` | 削除 |
| `scripts/check-tex-rules.js` / `.test.js` | 削除 |
| `scripts/migrate-rikaido-print-data.js` | 削除（一度きりの移行用） |
| `.gitignore` の `/prints/` | 退避した場合は削除。リポジトリ内に残す判断になった場合は残す |

### 2-3. 文書の整理

**`docs/rikaido2507-print-fixes.md` は削除しない。**
`rikaido-solutions` スキルが「まず読め」と指している唯一の不具合記録であり、
【IV】(3) の場合分け、【VII】(4) の望遠鏡和、【V】(3)(4) の係数など、
**移植後のデータを検証するときにも使う内容**が入っている。
冒頭に「LaTeXプリント時代の記録。内容の教訓は現行のデータ形式にも適用される」と1行足すこと。

以下は役目を終えたので削除してよい。

- `docs/rikaido2507-print-plan.md`（LaTeXプリントの全体計画）
- `docs/rikaido2507-print-expansion.md`（【II】〜【VII】のプリント作成指示）
- `docs/solution-print-migration-plan.md`（PDFリンク方式の計画）
- `docs/solution-print-migration-instructions.md`（同・作業指示）

ただし `rikaido2507-print-expansion.md` には**全25問の検算済みの答えと落とし穴**が入っている。
削除する前に、その表を `docs/rikaido2507-print-fixes.md` へ移すか、
**移植済みデータと突き合わせて不要と確認すること。**

### 2-4. スキルの更新

`~/.codex/skills/rikaido-solutions/SKILL.md` の
「LuaLaTeX prints (legacy - do not start new work here)」の節を削除する。
冒頭の Format status の記述も、移行完了に合わせて書き換える。
**Content と Figures の節は形式非依存なので残す。**

### 2-5. MiKTeX

`.tex` を扱わなくなるので、MiKTeX（`%LOCALAPPDATA%\Programs\MiKTeX`、約1GB）は不要になる。
**アンインストールするかはユーザーの判断。勝手に消さないこと。**報告に含めて確認を仰ぐ。

---

## 検証

```bash
node --check static/app.js
node scripts/check-exam.js
node scripts/check-solution-modal.js
node scripts/check-no-common-hints.js
```

**撤去後に、削除した識別子への参照が残っていないことを確認する。**

```bash
grep -rn "MATH_PRINT_SOURCES\|printUrlFor\|print-sources\|build-print\|check-tex-rules\|publish-prints" --include="*.js" --include="*.html" --include="*.json" .
```

ブラウザで：

- 理解度確認テストの方針ヒントと解説モーダルが**Phase 2 と同じに動く**こと
- 未移行データセット（帝京・日大・推薦・総合）が従来通りであること
- コンソールエラーが無いこと（`static/config.json` の404はローカル固有で無関係）
- 印刷ページが単体で開き、印刷プレビューが正しいこと

## やらないこと

- **印刷ページの確認が終わる前の撤去。**
- **`prints/` の `.tex` の削除**（退避が既定。削除はユーザーの明示指示があるときだけ）。
- `docs/rikaido2507-print-fixes.md` の削除。
- MiKTeX のアンインストール。
- 解説データ（`*-solutions.js`）の変更。**Phase 2 で検証済みである。**
- コミット・push・デプロイ。**指示があるまで行わない。**

## 報告

印刷ページと撤去を分けて報告する。撤去したファイルの一覧、
`prints/` をどう扱ったか、参照の残りが無いことの確認結果、
**ブラウザと印刷プレビューで確認できた項目とできなかった項目**を明記する。
MiKTeX の要否についてユーザーの判断を仰ぐ。
