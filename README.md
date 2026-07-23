# 数学演習（math-practice）

大学の数学過去問演習と、オリジナルの数学ミニ試験を1画面で切り替えて使う静的アプリです。旧 `teikyo-kakomon` と旧 `math-mini-exam` を統合しました（1エンジン・1ページ構成）。

- **演習モード（過去問）**: **学校（出典）→ 方式・年度**の2階層で切り替え。帝京大学（総合型／学校推薦型）・日本大学（N全学統一方式第1期 2026）・理解度確認テスト（2025年7月 βコース）を収録。段階ヒント・小問ごとの採点・進捗保存に対応。
- **試験モード（ミニ試験）**: 学校切替で「数学ミニ試験」を選ぶと、30分・100点の模擬試験に切り替わる。試験中は正誤・解説を出さず、提出後に採点と解説を表示。タイマー・クリック式テンキー対応。全6回構成を予定し、現在は第1回・第2回を公開。

## 公開

GitHub Pages公開版があります。

```text
https://shtomi-tech.github.io/math-practice/
```

URLパラメータで直接開けます。`?exam=sougou` などの過去問キーに加え、`?exam=mini_01` で第1回ミニ試験、`?exam=mini_02` で第2回を表示します。旧 math-mini-exam のURLからは転送されます。

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

3. 段階ヒント（詳しい解き方）を足すときは `window.MATH_DETAIL_TEXTS` にキー `"<group_number>-<label>"` の配列で登録する。

   方針を個別に指定する場合は、問題データの小問に `hint_strategy` を追加する。省略した場合は `static/hint-strategies.js` が `learning_points` または単元タグから自動生成する。

   ```js
   "hint_strategy": {
     "summary": "使う考え方と処理の順番を先に決める。",
     "roadmap": ["条件を整理する", "公式を適用する", "元の条件で確認する"]
   }
   ```

   詳細ヒントは従来の配列形式に加えて、次の構造化形式にも対応する。

   ```js
   "1-(1)": {
     "strategy": ["条件を整理する", "公式を適用する", "答えを確認する"],
     "steps": ["立式する", "計算する", "空欄に合わせる"]
   }
   ```

   小問データに `learning_points` の配列を追加すると、詳細解説に「この問題から学べること」を表示できる。

4. `index.html` の `<script defer>` に作成したデータファイルを追加する。

- `exam.key` は DATASETS 内で一意にすること（進捗の保存キーを兼ねるため）。ミニ試験のキー（`mini_01` など）とも衝突不可。
- 学校が1つだけのときは学校切替パネルは自動的に隠れる。

## ミニ試験の回の追加（試験モード）

問題を作る前に、`docs/problem-source-map.md` で参考資料の問題番号と独自化方針を割り当てます。その後、`static/mini-data.js` の `window.MINI_EXAMS` に回を追加します。`numeric`、`choice`、`multi` の3形式に対応しています。各回の合計点が100点、想定時間が30分になるよう調整してください。

- 問題は参考PDFの問題文を転載せず、問題タイプだけを参考にして新規作成します。
- 回のIDが `mini_01` 以外の場合、クラウド保存先は `math-mini-exam:<id>` になります（受験状態・採点結果は回ごとに分離）。

## 検証

```text
node scripts/check-hints.js   # 演習モードのヒント方針
node scripts/check-exam.js    # ミニ試験の配点・問題数
node --check static/app.js
```

## 実行

静的ファイルなので、リポジトリ直下で次のように起動できます。

```text
py -m http.server 8000
```

数式表示はKaTeX CDNを利用しているため、初回表示時はインターネット接続が必要です。

## 運用

問題データを更新した場合は、公開版、ポータル、QRコードのリンクを確認します。
