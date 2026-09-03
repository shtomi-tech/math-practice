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
  cta:
    fontFamily: "Arial"
    fontSize: 1rem
    minHeight: 48px
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
  gutter: 24px
  card: 24px
  cardInner: 16px
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
- **Muted Indigo `--muted` (#4d5487):** 低強調テキスト（白地での可読性を優先し、原典の値より濃色寄せ）。白地で7.16:1
- **Muted on Soft `--muted-on-soft` (#3a4070):** `--canvas-soft`（二段目の帯）の上の低強調テキスト。`--muted`は同面で3.75:1とAA未達のため、この面だけ差し替える（5.12:1）。`.contextbar`が`--muted`をこの値へ再定義するので、帯の中では変数名を変えずに済む
- **Line on Soft `--line-on-soft` (#2e3b73):** `--canvas-soft`の上のリンク・操作文字。`--line`は同面で3.98:1のため差し替える（5.53:1）
- **Signal Orange `--signal` (#f68d1f):** 提出・次へ進む等のCTAのみに使用（`.cta`）
- **Amber `--amber` (#ecab37):** ユーティリティチップ・タグ・バッジ（`生徒・設定`ボタン等）
- **Nav Gold `--nav-gold` (#e48600):** ダーク面（carbon背景）専用のナビ文字色・ボタンのpressed状態。白地では使わない（コントラスト不足のため）
- **White `--paper` (#ffffff):** カード・入力欄、ダーク面の上のテキスト
- **Success `--ok` (#16a34a):** 正解・完了
- **Success text `--ok-text` (#0f7a35):** 白地上の正解・完了文字。`--ok`は背景と罫線に限定する
- **Nintendo Red `--ng` (#e60012):** 誤答・危険操作・警告

## Layout

- **二段ナビ**: `.topbar`がcarbon地・halftone・nav-gold文字の一段目（primary bar）。直下の`.contextbar`が`--canvas-soft`のサブナビ帯（二段目）で、負のマージンで筐体の余白いっぱいにブリードする。
- **共有グリッド**: 幅の計算式は`--page-max`(1280px)・`--page-gutter`(24px / 760px以下は16px)・`--space-card`(24px)の1組だけを使う。`.topbar`・`.contextbar`・`.shell`がこの同じ組を参照するため、どの画面幅でも左右レールが1本に揃う。`.topbar`と`.shell`は`max-width: var(--page-max)`＋`margin-inline: auto`で、広い画面では筐体ごと中央に寄る。`.contextbar`の負のマージンも`calc(-1 * var(--page-gutter))`で連動させる。列構成はデスクトップ`280px minmax(0, 1fr) 320px`、1080px以下は`240px minmax(0, 1fr)`、760px以下は1列。試験導入・結果は`calc(100% - var(--page-gutter) * 2)`で同じ左右レールに乗せる（最大幅は結果1100px・導入760pxの例外を保つ）。
- **余白の3段階**: 「別のまとまり」＝`--space-card` 24px（列間・カード間・画面端）、「同じカードの中」＝16px（`.panel`のpadding）、「見出しと直後の本文」＝14px、「密接な列挙」＝8px（`.group-list`）。カード内(16)よりカード間(24)を必ず広くし、罫線を足さずに余白だけでまとまりを判別できる状態を保つ。
- **共有タイポグラフィ**: 本文16px、構造ラベル11px mono、見出しは16/20/22px、CTAは16px・700・最小48px。結果の得点56pxだけは表示専用の例外とする。
- **チャンファー角**: `.chamfer`ユーティリティ（`clip-path`で対角2隅を14px面取り）を、最大級のパネルだけに適用する（大問パネル・問題文ボックス・得点/タイマーパネル）。チャンファーした要素は`border`を外し、ベゼルの影線だけで縁を表現する（斜め辺に沿ってborderが引けないCSSの制約のため）。
- **リスト行はplatinum**: 大問一覧・採点結果一覧などの「行」はplatinum地、hover/activeで`--ice`に変わる。読み物の平面（`--ice`）・カード（`--paper`）・リスト行（`--platinum`）を役割で描き分ける。

## Learning Catalog and Unit States

- source pickerは独立画面ではなく、既定で閉じたままの全15演習セットカタログである。学校カード、方式・年度／試験回カード、大問Unitカードの順に情報を近接させる。
- 学校カードは利用可能セット数と集計（過去問の未着手／学習中／完了、ミニ試験の未受験／保存中／受験済み）を示し、方式・年度／試験回カードは2桁番号、モード、問題数、状態、進捗、次操作を示す。
- 過去問のセット状態は「未着手・学習中・完了」、大問状態は「未着手・入力中・学習中・完了」とする。ミニ試験のセット状態は「未受験・保存中・受験済み」、試験中の大問状態は「未回答・回答中・回答済み」とする。
- 状態は色だけに依存させず、必ず状態語彙と進捗数値を併記する。完了の緑は補助表現であり、入力中・保存中の暖色装飾は使わない。
- 選択中の教材・大問は`aria-selected`／`aria-current`と文言で示す。signal orangeは開始・続行・提出などの主CTA専用とする。
- カタログはデスクトップから760pxまでは2列、390px未満では1列へ落とす。長いタイトルだけを省略し、状態・進捗・操作文言は省略しない。

## Do's / Don'ts

- **Do:** すべての領域を「ベゼルの効いた1枚板」として扱う（白背景＋chrome-indigoの影線）。暖色（nav-gold/amber/signal）は「進む・実行する」動線だけに絞る。構造ラベル（GROUP・SOURCE・QUESTION 等）はJetBrains Mono・大文字・字間広めで統一する。角は基本シャープ、最大級のパネルだけ面取りする。
- **Do:** 操作できる要素（`button` / `input` / `select` / `summary` / `a` / `.cell` / `.group-item`）は必ず同じフォーカスリング（`2px solid var(--ink)` / offset 2px）にし、主要な操作領域は44px以上を確保する。carbon地の一段目（`.top-actions`）だけリング色を`--paper`にし、その上に開く白地のドロップダウン内は`--ink`へ戻す。
- **Don't:** すべての角を均一に丸めない。ぼかしのドロップシャドウ（Material的な浮遊感）を使わない。signal/amberを装飾目的で使わない。実際に生徒が読む数式・解答欄のコントラストを犠牲にしない（原典のリンク文字色は暖色だが、本アプリでは可読性を優先しchrome indigoに置き換えている）。`white-space: nowrap`で溢れを隠さない（単元名などの可変長ラベルは折り返して全文を見せる）。同じ役割のボタンを、列幅が足りずにラベルが2行折返しになる並びへ入れない（高さが割れる）。

## Role → Style（再利用ルール）

新しい要素を足すときは、まずこの表の役割に当てはめる。当てはまらない場合だけ新しい行を足す。

| 役割 | セレクタ | 地色 | 縁 | 文字 | 最小高 | 備考 |
| --- | --- | --- | --- | --- | --- | --- |
| 主CTA | `.cta` | `--signal` | signal 1px | `--ink` / 700 / 16px | 48px | 1画面に1つだけ |
| 副ボタン | `.ghost` | 透明 | `--ink` 1px | `--ink` / 400 / 16px | 44px | 2行折返しになる列幅へ入れない |
| 確認ボタン | `.sub-check-button.primary` | `--ink` | ink 1px | `--paper` / 400 | 44px | 小問ごとに1つ。CTAとは太さで区別 |
| 危険操作 | `.ghost.danger` | 透明 | `--ng` 1px | `--ng` | 44px | `.danger-zone`に置く |
| 開閉トグル | `summary` | 役割ごと | 役割ごと | 役割ごと | **44px** | `display: inline-flex; align-items: center` |
| リスト行 | `.group-item` | `--platinum` | `--line` 1px | `--ink` | 76px | active/hoverで`--ice`＋ink縁 |
| カタログカード | `.exam-option` | `--paper` | `--line` 1px | `--ink` | — | activeで`--ice`＋ink縁 |
| バッジ | `.badge` | `--ice` | `--ink` 1px | `--ink` / 11px mono | — | `max-width: 100%`で折り返す。nowrap禁止 |
| フォーカス | 上記すべて | — | `2px solid var(--ink)` / offset 2px | — | — | carbon地の`.top-actions`のみ`--paper` |
