window.MINI_EXAMS = {
  "mini_01": {
    id: "mini_01",
    title: "基礎ミックス 第1回",
    seriesTotal: null,
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
    seriesTotal: null,
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
    seriesTotal: null,
    seriesNumber: 3,
    units: ["式の展開・因数分解", "実数・1次不等式", "2次関数", "集合と論理", "場合の数"],
    durationMinutes: 30,
    totalPoints: 100,
    note: "高校1年生の基礎事項を5単元から確認する、30分のオリジナル問題です。",
    groups: [
      {
        number: "1",
        title: "式の展開・因数分解",
        tag: "ALGEBRA",
        points: 12,
        questions: [
          {
            id: "m03-1-2", label: "(1)", points: 6, type: "choice",
            stem: "$x^4-13x^2+36$ を因数分解した式として正しいものを選べ。",
            options: ["$(x-2)(x+2)(x-3)(x+3)$", "$(x-2)(x+2)(x^2+9)$", "$(x-4)(x+4)(x^2-9)$", "$(x^2-6)^2$"], answer: 0,
            solution: "$t=x^2$ とおくと、$t^2-13t+36=(t-4)(t-9)$。したがって、$(x^2-4)(x^2-9)=(x-2)(x+2)(x-3)(x+3)$。"
          },
          {
            id: "m03-1-3", label: "(2)", points: 6, type: "choice",
            stem: "$6a^2+7ab-3b^2$ を因数分解した式として正しいものを選べ。",
            options: ["$(3a-b)(2a+3b)$", "$(3a+b)(2a-3b)$", "$(3a-3b)(2a+b)$", "$(2a-b)(3a+3b)$"], answer: 0,
            solution: "$(3a-b)(2a+3b)$ とすると、交差項は $3a\cdot3b+(-b)\cdot2a=9ab-2ab=7ab$。したがって、$6a^2+7ab-3b^2=(3a-b)(2a+3b)$。"
          }
        ]
      },
      {
        number: "2",
        title: "実数・1次不等式",
        tag: "REAL / INEQUALITY",
        points: 20,
        questions: [
          {
            id: "m03-2-1", label: "(1)", points: 8, type: "numeric",
            stem: "$\\sqrt{13+4\\sqrt3}$ を $a+b\\sqrt3$ の形に表すとき、正の整数 $a,b$ の値を答えよ。",
            prompts: ["$a$", "$b$"], answers: ["1", "2"],
            solution: "$(a+b\\sqrt3)^2=a^2+3b^2+2ab\\sqrt3$ とおく。$2ab=4$ より $ab=2$。正の整数の組を調べると $a=1,b=2$ であり、$1^2+3\\cdot2^2=13$。したがって、$\\sqrt{13+4\\sqrt3}=1+2\\sqrt3$。"
          },
          {
            id: "m03-2-2", label: "(2)", points: 12, type: "numeric",
            stem: "$|x-1|+|2x-3|\\leq4$ を満たす整数 $x$ は何個あるか。",
            prompts: ["個"], answers: ["3"],
            solution: "絶対値の中身が0になる $x=1,\\dfrac32$ で場合分けする。$x<1$ では $4-3x\\leq4$ より $0\\leq x<1$。$1\\leq x<\\dfrac32$ では $2-x\\leq4$ なのでこの範囲のすべて。$x\\geq\\dfrac32$ では $3x-4\\leq4$ より $\\dfrac32\\leq x\\leq\\dfrac83$。合わせて $0\\leq x\\leq\\dfrac83$ なので、整数は $0,1,2$ の3個。"
          }
        ]
      },
      {
        number: "3",
        title: "2次関数",
        tag: "QUADRATIC FUNCTION",
        points: 28,
        questions: [
          {
            id: "m03-3-1", label: "(1)", points: 10, type: "numeric",
            stem: "2次関数 $y=x^2-4x+1$ のグラフの軸の方程式と最小値を答えよ。",
            prompts: ["軸のx座標", "最小値"], answers: ["2", "-3"],
            solution: "$y=x^2-4x+1=(x-2)^2-3$。したがって軸は $x=2$、頂点の $y$ 座標が最小値なので最小値は $-3$。"
          },
          {
            id: "m03-3-2", label: "(2)", points: 10, type: "choice",
            stem: "2次関数 $y=-x^2+4x+1$ について、正しいものを選べ。",
            options: ["軸は $x=2$、最大値は $5$", "軸は $x=-2$、最大値は $5$", "軸は $x=2$、最小値は $5$", "軸は $x=-2$、最小値は $5$"], answer: 0,
            solution: "$y=-(x-2)^2+5$ なので、軸は $x=2$、頂点の $y$ 座標である最大値は $5$。"
          },
          {
            id: "m03-3-3", label: "(3)", points: 8, type: "numeric",
            stem: "2次関数 $y=x^2-4x+3$ のグラフと $x$ 軸との共有点の $x$ 座標を、小さい順に答えよ。",
            prompts: ["小さい方の $x$ 座標", "大きい方の $x$ 座標"], answers: ["1", "3"],
            solution: "$x$ 軸上では $y=0$ なので、$x^2-4x+3=0$。$(x-1)(x-3)=0$ より、$x$ 座標は $1,3$。"
          }
        ]
      },
      {
        number: "4",
        title: "集合と論理",
        tag: "SETS / LOGIC",
        points: 20,
        questions: [
          {
            id: "m03-4-1", label: "(1)", points: 8, type: "choice",
            stem: "$n$ を整数とする。命題「$n$ が偶数ならば、$n^2$ は偶数である」の対偶として正しいものを選べ。",
            options: ["$n^2$ が偶数ならば、$n$ は偶数である", "$n$ が偶数でないならば、$n^2$ は偶数でない", "$n^2$ が偶数でないならば、$n$ は偶数でない", "$n$ が偶数でないならば、$n^2$ は偶数である"], answer: 2,
            solution: "「pならばq」の対偶は「qでないならばpでない」。ここでは p が「$n$ は偶数」、q が「$n^2$ は偶数」なので、対偶は「$n^2$ が偶数でないならば、$n$ は偶数でない」。"
          },
          {
            id: "m03-4-2", label: "(2)", points: 12, type: "choice",
            stem: "$n$ を整数とする。条件「$n$ が6の倍数」は、条件「$n$ が2の倍数」であるための何条件か。",
            options: ["必要条件", "十分条件", "必要十分条件", "必要条件でも十分条件でもない"], answer: 1,
            solution: "$n$ が6の倍数ならば必ず2の倍数なので十分条件。$n=2$ は2の倍数だが6の倍数ではないので、必要条件ではない。"
          }
        ]
      },
      {
        number: "5",
        title: "場合の数",
        tag: "COUNTING",
        points: 20,
        questions: [
          {
            id: "m03-5-1", label: "(1)", points: 7, type: "numeric",
            stem: "異なる5人A、B、C、D、Eを一列に並べる。AとBは隣り合い、CとDは隣り合わない並べ方は何通りあるか。",
            prompts: ["通り"], answers: ["24"],
            solution: "A、Bをひとかたまりとみると、並べ方は $4!\\cdot2=48$ 通り。このうちC、Dも隣り合う並べ方は、A、BのかたまりとC、Dのかたまり、Eの3つを並べるので $3!\\cdot2\\cdot2=24$ 通り。したがって、求める並べ方は $48-24=24$ 通り。"
          },
          {
            id: "m03-5-2", label: "(2)", points: 7, type: "numeric",
            stem: "男子3人、女子4人の計7人から3人を選ぶ。男子、女子のどちらも少なくとも1人は含む選び方は何通りあるか。",
            prompts: ["通り"], answers: ["30"],
            solution: "7人から3人を選ぶ全体は $\\binom73=35$ 通り。男子だけを選ぶ方法は $\\binom33=1$ 通り、女子だけを選ぶ方法は $\\binom43=4$ 通り。したがって、$35-1-4=30$ 通り。"
          },
          {
            id: "m03-5-3", label: "(3)", points: 6, type: "numeric",
            stem: "6人A、B、C、D、E、Fから、委員長・副委員長・書記をそれぞれ1人ずつ選ぶ。AとBが同時に選ばれないとき、選び方は何通りあるか。",
            prompts: ["通り"], answers: ["96"],
            solution: "役割を区別して3人を選ぶ全体は $6\\cdot5\\cdot4=120$ 通り。AとBがともに選ばれる選び方は、A、Bに役割を割り当てる方法が $3\\cdot2$ 通り、残りの役割をC〜Fから選ぶ方法が $4$ 通りなので、$3\\cdot2\\cdot4=24$ 通り。したがって、$120-24=96$ 通り。"
          }
        ]
      }
    ]
  },
  "mini_04": {
    id: "mini_04",
    title: "基礎ミックス 第4回",
    seriesTotal: null,
    seriesNumber: 4,
    units: ["数と式・1次不等式", "2次関数", "集合と論理", "場合の数", "確率"],
    durationMinutes: 30,
    totalPoints: 100,
    note: "高校1年生の基礎事項を5分野から確認する、30分のオリジナル問題です。",
    groups: [
      {
        number: "1",
        title: "数と式・1次不等式",
        tag: "ALGEBRA",
        points: 20,
        questions: [
          {
            id: "m04-1-1", label: "(1)", points: 10, type: "numeric",
            stem: "$x\\ne0$、$x+\\dfrac{1}{x}=3$ のとき、$x^2+\\dfrac{1}{x^2}$ の値を答えよ。",
            prompts: ["値"], answers: ["7"],
            solution: "$\\left(x+\\dfrac1x\\right)^2=x^2+2+\\dfrac1{x^2}$ より、$9=x^2+2+\\dfrac1{x^2}$。したがって、$x^2+\\dfrac1{x^2}=7$。"
          },
          {
            id: "m04-1-2-v2", label: "(2)", points: 10, type: "numeric",
            stem: "文化祭でクッキーを販売する。1個の販売価格は $700$ 円、費用は会場費 $5400$ 円と、クッキー1個につき $250$ 円である。利益を $4500$ 円以上にするには、クッキーを最低何個販売すればよいか。",
            prompts: ["個数"], answers: ["22"],
            solution: "販売個数を $x$ 個とすると、利益は $700x-(5400+250x)=450x-5400$ 円。$450x-5400\\geq4500$ より $450x\\geq9900$、すなわち $x\\geq22$。したがって最低 $22$ 個。"
          }
        ]
      },
      {
        number: "2",
        title: "2次関数",
        tag: "QUADRATIC FUNCTION",
        points: 20,
        questions: [
          {
            id: "m04-2-1-v2", label: "(1)", points: 7, type: "choice",
            stem: "放物線 $y=-x^2+4x+1$ を、$x$ 軸の正の向きに $2$、$y$ 軸の負の向きに $3$ だけ平行移動した。移動後の放物線の式として正しいものを選べ。",
            options: ["$y=-(x-4)^2+2$", "$y=-(x-2)^2+2$", "$y=-(x-4)^2+8$", "$y=-(x+4)^2+2$"], answer: 0,
            solution: "もとの式は $y=-(x-2)^2+5$ であり、頂点は $(2,5)$。右に $2$、下に $3$ 移動すると頂点は $(4,2)$ になる。したがって $y=-(x-4)^2+2$。"
          },
          {
            id: "m04-2-2", label: "(2)", points: 7, type: "numeric",
            stem: "$-1\\leq x\\leq4$ における $y=-x^2+4x+5$ の最大値と最小値を答えよ。",
            prompts: ["最大値", "最小値"], answers: ["9", "0"],
            solution: "$y=-(x-2)^2+9$。頂点 $x=2$ は定義域内なので最大値は $9$。端点では $y(-1)=0$、$y(4)=5$ だから、最小値は $0$。"
          },
          {
            id: "m04-2-3", label: "(3)", points: 6, type: "numeric",
            stem: "放物線 $y=x^2-2x-3$ と直線 $y=x+1$ の共有点の $x$ 座標を、小さい順に答えよ。",
            prompts: ["小さい方", "大きい方"], answers: ["-1", "4"],
            solution: "$x^2-2x-3=x+1$ より、$x^2-3x-4=0$。$(x+1)(x-4)=0$ なので、$x=-1,4$。"
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
            id: "m04-3-1", label: "(1)", points: 10, type: "numeric",
            stem: "$U=\\{-5,-4,\\ldots,4,5\\}$ を全体集合とする。$A=\\{x\\in U\\mid -2\\leq x\\leq3\\}$、$B=\\{x\\in U\\mid x\\text{ は奇数}\\}$ のとき、$n(A\\cap\\overline{B})$ を答えよ。",
            prompts: ["個数"], answers: ["3"],
            solution: "$A=\\{-2,-1,0,1,2,3\\}$。$\\overline B$ は偶数の集合なので、$A\\cap\\overline B=\\{-2,0,2\\}$。よって個数は $3$。"
          },
          {
            id: "m04-3-2-v2", label: "(2)", points: 10, type: "choice",
            stem: "$x$ を実数とする。条件 $p$：$x>2$、条件 $q$：$x^2>4$ とする。$p$ は $q$ であるための何条件か。",
            options: ["必要条件", "十分条件", "必要十分条件", "必要条件でも十分条件でもない"], answer: 1,
            solution: "$x>2$ ならば必ず $x^2>4$ なので、$p$ は十分条件である。ただし $x=-3$ では $x^2>4$ だが $x>2$ ではないため、必要条件ではない。"
          }
        ]
      },
      {
        number: "4",
        title: "場合の数",
        tag: "COUNTING",
        points: 20,
        questions: [
          {
            id: "m04-4-1", label: "(1)", points: 10, type: "numeric",
            stem: "数字 $0,1,2,3,4,5$ から異なる4個を使って4桁の5の倍数を作る。できる数は何個あるか。",
            prompts: ["個数"], answers: ["108"],
            solution: "一の位が $0$ のとき、千の位は $5$ 通り、残りは $4\\cdot3$ 通りで $60$ 通り。一の位が $5$ のとき、千の位は $0$ 以外の $4$ 通り、残りは $4\\cdot3$ 通りで $48$ 通り。合計 $60+48=108$ 通り。"
          },
          {
            id: "m04-4-3", label: "(2)", points: 10, type: "numeric",
            stem: "男子5人、女子4人の中から4人を選ぶ。女子が少なくとも2人含まれる選び方は何通りあるか。",
            prompts: ["通り"], answers: ["81"],
            solution: "女子が2人のときは $\\binom42\\binom52=6\\cdot10=60$ 通り、3人のときは $\\binom43\\binom51=4\\cdot5=20$ 通り、4人のときは $\\binom44=1$ 通り。合計 $60+20+1=81$ 通り。"
          }
        ]
      },
      {
        number: "5",
        title: "確率",
        tag: "PROBABILITY",
        points: 20,
        questions: [
          {
            id: "m04-5-1", label: "(1)", points: 7, type: "numeric",
            stem: "赤玉3個、青玉2個が入った袋から、玉を同時に2個取り出す。2個の色が異なる確率を既約分数で答えよ。",
            prompts: ["分子", "分母"], answers: ["3", "5"],
            solution: "全体の取り出し方は $\\binom52=10$ 通り。色が異なる取り出し方は $3\\cdot2=6$ 通りなので、確率は $\\dfrac6{10}=\\dfrac35$。"
          },
          {
            id: "m04-5-2", label: "(2)", points: 7, type: "numeric",
            stem: "区別できる2個のサイコロを同時に投げる。1個目の出た目が偶数であったとき、2個の目の和が8である条件付き確率を既約分数で答えよ。",
            prompts: ["分子", "分母"], answers: ["1", "6"],
            solution: "1個目が偶数のとき、起こりうる場合は $3\\cdot6=18$ 通り。和が8となるのは $(2,6),(4,4),(6,2)$ の3通りなので、確率は $\\dfrac3{18}=\\dfrac16$。"
          },
          {
            id: "m04-5-3", label: "(3)", points: 6, type: "numeric",
            stem: "1枚の硬貨を4回投げるとき、表がちょうど2回出る確率を既約分数で答えよ。",
            prompts: ["分子", "分母"], answers: ["3", "8"],
            solution: "表がちょうど2回出る並び方は $\\binom42=6$ 通り、全体は $2^4=16$ 通り。したがって確率は $\\dfrac6{16}=\\dfrac38$。"
          }
        ]
      }
    ]
  },
  "mini_05": {
    id: "mini_05",
    title: "基礎ミックス 第5回",
    seriesTotal: null,
    seriesNumber: 5,
    units: ["数と式・1次不等式", "2次関数", "集合と論理", "場合の数", "確率"],
    durationMinutes: 30,
    totalPoints: 100,
    note: "高校1年生の基礎事項を5分野から確認する、30分のオリジナル問題です。",
    groups: [
      {
        number: "1",
        title: "数と式・1次不等式",
        tag: "ALGEBRA",
        points: 20,
        questions: [
          {
            id: "m05-1-1", label: "(1)", points: 10, type: "numeric",
            stem: "恒等式 $(x+2)(2x+a)-(x-1)(x+3)=x^2+bx+9$ が成り立つとき、$a,b$ の値を答えよ。",
            prompts: ["$a$", "$b$"], answers: ["3", "5"],
            solution: "<strong>考え方：</strong>恒等式とは、どの $x$ を代入しても成り立つ式です。そのため、左辺と右辺の $x^2$ の係数、$x$ の係数、定数項がそれぞれ等しくなります。<br><strong>手順：</strong>まず $(x+2)(2x+a)=2x^2+(a+4)x+2a$、$(x-1)(x+3)=x^2+2x-3$ と展開します。2つ目の式全体を引くので、左辺は $x^2+(a+2)x+2a+3$ です。定数項を比べると $2a+3=9$ だから $a=3$。次に $x$ の係数を比べると $b=a+2=5$ です。<br><strong>注意：</strong>前にマイナスがある $(x-1)(x+3)$ は、展開した3項すべての符号を変えて引きます。<br><strong>答え：</strong>$a=3,\\ b=5$。"
          },
          {
            id: "m05-1-2", label: "(2)", points: 10, type: "numeric",
            stem: "不等式 $\\dfrac{2x-1}{3}\\leq x+1\\lt\\dfrac{x+9}{2}$ を満たす整数 $x$ は何個あるか。",
            prompts: ["個数"], answers: ["11"],
            solution: "<strong>考え方：</strong>連続した不等式は、中央の $x+1$ と左側、中央の $x+1$ と右側に分けて解き、最後に両方を満たす範囲を重ねます。<br><strong>手順：</strong>$\\dfrac{2x-1}{3}\\leq x+1$ の両辺を正の数3倍すると $2x-1\\leq3x+3$ なので $x\\geq-4$。また、$x+1\\lt\\dfrac{x+9}{2}$ の両辺を正の数2倍すると $2x+2\\lt x+9$ なので $x\\lt7$。したがって範囲は $-4\\leq x\\lt7$ です。整数を並べると $-4,-3,-2,-1,0,1,2,3,4,5,6$ の11個です。<br><strong>注意：</strong>$-4$ は「$\\leq$」なので含み、$7$ は「$\\lt$」なので含みません。今回は正の数を掛けているため、不等号の向きは変わりません。<br><strong>答え：</strong>$11$ 個。"
          }
        ]
      },
      {
        number: "2",
        title: "2次関数",
        tag: "QUADRATIC FUNCTION",
        points: 20,
        questions: [
          {
            id: "m05-2-1", label: "(1)", points: 7, type: "numeric",
            stem: "頂点が $(1,-4)$ で、点 $(3,4)$ を通る放物線の $y$ 切片を答えよ。",
            prompts: ["$y$切片"], answers: ["-2"],
            solution: "<strong>考え方：</strong>頂点が $(p,q)$ の放物線は $y=a(x-p)^2+q$ と表せます。頂点が分かっているので、まずこの形を使います。<br><strong>手順：</strong>頂点が $(1,-4)$ だから $y=a(x-1)^2-4$。この放物線は点 $(3,4)$ を通るので、$x=3,\\ y=4$ を代入します。$4=a(3-1)^2-4=4a-4$ より、$8=4a$、したがって $a=2$ です。式は $y=2(x-1)^2-4$。$y$ 切片は $y$ 軸と交わる点の $y$ 座標なので、$x=0$ を代入して $y=2-4=-2$ と求めます。<br><strong>注意：</strong>$y$ 切片を求めるときに代入するのは $y=0$ ではなく $x=0$ です。<br><strong>答え：</strong>$y$ 切片は $-2$。"
          },
          {
            id: "m05-2-2", label: "(2)", points: 7, type: "choice",
            stem: "2次不等式 $x^2+x-6\\lt0$ の解として正しいものを選べ。",
            options: ["$x\\lt-3,\\ 2\\lt x$", "$-3\\lt x\\lt2$", "$-2\\lt x\\lt3$", "$-3\\leq x\\leq2$"], answer: 1,
            solution: "<strong>考え方：</strong>$x^2+x-6\\lt0$ は、放物線 $y=x^2+x-6$ が $x$ 軸より下にある $x$ の範囲を求める問題です。まず $x$ 軸と交わる位置を求めます。<br><strong>手順：</strong>$x^2+x-6=(x+3)(x-2)$ なので、$x$ 軸との交点の $x$ 座標は $-3$ と $2$ です。$x^2$ の係数が正なので放物線は上に開き、グラフが $x$ 軸より下になるのは2つの交点の間です。したがって $-3\\lt x\\lt2$ となり、選択肢Bです。<br><strong>注意：</strong>不等号が「$\\lt0$」なので、値が0になる $x=-3,2$ は含みません。「$\\leq0$」なら両端を含みます。<br><strong>答え：</strong>$-3\\lt x\\lt2$（B）。"
          },
          {
            id: "m05-2-3", label: "(3)", points: 6, type: "numeric",
            stem: "直線の壁に接する長方形の花壇を作り、壁以外の3辺を長さ24 mの柵で囲む。壁に垂直な辺の長さと、花壇の面積の最大値を答えよ。",
            prompts: ["垂直な辺（m）", "最大面積（$\\mathrm{m}^2$）"], answers: ["6", "72"],
            solution: "<strong>考え方：</strong>使う柵は壁以外の3辺です。壁に垂直な2辺を同じ長さ $x$ mとおき、残りの1辺と面積を $x$ で表します。<br><strong>手順：</strong>壁に平行な辺を $y$ mとすると、柵の長さから $2x+y=24$、つまり $y=24-2x$ です。面積は $S=xy$ だから、$S=x(24-2x)=-2x^2+24x$。平方完成すると $S=-2(x-6)^2+72$ です。$(x-6)^2$ は0以上なので、$-2(x-6)^2$ が最も大きくなるのは $x=6$ のときで、そのとき $S=72$ です。<br><strong>注意：</strong>壁に接する辺には柵を使わないため、式は $2x+2y=24$ ではなく $2x+y=24$ です。$x=6$ のとき残りの辺は12 mとなり、長さも正です。<br><strong>答え：</strong>壁に垂直な辺は $6$ m、最大面積は $72\\,\\mathrm{m}^2$。"
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
            id: "m05-3-1", label: "(1)", points: 10, type: "numeric",
            stem: "$U=\\{1,2,\\ldots,12\\}$ を全体集合とする。$A$ を2の倍数の集合、$B$ を12の正の約数の集合とするとき、$n(\\overline{A\\cup B})$ を答えよ。",
            prompts: ["個数"], answers: ["4"],
            solution: "<strong>考え方：</strong>$A\\cup B$ は「$A$ または $B$ に入る要素」、上の横線はその補集合、つまり全体集合 $U$ の中で $A\\cup B$ に入らない要素を表します。<br><strong>手順：</strong>$U$ の中の2の倍数は $A=\\{2,4,6,8,10,12\\}$。12の正の約数は $B=\\{1,2,3,4,6,12\\}$ です。どちらか一方でも入る要素を重複なくまとめると、$A\\cup B=\\{1,2,3,4,6,8,10,12\\}$。これらを $U=\\{1,2,\\ldots,12\\}$ から除くと、$\\overline{A\\cup B}=\\{5,7,9,11\\}$ です。<br><strong>注意：</strong>6など両方の集合に入る要素も、和集合には1回だけ書きます。また、横線は $A$ だけでなく $A\\cup B$ 全体にかかっています。<br><strong>答え：</strong>$n(\\overline{A\\cup B})=4$。"
          },
          {
            id: "m05-3-2", label: "(2)", points: 10, type: "choice",
            stem: "整数 $n$ についての命題「$n$ が6の倍数ならば、$n$ は3の倍数である」の対偶を選べ。",
            options: ["$n$ が6の倍数でないならば、$n$ は3の倍数でない", "$n$ が3の倍数ならば、$n$ は6の倍数である", "$n$ が3の倍数でないならば、$n$ は6の倍数でない", "$n$ が6の倍数でないならば、$n$ は3の倍数である"], answer: 2,
            solution: "<strong>考え方：</strong>命題「$p$ ならば $q$」の対偶は、仮定と結論を入れ替え、両方を否定した「$q$ でないならば $p$ でない」です。<br><strong>手順：</strong>この命題では、$p$ が「$n$ は6の倍数」、$q$ が「$n$ は3の倍数」です。まず結論 $q$ を否定すると「$n$ は3の倍数でない」。次に仮定 $p$ を否定すると「$n$ は6の倍数でない」。この順に並べて、「$n$ が3の倍数でないならば、$n$ は6の倍数でない」となります。<br><strong>注意：</strong>「6の倍数でないなら3の倍数でない」は、両方を否定しただけで順番を入れ替えていないため、対偶ではなく裏です。<br><strong>答え：</strong>「$n$ が3の倍数でないならば、$n$ は6の倍数でない」（C）。"
          }
        ]
      },
      {
        number: "4",
        title: "場合の数",
        tag: "COUNTING",
        points: 20,
        questions: [
          {
            id: "m05-4-1", label: "(1)", points: 10, type: "numeric",
            stem: "異なる6人A、B、C、D、E、Fが円形のテーブルに座る。AとBが隣り合う座り方は何通りあるか。ただし、回転して一致する座り方は同じものとする。",
            prompts: ["通り"], answers: ["48"],
            solution: "<strong>考え方：</strong>AとBが必ず隣り合うので、2人を「ABという1つのまとまり」と考えます。そのあと、まとまりの中の順番も数えます。<br><strong>手順：</strong>ABのまとまり、C、D、E、Fの合計5個を円形に並べます。円順列では、回転しただけの並びを同じものとするため、5個の並べ方は $(5-1)!=4!=24$ 通りです。まとまりの中はA-BとB-Aの2通りがあるので、$24\\cdot2=48$ 通りです。<br><strong>注意：</strong>5個を一直線に並べる $5!$ ではありません。円形では、全体を回転した5通りが同じ配置になるため $(5-1)!$ を使います。<br><strong>答え：</strong>$48$ 通り。"
          },
          {
            id: "m05-4-2", label: "(2)", points: 10, type: "numeric",
            stem: "数字 $1,2,3,4,5,6$ から異なる3個を使って3桁の整数を作る。数字1または2を少なくとも一方含む整数は何個あるか。",
            prompts: ["個数"], answers: ["96"],
            solution: "<strong>考え方：</strong>「1または2を少なくとも一方含む」ものを直接場合分けすると重複しやすいため、全体から「1も2も含まない」ものを引く余事象の考え方を使います。<br><strong>手順：</strong>まず、6個の異なる数字から3個を選んで順番に並べる全体は ${}_6P_3=6\\cdot5\\cdot4=120$ 個です。1も2も含まない場合は、使える数字が $3,4,5,6$ の4個だけなので、${}_4P_3=4\\cdot3\\cdot2=24$ 個です。したがって、少なくとも一方を含む整数は $120-24=96$ 個です。<br><strong>注意：</strong>3桁の整数では数字の順番が違えば別の数なので、組合せではなく順列を使います。今回は0がないため、先頭の数字について追加の場合分けは不要です。<br><strong>答え：</strong>$96$ 個。"
          }
        ]
      },
      {
        number: "5",
        title: "確率",
        tag: "PROBABILITY",
        points: 20,
        questions: [
          {
            id: "m05-5-1", label: "(1)", points: 7, type: "numeric",
            stem: "1から10までの数字が1つずつ書かれた10枚のカードから1枚を選ぶ。書かれた数が2の倍数または3の倍数である確率を既約分数で答えよ。",
            prompts: ["分子", "分母"], answers: ["7", "10"],
            solution: "<strong>考え方：</strong>「2の倍数または3の倍数」では、両方に当てはまる数を2回数えないようにします。2つの集まりの個数を足し、重なりを1回引きます。<br><strong>手順：</strong>2の倍数は $\\{2,4,6,8,10\\}$ の5枚、3の倍数は $\\{3,6,9\\}$ の3枚です。6は両方に入っていて、$5+3$ では2回数えられています。そこで1回引き、該当するカードは $5+3-1=7$ 枚です。全10枚から同じ確からしさで1枚を選ぶので、確率は $\\dfrac7{10}$ です。<br><strong>注意：</strong>「または」は、どちらか一方だけでなく、両方に当てはまる場合も含みます。<br><strong>答え：</strong>$\\dfrac7{10}$。"
          },
          {
            id: "m05-5-2", label: "(2)", points: 7, type: "numeric",
            stem: "赤玉2個、青玉3個が入った袋から玉を1個取り出し、色を確認して袋に戻す。この試行を2回行うとき、赤玉がちょうど1回出る確率を既約分数で答えよ。",
            prompts: ["分子", "分母"], answers: ["12", "25"],
            solution: "<strong>考え方：</strong>赤がちょうど1回出る順番は「赤→青」と「青→赤」の2通りです。玉を毎回袋に戻すので、2回目も赤の確率は $\\dfrac25$、青の確率は $\\dfrac35$ のままです。<br><strong>手順：</strong>赤→青となる確率は $\\dfrac25\\cdot\\dfrac35=\\dfrac6{25}$。青→赤となる確率も $\\dfrac35\\cdot\\dfrac25=\\dfrac6{25}$ です。この2つは同時には起こらないので足し、$\\dfrac6{25}+\\dfrac6{25}=\\dfrac{12}{25}$ となります。<br><strong>注意：</strong>「袋に戻す」が重要です。戻さない場合は1回目のあとで玉の総数と割合が変わります。また、赤→青の1通りだけで終えないようにします。<br><strong>答え：</strong>$\\dfrac{12}{25}$。"
          },
          {
            id: "m05-5-3", label: "(3)", points: 6, type: "numeric",
            stem: "区別できる2個のサイコロを同時に投げるとき、出た目の和が9になる確率を既約分数で答えよ。",
            prompts: ["分子", "分母"], answers: ["1", "9"],
            solution: "<strong>考え方：</strong>2個のサイコロは区別できるので、結果を「1個目の目、2個目の目」という順序のある組で数えます。<br><strong>手順：</strong>1個目は6通り、2個目も6通りなので、起こりうる結果は $6\\cdot6=36$ 通りです。和が9になる組は $(3,6),(4,5),(5,4),(6,3)$ の4通り。したがって確率は $\\dfrac4{36}$ で、分子と分母を4で割ると $\\dfrac19$ です。<br><strong>注意：</strong>サイコロを区別するため、$(3,6)$ と $(6,3)$ は別の結果です。また、既約分数にするため最後に約分します。<br><strong>答え：</strong>$\\dfrac19$。"
          }
        ]
      }
    ]
  },
  "mini_06": {
    id: "mini_06",
    title: "基礎ミックス ver2 第1回",
    seriesTotal: null,
    seriesNumber: 6,
    units: ["数と式・1次不等式", "2次関数", "集合と論理", "場合の数", "確率"],
    durationMinutes: 45,
    totalPoints: 150,
    note: "小問集合と段階問題で5分野の基礎を確認する、理解度確認テスト型の45分試験です。",
    groups: [
      {
        number: "1",
        title: "5分野の小問集合",
        tag: "MIXED REVIEW",
        points: 40,
        stem: "次の(1)〜(5)は、互いに独立した小問です。分野の異なる基礎事項を確認します。",
        questions: [
          {
            id: "m06-1-1", label: "(1)", points: 8, type: "numeric",
            stem: "$x+y=5$、$xy=-6$ のとき、$x^2+y^2$ と $|x-y|$ の値を求めよ。",
            prompts: ["$x^2+y^2$", "$|x-y|$"], answers: ["37", "7"],
            solution: "<strong>考え方：</strong>$x^2+y^2$ は基本対称式の公式 $(x+y)^2-2xy$ で、$|x-y|$ は $(x-y)^2=(x+y)^2-4xy$ を使うと、$x,y$ を求めなくても計算できます。<br><strong>手順：</strong>$(x+y)^2=25$ です。$x^2+y^2=25-2\\times(-6)=25+12=37$。$(x-y)^2=25-4\\times(-6)=25+24=49$ なので $|x-y|=7$。<br><strong>注意：</strong>$xy$ が負の数なので、$-2xy$ や $-4xy$ を計算するときに符号を間違えないようにします（$-2\\times(-6)=+12$）。<br><strong>答え：</strong>$x^2+y^2=37$、$|x-y|=7$。"
          },
          {
            id: "m06-1-2", label: "(2)", points: 8, type: "choice",
            stem: "不等式 $|2x+1|>7$ の解として正しいものを選べ。",
            options: ["$-4<x<3$", "$x<-4$ または $x>3$", "$x\\leq-4$ または $x\\geq3$", "$x<-3$ または $x>4$"], answer: 1,
            solution: "<strong>考え方：</strong>$|X|>a$（$a>0$）の解は、$X>a$ または $X<-a$ の2つの範囲に分かれます。$|X|<a$ の1本の範囲と混同しないようにします。<br><strong>手順：</strong>$2x+1>7$ または $2x+1<-7$ を解きます。$2x+1>7$ から $2x>6$、$x>3$。$2x+1<-7$ から $2x<-8$、$x<-4$。したがって $x<-4$ または $x>3$ です。<br><strong>注意：</strong>不等号が「$>$」なので、境界の $x=-4,3$ 自体は解に含みません。内側の範囲（$-4<x<3$）と取り違えないようにします。<br><strong>答え：</strong>$x<-4$ または $x>3$。"
          },
          {
            id: "m06-1-3", label: "(3)", points: 8, type: "choice",
            stem: "整数 $n$ についての条件 $p:n^2-5n+6=0$、$q:n=2$ を考える。$p$ は $q$ であるための何条件か、正しいものを選べ。",
            options: ["必要条件", "十分条件", "必要十分条件", "必要条件でも十分条件でもない"], answer: 0,
            solution: "<strong>考え方：</strong>まず $p$ を満たす $n$ を具体的に求めてから、$p\\Rightarrow q$ と $q\\Rightarrow p$ がそれぞれ成り立つかを確かめます。<br><strong>手順：</strong>$n^2-5n+6=0$ を因数分解すると $(n-2)(n-3)=0$ なので、$p$ を満たす $n$ は $2$ と $3$ です。$n=3$ は $p$ を満たしますが $q$（$n=2$）は満たさないので、$p\\Rightarrow q$ は成り立ちません（$p$ は $q$ の十分条件ではない）。一方、$n=2$ ならば $2^2-5\\times2+6=0$ となり必ず $p$ を満たすので、$q\\Rightarrow p$ は成り立ちます。よって $p$ は $q$ の必要条件です。<br><strong>注意：</strong>2次方程式には解が2つあることを見落とすと、$n=2$ だけが解だと思い込み、十分条件と誤って判断してしまいます。<br><strong>答え：</strong>必要条件（A）。"
          },
          {
            id: "m06-1-4", label: "(4)", points: 8, type: "numeric",
            stem: "異なる書籍6冊を1列に並べる。特定の2冊 P、Q が隣り合わない並べ方は何通りあるか。",
            prompts: ["通り"], answers: ["480"],
            solution: "<strong>考え方：</strong>「隣り合わない」場合を直接数えるのは大変なので、全体から「隣り合う」場合を引く余事象で考えます。<br><strong>手順：</strong>6冊の並べ方は全部で $6!=720$ 通りです。P、Qを1つのまとまりとみると、まとまりと残り4冊の計5個の並べ方は $5!=120$ 通りで、まとまりの中の順番がP-QとQ-Pの2通りあるので、隣り合う並べ方は $120\\times2=240$ 通り。よって隣り合わない並べ方は $720-240=480$ 通りです。<br><strong>注意：</strong>「5個を並べる $5!$」と「まとまりの中の並べ替え $2!$」を両方掛けることを忘れないようにします。<br><strong>答え：</strong>480通り。"
          },
          {
            id: "m06-1-5", label: "(5)", points: 8, type: "numeric",
            stem: "赤玉4個、白玉5個が入った袋から、玉を同時に2個取り出す。2個が同じ色である確率を既約分数で答えよ。",
            prompts: ["分子", "分母"], answers: ["4", "9"],
            solution: "<strong>考え方：</strong>「同じ色」は「2個とも赤」または「2個とも白」なので、それぞれの場合の数を求めて足します。<br><strong>手順：</strong>全体の取り出し方は9個から2個を選ぶ組合せで $\\binom92=36$ 通り。2個とも赤は $\\binom42=6$ 通り、2個とも白は $\\binom52=10$ 通り。同じ色になる場合は $6+10=16$ 通りなので、確率は $\\dfrac{16}{36}=\\dfrac49$。<br><strong>注意：</strong>「同時に2個取り出す」ので組合せを使います。赤と白の場合を別々に数えてから足すのを忘れないようにします。<br><strong>答え：</strong>$\\dfrac49$。"
          }
        ]
      },
      {
        number: "2",
        title: "2次関数の段階問題",
        tag: "QUADRATIC FUNCTION",
        points: 25,
        stem: "2次関数 $y=f(x)$ のグラフは、頂点が $(3,-2)$ で、点 $(5,6)$ を通る放物線である。(1)〜(3)に答えよ。",
        questions: [
          {
            id: "m06-2-1", label: "(1)", points: 8, type: "numeric",
            stem: "$f(x)=a(x-3)^2-2$ と表すとき、$a$ の値を求めよ。また、$f(x)$ を展開して整理したときの定数項を答えよ。",
            prompts: ["$a$", "定数項"], answers: ["2", "16"],
            solution: "<strong>考え方：</strong>頂点形 $y=a(x-p)^2+q$ に頂点の座標を当てはめ、通る点の座標を代入して $a$ を決定します。<br><strong>手順：</strong>頂点が $(3,-2)$ なので $f(x)=a(x-3)^2-2$。点 $(5,6)$ を通るので $x=5,y=6$ を代入すると $6=a(5-3)^2-2=4a-2$。よって $4a=8$、$a=2$。展開すると $f(x)=2(x-3)^2-2=2x^2-12x+18-2=2x^2-12x+16$ なので、定数項は16です。<br><strong>注意：</strong>定数項は $f(0)$ の値と一致します（検算に使えます）。実際 $f(0)=2(0-3)^2-2=18-2=16$ で一致します。<br><strong>答え：</strong>$a=2$、定数項は16。"
          },
          {
            id: "m06-2-2", label: "(2)", points: 8, type: "choice",
            stem: "定義域を $1\\leq x\\leq5$ に制限したとき、$f(x)$ の最大値と最小値の組み合わせとして正しいものを選べ。",
            options: ["最大値 5、最小値 $-2$", "最大値 6、最小値 $-2$", "最大値 6、最小値 2", "最大値 8、最小値 $-2$"], answer: 1,
            solution: "<strong>考え方：</strong>(1)より $f(x)=2(x-3)^2-2$ で、頂点 $x=3$ は定義域 $[1,5]$ の内側にあります。上に開く放物線なので、頂点で最小値、頂点から遠い方の端点で最大値をとります。<br><strong>手順：</strong>頂点での値は $f(3)=-2$ でこれが最小値。両端点は $f(1)=2(1-3)^2-2=8-2=6$、$f(5)=2(5-3)^2-2=8-2=6$ で、どちらも6になります（1と5は頂点3から等距離のため）。よって最大値は6、最小値は $-2$。<br><strong>注意：</strong>定義域の中に頂点が含まれるかどうかを必ず確認します。含まれない場合は、端点の値だけで最大・最小が決まります。<br><strong>答え：</strong>最大値6、最小値 $-2$（B）。"
          },
          {
            id: "m06-2-3", label: "(3)", points: 9, type: "numeric",
            stem: "定義域を $1\\leq x\\leq k$（$k>5$）に変更する。このとき $f(x)$ の最大値が $30$ になるという。$k$ の値を求めよ。",
            prompts: ["$k$"], answers: ["7"],
            solution: "<strong>考え方：</strong>(2)の通り、定義域の右端が頂点 $x=3$ から遠くなるほど、右端での値が大きくなります。$k>5$ のとき、左端の値 $f(1)=6$ より右端の値 $f(k)$ の方が大きくなるので、最大値は $f(k)$ になります。<br><strong>手順：</strong>$f(k)=2k^2-12k+16=30$ とおきます。整理すると $2k^2-12k-14=0$、両辺を2で割ると $k^2-6k-7=0$。因数分解すると $(k-7)(k+1)=0$ なので $k=7$ または $k=-1$。$k>5$ という条件から $k=-1$ は不適で、$k=7$ です。<br><strong>注意：</strong>方程式の解が2つ出た場合は、必ず問題の条件（ここでは $k>5$）に戻って不適な解を除きます。<br><strong>答え：</strong>$k=7$。"
          }
        ]
      },
      {
        number: "3",
        title: "集合・場合の数・確率の段階問題",
        tag: "SETS / COUNTING / PROBABILITY",
        points: 35,
        stem: "$1$ から $15$ までの整数が $1$ つずつ書かれたカードが $15$ 枚ある。この中から、$3$ の倍数のカードの集合を $A$、$5$ の倍数のカードの集合を $B$ とする。(1)〜(4)に答えよ。",
        questions: [
          {
            id: "m06-3-1", label: "(1)", points: 8, type: "numeric",
            stem: "$n(A)$、$n(B)$、$n(A\\cap B)$ をそれぞれ求めよ。",
            prompts: ["$n(A)$", "$n(B)$", "$n(A\\cap B)$"], answers: ["5", "3", "1"],
            solution: "<strong>考え方：</strong>1から15までで3の倍数、5の倍数をそれぞれ書き出し、両方に共通する要素（15の倍数）を確認します。<br><strong>手順：</strong>3の倍数は $A=\\{3,6,9,12,15\\}$ で5個。5の倍数は $B=\\{5,10,15\\}$ で3個。共通部分は両方の倍数、つまり15の倍数で $A\\cap B=\\{15\\}$ の1個です。<br><strong>注意：</strong>15は3の倍数でも5の倍数でもあるため、$A$ と $B$ の両方に重複して数えないよう、共通部分として別に扱います。<br><strong>答え：</strong>$n(A)=5$、$n(B)=3$、$n(A\\cap B)=1$。"
          },
          {
            id: "m06-3-2", label: "(2)", points: 9, type: "numeric",
            stem: "この15枚のうち、$A$ にも $B$ にも属さないカードは何枚あるか。(1)の結果を利用せよ。",
            prompts: ["枚数"], answers: ["8"],
            solution: "<strong>考え方：</strong>「$A$ にも $B$ にも属さない」枚数は、全体から $A\\cup B$ の枚数を引けば求められます。$A\\cup B$ の枚数は(1)の $n(A)$、$n(B)$、$n(A\\cap B)$ から求めます。<br><strong>手順：</strong>$n(A\\cup B)=n(A)+n(B)-n(A\\cap B)=5+3-1=7$。全体は15枚なので、どちらにも属さない枚数は $15-7=8$ 枚です。<br><strong>注意：</strong>$n(A)+n(B)$ をそのまま足すと、$A\\cap B$（15のカード）を2回数えてしまいます。必ず $n(A\\cap B)$ を1回分引きます。<br><strong>答え：</strong>8枚。"
          },
          {
            id: "m06-3-3", label: "(3)", points: 9, type: "numeric",
            stem: "この15枚から2枚を同時に引くとき、2枚とも「$A$ にも $B$ にも属さない」カードである確率を既約分数で求めよ。(2)の結果を利用せよ。",
            prompts: ["分子", "分母"], answers: ["4", "15"],
            solution: "<strong>考え方：</strong>(2)で求めた8枚の中から2枚とも選ぶ場合の数を、全体の2枚の選び方で割ります。<br><strong>手順：</strong>全体の選び方は $\\binom{15}2=105$ 通り。「$A$ にも $B$ にも属さない」8枚から2枚を選ぶ方法は $\\binom82=28$ 通り。確率は $\\dfrac{28}{105}$ で、分子分母を7で割ると $\\dfrac4{15}$ です。<br><strong>注意：</strong>「同時に2枚」なので組合せを使います。(2)で出した8という枚数を、そのまま $\\binom82$ の計算に使えることを確認します。<br><strong>答え：</strong>$\\dfrac4{15}$。"
          },
          {
            id: "m06-3-4", label: "(4)", points: 9, type: "numeric",
            stem: "この15枚から2枚を同時に引くとき、少なくとも1枚が $A$ に属する確率を既約分数で求めよ。(1)の結果を利用せよ。",
            prompts: ["分子", "分母"], answers: ["4", "7"],
            solution: "<strong>考え方：</strong>「少なくとも1枚が $A$ に属する」の余事象は「2枚とも $A$ に属さない」なので、余事象の確率を1から引きます。<br><strong>手順：</strong>(1)より $n(A)=5$ なので、$A$ に属さないカードは $15-5=10$ 枚。2枚とも $A$ に属さない選び方は $\\binom{10}2=45$ 通り。全体は $\\binom{15}2=105$ 通りなので、余事象の確率は $\\dfrac{45}{105}=\\dfrac37$。したがって少なくとも1枚が $A$ に属する確率は $1-\\dfrac37=\\dfrac47$ です。<br><strong>注意：</strong>「少なくとも1枚」を直接数えようとすると場合分けが増えるため、余事象「1枚も $A$ に属さない」を使う方が速いです。<br><strong>答え：</strong>$\\dfrac47$。"
          }
        ]
      },
      {
        number: "4",
        title: "数と式・1次不等式の段階問題",
        tag: "ALGEBRA / INEQUALITY",
        points: 50,
        stem: "$a>0$ とし、$a+\\dfrac1a=4$ を満たすとき、(1)〜(4)に答えよ。",
        questions: [
          {
            id: "m06-4-1", label: "(1)", points: 12, type: "numeric",
            stem: "$a^2+\\dfrac1{a^2}$ の値を求めよ。",
            prompts: ["値"], answers: ["14"],
            solution: "<strong>考え方：</strong>$\\left(a+\\dfrac1a\\right)^2=a^2+2+\\dfrac1{a^2}$ の関係を使うと、$a$ の値そのものを求めなくても $a^2+\\dfrac1{a^2}$ の値が求まります。<br><strong>手順：</strong>両辺を2乗すると $\\left(a+\\dfrac1a\\right)^2=a^2+2\\cdot a\\cdot\\dfrac1a+\\dfrac1{a^2}=a^2+2+\\dfrac1{a^2}$。左辺は $4^2=16$ なので、$16=a^2+2+\\dfrac1{a^2}$。よって $a^2+\\dfrac1{a^2}=16-2=14$。<br><strong>注意：</strong>2乗すると必ず $+2$ の項が現れます（$a\\cdot\\dfrac1a=1$ のため）。この $+2$ を引き忘れないようにします。<br><strong>答え：</strong>14。"
          },
          {
            id: "m06-4-2", label: "(2)", points: 12, type: "numeric",
            stem: "$a^3+\\dfrac1{a^3}$ の値を求めよ。",
            prompts: ["値"], answers: ["52"],
            solution: "<strong>考え方：</strong>$\\left(a+\\dfrac1a\\right)^3$ を展開すると、$a^3+\\dfrac1{a^3}$ の項と $3\\left(a+\\dfrac1a\\right)$ の項が出てくる関係を利用します。<br><strong>手順：</strong>$\\left(a+\\dfrac1a\\right)^3=a^3+3a+\\dfrac3a+\\dfrac1{a^3}=a^3+\\dfrac1{a^3}+3\\left(a+\\dfrac1a\\right)$。左辺は $4^3=64$、$3\\left(a+\\dfrac1a\\right)=3\\times4=12$ なので、$a^3+\\dfrac1{a^3}=64-12=52$。<br><strong>注意：</strong>3乗の展開では、$a^3+\\dfrac1{a^3}$ の他に $3\\left(a+\\dfrac1a\\right)$ の項が現れることを見落とさないようにします。<br><strong>答え：</strong>52。"
          },
          {
            id: "m06-4-3", label: "(3)", points: 13, type: "numeric",
            stem: "(1)の結果を用いて、不等式 $|3x-14|<10$ を満たす整数 $x$ の個数を求めよ。",
            prompts: ["個数"], answers: ["6"],
            solution: "<strong>考え方：</strong>$|X|<k$（$k>0$）の解は $-k<X<k$ の1本の範囲になることを使い、$x$ の範囲を求めてから整数を数えます。<br><strong>手順：</strong>$-10<3x-14<10$ より $4<3x<24$。各辺を3で割ると $\\dfrac43<x<8$。この範囲に入る整数は $x=2,3,4,5,6,7$ の6個です。<br><strong>注意：</strong>$\\dfrac43$ は整数ではないので $x=2$ から、$8$ は含まないので $x=7$ までが範囲です。境界の扱いを間違えないようにします。<br><strong>答え：</strong>6個。"
          },
          {
            id: "m06-4-4", label: "(4)", points: 13, type: "numeric",
            stem: "不等式 $|3x-14|<k$（$k$ は自然数）を満たす整数 $x$ がちょうど9個であるとき、$k$ の値を求めよ。",
            prompts: ["$k$"], answers: ["14"],
            solution: "<strong>考え方：</strong>(3)と同じ形の不等式で、範囲の広さを決める $k$ を大きくするほど、含まれる整数の個数が増えていきます。整数の個数がちょうど9個になる $k$ を探します。<br><strong>手順：</strong>$|3x-14|<k$ より $\\dfrac{14-k}3<x<\\dfrac{14+k}3$。$k=14$ のとき $0<x<\\dfrac{28}3$（$\\approx9.33$）となり、整数は $x=1,2,\\ldots,9$ の9個です。$k=13$ のときは $\\dfrac13<x<9$ となり、整数は $x=1,\\ldots,8$ の8個で9個に届きません。したがって $k=14$ です。<br><strong>注意：</strong>$k$ を1つ小さくした場合も確認し、ちょうど9個になる最小の $k$ であることを確かめると確実です。<br><strong>答え：</strong>$k=14$。"
          }
        ]
      }
    ]
  },
  "mini_07": {
    id: "mini_07",
    title: "基礎ミックス ver3 第1回",
    seriesTotal: null,
    seriesNumber: 7,
    units: ["中学の復習", "式の計算", "実数", "1次不等式", "集合", "場合の数"],
    durationMinutes: 45,
    totalPoints: 150,
    note: "中学の復習から数学Iの数と式・集合・場合の数までを、小問集合と段階問題で確認する45分試験です。",
    groups: [
      {
        number: "1",
        title: "中学の復習と各分野の小問集合",
        tag: "MIXED REVIEW",
        points: 40,
        stem: "次の(1)〜(5)は、互いに独立した小問です。中学の復習と、各分野の基礎事項を確認します。",
        questions: [
          {
            id: "m07-1-1", label: "(1)", points: 8, type: "numeric",
            stem: "$\\sqrt{54n}$ が自然数となるような最小の自然数 $n$ を求めよ。また、そのときの $\\sqrt{54n}$ の値を求めよ。",
            prompts: ["$n$", "$\\sqrt{54n}$"], answers: ["6", "18"],
            solution: "<strong>考え方：</strong>根号の中を素因数分解し、指数がすべて偶数になるように足りない因数を掛けます。<br><strong>手順：</strong>$54=2\\times3^3$ なので $\\sqrt{54n}=\\sqrt{2\\times3^3\\times n}$。指数を偶数にそろえるには $2$ と $3$ が1つずつ足りないので、最小の $n$ は $2\\times3=6$ です。このとき $54n=324=18^2$ なので $\\sqrt{54n}=18$。<br><strong>注意：</strong>$n=2$ では $2^2\\times3^3$、$n=3$ では $2\\times3^4$ となり、どちらも根号は外れません。素因数ごとに指数の偶奇を確認します。<br><strong>答え：</strong>$n=6$、$\\sqrt{54n}=18$。"
          },
          {
            id: "m07-1-2", label: "(2)", points: 8, type: "numeric",
            stem: "$(2x-3)^2-(2x+3)(2x-3)$ を展開して整理すると $ax+b$ となる。$a$、$b$ の値を求めよ。",
            prompts: ["$a$", "$b$"], answers: ["-12", "18"],
            solution: "<strong>考え方：</strong>乗法公式 $(A-B)^2=A^2-2AB+B^2$ と $(A+B)(A-B)=A^2-B^2$ をそれぞれ使って展開し、同類項をまとめます。<br><strong>手順：</strong>$(2x-3)^2=4x^2-12x+9$、$(2x+3)(2x-3)=4x^2-9$。差をとると $(4x^2-12x+9)-(4x^2-9)=-12x+18$。よって $a=-12$、$b=18$。<br><strong>注意：</strong>後ろの式全体に $-$ が掛かるので $-(-9)=+9$ となり、定数項は $9+9=18$ です。かっこを外すときの符号に注意します。<br><strong>答え：</strong>$a=-12$、$b=18$。"
          },
          {
            id: "m07-1-3", label: "(3)", points: 8, type: "choice",
            stem: "$2x^2+5xy-3y^2$ を因数分解したものとして正しいものを選べ。",
            options: ["$(2x-y)(x+3y)$", "$(2x+y)(x-3y)$", "$(2x-3y)(x+y)$", "$(x-y)(2x+3y)$"], answer: 0,
            solution: "<strong>考え方：</strong>$x$ について整理し、たすき掛けで $2$ と $-3$ の分け方を探します。展開して元に戻るかを必ず確認します。<br><strong>手順：</strong>$2x^2$ を $2x$ と $x$ に、$-3y^2$ を $-y$ と $3y$ に分けると、$xy$ の係数は $2x\\times3y+x\\times(-y)=6xy-xy=5xy$ となり一致します。よって $(2x-y)(x+3y)$。<br><strong>注意：</strong>$(2x+y)(x-3y)$ を展開すると $2x^2-5xy-3y^2$ となり $xy$ の符号が逆、$(2x-3y)(x+y)$ は $2x^2-xy-3y^2$ で係数が合いません。展開による検算が確実です。<br><strong>答え：</strong>$(2x-y)(x+3y)$（A）。"
          },
          {
            id: "m07-1-4", label: "(4)", points: 8, type: "numeric",
            stem: "不等式 $\\dfrac{2x-1}{3}\\leq\\dfrac{x+2}{2}$ を満たす最大の整数 $x$ を求めよ。",
            prompts: ["$x$"], answers: ["8"],
            solution: "<strong>考え方：</strong>分母をはらってから1次不等式を解き、得られた範囲に含まれる整数のうち最大のものを答えます。<br><strong>手順：</strong>両辺に $6$ を掛けると $2(2x-1)\\leq3(x+2)$。展開して $4x-2\\leq3x+6$、移項して $x\\leq8$。この範囲の最大の整数は $8$ です。<br><strong>注意：</strong>両辺に掛けた $6$ は正の数なので不等号の向きは変わりません（負の数を掛けたり割ったりするときだけ向きが変わります）。$\\leq$ なので $x=8$ 自身も解に含まれます。<br><strong>答え：</strong>$x=8$。"
          },
          {
            id: "m07-1-5", label: "(5)", points: 8, type: "numeric",
            stem: "集合 $A=\\{1,\\,2,\\,3,\\,4,\\,5\\}$ について、$A$ の部分集合の個数と、そのうち要素がちょうど2個であるものの個数を求めよ。",
            prompts: ["部分集合の個数", "要素2個の個数"], answers: ["32", "10"],
            solution: "<strong>考え方：</strong>部分集合は、各要素について「入れる／入れない」を決める作業なので $2^n$ 個です。要素数を指定したものは組合せで数えます。<br><strong>手順：</strong>要素は5個なので部分集合は $2^5=32$ 個。要素がちょうど2個のものは5個から2個を選ぶ組合せで $\\binom52=\\dfrac{5\\times4}{2\\times1}=10$ 個です。<br><strong>注意：</strong>部分集合には空集合と $A$ 自身も含まれます（$32$ にはこの2つが入っています）。数え忘れに注意します。<br><strong>答え：</strong>部分集合は32個、要素2個のものは10個。"
          }
        ]
      },
      {
        number: "2",
        title: "対称式の段階問題",
        tag: "ALGEBRAIC EXPRESSION",
        points: 30,
        stem: "$x+y=5$、$xy=3$ とする。(1)〜(3)に答えよ。ただし、$x$、$y$ の値そのものを求める必要はない。",
        questions: [
          {
            id: "m07-2-1", label: "(1)", points: 10, type: "numeric",
            stem: "$x^2+y^2$ と $(x-y)^2$ の値を求めよ。",
            prompts: ["$x^2+y^2$", "$(x-y)^2$"], answers: ["19", "13"],
            solution: "<strong>考え方：</strong>$(x+y)^2=x^2+2xy+y^2$ を変形すると $x^2+y^2=(x+y)^2-2xy$ と表せます。$(x-y)^2$ も同じように $(x+y)^2-4xy$ で求まります。<br><strong>手順：</strong>$(x+y)^2=25$ なので $x^2+y^2=25-2\\times3=19$。また $(x-y)^2=x^2-2xy+y^2=19-2\\times3=13$（$(x+y)^2-4xy=25-12=13$ としても同じです）。<br><strong>注意：</strong>$x^2+y^2$ と $(x+y)^2$ を混同しないようにします。必ず $-2xy$ の項を引きます。<br><strong>答え：</strong>$x^2+y^2=19$、$(x-y)^2=13$。"
          },
          {
            id: "m07-2-2", label: "(2)", points: 10, type: "numeric",
            stem: "$x^3+y^3$ の値を求めよ。",
            prompts: ["$x^3+y^3$"], answers: ["80"],
            solution: "<strong>考え方：</strong>3乗の和は $x^3+y^3=(x+y)^3-3xy(x+y)$ と、基本対称式だけで表せます。<br><strong>手順：</strong>$(x+y)^3=125$、$3xy(x+y)=3\\times3\\times5=45$ なので、$x^3+y^3=125-45=80$。<br><strong>注意：</strong>$x^3+y^3=(x+y)(x^2-xy+y^2)$ を使ってもよく、(1)の結果から $5\\times(19-3)=5\\times16=80$ となって一致します。検算に使えます。<br><strong>答え：</strong>80。"
          },
          {
            id: "m07-2-3", label: "(3)", points: 10, type: "numeric",
            stem: "$\\dfrac{x}{y}+\\dfrac{y}{x}$ の値を既約分数で求めよ。(1)の結果を利用せよ。",
            prompts: ["分子", "分母"], answers: ["19", "3"],
            solution: "<strong>考え方：</strong>通分すると分子が $x^2+y^2$、分母が $xy$ になるので、(1)で求めた値をそのまま使えます。<br><strong>手順：</strong>$\\dfrac{x}{y}+\\dfrac{y}{x}=\\dfrac{x^2+y^2}{xy}=\\dfrac{19}{3}$。$19$ は素数で $3$ で割り切れないので、これが既約分数です。<br><strong>注意：</strong>$xy=3\\neq0$ なので分母は $0$ になりません。通分の分子は $x^2+y^2$ であって $x+y$ ではない点に注意します。<br><strong>答え：</strong>$\\dfrac{19}{3}$。"
          }
        ]
      },
      {
        number: "3",
        title: "実数と1次不等式の段階問題",
        tag: "REAL NUMBERS / INEQUALITY",
        points: 40,
        stem: "$a=\\dfrac{1}{\\sqrt5-2}$、$b=\\dfrac{1}{\\sqrt5+2}$ とする。(1)〜(4)に答えよ。必要ならば $2.2<\\sqrt5<2.3$ を用いてよい。",
        questions: [
          {
            id: "m07-3-1", label: "(1)", points: 10, type: "numeric",
            stem: "分母を有理化して $a=\\sqrt5+p$、$b=\\sqrt5+q$ と表すとき、$p$、$q$ の値を求めよ。",
            prompts: ["$p$", "$q$"], answers: ["2", "-2"],
            solution: "<strong>考え方：</strong>分母が $\\sqrt5-2$ の形なので、共役な数 $\\sqrt5+2$ を分母・分子に掛けると、分母が $(\\sqrt5)^2-2^2$ となって根号が消えます。<br><strong>手順：</strong>$a=\\dfrac{1}{\\sqrt5-2}=\\dfrac{\\sqrt5+2}{(\\sqrt5-2)(\\sqrt5+2)}=\\dfrac{\\sqrt5+2}{5-4}=\\sqrt5+2$。同様に $b=\\dfrac{\\sqrt5-2}{5-4}=\\sqrt5-2$。よって $p=2$、$q=-2$。<br><strong>注意：</strong>分母が $1$ になるのでそのまま $\\sqrt5\\pm2$ と書けます。$b=\\sqrt5+(-2)$ なので $q=-2$ です（符号に注意）。<br><strong>答え：</strong>$p=2$、$q=-2$。"
          },
          {
            id: "m07-3-2", label: "(2)", points: 10, type: "numeric",
            stem: "$ab$ と $a^2+b^2$ の値を求めよ。(1)の結果を利用せよ。",
            prompts: ["$ab$", "$a^2+b^2$"], answers: ["1", "18"],
            solution: "<strong>考え方：</strong>$a+b$ と $ab$ を先に求め、$a^2+b^2=(a+b)^2-2ab$ を使うと、根号を含む式を2乗する手間が省けます。<br><strong>手順：</strong>(1)より $a=\\sqrt5+2$、$b=\\sqrt5-2$ なので、$ab=(\\sqrt5+2)(\\sqrt5-2)=5-4=1$、$a+b=2\\sqrt5$。よって $a^2+b^2=(2\\sqrt5)^2-2\\times1=20-2=18$。<br><strong>注意：</strong>$(2\\sqrt5)^2=2^2\\times(\\sqrt5)^2=4\\times5=20$ です。係数の2乗を忘れないようにします。<br><strong>答え：</strong>$ab=1$、$a^2+b^2=18$。"
          },
          {
            id: "m07-3-3", label: "(3)", points: 10, type: "numeric",
            stem: "$a$ の整数部分 $m$ を求めよ。また、$a$ の小数部分が $\\sqrt5-r$ と表せるとき、$r$ の値を求めよ。",
            prompts: ["$m$", "$r$"], answers: ["4", "2"],
            solution: "<strong>考え方：</strong>整数部分は「その数を超えない最大の整数」です。$2.2<\\sqrt5<2.3$ から $a=\\sqrt5+2$ の範囲を絞り、小数部分は（もとの数）−（整数部分）で求めます。<br><strong>手順：</strong>各辺に2を足すと $4.2<\\sqrt5+2<4.3$ なので、$a$ の整数部分は $m=4$。小数部分は $a-4=(\\sqrt5+2)-4=\\sqrt5-2$ なので $r=2$。<br><strong>注意：</strong>小数部分は $0$ 以上 $1$ 未満になるはずです。$\\sqrt5-2\\approx0.236$ で条件を満たしています（これは(1)の $b$ と同じ値です）。<br><strong>答え：</strong>$m=4$、$r=2$。"
          },
          {
            id: "m07-3-4", label: "(4)", points: 10, type: "numeric",
            stem: "(3)で求めた $m$ を用いて、不等式 $|2x-m|<5$ を満たす整数 $x$ の個数と、そのうち最大のものを求めよ。",
            prompts: ["個数", "最大の$x$"], answers: ["5", "4"],
            solution: "<strong>考え方：</strong>$|X|<k$（$k>0$）の解は $-k<X<k$ の1本の範囲になります。範囲を求めてから、含まれる整数を書き出します。<br><strong>手順：</strong>(3)より $m=4$ なので $|2x-4|<5$。よって $-5<2x-4<5$、各辺に4を足して $-1<2x<9$、2で割って $-\\dfrac12<x<\\dfrac92$。この範囲の整数は $x=0,1,2,3,4$ の5個で、最大は4です。<br><strong>注意：</strong>$\\dfrac92=4.5$ は範囲に含まれないので、最大の整数は5ではなく4です。境界が分数のときは、実際に整数を書き出して数えると確実です。<br><strong>答え：</strong>5個、最大は $x=4$。"
          }
        ]
      },
      {
        number: "4",
        title: "集合と場合の数の段階問題",
        tag: "SETS / COUNTING",
        points: 40,
        stem: "$1$ から $50$ までの整数が $1$ つずつ書かれたカードが $50$ 枚ある。$3$ の倍数が書かれたカードの集合を $A$、$4$ の倍数が書かれたカードの集合を $B$ とする。(1)〜(4)に答えよ。",
        questions: [
          {
            id: "m07-4-1", label: "(1)", points: 12, type: "numeric",
            stem: "$n(A)$、$n(B)$、$n(A\\cap B)$ をそれぞれ求めよ。",
            prompts: ["$n(A)$", "$n(B)$", "$n(A\\cap B)$"], answers: ["16", "12", "4"],
            solution: "<strong>考え方：</strong>$1$ から $N$ までにある $k$ の倍数の個数は、$N\\div k$ の商（小数点以下切り捨て）で求まります。$A\\cap B$ は「3の倍数かつ4の倍数」＝12の倍数です。<br><strong>手順：</strong>$50\\div3=16$ 余り $2$ より $n(A)=16$。$50\\div4=12$ 余り $2$ より $n(B)=12$。3と4の最小公倍数は12で、$50\\div12=4$ 余り $2$ より $n(A\\cap B)=4$（$12,24,36,48$）。<br><strong>注意：</strong>「3の倍数かつ4の倍数」を $3\\times4=12$ の倍数としてよいのは、3と4が互いに素だからです。たとえば「4の倍数かつ6の倍数」は24の倍数ではなく12の倍数なので、最小公倍数で考えます。<br><strong>答え：</strong>$n(A)=16$、$n(B)=12$、$n(A\\cap B)=4$。"
          },
          {
            id: "m07-4-2", label: "(2)", points: 10, type: "numeric",
            stem: "$n(A\\cup B)$ と、$A$ にも $B$ にも属さないカードの枚数を求めよ。(1)の結果を利用せよ。",
            prompts: ["$n(A\\cup B)$", "どちらにも属さない枚数"], answers: ["24", "26"],
            solution: "<strong>考え方：</strong>和集合の要素数は $n(A\\cup B)=n(A)+n(B)-n(A\\cap B)$ で求めます。どちらにも属さない枚数は、全体から和集合を引きます。<br><strong>手順：</strong>$n(A\\cup B)=16+12-4=24$。全体は50枚なので、どちらにも属さないカードは $50-24=26$ 枚です。<br><strong>注意：</strong>$n(A)+n(B)$ をそのまま足すと、12の倍数の4枚を2回数えてしまいます。必ず $n(A\\cap B)$ を1回分引きます。<br><strong>答え：</strong>$n(A\\cup B)=24$、どちらにも属さないカードは26枚。"
          },
          {
            id: "m07-4-3", label: "(3)", points: 9, type: "numeric",
            stem: "$A\\cup B$ に属するカードの中から3枚を選ぶ選び方は何通りあるか。(2)の結果を利用せよ。",
            prompts: ["通り"], answers: ["2024"],
            solution: "<strong>考え方：</strong>選ぶ順番は関係ないので、組合せ $\\binom{n}{3}$ を使います。$n$ は(2)で求めた $n(A\\cup B)$ です。<br><strong>手順：</strong>(2)より $n(A\\cup B)=24$ なので、$\\binom{24}{3}=\\dfrac{24\\times23\\times22}{3\\times2\\times1}=\\dfrac{12144}{6}=2024$ 通り。<br><strong>注意：</strong>「選ぶ」だけで並べないので順列 $_{24}\\mathrm{P}_3$ ではありません。$3!=6$ で割るのを忘れないようにします。<br><strong>答え：</strong>2024通り。"
          },
          {
            id: "m07-4-4", label: "(4)", points: 9, type: "numeric",
            stem: "50枚から2枚を選ぶとき、少なくとも1枚が $A\\cap B$ に属する選び方は何通りあるか。(1)の結果を利用せよ。",
            prompts: ["通り"], answers: ["190"],
            solution: "<strong>考え方：</strong>「少なくとも1枚」は場合分けが増えるので、余事象「2枚とも $A\\cap B$ に属さない」を全体から引きます。<br><strong>手順：</strong>全体の選び方は $\\binom{50}{2}=\\dfrac{50\\times49}{2}=1225$ 通り。(1)より $n(A\\cap B)=4$ なので、$A\\cap B$ に属さないカードは $50-4=46$ 枚あり、そこから2枚選ぶ方法は $\\binom{46}{2}=\\dfrac{46\\times45}{2}=1035$ 通り。よって $1225-1035=190$ 通りです。<br><strong>注意：</strong>直接数えると「ちょうど1枚」$4\\times46=184$ 通りと「2枚とも」$\\binom42=6$ 通りの和で $190$ 通りとなり、一致します（検算に使えます）。<br><strong>答え：</strong>190通り。"
          }
        ]
      }
    ]
  }
};
