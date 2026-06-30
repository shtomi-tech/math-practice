window.TEIKYO_DATASETS = window.TEIKYO_DATASETS || {}; window.TEIKYO_DATASETS.sougou = {
  "source_file_summary": {
    "detected_pages": 1,
    "notes": "帝京大学 2026年度 総合型選抜 薬・理工学部 数学（p9 問題・p10 解答キー）。Claudeチャットで読み取り・検算済み。"
  },
  "problem_groups": [
    {
      "group_number": "1",
      "page_numbers": [9],
      "title": "整式・約数・対数・共通接線・定積分",
      "subject": "数学",
      "unit": "帝京大2026 総合型(薬・理工)",
      "topic_tag": "式と計算・対数・微積分(融合)",
      "difficulty": 2,
      "source_name": "帝京大学 総合型選抜 薬・理工学部",
      "source_year": "2026",
      "stem_md": "次の各問いに答えよ。",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "整式 $x^{2}-xy-6y^{2}+6x-8y+8$ を因数分解すると $(x+\\boxed{ア}\\,y+\\boxed{イ})(x-\\boxed{ウ}\\,y+\\boxed{エ})$ となる。",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["ア"]},
            {"format": "integer", "value": "4", "boxes": ["イ"]},
            {"format": "integer", "value": "3", "boxes": ["ウ"]},
            {"format": "integer", "value": "2", "boxes": ["エ"]}
          ],
          "solution_md": "$x$ について整理すると $x^2+(6-y)x+(-6y^2-8y+8)$。定数部分は $(2y+4)(-3y+2)$ で、和も $(2y+4)+(-3y+2)=6-y$ となるため、$(x+2y+4)(x-3y+2)$。"
        },
        {
          "label": "(2)",
          "stem_md": "$360$ の正の約数は $\\boxed{オ}\\boxed{カ}$ 個ある。",
          "answer_fields": [
            {"format": "integer", "value": "24", "boxes": ["オ", "カ"]}
          ],
          "solution_md": "$360=2^{3}\\cdot 3^{2}\\cdot 5$ より $(3+1)(2+1)(1+1)=24$ 個。"
        },
        {
          "label": "(3)",
          "stem_md": "$(\\log_{3}25+\\log_{9}5)(\\log_{5}27+\\log_{25}3)$ を計算すると $\\dfrac{\\boxed{キ}\\boxed{ク}}{\\boxed{ケ}}$ となる。",
          "answer_fields": [
            {"format": "integer", "value": "35", "boxes": ["キ", "ク"]},
            {"format": "integer", "value": "4", "boxes": ["ケ"]}
          ],
          "solution_md": "底の変換公式より $\\log_{9}5=\\frac12\\log_{3}5$、$\\log_{25}3=\\frac12\\log_{5}3$。また $\\log_{3}25=2\\log_{3}5$、$\\log_{5}27=3\\log_{5}3$ なので、$\\left(\\tfrac{5}{2}\\log_{3}5\\right)\\left(\\tfrac{7}{2}\\log_{5}3\\right)=\\tfrac{35}{4}$。"
        },
        {
          "label": "(4)",
          "stem_md": "2つの放物線 $y=-x^{2}+1$,$y=x^{2}-2x+6$ の両方に接する直線の方程式は $y=\\boxed{コ}\\,x+\\boxed{サ}$,$y=\\boxed{シ}\\boxed{ス}\\,x+\\boxed{セ}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["コ"]},
            {"format": "integer", "value": "2", "boxes": ["サ"]},
            {"format": "signed_integer", "value": "-4", "boxes": ["シ", "ス"]},
            {"format": "integer", "value": "5", "boxes": ["セ"]}
          ],
          "solution_md": "$y=mx+c$ が両放物線に接する条件から $m^{2}+2m-8=0$,$m=2,-4$。よって $y=2x+2$,$y=-4x+5$。"
        },
        {
          "label": "(5)",
          "stem_md": "等式 $f(x)=6x^{2}-2x+\\displaystyle\\int_{-1}^{1}f(t)\\,dt$ を満たす関数は $f(x)=6x^{2}-2x-\\boxed{ソ}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "4", "boxes": ["ソ"]}
          ],
          "solution_md": "積分範囲に $x$ がないので、定積分全体を定数 $k$ とおく。$k=\\int_{-1}^{1}f(t)dt$ とすると $f(x)=6x^2-2x+k$。これを戻して $k=\\int_{-1}^{1}(6t^2-2t+k)dt=4+2k$ より $k=-4$。よって $f(x)=6x^2-2x-4$。"
        }
      ]
    },
    {
      "group_number": "2",
      "page_numbers": [9],
      "title": "円に内接する四角形",
      "subject": "数学",
      "unit": "帝京大2026 総合型(薬・理工)",
      "topic_tag": "図形と計量(円に内接する四角形)",
      "difficulty": 2,
      "source_name": "帝京大学 総合型選抜 薬・理工学部",
      "source_year": "2026",
      "stem_md": "円 $\\mathrm{O}$ に内接する四角形 $\\mathrm{ABCD}$ において,$AB=2$,$BC=3$,$CD=1$,$\\angle ABC=60^{\\circ}$ とする。",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$\\mathrm{AC}$ の長さは $\\sqrt{\\boxed{ア}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "7", "boxes": ["ア"]}
          ],
          "solution_md": "余弦定理 $AC^{2}=2^{2}+3^{2}-2\\cdot2\\cdot3\\cos60^{\\circ}=7$。"
        },
        {
          "label": "(2)",
          "stem_md": "$\\mathrm{AD}$ の長さは $\\boxed{イ}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["イ"]}
          ],
          "solution_md": "$\\angle ADC=120^{\\circ}$。$\\triangle ACD$ で $7=AD^{2}+1+AD$ より $AD=2$。"
        },
        {
          "label": "(3)",
          "stem_md": "$\\sin\\angle BAC$ の値は $\\dfrac{\\boxed{ウ}\\sqrt{\\boxed{エ}\\boxed{オ}}}{\\boxed{カ}\\boxed{キ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["ウ"]},
            {"format": "integer", "value": "21", "boxes": ["エ", "オ"]},
            {"format": "integer", "value": "14", "boxes": ["カ", "キ"]}
          ],
          "solution_md": "正弦定理より $\\sin\\angle BAC=\\dfrac{BC\\sin60^{\\circ}}{AC}=\\dfrac{3\\cdot\\frac{\\sqrt3}{2}}{\\sqrt7}=\\dfrac{3\\sqrt{21}}{14}$。"
        },
        {
          "label": "(4)",
          "stem_md": "円 $\\mathrm{O}$ の半径は $\\dfrac{\\sqrt{\\boxed{ク}\\boxed{ケ}}}{\\boxed{コ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "21", "boxes": ["ク", "ケ"]},
            {"format": "integer", "value": "3", "boxes": ["コ"]}
          ],
          "solution_md": "$2R=\\dfrac{AC}{\\sin60^{\\circ}}=\\dfrac{\\sqrt7}{\\frac{\\sqrt3}{2}}$ より $R=\\dfrac{\\sqrt{21}}{3}$。"
        },
        {
          "label": "(5)",
          "stem_md": "四角形 $\\mathrm{ABCD}$ の面積は $\\boxed{サ}\\sqrt{\\boxed{シ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["サ"]},
            {"format": "integer", "value": "3", "boxes": ["シ"]}
          ],
          "solution_md": "$\\triangle ABC+\\triangle ACD=\\dfrac{3\\sqrt3}{2}+\\dfrac{\\sqrt3}{2}=2\\sqrt3$。"
        }
      ]
    },
    {
      "group_number": "3",
      "page_numbers": [9],
      "title": "数直線上の点と確率",
      "subject": "数学",
      "unit": "帝京大2026 総合型(薬・理工)",
      "topic_tag": "場合の数と確率",
      "difficulty": 2,
      "source_name": "帝京大学 総合型選抜 薬・理工学部",
      "source_year": "2026",
      "stem_md": "数直線上に2点 $\\mathrm{A}$,$\\mathrm{B}$ がある。最初に $\\mathrm{A}$ は原点に,$\\mathrm{B}$ は座標が $2$ の点にあり,1個のさいころを投げたときに以下の規則で動くとする。\n\n・さいころの目が奇数の場合：$\\mathrm{A}$ は正の向きに $1$ 動く。$\\mathrm{B}$ は動かない。\n\n・さいころの目が偶数の場合：$\\mathrm{A}$ は動かない。$\\mathrm{B}$ は正の向きに $1$ 動く。",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "さいころを $3$ 回投げた結果,$\\mathrm{B}$ の座標が $\\mathrm{A}$ の座標より大きい確率は $\\dfrac{\\boxed{ア}}{\\boxed{イ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "7", "boxes": ["ア"]},
            {"format": "integer", "value": "8", "boxes": ["イ"]}
          ],
          "solution_md": "奇数が出る回数を $k$ とする反復試行。3回後は $A=k$、$B=5-k$ なので $B>A\\Leftrightarrow k\\le2$。余事象は奇数3回で、${}_3C_3(\\frac12)^3=\\frac18$。よって $1-\\frac18=\\frac78$。"
        },
        {
          "label": "(2)",
          "stem_md": "さいころを $4$ 回投げた結果,$\\mathrm{A}$ の座標が $3$ である確率は $\\dfrac{\\boxed{ウ}}{\\boxed{エ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["ウ"]},
            {"format": "integer", "value": "4", "boxes": ["エ"]}
          ],
          "solution_md": "$A=3$ は4回中ちょうど3回奇数が出ること。反復試行の公式 ${}_nC_kp^k(1-p)^{n-k}$ より、${}_4C_3(\\frac12)^3(\\frac12)=\\frac14$。"
        },
        {
          "label": "(3)",
          "stem_md": "さいころを $5$ 回投げた結果,$\\mathrm{A}$ が $\\mathrm{B}$ より先に座標が $4$ の点に到達している確率は $\\dfrac{\\boxed{オ}}{\\boxed{カ}\\boxed{キ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["オ"]},
            {"format": "integer", "value": "16", "boxes": ["カ", "キ"]}
          ],
          "solution_md": "Aが4へ到達するには5回中少なくとも4回奇数。反復試行で奇数4回または5回を足し、${}_5C_4(\\frac12)^5+{}_5C_5(\\frac12)^5=\\frac6{32}=\\frac3{16}$。このときBは座標4に届かない。"
        },
        {
          "label": "(4)",
          "stem_md": "さいころを $5$ 回投げた結果,$\\mathrm{A}$ の座標が $\\mathrm{B}$ の座標より大きい確率は $\\dfrac{\\boxed{ク}}{\\boxed{ケ}\\boxed{コ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["ク"]},
            {"format": "integer", "value": "16", "boxes": ["ケ", "コ"]}
          ],
          "solution_md": "奇数を $k$ 回とすると $A=k$、$B=7-k$。$A>B\\Leftrightarrow k\\ge4$ なので、反復試行で奇数4回または5回を足す。${}_5C_4(\\frac12)^5+{}_5C_5(\\frac12)^5=\\frac3{16}$。"
        },
        {
          "label": "(5)",
          "stem_md": "さいころを $6$ 回投げた結果,$\\mathrm{A}$ と $\\mathrm{B}$ の座標が同じである確率は $\\dfrac{\\boxed{サ}\\boxed{シ}}{\\boxed{ス}\\boxed{セ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "15", "boxes": ["サ", "シ"]},
            {"format": "integer", "value": "64", "boxes": ["ス", "セ"]}
          ],
          "solution_md": "6回中奇数が $k$ 回なら $A=k$、$B=8-k$。$A=B\\Leftrightarrow k=4$。反復試行でちょうど4回奇数だから、${}_6C_4(\\frac12)^4(\\frac12)^2=\\frac{15}{64}$。"
        }
      ]
    },
    {
      "group_number": "4",
      "page_numbers": [9],
      "title": "三角関数の最大・最小",
      "subject": "数学",
      "unit": "帝京大2026 総合型(薬・理工)",
      "topic_tag": "三角関数(合成・最大最小)",
      "difficulty": 2,
      "source_name": "帝京大学 総合型選抜 薬・理工学部",
      "source_year": "2026",
      "stem_md": "関数 $y=\\sin 2\\theta+2(\\sin\\theta+\\cos\\theta)-2$ $(0\\le\\theta<2\\pi)$ について考える。$t=\\sin\\theta+\\cos\\theta$ とする。",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$y$ を $t$ の式で表すと $y=t^{2}+\\boxed{ア}\\,t-\\boxed{イ}$ となる。",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["ア"]},
            {"format": "integer", "value": "3", "boxes": ["イ"]}
          ],
          "solution_md": "$t^{2}=1+\\sin2\\theta$ より $\\sin2\\theta=t^{2}-1$。$y=t^{2}+2t-3$。"
        },
        {
          "label": "(2)",
          "stem_md": "$t$ のとりうる値の範囲は $-\\sqrt{\\boxed{ウ}}\\le t\\le\\sqrt{\\boxed{エ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["ウ"]},
            {"format": "integer", "value": "2", "boxes": ["エ"]}
          ],
          "solution_md": "$t=\\sqrt2\\sin(\\theta+\\tfrac{\\pi}{4})$ より $-\\sqrt2\\le t\\le\\sqrt2$。"
        },
        {
          "label": "(3)",
          "stem_md": "$y$ は $\\theta=\\dfrac{\\pi}{\\boxed{オ}}$ で最大値 $\\boxed{カ}\\boxed{キ}+\\boxed{ク}\\sqrt{\\boxed{ケ}}$ をとり,$\\theta=\\pi$,$\\dfrac{\\boxed{コ}}{\\boxed{サ}}\\pi$ で最小値 $\\boxed{シ}\\boxed{ス}$ をとる。",
          "answer_fields": [
            {"format": "integer", "value": "4", "boxes": ["オ"]},
            {"format": "signed_integer", "value": "-1", "boxes": ["カ", "キ"]},
            {"format": "integer", "value": "2", "boxes": ["ク"]},
            {"format": "integer", "value": "2", "boxes": ["ケ"]},
            {"format": "integer", "value": "3", "boxes": ["コ"]},
            {"format": "integer", "value": "2", "boxes": ["サ"]},
            {"format": "signed_integer", "value": "-4", "boxes": ["シ", "ス"]}
          ],
          "solution_md": "$y=t^2+2t-3=(t+1)^2-4$、$-\\sqrt2\\le t\\le\\sqrt2$。頂点 $t=-1$ は範囲内なので最小値は $-4$。$t=-1$ は $\\theta=\\pi,\\frac32\\pi$。最大値は端点比較で、$t=\\sqrt2$ のとき $-1+2\\sqrt2$、このとき $\\theta=\\frac\\pi4$。"
        }
      ]
    }
  ]
}
;

