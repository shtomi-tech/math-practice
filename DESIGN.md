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

`voltagent/awesome-design-md` の「Nintendo.com (2001)」を土台にした Y2K コンソール調。ページ全体を **周辺機器の筐体**として扱い、周辺は周天色（ペリウィンクル・メタリック）のベゼル、要所だけを暖色（シグナルオレンジ／アンバー／ナビゴールド）で「進む・確認する」動線として立たせる。素のアクリルやガラス感（ぼかしシャドウ）は使わず、ハードエッジのベゼル（明るいハイライト＋硬い影線）で立体感を出す。

## Style Foundations

- **Visual style:** Y2K console chrome — beveled metal plates, carbon command slab, warm signal colors reserved for wayfinding/action
- **Typography scale:** 10 / 11 / 12 / 13 / 16 / 20 / 22 / 34
- **Typography fonts:** primary=Arial系サンセリフ、見出し・強調=Arial Black系、ラベル=JetBrains Mono
- **Typography weights:** 400 (本文), 700 (強調・ラベル), 900 (見出し・スコア表示)
- **Color palette:** carbon（筐体・本文）, periwinkle（背景）, chrome indigo（縁取り・準本文）, signal orange / amber / nav gold（行動喚起専用）, ok（緑）, danger（Nintendo Red）
- **Spacing scale:** 4 / 8 / 12 / 14 / 16 / 24
- **Radius:** 基本は 0〜2px（シャープ）。ロゴピルと丸ボタンだけ full radius。ぼかしシャドウの代わりにハードエッジのベゼル（`--bevel-plate` / `--bevel-dark`）を使う。

## Colors

CSS変数名は元の意味役割を保ったまま値だけ差し替えている（`--parchment` は「筐体の背景色」、`--clay` は「アクセント文字色」という役割は不変）。

- **Carbon Navy `--ink` (#21242e):** 本文・ダーク筐体（ナビ／得点パネル／既定ボタン背景）
- **Periwinkle Metallic `--parchment` (#7a8aba):** アプリ全体の背景（筐体）。halftoneドットを薄く重ねる
- **Pale Ice `--ice` (#c0d5e6):** 読み物面のライトな差し色（問題文ボックス・チップ・hover背景）。可読性を優先しここを地色にする
- **Chrome Indigo `--line` (#3d4f97):** ベゼルの縁取り・影線・リンク文字色（暖色は行動喚起専用に温存するため、リンクや小ラベルの強調はここを使う）
- **Muted Indigo `--muted` (#4d5487):** 低強調テキスト（白地での可読性を優先し、原典の値より濃色寄せ）
- **Signal Orange `--signal` (#f68d1f):** 提出・次へ進む等のCTAのみに使用（`.cta`）
- **Amber `--amber` (#ecab37):** ユーティリティチップ・タグ・バッジ
- **Nav Gold `--nav-gold` (#e48600):** ダーク面（carbon背景）専用のナビ文字色。白地では使わない（コントラスト不足のため）
- **White `--paper` (#ffffff):** カード・入力欄、ダーク面の上のテキスト
- **Success `--ok` (#16a34a):** 正解・完了
- **Nintendo Red `--ng` (#e60012):** 誤答・危険操作・警告

## Do's / Don'ts

- **Do:** すべての領域を「ベゼルの効いた1枚板」として扱う（白背景＋chrome-indigoの影線）。暖色（nav-gold/amber/signal）は「進む・実行する」動線だけに絞る。構造ラベル（GROUP・SOURCE・QUESTION 等）はJetBrains Mono・大文字・字間広めで統一する。角は基本シャープ、ロゴと丸ボタンだけ丸める。
- **Don't:** すべての角を均一に丸めない。ぼかしのドロップシャドウ（Material的な浮遊感）を使わない。signal/amberを装飾目的で使わない。実際に生徒が読む数式・解答欄のコントラストを犠牲にしない（原典のリンク文字色は暖色だが、本アプリでは可読性を優先しchrome indigoに置き換えている）。
