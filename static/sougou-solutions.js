window.MATH_SOLUTIONS = window.MATH_SOLUTIONS || {};
window.MATH_SOLUTIONS.sougou = {
  "1-(1)": {
    explainerUrl: "./explainers/sougou-2026-1-1-factorization-explainer-basic.html",
    approach: String.raw`$x$についての2次式として整理します。定数項を2つの式の積に分け，その2つの式の和が$x$の係数になる組を探すと，積の形へ移せます。`,
    formula: {
      title: "2次式の因数分解",
      body: String.raw`$x^2+(A+B)x+AB=(x+A)(x+B)$`
    },
    solution: String.raw`与式を$x$について整理すると，
$$
x^2+(6-y)x-6y^2-8y+8
$$
となる。定数項を因数分解すると，
$$
-6y^2-8y+8=(2y+4)(-3y+2)
$$
である。また，2つの因数の和は
$$
(2y+4)+(-3y+2)=6-y
$$
となり，$x$の係数と一致する。したがって，
$$
x^2+(6-y)x-6y^2-8y+8=(x+2y+4)(x-3y+2)
$$`,
    answer: String.raw`ア=2，イ=4，ウ=3，エ=2`
  },
  "1-(2)": {
    explainerUrl: "./explainers/sougou-2026-1-2-divisors-explainer-basic.html",
    approach: String.raw`正の約数の個数は，素因数分解したときの各指数から決まります。まず素因数分解を行い，各指数に1を足して掛け合わせます。`,
    formula: {
      title: "正の約数の個数",
      body: String.raw`$N=p^{a}q^{b}r^{c}$ のとき，$N$の正の約数の個数は$(a+1)(b+1)(c+1)$。`
    },
    solution: String.raw`$360$を素因数分解すると，
$$
360=2^3\cdot3^2\cdot5^1
$$
である。正の約数では，$2,3,5$の指数をそれぞれ$0$から$3,2,1$まで選べるので，個数は
$$
(3+1)(2+1)(1+1)=4\cdot3\cdot2=24
$$`,
    answer: String.raw`オ=2，カ=4`
  },
  "1-(3)": {
    explainerUrl: "./explainers/sougou-2026-1-3-logarithms-explainer-basic.html",
    approach: String.raw`対数の底がそろっていないので，$9=3^2$と$25=5^2$を使って，それぞれの括弧の中で底をそろえます。最後に互いに逆になる対数の積を使います。`,
    formula: {
      title: "対数の基本変形",
      body: String.raw`$\log_{a^m}b=\dfrac{1}{m}\log_ab$，また$\log_ab\cdot\log_ba=1$。`
    },
    solution: String.raw`$9=3^2$，$25=5^2$より，
$$
\log_{9}5=\dfrac12\log_{3}5,\qquad \log_{25}3=\dfrac12\log_{5}3
$$
さらに$25=5^2$，$27=3^3$だから，
$$
\begin{aligned}
\log_325+\log_95&=2\log_35+\dfrac12\log_35=\dfrac52\log_35,\\
\log_527+\log_{25}3&=3\log_53+\dfrac12\log_53=\dfrac72\log_53
\end{aligned}
$$
したがって，求める積は
$$
\dfrac52\log_35\cdot\dfrac72\log_53
=\dfrac{35}{4}(\log_35\cdot\log_53)
=\dfrac{35}{4}
$$`,
    answer: String.raw`キ=3，ク=5，ケ=4`
  },
  "1-(4)": {
    explainerUrl: "./explainers/sougou-2026-1-4-common-tangents-explainer-basic.html",
    approach: String.raw`共通接線を$y=mx+c$とおき，それぞれの放物線との交点が重なる条件を使います。各放物線との交点を表す2次方程式の判別式を0とし，2本の条件を連立します。`,
    formula: {
      title: "接する条件",
      body: String.raw`直線と放物線の交点を表す2次方程式が重解をもつとき，判別式は$0$。`
    },
    solution: String.raw`共通接線を$y=mx+c$とする。$y=-x^2+1$との交点は
$$
x^2+mx+(c-1)=0
$$
で表されるので，接する条件は
$$
m^2-4(c-1)=0,\qquad c=1+\dfrac{m^2}{4}
$$
一方，$y=x^2-2x+6$との交点は
$$
x^2-(m+2)x+(6-c)=0
$$
である。したがって，
$$
(m+2)^2-4(6-c)=0,\qquad c=6-\dfrac{(m+2)^2}{4}
$$
2つの$c$を等置すると，
$$
1+\dfrac{m^2}{4}=6-\dfrac{(m+2)^2}{4}
$$
より
$$
m^2+2m-8=0,\qquad (m+4)(m-2)=0
$$
よって$m=2,-4$である。$c=1+\dfrac{m^2}{4}$に戻すと，それぞれ$c=2,5$となる。`,
    answer: String.raw`コ=2，サ=2，シ=-，ス=4，セ=5`
  },
  "1-(5)": {
    explainerUrl: "./explainers/sougou-2026-1-5-integral-equation-explainer-basic.html",
    approach: String.raw`積分の範囲が固定されているので，積分全体は$x$によらない定数です。その定数を置いていったん$f(x)$を表し，定積分へ代入し直して定数を決めます。`,
    formula: {
      title: "定積分の定数置換",
      body: String.raw`積分範囲に$x$が含まれない$\displaystyle\int_{-1}^{1}f(t)\,dt$は，$x$によらない定数として扱える。`
    },
    solution: String.raw`\[
k=\displaystyle\int_{-1}^{1}f(t)\,dt
\]
とおくと，もとの式は
$$
f(x)=6x^2-2x+k
$$
となる。これを積分の中へ戻すと，
$$
\begin{aligned}
k&=\int_{-1}^{1}(6t^2-2t+k)\,dt\\
&=\int_{-1}^{1}6t^2\,dt-\int_{-1}^{1}2t\,dt+\int_{-1}^{1}k\,dt\\
&=4+0+2k
\end{aligned}
$$
よって$k=4+2k$から$k=-4$を得る。したがって，$f(x)=6x^2-2x-4$となる。`,
    answer: String.raw`ソ=4`
  },
  "2-(1)": {
    approach: String.raw`まず$\triangle ABC$だけに注目します。2辺とその間の角が分かっているので，余弦定理で対角線$AC$を求めます。`,
    formula: {
      title: "余弦定理",
      body: String.raw`$a^2=b^2+c^2-2bc\cos A$。2辺とその間の角から残りの辺を求められる。`
    },
    solution: String.raw`$\triangle ABC$に余弦定理を用いると，
$$
\begin{aligned}
AC^2&=AB^2+BC^2-2\cdot AB\cdot BC\cos60^\circ\\
&=2^2+3^2-2\cdot2\cdot3\cdot\dfrac12=7
\end{aligned}
$$
長さは正なので，$AC=\sqrt7$。`,
    answer: String.raw`ア=7`
  },
  "2-(2)": {
    approach: String.raw`円に内接する四角形では，向かい合う角の和が$180^\circ$です。まず$\angle ADC$を求め，$\triangle ACD$に余弦定理を使って長さを決めます。`,
    formula: {
      title: "円に内接する四角形",
      body: String.raw`円に内接する四角形の向かい合う角は補角で，$\angle ABC+\angle ADC=180^\circ$。`
    },
    solution: String.raw`円に内接する四角形の向かい合う角の和は$180^\circ$なので，
$$
\angle ADC=180^\circ-60^\circ=120^\circ
$$
$AD=x$とおき，$\triangle ACD$に余弦定理を用いる。$AC^2=7$，$CD=1$，$\cos120^\circ=-\dfrac12$より，
$$
7=x^2+1^2-2\cdot x\cdot1\cdot\left(-\dfrac12\right)=x^2+x+1
$$
したがって$x^2+x-6=0$，すなわち$(x-2)(x+3)=0$。長さ$x$は正なので$x=2$である。`,
    answer: String.raw`イ=2`,
    figure: String.raw`<svg class="solution-figure-svg" viewBox="0 0 320 230" role="img" aria-label="円に内接する四角形ABCDを対角線ACで2つの三角形に分けた模式図"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="160" cy="112" r="88"/><path d="M95 55 L72 157 L225 184 L245 61 Z"/><path d="M95 55 L225 184"/><path d="M78 143 A20 20 0 0 1 92 157" stroke-width="1.5"/></g><g fill="currentColor" font-family="Arial, sans-serif" font-size="14"><text x="88" y="45" text-anchor="end">A</text><text x="62" y="174" text-anchor="end">B</text><text x="235" y="201">C</text><text x="252" y="55">D</text><text x="106" y="139">60°</text><text x="112" y="95">AB=2</text><text x="143" y="184">BC=3</text><text x="231" y="125">CD=1</text></g></svg>`
  },
  "2-(3)": {
    approach: String.raw`$\triangle ABC$で，求める角の向かい側の辺$BC$と，既知の角$60^\circ$の向かい側の辺$AC$が分かっています。正弦定理で$\sin\angle BAC$を直接表します。`,
    formula: {
      title: "正弦定理",
      body: String.raw`$\dfrac{a}{\sin A}=\dfrac{b}{\sin B}$。向かい合う辺と角の比が等しい。`
    },
    solution: String.raw`$\triangle ABC$で正弦定理を用いると，
$$
\dfrac{BC}{\sin\angle BAC}=\dfrac{AC}{\sin60^\circ}
$$
したがって，$AC=\sqrt7$を用いて
$$
\sin\angle BAC=\dfrac{3\sin60^\circ}{\sqrt7}=\dfrac{3\cdot\frac{\sqrt3}{2}}{\sqrt7}=\dfrac{3\sqrt{21}}{14}
$$`,
    answer: String.raw`ウ=3，エ=2，オ=1，カ=1，キ=4`
  },
  "2-(4)": {
    approach: String.raw`四角形の4頂点は同じ円上にあるので，$\triangle ABC$の外接円をそのまま考えます。正弦定理の拡張で，辺$AC$とその向かいの角から半径を求めます。`,
    formula: {
      title: "正弦定理の拡張",
      body: String.raw`三角形の外接円の半径を$R$とすると，$\dfrac{a}{\sin A}=2R$。`
    },
    solution: String.raw`$\triangle ABC$の外接円は，四角形$ABCD$の円$\mathrm O$である。正弦定理の拡張を，辺$AC$と向かい合う角$\angle ABC=60^\circ$に使うと，
$$
2R=\dfrac{AC}{\sin60^\circ}=\dfrac{\sqrt7}{\sqrt3/2}=\dfrac{2\sqrt7}{\sqrt3}
$$
したがって，
$$
R=\dfrac{\sqrt7}{\sqrt3}=\dfrac{\sqrt{21}}{3}
$$`,
    answer: String.raw`ク=2，ケ=1，コ=3`
  },
  "2-(5)": {
    approach: String.raw`対角線$AC$で四角形を$\triangle ABC$と$\triangle ACD$に分けます。それぞれについて，2辺とその間の角を使う面積公式を適用して足し合わせます。`,
    formula: {
      title: "三角形の面積",
      body: String.raw`2辺の長さを$b,c$，その間の角を$A$とすると，面積は$\dfrac12bc\sin A$。`
    },
    solution: String.raw`対角線$AC$で分けると，四角形の面積は2つの三角形の面積の和である。まず，
$$
[ABC]=\dfrac12\cdot2\cdot3\cdot\sin60^\circ=\dfrac{3\sqrt3}{2}
$$
また，$AD=2$，$CD=1$，$\angle ADC=120^\circ$より，
$$
[ACD]=\dfrac12\cdot2\cdot1\cdot\sin120^\circ=\dfrac{\sqrt3}{2}
$$
よって四角形の面積は，
$$
[ABCD]=\dfrac{3\sqrt3}{2}+\dfrac{\sqrt3}{2}=2\sqrt3
$$`,
    answer: String.raw`サ=2，シ=3`
  },
  "3-(1)": {
    approach: String.raw`奇数が出た回数だけ$A$が進み，偶数が出た回数だけ$B$が進みます。奇数の回数を文字で置いて座標を表し，条件を不等式に直してから，反復試行の確率を使います。`,
    formula: {
      title: "反復試行の確率",
      body: String.raw`1回の成功確率が$p$の試行を$n$回行うとき，成功がちょうど$k$回の確率は$ {}_{n}C_{k}p^k(1-p)^{n-k}$。`
    },
    solution: String.raw`奇数が出た回数を$k$とする。3回後の座標は
$$
A=k，\qquad B=2+(3-k)=5-k
$$
である。したがって$B>A$は
$$
5-k>k\quad\Longleftrightarrow\quad k\leqq2
$$
と同値である。これは「奇数が3回出る」場合以外なので，余事象を使うと
$$
P(B>A)=1-{}_{3}C_{3}\left(\dfrac12\right)^3=1-\dfrac18=\dfrac78
$$`,
    answer: String.raw`ア=7，イ=8`
  },
  "3-(2)": {
    approach: String.raw`$A$の座標は，奇数が出た回数そのものです。したがって，座標が3になる条件を「4回中の奇数の回数」に置き換えます。`,
    formula: {
      title: "二項型の反復試行",
      body: String.raw`成功確率が$p$の試行で，$n$回中ちょうど$k$回成功する確率は$ {}_{n}C_{k}p^k(1-p)^{n-k}$。`
    },
    solution: String.raw`4回後の$A$の座標は，出た奇数の回数である。$A=3$となるのは，4回中ちょうど3回が奇数のときである。奇数の確率は$\dfrac12$なので，
$$
P(A=3)={}_{4}C_{3}\left(\dfrac12\right)^3\left(\dfrac12\right)=4\cdot\dfrac1{16}=\dfrac14
$$`,
    answer: String.raw`ウ=1，エ=4`
  },
  "3-(3)": {
    approach: String.raw`$A$が座標4へ着くには奇数が4回必要で，5回のうち4回または5回が奇数の場合だけです。この2つを重ならない場合として分けて足し，$B$が先に着かないことも確認します。`,
    formula: {
      title: "『少なくとも』の数え上げ",
      body: String.raw`「少なくとも4回」は，4回の場合と5回の場合に分けて確率を足す。`
    },
    solution: String.raw`$A$が座標4へ到達するには，奇数が少なくとも4回出る必要がある。5回投げるので，場合は「奇数4回」と「奇数5回」である。
$$
\begin{aligned}
P&={}_{5}C_{4}\left(\dfrac12\right)^4\left(\dfrac12\right)+{}_{5}C_{5}\left(\dfrac12\right)^5\\
&=\dfrac5{32}+\dfrac1{32}=\dfrac6{32}=\dfrac3{16}
\end{aligned}
$$
この場合，偶数は高々1回なので$B$の座標は高々3であり，$B$は座標4に到達しない。よって，$A$が先に到達する条件と一致する。`,
    answer: String.raw`オ=3，カ=1，キ=6`,
    figure: String.raw`<svg class="solution-figure-svg" viewBox="0 0 320 170" role="img" aria-label="数直線上のAの出発点0，Bの出発点2，目標の座標4と移動規則の模式図"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M42 76 H278"/><path d="M42 68 V84 M101 68 V84 M160 68 V84 M219 68 V84 M278 62 V90"/><path d="M42 42 H101" stroke-dasharray="5 4"/><path d="M160 42 H219" stroke-dasharray="5 4"/></g><g fill="currentColor" font-family="Arial, sans-serif" font-size="14"><text x="42" y="105" text-anchor="middle">0</text><text x="101" y="105" text-anchor="middle">1</text><text x="160" y="105" text-anchor="middle">2</text><text x="219" y="105" text-anchor="middle">3</text><text x="278" y="105" text-anchor="middle">4</text><text x="42" y="30" text-anchor="middle">A</text><text x="160" y="30" text-anchor="middle">B</text><text x="278" y="30" text-anchor="middle">目標</text><text x="70" y="146">奇数：Aが+1</text><text x="225" y="146" text-anchor="middle">偶数：Bが+1</text></g><circle cx="42" cy="76" r="4" fill="currentColor"/><circle cx="160" cy="76" r="4" fill="currentColor"/></svg>`
  },
  "3-(4)": {
    approach: String.raw`奇数が$k$回なら，$A$と$B$の座標をそれぞれ$k$を使って表せます。$A>B$となる範囲の$k$を決め，該当する回数の確率を足します。`,
    formula: {
      title: "座標の差を不等式にする",
      body: String.raw`奇数が$k$回なら，5回後は$A=k$，$B=2+(5-k)$。`
    },
    solution: String.raw`奇数が$k$回なら，偶数は$5-k$回なので，5回後の座標は
$$
A=k，\qquad B=2+(5-k)=7-k
$$
である。$A>B$より
$$
 k>7-k\quad\Longleftrightarrow\quad 2k>7\quad\Longleftrightarrow\quad k\geqq4
$$
したがって，奇数が4回または5回の場合を足せばよい。
$$
P(A>B)={}_{5}C_{4}\left(\dfrac12\right)^5+{}_{5}C_{5}\left(\dfrac12\right)^5=\dfrac5{32}+\dfrac1{32}=\dfrac3{16}
$$`,
    answer: String.raw`ク=3，ケ=1，コ=6`
  },
  "3-(5)": {
    approach: String.raw`最後に同じ座標になる条件を，奇数の回数についての方程式に直します。回数が決まったら，その回数が起こる反復試行の確率を計算します。`,
    formula: {
      title: "同じ座標の条件",
      body: String.raw`6回中の奇数の回数を$k$とすると，$A=k$，$B=2+(6-k)$。`
    },
    solution: String.raw`6回中，奇数が$k$回なら偶数は$6-k$回なので，
$$
A=k，\qquad B=2+(6-k)=8-k
$$
である。$A=B$より$k=8-k$，したがって$k=4$となる。よって，6回中ちょうど4回奇数が出る確率は
$$
P(A=B)={}_{6}C_{4}\left(\dfrac12\right)^4\left(\dfrac12\right)^2=15\cdot\dfrac1{64}=\dfrac{15}{64}
$$`,
    answer: String.raw`サ=1，シ=5，ス=6，セ=4`
  },
  "4-(1)": {
    approach: String.raw`与えられた$t$を使うと，$\sin2\theta$は$t^2$から表せます。まず$t^2$を展開して$\sin2\theta$を取り出し，元の$y$へ代入します。`,
    formula: {
      title: "倍角の関係",
      body: String.raw`$\sin2\theta=2\sin\theta\cos\theta$，$\sin^2\theta+\cos^2\theta=1$。`
    },
    solution: String.raw`$t=\sin\theta+\cos\theta$より，
$$
\begin{aligned}
t^2&=\sin^2\theta+2\sin\theta\cos\theta+\cos^2\theta\\
&=1+\sin2\theta
\end{aligned}
$$
したがって$\sin2\theta=t^2-1$である。これを$y$へ代入すると，
$$
y=(t^2-1)+2t-2=t^2+2t-3
$$`,
    answer: String.raw`ア=2，イ=3`
  },
  "4-(2)": {
    approach: String.raw`$\sin\theta+\cos\theta$を，正弦1つの形に合成します。正弦の値が$-1$以上$1$以下であることから，$t$の範囲を決めます。`,
    formula: {
      title: "三角関数の合成",
      body: String.raw`$\sin\theta+\cos\theta=\sqrt2\sin\left(\theta+\dfrac\pi4\right)$，$-1\leqq\sin u\leqq1$。`
    },
    solution: String.raw`加法定理から，
$$
t=\sin\theta+\cos\theta=\sqrt2\sin\left(\theta+\dfrac\pi4\right)
$$
と表せる。正弦の値は$-1$以上$1$以下なので，
$$
 -\sqrt2\leqq t\leqq\sqrt2
$$`,
    answer: String.raw`ウ=2，エ=2`
  },
  "4-(3)": {
    approach: String.raw`(1)，(2)で得た式と範囲だけを使い，$t$の区間上の二次関数として最大・最小を調べます。上に開く放物線なので，頂点が区間内にあるかを確認して最小値を決め，最大値は両端の値を比較します。`,
    formula: {
      title: "区間上の二次関数の最大・最小",
      body: String.raw`$y=(t+1)^2-4$は上に開く。頂点が区間内ならそこで最小値をとり，最大値は区間の端点を比較する。`
    },
    solution: String.raw`(1)，(2)より，
$$
y=t^2+2t-3=(t+1)^2-4,\qquad -\sqrt2\leqq t\leqq\sqrt2
$$
頂点の$t=-1$はこの区間に含まれるので，最小値は頂点でとる。$t=-1$となる条件は
$$
\sqrt2\sin\left(\theta+\dfrac\pi4\right)=-1
$$
であり，$0\leqq\theta<2\pi$では$\theta=\pi，\dfrac32\pi$である。

最大値は端点を比較する。
$$
\begin{aligned}
t=-\sqrt2&\text{のとき,}\quad y=-1-2\sqrt2,\\
t=\sqrt2&\text{のとき,}\quad y=-1+2\sqrt2
\end{aligned}
$$
したがって大きい方の端点$t=\sqrt2$を採用する。これは
$$
\sqrt2\sin\left(\theta+\dfrac\pi4\right)=\sqrt2
$$
すなわち$\sin(\theta+\frac\pi4)=1$を意味するので，範囲内では$\theta=\dfrac\pi4$である。`,
    answer: String.raw`オ=4，カ=-，キ=1，ク=2，ケ=2，コ=3，サ=2，シ=-，ス=4`,
    figure: String.raw`<svg class="solution-figure-svg" viewBox="0 0 320 150" role="img" aria-label="tの範囲マイナス√2から√2と，その中にある頂点t=-1を示す数直線"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M42 74 H278"/><path d="M42 65 V83 M101 65 V83 M160 62 V86 M219 65 V83 M278 65 V83"/></g><g fill="currentColor"><circle cx="42" cy="74" r="4"/><circle cx="160" cy="74" r="4"/><circle cx="278" cy="74" r="4"/></g><g fill="currentColor" font-family="Arial, sans-serif" font-size="14"><text x="42" y="106" text-anchor="middle">−√2</text><text x="160" y="106" text-anchor="middle">−1</text><text x="278" y="106" text-anchor="middle">√2</text><text x="160" y="32" text-anchor="middle">頂点</text><text x="160" y="135" text-anchor="middle">−√2 ≤ t ≤ √2</text></g></svg>`
  }
};
