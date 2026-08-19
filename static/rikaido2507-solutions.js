window.MATH_SOLUTIONS = window.MATH_SOLUTIONS || {};
window.MATH_SOLUTIONS.rikaido_2507_beta = {
  "1-(1)": {
    approach: String.raw`分母を一つずつ有理化するより，求めたい $x+y$ と $xy$ をそのまま計算すると共役な項が消えます。さらに $x^{2}+y^{2}$ は，すでに得た和と積から対称式の公式で求められます。`,
    formula: {
      title: "対称式の基本変形",
      body: String.raw`$x^{2}+y^{2}=(x+y)^{2}-2xy$`,
    },
    solution: String.raw`分母どうしの積は $(\sqrt{3}+\sqrt{2})(\sqrt{3}-\sqrt{2})=3-2=1$ である。$x+y$ を通分すると分子は $(\sqrt{3}-\sqrt{2})+(\sqrt{3}+\sqrt{2})=2\sqrt{3}$ となるから，
$$\begin{aligned}
x+y&=\bun{2\sqrt{3}}{3-2}=2\sqrt{3},\\
xy&=\bun{1}{3-2}=1,\\
x^{2}+y^{2}&=(x+y)^{2}-2xy\\
&=12-2=10.
\end{aligned}$$`,
    answer: String.raw`$x+y=2\sqrt{3},\ xy=1,\ x^{2}+y^{2}=10$`,
  },
  "1-(2)": {
    approach: String.raw`絶対値の中身を一つの量 $X$ と見れば，$|X|<1$ は中央に挟まれた一つの範囲です。各辺に同じ操作を施し，端点に等号が入らないことを確認します。`,
    formula: {
      title: "絶対値不等式",
      body: String.raw`$|X|<a\ (a>0)\Longleftrightarrow -a<X<a$`,
    },
    solution: String.raw`$|3x-2|<1$ より，
$$\begin{aligned}
-1&<3x-2<1,\\
1&<3x<3,\\
\bun{1}{3}&<x<1.
\end{aligned}$$`,
    answer: String.raw`$\bun{1}{3}<x<1$`,
  },
  "1-(3)": {
    approach: String.raw`平均値は総和を人数で割った値です。グループごとの平均を先に単純平均すると人数の違いを無視するため，各グループの総和と人数を合計してから全体の平均を求めます。`,
    formula: {
      title: "平均値",
      body: String.raw`$\text{平均値}=\bun{\text{データの総和}}{\text{データの個数}}$`,
    },
    solution: String.raw`各グループの平均は $20\div5=4$，$70\div10=7$ である。全体は総和が $20+70=90$，人数が $5+10=15$ であるから，
$$\begin{aligned}
\text{全体の平均}&=90\div15=6.
\end{aligned}$$`,
    answer: String.raw`$4,\ 7,\ 6$`,
  },
  "1-(4)": {
    approach: String.raw`AとBの順番は決まっていますが，各人の位置はくじ全体から対称に選ばれます。そのため最終的な確率は同じになるはずです。答案では，BについてAの結果で場合分けし，対称性を計算でも確認します。`,
    formula: {
      title: "確率の加法定理",
      body: String.raw`$P(B)=P(A\cap B)+P(\overline{A}\cap B)$`,
    },
    solution: String.raw`Aが当たる確率は $P(A\text{当})=\bun{2}{9}$ である。BについてAの結果で場合分けすると，
$$\begin{aligned}
P(B\text{当})&=P(A\text{当}\cap B\text{当})\\
&\quad+P(A\text{外}\cap B\text{当})\\
&=\bun{2}{9}\cdot\bun{1}{8}\\
&\quad+\bun{7}{9}\cdot\bun{2}{8}\\
&=\bun{1}{36}+\bun{7}{36}=\bun{2}{9}.
\end{aligned}$$`,
    answer: String.raw`ともに $\bun{2}{9}$`,
  },
  "1-(5)": {
    approach: String.raw`$AI$ は A の角の二等分線なので，まず $D$ が辺 $BC$ をどの比に分けるかを求めます。内心 $I$ は $C$ の角の二等分線上にあり，$D$ は辺 $BC$ 上なので，これは三角形 $ACD$ の $\angle ACD$ の二等分線でもあります。対辺 $AD$ 上の $I$ に再び定理を使います。`,
    formula: {
      title: "角の二等分線の定理",
      body: String.raw`三角形で，角の二等分線は対辺を両側の辺の比に分ける。`,
    },
    solution: String.raw`角の二等分線の定理より，
$$\begin{aligned}
BD:DC&=AB:AC=6:3=2:1,\\
BD&=7\cdot\bun{2}{3}=\bun{14}{3},\\
DC&=7\cdot\bun{1}{3}=\bun{7}{3}.
\end{aligned}$$
また，$D$ は辺 $BC$ 上なので $\angle ACD=\angle ACB$ であり，$CI$ は $\angle ACD$ の二等分線である。したがって三角形 $ACD$ の対辺 $AD$ と $I$ で交わるから，
$$\begin{aligned}
AI:ID&=CA:CD\\
&=3:\bun{7}{3}=9:7.
\end{aligned}$$`,
    answer: String.raw`$AI:ID=9:7$`,
    figure: String.raw`<svg class="solution-figure-svg" viewBox="0 20 300 170" role="img" aria-label="三角形ABCと点D，内心I"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M40 130 L264 130 L213.71 48.22 Z"/><path d="M213.71 48.22 L189.33 130"/></g><g fill="currentColor"><circle cx="213.71" cy="48.22" r="3"/><circle cx="40" cy="130" r="3"/><circle cx="264" cy="130" r="3"/><circle cx="189.33" cy="130" r="3"/><circle cx="200" cy="94.22" r="3"/></g><g fill="currentColor" font-family="Arial, sans-serif" font-size="14"><text x="213.71" y="37" text-anchor="middle">A</text><text x="28" y="148" text-anchor="end">B</text><text x="276" y="148">C</text><text x="189.33" y="148" text-anchor="middle">D</text><text x="211" y="92">I</text><text x="189.33" y="175" text-anchor="middle">BD:DC=2:1</text></g></svg>`,
  },
  "5-(1)": {
    approach: String.raw`3人がAに入ると残り3人の行き先だけが残る。Cに入る1人を選べば，Bの2人は自動的に決まる。`,
    formula: {
      title: "組合せによる数え上げ",
      body: String.raw`残りの人を定員に合わせて選ぶ。最後の部屋の人は自動的に決まる。`,
    },
    solution: String.raw`Cに入る1人を残り3人から選ぶ。
$$\begin{aligned}
{}_3C_1&=3.
\end{aligned}$$`,
    answer: String.raw`3通り`,
  },
  "5-(2)": {
    approach: String.raw`一郎をA，二郎をB，三郎をCに固定する。残り3人からAに入る2人を選べばよい。`,
    formula: {
      title: "組合せの基本",
      body: String.raw`$ {}_nC_r $ は，$n$ 人から $r$ 人を選ぶ場合の数を表す。`,
    },
    solution: String.raw`Aに入る2人を残り3人から選ぶ。
$$\begin{aligned}
{}_3C_2&=3.
\end{aligned}$$`,
    answer: String.raw`3通り`,
  },
  "5-(3)": {
    approach: String.raw`「2人だけが同じ部屋」は全員同じ場合を含まない。まずペアを選び，残る1人の部屋ごとに場合分けする。`,
    formula: {
      title: "場合分け",
      body: String.raw`同じ部屋の定員と，残る1人を置いた後の残り定員を確認する。`,
    },
    solution: String.raw`一郎，二郎，三郎から同じ部屋に入る2人を選ぶ方法は ${"$"}{}_3C_2=3$ 通りある。ペアがAの場合，残る1人がBなら残り3人は各部屋に1人ずつ入り$3!=6$通り，CならAに入る1人を選ぶ$ {}_3C_1=3$ 通り。ペアがBの場合，残る1人がAなら$ {}_3C_2=3$ 通り，Cなら1通り。ペアがCは不可能である。
$$\begin{aligned}
\text{ペアがA}&:3\cdot3!+3\cdot{}_3C_1=27,\\
\text{ペアがB}&:3\cdot{}_3C_2+3\cdot1=12,\\
\text{ペアがC}&:0,\\
\text{合計}&=27+12=39.
\end{aligned}$$`,
    answer: String.raw`39通り`,
  },
  "5-(4)": {
    approach: String.raw`(3)と同じくペアを選び，残る1人の部屋ごとに残り5人の配分を数える。残る1人は必ずペアとは別の部屋に入る。`,
    solution: String.raw`一郎，二郎，三郎から同じ部屋に入る2人を選ぶ方法は ${"$"}{}_3C_2=3$ 通りある。ペアがAの場合，残る1人がBなら残り5人の配分は $\bun{5!}{2!2!1!}=30$ 通り，Cなら $\bun{5!}{2!3!}=10$ 通りである。ペアがBの場合，残る1人がAなら $\bun{5!}{3!1!1!}=20$ 通り，Cなら $\bun{5!}{4!1!}=5$ 通りである。ペアがCは不可能である。
$$\begin{aligned}
\text{ペアがA}&:3\cdot30+3\cdot10=120,\\
\text{ペアがB}&:3\cdot20+3\cdot5=75,\\
\text{ペアがC}&:0,\\
\text{合計}&=120+75=195.
\end{aligned}$$`,
    answer: String.raw`195通り`,
  },
  "2-(1)": {
    approach: String.raw`「$x-2$ で割り切れる」という条件は，$x=2$ を代入した値が0になるという条件に置き換えられます。多項式の割り算をせず，因数定理で定数 $a$ を決めます。`,
    formula: {
      title: "因数定理",
      body: String.raw`多項式 $P(x)$ が $x-\alpha$ で割り切れる
$\Longleftrightarrow P(\alpha)=0$。`,
    },
    solution: String.raw`$P(x)=x^{3}+ax^{2}-x-2$ とおく。因数定理より $P(2)=0$ であるから，
$$\begin{aligned}
P(2)&=2^{3}+a\cdot2^{2}-2-2\\
&=8+4a-2-2=4a+4=0,\\
a&=-1.
\end{aligned}$$`,
    answer: String.raw`$a=-1$`,
  },
  "2-(2)": {
    approach: String.raw`分母を実数にするため，分母の共役複素数を分子分母に掛けます。分母が $5$ になれば，実部と虚部を比較して $a,b$ が読めます。`,
    formula: {
      title: "共役複素数",
      body: String.raw`$(u+vi)(u-vi)=u^{2}+v^{2}$。`,
    },
    solution: String.raw`分母の共役 $2-i$ を分子分母に掛けると，
$$\begin{aligned}
\bun{1+3i}{2+i}
&=\bun{(1+3i)(2-i)}{(2+i)(2-i)}\\
&=\bun{5+5i}{5}=1+i.
\end{aligned}$$`,
    answer: String.raw`$a=1,\ b=1$`,
  },
  "2-(3)": {
    approach: String.raw`中心が分かっているので，円を中心と半径で表します。原点を通る条件から半径の2乗を決め，右辺に置きます。`,
    formula: {
      title: "円の方程式",
      body: String.raw`中心 $(p,q)$，半径 $r$ の円は $(x-p)^{2}+(y-q)^{2}=r^{2}$。`,
    },
    solution: String.raw`C中心 $(2,1)$，半径 $r$ の円は \[(x-2)^{2}+(y-1)^{2}=r^{2}\] と表せる。原点を通るから，
$$\begin{aligned}
r^{2}&=(0-2)^{2}+(0-1)^{2}\\
&=4+1=5.
\end{aligned}$$`,
    answer: String.raw`$(x-2)^{2}+(y-1)^{2}=5$`,
  },
  "2-(4)": {
    approach: String.raw`底を $\bun{1}{3}$ にそろえて指数を比較します。底が $1$ より小さい減少関数なので，指数を比べるときに不等号が逆転する点が本問の核心です。`,
    formula: {
      title: "指数関数の単調性",
      body: String.raw`$0<a<1$ のとき，$a^{u}>a^{v}\Longleftrightarrow u<v$。`,
    },
    solution: String.raw`$\left(\bun{1}{9}\right)^{x}=\left(\bun{1}{3}\right)^{2x}$ と書き直す。底 $\bun{1}{3}$ は $1$ より小さいので減少関数であり，指数を比較すると不等号の向きが逆転する。
$$\begin{aligned}
\left(\bun{1}{3}\right)^{2x}
&>\left(\bun{1}{3}\right)^{-x+1}\\
2x&<-x+1\\
3x&<1,\\
x&<\bun{1}{3}.
\end{aligned}$$`,
    answer: String.raw`$x<\bun{1}{3}$`,
  },
  "2-(5)": {
    approach: String.raw`接線の傾きは，接点の $x$ 座標を導関数に代入して求めます。その傾きと接点を使って直線の方程式を立てます。`,
    formula: {
      title: "接線の傾き",
      body: String.raw`曲線 $y=f(x)$ 上の $x=p$ における接線の傾きは $f'(p)$。`,
    },
    solution: String.raw`$y=x^{2}-3x+1$ より，
$$\begin{aligned}
y'&=2x-3,\\
y'(2)&=1.
\end{aligned}$$
接点 $(2,-1)$ と傾き $1$ を使うと，
$$\begin{aligned}
y-(-1)&=1\cdot(x-2),\\
y&=x-3.
\end{aligned}$$`,
    answer: String.raw`$y=x-3$`,
  },
  "3-(1)": {
    approach: String.raw`$\pi<\theta<\bun{3}{2}\pi$ は第3象限なので，$\sin\theta<0$ の符号を先に決めます。その後，三角比の基本関係で値を定め，2倍角の公式で $\sin2\theta$ を求めます。`,
    formula: {
      title: "三角比の基本関係と2倍角",
      body: String.raw`$\sin^{2}\theta+\cos^{2}\theta=1$，$\sin2\theta=2\sin\theta\cos\theta$`,
    },
    solution: String.raw`第3象限なので $\sin\theta<0$ である。三角比の基本関係より，
$$\begin{aligned}
\sin^{2}\theta&=1-\cos^{2}\theta\\
 &=1-\left(-\bun{4}{5}\right)^{2}\\
 &=\bun{9}{25},\\
\sin\theta&=-\bun{3}{5}.
\end{aligned}$$
したがって2倍角の公式から，
$$\begin{aligned}
\sin2\theta&=2\sin\theta\cos\theta\\
&=2\cdot\left(-\bun{3}{5}\right)\cdot\left(-\bun{4}{5}\right)
 =\bun{24}{25}.
\end{aligned}$$`,
    answer: String.raw`$\sin\theta=-\bun{3}{5}$，$\sin2\theta=\bun{24}{25}$`,
  },
  "3-(2)": {
    approach: String.raw`内積は大きさとそのなす角から求めます。$|2\vec{a}-\vec{b}|$ は，まず2乗して内積の展開公式を使い，最後に平方根を取ります。`,
    formula: {
      title: "内積とベクトルの大きさ",
      body: String.raw`$\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos\theta$，$|\vec{u}-\vec{v}|^{2}=|\vec{u}|^{2}-2\vec{u}\cdot\vec{v}+|\vec{v}|^{2}$`,
    },
    solution: String.raw`内積は，
$$\begin{aligned}
\vec{a}\cdot\vec{b}&=|\vec{a}||\vec{b}|\cos60^{\circ}\\
&=2\cdot3\cdot\bun{1}{2}=3.
\end{aligned}$$
また，ベクトルの大きさを2乗して，
$$\begin{aligned}
|2\vec{a}-\vec{b}|^{2}
 &=4|\vec{a}|^{2}-4\vec{a}\cdot\vec{b}+|\vec{b}|^{2}\\
 &=4\cdot2^{2}-4\cdot3+3^{2}=13.
\end{aligned}$$`,
    answer: String.raw`$\vec{a}\cdot\vec{b}=3$，$|2\vec{a}-\vec{b}|=\sqrt{13}$`,
  },
  "4-(1)": {
    approach: String.raw`$t=x^{2}+2x$ を平方完成して，まず $t$ の範囲を確定します。各因子を $t$ で表すと，4次関数を2次関数として扱えます。`,
    formula: {
      title: "平方完成と置き換え",
      body: String.raw`$t=x^{2}+2x=(x+1)^{2}-1$，$f(x)=(t+1)(t-3)$`,
    },
    solution: String.raw`平方完成すると，
$$\begin{aligned}
t&=x^{2}+2x=(x+1)^{2}-1\geqq-1,\\
f(x)&=(t+1)(t-3)=t^{2}-2t-3.
\end{aligned}$$`,
    answer: String.raw`$t\geqq-1$，$f(x)=t^{2}-2t-3$`,
  },
  "4-(2)": {
    approach: String.raw`(1)で得た $g(t)=t^{2}-2t-3$ に $-4$ を代入し，$t$ を決めてから $x$ に戻します。戻した後の2次方程式も解きます。`,
    formula: {
      title: "置き換え後の復元",
      body: String.raw`$t=x^{2}+2x$ に戻して，$t$ の値ごとに $x$ を求める。`,
    },
    solution: String.raw`$f(x)=-4$ より，
$$\begin{aligned}
t^{2}-2t-3&=-4,\\
(t-1)^{2}&=0.
\end{aligned}$$
したがって $t=1$ であり，これは $t\geqq-1$ を満たす。$t=x^{2}+2x$ に戻すと，
$$\begin{aligned}
x^{2}+2x&=1,\\
x&=-1\pm\sqrt{2}.
\end{aligned}$$`,
    answer: String.raw`$x=-1\pm\sqrt{2}$`,
  },
  "4-(3)": {
    approach: String.raw`$g(t)=t^{2}-2t-3=(t-1)^{2}-4$ のグラフを，定義域 $t\geqq-1$ に限って考えます。1つの $t$ に対応する $x$ の個数も，$t=-1$ を境に変わることに注意します。`,
    formula: {
      title: "解の個数の数え上げ",
      body: String.raw`$t=-1$ のとき $x=-1$ の1個，$t>-1$ のとき $x$ は2個。`,
    },
    solution: String.raw`$g(t)=t^{2}-2t-3=(t-1)^{2}-4$ とおくと，$t\geqq-1$ の範囲で $f(x)=g(t)$ である。
$$\begin{aligned}
t&=(x+1)^{2}-1\geqq-1.
\end{aligned}$$
この式より，1つの $t$ に対応する $x$ の個数は，$t=-1$ のとき1個，$t>-1$ のとき2個である。

次に $g(t)=a$ を解くと，
$$\begin{aligned}
(t-1)^{2}&=a+4,\\
t&=1\pm\sqrt{a+4}\quad(a\geqq-4).
\end{aligned}$$
このうち $t\geqq-1$ の解だけを採る。
$$\begin{aligned}
1-\sqrt{a+4}\geqq-1
&\Longleftrightarrow \sqrt{a+4}\leqq2\\
&\Longleftrightarrow a\leqq0.
\end{aligned}$$
したがって，$a>0$ では下側を除く。
よって $a$ の範囲ごとに，採用できる $t$ と，それが生む $x$ の個数は次のようになる。
$-4<a<0$ では，2つの $t$ はともに $>-1$ である。$a>0$ では，上側の $t$ だけが残る。
$$\begin{aligned}
a<-4&:\ t\text{なし}\ \to\ 0個,\\
a=-4&:\ t=1\ \to\ 2個,\\
-4<a<0&:\ 4個,\\
a=0&:\ t=-1,\ 3\ \to\ 3個,\\
0<a&:\ 2個.
\end{aligned}$$`,
    answer: String.raw`$a<-4$: 0個，$a=-4$: 2個，$-4<a<0$: 4個，$a=0$: 3個，$0<a$: 2個`,
    figure: String.raw`<svg class="solution-figure-svg" viewBox="0 0 250 350" role="img" aria-label="関数g(t)のグラフ"><defs><marker id="arrow-iv" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L7 3.5 L0 7 Z" fill="currentColor"/></marker></defs><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M26 210 L213 210" marker-end="url(#arrow-iv)"/><path d="M72 370 L72 25" marker-end="url(#arrow-iv)"/><path d="M28 338 L206 338" stroke-dasharray="5 5"/><path d="M40 210 L48 240 L56 266 L64 288 L72 306 L80 324 L88 330 L96 336 L104 338 L112 336 L120 330 L128 324 L136 306 L144 288 L152 266 L160 240 L168 210 L176 176 L184 138 L192 96 L200 50"/></g><g fill="currentColor"><circle cx="104" cy="338" r="3"/><circle cx="40" cy="210" r="4"/></g><g fill="currentColor" font-family="Arial, sans-serif" font-size="14"><text x="220" y="205">t</text><text x="78" y="28">y</text><text x="207" y="333">y=-4</text><text x="207" y="47">y=g(t)</text><text x="37" y="232" text-anchor="end">t=-1</text></g></svg>`,
  },
  "6-(1)": {
    approach: String.raw`$\theta=\bun{\pi}{2}$ のときは，3点の座標を具体的に求め，底辺と高さから面積を計算します。`,
    formula: {
      title: "三角形の面積",
      body: String.raw`$S=\bun{1}{2}\times\text{底辺}\times\text{高さ}$`,
    },
    solution: String.raw`$\theta=\bun{\pi}{2}$ のとき，
$$\begin{aligned}
A&=(1,0),\quad B=(0,1),\\
C&=(-1,0).
\end{aligned}$$
したがって $AC=2$，高さは1であるから，
$$\begin{aligned}
S&=\bun{1}{2}\cdot2\cdot1=1.
\end{aligned}$$`,
    answer: String.raw`$S=1$`,
  },
  "6-(2)": {
    approach: String.raw`$B$ と $C$ は同じ $y$ 座標をもつので，線分 $BC$ を底辺にすると高さがすぐに求まります。`,
    formula: {
      title: "底辺と高さ",
      body: String.raw`$BC$ を底辺とし，$A$ から直線 $BC$ までの距離を高さとする。`,
    },
    solution: String.raw`$\theta=\bun{\pi}{4}$ のとき，
$$\begin{aligned}
B&=\left(\bun{1}{\sqrt{2}},\bun{1}{\sqrt{2}}\right),\\
C&=\left(-\bun{1}{\sqrt{2}},\bun{1}{\sqrt{2}}\right).
\end{aligned}$$
よって $BC=\sqrt{2}$，$A$ から直線 $BC$ までの距離は $\bun{1}{\sqrt{2}}$ である。
$$\begin{aligned}
S&=\bun{1}{2}\cdot\sqrt{2}\cdot\bun{1}{\sqrt{2}}=\bun{1}{2}.
\end{aligned}$$`,
    answer: String.raw`$S=\bun{1}{2}$`,
  },
  "6-(3)": {
    approach: String.raw`座標から三角形の面積を行列式で表し，$0<\theta\leqq\pi$ から絶対値の中身が正であることを確認します。`,
    formula: {
      title: "座標による面積",
      body: String.raw`$S=\bun{1}{2}\left|\begin{vmatrix}x_B-x_A&y_B-y_A\\x_C-x_A&y_C-y_A\end{vmatrix}\right|$`,
    },
    solution: String.raw`$B=(\cos\theta,\sin\theta)$，また加法定理より，
$$\begin{aligned}
C&=\left(-\sin\theta,\cos\theta\right).
\end{aligned}$$
まず面積を行列式で表すと，
$$\begin{aligned}
2S&=\bigl|(\cos\theta-1)\cos\theta\\
&\quad-\sin\theta(-\sin\theta-1)\bigr|\\
&=\bigl|1-\cos\theta+\sin\theta\bigr|.
\end{aligned}$$
ここで $0<\theta\leqq\pi$ より $\sin\theta\geqq0$，$1-\cos\theta\geqq0$ である。したがって絶対値を外せて，
$$\begin{aligned}
S=\bun{1}{2}(\sin\theta-\cos\theta+1).
\end{aligned}$$`,
    answer: String.raw`$S=\bun{1}{2}(\sin\theta-\cos\theta+1)$`,
    figure: String.raw`<svg class="solution-figure-svg" viewBox="0 0 360 340" role="img" aria-label="単位円上の三角形ABC"><defs><marker id="arrow-vi" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L7 3.5 L0 7 Z" fill="currentColor"/></marker></defs><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M50 170 L315 170" marker-end="url(#arrow-vi)"/><path d="M180 295 L180 35" marker-end="url(#arrow-vi)"/><circle cx="180" cy="170" r="100"/><path d="M280 170 L260 110 L120 90 Z"/><path d="M180 170 L260 110 M180 170 L120 90"/><path d="M194.4 159.2 L183.6 144.8 L169.2 155.6"/><path d="M226 170 A46 46 0 0 0 216.8 142.4"/></g><g fill="currentColor"><circle cx="280" cy="170" r="3"/><circle cx="260" cy="110" r="3"/><circle cx="120" cy="90" r="3"/><circle cx="180" cy="170" r="3"/></g><g fill="currentColor" font-family="Arial, sans-serif" font-size="14"><text x="288" y="166">A</text><text x="267" y="103">B</text><text x="113" y="85" text-anchor="end">C</text><text x="168" y="187" text-anchor="end">O</text><text x="243" y="146">θ</text></g></svg>`,
  },
  "6-(4)": {
    approach: String.raw`$\sin\theta-\cos\theta$ を合成して，$\theta$ の範囲を合成後の角の範囲に移します。`,
    formula: {
      title: "三角関数の合成",
      body: String.raw`$\sin\theta-\cos\theta=\sqrt{2}\sin\left(\theta-\bun{\pi}{4}\right)$`,
    },
    solution: String.raw`(3)より，
$$\begin{aligned}
S&=\bun{1}{2}\left\{\sin\theta-\cos\theta+1\right\}\\
&=\bun{1}{2}\left\{\sqrt{2}\sin\left(\theta-\bun{\pi}{4}\right)+1\right\}.
\end{aligned}$$
$-\bun{\pi}{4}<\theta-\bun{\pi}{4}\leqq\bun{3\pi}{4}$ であり，この範囲には $\bun{\pi}{2}$ が含まれる。したがって，
$$\begin{aligned}
\theta-\bun{\pi}{4}&=\bun{\pi}{2},\\
\theta&=\bun{3\pi}{4}
\end{aligned}$$
のとき $S$ は最大となる。その最大値は，
$$\begin{aligned}
S_{\max}&=\bun{1}{2}(\sqrt{2}+1).
\end{aligned}$$`,
    answer: String.raw`$S_{\max}=\bun{1}{2}(\sqrt{2}+1)$，$\theta=\bun{3\pi}{4}$`,
  },
  "7-(1)": {
    approach: String.raw`奇数個 $2n-1$ 項の等差数列では $a_n$ が中央項になるため，和は「項数×中央項」で表せます。まず $n=1$ を代入し，初項が0ではないことを使います。`,
    formula: {
      title: "等差数列の和",
      body: String.raw`$S_{2n-1}=(2n-1)a_n$`,
    },
    solution: String.raw`$n=1$ とすると，
$$\begin{aligned}
S_1&=a_1a_2,\\
a_1&=a_1a_2.
\end{aligned}$$
初項は0ではないので $a_1$ で割ると，$a_2=1$ である。`,
    answer: String.raw`$a_2=1$`,
  },
  "7-(2)": {
    approach: String.raw`次に $n=2$ を代入し，(1)で得た $a_2$ を使います。等差数列であることも利用します。`,
    formula: {
      title: "3項の等差数列",
      body: String.raw`$a_1+a_3=2a_2$`,
    },
    solution: String.raw`$n=2$ とすると，等差数列の和より $S_3=3a_2$ であり，関係式より $S_3=a_2a_3$ である。$a_2=1$ だから $a_3=3$ となる。また $S_3=a_1+a_2+a_3=3a_2$ より，
$$\begin{aligned}
a_1+1+3&=3,\\
a_1&=-1.
\end{aligned}$$`,
    answer: String.raw`$a_1=-1$`,
  },
  "7-(3)": {
    approach: String.raw`(1)の関係式と等差数列の和を組み合わせると，各項を順に決められます。各項が0でないことも同時に確認できます。`,
    formula: {
      title: "一般項",
      body: String.raw`$a_n=a_1+(n-1)d$`,
    },
    solution: String.raw`等差数列の和を使うと，与えられた関係式は，
$$\begin{aligned}
(2n-1)a_n&=a_na_{n+1}
\end{aligned}$$
となる。$a_1\ne0$ であり，$n=1$ から $a_2=1\ne0$ を得た。以後，$a_n\ne0$ のとき，
$$\begin{aligned}
a_{n+1}=2n-1
\end{aligned}$$
である。右辺は正の奇数なので，各項は0でない。この式から $a_3=3$ であり，
$$\begin{aligned}
d&=a_3-a_2=3-1=2,\\
a_n&=a_1+(n-1)d\\
&=-1+2(n-1)=2n-3.
\end{aligned}$$`,
    answer: String.raw`$a_n=2n-3$`,
  },
  "7-(4)": {
    approach: String.raw`$S_{2k-1}=a_ka_{k+1}$ に一般項を代入し，部分分数分解を使います。$k=1$ では一方の分母が負になりますが，式はそのまま成り立ちます。`,
    formula: {
      title: "部分分数分解",
      body: String.raw`$\bun{1}{(2k-3)(2k-1)}=\bun{1}{2}\left(\bun{1}{2k-3}-\bun{1}{2k-1}\right)$`,
    },
    solution: String.raw`一般項を使うと，
$$\begin{aligned}
S_{2k-1}&=a_ka_{k+1}=(2k-3)(2k-1),\\
\bun{1}{S_{2k-1}}&=\bun{1}{(2k-3)(2k-1)}\\
&=\bun{1}{2}\left(\bun{1}{2k-3}-\bun{1}{2k-1}\right).
\end{aligned}$$
したがって，
$$\begin{aligned}
\sum_{k=1}^{n}\bun{1}{S_{2k-1}}
&=\bun{1}{2}\Bigl\{\left(\bun{1}{-1}-\bun{1}{1}\right)\\
&\quad+\left(\bun{1}{1}-\bun{1}{3}\right)\\
&\quad+\cdots\\
&\quad+\left(\bun{1}{2n-3}-\bun{1}{2n-1}\right)\Bigr\}.
\end{aligned}$$
隣り合う項が打ち消し合い，最初の $\bun{1}{-1}=-1$ と最後の $-\bun{1}{2n-1}$ だけが残る。
$$\begin{aligned}
&=\bun{1}{2}\left(-1-\bun{1}{2n-1}\right)\\
&=\bun{1}{2}\cdot\bun{-2n}{2n-1}\\
&=-\bun{n}{2n-1}.
\end{aligned}$$`,
    answer: String.raw`$-\bun{n}{2n-1}$`,
  },
};

window.MATH_SOLUTIONS.rikaido_2507_beta["3-(3)"] = window.MATH_SOLUTIONS.rikaido_2507_beta["2-(3)"];
window.MATH_SOLUTIONS.rikaido_2507_beta["3-(4)"] = window.MATH_SOLUTIONS.rikaido_2507_beta["2-(4)"];
window.MATH_SOLUTIONS.rikaido_2507_beta["3-(5)"] = window.MATH_SOLUTIONS.rikaido_2507_beta["2-(5)"];
