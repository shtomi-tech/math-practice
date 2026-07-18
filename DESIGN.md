---
name: Nintendo 2001
colors:
  primary: "#21242e"
  secondary: "#7a8aba"
  success: "#16A34A"
  warning: "#ecab37"
  danger: "#e60012"
  surface: "#FFFFFF"
  text: "#21242e"
  neutral: "#FFFFFF"
typography:
  h1:
    fontFamily: "Arial Black"
    fontSize: 1.375rem
  body-md:
    fontFamily: "Arial"
    fontSize: 1rem
  label-caps:
    fontFamily: "JetBrains Mono"
    fontSize: 0.6875rem
  sourceScale: "10/11/12/13/16/20/22/34"
  weights: "400, 700, 900"
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  full: 9999px
spacing:
  sm: 8px
  md: 12px
  sourceScale: "4/8/12/14/16/24"
---

## Overview

`C:\Users\shtom\dev\awesome-design-md\design-md\nintendo-2001\DESIGN.md`（正本）を土台にした Y2K コンソール調。ページ全体を **周辺機器の筐体**として扱い、周辺は周天色（ペリウィンクル・メタリック）のベゼル、要所だけを暖色（シグナルオレンジ／アンバー／ナビゴールド）で「進む・確認する」動線として立たせる。素のアクリルやガラス感（ぼかしシャドウ）は使わず、ハードエッジのベゼル（明るいハイライト＋硬い影線）で立体感を出す。最大級のパネルだけ角を45°に面取り（チャンファー）し、量産された筐体の質感を出す。

## Style Foundations

- **Visual style:** Y2K console chrome — 二段ナビ（carbonの一段目＋pale skyの二段目）、beveled metal plates、チャンファー角、carbon command slab、暖色は行動喚起専用
- **Typography scale:** 10 / 11 / 12 / 13 / 16 / 20 / 22 / 34
- **Typography fonts:** primary=Arial系サンセリフ、見出し・強調=Arial Black系、ラベル=JetBrains Mono
- **Typography weights:** 400 (本文), 700 (強調・ラベル), 900 (見出し・スコア表示)
- **Color palette:** carbon（筐体・本文）, periwinkle / canvas-soft / periwinkle-light（背景の3階調）, chrome indigo / hairline（縁取り・準本文）, platinum（リスト行）, signal orange / amber / nav gold（行動喚起専用）, ok（緑）, danger（Nintendo Red）
- **Spacing scale:** 4 / 8 / 12 / 14 / 16 / 24
- **Radius:** 基本は 0〜2px（シャープ）。ロゴ相当の要素と丸ボタンだけ full radius。最大級のパネル（`.chamfer`）は45°面取り、それ以外はぼかしシャドウの代わりにハードエッジのベゼル（`--bevel-plate` / `--bevel-dark`）を使う。

## Colors

CSS変数名は元の意味役割を保ったまま値だけ差し替えている（`--parchment` は「筐体の背景色」、`--clay` は「アクセント文字色」という役割は不変）。

- **Carbon Navy `--ink` (#21242e):** 本文・ダーク筐体（ナビ／得点パネル／既定ボタン背景）
- **Periwinkle Metallic `--parchment` (#7a8aba):** アプリ全体の背景（筐体）。halftoneドットを薄く重ねる
- **Pale Sky `--canvas-soft` (#9fbee7):** 二段目のサブナビ帯（出典・進捗のコンテキストバー）
- **Light Periwinkle `--periwinkle-light` (#8ba1d4):** 一段浮いた中間パネル（現状は将来の拡張用に予約）
- **Pale Ice `--ice` (#c0d5e6):** 読み物面のライトな差し色（問題文ボックス・チップ・hover背景）。可読性を優先しここを地色にする
- **Platinum Gray `--platinum` (#dedede):** リスト行の地色（大問一覧・採点結果一覧）。hover/activeは`--ice`へ
- **Chrome Indigo `--line` (#3d4f97):** パネルのベゼル影線・パネル外枠・リンク文字色（暖色は行動喚起専用に温存するため、リンクや小ラベルの強調はここを使う）
- **Hairline `--hairline` (#5a5f8c):** 入力欄の縁取り・ドット罫線（chrome indigoより一段軽いコントラスト）
- **Muted Indigo `--muted` (#4d5487):** 低強調テキスト（白地での可読性を優先し、原典の値より濃色寄せ）
- **Signal Orange `--signal` (#f68d1f):** 提出・次へ進む等のCTAのみに使用（`.cta`）
- **Amber `--amber` (#ecab37):** ユーティリティチップ・タグ・バッジ（`生徒・設定`ボタン等）
- **Nav Gold `--nav-gold` (#e48600):** ダーク面（carbon背景）専用のナビ文字色・ボタンのpressed状態。白地では使わない（コントラスト不足のため）
- **White `--paper` (#ffffff):** カード・入力欄、ダーク面の上のテキスト
- **Success `--ok` (#16a34a):** 正解・完了
- **Nintendo Red `--ng` (#e60012):** 誤答・危険操作・警告

## Layout

- **二段ナビ**: `.topbar`がcarbon地・halftone・nav-gold文字の一段目（primary bar）。直下の`.contextbar`が`--canvas-soft`のサブナビ帯（二段目）で、負のマージンで筐体の余白いっぱいにブリードする。
- **チャンファー角**: `.chamfer`ユーティリティ（`clip-path`で対角2隅を14px面取り）を、最大級のパネルだけに適用する（大問パネル・問題文ボックス・得点/タイマーパネル）。チャンファーした要素は`border`を外し、ベゼルの影線だけで縁を表現する（斜め辺に沿ってborderが引けないCSSの制約のため）。
- **リスト行はplatinum**: 大問一覧・採点結果一覧などの「行」はplatinum地、hover/activeで`--ice`に変わる。読み物の平面（`--ice`）・カード（`--paper`）・リスト行（`--platinum`）を役割で描き分ける。

## Do's / Don'ts

- **Do:** すべての領域を「ベゼルの効いた1枚板」として扱う（白背景＋chrome-indigoの影線）。暖色（nav-gold/amber/signal）は「進む・実行する」動線だけに絞る。構造ラベル（GROUP・SOURCE・QUESTION 等）はJetBrains Mono・大文字・字間広めで統一する。角は基本シャープ、最大級のパネルだけ面取りする。
- **Don't:** すべての角を均一に丸めない。ぼかしのドロップシャドウ（Material的な浮遊感）を使わない。signal/amberを装飾目的で使わない。実際に生徒が読む数式・解答欄のコントラストを犠牲にしない（原典のリンク文字色は暖色だが、本アプリでは可読性を優先しchrome indigoに置き換えている）。
