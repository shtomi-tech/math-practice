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

window.MATH_SOLUTIONS.kawai_2026_zenkijutsu2_typeII = {
  "1-(1)": {
    approach: String.raw`素因数分解してから，約数の個数と総和の公式を用いる。`,
    formula: {
      title: "約数の個数と総和",
      body: String.raw`$N=p^{a}q^{b}$ のとき，正の約数の個数は $(a+1)(b+1)$，総和は $(1+p+\cdots+p^{a})(1+q+\cdots+q^{b})$。`
    },
    solution: String.raw`$496=2^{4}\times 31$ である。正の約数の個数は
$$(4+1)(1+1)=10.$$
総和は
$$(1+2+4+8+16)(1+31)=31\times 32=992.$$`,
    answer: String.raw`約数は $10$ 個，総和は $992$`
  },
  "1-(2)": {
    approach: String.raw`余りを $ax+b$ とおき，剰余の定理から $f(1)=2$，$f(-2)=-1$ を用いて連立方程式を立てる。`,
    formula: {
      title: "剰余の定理",
      body: String.raw`$f(x)$ を $x-\alpha$ で割った余りは $f(\alpha)$。`
    },
    solution: String.raw`$f(x)=(x-1)(x+2)Q(x)+ax+b$ とおく。剰余の定理より
$$f(1)=a+b=2,\qquad f(-2)=-2a+b=-1.$$
辺々を引くと $3a=3$ となり，$a=1$，$b=1$。`,
    answer: String.raw`$x+1$`
  },
  "1-(3)": {
    approach: String.raw`$t^{2}=1+2\sin\theta\cos\theta$ を使って $f(\theta)$ を $t$ の2次式に直す。$t$ の範囲は合成 $t=\sqrt{2}\sin\!\left(\theta+\frac{\pi}{4}\right)$ から。(ii) は区間内での2次関数の最大・最小。`,
    formula: {
      title: "sin+cos の合成と2乗",
      body: String.raw`$t=\sin\theta+\cos\theta=\sqrt{2}\sin\!\left(\theta+\dfrac{\pi}{4}\right)$，$t^{2}=1+2\sin\theta\cos\theta$`
    },
    solution: String.raw`(i) $t^{2}=(\sin\theta+\cos\theta)^{2}=1+2\sin\theta\cos\theta=1+\sin 2\theta$ より $\sin 2\theta=t^{2}-1$。よって
$$f(\theta)=\sin 2\theta-(\sin\theta+\cos\theta)=(t^{2}-1)-t=t^{2}-t-1.$$
$t=\sqrt{2}\sin\!\left(\theta+\dfrac{\pi}{4}\right)$ で，$0\le\theta<2\pi$ のとき $\sin\!\left(\theta+\dfrac{\pi}{4}\right)$ は $-1$ から $1$ までのすべての値をとるから $-\sqrt{2}\le t\le\sqrt{2}$。

(ii) $g(t)=t^{2}-t-1=\left(t-\dfrac{1}{2}\right)^{2}-\dfrac{5}{4}$。区間 $-\sqrt{2}\le t\le\sqrt{2}$ に頂点 $t=\dfrac{1}{2}$ が含まれるので最小値は $-\dfrac{5}{4}$。最大値は端点を比べて，$g(-\sqrt{2})=1+\sqrt{2}$，$g(\sqrt{2})=1-\sqrt{2}$ より $1+\sqrt{2}$。`,
    answer: String.raw`(i) $f(\theta)=t^{2}-t-1$，$-\sqrt{2}\le t\le\sqrt{2}$　(ii) 最大値 $1+\sqrt{2}$，最小値 $-\dfrac{5}{4}$`
  },
  "1-(4)": {
    approach: String.raw`まず真数条件で範囲を絞る。$\log_{4}M=\dfrac{1}{2}\log_{2}M$ で底を $2$ にそろえ，$\log_{2}$ の単調性で中身の不等式に直して解く。`,
    formula: {
      title: "底の変換と対数の単調性",
      body: String.raw`$\log_{4}M=\dfrac{1}{2}\log_{2}M$，$\log_{2}$ は増加関数。`
    },
    solution: String.raw`真数条件は $x-1>0$ かつ $4-x^{2}>0$ より $1<x<2$。

$\log_{4}(4-x^{2})=\dfrac{1}{2}\log_{2}(4-x^{2})$ だから，両辺を $2$ 倍すると
$$2\log_{2}(x-1)\le\log_{2}(4-x^{2})-2,\qquad \log_{2}(x-1)^{2}\le\log_{2}\dfrac{4-x^{2}}{4}.$$
$\log_{2}$ は増加関数なので
$$(x-1)^{2}\le\dfrac{4-x^{2}}{4},\quad 4(x-1)^{2}\le 4-x^{2},\quad 5x^{2}-8x\le 0,\quad x(5x-8)\le 0.$$
よって $0\le x\le\dfrac{8}{5}$。真数条件 $1<x<2$ とあわせて $1<x\le\dfrac{8}{5}$。`,
    answer: String.raw`$1<x\le\dfrac{8}{5}$`
  },
  "2-(1)": {
    approach: String.raw`$f'(x)=2ax$ から接点 $\mathrm{A}(2,\ 4a)$ での傾き $4a$ を求め，接線の式を作る。`,
    formula: {
      title: "接線の方程式",
      body: String.raw`$y=f'(t)(x-t)+f(t)$`
    },
    solution: String.raw`$f(x)=ax^{2}$ より $f'(x)=2ax$。$\mathrm{A}(2,\ f(2))=(2,\ 4a)$ での傾きは $f'(2)=4a$ だから，
$$\ell:\ y=4a(x-2)+4a=4ax-4a.$$`,
    answer: String.raw`$\ell:\ y=4ax-4a$`
  },
  "2-(2)": {
    approach: String.raw`(i) $\ell$ と $C_{2}$ を連立し，重解条件（判別式 $=0$）で $a$ を決める。(ii)(iii) は差が $(x-\alpha)^{2}$ の形になることを使って積分する。`,
    formula: {
      title: "接する条件と面積",
      body: String.raw`2次方程式が重解をもつ $\iff$ 判別式 $=0$。$\displaystyle\int_{\alpha}^{\beta}(x-\alpha)^{2}dx=\dfrac{(\beta-\alpha)^{3}}{3}$`
    },
    solution: String.raw`(i) $4ax-4a=-x^{2}+4x-3$ を整理すると $x^{2}+(4a-4)x+(3-4a)=0$。接する条件は判別式 $=0$：
$$(4a-4)^{2}-4(3-4a)=16a^{2}-16a+4=4(2a-1)^{2}=0,\qquad a=\dfrac{1}{2}.$$

(ii) $a=\dfrac{1}{2}$ のとき $\ell:\ y=2x-2$。$\ell-C_{2}=(2x-2)-(-x^{2}+4x-3)=(x-1)^{2}\ge 0$ で，$x=1$ で接する。$y$ 軸から接点までで囲むから，
$$\int_{0}^{1}(x-1)^{2}\,dx=\left[\dfrac{(x-1)^{3}}{3}\right]_{0}^{1}=\dfrac{1}{3}.$$

(iii) $\mathrm{A}(2,\ 2)$，$\mathrm{P}(0,\ p)$（$p>0$）とすると，直線 $\mathrm{AP}$ は $y=p+\dfrac{2-p}{2}x$。$C_{1}:\ y=\dfrac{x^{2}}{2}$ との差は $x=2$ で $0$ になり，$0\le x\le 2$ で $\mathrm{AP}$ が上側。囲む面積は
$$\int_{0}^{2}\left(p+\dfrac{2-p}{2}x-\dfrac{x^{2}}{2}\right)dx=2p+(2-p)-\dfrac{4}{3}=p+\dfrac{2}{3}.$$
これが (ii) の $4$ 倍 $\dfrac{4}{3}$ に等しいから $p+\dfrac{2}{3}=\dfrac{4}{3}$，$p=\dfrac{2}{3}$。`,
    answer: String.raw`(i) $a=\dfrac{1}{2}$　(ii) $\dfrac{1}{3}$　(iii) $\mathrm{P}\left(0,\ \dfrac{2}{3}\right)$`
  },
  "3-(1)": {
    approach: String.raw`1回の操作で赤球が増えるのは目が $1,2,3,4$ のとき。増える確率 $\dfrac{2}{3}$ の試行を4回行うと考え，反復試行の確率を使う。`,
    formula: {
      title: "反復試行の確率",
      body: String.raw`$P(X=k)={}_{4}\mathrm{C}_{k}\left(\dfrac{2}{3}\right)^{k}\left(\dfrac{1}{3}\right)^{4-k}$`
    },
    solution: String.raw`赤球が増えるのは目が $1,2$（赤白）または $3,4$（赤青）のときで，その確率は $\dfrac{4}{6}=\dfrac{2}{3}$。増えないのは目が $5,6$ のときで確率 $\dfrac{1}{3}$。よって $X$ は成功確率 $\dfrac{2}{3}$ の試行を4回行ったときの成功回数である。
$$P(X=0)=\left(\dfrac{1}{3}\right)^{4}=\dfrac{1}{81},\qquad P(X=1)={}_{4}\mathrm{C}_{1}\left(\dfrac{2}{3}\right)\left(\dfrac{1}{3}\right)^{3}=\dfrac{8}{81}.$$`,
    answer: String.raw`$P(X=0)=\dfrac{1}{81}$，$P(X=1)=\dfrac{8}{81}$`
  },
  "3-(2)": {
    approach: String.raw`$X$ は二項分布に従うので，期待値は（試行回数）$\times$（1回の成功確率）。`,
    formula: {
      title: "二項分布の期待値",
      body: String.raw`$X\sim B(n,p)$ のとき $E(X)=np$`
    },
    solution: String.raw`$X$ は $B\!\left(4,\ \dfrac{2}{3}\right)$ に従うから，
$$E(X)=4\cdot\dfrac{2}{3}=\dfrac{8}{3}.$$`,
    answer: String.raw`$E(X)=\dfrac{8}{3}$`
  },
  "3-(3)": {
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
  },
  "4-(1)": {
    approach: String.raw`円の方程式を標準形に直して中心と半径を $a$ で表す。$x$ 軸に接する $\iff$（中心の $y$ 座標）$^{2}=$（半径）$^{2}$。`,
    formula: {
      title: "円の標準形と接する条件",
      body: String.raw`平方完成で中心・半径を求める。$x$ 軸に接する $\iff (\text{中心の }y\text{ 座標})^{2}=r^{2}$`
    },
    solution: String.raw`平方完成すると
$$(x-2a)^{2}+(y-a)^{2}=2a^{2}-4a+3.$$
中心 $(2a,\ a)$，$r^{2}=2a^{2}-4a+3\ (>0)$。$x$ 軸に接するのは $a^{2}=2a^{2}-4a+3$，すなわち
$$a^{2}-4a+3=0,\qquad (a-1)(a-3)=0.$$`,
    answer: String.raw`$a=1,\ 3$`
  },
  "4-(2)": {
    approach: String.raw`(i) 対称点は「中点が $\ell$ 上」「$\mathrm{AA'}\perp\ell$」の2条件で求める。(ii) $\mathrm{Q}\in\ell$ なら $\mathrm{QA}=\mathrm{QA'}$ なので $\mathrm{PQ}+\mathrm{QA}\ge\mathrm{PA'}$，さらに $\mathrm{P}\in C_{2}$ から下限を出す。`,
    formula: {
      title: "対称点と折れ線の最短",
      body: String.raw`$\ell$ 上の点 $\mathrm{Q}$ について $\mathrm{QA}=\mathrm{QA'}$（$\mathrm{A'}$ は $\ell$ に関する $\mathrm{A}$ の対称点）。`
    },
    solution: String.raw`$a=3$ のとき $C_{1}$ は中心 $\mathrm{A}(6,\ 3)$，半径 $3$。$a=1$ のとき $C_{2}$ は中心 $(2,\ 1)$，半径 $1$。

(i) $\mathrm{A'}(s,\ t)$ とおくと，中点 $\left(\dfrac{6+s}{2},\ \dfrac{3+t}{2}\right)$ が $\ell:\ y=x+2$ 上にあり，かつ $\mathrm{AA'}$ が $\ell$（傾き $1$）と垂直だから
$$\dfrac{3+t}{2}=\dfrac{6+s}{2}+2,\qquad \dfrac{t-3}{s-6}=-1.$$
これを解いて $\mathrm{A'}(1,\ 8)$。

(ii) $\mathrm{Q}\in\ell$ より $\mathrm{QA}=\mathrm{QA'}$ だから $\mathrm{PQ}+\mathrm{QA}=\mathrm{PQ}+\mathrm{QA'}\ge\mathrm{PA'}$。$\mathrm{A}$ と $\mathrm{A'}$，$C_{2}$ と $\mathrm{A'}$ は $\ell$ の反対側にあるので，線分をとる $\mathrm{Q}$ で等号が成り立つ。さらに $\mathrm{P}\in C_{2}$ なので，$\mathrm{PA'}$ の最小値は $C_{2}$ の中心と $\mathrm{A'}$ の距離から半径 $1$ を引いた値：
$$\sqrt{(2-1)^{2}+(1-8)^{2}}-1=\sqrt{50}-1=5\sqrt{2}-1.$$`,
    answer: String.raw`(i) $\mathrm{A'}(1,\ 8)$　(ii) $5\sqrt{2}-1$`
  },
  "5-(1)": {
    approach: String.raw`$S_{1}=a_{1}$ を使い，$n=1$ を条件式に代入する。`,
    formula: {
      title: "和と項の関係",
      body: String.raw`$S_{1}=a_{1}$，$n\ge 2$ で $a_{n}=S_{n}-S_{n-1}$`
    },
    solution: String.raw`$n=1$ とすると
$$S_{1}=a_{1}=2a_{1}+1-4=2a_{1}-3.$$
よって $a_{1}=3$。`,
    answer: String.raw`$a_{1}=3$`
  },
  "5-(2)": {
    approach: String.raw`$a_{n+1}=S_{n+1}-S_{n}$ に条件式を代入して漸化式を作り，特性方程式（$\alpha=2\alpha-1$）で一般項を求める。`,
    formula: {
      title: "1次の漸化式",
      body: String.raw`$a_{n+1}=pa_{n}+q$ は $a_{n+1}-\alpha=p(a_{n}-\alpha)$ と変形（$\alpha=p\alpha+q$）。`
    },
    solution: String.raw`$a_{n+1}=S_{n+1}-S_{n}=\{2a_{n+1}+(n+1)-4\}-\{2a_{n}+n-4\}=2a_{n+1}-2a_{n}+1$。整理して
$$a_{n+1}=2a_{n}-1.$$
$a_{n+1}-1=2(a_{n}-1)$ で $a_{1}-1=2$ だから，$\{a_{n}-1\}$ は公比 $2$ の等比数列で
$$a_{n}-1=2\cdot 2^{n-1}=2^{n}.$$`,
    answer: String.raw`$a_{n+1}=2a_{n}-1$，$a_{n}=2^{n}+1$`
  },
  "5-(3)": {
    approach: String.raw`$a_{n}=2^{n}+1$ が $\{b_{n}\}$（$7$ で割って $2$ 余る数）に入る条件は $2^{n}\equiv 1\pmod 7$。$2^{n}\bmod 7$ の周期 $3$ から $n\equiv 0\pmod 3$ とわかり，共通項は $c_{k}=8^{k}+1$。`,
    formula: {
      title: "$2^{n}$ の $\bmod 7$ の周期",
      body: String.raw`$2^{1},2^{2},2^{3}\equiv 2,4,1\pmod 7$（以後周期 $3$ で繰り返す）。`
    },
    solution: String.raw`$b_{n}=7n+2$ は $9$ 以上で「$7$ で割ると $2$ 余る数」全体である。$a_{n}=2^{n}+1$ がこれに入る条件は $2^{n}\equiv 1\pmod 7$。$2^{n}\bmod 7$ は $2,4,1$ の繰り返し（周期 $3$）なので $n\equiv 0\pmod 3$。

$n=3k$ のとき $a_{3k}=2^{3k}+1=8^{k}+1\ (\ge 9)$ はすべて $\{b_{n}\}$ に含まれる。よって $c_{k}=8^{k}+1$，$c_{k}-1=8^{k}$ となり，
$$(c_{1}-1)(c_{2}-1)\cdots(c_{n}-1)=8^{1}\cdot 8^{2}\cdots 8^{n}=8^{1+2+\cdots+n}=8^{\frac{n(n+1)}{2}}.$$`,
    answer: String.raw`$8^{\frac{n(n+1)}{2}}$`
  },
  "6-(1)": {
    approach: String.raw`$\overrightarrow{AB}=\overrightarrow{OB}-\overrightarrow{OA}$ の大きさの2乗を展開し，内積について解く。`,
    formula: {
      title: "内積と大きさ",
      body: String.raw`$|\overrightarrow{OB}-\overrightarrow{OA}|^{2}=|\overrightarrow{OB}|^{2}-2\,\overrightarrow{OA}\cdot\overrightarrow{OB}+|\overrightarrow{OA}|^{2}$`
    },
    solution: String.raw`$|\overrightarrow{AB}|^{2}=|\overrightarrow{OB}-\overrightarrow{OA}|^{2}=|\overrightarrow{OB}|^{2}-2\,\overrightarrow{OA}\cdot\overrightarrow{OB}+|\overrightarrow{OA}|^{2}$ に $|\overrightarrow{OA}|=5$，$|\overrightarrow{OB}|=4$，$|\overrightarrow{AB}|=7$ を代入すると
$$49=16-2\,\overrightarrow{OA}\cdot\overrightarrow{OB}+25,\qquad \overrightarrow{OA}\cdot\overrightarrow{OB}=-4.$$`,
    answer: String.raw`$\overrightarrow{OA}\cdot\overrightarrow{OB}=-4$`
  },
  "6-(2)": {
    approach: String.raw`$\overrightarrow{OC}=\dfrac{1}{4}\overrightarrow{OB}$。$H$ を直線 $AC$ 上の点として $\overrightarrow{OH}=(1-t)\overrightarrow{OA}+\dfrac{t}{4}\overrightarrow{OB}$ とおき，$\overrightarrow{BH}\cdot\overrightarrow{AC}=0$ から $t$ を決める。面積は $\triangle OAH=t\cdot\triangle OAC=\dfrac{t}{4}\triangle OAB$。`,
    formula: {
      title: "垂線の足と面積比",
      body: String.raw`直線 $AC$ 上の点は $\overrightarrow{OH}=\overrightarrow{OA}+t(\overrightarrow{OC}-\overrightarrow{OA})$。このとき $\triangle OAH:\triangle OAC=t:1$。`
    },
    solution: String.raw`$\overrightarrow{OA}=\vec{a}$，$\overrightarrow{OB}=\vec{b}$ とおくと $|\vec{a}|^{2}=25$，$|\vec{b}|^{2}=16$，$\vec{a}\cdot\vec{b}=-4$，$\overrightarrow{OC}=\dfrac{1}{4}\vec{b}$。

(i) $\overrightarrow{OH}=(1-t)\vec{a}+\dfrac{t}{4}\vec{b}$ とおくと
$$\overrightarrow{BH}=(1-t)\vec{a}+\left(\dfrac{t}{4}-1\right)\vec{b},\qquad \overrightarrow{AC}=\dfrac{1}{4}\vec{b}-\vec{a}.$$
$\overrightarrow{BH}\cdot\overrightarrow{AC}=0$ を計算すると $-26(1-t)+8\left(\dfrac{t}{4}-1\right)=28t-34=0$，$t=\dfrac{17}{14}$。よって
$$\overrightarrow{OH}=\left(1-\dfrac{17}{14}\right)\vec{a}+\dfrac{17}{56}\vec{b}=-\dfrac{3}{14}\overrightarrow{OA}+\dfrac{17}{56}\overrightarrow{OB}.$$

(ii) $\cos\angle AOB=\dfrac{\vec{a}\cdot\vec{b}}{|\vec{a}||\vec{b}|}=-\dfrac{1}{5}$ より $\sin\angle AOB=\dfrac{2\sqrt{6}}{5}$ なので
$$\triangle OAB=\dfrac{1}{2}\cdot 5\cdot 4\cdot\dfrac{2\sqrt{6}}{5}=4\sqrt{6}.$$
$\overrightarrow{AH}=t\,\overrightarrow{AC}$ だから $\triangle OAH=t\cdot\triangle OAC=t\cdot\dfrac{1}{4}\triangle OAB=\dfrac{17}{14}\cdot\dfrac{1}{4}\cdot 4\sqrt{6}=\dfrac{17\sqrt{6}}{14}.$`,
    answer: String.raw`(i) $\overrightarrow{OH}=-\dfrac{3}{14}\overrightarrow{OA}+\dfrac{17}{56}\overrightarrow{OB}$　(ii) $\dfrac{17\sqrt{6}}{14}$`
  }
};

