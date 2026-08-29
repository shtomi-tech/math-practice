window.MATH_SOLUTIONS = window.MATH_SOLUTIONS || {};
window.MATH_SOLUTIONS.kawai_2026_zenkijutsu2_typeI = {
  "1-(1)": {
    approach: String.raw`和 $x+y$ と積 $xy$ を先に求め，求める式をこの2つ（基本対称式）で表してから代入する。`,
    formula: {
      title: "対称式の変形",
      body: String.raw`$\dfrac{1}{x}+\dfrac{1}{y}=\dfrac{x+y}{xy}$，$\dfrac{1}{x^{2}}+\dfrac{1}{y^{2}}=\left(\dfrac{1}{x}+\dfrac{1}{y}\right)^{2}-\dfrac{2}{xy}$`
    },
    solution: String.raw`$x+y=6$，$xy=(3+\sqrt{5})(3-\sqrt{5})=3^{2}-(\sqrt{5})^{2}=4$ である。

(i) $xy=4$。

(ii) $\dfrac{1}{x}+\dfrac{1}{y}=\dfrac{x+y}{xy}=\dfrac{6}{4}=\dfrac{3}{2}$。

(iii) $\dfrac{1}{x^{2}}+\dfrac{1}{y^{2}}=\left(\dfrac{3}{2}\right)^{2}-\dfrac{2}{4}=\dfrac{9}{4}-\dfrac{1}{2}=\dfrac{7}{4}$。`,
    answer: String.raw`$xy=4$，$\dfrac{1}{x}+\dfrac{1}{y}=\dfrac{3}{2}$，$\dfrac{1}{x^{2}}+\dfrac{1}{y^{2}}=\dfrac{7}{4}$`
  },
  "1-(2)": {
    approach: String.raw`(i) $A\le B<C$ は「$A\le B$」と「$B<C$」に分けて解く。(ii) 1次式を2次式に代入して $x$ の2次方程式にする。`,
    formula: {
      title: "連立不等式",
      body: String.raw`$A\le B<C \iff (A\le B)\ \text{かつ}\ (B<C)$`
    },
    solution: String.raw`(i) $2x-1\le 5-x$ より $3x\le 6$，$x\le 2$。$5-x<4$ より $x>1$。共通範囲は $1<x\le 2$。

(ii) $y=5-2x$ を $x^{2}+3y=10$ に代入すると，
$$x^{2}+3(5-2x)=10,\quad x^{2}-6x+5=0,\quad (x-1)(x-5)=0.$$
$x=1$ のとき $y=3$，$x=5$ のとき $y=-5$。`,
    answer: String.raw`(i) $1<x\le 2$　(ii) $(x,y)=(1,3),\ (5,-5)$`
  },
  "1-(3)": {
    approach: String.raw`(i) 絶対値不等式は $-k\le\bigcirc\le k$ の形に開く。(ii)「$p$ が $q$ であるための必要条件」は「$q\Rightarrow p$」，すなわち $q$ の表す範囲が $p$ の表す範囲に含まれること。`,
    formula: {
      title: "必要条件と包含関係",
      body: String.raw`$|X|\le k \iff -k\le X\le k$。「$p$ は $q$ の必要条件」$\iff \{x\mid q\}\subset\{x\mid p\}$`
    },
    solution: String.raw`(i) $|2x-1|\le 5$ より $-5\le 2x-1\le 5$，$-4\le 2x\le 6$，$-2\le x\le 3$。

(ii)「$p$ が $q$ であるための必要条件」は「$q\Rightarrow p$」であり，$q$ の範囲 $-a\le x\le a$ が $p$ の範囲 $-2\le x\le 3$ に含まれればよい。$a>0$ より $-a<0<a$ だから，条件は
$$-2\le -a\quad\text{かつ}\quad a\le 3,$$
すなわち $a\le 2$ かつ $a\le 3$。$a>0$ とあわせて $0<a\le 2$。`,
    answer: String.raw`(i) $-2\le x\le 3$　(ii) $0<a\le 2$`
  },
  "1-(4)": {
    approach: String.raw`直円錐なので $AC=AB=3$，底面の半径は $\dfrac{BC}{2}=1$。外接球は，頂点 $A$ と直径 $BC$ を通る断面で考えると $\triangle ABC$ の外接円が大円になる。最短経路は側面の展開図で直線として測る。`,
    formula: {
      title: "円錐と展開図",
      body: String.raw`$V=\dfrac{1}{3}\pi r^{2}h$，外接円の半径 $R=\dfrac{abc}{4S}$，展開した扇形の中心角 $\theta=2\pi\cdot\dfrac{r}{(\text{母線})}$`
    },
    solution: String.raw`底面の半径は $r=\dfrac{BC}{2}=1$，母線は $AB=AC=3$。

(i) 高さは $h=\sqrt{3^{2}-1^{2}}=2\sqrt{2}$ だから，
$$V=\dfrac{1}{3}\pi\cdot 1^{2}\cdot 2\sqrt{2}=\dfrac{2\sqrt{2}}{3}\pi.$$

(ii) 頂点 $A$ と底面の直径 $BC$ を通る平面で切ると，断面は $AB=AC=3$，$BC=2$ の二等辺三角形で，外接球の半径 $R$ はこの三角形の外接円の半径に等しい。$S=\dfrac{1}{2}\cdot BC\cdot h=\dfrac{1}{2}\cdot 2\cdot 2\sqrt{2}=2\sqrt{2}$ だから，
$$R=\dfrac{AB\cdot BC\cdot CA}{4S}=\dfrac{3\cdot 2\cdot 3}{4\cdot 2\sqrt{2}}=\dfrac{18}{8\sqrt{2}}=\dfrac{9\sqrt{2}}{8}.$$

(iii) 展開図の扇形は半径 $3$，弧の長さが底面の周 $2\pi\cdot 1=2\pi$ だから，
$$\theta=\dfrac{2\pi}{3}.$$
この扇形上で母線 $AB$ と母線 $AC$ のなす角は，$B$ から $C$ まで底面を半周する分に対応するので $\dfrac{\pi}{3}$。$AB=3$，$AD=1$ を2辺とし，そのなす角が $\dfrac{\pi}{3}$ の三角形で余弦定理を用いると，
$$\ell^{2}=3^{2}+1^{2}-2\cdot 3\cdot 1\cdot\cos\dfrac{\pi}{3}=10-3=7.$$`,
    answer: String.raw`(i) $V=\dfrac{2\sqrt{2}}{3}\pi$　(ii) $R=\dfrac{9\sqrt{2}}{8}$　(iii) $\theta=\dfrac{2\pi}{3}$，$\ell=\sqrt{7}$`
  },
  "2-(1)": {
    approach: String.raw`2辺とその間の角がわかっているので余弦定理。`,
    formula: {
      title: "余弦定理",
      body: String.raw`$CA^{2}=AB^{2}+BC^{2}-2\cdot AB\cdot BC\cos\angle ABC$`
    },
    solution: String.raw`
$$CA^{2}=7^{2}+6^{2}-2\cdot 7\cdot 6\cdot\dfrac{16}{21}=85-84\cdot\dfrac{16}{21}=85-64=21.$$`,
    answer: String.raw`$CA=\sqrt{21}$`
  },
  "2-(2)": {
    approach: String.raw`$\triangle ACD$ で，辺 $AC$ とその対角 $\angle ADC$，外接円の半径の関係は正弦定理。`,
    formula: {
      title: "正弦定理",
      body: String.raw`$\dfrac{AC}{\sin\angle ADC}=2R$（$R$ は $\triangle ACD$ の外接円の半径）`
    },
    solution: String.raw`$\triangle ACD$ の外接円の半径が $\sqrt{7}$，$AC=\sqrt{21}$ だから，正弦定理より
$$\sin\angle ADC=\dfrac{AC}{2\sqrt{7}}=\dfrac{\sqrt{21}}{2\sqrt{7}}=\dfrac{\sqrt{3}}{2}.$$
$\angle ADC$ は鋭角なので $\angle ADC=60^{\circ}$。`,
    answer: String.raw`$\angle ADC=60^{\circ}$`
  },
  "2-(3)": {
    approach: String.raw`$\angle ADC=60^{\circ}$，$AD=4$，$AC=\sqrt{21}$ で余弦定理から $CD$ を出す。内接円の半径は $r=\dfrac{S}{s}$（$S$ は面積，$s$ は周の半分）。`,
    formula: {
      title: "面積と内接円の半径",
      body: String.raw`$S=\dfrac{1}{2}\cdot AD\cdot CD\sin\angle ADC$，$r=\dfrac{S}{s}$，$s=\dfrac{AD+CD+CA}{2}$`
    },
    solution: String.raw`余弦定理より
$$21=4^{2}+CD^{2}-2\cdot 4\cdot CD\cos 60^{\circ}=16+CD^{2}-4CD,$$
$$CD^{2}-4CD-5=0,\quad (CD-5)(CD+1)=0,\quad CD=5.$$
このとき $S=\dfrac{1}{2}\cdot 4\cdot 5\sin 60^{\circ}=5\sqrt{3}$，$s=\dfrac{4+5+\sqrt{21}}{2}=\dfrac{9+\sqrt{21}}{2}$ だから，
$$r=\dfrac{S}{s}=\dfrac{10\sqrt{3}}{9+\sqrt{21}}=\dfrac{10\sqrt{3}\,(9-\sqrt{21})}{81-21}=\dfrac{\sqrt{3}\,(9-\sqrt{21})}{6}=\dfrac{9\sqrt{3}-3\sqrt{7}}{6}=\dfrac{3\sqrt{3}-\sqrt{7}}{2}.$$`,
    answer: String.raw`$CD=5$，$r=\dfrac{3\sqrt{3}-\sqrt{7}}{2}$`
  },
  "3-(1)": {
    approach: String.raw`通る3点の座標を $y=ax^{2}+bx+c$ に代入し，$a,b,c$ の連立方程式を解く。`,
    formula: {
      title: "係数の決定",
      body: String.raw`点 $(x_{0},y_{0})$ を通る $\iff y_{0}=ax_{0}^{2}+bx_{0}+c$`
    },
    solution: String.raw`3点を代入して，
$$a-b+c=10,\qquad a+b+c=2,\qquad 4a+2b+c=4.$$
第2式$-$第1式より $2b=-8$，$b=-4$。第1式$+$第2式より $a+c=6$。第3式$-$第2式より $3a+b=2$ なので $3a=6$，$a=2$。よって $c=4$。（$f(x)=2x^{2}-4x+4$）`,
    answer: String.raw`$a=2$，$b=-4$，$c=4$`
  },
  "3-(2)": {
    approach: String.raw`$f(x)$ を平方完成して頂点をとらえ，「$x$ 軸対称 → 平行移動」を頂点の移動として追う。$x^{2}$ の係数は対称移動で符号が変わり，平行移動では変わらない。`,
    formula: {
      title: "頂点の移動",
      body: String.raw`$y=a(x-p)^{2}+q$ を $x$ 方向 $s$，$y$ 方向 $t$ 平行移動 $\Rightarrow y=a(x-p-s)^{2}+q+t$`
    },
    solution: String.raw`$f(x)=2x^{2}-4x+4=2(x-1)^{2}+2$ なので，$G$ の頂点は $(1,2)$，$x^{2}$ の係数は $2$。

$x$ 軸に関して対称移動すると，頂点は $(1,-2)$ に移り，$x^{2}$ の係数は $-2$ になる：$y=-2(x-1)^{2}-2$。

さらに $x$ 軸方向に $p-1$，$y$ 軸方向に $p^{2}+2p$ だけ平行移動すると，$x^{2}$ の係数 $-2$ は変わらず，頂点だけが
$$\bigl(1+(p-1),\ -2+(p^{2}+2p)\bigr)=\bigl(p,\ p^{2}+2p-2\bigr)$$
に移る。頂点形で表した放物線を展開すれば，選択肢のうち一致するものが1つ定まる。`,
    answer: String.raw`①（$g(x)=-2(x-p)^{2}+p^{2}+2p-2$）`
  },
  "3-(3)": {
    approach: String.raw`(i) $f(x)-g(x)\ge 0$ がすべての $x$ で成り立つ条件は，$f(x)-g(x)$ が下に凸なので判別式 $\le 0$。(ii)「どの $x_{1},x_{2}$ でも」は $x_{1},x_{2}$ が独立なので（$f$ の最小値）$\ge$（$g$ の最大値）。`,
    formula: {
      title: "つねに成り立つ不等式",
      body: String.raw`$Ax^{2}+Bx+C\ge 0$ がつねに成立 $\iff A>0$ かつ $B^{2}-4AC\le 0$`
    },
    solution: String.raw`(i)
$$f(x)-g(x)=2x^{2}-4x+4-\bigl\{-2(x-p)^{2}+p^{2}+2p-2\bigr\}=4x^{2}-(4+4p)x+(p^{2}-2p+6).$$
$x^{2}$ の係数 $4>0$ なので，つねに $0$ 以上となる条件は判別式 $\le 0$：
$$(4+4p)^{2}-16(p^{2}-2p+6)\le 0.$$
$16$ で割ると $(1+p)^{2}-(p^{2}-2p+6)\le 0$，すなわち $4p-5\le 0$。よって $p\le\dfrac{5}{4}$。

(ii) $f(x)=2(x-1)^{2}+2$ の最小値は $2$，$g(x)=-2(x-p)^{2}+(p^{2}+2p-2)$ の最大値は $p^{2}+2p-2$。すべての $x_{1},x_{2}$ で $f(x_{1})\ge g(x_{2})$ となる条件は
$$2\ge p^{2}+2p-2,\qquad p^{2}+2p-4\le 0.$$
$p^{2}+2p-4=0$ の解は $p=-1\pm\sqrt{5}$ だから，$-1-\sqrt{5}\le p\le -1+\sqrt{5}$。`,
    answer: String.raw`(i) $p\le\dfrac{5}{4}$　(ii) $-1-\sqrt{5}\le p\le -1+\sqrt{5}$`
  },
  "4-(1)": {
    approach: String.raw`1回の操作で赤球が1個増えるのは目が $1,2,3,4$ のとき。増える確率 $\dfrac{2}{3}$ の試行を4回行うと考え，反復試行の確率を使う。`,
    formula: {
      title: "反復試行の確率",
      body: String.raw`$P(X=k)={}_{4}\mathrm{C}_{k}\left(\dfrac{2}{3}\right)^{k}\left(\dfrac{1}{3}\right)^{4-k}$`
    },
    solution: String.raw`どの規則でも赤球が増えるのは目が $1,2$（赤白）または $3,4$（赤青）のときで，その確率は $\dfrac{4}{6}=\dfrac{2}{3}$。増えないのは目が $5,6$ のときで確率 $\dfrac{1}{3}$。よって $X$ は成功確率 $\dfrac{2}{3}$ の試行を4回行ったときの成功回数である。
$$P(X=0)=\left(\dfrac{1}{3}\right)^{4}=\dfrac{1}{81},\qquad P(X=1)={}_{4}\mathrm{C}_{1}\left(\dfrac{2}{3}\right)\left(\dfrac{1}{3}\right)^{3}=\dfrac{8}{81}.$$`,
    answer: String.raw`$P(X=0)=\dfrac{1}{81}$，$P(X=1)=\dfrac{8}{81}$`
  },
  "4-(2)": {
    approach: String.raw`$X$ は二項分布に従うので，期待値は（試行回数）$\times$（1回の成功確率）。`,
    formula: {
      title: "二項分布の期待値",
      body: String.raw`$X\sim B(n,p)$ のとき $E(X)=np$`
    },
    solution: String.raw`$X$ は $B\!\left(4,\ \dfrac{2}{3}\right)$ に従うから，
$$E(X)=4\cdot\dfrac{2}{3}=\dfrac{8}{3}.$$`,
    answer: String.raw`$E(X)=\dfrac{8}{3}$`
  },
  "4-(3)": {
    approach: String.raw`4回の目の内訳を A（赤白）・B（赤青）・C（白青）の回数 $a,b,c$ でとらえる。$X=4\iff c=0$。3色そろう確率は「ある色が欠ける」余事象で数え，条件付き確率の定義に当てはめる。`,
    formula: {
      title: "条件付き確率",
      body: String.raw`$P(X=4\mid 3色そろう)=\dfrac{P(X=4\ \text{かつ}\ 3色そろう)}{P(3色そろう)}$`
    },
    solution: String.raw`各回の結果を A（赤白），B（赤青），C（白青）とし，その回数を $a,b,c$（$a+b+c=4$）とする。全事象は $3^{4}=81$ 通りで，各列は同様に確からしい。赤球の個数は $X=a+b$ なので $X=4\iff c=0$。

色が欠けるのは次の互いに排反な場合だけ：赤が無い $\iff c=4$，白が無い $\iff b=4$，青が無い $\iff a=4$。よって
$$P(3色そろう)=1-\dfrac{3}{81}=\dfrac{78}{81}=\dfrac{26}{27}.$$
$X=4$ かつ3色そろうのは $c=0$ かつ $a\ge 1$ かつ $b\ge 1$，すなわち各回が A か B で「全部 A」「全部 B」を除く $2^{4}-2=14$ 通り。よって $P(X=4\ \text{かつ}\ 3色そろう)=\dfrac{14}{81}$ であり，
$$P(X=4\mid 3色そろう)=\dfrac{14/81}{78/81}=\dfrac{14}{78}=\dfrac{7}{39}.$$`,
    answer: String.raw`$\dfrac{7}{39}$`
  }
};
