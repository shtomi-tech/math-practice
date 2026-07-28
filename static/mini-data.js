window.MINI_EXAMS = {
  "mini_01": {
    id: "mini_01",
    title: "基礎ミックス 第1回",
    seriesTotal: 6,
    seriesNumber: 1,
    units: ["式の展開・因数分解", "実数・1次不等式", "集合と論理", "場合の数"],
    durationMinutes: 30,
    totalPoints: 100,
    note: "4単元を組み合わせたオリジナル問題です。",
    groups: [
      {
        number: "1",
        title: "式の展開・因数分解",
        tag: "ALGEBRA",
        points: 25,
        questions: [
          {
            id: "m01-1-1", label: "(1)", points: 12, type: "numeric",
            stem: "次の式を $x$ について整理したとき、$x^2$、$x$、定数項の係数をそれぞれ答えよ。\\[ (2x-3)^2-(x+1)(x-1) \\]",
            prompts: ["二次の係数", "一次の係数", "定数項"], answers: ["3", "-12", "10"],
            solution: "$(2x-3)^2-(x+1)(x-1)=4x^2-12x+9-(x^2-1)=3x^2-12x+10$。"
          },
          {
            id: "m01-1-2", label: "(2)", points: 8, type: "numeric",
            stem: "$x^2+5xy+6y^2$ を因数分解すると $(x+ay)(x+by)$ となる。$a\\lt b$ のとき、$a$ と $b$ を答えよ。",
            prompts: ["小さい方", "大きい方"], answers: ["2", "3"],
            solution: "$2+3=5$、$2\\cdot3=6$ なので $(x+2y)(x+3y)$。"
          },
          {
            id: "m01-1-3", label: "(3)", points: 5, type: "numeric",
            stem: "$(a+b)^2-(a-b)^2$ の $ab$ の係数を答えよ。",
            prompts: ["$ab$ の係数"], answers: ["4"],
            solution: "$(a^2+2ab+b^2)-(a^2-2ab+b^2)=4ab$。"
          }
        ]
      },
      {
        number: "2",
        title: "実数・1次不等式",
        tag: "REAL / INEQUALITY",
        points: 25,
        questions: [
          {
            id: "m01-2-1", label: "(1)", points: 8, type: "numeric",
            stem: "$\\sqrt{72}-\\sqrt{18}=a\\sqrt{2}$ と表せるとき、係数を答えよ。",
            prompts: ["係数"], answers: ["3"],
            solution: "$\\sqrt{72}=6\\sqrt2$、$\\sqrt{18}=3\\sqrt2$ より、差は $3\\sqrt2$。"
          },
          {
            id: "m01-2-2", label: "(2)", points: 9, type: "choice",
            stem: "$|2x-1|\\le5$ を満たす $x$ の範囲として正しいものを選べ。",
            options: ["$x\\le-2$", "$-2\\le x\\le3$", "$-3\\le x\\le2$", "$x\\ge3$"], answer: 1,
            solution: "$-5\\le2x-1\\le5$ より、$-4\\le2x\\le6$。したがって $-2\\le x\\le3$。"
          },
          {
            id: "m01-2-3", label: "(3)", points: 8, type: "numeric",
            stem: "$3(x-2)<2x+5$ の解を $x\\lt c$ と表すとき、境界値を答えよ。",
            prompts: ["境界値"], answers: ["11"],
            solution: "$3x-6<2x+5$ より $x<11$。"
          }
        ]
      },
      {
        number: "3",
        title: "集合と論理",
        tag: "SETS / LOGIC",
        points: 20,
        questions: [
          {
            id: "m01-3-1", label: "(1)", points: 8, type: "numeric",
            stem: "$U=\\{1,2,\\ldots,10\\}$ とし、$A$ を2の倍数全体、$B$ を3の倍数全体とする。$n(A\\cup B)$ を答えよ。",
            prompts: ["$n(A\\cup B)$"], answers: ["7"],
            solution: "$n(A)=5$、$n(B)=3$、$n(A\\cap B)=1$（6のみ）なので、$5+3-1=7$。"
          },
          {
            id: "m01-3-2", label: "(2)", points: 8, type: "multi",
            stem: "$A=\\{1,2,3,4\\}$、$B=\\{2,4\\}$ とする。正しい記述をすべて選べ。",
            options: ["$B\\subset A$", "$A\\cap B=\\{2,4\\}$", "$A\\cup B=\\{1,2,3,4\\}$", "$A\\subset B$"], answer: [0, 1, 2],
            solution: "$B$ の要素はすべて $A$ に含まれ、共通部分は $\\{2,4\\}$、和集合は $A$ そのもの。$A\\subset B$ は誤り。"
          },
          {
            id: "m01-3-3", label: "(3)", points: 4, type: "choice",
            stem: "「$x<0$ かつ $y<0$」は「$xy>0$」であるための何条件か。",
            options: ["必要条件", "十分条件", "必要十分条件", "必要条件でも十分条件でもない"], answer: 1,
            solution: "両方負なら積は正なので十分条件。ただし積が正でも両方正の場合があるため必要ではない。"
          }
        ]
      },
      {
        number: "4",
        title: "場合の数",
        tag: "COUNTING",
        points: 30,
        questions: [
          {
            id: "m01-4-1", label: "(1)", points: 10, type: "numeric",
            stem: "数字 $1,2,3,4,5$ から異なる4個を使って4桁の偶数を作る。できる数は何個あるか。",
            prompts: ["個数"], answers: ["48"],
            solution: "一の位は2または4の2通り。一の位を決めた後、千・百・十の位は残った4個から順に選ぶので $2\\cdot4\\cdot3\\cdot2=48$ 通り。"
          },
          {
            id: "m01-4-2", label: "(2)", points: 10, type: "numeric",
            stem: "赤玉5個、青玉4個から、赤玉を2個、青玉を1個選ぶ方法は何通りあるか。玉はすべて区別できるものとする。",
            prompts: ["通り"], answers: ["40"],
            solution: "$\\binom52\\binom41=10\\cdot4=40$ 通り。"
          },
          {
            id: "m01-4-3", label: "(3)", points: 10, type: "numeric",
            stem: "格子点 $(0,0)$ から $(3,2)$ まで、右または上だけに進む最短経路を考える。点 $(1,1)$ を通る経路は何通りあるか。",
            prompts: ["通り"], answers: ["6"],
            solution: "$(0,0)$ から $(1,1)$ は $\\binom21=2$ 通り、そこから $(3,2)$ は $\\binom31=3$ 通り。積の法則で $2\\cdot3=6$ 通り。"
          }
        ]
      }
    ]
  },
  "mini_02": {
    id: "mini_02",
    title: "基礎ミックス 第2回",
    seriesTotal: 6,
    seriesNumber: 2,
    units: ["式の展開・因数分解", "実数・1次不等式", "集合と論理", "場合の数"],
    durationMinutes: 30,
    totalPoints: 100,
    note: "4単元を組み合わせたオリジナル問題です。",
    groups: [
      {
        number: "1",
        title: "式の展開・因数分解",
        tag: "ALGEBRA",
        points: 25,
        questions: [
          {
            id: "m02-1-1", label: "(1)", points: 12, type: "numeric",
            stem: "$A=2x^2-3x+4$、$B=x^2+2x-1$ とする。$A+kB$ の $x$ の係数が $1$ になるとき、$k$ の値を求めよ。さらに、このときの $x^2$ の係数と定数項を答えよ。",
            prompts: ["$k$", "二次の係数", "定数項"], answers: ["2", "4", "2"],
            solution: "$A+kB=(2+k)x^2+(-3+2k)x+(4-k)$。$x$ の係数について $-3+2k=1$ より $k=2$。したがって $A+2B=4x^2+x+2$ なので、$x^2$ の係数は $4$、定数項は $2$。"
          },
          {
            id: "m02-1-2", label: "(2)", points: 8, type: "choice",
            stem: "$6a^2b-9ab^2$ を因数分解した式として正しいものを選べ。",
            options: ["$3ab(2a-3b)$", "$3ab(2a+3b)$", "$3ab(3a-2b)$", "$ab(6a-3b)$"], answer: 0,
            solution: "2項の共通因数は $3ab$ である。$6a^2b\\div3ab=2a$、$-9ab^2\\div3ab=-3b$ より、$6a^2b-9ab^2=3ab(2a-3b)$。"
          },
          {
            id: "m02-1-3", label: "(3)", points: 5, type: "numeric",
            stem: "$x+y=5$、$xy=3$ のとき、$x^2+y^2$ の値を答えよ。",
            prompts: ["$x^2+y^2$"], answers: ["19"],
            solution: "$x^2+y^2=(x+y)^2-2xy=25-6=19$。"
          }
        ]
      },
      {
        number: "2",
        title: "実数・1次不等式",
        tag: "REAL / INEQUALITY",
        points: 25,
        questions: [
          {
            id: "m02-2-1", label: "(1)", points: 8, type: "numeric",
            stem: "$\\dfrac{1}{\\sqrt{5}-2}$ を有理化すると $a+\\sqrt{b}$（$a,b$ は自然数）の形になる。$a$ と $b$ を答えよ。",
            prompts: ["$a$", "$b$"], answers: ["2", "5"],
            solution: "分母分子に $\\sqrt5+2$ を掛けると、分母は $5-4=1$。よって $\\sqrt5+2=2+\\sqrt5$。"
          },
          {
            id: "m02-2-2", label: "(2)", points: 9, type: "choice",
            stem: "$|x-3|>2$ を満たす $x$ の範囲として正しいものを選べ。",
            options: ["$1\\lt x\\lt5$", "$x\\lt1$ または $x\\gt5$", "$x\\gt5$", "$x\\lt-1$ または $x\\gt5$"], answer: 1,
            solution: "$x-3>2$ または $x-3<-2$ より、$x>5$ または $x<1$。不等号の向きが $>$ なので範囲は外側になる。"
          },
          {
            id: "m02-2-3", label: "(3)", points: 8, type: "numeric",
            stem: "連立不等式 $\\begin{cases} 2x+1>x-3 \\\\ 5-x\\ge2x-4 \\end{cases}$ を満たす整数 $x$ は何個あるか。",
            prompts: ["個数"], answers: ["7"],
            solution: "1つ目から $x>-4$、2つ目から $9\\ge3x$ すなわち $x\\le3$。よって $-4<x\\le3$ で、整数は $-3$ から $3$ の7個。"
          }
        ]
      },
      {
        number: "3",
        title: "集合と論理",
        tag: "SETS / LOGIC",
        points: 20,
        questions: [
          {
            id: "m02-3-1", label: "(1)", points: 8, type: "numeric",
            stem: "$1$ から $100$ までの自然数のうち、$4$ の倍数でも $6$ の倍数でもないものは何個あるか。",
            prompts: ["個数"], answers: ["67"],
            solution: "4の倍数は25個、6の倍数は16個、共通（12の倍数）は8個。和集合は $25+16-8=33$ 個なので、$100-33=67$ 個。"
          },
          {
            id: "m02-3-2", label: "(2)", points: 8, type: "multi",
            stem: "$U=\\{1,2,\\ldots,8\\}$ を全体集合とし、$A=\\{1,2,3,4\\}$、$B=\\{3,4,5,6\\}$ とする。正しい記述をすべて選べ。",
            options: ["$\\overline{A}=\\{5,6,7,8\\}$", "$A\\cap B=\\{3,4\\}$", "$\\overline{A}\\cap\\overline{B}=\\{7,8\\}$", "$A\\cup B=U$"], answer: [0, 1, 2],
            solution: "$\\overline A=\\{5,6,7,8\\}$、$A\\cap B=\\{3,4\\}$。$A\\cup B=\\{1,\\ldots,6\\}$ なので $\\overline{A}\\cap\\overline{B}=\\overline{A\\cup B}=\\{7,8\\}$。$7,8$ が入らないため $A\\cup B=U$ は誤り。"
          },
          {
            id: "m02-3-3", label: "(3)", points: 4, type: "choice",
            stem: "命題「$x=2$ ならば $x^2=4$」と、その逆の真偽の組合せとして正しいものを選べ。",
            options: ["もとの命題も逆も真", "もとの命題は真、逆は偽", "もとの命題は偽、逆は真", "もとの命題も逆も偽"], answer: 1,
            solution: "もとの命題は真。逆「$x^2=4$ ならば $x=2$」は $x=-2$ が反例となり偽。"
          }
        ]
      },
      {
        number: "4",
        title: "場合の数",
        tag: "COUNTING",
        points: 30,
        questions: [
          {
            id: "m02-4-1", label: "(1)", points: 10, type: "numeric",
            stem: "大人2人と子ども3人の計5人が一列に並ぶ。両端が大人になる並び方は何通りあるか。",
            prompts: ["通り"], answers: ["12"],
            solution: "両端の大人の並び方が $2!=2$ 通り、間の子ども3人の並び方が $3!=6$ 通り。積の法則で $2\\cdot6=12$ 通り。"
          },
          {
            id: "m02-4-2", label: "(2)", points: 10, type: "numeric",
            stem: "男子6人、女子4人の中から4人を選ぶ。女子がちょうど2人含まれる選び方は何通りあるか。",
            prompts: ["通り"], answers: ["90"],
            solution: "女子の選び方 $\\binom42=6$ 通り、男子の選び方 $\\binom62=15$ 通り。積の法則で $6\\cdot15=90$ 通り。"
          },
          {
            id: "m02-4-3", label: "(3)", points: 10, type: "numeric",
            stem: "$180$ の正の約数の総和を求めよ。",
            prompts: ["総和"], answers: ["546"],
            solution: "$180=2^2\\cdot3^2\\cdot5$ である。正の約数の総和は $(1+2+4)(1+3+9)(1+5)=7\\cdot13\\cdot6=546$。"
          }
        ]
      }
    ]
  },
  "mini_03": {
    id: "mini_03",
    title: "基礎ミックス 第3回",
    seriesTotal: 6,
    seriesNumber: 3,
    units: ["式の展開・因数分解", "実数・1次不等式", "集合と論理", "場合の数"],
    durationMinutes: 30,
    totalPoints: 100,
    note: "4単元を組み合わせたオリジナル問題です。",
    groups: [
      {
        number: "1",
        title: "式の展開・因数分解",
        tag: "ALGEBRA",
        points: 25,
        questions: [
          {
            id: "m03-1-1", label: "(1)", points: 12, type: "numeric",
            stem: "$(2x+y-1)(x-3y+2)$ を展開したとき、$xy$ の係数と定数項をそれぞれ答えよ。",
            prompts: ["$xy$ の係数", "定数項"], answers: ["-5", "-2"],
            solution: "各項を掛け合わせると $2x^2-6xy+4x+xy-3y^2+2y-x+3y-2$。整理すると $2x^2-5xy+3x-3y^2+5y-2$。$xy$ の係数は $-5$、定数項は $-2$。"
          },
          {
            id: "m03-1-2", label: "(2)", points: 8, type: "choice",
            stem: "$(2a-b+3)(2a-b-3)$ を $t=2a-b$ と置き換えて展開した結果として正しいものを選べ。",
            options: ["$4a^2+4ab+b^2-9$", "$4a^2-4ab+b^2-9$", "$4a^2-4ab+b^2+9$", "$4a^2-b^2-9$"], answer: 1,
            solution: "$t=2a-b$ とおくと $(t+3)(t-3)=t^2-9$。$t^2=(2a-b)^2=4a^2-4ab+b^2$ なので、$4a^2-4ab+b^2-9$。"
          },
          {
            id: "m03-1-3", label: "(3)", points: 5, type: "numeric",
            stem: "$2x^2+xy-6y^2$ を $(2x+ay)(x+by)$ の形に因数分解するとき、$a$ と $b$ の値を求めよ。ただし $a$、$b$ は整数とする。",
            prompts: ["$a$", "$b$"], answers: ["-3", "2"],
            solution: "たすき掛けで $2x^2+xy-6y^2=(2x-3y)(x+2y)$ となる。よって $a=-3$、$b=2$。"
          }
        ]
      },
      {
        number: "2",
        title: "実数・1次不等式",
        tag: "REAL / INEQUALITY",
        points: 25,
        questions: [
          {
            id: "m03-2-1", label: "(1)", points: 8, type: "numeric",
            stem: "$\\sqrt5(\\sqrt{20}+\\sqrt{45})-\\dfrac{10}{\\sqrt5}=a+b\\sqrt5$ と表せるとき、$a$ と $b$ を答えよ。",
            prompts: ["$a$", "$b$"], answers: ["25", "-2"],
            solution: "$\\sqrt5\\cdot\\sqrt{20}=10$、$\\sqrt5\\cdot\\sqrt{45}=15$ なので、積の部分は $25$。$\\dfrac{10}{\\sqrt5}=2\\sqrt5$ なので、全体は $25-2\\sqrt5$。"
          },
          {
            id: "m03-2-2", label: "(2)", points: 9, type: "choice",
            stem: "連立不等式 $\\begin{cases} 3x-1\\ge x+5 \\\\ 2x-7\\lt x+1 \\end{cases}$ を満たす $x$ の範囲として正しいものを選べ。",
            options: ["$3\\lt x\\le8$", "$x\\le3$ または $x\\ge8$", "$3\\le x\\lt8$", "$-8\\lt x\\le-3$"], answer: 2,
            solution: "1つ目から $2x\\ge6$ より $x\\ge3$。2つ目から $x\\lt8$。共通範囲は $3\\le x\\lt8$。"
          },
          {
            id: "m03-2-3", label: "(3)", points: 8, type: "numeric",
            stem: "$|3x-2|=x+4$ を満たす $x$ の値のうち、大きい方を答えよ。",
            prompts: ["大きい方の値"], answers: ["3"],
            solution: "$3x-2\\ge0$ のとき $3x-2=x+4$ より $x=3$。$3x-2\\lt0$ のとき $-(3x-2)=x+4$ より $x=-\\dfrac12$。大きい方は $3$。"
          }
        ]
      },
      {
        number: "3",
        title: "集合と論理",
        tag: "SETS / LOGIC",
        points: 20,
        questions: [
          {
            id: "m03-3-1", label: "(1)", points: 8, type: "choice",
            stem: "命題「$x$が4の倍数ならば$x$は8の倍数である」の真偽と、偽の場合の反例の組合せとして正しいものを選べ。",
            options: ["真", "偽、反例 $x=8$", "偽、反例 $x=16$", "偽、反例 $x=4$"], answer: 3,
            solution: "$x=4$ は4の倍数だが8の倍数ではないので、この命題は偽で反例は $x=4$。$x=8,16$ はどちらも8の倍数なので反例にならない。"
          },
          {
            id: "m03-3-2", label: "(2)", points: 8, type: "multi",
            stem: "命題「$n$が正の整数のとき、$n^2+n+1$ は素数である」は偽である。反例となる $n$ の値をすべて選べ。",
            options: ["$n=2$", "$n=4$", "$n=5$", "$n=7$"], answer: [1, 3],
            solution: "$n=2$ のとき $7$（素数）、$n=4$ のとき $21=3\\times7$（合成数）、$n=5$ のとき $31$（素数）、$n=7$ のとき $57=3\\times19$（合成数）。反例は $n=4,7$。"
          },
          {
            id: "m03-3-3", label: "(3)", points: 4, type: "choice",
            stem: "実数 $x$ に関する条件「$x^2=9$」は、条件「$x=3$」であるための何条件か。",
            options: ["必要条件", "十分条件", "必要十分条件", "必要条件でも十分条件でもない"], answer: 0,
            solution: "$x=3$ ならば $x^2=9$ は成り立つが、$x^2=9$ でも $x=-3$ の場合があるので逆は成り立たない。よって「$x^2=9$」は「$x=3$」であるための必要条件。"
          }
        ]
      },
      {
        number: "4",
        title: "場合の数",
        tag: "COUNTING",
        points: 30,
        questions: [
          {
            id: "m03-4-1", label: "(1)", points: 10, type: "numeric",
            stem: "大人3人と子ども2人の計5人が円卓に着席する。大人3人が隣り合って座る並び方は何通りあるか。",
            prompts: ["通り"], answers: ["12"],
            solution: "大人3人をひとかたまりとみると、円卓には3つの単位が並ぶので $(3-1)!=2$ 通り。かたまりの中の並び方は $3!=6$ 通り。積の法則で $2\\times6=12$ 通り。"
          },
          {
            id: "m03-4-2", label: "(2)", points: 10, type: "numeric",
            stem: "5人の生徒をA、B、Cの3つの部屋に入れる。空き部屋があってもよいとき、入れ方は何通りあるか。",
            prompts: ["通り"], answers: ["243"],
            solution: "1人につき部屋の選び方が3通りで、5人が独立に選ぶので $3^5=243$ 通り。"
          },
          {
            id: "m03-4-3", label: "(3)", points: 10, type: "numeric",
            stem: "8人を4人ずつ2つの組に分ける。組の区別がないとき、分け方は何通りあるか。",
            prompts: ["通り"], answers: ["35"],
            solution: "8人から4人を選ぶ $\\binom84=70$ 通りのうち、組の区別をなくすと同じ分け方を2回ずつ数えているので $70\\div2=35$ 通り。"
          }
        ]
      }
    ]
  }
};
