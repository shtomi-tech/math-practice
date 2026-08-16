# 数学演習（math-practice）

大学の数学過去問演習と、オリジナルの数学ミニ試験を1画面で切り替えて使う静的アプリです。旧 `teikyo-kakomon` と旧 `math-mini-exam` を統合しました（1エンジン・1ページ構成）。

問題を自作・追加するときは、[`docs/problem-authoring-principles.md`](docs/problem-authoring-principles.md) を作問基準として参照してください。ミニ試験の参考資料との対応と独自化方針は [`docs/problem-source-map.md`](docs/problem-source-map.md) で先に確定します。

- **演習モード（過去問）**: **学校（出典）→ 方式・年度**の2階層で切り替え。帝京大学（総合型／学校推薦型）・日本大学（N全学統一方式第1期 2026）・理解度確認テスト（2025年7月 βコース）を収録。小問ごとの採点・詳細解説・進捗保存に対応。
- **試験モード（ミニ試験）**: 学校切替で「数学ミニ試験」を選ぶと、30分・100点の模擬試験に切り替わる。試験中は正誤・解説を出さず、提出後に採点と解説を表示。タイマー・クリック式テンキー対応。現在は第1回〜第5回を公開している。第4回・第5回は数と式・1次不等式、2次関数、集合と論理、場合の数、確率の5分野で構成する。
- **演習セットカタログ**: 「出典を変える／回を変える」を開くと、全11セットを学校→方式・年度／試験回の順に確認できる。過去問は未着手・学習中・完了、ミニ試験は未受験・保存中・受験済み（前回得点）を既存の端末保存・クラウド保存から都度表示する。
- **大問Unitカード**: 現在の大問一覧には、番号、題名、小問数、状態、進捗、次の操作を表示する。過去問は入力中も区別し、ミニ試験中は未回答・回答中・回答済みだけを表示して正誤・得点を隠す。

## 公開

GitHub Pages公開版があります。

```text
https://shtomi-tech.github.io/math-practice/
```

URLパラメータで直接開けます。`?exam=sougou` などの過去問キーに加え、`?exam=mini_01` で第1回ミニ試験、`?exam=mini_02` で第2回、`?exam=mini_03` で第3回、`?exam=mini_04` で第4回、`?exam=mini_05` で第5回を表示します。旧 math-mini-exam のURLからは転送されます。

ポータルで発行した生徒別共有URLでは、進捗・解答下書き・受験結果を共通Supabaseへ保存します。通常URLでは従来どおり端末内の生徒選択と `localStorage` を使います。Supabaseの保存先appIdは統合前と互換です（過去問: `teikyo-kakomon`、ミニ試験: `math-mini-exam` / `math-mini-exam:mini_02`）。

## 学校・方式の追加（演習モード）

コード（`static/app.js`）を書き換えずに、データファイルを読み込むだけで出典を増やせます。

1. `static/<school>-data.js` を作り、`window.MATH_DATASETS` に一意なキーで問題データを登録する。

   ```js
   window.MATH_DATASETS = window.MATH_DATASETS || {};
   window.MATH_DATASETS["waseda_2026"] = { problem_groups: [ /* ... */ ] };
   ```

2. 学校を1つ増やすときは `window.MATH_SCHOOLS` に追記する（帝京は既定で含まれる）。

   ```js
   window.MATH_SCHOOLS = (window.MATH_SCHOOLS || []).concat([{
     id: "waseda",
     name: "早稲田大学",
     eyebrow: "WASEDA UNIVERSITY / MATH",
     exams: [
       { key: "waseda_2026", label: "一般選抜 2026", shortLabel: "2026", sourceTitle: "2026 一般選抜", sourceText: "理工 数学" },
     ],
   }]);
   ```

3. 詳細解説を足すときは `window.MATH_DETAIL_TEXTS` にキー `"<group_number>-<label>"` の配列で登録する。

   ```js
   window.MATH_DETAIL_TEXTS.waseda_2026 = {
     "1-(1)": ["立式する", "計算する", "空欄に合わせる"]
   };
   ```

4. `index.html` の `<script defer>` に作成したデータファイルを追加する。

- `exam.key` は DATASETS 内で一意にすること（進捗の保存キーを兼ねるため）。ミニ試験のキー（`mini_01` など）とも衝突不可。
- 学校が1つだけのときは学校切替パネルは自動的に隠れる。

## ミニ試験の回の追加（試験モード）

問題を作る前に、`docs/problem-source-map.md` で参考資料の問題番号と独自化方針を割り当てます。その後、`static/mini-data.js` の `window.MINI_EXAMS` に回を追加します。`numeric`、`choice`、`multi` の3形式に対応しています。各回の合計点が100点、想定時間が30分になるよう調整してください。

- 問題は参考PDFの問題文を転載せず、問題タイプだけを参考にして新規作成します。
- 回のIDが `mini_01` 以外の場合、クラウド保存先は `math-mini-exam:<id>` になります（受験状態・採点結果は回ごとに分離）。

## 検証

```text
node scripts/check-no-common-hints.js # 共通ヒントの削除状態
node scripts/check-solution-modal.js  # 解説モーダルの表示区分
node scripts/check-exam.js    # ミニ試験の配点・問題数
node --check static/app.js
```

## 実行

静的ファイルなので、リポジトリ直下で次のように起動できます。

```text
py -m http.server 8000
```

数式表示はKaTeX CDNを利用しているため、初回表示時はインターネット接続が必要です。

カタログは独立したランディングページではなく、問題画面上部の折りたたみパネルです。問題画面・URLパラメータ・保存キー・Supabase appIdは従来どおりで、完了後や採点後の「次の学習を選ぶ／別の演習を選ぶ」から同じパネルを開けます。

## 運用

問題データを更新した場合は、公開版、ポータル、QRコードのリンクを確認します。
