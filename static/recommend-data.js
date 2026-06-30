window.TEIKYO_DATASETS = window.TEIKYO_DATASETS || {}; window.TEIKYO_DATASETS.recommend = {
  "source_file_summary": {
    "detected_pages": 2,
    "notes": "帝京大学 2026年度 学校推薦型選抜 薬・理工学部 数学（PDF p.88 問題・p.89 解答キー）。PaddleOCRと紙面画像で照合。"
  },
  "problem_groups": [
    {
      "group_number": "1",
      "page_numbers": [88, 89],
      "title": "数と式・データ・対数・座標",
      "subject": "数学",
      "unit": "帝京大2026 学校推薦型(薬・理工)",
      "topic_tag": "数と式・データの分析・対数・座標",
      "difficulty": 2,
      "source_name": "帝京大学 学校推薦型選抜 薬・理工学部",
      "source_year": "2026",
      "stem_md": "次の各問いに答えよ。",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$\\dfrac{3}{\\sqrt5-2}$ の整数部分は $\\boxed{ア}\\boxed{イ}$, 小数部分は $\\boxed{ウ}\\boxed{エ}+\\boxed{オ}\\sqrt{\\boxed{カ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "12", "boxes": ["ア", "イ"]},
            {"format": "signed_integer", "value": "-6", "boxes": ["ウ", "エ"]},
            {"format": "integer", "value": "3", "boxes": ["オ"]},
            {"format": "integer", "value": "5", "boxes": ["カ"]}
          ],
          "solution_md": "分母を有理化すると $\\dfrac{3}{\\sqrt5-2}=3(\\sqrt5+2)=6+3\\sqrt5$。$12<6+3\\sqrt5<13$ なので整数部分は $12$、小数部分は $6+3\\sqrt5-12=-6+3\\sqrt5$。"
        },
        {
          "label": "(2)",
          "stem_md": "次のデータ $8,10,6,4,9,7,8,4,5,9$（点）の平均値は $\\boxed{キ}.\\boxed{ク}$（点）, 分散は $\\boxed{ケ}.\\boxed{コ}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "7", "boxes": ["キ"]},
            {"format": "integer", "value": "0", "boxes": ["ク"]},
            {"format": "integer", "value": "4", "boxes": ["ケ"]},
            {"format": "integer", "value": "2", "boxes": ["コ"]}
          ],
          "solution_md": "合計は $70$ なので平均は $7.0$。平均との差の2乗は $1,9,1,9,4,0,1,9,4,4$ で合計 $42$。分散は $42\\div10=4.2$。"
        },
        {
          "label": "(3)",
          "stem_md": "$x$ の方程式 $\\log_{2}(x-4)+\\log_{2}(x+2)=4$ の解は $\\boxed{サ}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "6", "boxes": ["サ"]}
          ],
          "solution_md": "真数条件は $x>4$。対数の和をまとめると $\\log_2\\{(x-4)(x+2)\\}=4$ なので $(x-4)(x+2)=16$。$x^2-2x-24=0$ より $x=6,-4$。条件に合うのは $6$。"
        },
        {
          "label": "(4)",
          "stem_md": "座標平面上に点 $O(0,0)$, $A(1,8)$, $B(-2,4)$ がある。2点 $AB$ 間の距離は $\\boxed{シ}$ である。$\\triangle OAB$ の重心の座標は $\\left(\\dfrac{\\boxed{ス}\\boxed{セ}}{\\boxed{ソ}},\\boxed{タ}\\right)$ である。",
          "answer_fields": [
            {"format": "integer", "value": "5", "boxes": ["シ"]},
            {"format": "signed_integer", "value": "-1", "boxes": ["ス", "セ"]},
            {"format": "integer", "value": "3", "boxes": ["ソ"]},
            {"format": "integer", "value": "4", "boxes": ["タ"]}
          ],
          "solution_md": "$AB=\\sqrt{(1-(-2))^2+(8-4)^2}=\\sqrt{3^2+4^2}=5$。重心は3点の座標の平均なので $\\left(\\frac{0+1-2}{3},\\frac{0+8+4}{3}\\right)=\\left(-\\frac13,4\\right)$。"
        }
      ]
    },
    {
      "group_number": "2",
      "page_numbers": [88, 89],
      "title": "カードと確率",
      "subject": "数学",
      "unit": "帝京大2026 学校推薦型(薬・理工)",
      "topic_tag": "場合の数と確率",
      "difficulty": 2,
      "source_name": "帝京大学 学校推薦型選抜 薬・理工学部",
      "source_year": "2026",
      "stem_md": "箱の中に1から100までの番号を1つずつ書いた100枚のカードが入っている。",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "箱からカードを1枚取り出すとき, その番号が6の倍数である確率は $\\dfrac{\\boxed{ア}}{\\boxed{イ}\\boxed{ウ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "4", "boxes": ["ア"]},
            {"format": "integer", "value": "25", "boxes": ["イ", "ウ"]}
          ],
          "solution_md": "1から100までの6の倍数は $\\lfloor100/6\\rfloor=16$ 個。確率は $16/100=4/25$。"
        },
        {
          "label": "(2)",
          "stem_md": "箱からカードを1枚取り出すとき, その番号が6の倍数で, かつ8の倍数である確率は $\\dfrac{\\boxed{エ}}{\\boxed{オ}\\boxed{カ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["エ"]},
            {"format": "integer", "value": "25", "boxes": ["オ", "カ"]}
          ],
          "solution_md": "6の倍数かつ8の倍数は最小公倍数 $24$ の倍数。$24,48,72,96$ の4個なので $4/100=1/25$。"
        },
        {
          "label": "(3)",
          "stem_md": "箱からカードを1枚取り出すとき, その番号が6の倍数でも8の倍数でもない確率は $\\dfrac{\\boxed{キ}\\boxed{ク}}{\\boxed{ケ}\\boxed{コ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "19", "boxes": ["キ", "ク"]},
            {"format": "integer", "value": "25", "boxes": ["ケ", "コ"]}
          ],
          "solution_md": "6の倍数は16個、8の倍数は12個、両方は4個。少なくとも一方の倍数は $16+12-4=24$ 個。どちらでもないのは $100-24=76$ 個なので $76/100=19/25$。"
        },
        {
          "label": "(4)",
          "stem_md": "箱からカードを2枚取り出すとき, 2枚のカードの番号が両方とも6の倍数である確率は $\\dfrac{\\boxed{サ}}{\\boxed{シ}\\boxed{ス}\\boxed{セ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "4", "boxes": ["サ"]},
            {"format": "integer", "value": "165", "boxes": ["シ", "ス", "セ"]}
          ],
          "solution_md": "6の倍数16枚から2枚選ぶ場合を, 全100枚から2枚選ぶ場合で割る。$\\dfrac{{}_{16}C_2}{{}_{100}C_2}=\\dfrac{120}{4950}=\\dfrac4{165}$。"
        },
        {
          "label": "(5)",
          "stem_md": "箱からカードを2枚取り出すとき, 番号が6の倍数か8の倍数であるカードが少なくとも1枚ある確率は $\\dfrac{\\boxed{ソ}\\boxed{タ}}{\\boxed{チ}\\boxed{ツ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "14", "boxes": ["ソ", "タ"]},
            {"format": "integer", "value": "33", "boxes": ["チ", "ツ"]}
          ],
          "solution_md": "6の倍数または8の倍数は24枚。余事象は, どちらでもない76枚から2枚選ぶこと。$1-\\dfrac{{}_{76}C_2}{{}_{100}C_2}=1-\\dfrac{2850}{4950}=\\dfrac{14}{33}$。"
        }
      ]
    },
    {
      "group_number": "3",
      "page_numbers": [88, 89],
      "title": "三角形と角の二等分線",
      "subject": "数学",
      "unit": "帝京大2026 学校推薦型(薬・理工)",
      "topic_tag": "図形と計量",
      "difficulty": 2,
      "source_name": "帝京大学 学校推薦型選抜 薬・理工学部",
      "source_year": "2026",
      "stem_md": "$\\triangle ABC$ において, $AB=3$, $AC=2$, $\\angle BAC=60^\\circ$ とする。$\\angle BAC$ の二等分線と辺 $BC$ の交点を $D$ とする。",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$BC=\\sqrt{\\boxed{ア}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "7", "boxes": ["ア"]}
          ],
          "solution_md": "余弦定理より $BC^2=3^2+2^2-2\\cdot3\\cdot2\\cos60^\\circ=7$。"
        },
        {
          "label": "(2)",
          "stem_md": "$\\cos B=\\dfrac{\\boxed{イ}\\sqrt{\\boxed{ウ}}}{\\boxed{エ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["イ"]},
            {"format": "integer", "value": "7", "boxes": ["ウ"]},
            {"format": "integer", "value": "7", "boxes": ["エ"]}
          ],
          "solution_md": "$\\cos B=\\dfrac{AB^2+BC^2-AC^2}{2\\cdot AB\\cdot BC}=\\dfrac{9+7-4}{6\\sqrt7}=\\dfrac{2}{\\sqrt7}=\\dfrac{2\\sqrt7}{7}$。"
        },
        {
          "label": "(3)",
          "stem_md": "$\\triangle ABC$ の外接円の半径は $\\dfrac{\\sqrt{\\boxed{オ}\\boxed{カ}}}{\\boxed{キ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "21", "boxes": ["オ", "カ"]},
            {"format": "integer", "value": "3", "boxes": ["キ"]}
          ],
          "solution_md": "正弦定理の拡張より $2R=\\dfrac{BC}{\\sin A}=\\dfrac{\\sqrt7}{\\sin60^\\circ}$。したがって $R=\\dfrac{\\sqrt7}{\\sqrt3}=\\dfrac{\\sqrt{21}}3$。"
        },
        {
          "label": "(4)",
          "stem_md": "$BD=\\dfrac{\\boxed{ク}\\sqrt{\\boxed{ケ}}}{\\boxed{コ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["ク"]},
            {"format": "integer", "value": "7", "boxes": ["ケ"]},
            {"format": "integer", "value": "5", "boxes": ["コ"]}
          ],
          "solution_md": "角の二等分線定理より $BD:DC=AB:AC=3:2$。$BC=\\sqrt7$ なので $BD=\\dfrac{3}{5}\\sqrt7$。"
        },
        {
          "label": "(5)",
          "stem_md": "$\\triangle ABC$ の内接円の半径は $\\dfrac{\\boxed{サ}\\sqrt{\\boxed{シ}}-\\sqrt{\\boxed{ス}\\boxed{セ}}}{\\boxed{ソ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "5", "boxes": ["サ"]},
            {"format": "integer", "value": "3", "boxes": ["シ"]},
            {"format": "integer", "value": "21", "boxes": ["ス", "セ"]},
            {"format": "integer", "value": "6", "boxes": ["ソ"]}
          ],
          "solution_md": "面積は $S=\\frac12\\cdot3\\cdot2\\sin60^\\circ=\\frac{3\\sqrt3}{2}$。半周長は $s=\\frac{3+2+\\sqrt7}{2}=\\frac{5+\sqrt7}{2}$。内接円の半径は $r=S/s=\\frac{3\\sqrt3}{5+\sqrt7}=\\frac{5\\sqrt3-\\sqrt{21}}6$。"
        }
      ]
    },
    {
      "group_number": "4",
      "page_numbers": [88, 89],
      "title": "放物線と接線・面積",
      "subject": "数学",
      "unit": "帝京大2026 学校推薦型(薬・理工)",
      "topic_tag": "二次関数・微分積分",
      "difficulty": 2,
      "source_name": "帝京大学 学校推薦型選抜 薬・理工学部",
      "source_year": "2026",
      "stem_md": "放物線 $C:y=-x^2+3x$ がある。$C$ と $x$ 軸の2つの交点のうち, $x$ 座標が小さい方の点を $A$, 大きい方の点を $B$ とする。点 $B$ における放物線 $C$ の接線を $\\ell$ とする。",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "放物線 $C$ の頂点の座標は $\\left(\\dfrac{\\boxed{ア}}{\\boxed{イ}},\\dfrac{\\boxed{ウ}}{\\boxed{エ}}\\right)$ である。",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["ア"]},
            {"format": "integer", "value": "2", "boxes": ["イ"]},
            {"format": "integer", "value": "9", "boxes": ["ウ"]},
            {"format": "integer", "value": "4", "boxes": ["エ"]}
          ],
          "solution_md": "$y=-x^2+3x=-(x-\\frac32)^2+\\frac94$。頂点は $\\left(\\frac32,\\frac94\\right)$。"
        },
        {
          "label": "(2)",
          "stem_md": "点 $A$ の $x$ 座標は $\\boxed{オ}$, 点 $B$ の $x$ 座標は $\\boxed{カ}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "0", "boxes": ["オ"]},
            {"format": "integer", "value": "3", "boxes": ["カ"]}
          ],
          "solution_md": "$-x^2+3x=-x(x-3)=0$ より交点の $x$ 座標は $0,3$。小さい方が $A$, 大きい方が $B$。"
        },
        {
          "label": "(3)",
          "stem_md": "接線 $\\ell$ の方程式は $y=\\boxed{キ}\\boxed{ク}x+\\boxed{ケ}$ である。",
          "answer_fields": [
            {"format": "signed_integer", "value": "-3", "boxes": ["キ", "ク"]},
            {"format": "integer", "value": "9", "boxes": ["ケ"]}
          ],
          "solution_md": "$y'=-2x+3$。点 $B(3,0)$ での傾きは $-3$。したがって接線は $y=-3(x-3)=-3x+9$。"
        },
        {
          "label": "(4)",
          "stem_md": "放物線 $C$ と $x$ 軸で囲まれる部分の面積は $\\dfrac{\\boxed{コ}}{\\boxed{サ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "9", "boxes": ["コ"]},
            {"format": "integer", "value": "2", "boxes": ["サ"]}
          ],
          "solution_md": "$0\\le x\\le3$ で放物線は $x$ 軸の上にある。面積は $\\int_0^3(-x^2+3x)dx=\\left[-\\frac{x^3}{3}+\\frac{3x^2}{2}\\right]_0^3=\\frac92$。"
        },
        {
          "label": "(5)",
          "stem_md": "放物線 $C$ と接線 $\\ell$ と $y$ 軸で囲まれる部分の面積は $\\boxed{シ}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "9", "boxes": ["シ"]}
          ],
          "solution_md": "$0\\le x\\le3$ で接線 $y=-3x+9$ が放物線の上にある。差は $(-3x+9)-(-x^2+3x)=(x-3)^2$。面積は $\\int_0^3(x-3)^2dx=9$。"
        }
      ]
    }
  ]
};

