window.MATH_SOLUTIONS = window.MATH_SOLUTIONS || {};
window.MATH_SOLUTIONS.rikaido_2608_high1 = {
  "1-(1)": {
    approach: String.raw`分数係数をなくしてから，移項と同類項の整理を行い，一次方程式を解く。`,
    formula: {
      title: "一次方程式",
      body: String.raw`等式の両辺に同じ数を掛けても，等式は保たれる。`
    },
    solution: String.raw`両辺に $3$ を掛けて分母をなくすと，
$$\begin{aligned}
2x+9&=6(x+1)\\
&=6x+6,\\
-4x&=-3,\\
x&=\dfrac{3}{4}.
\end{aligned}$$`,
    answer: String.raw`$x=\dfrac{3}{4}$`
  },
  "1-(2)": {
    approach: String.raw`まず2点から傾きを求め，$y=ax+b$ に代入して切片を決める。`,
    formula: {
      title: "直線の傾き",
      body: String.raw`2点 $(x_1,y_1)$，$(x_2,y_2)$ を通る直線の傾きは $\dfrac{y_2-y_1}{x_2-x_1}$。`
    },
    solution: String.raw`2点を通る直線の傾きは，
$$
\dfrac{1-3}{5-1}=-\dfrac{1}{2}
$$
である。直線を $y=-\dfrac{1}{2}x+b$ とおき，$(1,3)$ を代入すると，
$$\begin{aligned}
3&=-\dfrac{1}{2}+b,\\
b&=\dfrac{7}{2}.
\end{aligned}$$
したがって，$y=-\dfrac{1}{2}x+\dfrac{7}{2}$。`,
    answer: String.raw`$y=-\dfrac{1}{2}x+\dfrac{7}{2}$`
  },
  "1-(3)": {
    approach: String.raw`$x^2-xy$ を $x(x-y)$ と因数分解し，先に $x-y$ を求めてから代入する。`,
    formula: {
      title: "因数分解",
      body: String.raw`$x^2-xy=x(x-y)$`
    },
    solution: String.raw`$x-y=(1+\sqrt{3})-(1-\sqrt{3})=2\sqrt{3}$ である。よって，
$$\begin{aligned}
x^2-xy&=x(x-y)\\
&=(1+\sqrt{3})\cdot2\sqrt{3}\\
&=6+2\sqrt{3}.
\end{aligned}$$`,
    answer: String.raw`$x^2-xy=6+2\sqrt{3}$`
  },
  "1-(4)": {
    approach: String.raw`三等分点を結ぶ線分が底辺と平行になることを使い，相似比から長さと面積比を順に求める。`,
    formula: {
      title: "相似比と面積比",
      body: String.raw`相似比が $a:b$ のとき，面積比は $a^2:b^2$。`
    },
    solution: String.raw`$D$，$E$ と $F$，$G$ はそれぞれ辺を3等分する点なので，$DF$ と $EG$ は $BC$ に平行である。したがって $\triangle AEG\sim\triangle ABC$ で，
$$
\dfrac{EG}{BC}=\dfrac{AE}{AB}=\dfrac{2}{3}.
$$
よって，
$$
EG=12\cdot\dfrac{2}{3}=8.
$$

また，$\triangle ADF\sim\triangle ABC$ の相似比は $1:3$，$\triangle AEG\sim\triangle ABC$ の相似比は $2:3$ である。したがって，四角形 $DEGF$ の面積は
$$
\dfrac{4}{9}-\dfrac{1}{9}=\dfrac{1}{3}
$$
であり，面積比は $1:3$。`,
    answer: String.raw`$EG=8$，$DEGF:ABC=1:3$`
  },
  "1-(5)": {
    approach: String.raw`扇形の弧長を円錐の底面の円周に対応させて底面の半径を求め，母線と半径から高さを出して体積を求める。`,
    formula: {
      title: "円錐の体積",
      body: String.raw`$V=\dfrac{1}{3}\pi r^2h$，また，扇形の弧長は $2\pi l\cdot\dfrac{\theta}{360^{\circ}}$。`
    },
    solution: String.raw`扇形の弧長は，
$$
2\pi\cdot4\cdot\dfrac{90^{\circ}}{360^{\circ}}=2\pi
$$
である。これは円錐の底面の円周 $2\pi r$ に等しいから，
$$
2\pi r=2\pi,\qquad r=1.
$$
円錐の母線の長さが $4$ なので，高さを $h$ とすると三平方の定理より，
$$
h^2=4^2-1^2=15,\qquad h=\sqrt{15}.
$$
したがって，体積は
$$
V=\dfrac{1}{3}\pi\cdot1^2\cdot\sqrt{15}=\dfrac{\sqrt{15}}{3}\pi.
$$`,
    answer: String.raw`$V=\dfrac{\sqrt{15}}{3}\pi$`
  },
  "2-(1)": {
    approach: String.raw`累乗の積を係数と文字の種類ごとに分け，それぞれの指数を整理する。`,
    formula: {
      title: "累乗の法則",
      body: String.raw`$(ab)^n=a^nb^n,\quad a^ma^n=a^{m+n}$`
    },
    solution: String.raw`
$$\begin{aligned}
(-ab^{2})^{3}\times(3a^{2}bc)^{2}
&=(-1)^{3}a^{3}b^{6}\times9a^{4}b^{2}c^{2}\\
&=-9a^{7}b^{8}c^{2}.
\end{aligned}$$`,
    answer: String.raw`$-9a^{7}b^{8}c^{2}$`
  },
  "2-(2)": {
    approach: String.raw`$x^{4}-y^{4}$ を平方の差として見て，差の部分をもう一度因数分解する。`,
    formula: {
      title: "平方の差",
      body: String.raw`$A^{2}-B^{2}=(A+B)(A-B)$`
    },
    solution: String.raw`平方の差を2回使うと，
$$\begin{aligned}
x^{4}-y^{4}
&=(x^{2})^{2}-(y^{2})^{2}\\
&=(x^{2}+y^{2})(x^{2}-y^{2})\\
&=(x^{2}+y^{2})(x+y)(x-y).
\end{aligned}$$`,
    answer: String.raw`① $(x^{2}+y^{2})(x+y)(x-y)$`
  },
  "2-(3)": {
    approach: String.raw`$x=4$ を各絶対値の中へ代入し，絶対値を正の数に直してから計算する。`,
    formula: {
      title: "絶対値",
      body: String.raw`$|u|$ は $u$ の符号に応じて $u$ または $-u$ になる。`
    },
    solution: String.raw`$x=4$ を代入すると，
$$\begin{aligned}
|x-3|+|x-6|-|x+1|
&=|4-3|+|4-6|-|4+1|\\
&=1+2-5\\
&=-2.
\end{aligned}$$`,
    answer: String.raw`$-2$`
  },
  "2-(4)": {
    approach: String.raw`分母の共役な式を分子・分母に掛け，分母を平方の差にして有理化する。`,
    formula: {
      title: "共役な式",
      body: String.raw`$(A-B)(A+B)=A^{2}-B^{2}$`
    },
    solution: String.raw`
$$\begin{aligned}
\dfrac{1}{2\sqrt{2}-\sqrt{7}}
&=\dfrac{2\sqrt{2}+\sqrt{7}}{(2\sqrt{2}-\sqrt{7})(2\sqrt{2}+\sqrt{7})}\\
&=\dfrac{2\sqrt{2}+\sqrt{7}}{8-7}\\
&=2\sqrt{2}+\sqrt{7}.
\end{aligned}$$`,
    answer: String.raw`$2\sqrt{2}+\sqrt{7}$`
  },
  "2-(5)": {
    approach: String.raw`根号の中を平方の形として絶対値に直し，条件 $0<a<2$ からそれぞれの符号を判定する。`,
    formula: {
      title: "平方根と絶対値",
      body: String.raw`$\sqrt{u^{2}}=|u|$`
    },
    solution: String.raw`$0<a<2$ より $a-2<0$，$a>0$ である。したがって，
$$\begin{aligned}
\sqrt{(a-2)^{2}}+\sqrt{a^{2}}
&=|a-2|+|a|\\
&=-(a-2)+a\\
&=2.
\end{aligned}$$`,
    answer: String.raw`$2$`
  },
  "3-(1)": {
    approach: String.raw`分数を割り算し，余りの並びが繰り返すところを見つけて循環する数字の配列を定める。`,
    formula: {
      title: "循環小数の表し方",
      body: String.raw`繰り返す数字の配列を上線で表す。`
    },
    solution: String.raw`分数を小数に直すと，
$$\begin{aligned}
\dfrac{1}{8}&=0.125,\\
\dfrac{5}{6}&=0.8333\ldots=0.\overline{83},\\
\dfrac{8}{27}&=0.296296\ldots=0.\overline{296}.
\end{aligned}$$`,
    answer: String.raw`$0.125$，$0.\overline{83}$，$0.\overline{296}$`
  },
  "3-(2)": {
    approach: String.raw`循環する配列の桁数だけ $10$ の累乗を掛け，元の式を引いて循環部分を消す。最後に既約分数へ約分する。`,
    formula: {
      title: "循環小数の分数化",
      body: String.raw`循環節が3桁なら，$1000x-x$ を考える。`
    },
    solution: String.raw`$x=0.\overline{135}=0.135135\ldots$ とおく。循環節が3桁なので，
$$\begin{aligned}
1000x&=135.135135\ldots,\\
x&=0.135135\ldots.
\end{aligned}$$
辺々を引くと，
$$
999x=135.
$$
したがって，
$$
x=\dfrac{135}{999}=\dfrac{5}{37}.
$$`,
    answer: String.raw`$999x=135$，$x=\dfrac{5}{37}$`
  },
  "3-(3)": {
    approach: String.raw`循環節が3桁であることから $1000x-x$ を作り，得られた分数を最大公約数で約分する。`,
    formula: {
      title: "循環小数の分数化",
      body: String.raw`$x=0.\overline{abc}$ ならば $999x=abc$。`
    },
    solution: String.raw`$x=0.\overline{407}=0.407407\ldots$ とおく。すると，
$$
1000x=407.407407\ldots
$$
であるから，辺々を引いて
$$
999x=407.
$$
よって，
$$
x=\dfrac{407}{999}=\dfrac{11}{27}.
$$`,
    answer: String.raw`$\dfrac{11}{27}$`
  },
  "3-(4)": {
    approach: String.raw`それぞれの循環小数を分数に直してから掛け算を行い，最後に積を循環小数へ戻す。`,
    formula: {
      title: "循環小数の分数化",
      body: String.raw`$0.\overline{a b c}=\dfrac{abc}{999}$`
    },
    solution: String.raw`循環小数を分数に直すと，
$$\begin{aligned}
1.\overline{3}&=\dfrac{4}{3},\\
0.\overline{216}&=\dfrac{216}{999}=\dfrac{8}{37}.
\end{aligned}$$
したがって，
$$\begin{aligned}
1.\overline{3}\times0.\overline{216}
&=\dfrac{4}{3}\times\dfrac{8}{37}\\
&=\dfrac{32}{111}\\
&=0.288288\ldots=0.\overline{288}.
\end{aligned}$$`,
    answer: String.raw`$0.\overline{288}$`
  },
  "4-(1)": {
    approach: String.raw`まず $24$ の正の約数をすべて挙げ，その中から $4$ の倍数を除いて共通部分を作る。`,
    formula: {
      title: "補集合との共通部分",
      body: String.raw`$A\cap\overline{B}$ は，$A$ の要素のうち $B$ に属さないものの集合。`
    },
    solution: String.raw`$24$ の正の約数を小さい順に並べると，
$$
A=\{1,2,3,4,6,8,12,24\}.
$$
$B$ は $4$ の倍数の集合なので，$A$ の要素のうち $4,8,12,24$ を除くと，
$$
A\cap\overline{B}=\{1,2,3,6\}.
$$`,
    answer: String.raw`$A=\{1,2,3,4,6,8,12,24\}$，$A\cap\overline{B}=\{1,2,3,6\}$`
  },
  "4-(2)": {
    approach: String.raw`$C$ が表す範囲に入る自然数を連続する数として考え，その中にある $4$ の倍数の個数を数える。`,
    formula: {
      title: "連続する整数と倍数",
      body: String.raw`連続する8個の整数には，4の倍数がちょうど2個含まれる。`
    },
    solution: String.raw`$C$ は長さ $8$ の半開区間 $[k-3,k+5)$ にある自然数の集合である。$k\ge4$ ならば，この区間に含まれる自然数は連続する8個となる。連続する8個の自然数では，4個ごとに1個現れる $4$ の倍数がちょうど2個あるから，
$$
|B\cap C|=2.
$$`,
    answer: String.raw`$2$ 個`
  },
  "4-(3)": {
    approach: String.raw`$12$ が $C$ に入り，$A$ の他の約数が $C$ に入らないように，区間の左端と右端の位置をそれぞれ調べる。`,
    formula: {
      title: "半開区間の端点",
      body: String.raw`$k-3\le n<k+5$ では，左端は含み，右端は含まない。`
    },
    solution: String.raw`$12$ を $C$ に含める条件は，
$$
k-3\le12<k+5
$$
である。また，$8$ を含めないためには $k-3>8$ とする。この条件から，
$$
11<k.
$$
また，$12$ を含める条件から $k\le15$ である。したがって，求める範囲は
$$
11<k\le15.
$$`,
    answer: String.raw`$11<k\le15$`
  },
  "4-(4)": {
    approach: String.raw`補集合のド・モルガンの法則で式を整理し，$A$ の約数のうち条件を満たすものを列挙してから，$C$ の端点を場合分けする。`,
    formula: {
      title: "ド・モルガンの法則",
      body: String.raw`$\overline{X\cup Y}=\overline{X}\cap\overline{Y},\quad \overline{\overline{C}}=C$`
    },
    solution: String.raw`ド・モルガンの法則より，
$$
\overline{B\cup\overline{C}}=\overline{B}\cap C
$$
である。したがって，
$$
A\cap\overline{(B\cup\overline{C})}=(A\cap\overline{B})\cap C=\{1,2,3,6\}\cap C.
$$
この集合が3個になるには，$C$ が $1,2,3$ を含み $6$ を含まない場合と，$1$ を含まず $2,3,6$ を含む場合がある。

前者では，$3<k+5\le6$ より
$$
-2<k\le1.
$$
この範囲では $k-3\le1$ も満たすので，$1,2,3$ は実際に $C$ に含まれる。後者では，$1<k-3\le2$ より
$$
4<k\le5.
$$
この範囲では $6<k+5$ も満たすので，$6$ は $C$ に含まれる。`,
    answer: String.raw`$-2<k\le1$，$4<k\le5$`
  },
  "5-(1)": {
    approach: String.raw`4色の球を箱に1個ずつ入れるので，球の並べ方を考える。`,
    formula: {
      title: "異なるものの順列",
      body: String.raw`異なる $n$ 個のものを一列に並べる方法は $n!$ 通り。`
    },
    solution: String.raw`4種類の色はすべて異なるものとして並ぶので，入れ方は
$$
4!=4\cdot3\cdot2\cdot1=24
$$
通り。`,
    answer: String.raw`24通り`
  },
  "5-(2)": {
    approach: String.raw`同じ色の球は区別せず，8個の位置から同じ色の位置を重複分だけ割って数える。`,
    formula: {
      title: "同じものを含む順列",
      body: String.raw`個数が $3,2,2,1$ のとき，並べ方は $\dfrac{8!}{3!2!2!1!}$。`
    },
    solution: String.raw`全部で $3+2+2+1=8$ 個の位置を並べ，同じ色の入れ替えを割り引くと，
$$
\dfrac{8!}{3!\,2!\,2!\,1!}=1680
$$
通り。`,
    answer: String.raw`1680通り`
  },
  "5-(3)": {
    approach: String.raw`各箱に少なくとも1個入れる条件なので，10個の球を4箱へ正の整数の組として分配する。`,
    formula: {
      title: "正の整数解と仕切り",
      body: String.raw`$x_1+x_2+x_3+x_4=10$，$x_i\ge1$ の解の個数は $\binom{9}{3}$。`
    },
    solution: String.raw`箱 $A,B,C,D$ に入れる個数をそれぞれ $x_1,x_2,x_3,x_4$ とすると，
$$
x_1+x_2+x_3+x_4=10,\qquad x_1,x_2,x_3,x_4\ge1.
$$
各箱に1個ずつ先に入れ，残り6個を4箱に分ける。仕切りを使うと，
$$
\binom{6+4-1}{4-1}=\binom{9}{3}=84
$$
通り。`,
    answer: String.raw`84通り`
  },
  "5-(4)": {
    approach: String.raw`まず5個の色の内訳を $3,1,1$ 型と $2,2,1$ 型に分け，次に箱の合計個数の型ごとに場合分けして数える。`,
    formula: {
      title: "場合分けと重複組合せ",
      body: String.raw`同じ色の球の分配は，箱を区別した重複組合せとして数える。`
    },
    solution: String.raw`5個の球に3種類すべてが含まれる色の組合せは，次の2型である。

Ⅰ：1種類が3個，他の2種類が1個ずつ。3個になる色の選び方は3通り。

Ⅱ：2種類が2個ずつ，他の1種類が1個。1個になる色の選び方は3通り。

また，3箱が空でないときの箱ごとの合計個数は，次の2型である。

ⅰ：1箱が3個，他の2箱が1個ずつ。3個の箱の選び方は3通り。

ⅱ：2箱が2個ずつ，他の1箱が1個。1個の箱の選び方は3通り。

色の組合せがⅠ，箱の分け方がⅰのときは，1個の箱2つに入る色を順に選ぶ。全部で $3\times3=9$ 通りだが，個数1の色を同じ2箱に入れる2通りは不可能なので，$9-2=7$ 通りである。Ⅰ，ⅱのときは，1個の箱に3個の色を入れると残りの分け方が4通り，個数1の色を入れるとそれぞれ2通りなので，$4+2+2=8$ 通りである。

Ⅱ，ⅰのときは，1個の箱2つに入る色を順に選ぶ $9$ 通りから，個数1の色を同じ2箱に入れる1通りを除き，$9-1=8$ 通りである。Ⅱ，ⅱのときは，1個の箱に個数1の色を入れると3通り，個数2の色を入れるとそれぞれ4通りなので，$3+4+4=11$ 通りとなる。したがって，
$$\begin{aligned}
&7\cdot3\cdot3+8\cdot3\cdot3+8\cdot3\cdot3+11\cdot3\cdot3\\
&=63+72+72+99=306.
\end{aligned}$$`,
    answer: String.raw`306通り`
  }
};
