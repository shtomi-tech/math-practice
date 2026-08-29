window.MATH_DATASETS = window.MATH_DATASETS || {};
window.MATH_DATASETS.rikaido_2507_beta = {
  "source_file_summary": {
    "detected_pages": 8,
    "notes": "トライ 高3 理解度確認テスト（2025年度7月）数学βコース I〜VII。冊子内の【II】【III】は科目選択（数学I・II・A／数学I・II・A・B・Cの別）で、(3)(4)(5)は共通問題のため別大問として重複収録している。原典は結果のみを記す記述式・空所補充だが、式・不等式・場合分けそのものが答えになる9問（I(2)、II/III(3)(4)(5)、IV(2)(3)、VI(3)、VII(3)(4)）は本人希望によりマーク式（4択・選択肢番号を1マスに入力）へ作り替え。誤答選択肢は模範解答の典型的な計算ミスを想定してAIが作成したものなので要確認。マス目は1マス1文字（符号込み）で、2桁以上の値は\\boxed{}を桁数分並べている。"
  },
  "problem_groups": [
    {
      "group_number": "1",
      "page_numbers": [1],
      "title": "【I】小問集合（対称式・絶対値不等式・データの平均・確率・角の二等分線）",
      "subject": "数学",
      "unit": "理解度確認テスト(2025年7月) βコース 共通問題",
      "topic_tag": "数と式・データの分析・確率・図形と計量",
      "difficulty": 2,
      "source_name": "理解度確認テスト",
      "source_year": "2025年7月",
      "stem_md": "《共通問題》次の問いに答えよ。(40点)",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$x=\\dfrac{1}{\\sqrt{3}+\\sqrt{2}}$，$y=\\dfrac{1}{\\sqrt{3}-\\sqrt{2}}$ とする。このとき，$x+y=\\boxed{1}\\sqrt{3}$，$xy=\\boxed{2}$，$x^{2}+y^{2}=\\boxed{3}\\boxed{4}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["1"]},
            {"format": "integer", "value": "1", "boxes": ["2"]},
            {"format": "integer", "value": "1", "boxes": ["3"]},
            {"format": "integer", "value": "0", "boxes": ["4"]}
          ],
        },
        {
          "label": "(2)",
          "stem_md": "不等式 $|3x-2|<1$ を解け。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $x<\\dfrac{1}{3}$\n\n② $\\dfrac{1}{3}<x<1$\n\n③ $\\dfrac{1}{3}\\leqq x\\leqq1$\n\n④ $x<\\dfrac{1}{3}$ または $1<x$",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["番号"]}
          ],
        },
        {
          "label": "(3)",
          "stem_md": "中学生5人，高校生10人に対して行ったテストの得点からなるデータについて，中学生のデータの総和は20，高校生のデータの総和は70である。このとき，中学生のデータの平均値は$\\boxed{5}$，高校生のデータの平均値は$\\boxed{6}$である。また，データ全体の平均値は$\\boxed{7}$である。",
          "answer_fields": [
            {"format": "integer", "value": "4", "boxes": ["5"]},
            {"format": "integer", "value": "7", "boxes": ["6"]},
            {"format": "integer", "value": "6", "boxes": ["7"]}
          ],
        },
        {
          "label": "(4)",
          "stem_md": "当たりくじ2本を含む9本のくじの中から，A，Bの2人がこの順に1本ずつくじを引く。引いたくじをもとに戻さないとすると，Aが当たる確率は$\\dfrac{\\boxed{8}}{\\boxed{9}}$，Bが当たる確率は$\\dfrac{\\boxed{10}}{\\boxed{11}}$である。",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["8"]},
            {"format": "integer", "value": "9", "boxes": ["9"]},
            {"format": "integer", "value": "2", "boxes": ["10"]},
            {"format": "integer", "value": "9", "boxes": ["11"]}
          ],
        },
        {
          "label": "(5)",
          "stem_md": "$AB=6$，$BC=7$，$CA=3$ である$\\triangle ABC$の内心を$I$とし，直線$AI$と辺$BC$の交点を$D$とする。このとき，$AI:ID=\\boxed{12}:\\boxed{13}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "9", "boxes": ["12"]},
            {"format": "integer", "value": "7", "boxes": ["13"]}
          ],
        }
      ]
    },
    {
      "group_number": "2",
      "page_numbers": [2],
      "title": "【II】小問集合（因数定理・複素数・円・指数不等式・接線）",
      "subject": "数学",
      "unit": "理解度確認テスト(2025年7月) βコース 選択問題(数学I・II・A)",
      "topic_tag": "数と式・複素数・図形と方程式・指数関数・微分",
      "difficulty": 3,
      "source_name": "理解度確認テスト",
      "source_year": "2025年7月",
      "stem_md": "《選択問題》数学I・II・A選択者のみ解答すること（数学I・II・A・B・C選択者は解答しないこと）。(40点)",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "多項式 $x^{3}+ax^{2}-x-2$ が $x-2$ で割り切れるような定数$a$の値は $a=-\\boxed{1}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["1"]}
          ],
        },
        {
          "label": "(2)",
          "stem_md": "$i$は虚数単位とする。$\\dfrac{1+3i}{2+i}=a+bi$ を満たす実数$a$，$b$は，$a=\\boxed{2}$，$b=\\boxed{3}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["2"]},
            {"format": "integer", "value": "1", "boxes": ["3"]}
          ],
        },
        {
          "label": "(3)",
          "stem_md": "点$(2,1)$を中心とし，原点を通る円の方程式を求めよ。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $(x-1)^{2}+(y-2)^{2}=5$\n\n② $(x+2)^{2}+(y+1)^{2}=5$\n\n③ $(x-2)^{2}+(y-1)^{2}=5$\n\n④ $(x-2)^{2}+(y-1)^{2}=25$",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["番号"]}
          ],
        },
        {
          "label": "(4)",
          "stem_md": "不等式 $\\left(\\dfrac{1}{9}\\right)^{x}>\\left(\\dfrac{1}{3}\\right)^{-x+1}$ を解け。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $x<1$\n\n② $x>\\dfrac{1}{3}$\n\n③ $x<-\\dfrac{1}{3}$\n\n④ $x<\\dfrac{1}{3}$",
          "answer_fields": [
            {"format": "integer", "value": "4", "boxes": ["番号"]}
          ],
        },
        {
          "label": "(5)",
          "stem_md": "曲線 $y=x^{2}-3x+1$ 上の点$(2,-1)$における接線の方程式を求めよ。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $y=-x+3$\n\n② $y=x-3$\n\n③ $y=2x-3$\n\n④ $y=x+3$",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["番号"]}
          ],
        }
      ]
    },
    {
      "group_number": "3",
      "page_numbers": [2, 3],
      "title": "【III】小問集合（三角関数・ベクトル・円・指数不等式・接線）",
      "subject": "数学",
      "unit": "理解度確認テスト(2025年7月) βコース 選択問題(数学I・II・A・B・C)",
      "topic_tag": "三角関数・ベクトル・図形と方程式・指数関数・微分",
      "difficulty": 3,
      "source_name": "理解度確認テスト",
      "source_year": "2025年7月",
      "stem_md": "《選択問題》数学I・II・A・B・C選択者のみ解答すること（数学I・II・A選択者は解答しないこと）。(3)〜(5)は【II】と同一問題。(40点)",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$\\pi<\\theta<\\dfrac{3}{2}\\pi$ で，$\\cos\\theta=-\\dfrac{4}{5}$ のとき，$\\sin\\theta=-\\dfrac{\\boxed{1}}{\\boxed{2}}$，$\\sin2\\theta=\\dfrac{\\boxed{3}\\boxed{4}}{\\boxed{5}\\boxed{6}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["1"]},
            {"format": "integer", "value": "5", "boxes": ["2"]},
            {"format": "integer", "value": "2", "boxes": ["3"]},
            {"format": "integer", "value": "4", "boxes": ["4"]},
            {"format": "integer", "value": "2", "boxes": ["5"]},
            {"format": "integer", "value": "5", "boxes": ["6"]}
          ],
        },
        {
          "label": "(2)",
          "stem_md": "$|\\vec{a}|=2$，$|\\vec{b}|=3$ で，$\\vec{a}$と$\\vec{b}$のなす角が$60^{\\circ}$のとき，$\\vec{a}\\cdot\\vec{b}=\\boxed{7}$ であり，$|2\\vec{a}-\\vec{b}|=\\sqrt{\\boxed{8}\\boxed{9}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["7"]},
            {"format": "integer", "value": "1", "boxes": ["8"]},
            {"format": "integer", "value": "3", "boxes": ["9"]}
          ],
        },
        {
          "label": "(3)",
          "stem_md": "点$(2,1)$を中心とし，原点を通る円の方程式を求めよ。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $(x-1)^{2}+(y-2)^{2}=5$\n\n② $(x+2)^{2}+(y+1)^{2}=5$\n\n③ $(x-2)^{2}+(y-1)^{2}=5$\n\n④ $(x-2)^{2}+(y-1)^{2}=25$",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["番号"]}
          ],
        },
        {
          "label": "(4)",
          "stem_md": "不等式 $\\left(\\dfrac{1}{9}\\right)^{x}>\\left(\\dfrac{1}{3}\\right)^{-x+1}$ を解け。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $x<1$\n\n② $x>\\dfrac{1}{3}$\n\n③ $x<-\\dfrac{1}{3}$\n\n④ $x<\\dfrac{1}{3}$",
          "answer_fields": [
            {"format": "integer", "value": "4", "boxes": ["番号"]}
          ],
        },
        {
          "label": "(5)",
          "stem_md": "曲線 $y=x^{2}-3x+1$ 上の点$(2,-1)$における接線の方程式を求めよ。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $y=-x+3$\n\n② $y=x-3$\n\n③ $y=2x-3$\n\n④ $y=x+3$",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["番号"]}
          ],
        }
      ]
    },
    {
      "group_number": "4",
      "page_numbers": [3, 4],
      "title": "【IV】置き換えによる4次関数の分析",
      "subject": "数学",
      "unit": "理解度確認テスト(2025年7月) βコース 共通問題",
      "topic_tag": "数と式・2次関数・置き換え",
      "difficulty": 3,
      "source_name": "理解度確認テスト",
      "source_year": "2025年7月",
      "stem_md": "《共通問題》関数 $f(x)=(x^{2}+2x+1)(x^{2}+2x-3)$ とする。このとき，以下の問に答えよ。(40点)",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$t=x^{2}+2x$ とするとき，$t$のとり得る値の範囲は $t\\geqq-\\boxed{1}$ である。また，$f(x)$を$t$を用いて表すと $f(x)=t^{2}-\\boxed{2}t-\\boxed{3}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["1"]},
            {"format": "integer", "value": "2", "boxes": ["2"]},
            {"format": "integer", "value": "3", "boxes": ["3"]}
          ],
        },
        {
          "label": "(2)",
          "stem_md": "方程式 $f(x)=-4$ を解け。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $x=1\\pm\\sqrt{2}$\n\n② $x=-1\\pm\\sqrt{3}$\n\n③ $x=-2\\pm2\\sqrt{2}$\n\n④ $x=-1\\pm\\sqrt{2}$",
          "answer_fields": [
            {"format": "integer", "value": "4", "boxes": ["番号"]}
          ],
        },
        {
          "label": "(3)",
          "stem_md": "$a$を実数の定数とする。方程式 $f(x)=a$ の実数解の個数を，次の①〜④から選び，番号をマスに入れよ。\n\n① $a<-4$ のとき0個，$a=-4$ のとき2個，$-4<a<0$ のとき4個，$a=0$ のとき3個，$0<a$ のとき2個\n\n② $a<-4$ のとき0個，$a=-4$ のとき1個，$-4<a<0$ のとき4個，$a=0$ のとき3個，$0<a$ のとき2個\n\n③ $a<-4$ のとき0個，$a=-4$ のとき2個，$-4<a<0$ のとき4個，$a=0$ のとき4個，$0<a$ のとき2個\n\n④ $a\\leqq-4$ のとき0個，$-4<a\\leqq0$ のとき4個，$0<a$ のとき2個",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["番号"]}
          ],
        }
      ]
    },
    {
      "group_number": "5",
      "page_numbers": [4],
      "title": "【V】部屋割りの場合の数",
      "subject": "数学",
      "unit": "理解度確認テスト(2025年7月) βコース 共通問題",
      "topic_tag": "場合の数",
      "difficulty": 3,
      "source_name": "理解度確認テスト",
      "source_year": "2025年7月",
      "stem_md": "《共通問題》一郎，二郎，三郎を含む6人が，A，B，Cの3部屋に分かれて入る。ただし，A，B，Cの部屋にはそれぞれ3人，2人，1人が入るものとする。このとき，以下の問に答えよ。(40点)",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "一郎，二郎，三郎の3人がAの部屋に入る場合の数は $\\boxed{1}$ 通りである。",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["1"]}
          ],
        },
        {
          "label": "(2)",
          "stem_md": "一郎，二郎，三郎がそれぞれA，B，Cの部屋に入る場合の数は $\\boxed{2}$ 通りである。",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["2"]}
          ],
        },
        {
          "label": "(3)",
          "stem_md": "一郎，二郎，三郎のうち，2人だけが同じ部屋に入る場合の数は $\\boxed{3}\\boxed{4}$ 通りである。",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["3"]},
            {"format": "integer", "value": "9", "boxes": ["4"]}
          ],
        },
        {
          "label": "(4)",
          "stem_md": "人数が2人増えて8人になったので，A，B，Cの部屋にはそれぞれ4人，3人，1人が入ることにした。このとき，一郎，二郎，三郎のうち，2人だけが同じ部屋に入る場合の数は $\\boxed{5}\\boxed{6}\\boxed{7}$ 通りである。",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["5"]},
            {"format": "integer", "value": "9", "boxes": ["6"]},
            {"format": "integer", "value": "5", "boxes": ["7"]}
          ],
        }
      ]
    },
    {
      "group_number": "6",
      "page_numbers": [5],
      "title": "【VI】単位円上の三角形の面積",
      "subject": "数学",
      "unit": "理解度確認テスト(2025年7月) βコース 選択問題(数学I・II・A・B・C)",
      "topic_tag": "三角関数・図形と計量",
      "difficulty": 4,
      "source_name": "理解度確認テスト",
      "source_year": "2025年7月",
      "stem_md": "《選択問題》数学I・II・A・B・C選択者のみ解答すること。$0<\\theta\\leqq\\pi$ のとき，3点 $A(1,0)$，$B(\\cos\\theta,\\sin\\theta)$，$C\\left(\\cos\\left(\\theta+\\dfrac{\\pi}{2}\\right),\\sin\\left(\\theta+\\dfrac{\\pi}{2}\\right)\\right)$ を頂点とする$\\triangle ABC$の面積を$S$とする。このとき，以下の問に答えよ。(40点)",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$\\theta=\\dfrac{\\pi}{2}$ のとき，$S=\\boxed{1}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["1"]}
          ],
        },
        {
          "label": "(2)",
          "stem_md": "$\\theta=\\dfrac{\\pi}{4}$ のとき，$S=\\dfrac{\\boxed{2}}{\\boxed{3}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["2"]},
            {"format": "integer", "value": "2", "boxes": ["3"]}
          ],
        },
        {
          "label": "(3)",
          "stem_md": "$S$を$\\theta$を用いて表せ。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $S=\\dfrac{1}{2}(\\sin\\theta+\\cos\\theta+1)$\n\n② $S=\\dfrac{1}{2}(\\cos\\theta-\\sin\\theta+1)$\n\n③ $S=\\dfrac{1}{2}(\\sin\\theta-\\cos\\theta+1)$\n\n④ $S=\\dfrac{1}{2}(\\sin\\theta-\\cos\\theta-1)$",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["番号"]}
          ],
        },
        {
          "label": "(4)",
          "stem_md": "$\\theta$が$0<\\theta\\leqq\\pi$の範囲を動くときの$S$の最大値は $\\dfrac{\\boxed{4}}{\\boxed{5}}\\left(\\sqrt{\\boxed{6}}+\\boxed{7}\\right)$ であり，$S$が最大となる$\\theta$の値は $\\theta=\\dfrac{\\boxed{8}}{\\boxed{9}}\\pi$ である。",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["4"]},
            {"format": "integer", "value": "2", "boxes": ["5"]},
            {"format": "integer", "value": "2", "boxes": ["6"]},
            {"format": "integer", "value": "1", "boxes": ["7"]},
            {"format": "integer", "value": "3", "boxes": ["8"]},
            {"format": "integer", "value": "4", "boxes": ["9"]}
          ],
        }
      ]
    },
    {
      "group_number": "7",
      "page_numbers": [5, 6],
      "title": "【VII】等差数列と部分分数分解",
      "subject": "数学",
      "unit": "理解度確認テスト(2025年7月) βコース 選択問題(数学I・II・A・B・C)",
      "topic_tag": "数列",
      "difficulty": 4,
      "source_name": "理解度確認テスト",
      "source_year": "2025年7月",
      "stem_md": "《選択問題》数学I・II・A・B・C選択者のみ解答すること。初項が0ではない等差数列$\\{a_n\\}$が次の関係式を満たしている。$$S_{2n-1}=a_na_{n+1}\\quad(n=1,2,3,\\cdots)$$ ただし，$S_n=a_1+a_2+\\cdots+a_n$ である。このとき，以下の問に答えよ。(40点)",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$a_2$ を求めよ。$a_2=\\boxed{1}$",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["1"]}
          ],
        },
        {
          "label": "(2)",
          "stem_md": "$a_1$ を求めよ。$a_1=-\\boxed{2}$",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["2"]}
          ],
        },
        {
          "label": "(3)",
          "stem_md": "$a_n$を$n$を用いて表せ。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $a_n=2n-3$\n\n② $a_n=2n-1$\n\n③ $a_n=n-2$\n\n④ $a_n=3n-4$",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["番号"]}
          ],
        },
        {
          "label": "(4)",
          "stem_md": "$\\displaystyle\\sum_{k=1}^{n}\\dfrac{1}{S_{2k-1}}$ を$n$を用いて表せ。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $\\dfrac{n}{2n-1}$\n\n② $-\\dfrac{n}{2n+1}$\n\n③ $-\\dfrac{2n-1}{n}$\n\n④ $-\\dfrac{n}{2n-1}$",
          "answer_fields": [
            {"format": "integer", "value": "4", "boxes": ["番号"]}
          ],
        }
      ]
    }
  ]
};

window.MATH_SCHOOLS = (window.MATH_SCHOOLS || []).concat([{
  id: "rikaido",
  name: "理解度確認テスト",
  eyebrow: "RIKAIDO CHECK TEST / MATH",
  exams: [
    {
      key: "rikaido_2507_beta",
      label: "2025年7月 βコース",
      shortLabel: "2507 βコース",
      sourceTitle: "2025年7月 理解度確認テスト",
      sourceText: "高3 数学βコース",
    },
    {
      key: "rikaido_2608_high1",
      label: "2026年8月 高校1年生",
      shortLabel: "2608 高1",
      sourceTitle: "2026年8月 理解度確認テスト",
      sourceText: "高校1年生 数学",
    },
  ],
}]);
