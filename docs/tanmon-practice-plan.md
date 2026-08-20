# 単問演習（場合の数・確率）追加計画

トライ 高校版の配信画面で出題された1問（出典: 大学入試 全レベル問題集 数学I+A+II+B+ベクトル ①基礎レベル）を、
`math-practice` の演習モードに「単問演習」として追加する計画。公開リポジトリのため**原文は転載せず数字を変えた類題**にする。

## 方針

- 1問ごとに exam を作らない（カタログが破裂するため）。出典「単問演習」を1つ作り、分野ごとに exam を切る。
- 今回は exam `tanmon_ippan`（ラベル: 場合の数・確率）。以後の追加問題は `problem_groups` に大問を1個ずつ足すだけ。
- `static/app.js` の改修は不要。データファイル＋登録行のみ。

## 出題内容（類題化後）

> 7個の数字 0, 1, 2, 3, 4, 5, 6 の中から異なる3個の数字を選んでできる3桁の整数は全部で □ 個ある。
> また、そのとき5の倍数となる整数は □ 個ある。

原題は「6個の数字 0〜5 から異なる3個」（答え 100 個 / 36 個）。数字の個数を7個に変更した。

### 検算

- 3桁の整数: 百の位は 0 以外で 6 通り、十の位は残り 6 通り、一の位は残り 5 通り → 6×6×5 = **180**
- 5の倍数（一の位が 0 または 5）
  - 一の位 0: 百の位 6 通り（1〜6）× 十の位 5 通り = 30
  - 一の位 5: 百の位 5 通り（0,5 を除く 1,2,3,4,6）× 十の位 5 通り = 25
  - 合計 **55**

## 作業手順

### 1. `static/tanmon-data.js`（新規）

```js
window.MATH_DATASETS = window.MATH_DATASETS || {};
window.MATH_DATASETS.tanmon_ippan = {
  "source_file_summary": { "notes": "全レベル問題集①基礎レベル の問題タイプを参考にした自作類題。原文は転載していない。" },
  "problem_groups": [
    {
      "group_number": "1",
      "title": "0を含む数字から作る3桁の整数",
      "subject": "数学",
      "unit": "単問演習 場合の数・確率",
      "topic_tag": "場合の数(順列・倍数条件)",
      "difficulty": 1,
      "source_name": "単問演習（自作類題）",
      "stem_md": "7個の数字 $0,1,2,3,4,5,6$ の中から異なる3個の数字を選んで3桁の整数をつくる。",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "できる3桁の整数は全部で $\boxed{ア}\boxed{イ}\boxed{ウ}$ 個ある。",
          "answer_fields": [
            {"format": "integer", "value": "180", "boxes": ["ア", "イ", "ウ"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": "そのうち5の倍数となる整数は $\boxed{エ}\boxed{オ}$ 個ある。",
          "answer_fields": [
            {"format": "integer", "value": "55", "boxes": ["エ", "オ"]}
          ]
        }
      ]
    }
  ]
};

window.MATH_SCHOOLS = (window.MATH_SCHOOLS || []).concat([{
  id: "tanmon",
  name: "単問演習",
  eyebrow: "TANMON / MATH",
  exams: [
    {
      key: "tanmon_ippan",
      label: "場合の数・確率",
      shortLabel: "場合の数",
      sourceTitle: "単問演習",
      sourceText: "場合の数・確率",
    },
  ],
}]);
```

### 2. `static/tanmon-solutions.js`（新規・解説は新方式）

`window.MATH_SOLUTIONS.tanmon_ippan` に `"1-(1)"` / `"1-(2)"` を登録する。
各値は `{ approach, formula, solution, answer }`（`String.raw` 必須、分数は `\bun{}{}` マクロ）。書式は
`static/rikaido2507-solutions.js` に合わせる。

- `1-(1)`: 先頭が0にならない条件だけ別扱いにする、という着眼。積の法則で 6×6×5。
- `1-(2)`: 一の位を先に決めて 0 と 5 で場合分け。一の位が5のときだけ百の位から0が除かれる（重複しない分割）。

### 3. 読み込み登録

- `index.html` の `<script defer>` 群に2行追加（`tanmon-data.js` → `tanmon-solutions.js` の順）。
- 印刷ページも使うなら `print.html` の同じ位置にも2行追加する。

### 4. 検証（最低限）

```bash
node --check static/tanmon-data.js
node --check static/tanmon-solutions.js
node --check static/app.js
node scripts/check-solution-modal.js
```

`?exam=tanmon_ippan` で直接開けることと、小問ごとの採点・解説モーダルが出ることを1回だけ確認する。

## 留意点

- `exam.key` は `DATASETS` 内で一意（進捗保存キーを兼ねる）。`tanmon_ippan` は既存キーと衝突しない。
- 分野が増えたら `exams` に `tanmon_nijikansu` などを足し、対応する `MATH_DATASETS` キーを増やす。
- 今後の追加問題も、出典が市販教材の場合は数字・設定を変えた類題として登録する。
