window.MATH_DATASETS = window.MATH_DATASETS || {};
const TANMON_GRID_PQR_FIGURE = String.raw`<svg class="solution-figure-svg" viewBox="0 0 420 270" role="img" aria-label="6列4行の格子状の道。左下がA、右上がB、途中の交点にP、Q、Rがある。"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M60 30V230 M110 30V230 M160 30V230 M210 30V230 M260 30V230 M310 30V230 M360 30V230 M60 30H360 M60 80H360 M60 130H360 M60 180H360 M60 230H360"/></g><g fill="currentColor"><circle cx="210" cy="180" r="4"/><circle cx="260" cy="80" r="4"/><circle cx="160" cy="80" r="4"/></g><g fill="currentColor" font-family="Arial, sans-serif" font-size="16"><text x="45" y="250" text-anchor="end">A</text><text x="370" y="25">B</text><text x="218" y="196">P</text><text x="268" y="76">Q</text><text x="168" y="76">R</text></g></svg>`;
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
    },
    {
      "group_number": "2",
      "title": "女子の端配置と非隣接配置",
      "subject": "数学",
      "unit": "単問演習 場合の数・確率",
      "topic_tag": "場合の数(順列・隣接条件)",
      "difficulty": 1,
      "source_name": "単問演習",
      "source_year": "自作類題",
      "stem_md": "男子5人と女子3人の計8人が一列に並ぶ。全員を区別するとき，次の問いに答えよ。",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "女子2人が左右の端にくる並び方は全部で $\\boxed{\\text{ア}}\\boxed{\\text{イ}}\\boxed{\\text{ウ}}\\boxed{\\text{エ}}$ 通りである。",
          "answer_fields": [
            {"format": "integer", "value": "4320", "boxes": ["ア", "イ", "ウ", "エ"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": "女子3人が互いに隣り合わない並び方は全部で $\\boxed{\\text{オ}}\\boxed{\\text{カ}}\\boxed{\\text{キ}}\\boxed{\\text{ク}}\\boxed{\\text{ケ}}$ 通りである。",
          "answer_fields": [
            {"format": "integer", "value": "14400", "boxes": ["オ", "カ", "キ", "ク", "ケ"]}
          ]
        }
      ]
    },
    {
      "group_number": "3",
      "title": "円卓での男女の並び方",
      "subject": "数学",
      "unit": "単問演習 場合の数・確率",
      "topic_tag": "場合の数(円順列・隣接条件)",
      "difficulty": 1,
      "source_name": "単問演習",
      "source_year": "自作類題",
      "stem_md": "男子4人 $A,B,C,D$ と女子4人 $E,F,G,H$ の計8人が円形のテーブルのまわりに座る。次の座り方は何通りあるか。",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "男子は男子，女子は女子でそれぞれ続いて座る。",
          "answer_fields": [
            {"format": "integer", "value": "576", "boxes": ["ア", "イ", "ウ"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": "男子と女子が交互に座る。",
          "answer_fields": [
            {"format": "integer", "value": "144", "boxes": ["エ", "オ", "カ"]}
          ]
        },
        {
          "label": "(3)",
          "stem_md": "$A$ と $E$ が隣り合って座る。",
          "answer_fields": [
            {"format": "integer", "value": "1440", "boxes": ["キ", "ク", "ケ", "コ"]}
          ]
        },
        {
          "label": "(4)",
          "stem_md": "$A$ と $E$ が隣り合わない。",
          "answer_fields": [
            {"format": "integer", "value": "3600", "boxes": ["サ", "シ", "ス", "セ"]}
          ]
        }
      ]
    },
    {
      "group_number": "4",
      "title": "男女から選ぶ組合せ",
      "subject": "数学",
      "unit": "単問演習 場合の数・確率",
      "topic_tag": "場合の数(組合せ・余事象)",
      "difficulty": 1,
      "source_name": "単問演習",
      "source_year": "自作類題",
      "stem_md": "男子9人と女子6人の計15人から4人を選ぶ。次の問いに答えよ。",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "4人の選び方は全部で $\\boxed{\\text{ア}}\\boxed{\\text{イ}}\\boxed{\\text{ウ}}\\boxed{\\text{エ}}$ 通りある。",
          "answer_fields": [
            {"format": "integer", "value": "1365", "boxes": ["ア", "イ", "ウ", "エ"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": "選んだ4人の中に少なくとも1人が女子である選び方は $\\boxed{\\text{オ}}\\boxed{\\text{カ}}\\boxed{\\text{キ}}\\boxed{\\text{ク}}$ 通りある。",
          "answer_fields": [
            {"format": "integer", "value": "1239", "boxes": ["オ", "カ", "キ", "ク"]}
          ]
        }
      ]
    },
    {
      "group_number": "5",
      "title": "重複する文字の並べ方",
      "subject": "数学",
      "unit": "単問演習 場合の数・確率",
      "topic_tag": "場合の数(重複順列・組合せ)",
      "difficulty": 1,
      "source_name": "単問演習",
      "source_year": "自作類題",
      "stem_md": "次の問いに答えよ。",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$RADAR$ の5文字をすべて横一列に並べるとき，文字列は全部で $\\boxed{\\text{ア}}\\boxed{\\text{イ}}$ 通りできる。",
          "answer_fields": [
            {"format": "integer", "value": "30", "boxes": ["ア", "イ"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": "$p,p,q,q,r,r$ の6個の文字をすべて選んで一列に並べるとき，並べ方は全部で $\\boxed{\\text{ウ}}\\boxed{\\text{エ}}$ 通りある。",
          "answer_fields": [
            {"format": "integer", "value": "90", "boxes": ["ウ", "エ"]}
          ]
        },
        {
          "label": "(3)",
          "stem_md": "$p,p,q,q,r,r$ の6個の文字から4個を選び，$p,q$ の文字だけが現れるように一列に並べるとき，並べ方は全部で $\\boxed{\\text{オ}}$ 通りある。",
          "answer_fields": [
            {"format": "integer", "value": "6", "boxes": ["オ"]}
          ]
        },
        {
          "label": "(4)",
          "stem_md": "$p,p,q,q,r,r$ の6個の文字から5個を選び，$p,q,r$ のすべての文字が現れるように一列に並べるとき，並べ方は全部で $\\boxed{\\text{カ}}\\boxed{\\text{キ}}$ 通りある。",
          "answer_fields": [
            {"format": "integer", "value": "90", "boxes": ["カ", "キ"]}
          ]
        }
      ]
    },
    {
      "group_number": "6",
      "title": "格子状の道の最短経路",
      "subject": "数学",
      "unit": "単問演習 場合の数・確率",
      "topic_tag": "場合の数(最短経路)",
      "difficulty": 1,
      "source_name": "単問演習",
      "source_year": "自作類題",
      "stem_md": "格子状の道について，最短の道順の数を求めよ。",
      "sub_problems": [
        {
          "label": "(1)",
          "figure": String.raw`<svg class="solution-figure-svg" viewBox="0 0 420 270" role="img" aria-label="6列4行の格子状の道。左下がA、右上がB。"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M60 30V230 M110 30V230 M160 30V230 M210 30V230 M260 30V230 M310 30V230 M360 30V230 M60 30H360 M60 80H360 M60 130H360 M60 180H360 M60 230H360"/></g><g fill="currentColor" font-family="Arial, sans-serif" font-size="16"><text x="45" y="250" text-anchor="end">A</text><text x="370" y="25">B</text></g></svg>`,
          "stem_md": "下の図のような道のある地域で，AからBまで行く最短の道順は何通りあるか。答えは $\\boxed{\\text{ア}}\\boxed{\\text{イ}}\\boxed{\\text{ウ}}$ 通りである。",
          "answer_fields": [
            {"format": "integer", "value": "210", "boxes": ["ア", "イ", "ウ"]}
          ]
        }
      ]
    },
    {
      "group_number": "7",
      "title": "経由点を通る最短経路",
      "subject": "数学",
      "unit": "単問演習 場合の数・確率",
      "topic_tag": "場合の数(最短経路・経由点)",
      "difficulty": 1,
      "source_name": "単問演習",
      "source_year": "自作類題",
      "stem_md": "経由点を通る最短の道順の数を求めよ。",
      "sub_problems": [
        {
          "label": "(1)",
          "figure": String.raw`<svg class="solution-figure-svg" viewBox="0 0 420 270" role="img" aria-label="6列4行の格子状の道。左下がA、右上がB、途中の交点にCがある。"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M60 30V230 M110 30V230 M160 30V230 M210 30V230 M260 30V230 M310 30V230 M360 30V230 M60 30H360 M60 80H360 M60 130H360 M60 180H360 M60 230H360"/></g><g fill="currentColor"><circle cx="260" cy="130" r="4"/></g><g fill="currentColor" font-family="Arial, sans-serif" font-size="16"><text x="45" y="250" text-anchor="end">A</text><text x="370" y="25">B</text><text x="268" y="145">C</text></g></svg>`,
          "stem_md": "下の図のような道のある地域で，AからCを経由してBまで行く最短の道順は何通りあるか。答えは $\\boxed{\\text{エ}}\\boxed{\\text{オ}}$ 通りである。",
          "answer_fields": [
            {"format": "integer", "value": "90", "boxes": ["エ", "オ"]}
          ]
        }
      ]
    },
    {
      "group_number": "8",
      "title": "複数の経由点と包除原理",
      "subject": "数学",
      "unit": "単問演習 場合の数・確率",
      "topic_tag": "場合の数(最短経路・包除原理)",
      "difficulty": 1,
      "source_name": "単問演習",
      "source_year": "自作類題",
      "stem_md": "図の点P，Q，Rについて，最短の道順の数を求めよ。",
      "sub_problems": [
        {
          "label": "(1)",
          "figure": TANMON_GRID_PQR_FIGURE,
          "stem_md": "下の図のような道のある地域で，AからBまで行く最短の道順は $\\boxed{\\text{カ}}\\boxed{\\text{キ}}\\boxed{\\text{ク}}$ 通りである。",
          "answer_fields": [
            {"format": "integer", "value": "210", "boxes": ["カ", "キ", "ク"]}
          ]
        },
        {
          "label": "(2)",
          "figure": TANMON_GRID_PQR_FIGURE,
          "stem_md": "下の図のような道のある地域で，AからPを経由してBまで行く最短の道順は $\\boxed{\\text{ケ}}\\boxed{\\text{コ}}$ 通りである。",
          "answer_fields": [
            {"format": "integer", "value": "80", "boxes": ["ケ", "コ"]}
          ]
        },
        {
          "label": "(3)",
          "figure": TANMON_GRID_PQR_FIGURE,
          "stem_md": "下の図のような道のある地域で，AからRを経由してBまで行く最短の道順は $\\boxed{\\text{サ}}\\boxed{\\text{シ}}$ 通りである。",
          "answer_fields": [
            {"format": "integer", "value": "50", "boxes": ["サ", "シ"]}
          ]
        },
        {
          "label": "(4)",
          "figure": TANMON_GRID_PQR_FIGURE,
          "stem_md": "下の図のような道のある地域で，AからPまたはQを経由してBまで行く最短の道順は $\\boxed{\\text{ス}}\\boxed{\\text{セ}}\\boxed{\\text{ソ}}$ 通りである。",
          "answer_fields": [
            {"format": "integer", "value": "149", "boxes": ["ス", "セ", "ソ"]}
          ]
        },
        {
          "label": "(5)",
          "figure": TANMON_GRID_PQR_FIGURE,
          "stem_md": "下の図のような道のある地域で，AからP，Q，Rの少なくとも1つを経由してBまで行く最短の道順は $\\boxed{\\text{タ}}\\boxed{\\text{チ}}\\boxed{\\text{ツ}}$ 通りである。",
          "answer_fields": [
            {"format": "integer", "value": "169", "boxes": ["タ", "チ", "ツ"]}
          ]
        }
      ]
    },
    {
      "group_number": "9",
      "title": "両方の集団を含む組合せ",
      "subject": "数学",
      "unit": "単問演習 場合の数・確率",
      "topic_tag": "場合の数(組合せ・余事象)",
      "difficulty": 1,
      "source_name": "単問演習",
      "source_year": "自作類題",
      "stem_md": "次の問いに答えよ。",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "スタッフ6人と利用者5人の中から4人の委員を選ぶとき，スタッフと利用者が少なくとも1人ずつ含まれる選び方は全部で $\\boxed{\\text{ア}}\\boxed{\\text{イ}}\\boxed{\\text{ウ}}$ 通りある。",
          "answer_fields": [
            {"format": "integer", "value": "310", "boxes": ["ア", "イ", "ウ"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": "大人7人と高校生6人から5人の班をつくるとき，大人と高校生が少なくとも1人ずつ含まれる選び方は全部で $\\boxed{\\text{エ}}\\boxed{\\text{オ}}\\boxed{\\text{カ}}\\boxed{\\text{キ}}$ 通りある。",
          "answer_fields": [
            {"format": "integer", "value": "1260", "boxes": ["エ", "オ", "カ", "キ"]}
          ]
        }
      ]
    },
    {
      "group_number": "10",
      "title": "2つの部屋への入れ方と鉛筆の分配",
      "subject": "数学",
      "unit": "単問演習 場合の数・確率",
      "topic_tag": "場合の数(積の法則・重複組合せ)",
      "difficulty": 1,
      "source_name": "福岡大・日本大",
      "source_year": "添付問題",
      "stem_md": "次の問いに答えよ。",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$a,b,c,d$ の4人を，2つの部屋 $A,B$ に入れるとき，空室があってもよい場合の入れ方は $\\boxed{\\text{ア}}\\boxed{\\text{イ}}$ 通りある。また，空室がない場合の入れ方は $\\boxed{\\text{ウ}}\\boxed{\\text{エ}}$ 通りある。（福岡大）",
          "answer_fields": [
            {"format": "integer", "value": "16", "boxes": ["ア", "イ"]},
            {"format": "integer", "value": "14", "boxes": ["ウ", "エ"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": "10本の同じ鉛筆を3人に分ける場合を考える。このとき，鉛筆を1本もらえない人がいてもよいとする場合の分け方は全部で $\\boxed{\\text{オ}}\\boxed{\\text{カ}}$ 通りある。また，どの人も必ず1本はもらえる場合の分け方は $\\boxed{\\text{キ}}\\boxed{\\text{ク}}$ 通りである。（日本大）",
          "answer_fields": [
            {"format": "integer", "value": "66", "boxes": ["オ", "カ"]},
            {"format": "integer", "value": "36", "boxes": ["キ", "ク"]}
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