window.MATH_SOLUTIONS.kawai_2026_zenkijutsu2_typeIII = {
  "1-(1)": {
    approach: String.raw`素因数分解してから，約数の個数と総和の公式を用いる。`,
    formula: {
      title: "約数の個数と総和",
      body: String.raw`$N=p^{a}q^{b}$ のとき，正の約数の個数は $(a+1)(b+1)$，総和は $(1+p+\cdots+p^{a})(1+q+\cdots+q^{b})$。`
    },
    solution: String.raw`$496=2^{4}\times 31$ である。正の約数の個数は
$$(4+1)(1+1)=10.$$
総和は
$$(1+2+4+8+16)(1+31)=31\times 32=992.$$`,
    answer: String.raw`約数は $10$ 個，総和は $992$`
  },
  "1-(2)": {
    approach: String.raw`(i) 和が $6$ になる目の順序つきの組を，$4+1+1$ 型・$3+2+1$ 型・$2+2+2$ 型に分けて数える。(ii) その中で3つとも異なるのは $3+2+1$ 型だけ。`,
    formula: {
      title: "条件付き確率",
      body: String.raw`$P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}=\dfrac{n(A\cap B)}{n(B)}$（$B$ が起きた場合の数で割る）`
    },
    solution: String.raw`3回の目を順序つきで考えると全事象は $6^{3}=216$ 通り。

(i) 和が $6$ になるのは，$\{4,1,1\}$（$3$ 通り），$\{3,2,1\}$（$6$ 通り），$\{2,2,2\}$（$1$ 通り）の合計 $10$ 通り。よって
$$P(\text{和}=6)=\dfrac{10}{216}=\dfrac{5}{108}.$$

(ii) 和が $6$ の $10$ 通りのうち，3つとも異なるのは $\{3,2,1\}$ の $6$ 通り。よって求める条件付き確率は
$$\dfrac{6}{10}=\dfrac{3}{5}.$$`,
    answer: String.raw`(i) $\dfrac{5}{108}$　(ii) $\dfrac{3}{5}$`
  },
  "1-(3)": {
    approach: String.raw`桁数は $\log_{10}$ の整数部分 $+1$。最高位の数は $\log_{10}(2^{n})$ の小数部分が $[\log_{10}4,\ \log_{10}5)$ に入ることで判定する。`,
    formula: {
      title: "桁数と最高位の数",
      body: String.raw`$10^{k-1}\le N<10^{k}$ なら $N$ は $k$ 桁。$\log_{10}N=k-1+\alpha$ で $\log_{10}d\le\alpha<\log_{10}(d+1)$ なら最高位は $d$。`
    },
    solution: String.raw`(i) $\log_{10}(2^{100})=100\times 0.301=30.1$ だから $10^{30}<2^{100}<10^{31}$。よって $31$ 桁。

(ii) $2^{n}$ が $22$ 桁だから $21\le 0.301n<22$。最高位が $4$ だから，$0.301n$ の小数部分は
$$\log_{10}4\le(\text{小数部分})<\log_{10}5,\quad\text{すなわち}\quad 0.602\le(\text{小数部分})<0.699$$
（$\log_{10}5=1-0.301=0.699$）。あわせて $21.602\le 0.301n<21.699$ より
$$\dfrac{21.602}{0.301}\le n<\dfrac{21.699}{0.301},\qquad 71.7\ldots\le n<72.0\ldots.$$
正の整数は $n=72$（このとき $0.301\times 72=21.672$ で条件を満たす）。`,
    answer: String.raw`(i) $31$ 桁　(ii) $n=72$`
  },
  "1-(4)": {
    approach: String.raw`$u=\tan\theta$ の2次不等式として因数分解し，$-\dfrac{1}{\sqrt{3}}<\tan\theta<\sqrt{3}$ を導く。あとは $0\le\theta<2\pi$ で $\tan\theta$ の値の変化を区間ごとに調べる。`,
    formula: {
      title: "tan の2次不等式",
      body: String.raw`$\sqrt{3}u^{2}-2u-\sqrt{3}=\sqrt{3}\left(u-\sqrt{3}\right)\left(u+\dfrac{1}{\sqrt{3}}\right)$`
    },
    solution: String.raw`$u=\tan\theta$ とおくと $\sqrt{3}u^{2}-2u-\sqrt{3}=\sqrt{3}\left(u-\sqrt{3}\right)\left(u+\dfrac{1}{\sqrt{3}}\right)$。$\sqrt{3}>0$ なので不等式は
$$-\dfrac{1}{\sqrt{3}}<\tan\theta<\sqrt{3}.$$
$\tan\theta=-\dfrac{1}{\sqrt{3}}$ となるのは $\theta=\dfrac{5}{6}\pi,\ \dfrac{11}{6}\pi$，$\tan\theta=\sqrt{3}$ となるのは $\theta=\dfrac{\pi}{3},\ \dfrac{4}{3}\pi$。$\tan\theta$ は $\left(-\dfrac{\pi}{2},\dfrac{\pi}{2}\right)$，$\left(\dfrac{\pi}{2},\dfrac{3}{2}\pi\right)$，$\left(\dfrac{3}{2}\pi,\dfrac{5}{2}\pi\right)$ の各区間で増加だから，$0\le\theta<2\pi$ での解は
$$0\le\theta<\dfrac{\pi}{3},\qquad \dfrac{5}{6}\pi<\theta<\dfrac{4}{3}\pi,\qquad \dfrac{11}{6}\pi<\theta<2\pi.$$`,
    answer: String.raw`$0\le\theta<\dfrac{\pi}{3}$，$\dfrac{5}{6}\pi<\theta<\dfrac{4}{3}\pi$，$\dfrac{11}{6}\pi<\theta<2\pi$`
  },
  "2-(1)": {
    approach: String.raw`$S_{1}=a_{1}$ を使い，$n=1$ を条件式に代入する。`,
    formula: {
      title: "和と項の関係",
      body: String.raw`$S_{1}=a_{1}$，$n\ge 2$ で $a_{n}=S_{n}-S_{n-1}$`
    },
    solution: String.raw`$n=1$ とすると
$$S_{1}=a_{1}=2a_{1}+1-4=2a_{1}-3.$$
よって $a_{1}=3$。`,
    answer: String.raw`$a_{1}=3$`
  },
  "2-(2)": {
    approach: String.raw`$a_{n+1}=S_{n+1}-S_{n}$ に条件式を代入して漸化式を作り，特性方程式（$\alpha=2\alpha-1$）で一般項を求める。`,
    formula: {
      title: "1次の漸化式",
      body: String.raw`$a_{n+1}=pa_{n}+q$ は $a_{n+1}-\alpha=p(a_{n}-\alpha)$ と変形（$\alpha=p\alpha+q$）。`
    },
    solution: String.raw`$a_{n+1}=S_{n+1}-S_{n}=\{2a_{n+1}+(n+1)-4\}-\{2a_{n}+n-4\}=2a_{n+1}-2a_{n}+1$。整理して
$$a_{n+1}=2a_{n}-1.$$
$a_{n+1}-1=2(a_{n}-1)$ で $a_{1}-1=2$ だから，$\{a_{n}-1\}$ は公比 $2$ の等比数列で
$$a_{n}-1=2\cdot 2^{n-1}=2^{n}.$$`,
    answer: String.raw`$a_{n+1}=2a_{n}-1$，$a_{n}=2^{n}+1$`
  },
  "2-(3)": {
    approach: String.raw`$a_{n}=2^{n}+1$ が $\{b_{n}\}$（$7$ で割って $2$ 余る数）に入る条件は $2^{n}\equiv 1\pmod 7$。$2^{n}\bmod 7$ の周期 $3$ から $n\equiv 0\pmod 3$ とわかり，共通項は $c_{k}=8^{k}+1$。`,
    formula: {
      title: "$2^{n}$ の $\bmod 7$ の周期",
      body: String.raw`$2^{1},2^{2},2^{3}\equiv 2,4,1\pmod 7$（以後周期 $3$ で繰り返す）。`
    },
    solution: String.raw`$b_{n}=7n+2$ は $9$ 以上で「$7$ で割ると $2$ 余る数」全体である。$a_{n}=2^{n}+1$ がこれに入る条件は $2^{n}\equiv 1\pmod 7$。$2^{n}\bmod 7$ は $2,4,1$ の繰り返し（周期 $3$）なので $n\equiv 0\pmod 3$。

$n=3k$ のとき $a_{3k}=2^{3k}+1=8^{k}+1\ (\ge 9)$ はすべて $\{b_{n}\}$ に含まれる。よって $c_{k}=8^{k}+1$，$c_{k}-1=8^{k}$ となり，
$$(c_{1}-1)(c_{2}-1)\cdots(c_{n}-1)=8^{1}\cdot 8^{2}\cdots 8^{n}=8^{1+2+\cdots+n}=8^{\frac{n(n+1)}{2}}.$$`,
    answer: String.raw`$8^{\frac{n(n+1)}{2}}$`
  },
  "3-(1)": {
    approach: String.raw`$\overrightarrow{AB}=\overrightarrow{OB}-\overrightarrow{OA}$ の大きさの2乗を展開し，内積について解く。`,
    formula: {
      title: "内積と大きさ",
      body: String.raw`$|\overrightarrow{OB}-\overrightarrow{OA}|^{2}=|\overrightarrow{OB}|^{2}-2\,\overrightarrow{OA}\cdot\overrightarrow{OB}+|\overrightarrow{OA}|^{2}$`
    },
    solution: String.raw`$|\overrightarrow{AB}|^{2}=|\overrightarrow{OB}-\overrightarrow{OA}|^{2}=|\overrightarrow{OB}|^{2}-2\,\overrightarrow{OA}\cdot\overrightarrow{OB}+|\overrightarrow{OA}|^{2}$ に $|\overrightarrow{OA}|=5$，$|\overrightarrow{OB}|=4$，$|\overrightarrow{AB}|=7$ を代入すると
$$49=16-2\,\overrightarrow{OA}\cdot\overrightarrow{OB}+25,\qquad \overrightarrow{OA}\cdot\overrightarrow{OB}=-4.$$`,
    answer: String.raw`$\overrightarrow{OA}\cdot\overrightarrow{OB}=-4$`
  },
  "3-(2)": {
    approach: String.raw`$\overrightarrow{OC}=\dfrac{1}{4}\overrightarrow{OB}$。$H$ を直線 $AC$ 上の点として $\overrightarrow{OH}=(1-t)\overrightarrow{OA}+\dfrac{t}{4}\overrightarrow{OB}$ とおき，$\overrightarrow{BH}\cdot\overrightarrow{AC}=0$ から $t$ を決める。面積は $\triangle OAH=t\cdot\triangle OAC=\dfrac{t}{4}\triangle OAB$。`,
    formula: {
      title: "垂線の足と面積比",
      body: String.raw`直線 $AC$ 上の点は $\overrightarrow{OH}=\overrightarrow{OA}+t(\overrightarrow{OC}-\overrightarrow{OA})$。このとき $\triangle OAH:\triangle OAC=t:1$。`
    },
    solution: String.raw`$\overrightarrow{OA}=\vec{a}$，$\overrightarrow{OB}=\vec{b}$ とおくと $|\vec{a}|^{2}=25$，$|\vec{b}|^{2}=16$，$\vec{a}\cdot\vec{b}=-4$，$\overrightarrow{OC}=\dfrac{1}{4}\vec{b}$。

(i) $\overrightarrow{OH}=(1-t)\vec{a}+\dfrac{t}{4}\vec{b}$ とおくと
$$\overrightarrow{BH}=(1-t)\vec{a}+\left(\dfrac{t}{4}-1\right)\vec{b},\qquad \overrightarrow{AC}=\dfrac{1}{4}\vec{b}-\vec{a}.$$
$\overrightarrow{BH}\cdot\overrightarrow{AC}=0$ を計算すると $-26(1-t)+8\left(\dfrac{t}{4}-1\right)=28t-34=0$，$t=\dfrac{17}{14}$。よって
$$\overrightarrow{OH}=\left(1-\dfrac{17}{14}\right)\vec{a}+\dfrac{17}{56}\vec{b}=-\dfrac{3}{14}\overrightarrow{OA}+\dfrac{17}{56}\overrightarrow{OB}.$$

(ii) $\cos\angle AOB=\dfrac{\vec{a}\cdot\vec{b}}{|\vec{a}||\vec{b}|}=-\dfrac{1}{5}$ より $\sin\angle AOB=\dfrac{2\sqrt{6}}{5}$ なので
$$\triangle OAB=\dfrac{1}{2}\cdot 5\cdot 4\cdot\dfrac{2\sqrt{6}}{5}=4\sqrt{6}.$$
$\overrightarrow{AH}=t\,\overrightarrow{AC}$ だから $\triangle OAH=t\cdot\triangle OAC=t\cdot\dfrac{1}{4}\triangle OAB=\dfrac{17}{14}\cdot\dfrac{1}{4}\cdot 4\sqrt{6}=\dfrac{17\sqrt{6}}{14}.$`,
    answer: String.raw`(i) $\overrightarrow{OH}=-\dfrac{3}{14}\overrightarrow{OA}+\dfrac{17}{56}\overrightarrow{OB}$　(ii) $\dfrac{17\sqrt{6}}{14}$`
  },
  "4-(1)": {
    approach: String.raw`積の微分で $f'(x)$ を求め，$f'(x)=e^{-x}\,x(2-x)$ の符号変化から極値を判定する。`,
    formula: {
      title: "積の微分",
      body: String.raw`$(uv)'=u'v+uv'$，$\left(e^{-x}\right)'=-e^{-x}$`
    },
    solution: String.raw`
$$f'(x)=2xe^{-x}+x^{2}(-e^{-x})=e^{-x}\,x(2-x).$$
$e^{-x}>0$ だから $f'(x)$ の符号は $x(2-x)$ と同じで，$x<0$ で負，$0<x<2$ で正，$x>2$ で負。
よって $x=0$ で極小値 $f(0)=0$，$x=2$ で極大値 $f(2)=4e^{-2}=\dfrac{4}{e^{2}}$。`,
    answer: String.raw`極小値 $0$（$x=0$），極大値 $\dfrac{4}{e^{2}}$（$x=2$）`
  },
  "4-(2)": {
    approach: String.raw`$k(x)=x^{2}e^{-x/2}$ の増減を調べ，$x\ge 0$ での最大値が $x=4$ で $\dfrac{16}{e^{2}}$ であることを示す。極限は $f(x)=k(x)\cdot e^{-x/2}$ とみて，はさみうちで示す。`,
    formula: {
      title: "はさみうちの原理",
      body: String.raw`$0\le f(x)\le M\,e^{-x/2}$ で $x\to\infty$ のとき右辺 $\to 0$ なら $f(x)\to 0$。`
    },
    solution: String.raw`$k(x)=x^{2}e^{-\frac{x}{2}}$ とおくと
$$k'(x)=2xe^{-\frac{x}{2}}+x^{2}\left(-\dfrac{1}{2}\right)e^{-\frac{x}{2}}=e^{-\frac{x}{2}}\cdot\dfrac{x}{2}(4-x).$$
$x\ge 0$ では，$0<x<4$ で $k'(x)>0$，$x>4$ で $k'(x)<0$ だから $x=4$ で最大となり，最大値は
$$k(4)=16e^{-2}=\dfrac{16}{e^{2}}.$$
よって $x\ge 0$ で $x^{2}e^{-\frac{x}{2}}\le\dfrac{16}{e^{2}}$。

これを使うと，$x\ge 0$ で
$$0\le f(x)=x^{2}e^{-x}=\left(x^{2}e^{-\frac{x}{2}}\right)e^{-\frac{x}{2}}\le\dfrac{16}{e^{2}}\,e^{-\frac{x}{2}}.$$
$x\to\infty$ のとき右辺 $\to 0$ だから，はさみうちの原理より $\displaystyle\lim_{x\to\infty}f(x)=0$。`,
    answer: String.raw`$x=4$ で最大値 $\dfrac{16}{e^{2}}$。これより $0\le f(x)\le\dfrac{16}{e^{2}}e^{-x/2}\to 0$`
  },
  "4-(3)": {
    approach: String.raw`$x=0$ は解でないので $a=\dfrac{e^{x}}{x^{2}}$ と変形し，$h(x)=\dfrac{e^{x}}{x^{2}}$ のグラフと $y=a$ の交点数で考える。(ii) は $x$ と $-x$，$x$ と $\dfrac{4}{x}$ での $h$ の値の大小を比較する。`,
    formula: {
      title: "解の個数とグラフ",
      body: String.raw`$h'(x)=\dfrac{(x-2)e^{x}}{x^{3}}$。$h$ は $x>0$ で $x=2$ を境に減少→増加，最小値 $h(2)=\dfrac{e^{2}}{4}$。`
    },
    solution: String.raw`$x=0$ は $e^{x}=ax^{2}$ を満たさないので，$x\ne 0$ で $a=\dfrac{e^{x}}{x^{2}}=:h(x)$ とおける。
$$h'(x)=\dfrac{e^{x}\cdot x^{2}-e^{x}\cdot 2x}{x^{4}}=\dfrac{(x-2)e^{x}}{x^{3}}.$$
$x<0$ で $h$ は増加（値域 $(0,\infty)$），$0<x<2$ で減少，$x>2$ で増加し，$x>0$ での最小値は $h(2)=\dfrac{e^{2}}{4}$。

(i) $y=a$ と $y=h(x)$ の交点は，$x<0$ でつねに $1$ 個。$x>0$ では $a>\dfrac{e^{2}}{4}$ のとき $2$ 個，$a=\dfrac{e^{2}}{4}$ のとき $1$ 個，それ以下で $0$ 個。合計 $3$ 個となるのは
$$a>\dfrac{e^{2}}{4}.$$

(ii) このとき $\alpha<0<\beta<2<\gamma$ で，$h(\alpha)=h(\beta)=h(\gamma)=a$。$a>\dfrac{e^{2}}{4}>h(-2)$ より $\alpha>-2$ なので $-\alpha\in(0,2)$。

・$x>0$ で $\dfrac{h(x)}{h(-x)}=\dfrac{e^{x}}{e^{-x}}=e^{2x}>1$ だから $h(-\alpha)>h(\alpha)=a=h(\beta)$。$h$ は $(0,2)$ で減少で $-\alpha,\ \beta\in(0,2)$ だから $-\alpha<\beta$，すなわち $\alpha+\beta>0$。

・$\beta\in(0,2)$ に対し $\dfrac{4}{\beta}\in(2,\infty)$。$F(x)=\dfrac{h\!\left(\frac{4}{x}\right)}{h(x)}=\dfrac{x^{4}}{16}e^{\frac{4}{x}-x}$ とおくと
$$\bigl(\log F(x)\bigr)'=\dfrac{4}{x}-\dfrac{4}{x^{2}}-1=-\dfrac{(x-2)^{2}}{x^{2}}\le 0$$
で，$F(2)=1$ だから $0<x<2$ で $F(x)>1$，つまり $h\!\left(\dfrac{4}{\beta}\right)>h(\beta)=a=h(\gamma)$。$h$ は $(2,\infty)$ で増加で $\dfrac{4}{\beta},\ \gamma\in(2,\infty)$ だから $\gamma<\dfrac{4}{\beta}$，すなわち $\beta\gamma<4$。`,
    answer: String.raw`(i) $a>\dfrac{e^{2}}{4}$　(ii) $\alpha+\beta>0$，$\beta\gamma<4$（本文参照）`
  },
  "5-(1)": {
    approach: String.raw`$\mathrm{AP}\ge 2\mathrm{OP}$ を $\mathrm{AP}^{2}\ge 4\mathrm{OP}^{2}$ として座標で表し，平方完成する（アポロニウスの円の内部）。`,
    formula: {
      title: "距離の条件と円",
      body: String.raw`$\mathrm{AP}^{2}\ge 4\,\mathrm{OP}^{2}$ を展開して整理すると円の内部・周になる。`
    },
    solution: String.raw`$\mathrm{P}(x,y)$ とすると $\mathrm{AP}\ge 2\mathrm{OP}$ は $\mathrm{AP}^{2}\ge 4\mathrm{OP}^{2}$、すなわち
$$(x+3)^{2}+(y+3)^{2}\ge 4(x^{2}+y^{2}).$$
展開して整理すると $3x^{2}+3y^{2}-6x-6y-18\le 0$、両辺を $3$ で割って
$$x^{2}+y^{2}-2x-2y-6\le 0,\qquad (x-1)^{2}+(y-1)^{2}\le 8.$$
よって $D$ は中心 $(1,1)$、半径 $2\sqrt{2}$ の円の周および内部。`,
    answer: String.raw`$D:\ (x-1)^{2}+(y-1)^{2}\le 8$（中心 $(1,1)$，半径 $2\sqrt{2}$ の円の周と内部）`
  },
  "5-(2)": {
    approach: String.raw`$x,y$ が実数である条件 $s^{2}-4t\ge 0$（$t\le\dfrac{s^{2}}{4}$）と，$D$ の条件を $x^{2}+y^{2}=s^{2}-2t$ で $s,t$ に書き換えた不等式を組み合わせる。`,
    formula: {
      title: "対称式と実数条件",
      body: String.raw`$x+y=s$，$xy=t$ の $x,y$ が実数 $\iff s^{2}-4t\ge 0$。また $x^{2}+y^{2}=s^{2}-2t$。`
    },
    solution: String.raw`$x,y$ が実数である条件は $s^{2}-4t\ge 0$、すなわち $t\le\dfrac{s^{2}}{4}$。

$D$ の条件 $(x-1)^{2}+(y-1)^{2}\le 8$ は $x^{2}+y^{2}-2(x+y)\le 6$、$x^{2}+y^{2}=s^{2}-2t$ を代入して
$$s^{2}-2t-2s\le 6,\qquad t\ge\dfrac{s^{2}-2s-6}{2}.$$
この2つが両立するには $\dfrac{s^{2}-2s-6}{2}\le\dfrac{s^{2}}{4}$、整理して $s^{2}-4s-12\le 0$、$(s-6)(s+2)\le 0$ より $-2\le s\le 6$。

よって求める領域は，$-2\le s\le 6$ の範囲で
$$\dfrac{s^{2}-2s-6}{2}\le t\le\dfrac{s^{2}}{4}$$
を満たす部分（2つの放物線ではさまれたレンズ形）。`,
    answer: String.raw`$-2\le s\le 6$，$\dfrac{s^{2}-2s-6}{2}\le t\le\dfrac{s^{2}}{4}$`
  },
  "5-(3)": {
    approach: String.raw`$(2x+1)(2y+1)=4t+2s+1$ と $s,t$ で表し，(2) の領域の上辺・下辺（$t$ について端）で評価する。$t$ について1次だから，最大は上辺 $t=\dfrac{s^{2}}{4}$、最小は下辺 $t=\dfrac{s^{2}-2s-6}{2}$ で考えればよい。`,
    formula: {
      title: "1次式の端での評価",
      body: String.raw`$F=4t+2s+1$ は $t$ について増加だから，$s$ を固定すると $F$ の最大・最小は $t$ の端でとる。`
    },
    solution: String.raw`$(2x+1)(2y+1)=4xy+2(x+y)+1=4t+2s+1=:F$。

最大は上辺 $t=\dfrac{s^{2}}{4}$ で，$F=s^{2}+2s+1=(s+1)^{2}$。$-2\le s\le 6$ での最大は $s=6$ のとき $(6+1)^{2}=49$（$x=y=3$）。

最小は下辺 $t=\dfrac{s^{2}-2s-6}{2}$ で，$F=2s^{2}-2s-11$。$-2\le s\le 6$ での最小は頂点 $s=\dfrac{1}{2}$ のとき
$$2\cdot\dfrac{1}{4}-1-11=-\dfrac{23}{2}.$$`,
    answer: String.raw`最大値 $49$，最小値 $-\dfrac{23}{2}$`
  },
  "6-(1)": {
    approach: String.raw`$u=x$，$dv=e^{1-x}dx$ とおいて部分積分する（$v=-e^{1-x}$）。`,
    formula: {
      title: "部分積分",
      body: String.raw`$\displaystyle\int u\,dv=uv-\int v\,du$`
    },
    solution: String.raw`$u=x$，$dv=e^{1-x}dx$ とすると $du=dx$，$v=-e^{1-x}$ だから
$$\int xe^{1-x}\,dx=-xe^{1-x}-\int(-e^{1-x})\,dx=-xe^{1-x}-e^{1-x}+C=-(x+1)e^{1-x}+C.$$`,
    answer: String.raw`$-(x+1)e^{1-x}+C$`
  },
  "6-(2)": {
    approach: String.raw`$f(x)-x$，$g(x)-x$ をそれぞれ因数分解して交点 $x=0,1$ と上下関係を調べ，$0\le x\le 1$ で積分する。$S_{2}$ の被積分関数は多項式の割り算で $\dfrac{2}{1+x^{2}}$ の項を出す。`,
    formula: {
      title: "面積と部分分数",
      body: String.raw`$\dfrac{x^{3}-2x^{2}+x}{1+x^{2}}=(x-2)+\dfrac{2}{1+x^{2}}$，$\displaystyle\int\dfrac{dx}{1+x^{2}}=\arctan x$`
    },
    solution: String.raw`$f(x)-x=ax\left(e^{1-x}-1\right)$ より交点は $x=0,\ 1$。$0<x<1$ では $e^{1-x}-1>0$ なので $f(x)>x$。
$$S_{1}=\int_{0}^{1}ax\left(e^{1-x}-1\right)dx=a\left[\int_{0}^{1}xe^{1-x}dx-\int_{0}^{1}x\,dx\right].$$
(1) より $\displaystyle\int_{0}^{1}xe^{1-x}dx=\Bigl[-(x+1)e^{1-x}\Bigr]_{0}^{1}=-2+e$ だから
$$S_{1}=a\left\{(e-2)-\dfrac{1}{2}\right\}=a\cdot\dfrac{2e-5}{2}.$$

$g(x)-x=\dfrac{2x^{2}-x(1+x^{2})}{1+x^{2}}=\dfrac{-x(x-1)^{2}}{1+x^{2}}$ より交点は $x=0,\ 1$ で，$0<x<1$ では $g(x)<x$。
$$S_{2}=\int_{0}^{1}\dfrac{x(x-1)^{2}}{1+x^{2}}dx=\int_{0}^{1}\dfrac{x^{3}-2x^{2}+x}{1+x^{2}}dx=\int_{0}^{1}\left\{(x-2)+\dfrac{2}{1+x^{2}}\right\}dx.$$
$$S_{2}=\left[\dfrac{x^{2}}{2}-2x+2\arctan x\right]_{0}^{1}=\dfrac{1}{2}-2+\dfrac{\pi}{2}=\dfrac{\pi-3}{2}.$$

$S_{1}=S_{2}$ より $a\cdot\dfrac{2e-5}{2}=\dfrac{\pi-3}{2}$、$2e-5>0$ だから
$$a=\dfrac{\pi-3}{2e-5}.$$`,
    answer: String.raw`$a=\dfrac{\pi-3}{2e-5}$`
  }
};
