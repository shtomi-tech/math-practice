window.MATH_DATASETS = window.MATH_DATASETS || {};
window.MATH_DATASETS.tanmon_ippan = {
  "source_file_summary": {
    "notes": "全レベル問題集①基礎レベル の問題タイプを参考にした自作類題。原文は転載していない。"
  },
  "problem_groups": [
    {
      "group_number": "1",
      "title": "0を含む数字から作る3桁の整数",
      "subject": "数学",
      "unit": "単問演習 場合の数・確率",
      "topic_tag": "場合の数(順列・倍数条件)",
      "difficulty": 1,
      "source_name": "単問演習",
      "source_year": "自作類題",
      "stem_md": "7個の数字 $0,1,2,3,4,5,6$ の中から異なる3個の数字を選んで3桁の整数をつくる。",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "できる3桁の整数は全部で $\\boxed{\\text{ア}}\\boxed{\\text{イ}}\\boxed{\\text{ウ}}$ 個ある。",
          "answer_fields": [
            {"format": "integer", "value": "180", "boxes": ["ア", "イ", "ウ"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": "そのうち5の倍数となる整数は $\\boxed{\\text{エ}}\\boxed{\\text{オ}}$ 個ある。",
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
