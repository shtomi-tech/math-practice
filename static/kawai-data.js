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

window.MATH_DATASETS.kawai_2026_zenkijutsu2_typeII = {
  "source_file_summary": {
    "detected_pages": 4,
    "notes": "河合塾 2026年度 第2回 全国記述模試 数学 II型（ユーザー提供の問題写真 IMG_1414〜IMG_1417＝冊子 p.6〜9）から転記。写真は問題のみで解答冊子は無いため、解答・解説は独立計算で新規作成し全マスを検算した（Python の sympy・総当りで検証済み）。原典は記述式だが、本アプリのマス目採点に合わせて数値・範囲・比・一般項をマス目化した。1マス＝符号込み1文字、2桁以上の値は\\boxed{}を桁数分並べている。大問1〜3（各50点）＝II型共通必須、大問4（50点）＝数学I・A・II必須／数学I・A・II・B選択、大問5（50点）＝数学I・A・II・B選択／数学I・A・II・B・C選択、大問6（50点）＝数学I・A・II・B・C選択。大問3はI型の大問4と同一問題。受験科目に応じて1〜3必答＋4〜6から1題選択の200点構成。"
  },
  "problem_groups": [
    {
      "group_number": "1",
      "page_numbers": [6],
      "title": "【II型共通・必須】約数・剰余の定理・三角関数・対数不等式（小問集合）",
      "subject": "数学",
      "unit": "河合塾 全国記述模試 2026 第2回 II型",
      "topic_tag": "整数の性質・式と証明・三角関数・対数",
      "difficulty": 2,
      "source_name": "河合塾 全国記述模試",
      "source_year": "2026 第2回",
      "stem_md": String.raw`《II型共通　必須問題》（配点 50点）`,
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": String.raw`$496$ の正の約数はいくつあるか。また，その総和を求めよ。

正の約数は $\boxed{\text{ア}}\boxed{\text{イ}}$ 個あり，その総和は $\boxed{\text{ウ}}\boxed{\text{エ}}\boxed{\text{オ}}$ である。`,
          "answer_fields": [
            {"format": "integer", "value": "10", "boxes": ["ア", "イ"]},
            {"format": "integer", "value": "992", "boxes": ["ウ", "エ", "オ"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": String.raw`多項式 $f(x)$ を $x-1$ で割ったときの余りが $2$，$x+2$ で割ったときの余りが $-1$ であるとき，$f(x)$ を $(x-1)(x+2)$ で割ったときの余りを求めよ。

余りは $x+\boxed{\text{カ}}$ である。`,
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["カ"]}
          ]
        },
        {
          "label": "(3)",
          "stem_md": String.raw`関数 $f(\theta)=\sin 2\theta-\sin\theta-\cos\theta$（$0\le\theta<2\pi$）について答えよ。

(i) $t=\sin\theta+\cos\theta$ とおくとき，$f(\theta)$ を $t$ で表せ。また $\theta$ が $0\le\theta<2\pi$ を動くときの $t$ の値の範囲を求めよ。$f(\theta)=t^{2}-t-\boxed{\text{キ}}$，$-\sqrt{\boxed{\text{ク}}}\le t\le\sqrt{\boxed{\text{ケ}}}$

(ii) $f(\theta)$ の最大値と最小値を求めよ。最大値 $\boxed{\text{コ}}+\sqrt{\boxed{\text{サ}}}$，最小値 $-\dfrac{\boxed{\text{シ}}}{\boxed{\text{ス}}}$`,
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["キ"]},
            {"format": "integer", "value": "2", "boxes": ["ク"]},
            {"format": "integer", "value": "2", "boxes": ["ケ"]},
            {"format": "integer", "value": "1", "boxes": ["コ"]},
            {"format": "integer", "value": "2", "boxes": ["サ"]},
            {"format": "integer", "value": "5", "boxes": ["シ"]},
            {"format": "integer", "value": "4", "boxes": ["ス"]}
          ]
        },
        {
          "label": "(4)",
          "stem_md": String.raw`不等式 $\log_{2}(x-1)\le\log_{4}(4-x^{2})-1$ を解け。$\boxed{\text{セ}}<x\le\dfrac{\boxed{\text{ソ}}}{\boxed{\text{タ}}}$`,
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["セ"]},
            {"format": "integer", "value": "8", "boxes": ["ソ"]},
            {"format": "integer", "value": "5", "boxes": ["タ"]}
          ]
        }
      ]
    },
    {
      "group_number": "2",
      "page_numbers": [7],
      "title": "【II型共通・必須】放物線の接線と面積（微分・積分）",
      "subject": "数学",
      "unit": "河合塾 全国記述模試 2026 第2回 II型",
      "topic_tag": "微分法と積分法",
      "difficulty": 3,
      "source_name": "河合塾 全国記述模試",
      "source_year": "2026 第2回",
      "stem_md": String.raw`《II型共通　必須問題》（配点 50点）

$a$ を $0$ でない実数の定数とし，$f(x)=ax^{2}$，$g(x)=-x^{2}+4x-3$ とする。$xy$ 平面上で曲線 $y=f(x)$，$y=g(x)$ をそれぞれ $C_{1}$，$C_{2}$ とし，$C_{1}$ 上の点 $\mathrm{A}(2,\ f(2))$ における $C_{1}$ の接線を $\ell$ とする。`,
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": String.raw`$\ell$ の方程式を $a$ を用いて表せ。$\ell:\ y=\boxed{\text{ア}}ax-\boxed{\text{イ}}a$`,
          "answer_fields": [
            {"format": "integer", "value": "4", "boxes": ["ア"]},
            {"format": "integer", "value": "4", "boxes": ["イ"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": String.raw`$\ell$ は $C_{2}$ に接するとする。

(i) $a$ の値を求めよ。$a=\dfrac{\boxed{\text{ウ}}}{\boxed{\text{エ}}}$

(ii) $C_{2}$ と $\ell$ および $y$ 軸で囲まれる部分の面積を求めよ。$\dfrac{\boxed{\text{オ}}}{\boxed{\text{カ}}}$

(iii) $y$ 軸の $y>0$ の部分に点 $\mathrm{P}$ をとる。$C_{1}$ と線分 $\mathrm{AP}$ および $y$ 軸で囲まれる部分の面積が (ii) の $4$ 倍となるとき，$\mathrm{P}$ の座標を求めよ。$\mathrm{P}\left(0,\ \dfrac{\boxed{\text{キ}}}{\boxed{\text{ク}}}\right)$`,
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["ウ"]},
            {"format": "integer", "value": "2", "boxes": ["エ"]},
            {"format": "integer", "value": "1", "boxes": ["オ"]},
            {"format": "integer", "value": "3", "boxes": ["カ"]},
            {"format": "integer", "value": "2", "boxes": ["キ"]},
            {"format": "integer", "value": "3", "boxes": ["ク"]}
          ]
        }
      ]
    },
    {
      "group_number": "3",
      "page_numbers": [8],
      "title": "【II型共通・必須】確率（反復試行・期待値・条件付き確率）",
      "subject": "数学",
      "unit": "河合塾 全国記述模試 2026 第2回 II型",
      "topic_tag": "場合の数と確率",
      "difficulty": 3,
      "source_name": "河合塾 全国記述模試",
      "source_year": "2026 第2回",
      "stem_md": String.raw`《II型共通　必須問題》（配点 50点）　※本問は I 型の大問4と同一問題。

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
    },
    {
      "group_number": "4",
      "page_numbers": [8],
      "title": "【II型・数I・A・II必須／II・B選択】円と直線・対称点・線分和の最小",
      "subject": "数学",
      "unit": "河合塾 全国記述模試 2026 第2回 II型",
      "topic_tag": "図形と方程式",
      "difficulty": 3,
      "source_name": "河合塾 全国記述模試",
      "source_year": "2026 第2回",
      "stem_md": String.raw`《II型　数学I・A・II 必須問題／数学I・A・II・B 選択問題》（配点 50点）

$a$ を実数の定数とする。$xy$ 平面上に

$$\text{円 }C:\ x^{2}+y^{2}-4ax-2ay+3a^{2}+4a-3=0,\qquad \text{直線 }\ell:\ y=x+2$$

があり，$C$ は $x$ 軸に接している。`,
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": String.raw`$a$ の値をすべて求めよ（小さい方を先に書く）。$a=\boxed{\text{ア}}$，$\boxed{\text{イ}}$`,
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["ア"]},
            {"format": "integer", "value": "3", "boxes": ["イ"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": String.raw`最大の $a$ に対応する $C$ を $C_{1}$，最小の $a$ に対応する $C$ を $C_{2}$ とし，$C_{1}$ の中心を $\mathrm{A}$ とする。

(i) $\ell$ に関して $\mathrm{A}$ と対称な点 $\mathrm{A}'$ の座標を求めよ。$\mathrm{A}'(\boxed{\text{ウ}},\ \boxed{\text{エ}})$

(ii) 点 $\mathrm{P}$ が $C_{2}$ 上を，点 $\mathrm{Q}$ が $\ell$ 上をそれぞれ動くとき，$\mathrm{PQ}+\mathrm{QA}$ の最小値を求めよ。$\boxed{\text{オ}}\sqrt{\boxed{\text{カ}}}-\boxed{\text{キ}}$`,
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["ウ"]},
            {"format": "integer", "value": "8", "boxes": ["エ"]},
            {"format": "integer", "value": "5", "boxes": ["オ"]},
            {"format": "integer", "value": "2", "boxes": ["カ"]},
            {"format": "integer", "value": "1", "boxes": ["キ"]}
          ]
        }
      ]
    },
    {
      "group_number": "5",
      "page_numbers": [9],
      "title": "【II型・数I・A・II・B選択／II・B・C選択】数列（和と一般項・共通項の積）",
      "subject": "数学",
      "unit": "河合塾 全国記述模試 2026 第2回 II型",
      "topic_tag": "数列",
      "difficulty": 3,
      "source_name": "河合塾 全国記述模試",
      "source_year": "2026 第2回",
      "stem_md": String.raw`《II型　数学I・A・II・B 選択問題／数学I・A・II・B・C 選択問題》（配点 50点）

数列 $\{a_{n}\}$ の初項 $a_{1}$ から第 $n$ 項 $a_{n}$ までの和を $S_{n}$ とするとき，

$$S_{n}=2a_{n}+n-4\qquad(n=1,\ 2,\ 3,\ \ldots)$$

が成り立つ。`,
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": String.raw`$a_{1}$ を求めよ。$a_{1}=\boxed{\text{ア}}$`,
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["ア"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": String.raw`$a_{n+1}$ を $a_{n}$ を用いて表せ。また，一般項 $a_{n}$ を求めよ。

$a_{n+1}=\boxed{\text{イ}}a_{n}-\boxed{\text{ウ}}$，$a_{n}=\boxed{\text{エ}}^{\,n}+\boxed{\text{オ}}$`,
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["イ"]},
            {"format": "integer", "value": "1", "boxes": ["ウ"]},
            {"format": "integer", "value": "2", "boxes": ["エ"]},
            {"format": "integer", "value": "1", "boxes": ["オ"]}
          ]
        },
        {
          "label": "(3)",
          "stem_md": String.raw`数列 $\{b_{n}\}$ を $b_{n}=7n+2$（$n=1,\ 2,\ 3,\ \ldots$）で定める。$\{a_{n}\}$ と $\{b_{n}\}$ に共通に含まれる数を小さい順に並べた数列を $\{c_{n}\}$ とするとき，積 $(c_{1}-1)(c_{2}-1)\cdots(c_{n}-1)$ を求めよ。

$(c_{1}-1)(c_{2}-1)\cdots(c_{n}-1)=\boxed{\text{カ}}^{\frac{n(n+1)}{2}}$`,
          "answer_fields": [
            {"format": "integer", "value": "8", "boxes": ["カ"]}
          ]
        }
      ]
    },
    {
      "group_number": "6",
      "page_numbers": [9],
      "title": "【II型・数I・A・II・B・C選択】平面ベクトル（内積・垂線の足・面積）",
      "subject": "数学",
      "unit": "河合塾 全国記述模試 2026 第2回 II型",
      "topic_tag": "ベクトル",
      "difficulty": 3,
      "source_name": "河合塾 全国記述模試",
      "source_year": "2026 第2回",
      "stem_md": String.raw`《II型　数学I・A・II・B・C 選択問題》（配点 50点）

$OA=5$，$OB=4$，$AB=7$ である三角形 $OAB$ があり，線分 $OB$ を $1:3$ に内分する点を $C$ とする。`,
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": String.raw`内積 $\overrightarrow{OA}\cdot\overrightarrow{OB}$ の値を求めよ。$\overrightarrow{OA}\cdot\overrightarrow{OB}=-\boxed{\text{ア}}$`,
          "answer_fields": [
            {"format": "integer", "value": "4", "boxes": ["ア"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": String.raw`$B$ から直線 $AC$ に引いた垂線と直線 $AC$ の交点を $H$ とする。

(i) $\overrightarrow{OH}$ を $\overrightarrow{OA}$，$\overrightarrow{OB}$ を用いて表せ。$\overrightarrow{OH}=-\dfrac{\boxed{\text{イ}}}{\boxed{\text{ウ}}\boxed{\text{エ}}}\,\overrightarrow{OA}+\dfrac{\boxed{\text{オ}}\boxed{\text{カ}}}{\boxed{\text{キ}}\boxed{\text{ク}}}\,\overrightarrow{OB}$

(ii) 三角形 $OAH$ の面積を求めよ。$\dfrac{\boxed{\text{ケ}}\boxed{\text{コ}}\sqrt{\boxed{\text{サ}}}}{\boxed{\text{シ}}\boxed{\text{ス}}}$`,
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["イ"]},
            {"format": "integer", "value": "14", "boxes": ["ウ", "エ"]},
            {"format": "integer", "value": "17", "boxes": ["オ", "カ"]},
            {"format": "integer", "value": "56", "boxes": ["キ", "ク"]},
            {"format": "integer", "value": "17", "boxes": ["ケ", "コ"]},
            {"format": "integer", "value": "6", "boxes": ["サ"]},
            {"format": "integer", "value": "14", "boxes": ["シ", "ス"]}
          ]
        }
      ]
    }
  ]
};

window.MATH_DATASETS.kawai_2026_zenkijutsu2_typeIII = {
  "source_file_summary": {
    "detected_pages": 4,
    "notes": "河合塾 2026年度 第2回 全国記述模試 数学 III型（ユーザー提供の問題写真 IMG_1418〜IMG_1421＝冊子 p.10〜13）から転記。写真は問題のみで解答冊子は無いため、解答・解説は独立計算で新規作成し全マスを検算した（Python の sympy・scipy・総当りで検証済み）。原典は記述式だが、本アプリのマス目採点に合わせて数値・範囲・不定積分・一般項をマス目化した。1マス＝符号込み1文字、2桁以上の値は\\boxed{}を桁数分並べている。大問1〜4（各40点）＝III型必須、大問5・6（各40点）＝III型選択問題（1題選択）。大問2はII型の大問5、大問3はII型の大問6と同一問題。受験科目は数学I・A・II・B・III・Cで、1〜4必答＋5・6から1題選択の200点構成。大問4・6は数学III（微分・積分）。証明問題（4(2)(3ii)）は、証明の要となる値をマス目にした（詳しい論証は解説に記載）。"
  },
  "problem_groups": [
    {
      "group_number": "1",
      "page_numbers": [10],
      "title": "【III型・必須】約数・確率・桁数・三角不等式（小問集合）",
      "subject": "数学",
      "unit": "河合塾 全国記述模試 2026 第2回 III型",
      "topic_tag": "整数の性質・確率・対数・三角関数",
      "difficulty": 3,
      "source_name": "河合塾 全国記述模試",
      "source_year": "2026 第2回",
      "stem_md": String.raw`《III型　必須問題》（配点 40点）`,
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": String.raw`$496$ の正の約数はいくつあるか。また，その総和を求めよ。

正の約数は $\boxed{\text{ア}}\boxed{\text{イ}}$ 個あり，その総和は $\boxed{\text{ウ}}\boxed{\text{エ}}\boxed{\text{オ}}$ である。`,
          "answer_fields": [
            {"format": "integer", "value": "10", "boxes": ["ア", "イ"]},
            {"format": "integer", "value": "992", "boxes": ["ウ", "エ", "オ"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": String.raw`1個のサイコロを3回投げる。

(i) 出た目の和が $6$ となる確率を求めよ。$\dfrac{\boxed{\text{カ}}}{\boxed{\text{キ}}\boxed{\text{ク}}\boxed{\text{ケ}}}$

(ii) 出た目の和が $6$ となるとき，3回とも出た目が異なる条件付き確率を求めよ。$\dfrac{\boxed{\text{コ}}}{\boxed{\text{サ}}}$`,
          "answer_fields": [
            {"format": "integer", "value": "5", "boxes": ["カ"]},
            {"format": "integer", "value": "108", "boxes": ["キ", "ク", "ケ"]},
            {"format": "integer", "value": "3", "boxes": ["コ"]},
            {"format": "integer", "value": "5", "boxes": ["サ"]}
          ]
        },
        {
          "label": "(3)",
          "stem_md": String.raw`$\log_{10}2=0.301$ とする。

(i) $2^{100}$ は何桁の整数か。$\boxed{\text{シ}}\boxed{\text{ス}}$ 桁

(ii) $2^{n}$ は最高位の数が $4$ である $22$ 桁の整数である。正の整数 $n$ の値を求めよ。$n=\boxed{\text{セ}}\boxed{\text{ソ}}$`,
          "answer_fields": [
            {"format": "integer", "value": "31", "boxes": ["シ", "ス"]},
            {"format": "integer", "value": "72", "boxes": ["セ", "ソ"]}
          ]
        },
        {
          "label": "(4)",
          "stem_md": String.raw`$0\le\theta<2\pi$ において，不等式 $\sqrt{3}\tan^{2}\theta-2\tan\theta-\sqrt{3}<0$ を解け。

$0\le\theta<\dfrac{\pi}{\boxed{\text{タ}}}$，$\dfrac{\boxed{\text{チ}}}{\boxed{\text{ツ}}}\pi<\theta<\dfrac{\boxed{\text{テ}}}{\boxed{\text{ト}}}\pi$，$\dfrac{\boxed{\text{ナ}}\boxed{\text{ニ}}}{\boxed{\text{ヌ}}}\pi<\theta<2\pi$`,
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["タ"]},
            {"format": "integer", "value": "5", "boxes": ["チ"]},
            {"format": "integer", "value": "6", "boxes": ["ツ"]},
            {"format": "integer", "value": "4", "boxes": ["テ"]},
            {"format": "integer", "value": "3", "boxes": ["ト"]},
            {"format": "integer", "value": "11", "boxes": ["ナ", "ニ"]},
            {"format": "integer", "value": "6", "boxes": ["ヌ"]}
          ]
        }
      ]
    },
    {
      "group_number": "2",
      "page_numbers": [10],
      "title": "【III型・必須】数列（和と一般項・共通項の積）",
      "subject": "数学",
      "unit": "河合塾 全国記述模試 2026 第2回 III型",
      "topic_tag": "数列",
      "difficulty": 3,
      "source_name": "河合塾 全国記述模試",
      "source_year": "2026 第2回",
      "stem_md": String.raw`《III型　必須問題》（配点 40点）　※本問は II 型の大問5と同一問題。

数列 $\{a_{n}\}$ の初項 $a_{1}$ から第 $n$ 項 $a_{n}$ までの和を $S_{n}$ とするとき，

$$S_{n}=2a_{n}+n-4\qquad(n=1,\ 2,\ 3,\ \ldots)$$

が成り立つ。`,
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": String.raw`$a_{1}$ を求めよ。$a_{1}=\boxed{\text{ア}}$`,
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["ア"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": String.raw`$a_{n+1}$ を $a_{n}$ を用いて表せ。また，一般項 $a_{n}$ を求めよ。

$a_{n+1}=\boxed{\text{イ}}a_{n}-\boxed{\text{ウ}}$，$a_{n}=\boxed{\text{エ}}^{\,n}+\boxed{\text{オ}}$`,
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["イ"]},
            {"format": "integer", "value": "1", "boxes": ["ウ"]},
            {"format": "integer", "value": "2", "boxes": ["エ"]},
            {"format": "integer", "value": "1", "boxes": ["オ"]}
          ]
        },
        {
          "label": "(3)",
          "stem_md": String.raw`数列 $\{b_{n}\}$ を $b_{n}=7n+2$（$n=1,\ 2,\ 3,\ \ldots$）で定める。$\{a_{n}\}$ と $\{b_{n}\}$ に共通に含まれる数を小さい順に並べた数列を $\{c_{n}\}$ とするとき，積 $(c_{1}-1)(c_{2}-1)\cdots(c_{n}-1)$ を求めよ。

$(c_{1}-1)(c_{2}-1)\cdots(c_{n}-1)=\boxed{\text{カ}}^{\frac{n(n+1)}{2}}$`,
          "answer_fields": [
            {"format": "integer", "value": "8", "boxes": ["カ"]}
          ]
        }
      ]
    },
    {
      "group_number": "3",
      "page_numbers": [11],
      "title": "【III型・必須】平面ベクトル（内積・垂線の足・面積）",
      "subject": "数学",
      "unit": "河合塾 全国記述模試 2026 第2回 III型",
      "topic_tag": "ベクトル",
      "difficulty": 3,
      "source_name": "河合塾 全国記述模試",
      "source_year": "2026 第2回",
      "stem_md": String.raw`《III型　必須問題》（配点 40点）　※本問は II 型の大問6と同一問題。

$OA=5$，$OB=4$，$AB=7$ である三角形 $OAB$ があり，線分 $OB$ を $1:3$ に内分する点を $C$ とする。`,
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": String.raw`内積 $\overrightarrow{OA}\cdot\overrightarrow{OB}$ の値を求めよ。$\overrightarrow{OA}\cdot\overrightarrow{OB}=-\boxed{\text{ア}}$`,
          "answer_fields": [
            {"format": "integer", "value": "4", "boxes": ["ア"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": String.raw`$B$ から直線 $AC$ に引いた垂線と直線 $AC$ の交点を $H$ とする。

(i) $\overrightarrow{OH}$ を $\overrightarrow{OA}$，$\overrightarrow{OB}$ を用いて表せ。$\overrightarrow{OH}=-\dfrac{\boxed{\text{イ}}}{\boxed{\text{ウ}}\boxed{\text{エ}}}\,\overrightarrow{OA}+\dfrac{\boxed{\text{オ}}\boxed{\text{カ}}}{\boxed{\text{キ}}\boxed{\text{ク}}}\,\overrightarrow{OB}$

(ii) 三角形 $OAH$ の面積を求めよ。$\dfrac{\boxed{\text{ケ}}\boxed{\text{コ}}\sqrt{\boxed{\text{サ}}}}{\boxed{\text{シ}}\boxed{\text{ス}}}$`,
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["イ"]},
            {"format": "integer", "value": "14", "boxes": ["ウ", "エ"]},
            {"format": "integer", "value": "17", "boxes": ["オ", "カ"]},
            {"format": "integer", "value": "56", "boxes": ["キ", "ク"]},
            {"format": "integer", "value": "17", "boxes": ["ケ", "コ"]},
            {"format": "integer", "value": "6", "boxes": ["サ"]},
            {"format": "integer", "value": "14", "boxes": ["シ", "ス"]}
          ]
        }
      ]
    },
    {
      "group_number": "4",
      "page_numbers": [11],
      "title": "【III型・必須】x²e⁻ˣ 型の関数の増減と指数方程式の解（数学III）",
      "subject": "数学",
      "unit": "河合塾 全国記述模試 2026 第2回 III型",
      "topic_tag": "微分法（数学III）",
      "difficulty": 4,
      "source_name": "河合塾 全国記述模試",
      "source_year": "2026 第2回",
      "stem_md": String.raw`《III型　必須問題》（配点 40点）

関数 $f(x)=x^{2}e^{-x}$ を考える。ただし $e$ は自然対数の底とする。`,
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": String.raw`$f(x)$ の極値を求めよ。極小値 $\boxed{\text{ア}}$（$x=\boxed{\text{イ}}$），極大値 $\dfrac{\boxed{\text{ウ}}}{e^{\boxed{\text{エ}}}}$（$x=\boxed{\text{オ}}$）`,
          "answer_fields": [
            {"format": "integer", "value": "0", "boxes": ["ア"]},
            {"format": "integer", "value": "0", "boxes": ["イ"]},
            {"format": "integer", "value": "4", "boxes": ["ウ"]},
            {"format": "integer", "value": "2", "boxes": ["エ"]},
            {"format": "integer", "value": "2", "boxes": ["オ"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": String.raw`$x\ge 0$ のとき $x^{2}e^{-\frac{x}{2}}\le\dfrac{16}{e^{2}}$ が成り立つことを示し，さらに $\displaystyle\lim_{x\to\infty}f(x)=0$ を示せ。

（証明の要点）$x\ge 0$ で $x^{2}e^{-\frac{x}{2}}$ が最大となるのは $x=\boxed{\text{カ}}$ のときである。`,
          "answer_fields": [
            {"format": "integer", "value": "4", "boxes": ["カ"]}
          ]
        },
        {
          "label": "(3)",
          "stem_md": String.raw`$a$ を実数の定数とし，方程式 $e^{x}=ax^{2}$ が3つの解 $\alpha,\ \beta,\ \gamma$（$\alpha<\beta<\gamma$）をもつとする。

(i) $a$ のとり得る値の範囲を求めよ。$a>\dfrac{e^{\boxed{\text{キ}}}}{\boxed{\text{ク}}}$

(ii) $\alpha+\beta>0$ かつ $\beta\gamma<4$ であることを示せ。$\alpha+\beta>\boxed{\text{ケ}}$，$\beta\gamma<\boxed{\text{コ}}$`,
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["キ"]},
            {"format": "integer", "value": "4", "boxes": ["ク"]},
            {"format": "integer", "value": "0", "boxes": ["ケ"]},
            {"format": "integer", "value": "4", "boxes": ["コ"]}
          ]
        }
      ]
    },
    {
      "group_number": "5",
      "page_numbers": [12],
      "title": "【III型・選択】軌跡と領域・対称式（(2x+1)(2y+1) の最大最小）",
      "subject": "数学",
      "unit": "河合塾 全国記述模試 2026 第2回 III型",
      "topic_tag": "図形と方程式・領域",
      "difficulty": 4,
      "source_name": "河合塾 全国記述模試",
      "source_year": "2026 第2回",
      "stem_md": String.raw`《III型　選択問題》（配点 40点）

原点を $O$ とする $xy$ 平面上に点 $\mathrm{A}(-3,\ -3)$ があり，$\mathrm{AP}\ge 2\mathrm{OP}$ を満たしながら動く点 $\mathrm{P}$ の範囲からなる領域を $D$ とする。`,
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": String.raw`$D$ を $xy$ 平面上に図示せよ。$D$ は円 $(x-\boxed{\text{ア}})^{2}+(y-\boxed{\text{イ}})^{2}\le\boxed{\text{ウ}}$ の周および内部である。`,
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["ア"]},
            {"format": "integer", "value": "1", "boxes": ["イ"]},
            {"format": "integer", "value": "8", "boxes": ["ウ"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": String.raw`点 $(x,\ y)$ が $D$ 上を動くとき，$x+y=s$，$xy=t$ で定まる点 $(s,\ t)$ の動く範囲を $st$ 平面上に図示せよ。

この領域は $-\boxed{\text{エ}}\le s\le\boxed{\text{オ}}$ の範囲で，$\dfrac{s^{2}-\boxed{\text{カ}}s-\boxed{\text{キ}}}{\boxed{\text{ク}}}\le t\le\dfrac{s^{2}}{\boxed{\text{ケ}}}$ を満たす部分である。`,
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["エ"]},
            {"format": "integer", "value": "6", "boxes": ["オ"]},
            {"format": "integer", "value": "2", "boxes": ["カ"]},
            {"format": "integer", "value": "6", "boxes": ["キ"]},
            {"format": "integer", "value": "2", "boxes": ["ク"]},
            {"format": "integer", "value": "4", "boxes": ["ケ"]}
          ]
        },
        {
          "label": "(3)",
          "stem_md": String.raw`点 $(x,\ y)$ が $D$ 上を動くとき，$(2x+1)(2y+1)$ の最大値と最小値を求めよ。

最大値 $\boxed{\text{コ}}\boxed{\text{サ}}$，最小値 $-\dfrac{\boxed{\text{シ}}\boxed{\text{ス}}}{\boxed{\text{セ}}}$`,
          "answer_fields": [
            {"format": "integer", "value": "49", "boxes": ["コ", "サ"]},
            {"format": "integer", "value": "23", "boxes": ["シ", "ス"]},
            {"format": "integer", "value": "2", "boxes": ["セ"]}
          ]
        }
      ]
    },
    {
      "group_number": "6",
      "page_numbers": [13],
      "title": "【III型・選択】部分積分と2曲線が直線で囲む面積（数学III）",
      "subject": "数学",
      "unit": "河合塾 全国記述模試 2026 第2回 III型",
      "topic_tag": "積分法（数学III）",
      "difficulty": 4,
      "source_name": "河合塾 全国記述模試",
      "source_year": "2026 第2回",
      "stem_md": String.raw`《III型　選択問題》（配点 40点）

$a$ を正の定数，$e$ を自然対数の底とし，

$$f(x)=axe^{1-x}-(a-1)x,\qquad g(x)=\dfrac{2x^{2}}{1+x^{2}}$$

とする。`,
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": String.raw`不定積分 $\displaystyle\int xe^{1-x}\,dx$ を求めよ。$\displaystyle\int xe^{1-x}\,dx=-(x+\boxed{\text{ア}})e^{1-x}+C$`,
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["ア"]}
          ]
        },
        {
          "label": "(2)",
          "stem_md": String.raw`直線 $y=x$ を $\ell$ とし，曲線 $y=f(x)$ と $\ell$ で囲まれる部分の面積を $S_{1}$，曲線 $y=g(x)$ と $\ell$ で囲まれる部分の面積を $S_{2}$ とする。$S_{1}=S_{2}$ となるときの $a$ の値を求めよ。

$a=\dfrac{\pi-\boxed{\text{イ}}}{\boxed{\text{ウ}}e-\boxed{\text{エ}}}$`,
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["イ"]},
            {"format": "integer", "value": "2", "boxes": ["ウ"]},
            {"format": "integer", "value": "5", "boxes": ["エ"]}
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
    {
      key: "kawai_2026_zenkijutsu2_typeII",
      label: "2026 第2回 全国記述模試 II型",
      shortLabel: "第2回記述 II型",
      sourceTitle: "2026年度 第2回 全国記述模試",
      sourceText: "II型（数学I・A・II・B・C）",
    },
    {
      key: "kawai_2026_zenkijutsu2_typeIII",
      label: "2026 第2回 全国記述模試 III型",
      shortLabel: "第2回記述 III型",
      sourceTitle: "2026年度 第2回 全国記述模試",
      sourceText: "III型（数学I・A・II・B・III・C）",
    },
  ],
}]);
