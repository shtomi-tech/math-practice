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
    solution: String.raw`男子5人を並べる方法は $5!$ 通りです。男子を並べると，両端と男子の間に女子を入れられるすき間が $6$ 個できます。そのうち3個を選ぶ方法は $\binom{6}{3}$ 通りで，選んだすき間への女子3人の並べ方は $3!$ 通りです。
$$
5!\times\binom{6}{3}\times3!=120\times20\times6=14400
$$`,
    answer: String.raw`$14400$通り`,
  },
};
