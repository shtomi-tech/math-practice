window.MATH_DATASETS = window.MATH_DATASETS || {};
window.MATH_DATASETS.kawai_2026_zenkijutsu2_typeI = {
  "source_file_summary": {
    "detected_pages": 4,
    "notes": "河合塾 2026年度 第2回 全国記述模試 数学 I型（ユーザー提供の問題写真 IMG_1410〜IMG_1413＝冊子 p.2〜5）から転記。写真は問題のみで解答冊子は無いため、解答・解説は独立計算で新規作成し全マスを検算した（Python での総当り／数値検証済み）。原典は記述式だが、本アプリのマス目採点に合わせ、数値・範囲・比はマス目化、式が答えとなる 3(2) の g(x) のみ4択（番号を1マスに入力）へ作り替えた。1マス＝符号込み1文字。大問1（60点・答のみ）＝I型共通必須、大問2（40点）＝数学I必須、大問3・大問4（各40点）＝数学I・Aの選択問題（1題選択）。数学I受験者は1・2、数学I・A受験者は1と3・4のうち1題を解答する100点構成。"
  },
  "problem_groups": [
    {
      "group_number": "1",
      "page_numbers": [2, 3],
      "title": "【I型共通・必須】数と式・集合と命題・図形（小問集合）",
      "subject": "数学",
      "unit": "河合塾 全国記述模試 2026 第2回 I型",
      "topic_tag": "数と式・集合と命題・空間図形",
      "difficulty": 2,
      "source_name": "河合塾 全国記述模試",
      "source_year": "2026 第2回",
      "stem_md": String.raw`《I型共通　必須問題》（配点 60点）

この大問は解答用紙に問題番号と答だけを書けばよく，途中の計算は書かなくてよい。`,
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": String.raw`$x=3+\sqrt{5}$，$y=3-\sqrt{5}$ のとき，次の式の値をそれぞれ求めよ。

(i) $xy=\boxed{\text{ア}}$

(ii) $\dfrac{1}{x}+\dfrac{1}{y}=\dfrac{\boxed{\text{イ}}}{\boxed{\text{ウ}}}$

(iii) $\dfrac{1}{x^{2}}+\dfrac{1}{y^{2}}=\dfrac{\boxed{\text{エ}}}{\boxed{\text{オ}}}$`,
          "answer_fields": [
            {"format": "integer", "value": "4", "boxes": ["ア"]},
            {"format": "integer", "value": "3", "boxes": ["イ"]},
            {"format": "integer", "value": "2", "boxes": ["ウ"]},
            {"format": "integer", "value": "7", "boxes": ["エ"]},
            {"format": "integer", "value": "4", "boxes": ["オ"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": String.raw`(i) 不等式 $2x-1\le 5-x<4$ を解け。$\boxed{\text{カ}}<x\le\boxed{\text{キ}}$

(ii) 連立方程式 $\begin{cases}2x+y=5\\ x^{2}+3y=10\end{cases}$ を解け。解は $(x,y)=(\boxed{\text{ク}},\ \boxed{\text{ケ}})$，$(\boxed{\text{コ}},\ -\boxed{\text{サ}})$ の2組である（$x$ の値が小さい組を先に書く）。`,
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["カ"]},
            {"format": "integer", "value": "2", "boxes": ["キ"]},
            {"format": "integer", "value": "1", "boxes": ["ク"]},
            {"format": "integer", "value": "3", "boxes": ["ケ"]},
            {"format": "integer", "value": "5", "boxes": ["コ"]},
            {"format": "integer", "value": "5", "boxes": ["サ"]}
          ]
        },
        {
          "label": "(3)",
          "stem_md": String.raw`$a$ を正の定数とし，実数 $x$ についての条件 $p$，$q$ を

$$p:\ |2x-1|\le 5,\qquad q:\ -a\le x\le a$$

とする。

(i) 条件 $p$ を満たす $x$ の値の範囲を求めよ。$-\boxed{\text{シ}}\le x\le\boxed{\text{ス}}$

(ii) $p$ が $q$ であるための必要条件となる $a$ の値の範囲を求めよ。$0<a\le\boxed{\text{セ}}$`,
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["シ"]},
            {"format": "integer", "value": "3", "boxes": ["ス"]},
            {"format": "integer", "value": "2", "boxes": ["セ"]}
          ]
        },
        {
          "label": "(4)",
          "stem_md": String.raw`図のように，球 $Q$ に $A$ を頂点とする直円錐 $T$ が内接している。線分 $BC$ は $T$ の底面の直径で，$AB=3$，$BC=2$ である。また，$D$ は線分 $AC$ 上の点で $AD=1$ である。

(i) $T$ の体積 $V$ を求めよ。$V=\dfrac{\boxed{\text{ソ}}\sqrt{\boxed{\text{タ}}}}{\boxed{\text{チ}}}\,\pi$

(ii) $Q$ の半径 $R$ を求めよ。$R=\dfrac{\boxed{\text{ツ}}\sqrt{\boxed{\text{テ}}}}{\boxed{\text{ト}}}$

(iii) $T$ の側面を展開したときにできる扇形の中心角 $\theta$ と，$T$ の側面上を通って $B$ から $D$ に至る最短の経路の長さ $\ell$ を求めよ。$\theta=\dfrac{\boxed{\text{ナ}}}{\boxed{\text{ニ}}}\pi$，$\ell=\sqrt{\boxed{\text{ヌ}}}$`,
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["ソ"]},
            {"format": "integer", "value": "2", "boxes": ["タ"]},
            {"format": "integer", "value": "3", "boxes": ["チ"]},
            {"format": "integer", "value": "9", "boxes": ["ツ"]},
            {"format": "integer", "value": "2", "boxes": ["テ"]},
            {"format": "integer", "value": "8", "boxes": ["ト"]},
            {"format": "integer", "value": "2", "boxes": ["ナ"]},
            {"format": "integer", "value": "3", "boxes": ["ニ"]},
            {"format": "integer", "value": "7", "boxes": ["ヌ"]}
          ],
          "figure": String.raw`<svg class="solution-figure-svg" viewBox="0 0 300 320" role="img" aria-label="球Qに内接し、Aを頂点とする直円錐T。BCは底面の直径、DはAC上でAD=1"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="150" cy="160" r="125"/><ellipse cx="150" cy="250" rx="87" ry="20"/><path d="M150 35 L63 250"/><path d="M150 35 L237 250"/><path d="M150 35 L150 250" stroke-dasharray="4 5"/><path d="M63 250 L237 250"/></g><g fill="currentColor"><circle cx="150" cy="35" r="3"/><circle cx="63" cy="250" r="3"/><circle cx="237" cy="250" r="3"/><circle cx="179" cy="107" r="3"/></g><g fill="currentColor" font-family="Arial, sans-serif" font-size="15"><text x="150" y="26" text-anchor="middle">A</text><text x="52" y="259" text-anchor="end">B</text><text x="248" y="259">C</text><text x="186" y="104">D</text><text x="96" y="150" text-anchor="end">3</text><text x="157" y="70" text-anchor="end">1</text><text x="150" y="242" text-anchor="middle">2</text><text x="252" y="166">Q</text></g></svg>`
        }
      ]
    },
    {
      "group_number": "2",
      "page_numbers": [4],
      "title": "【I型数学I・必須】三角形の計量（余弦定理・正弦定理・内接円）",
      "subject": "数学",
      "unit": "河合塾 全国記述模試 2026 第2回 I型",
      "topic_tag": "図形と計量",
      "difficulty": 3,
      "source_name": "河合塾 全国記述模試",
      "source_year": "2026 第2回",
      "stem_md": String.raw`《I型数学I　必須問題》（配点 40点）

三角形 $ABC$ は $AB=7$，$BC=6$，$\cos\angle ABC=\dfrac{16}{21}$ を満たしている。`,
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": String.raw`辺 $CA$ の長さを求めよ。$CA=\sqrt{\boxed{\text{ア}}\boxed{\text{イ}}}$`,
          "answer_fields": [
            {"format": "integer", "value": "21", "boxes": ["ア", "イ"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": String.raw`次の条件 (a)，(b)，(c) をすべて満たす点 $D$ を考える。

(a) $D$ は直線 $CA$ に関して $B$ と反対側にある。

(b) $\angle ADC$ は鋭角である。

(c) 三角形 $ACD$ の外接円の半径は $\sqrt{7}$ である。

このとき，$\angle ADC$ の大きさを求めよ。$\angle ADC=\boxed{\text{ウ}}\boxed{\text{エ}}^{\circ}$`,
          "answer_fields": [
            {"format": "integer", "value": "60", "boxes": ["ウ", "エ"]}
          ]
        },
        {
          "label": "(3)",
          "stem_md": String.raw`(2) の条件 (a)，(b)，(c) および $AD=4$ を満たす点 $D$ をとる。線分 $CD$ の長さと，三角形 $ACD$ の内接円の半径 $r$ を求めよ。

$CD=\boxed{\text{オ}}$，$r=\dfrac{\boxed{\text{カ}}\sqrt{\boxed{\text{キ}}}-\sqrt{\boxed{\text{ク}}}}{\boxed{\text{ケ}}}$`,
          "answer_fields": [
            {"format": "integer", "value": "5", "boxes": ["オ"]},
            {"format": "integer", "value": "3", "boxes": ["カ"]},
            {"format": "integer", "value": "3", "boxes": ["キ"]},
            {"format": "integer", "value": "7", "boxes": ["ク"]},
            {"format": "integer", "value": "2", "boxes": ["ケ"]}
          ]
        }
      ]
    },
    {
      "group_number": "3",
      "page_numbers": [4],
      "title": "【I型数学I・A・選択】2次関数（決定・平行移動・つねに成り立つ不等式）",
      "subject": "数学",
      "unit": "河合塾 全国記述模試 2026 第2回 I型",
      "topic_tag": "2次関数",
      "difficulty": 3,
      "source_name": "河合塾 全国記述模試",
      "source_year": "2026 第2回",
      "stem_md": String.raw`《I型数学I・A　選択問題》　$\boxed{3}$，$\boxed{4}$ から1題を選択する。（配点 40点）

$a$ を $0$ でない実数，$b$，$c$ を実数とし，$f(x)=ax^{2}+bx+c$ とする。$xy$ 平面上の放物線 $y=f(x)$ を $G$ とすると，$G$ は3点 $(-1,\ 10)$，$(1,\ 2)$，$(2,\ 4)$ を通る。`,
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": String.raw`$a$，$b$，$c$ の値を求めよ。$a=\boxed{\text{ア}}$，$b=-\boxed{\text{イ}}$，$c=\boxed{\text{ウ}}$`,
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["ア"]},
            {"format": "integer", "value": "4", "boxes": ["イ"]},
            {"format": "integer", "value": "4", "boxes": ["ウ"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": String.raw`$p$ を実数の定数とする。$G$ を $x$ 軸に関して対称移動し，さらに $x$ 軸方向に $p-1$，$y$ 軸方向に $p^{2}+2p$ だけ平行移動した放物線を $y=g(x)$ とする。$g(x)$ として正しいものを，次の ①〜④ から1つ選び，その番号を記入せよ。

① $g(x)=-2(x-p)^{2}+p^{2}+2p-2$

② $g(x)=-2(x-p)^{2}+p^{2}+2p+2$

③ $g(x)=-2(x-p+1)^{2}+p^{2}+2p-2$

④ $g(x)=2(x-p)^{2}-p^{2}-2p+2$

番号：$\boxed{\text{エ}}$`,
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["エ"]}
          ]
        },
        {
          "label": "(3)",
          "stem_md": String.raw`$g(x)$ は (2) で求めた関数とする。

(i) すべての実数 $x$ に対して $f(x)\ge g(x)$ が成り立つような $p$ の値の範囲を求めよ。$p\le\dfrac{\boxed{\text{オ}}}{\boxed{\text{カ}}}$

(ii) すべての実数 $x_{1}$，$x_{2}$ に対して $f(x_{1})\ge g(x_{2})$ が成り立つような $p$ の値の範囲を求めよ。$-\boxed{\text{キ}}-\sqrt{\boxed{\text{ク}}}\le p\le-\boxed{\text{ケ}}+\sqrt{\boxed{\text{コ}}}$`,
          "answer_fields": [
            {"format": "integer", "value": "5", "boxes": ["オ"]},
            {"format": "integer", "value": "4", "boxes": ["カ"]},
            {"format": "integer", "value": "1", "boxes": ["キ"]},
            {"format": "integer", "value": "5", "boxes": ["ク"]},
            {"format": "integer", "value": "1", "boxes": ["ケ"]},
            {"format": "integer", "value": "5", "boxes": ["コ"]}
          ]
        }
      ]
    },
    {
      "group_number": "4",
      "page_numbers": [5],
      "title": "【I型数学I・A・選択】確率（反復試行・期待値・条件付き確率）",
      "subject": "数学",
      "unit": "河合塾 全国記述模試 2026 第2回 I型",
      "topic_tag": "場合の数と確率",
      "difficulty": 3,
      "source_name": "河合塾 全国記述模試",
      "source_year": "2026 第2回",
      "stem_md": String.raw`《I型数学I・A　選択問題》　$\boxed{3}$，$\boxed{4}$ から1題を選択する。（配点 40点）

何も入っていない袋がある。1個のサイコロを投げ，出た目に応じて次の規則で袋の中に球を入れる操作を4回繰り返す。

・$1$ または $2$ の目が出たとき：赤球と白球を1個ずつ入れる。

・$3$ または $4$ の目が出たとき：赤球と青球を1個ずつ入れる。

・$5$ または $6$ の目が出たとき：白球と青球を1個ずつ入れる。

4回の操作後に袋の中に入っている赤球の個数を $X$ とする。`,
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": String.raw`$X=0$ となる確率と $X=1$ となる確率を求めよ。

$P(X=0)=\dfrac{\boxed{\text{ア}}}{\boxed{\text{イ}}\boxed{\text{ウ}}}$，$P(X=1)=\dfrac{\boxed{\text{エ}}}{\boxed{\text{オ}}\boxed{\text{カ}}}$`,
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["ア"]},
            {"format": "integer", "value": "81", "boxes": ["イ", "ウ"]},
            {"format": "integer", "value": "8", "boxes": ["エ"]},
            {"format": "integer", "value": "81", "boxes": ["オ", "カ"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": String.raw`$X$ の期待値を求めよ。$E(X)=\dfrac{\boxed{\text{キ}}}{\boxed{\text{ク}}}$`,
          "answer_fields": [
            {"format": "integer", "value": "8", "boxes": ["キ"]},
            {"format": "integer", "value": "3", "boxes": ["ク"]}
          ]
        },
        {
          "label": "(3)",
          "stem_md": String.raw`4回の操作後に袋の中に赤，白，青の3色すべての色の球が入っているとき，$X=4$ となる条件付き確率を求めよ。$\dfrac{\boxed{\text{ケ}}}{\boxed{\text{コ}}\boxed{\text{サ}}}$`,
          "answer_fields": [
            {"format": "integer", "value": "7", "boxes": ["ケ"]},
            {"format": "integer", "value": "39", "boxes": ["コ", "サ"]}
          ]
        }
      ]
    }
  ]
};

window.MATH_SCHOOLS = (window.MATH_SCHOOLS || []).concat([{
  id: "kawai",
  name: "河合塾（模試）",
  eyebrow: "KAWAIJUKU / MOCK EXAM",
  exams: [
    {
      key: "kawai_2026_zenkijutsu2_typeI",
      label: "2026 第2回 全国記述模試 I型",
      shortLabel: "第2回記述 I型",
      sourceTitle: "2026年度 第2回 全国記述模試",
      sourceText: "I型（数学I・数学A）",
    },
  ],
}]);
