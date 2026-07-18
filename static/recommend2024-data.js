window.TEIKYO_DATASETS = window.TEIKYO_DATASETS || {}; window.TEIKYO_DATASETS.recommend2024 = {
  "source_file_summary": {
    "detected_pages": 1,
    "notes": "帝京大学 2024年度 学校推薦型選抜 薬・理工学部 数学（p78 問題・p79 解答キー）。Claudeチャットで読み取り・検算済み。"
  },
  "problem_groups": [
    {
      "group_number": "1",
      "page_numbers": [78],
      "title": "放物線・三角比・n進法・複素数・対数",
      "subject": "数学",
      "unit": "帝京大2024 学校推薦型(薬・理工)",
      "topic_tag": "図形と方程式・三角比・数と式(n進法)・複素数・対数",
      "difficulty": 2,
      "source_name": "帝京大学 学校推薦型選抜 薬・理工学部",
      "source_year": "2024",
      "stem_md": "次の各問いに答えよ。",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "放物線 $y=2x^{2}+8x+8$ を $x$ 軸に関して対称移動した後、$x$ 軸方向に $3$ だけ平行移動した放物線の方程式は $y=-\\boxed{ア}x^{2}+\\boxed{イ}x-\\boxed{ウ}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["ア"]},
            {"format": "integer", "value": "4", "boxes": ["イ"]},
            {"format": "integer", "value": "2", "boxes": ["ウ"]}
          ],
          "solution_md": "$x$軸対称: $y=-(2x^2+8x+8)=-2x^2-8x-8$。$x$方向に$+3$平行移動は$x\\to x-3$を代入して $y=-2(x-3)^2-8(x-3)-8=-2x^2+4x-2$。"
        },
        {
          "label": "(2)",
          "stem_md": "$\\triangle ABC$ において、$a=10$、$B=60^{\\circ}$、$C=75^{\\circ}$ のとき、$b=\\boxed{エ}\\sqrt{\\boxed{オ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "5", "boxes": ["エ"]},
            {"format": "integer", "value": "6", "boxes": ["オ"]}
          ],
          "solution_md": "$A=180-60-75=45^{\\circ}$。正弦定理より $b=\\dfrac{a\\sin B}{\\sin A}=\\dfrac{10\\sin60^\\circ}{\\sin45^\\circ}=\\dfrac{10\\cdot\\frac{\\sqrt3}{2}}{\\frac{\\sqrt2}{2}}=\\dfrac{10\\sqrt3}{\\sqrt2}=5\\sqrt6$。"
        },
        {
          "label": "(3)",
          "stem_md": "$10$進法で表された $15_{(10)}$ を $2$進法で表すと $\\boxed{カキクケ}_{(2)}$ である。また、$3$進法で表された $1021_{(3)}$ を $10$進法で表すと $\\boxed{コサ}_{(10)}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "1111", "boxes": ["カ", "キ", "ク", "ケ"]},
            {"format": "integer", "value": "34", "boxes": ["コ", "サ"]}
          ],
          "solution_md": "$15=8+4+2+1$ より $15_{(10)}=1111_{(2)}$。$1021_{(3)}=1\\times27+0\\times9+2\\times3+1\\times1=27+0+6+1=34$。"
        },
        {
          "label": "(4)",
          "stem_md": "$x$ の方程式 $x^{2}-\\sqrt2x+1=0$ の解は $x=\\dfrac{\\sqrt{\\boxed{シ}}\\pm\\sqrt{\\boxed{ス}}\\,i}{2}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["シ"]},
            {"format": "integer", "value": "2", "boxes": ["ス"]}
          ],
          "solution_md": "解の公式より $x=\\dfrac{\\sqrt2\\pm\\sqrt{2-4}}{2}=\\dfrac{\\sqrt2\\pm\\sqrt{-2}}{2}=\\dfrac{\\sqrt2\\pm\\sqrt2\\,i}{2}$。よってルート内はどちらも$2$。"
        },
        {
          "label": "(5)",
          "stem_md": "$a=\\log_{2}3$、$b=\\log_{3}7$ とするとき、$\\log_{14}56=\\dfrac{ab+\\boxed{セ}}{ab+\\boxed{ソ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["セ"]},
            {"format": "integer", "value": "1", "boxes": ["ソ"]}
          ],
          "solution_md": "$ab=\\log_2 3\\cdot\\log_3 7=\\log_2 7$。$56=2^3\\cdot7$ より $\\log_2 56=3+ab$。$14=2\\cdot7$ より $\\log_2 14=1+ab$。$\\log_{14}56=\\dfrac{\\log_2 56}{\\log_2 14}=\\dfrac{ab+3}{ab+1}$。"
        }
      ]
    },
    {
      "group_number": "2",
      "page_numbers": [78],
      "title": "垂線を含む三角形の計量",
      "subject": "数学",
      "unit": "帝京大2024 学校推薦型(薬・理工)",
      "topic_tag": "図形と計量(三角比の値)",
      "difficulty": 3,
      "source_name": "帝京大学 学校推薦型選抜 薬・理工学部",
      "source_year": "2024",
      "stem_md": "$\\triangle ABC$ において $\\angle ABC=75^{\\circ}$、頂点 $A$ から辺 $BC$ に下ろした垂線を $AD$、頂点 $B$ から辺 $AC$ に下ろした垂線を $BE$ とし、$AD=DC$、$AE=2$ であるとする。",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$AB=\\boxed{ア}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "4", "boxes": ["ア"]}
          ],
          "solution_md": "$AD=DC$ かつ $\\angle ADC=90^{\\circ}$ より $\\angle ACD=45^{\\circ}$。よって $\\angle BAC=180-75-45=60^{\\circ}$。直角三角形 $ABE$ で $\\angle BAE=60^{\\circ}$ なので $AB=\\dfrac{AE}{\\cos60^\\circ}=\\dfrac{2}{1/2}=4$。"
        },
        {
          "label": "(2)",
          "stem_md": "$BE=\\boxed{イ}\\sqrt{\\boxed{ウ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["イ"]},
            {"format": "integer", "value": "3", "boxes": ["ウ"]}
          ],
          "solution_md": "直角三角形 $ABE$ で $BE=AB\\sin60^\\circ=4\\cdot\\dfrac{\\sqrt3}{2}=2\\sqrt3$。"
        },
        {
          "label": "(3)",
          "stem_md": "$AD=\\sqrt{\\boxed{エ}}+\\sqrt{\\boxed{オ}}$ である。ただし、$\\boxed{エ}>\\boxed{オ}$ とする。",
          "answer_fields": [
            {"format": "integer", "value": "6", "boxes": ["エ"]},
            {"format": "integer", "value": "2", "boxes": ["オ"]}
          ],
          "solution_md": "直角三角形 $ABD$ で $\\angle ABD=75^\\circ$ なので $AD=AB\\sin75^\\circ=4\\sin75^\\circ$。$\\sin75^\\circ=\\sin(45^\\circ+30^\\circ)=\\dfrac{\\sqrt6+\\sqrt2}{4}$ より $AD=\\sqrt6+\\sqrt2$。"
        },
        {
          "label": "(4)",
          "stem_md": "$BD=\\sqrt{\\boxed{カ}}-\\sqrt{\\boxed{キ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "6", "boxes": ["カ"]},
            {"format": "integer", "value": "2", "boxes": ["キ"]}
          ],
          "solution_md": "直角三角形 $ABD$ で $BD=AB\\cos75^\\circ=4\\cos75^\\circ$。$\\cos75^\\circ=\\cos(45^\\circ+30^\\circ)=\\dfrac{\\sqrt6-\\sqrt2}{4}$ より $BD=\\sqrt6-\\sqrt2$。"
        },
        {
          "label": "(5)",
          "stem_md": "$\\sin75^{\\circ}=\\dfrac{\\sqrt{\\boxed{ク}}+\\sqrt{\\boxed{ケ}}}{\\boxed{コ}}$ である。ただし、$\\boxed{ク}>\\boxed{ケ}$ とする。",
          "answer_fields": [
            {"format": "integer", "value": "6", "boxes": ["ク"]},
            {"format": "integer", "value": "2", "boxes": ["ケ"]},
            {"format": "integer", "value": "4", "boxes": ["コ"]}
          ],
          "solution_md": "$\\sin75^\\circ=\\sin(45^\\circ+30^\\circ)=\\sin45^\\circ\\cos30^\\circ+\\cos45^\\circ\\sin30^\\circ=\\dfrac{\\sqrt2}{2}\\cdot\\dfrac{\\sqrt3}{2}+\\dfrac{\\sqrt2}{2}\\cdot\\dfrac12=\\dfrac{\\sqrt6+\\sqrt2}{4}$。"
        }
      ]
    },
    {
      "group_number": "3",
      "page_numbers": [78],
      "title": "場合の数(部屋割り・組分け)",
      "subject": "数学",
      "unit": "帝京大2024 学校推薦型(薬・理工)",
      "topic_tag": "場合の数",
      "difficulty": 2,
      "source_name": "帝京大学 学校推薦型選抜 薬・理工学部",
      "source_year": "2024",
      "stem_md": "次の各問いに答えよ。",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$5$人が$2$つの部屋 $A$、$B$ に入る方法は $\\boxed{アイ}$ 通りある。ただし、誰も入らない部屋があっても良いものとする。",
          "answer_fields": [
            {"format": "integer", "value": "32", "boxes": ["ア", "イ"]}
          ],
          "solution_md": "各人が独立に$A$・$B$のどちらかを選ぶので $2^5=32$ 通り。"
        },
        {
          "label": "(2)",
          "stem_md": "$5$人が$2$つの部屋 $A$、$B$ に入る方法は $\\boxed{ウエ}$ 通りある。ただし、各部屋に少なくとも$1$人は入るものとする。",
          "answer_fields": [
            {"format": "integer", "value": "30", "boxes": ["ウ", "エ"]}
          ],
          "solution_md": "全体 $2^5=32$ から、どちらかの部屋が空になる$2$通り（全員$A$・全員$B$）を除いて $32-2=30$ 通り。"
        },
        {
          "label": "(3)",
          "stem_md": "$5$人が$2$つのグループに分かれる方法は $\\boxed{オカ}$ 通りある。",
          "answer_fields": [
            {"format": "integer", "value": "15", "boxes": ["オ", "カ"]}
          ],
          "solution_md": "部屋に区別がある(2)の$30$通りを、部屋の区別をなくすため$2$で割って $30\\div2=15$ 通り。"
        },
        {
          "label": "(4)",
          "stem_md": "$5$人が$2$つの部屋 $A$、$B$ に入る方法は $\\boxed{キク}$ 通りある。ただし、各部屋は最大$3$人まで入ることができるものとする。",
          "answer_fields": [
            {"format": "integer", "value": "20", "boxes": ["キ", "ク"]}
          ],
          "solution_md": "$A$の人数は$B$も$3$人以下となるよう$2$人か$3$人。${}_5C_2+{}_5C_3=10+10=20$ 通り。"
        },
        {
          "label": "(5)",
          "stem_md": "$5$人が$3$つの部屋 $A$、$B$、$C$ に入る方法は $\\boxed{ケコサ}$ 通りある。ただし、誰も入らない部屋があっても良いものとする。",
          "answer_fields": [
            {"format": "integer", "value": "243", "boxes": ["ケ", "コ", "サ"]}
          ],
          "solution_md": "各人が独立に$3$部屋から選ぶので $3^5=243$ 通り。"
        }
      ]
    },
    {
      "group_number": "4",
      "page_numbers": [78],
      "title": "三次関数のグラフと接線・面積",
      "subject": "数学",
      "unit": "帝京大2024 学校推薦型(薬・理工)",
      "topic_tag": "微分積分(三次関数・接線・面積)",
      "difficulty": 3,
      "source_name": "帝京大学 学校推薦型選抜 薬・理工学部",
      "source_year": "2024",
      "stem_md": "関数 $y=-x^{3}+4x$ のグラフ $C$ がある。",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$C$ と $x$ 軸の交点の $x$ 座標は、$x=-2,0,\\boxed{ア}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["ア"]}
          ],
          "solution_md": "$-x^3+4x=0$ より $x(2-x)(2+x)=0$。よって $x=0,\\pm2$。$-2,0$ 以外の解は $2$。"
        },
        {
          "label": "(2)",
          "stem_md": "関数が極小値をとるときの $x$ の値は、$x=\\dfrac{\\boxed{イウ}\\sqrt{\\boxed{エ}}}{\\boxed{オ}}$ である。",
          "answer_fields": [
            {"format": "signed_integer", "value": "-2", "boxes": ["イ", "ウ"]},
            {"format": "integer", "value": "3", "boxes": ["エ"]},
            {"format": "integer", "value": "3", "boxes": ["オ"]}
          ],
          "solution_md": "$y'=-3x^2+4=0$ より $x=\\pm\\dfrac{2}{\\sqrt3}=\\pm\\dfrac{2\\sqrt3}{3}$。$y''=-6x$ より、$x=-\\dfrac{2\\sqrt3}{3}$ で $y''>0$（極小）、$x=\\dfrac{2\\sqrt3}{3}$ で $y''<0$（極大）。よって極小値をとるのは $x=\\dfrac{-2\\sqrt3}{3}$。"
        },
        {
          "label": "(3)",
          "stem_md": "$C$ 上の点 $(-1,-3)$ における接線 $\\ell$ の傾きは $\\boxed{カ}$ で、点 $(-1,-3)$ 以外の $C$ と $\\ell$ の共有点の座標は $(\\boxed{キ},\\boxed{ク})$ である。$C$ と $\\ell$ で囲まれた図形の面積は $\\dfrac{\\boxed{ケコ}}{\\boxed{サ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["カ"]},
            {"format": "integer", "value": "2", "boxes": ["キ"]},
            {"format": "integer", "value": "0", "boxes": ["ク"]},
            {"format": "integer", "value": "27", "boxes": ["ケ", "コ"]},
            {"format": "integer", "value": "4", "boxes": ["サ"]}
          ],
          "solution_md": "$y'=-3x^2+4$、$x=-1$ で傾き $-3+4=1$。接線は $y=x-2$。共有点は $-x^3+4x=x-2$ より $x^3-3x-2=0$、$(x+1)^2(x-2)=0$ で $x=-1$（重解）,$2$。$x=2$ のとき $y=0$ なので $(2,0)$。面積は $\\displaystyle\\int_{-1}^{2}\\{(-x^3+4x)-(x-2)\\}dx=\\int_{-1}^{2}(-x^3+3x+2)dx=\\left[-\\dfrac{x^4}{4}+\\dfrac{3x^2}{2}+2x\\right]_{-1}^{2}=6-\\left(-\\dfrac34\\right)=\\dfrac{27}{4}$。"
        }
      ]
    }
  ]
}
;
