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
};
