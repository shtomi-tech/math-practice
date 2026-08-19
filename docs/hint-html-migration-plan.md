# 解説のHTML化・方針ヒント実装計画

## 目的と決定

問題を解いている途中に、その小問の**方針だけ**をヒントとして確認できるようにする。

PDFは参照の粒度がページ単位で、この要件に構造的に合わない。
実際【I】は方針(5)が2ページ目にはみ出し、解答と同居している。
そのため **HTMLを正本とする（案1）** ことを 2026-08-19 に決定した。

- **`.tex` とPDFは役目を終える。**印刷が必要な場合はブラウザ印刷で代替する。
  LuaLaTeXの組版品質は得られなくなるが、これは承知のうえの選択である。
- 7本の `.tex` の内容（方針の文面、検算済みの解答、図の座標）は**そのまま移植元として使う**。
  内容は3回のレビューを経て検証済みなので、**書き直さず移す。**

## 設計

### 正本は「構造化データ」1つ

HTMLページを7枚作るのではなく、**小問単位の構造化データ**を正本にする。
これ1つから、(a) 方針ヒント、(b) 解説表示、(c) 印刷ページ の3つを作る。
HTMLページを正本にすると、方針だけを取り出すのに再びパースが要るため。

`static/rikaido2507-solutions.js`（新規）：

```js
window.MATH_SOLUTIONS = window.MATH_SOLUTIONS || {};
window.MATH_SOLUTIONS.rikaido_2507_beta = {
  "1-(1)": {
    approach: "分母を一つずつ有理化するより、求めたい $x+y$ と $xy$ を…",
    formula: { title: "対称式の基本変形", body: "$x^{2}+y^{2}=(x+y)^{2}-2xy$" },
    solution: "分母どうしの積は $(\sqrt{3}+\sqrt{2})(\sqrt{3}-\sqrt{2})=3-2=1$ である。…",
    answer: "$x+y=2\sqrt{3},\ xy=1,\ x^{2}+y^{2}=10$",
  },
  // …30小問
};
```

キーは既存の `detailKey(group, sub)` と同形（`"3-(3)"`）。
`formula` と `figure` は任意。【III】(3)〜(5) は【II】の該当キーを指す参照にする。

### KaTeX で `.tex` の本文をほぼそのまま使える

アプリは既にKaTeXを読み込んでいる。`renderMath()` に **`macros` を1つ足すだけ**で
`\bun` がそのまま通る。

```js
macros: { "\bun": "\dfrac{#1}{#2}" }
```

`\leqq`・`\geqq`・`\text{}`・`\vec{}`・`\triangle`・`\Longleftrightarrow`・`\Bigl\{`・`{}_3C_2`
はいずれもKaTeXが解釈する。**機械変換が要るのは次の2点だけ。**

- `\begin{align*}…\end{align*}` → `$$\begin{aligned}…\end{aligned}$$`
- `\hspace{\zw}$\cdots $\textgt{(答)}` → 削除し、`answer` フィールドへ移す

### 図3枚はSVGで描き直す

TikZは【I】の三角形、【IV】の放物線、【VI】の単位円の**3枚だけ**。
座標はすべて `.tex` にあり検証済みなので、そのままSVGに移す。

- 【I】：$A=(38/7,\ 8\sqrt5/7)$、$D=(14/3,0)$、$I=(5,\ \sqrt5/2)$
- 【IV】：$y=(t-1)^2-4$ を $-1\leqq t\leqq4$、頂点 $(1,-4)$、端点 $(-1,0)$
- 【VI】：単位円、$B=(0.8,0.6)$、$C=(-0.6,0.8)$、$O$ に直角記号

SVGは `currentColor` で描き、ダークテーマとの整合を保つ。図中に注記を書かない方針は踏襲する。

## UI

### 解答中：方針ヒント

小問カードの操作列に「**方針を見る**」を足す。

- **常時表示**とする。「解答を隠す」設定の対象外にする。方針は答えを含まないため。
- 押すと、その小問の `approach` と `formula` だけを表示する。**`solution` と `answer` は出さない。**
- カード内で開閉する（モーダルにしない）。解いている手を止めさせないため。
- 操作領域は44px以上、開閉状態は `aria-expanded` で伝える。

### 採点後：解説

既存の「解説を見る」モーダルの中身を差し替える。

- セクションは **問題 / 方針 / 解答** とする（答えは `solution` の末尾に含める）
- 現在のPDFリンクは廃止する

## 段階

**Phase 1：仕組みを作り、【I】だけ移植する**

1. `static/rikaido2507-solutions.js` に【I】の5小問を入れる
2. `renderMath()` に `macros` を追加
3. 小問カードに「方針を見る」を実装
4. 解説モーダルを 問題/方針/解答 に変更
5. 【I】の三角形をSVG化
6. ブラウザで確認（方針に答えが出ていないこと、数式が崩れていないこと、スマホ幅）

**ここで一度止めて確認する。**表示の形が決まってから残りを移す。

**Phase 2：【II】〜【VII】を移植**

`.tex` から機械抽出したうえで、**元のPDFと1問ずつ突き合わせる**。
特に次は3回のレビューで作り込んだ箇所なので、欠落しないこと。

- 【IV】(3)：$t=1\pm\sqrt{a+4}$、$t\geqq-1$ の吟味（$a>0$ で不適）、$x$ の個数対応
- 【VII】(4)：望遠鏡和の書き下しと、残る項の説明
- 【V】(3)(4)：ペアの選び方 $_3C_2=3$ の根拠
- 【I】(5)：$\angle ACD=\angle ACB$ から $CI$ が二等分線、という根拠

**Phase 3：印刷ページと後片付け**

1. 印刷用ページを1枚作る（大問単位、`@media print` でA4）
2. 撤去するもの：`static/prints/`、`static/print-sources.js`、`prints/`、
   `scripts/build-print.sh`、`scripts/publish-prints.sh`、`scripts/check-tex-rules.js`（＋test）、
   `scripts/migrate-rikaido-print-data.js`
3. `.gitignore` の `/prints/` を削除
4. 関連文書を整理：`rikaido2507-print-plan.md`、`-fixes.md`、`-expansion.md`、
   `solution-print-migration-plan.md`、`-instructions.md`
5. `rikaido-solutions` スキルの LuaLaTeX 章を削除し、MiKTeX の要否を判断する

**Phase 3 は Phase 2 の確認が終わるまで着手しない。**PDFが唯一の検証済み参照物なので、
移植の突き合わせが済むまで消さない。

## 検証

```bash
node --check static/app.js
node scripts/check-exam.js
node scripts/check-solution-modal.js
```

`check-solution-modal.js` は見出しの契約を検証しているので、**書き換えが要る**。

ブラウザで確認する項目：

- 「方針を見る」に**答えが出ていないこと**（最重要）
- 「解答を隠す」設定を有効にしても方針は見られること
- 採点後の解説に 問題/方針/解答 が出ること
- 数式が崩れていないこと（特に `\bun`、`aligned`、場合分けの表）
- SVG図がライト・ダーク両方で読めること
- スマホ幅で方針が読めること
- 日大など**他データセットが従来通り**であること

## 保留

- 他データセット（帝京・日大・推薦・総合・ミニ試験）への展開は Phase 3 完了後に判断する。
  データ形式が同じなので、`MATH_SOLUTIONS` に追記すれば同じUIが使える。
- ミニ試験は別フローで結果画面が解説を出している。今回の対象外。
