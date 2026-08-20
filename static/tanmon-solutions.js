window.MATH_SOLUTIONS = window.MATH_SOLUTIONS || {};
window.MATH_SOLUTIONS.tanmon_ippan = {
  "1-(1)": {
    approach: String.raw`百の位は $0$ になれないので，そこだけ先に除きます。百の位，十の位，一の位を順に決める積の法則で数えます。`,
    formula: {
      title: "積の法則",
      body: String.raw`ある操作を順に行うとき，全体の場合の数は各段階の場合の数の積で求められる。`,
    },
    solution: String.raw`百の位は $1,2,3,4,5,6$ の $6$ 通りです。百の位を決めた後，十の位は残った $6$ 個から選べ，一の位はさらに残った $5$ 個から選べます。
$$
6\times6\times5=180
$$`,
    answer: String.raw`$180$個`,
  },
  "1-(2)": {
    approach: String.raw`5の倍数は一の位が $0$ または $5$ です。一の位を先に決め，この2つの場合を分けて数えます。`,
    formula: {
      title: "5の倍数の条件",
      body: String.raw`整数が $5$ の倍数なら，一の位は $0$ または $5$ である。`,
    },
    solution: String.raw`一の位が $0$ のとき，百の位は $1$〜$6$ の $6$ 通り，十の位は残りの $5$ 通りです。
$$
6\times5=30
$$
一の位が $5$ のとき，百の位は $1,2,3,4,6$ の $5$ 通り，十の位は残りの $5$ 通りです。
$$
5\times5=25
$$
したがって，求める個数は
$$
30+25=55
$$`,
    answer: String.raw`$55$個`,
  },
  "2-(1)": {
    approach: String.raw`左右の端を女子に固定します。両端に入る女子を順に選び，残った6人を中央の6席に並べます。`,
    formula: {
      title: "端の固定と順列",
      body: String.raw`端の2席を決めた後，残りの人を中央の席に並べる。`,
    },
    solution: String.raw`左端の女子は $3$ 通り，右端の女子は残った $2$ 通りです。残った6人は中央の6席に $6!$ 通りに並びます。
$$
3\times2\times6!=4320
$$`,
    answer: String.raw`$4320$通り`,
  },
  "2-(2)": {
    approach: String.raw`先に男子5人を並べると，女子を入れられるすき間が6個できます。そのすき間から3個を選び，各すき間に女子を1人ずつ入れます。`,
    formula: {
      title: "すき間に入れる方法",
      body: String.raw`男子5人の間と両端にできる6個のすき間から，女子を入れる3個を選ぶ。`,
    },
    solution: String.raw`男子5人を並べる方法は $5!$ 通りです。男子を並べると，両端と男子の間に女子を入れられるすき間が $6$ 個できます。そのうち3個を選ぶ方法は $\!{}_{6}C_{3}$ 通りで，選んだすき間への女子3人の並べ方は $3!$ 通りです。
$$
5!\times\!{}_{6}C_{3}\times3!=120\times20\times6=14400
$$`,
    answer: String.raw`$14400$通り`,
  },
  "3-(1)": {
    approach: String.raw`男子4人を1つのかたまり，女子4人を1つのかたまりとみなします。2つのかたまりを円卓に置き，それぞれのかたまりの中の順番を決めます。`,
    formula: {
      title: "円順列とブロック",
      body: String.raw`円卓の $n$ 個の対象を並べる方法は $(n-1)!$ 通り。`,
    },
    solution: String.raw`男子のかたまりと女子のかたまりを円卓に置く方法は $(2-1)!$ 通りです。男子4人の並び方は $4!$ 通り，女子4人の並び方も $4!$ 通りです。
$$
(2-1)!\times4!\times4!=576
$$`,
    answer: String.raw`$576$通り`,
  },
  "3-(2)": {
    approach: String.raw`男子を円形に並べてから，男子と男子の間にできる4個のすき間へ女子を1人ずつ入れます。`,
    formula: {
      title: "交互配置",
      body: String.raw`男子の円順列を作り，各すき間に女子を1人ずつ入れる。`,
    },
    solution: String.raw`男子4人を円形に並べる方法は $(4-1)!$ 通りです。男子の間の4個のすき間に女子4人を並べる方法は $4!$ 通りです。
$$
(4-1)!\times4!=3!\times4!=144
$$`,
    answer: String.raw`$144$通り`,
  },
  "3-(3)": {
    approach: String.raw`$A$ と $E$ を1つの組にして数えます。組の内部の並び方と，組を含む7個の対象の円順列を掛け合わせます。`,
    formula: {
      title: "隣り合う2人のブロック化",
      body: String.raw`隣り合う2人を1組とすると，組の内部は $2!$ 通りに入れ替えられる。`,
    },
    solution: String.raw`$A,E$ を1つの組とみなすと，組と残り6人の計7個を円形に並べる方法は $(7-1)!$ 通りです。組の内部は $AE,EA$ の $2!$ 通りです。
$$
(7-1)!\times2!=6!\times2=1440
$$`,
    answer: String.raw`$1440$通り`,
  },
  "3-(4)": {
    approach: String.raw`「隣り合わない」は，全体から「隣り合う」場合を引く余事象で数えます。`,
    formula: {
      title: "余事象",
      body: String.raw`条件を満たさない場合の数は，全体の場合の数から条件を満たす場合の数を引く。`,
    },
    solution: String.raw`8人を円卓に並べる全体の方法は $(8-1)!=7!$ 通りです。(3)より，$A,E$ が隣り合う方法は $1440$ 通りなので，隣り合わない方法は
$$
7!-1440=5040-1440=3600
$$`,
    answer: String.raw`$3600$通り`,
  },
  "4-(1)": {
    approach: String.raw`選ぶ順番を考えないので，15人から4人を選ぶ組合せとして数えます。`,
    formula: {
      title: "組合せ",
      body: String.raw`順序を考えずに $n$ 個から $r$ 個を選ぶ方法は $\!{}_{n}C_{r}$ 通り。`,
    },
    solution: String.raw`15人から4人を選ぶので，
$$
{}_{15}C_{4}=\frac{15\times14\times13\times12}{4\times3\times2\times1}=1365
$$`,
    answer: String.raw`$1365$通り`,
  },
  "4-(2)": {
    approach: String.raw`「少なくとも1人が女子」は，女子が1人もいない場合を除く余事象で数えると簡単です。`,
    formula: {
      title: "余事象と組合せ",
      body: String.raw`条件を満たす選び方＝全体の選び方−条件を満たさない選び方。`,
    },
    solution: String.raw`全体の選び方は (1)より $1365$ 通りです。女子が1人もいない選び方は，男子9人から4人を選ぶので
$$
{}_{9}C_{4}=126
$$
通りです。したがって，少なくとも1人が女子である選び方は
$$
1365-126=1239
$$`,
    answer: String.raw`$1239$通り`,
  },
  "5-(1)": {
    approach: String.raw`RADAR では R と A がそれぞれ2回ずつ現れます。同じ文字を区別しない重複順列として数えます。`,
    formula: {
      title: "重複順列",
      body: String.raw`同じ文字の重複を分母で割る。`,
    },
    solution: String.raw`5文字をすべて区別して並べると $5!$ 通りですが，R と A の入れ替えをそれぞれ $2!$ 回ずつ同一視します。
$$
\frac{5!}{2!2!}=30
$$`,
    answer: String.raw`$30$通り`,
  },
  "5-(2)": {
    approach: String.raw`p,p,q,q,r,r をすべて使うので，6文字の重複順列として数えます。`,
    formula: {
      title: "重複順列",
      body: String.raw`同じ文字がそれぞれ2個ずつあるとき，並べ方は $\frac{6!}{2!2!2!}$ 通り。`,
    },
    solution: String.raw`6文字を区別して並べる $6!$ 通りから，p同士，q同士，r同士の入れ替えを同一視します。
$$
\frac{6!}{2!2!2!}=90
$$`,
    answer: String.raw`$90$通り`,
  },
  "5-(3)": {
    approach: String.raw`p,qだけを使って4個選ぶには，p,p,q,qをすべて使うしかありません。`,
    formula: {
      title: "重複順列",
      body: String.raw`p,p,q,q の並べ方は $\frac{4!}{2!2!}$ 通り。`,
    },
    solution: String.raw`p,p,q,q の並べ方を数えます。
$$
\frac{4!}{2!2!}=6
$$`,
    answer: String.raw`$6$通り`,
  },
  "5-(4)": {
    approach: String.raw`5個の中にp,q,rをすべて含めるため，どの文字を1個だけ使うかで3つに場合分けします。`,
    formula: {
      title: "場合分けと重複順列",
      body: String.raw`1,2,2 個ずつの3種類を並べる方法は $\frac{5!}{2!2!}$ 通り。`,
    },
    solution: String.raw`5個の中にp,q,rをすべて含める場合，個数は $(1,2,2)$ の組合せになります。1個だけ使う文字はp,q,rの3通りで，各場合の並べ方は $\frac{5!}{2!2!}$ 通りです。
$$
3\times\frac{5!}{2!2!}=3\times30=90
$$`,
    answer: String.raw`$90$通り`,
  },
};
