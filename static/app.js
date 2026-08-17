const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

// 帝京の既存データ（window.TEIKYO_DATASETS）と、新規追加分（window.MATH_DATASETS）を統合。
// 各 exam.key は DATASETS 内で一意（進捗キーの識別子を兼ねるため衝突不可）。
const DATASETS = { ...(window.TEIKYO_DATASETS || {}), ...(window.MATH_DATASETS || {}) };
if (!Object.keys(DATASETS).length && window.TEIKYO_DATA) DATASETS.sougou = window.TEIKYO_DATA;

// ミニ試験（旧math-mini-exam）。window.MINI_EXAMS の各回を「学校」の1つとして統合する。
const MINI_EXAMS = window.MINI_EXAMS || {};
const isMiniKey = (key) => Object.prototype.hasOwnProperty.call(MINI_EXAMS, key);
const hasExamData = (key) => Boolean(DATASETS[key] || isMiniKey(key));

// 学校（出典）→ 方式・年度 の2階層。新しい学校は window.MATH_SCHOOLS に配列で追記して増やす
// （帝京は下記の既定に含まれる。追加校のデータは window.MATH_DATASETS へ登録する）。
const DEFAULT_SCHOOLS = [
  {
    id: "teikyo",
    name: "帝京大学",
    eyebrow: "TEIKYO UNIVERSITY / MATH",
    exams: [
      {
        key: "sougou",
        label: "総合型選抜",
        shortLabel: "総合型 2026",
        sourceTitle: "2026 総合型選抜",
        sourceText: "薬・理工学部 数学",
        legacyProgressKey: "teikyo_2026_math_practice_v1",
      },
      {
        key: "sougou2024",
        label: "総合型選抜(2024)",
        shortLabel: "総合型 2024",
        sourceTitle: "2024 総合型選抜",
        sourceText: "薬・理工学部 数学",
      },
      {
        key: "recommend",
        label: "学校推薦型選抜",
        shortLabel: "学校推薦型",
        sourceTitle: "2026 学校推薦型選抜",
        sourceText: "薬・理工学部 数学",
        legacyProgressKey: "teikyo_2026_recommend_math_practice_v1",
      },
      {
        key: "recommend2024",
        label: "学校推薦型選抜(2024)",
        shortLabel: "学校推薦 2024",
        sourceTitle: "2024 学校推薦型選抜",
        sourceText: "薬・理工学部 数学",
      },
    ],
  },
];
const MINI_SCHOOL = Object.keys(MINI_EXAMS).length ? {
  id: "mini",
  name: "数学ミニ試験",
  eyebrow: "MATH / MINI EXAM",
  exams: Object.values(MINI_EXAMS)
    .sort((a, b) => a.seriesNumber - b.seriesNumber)
    .map((exam) => ({
      key: exam.id,
      label: `第${exam.seriesNumber}回`,
      shortLabel: `第${exam.seriesNumber}回`,
      sourceTitle: exam.title,
      sourceText: `第${exam.seriesNumber}回・${exam.durationMinutes}分・${exam.totalPoints}点`,
    })),
} : null;
const SCHOOLS = [...DEFAULT_SCHOOLS, ...(window.MATH_SCHOOLS || []), ...(MINI_SCHOOL ? [MINI_SCHOOL] : [])];

// exam.key -> { ...exam, schoolId, eyebrow }（データが存在する方式のみ）
const EXAMS = {};
const SCHOOL_BY_EXAM = {};
SCHOOLS.forEach((school) => {
  (school.exams || []).forEach((exam) => {
    if (!hasExamData(exam.key)) return;
    EXAMS[exam.key] = { ...exam, schoolId: school.id, eyebrow: exam.eyebrow || school.eyebrow };
    SCHOOL_BY_EXAM[exam.key] = school;
  });
});
const AVAILABLE_EXAMS = Object.keys(EXAMS);
const AVAILABLE_SCHOOLS = SCHOOLS.filter((school) => (school.exams || []).some((exam) => hasExamData(exam.key)));
const CURRENT_EXAM_KEY = "teikyo_2026_math_current_exam_v1";
let currentExamKey = loadCurrentExam();
let DATA = DATASETS[currentExamKey] || { problem_groups: [] };
let groups = DATA.problem_groups || [];
const LEGACY_PROGRESS_KEY = "teikyo_2026_math_practice_v1";
const STUDENTS_KEY = "teikyo_2026_math_students_unified_v1";
const LEGACY_STUDENT_KEYS = ["teikyo_2026_math_students_v1", "teikyo_2026_recommend_math_students_v1"];
const CURRENT_STUDENT_KEY = "teikyo_2026_math_current_student_v1";
const PROGRESS_PREFIX = "teikyo_2026_math_progress_v2:";
const DRAFT_PREFIX = "teikyo_2026_math_drafts_v2:";

let currentGroup = 0;
let answers = {};
let answerDrafts = {};
let graded = false;
let active = null;
let keypadOpen = false;
let modalReturnFocus = null;
let modalDetailShown = 0;
let checkedSubs = {};
let groupListOpen = false;
let students = loadStudents();
let currentStudentName = loadCurrentStudent();
let progress = {};
let cloud = null;

const DETAIL_STEP_LABELS = ["着眼点", "立式", "計算", "答え合わせ"];

const DETAIL_TEXT = {
  "1-(1)": [
    "因数分解では、まず共通因数や公式を探し、複数の文字がある式では「1つの文字について整理する」のが基本方針。今回は $x$ の係数が扱いやすいので、$x$ の2次式として見る。",
    "元の式を $x$ について整理すると、$x^2+(6-y)x+(-6y^2-8y+8)$ となる。",
    "次に、定数部分 $-6y^2-8y+8$ を因数分解する。$-6y^2-8y+8=(2y+4)(-3y+2)$。",
    "ここで $x^2+(A+B)x+AB=(x+A)(x+B)$ の形にしたい。$A=2y+4$、$B=-3y+2$ とすると、$A+B=(2y+4)+(-3y+2)=6-y$ で、$x$ の係数と一致する。",
    "したがって $x^2+(6-y)x+(-6y^2-8y+8)=(x+2y+4)(x-3y+2)$。",
    "最後に空欄の形 $(x+\\boxed{ア}y+\\boxed{イ})(x-\\boxed{ウ}y+\\boxed{エ})$ に合わせて、ア=2、イ=4、ウ=3、エ=2。"
  ],
  "1-(2)": [
    "$360$ を素因数分解する。$360=36\\times10=2^3\\cdot3^2\\cdot5$。",
    "正の約数の個数は、各素因数の指数に $1$ を足して掛ける。",
    "$(3+1)(2+1)(1+1)=4\\times3\\times2=24$。",
    "2桁の空欄なので、オ=2、カ=4。"
  ],
  "1-(3)": [
    "対数の底が $3,9,5,25$ と混ざっているので、まず底の変換公式 $\\log_a b=\\dfrac{\\log_c b}{\\log_c a}$ を使って底をそろえる。",
    "$9=3^2$、$25=5^2$ だから、$\\log_9 5=\\dfrac{\\log_3 5}{\\log_3 9}=\\frac12\\log_3 5$、$\\log_{25}3=\\dfrac{\\log_5 3}{\\log_5 25}=\\frac12\\log_5 3$。",
    "第1括弧は $\\log_3 25+\\log_9 5=2\\log_3 5+\\frac12\\log_3 5=\\frac52\\log_3 5$。",
    "第2括弧は $\\log_5 27+\\log_{25}3=3\\log_5 3+\\frac12\\log_5 3=\\frac72\\log_5 3$。",
    "$\\log_3 5\\cdot\\log_5 3=1$ なので、積は $\\frac52\\cdot\\frac72=\\frac{35}{4}$。"
  ],
  "1-(4)": [
    "共通接線を $y=mx+c$ とおく。",
    "$y=-x^2+1$ に接する条件は、$-x^2+1=mx+c$ が重解をもつこと。整理すると $x^2+mx+(c-1)=0$ なので $m^2-4(c-1)=0$。",
    "$y=x^2-2x+6$ に接する条件は、$x^2-2x+6=mx+c$ が重解をもつこと。整理すると $x^2-(m+2)x+(6-c)=0$ なので $(m+2)^2-4(6-c)=0$。",
    "2つの条件から $c=1+\\frac{m^2}{4}$ と $c=6-\\frac{(m+2)^2}{4}$。等置して $m^2+2m-8=0$。",
    "$m=2,-4$。それぞれ $c=2,5$ だから、$y=2x+2$、$y=-4x+5$。"
  ],
  "1-(5)": [
    "これは積分範囲が $-1$ から $1$ で、上端や下端に $x$ が入っていない。したがって、参照ページでいう「定数型」の積分方程式である。",
    "定数型では、まず定積分全体を文字で置く。$\\displaystyle k=\\int_{-1}^{1}f(t)\\,dt$ とおく。",
    "すると元の式は $f(x)=6x^2-2x+k$ と書ける。ここで $k$ はまだ未知の定数。",
    "次に、この $f(x)$ を定積分の中へ戻す。$k=\\displaystyle\\int_{-1}^{1}(6t^2-2t+k)\\,dt$。",
    "計算すると、$\\displaystyle\\int_{-1}^{1}6t^2dt=4$、$\\displaystyle\\int_{-1}^{1}(-2t)dt=0$、$\\displaystyle\\int_{-1}^{1}k\\,dt=2k$。",
    "よって $k=4+2k$。これを解くと $k=-4$。",
    "元の $f(x)=6x^2-2x+k$ に戻して、$f(x)=6x^2-2x-4$。したがって空欄は $4$。"
  ],
  "2-(1)": [
    "$\\triangle ABC$ で余弦定理を使う。",
    "$AC^2=AB^2+BC^2-2\\cdot AB\\cdot BC\\cos60^\\circ$。",
    "$AC^2=2^2+3^2-2\\cdot2\\cdot3\\cdot\\frac12=4+9-6=7$。",
    "したがって $AC=\\sqrt7$。"
  ],
  "2-(2)": [
    "円に内接する四角形では、向かい合う角の和が $180^\\circ$。",
    "$\\angle ABC=60^\\circ$ なので $\\angle ADC=120^\\circ$。",
    "$\\triangle ACD$ に余弦定理を使い、$AC^2=AD^2+CD^2-2\\cdot AD\\cdot CD\\cos120^\\circ$。",
    "$7=AD^2+1+AD$ となる。$AD^2+AD-6=0$ より、正の解は $AD=2$。"
  ],
  "2-(3)": [
    "$\\triangle ABC$ で正弦定理、または面積公式を使う。",
    "正弦定理から $\\frac{BC}{\\sin\\angle BAC}=\\frac{AC}{\\sin60^\\circ}$。",
    "$\\sin\\angle BAC=\\frac{BC\\sin60^\\circ}{AC}=\\frac{3\\cdot\\frac{\\sqrt3}{2}}{\\sqrt7}$。",
    "分母を有理化して $\\frac{3\\sqrt{21}}{14}$。"
  ],
  "2-(4)": [
    "$\\triangle ABC$ の外接円が四角形 $ABCD$ の円でもある。",
    "正弦定理の拡張 $\\frac{AC}{\\sin\\angle ABC}=2R$ を使う。",
    "$2R=\\frac{\\sqrt7}{\\sin60^\\circ}=\\frac{\\sqrt7}{\\sqrt3/2}=\\frac{2\\sqrt7}{\\sqrt3}$。",
    "$R=\\frac{\\sqrt7}{\\sqrt3}=\\frac{\\sqrt{21}}{3}$。"
  ],
  "2-(5)": [
    "四角形を対角線 $AC$ で $\\triangle ABC$ と $\\triangle ACD$ に分ける。",
    "$\\triangle ABC$ の面積は $\\frac12\\cdot2\\cdot3\\cdot\\sin60^\\circ=\\frac{3\\sqrt3}{2}$。",
    "$\\triangle ACD$ は $AD=2, CD=1, \\angle ADC=120^\\circ$ なので、面積は $\\frac12\\cdot2\\cdot1\\cdot\\sin120^\\circ=\\frac{\\sqrt3}{2}$。",
    "合計は $2\\sqrt3$。"
  ],
  "3-(1)": [
    "この問題は、さいころを何回も投げるので反復試行の確率として考える。1回ごとに「奇数」か「偶数」かの2択で、どちらも確率は $\\frac12$。",
    "奇数が出た回数を $k$ とすると、3回後に $A=k$、$B=2+(3-k)=5-k$ となる。",
    "$B>A$ は $5-k>k$、つまり $k\\le2$。これは「奇数が3回出る場合以外」と同じ。",
    "反復試行の公式では $P(k=3)={}_3C_3(\\frac12)^3=\\frac18$。",
    "したがって $P(B>A)=1-\\frac18=\\frac78$。"
  ],
  "3-(2)": [
    "Aの座標は、奇数が出た回数そのもの。よって $A=3$ は「4回中ちょうど3回奇数が出る」こと。",
    "反復試行の公式は、事象Aがちょうど $k$ 回起こる確率 $ {}_nC_kp^k(1-p)^{n-k}$。",
    "ここでは $n=4$、$k=3$、$p=\\frac12$。",
    "${}_4C_3(\\frac12)^3(\\frac12)^1=4\\cdot\\frac1{16}=\\frac14$。"
  ],
  "3-(3)": [
    "Aが座標4に到達するには、5回中少なくとも4回奇数が出ればよい。",
    "「少なくとも」は、該当する回数を場合分けして足す。ここでは奇数が4回または5回。",
    "反復試行の公式より、確率は ${}_5C_4(\\frac12)^4(\\frac12)^1+{}_5C_5(\\frac12)^5$。",
    "これは $\\frac5{32}+\\frac1{32}=\\frac6{32}=\\frac3{16}$。",
    "このとき偶数は1回以下なので、Bは座標4に届かず、AがBより先に座標4へ到達している。"
  ],
  "3-(4)": [
    "5回中、奇数が $k$ 回なら $A=k$。偶数は $5-k$ 回なので $B=2+(5-k)=7-k$。",
    "$A>B$ は $k>7-k$、つまり $k\\ge4$。",
    "したがって、奇数が4回または5回出る確率を反復試行の公式で足す。",
    "${}_5C_4(\\frac12)^4(\\frac12)^1+{}_5C_5(\\frac12)^5=\\frac5{32}+\\frac1{32}=\\frac3{16}$。"
  ],
  "3-(5)": [
    "6回中、奇数が $k$ 回なら $A=k$。偶数は $6-k$ 回なので $B=2+(6-k)=8-k$。",
    "同じ座標になる条件は $k=8-k$、つまり $k=4$。",
    "これは「6回中ちょうど4回奇数が出る」反復試行。",
    "${}_6C_4(\\frac12)^4(\\frac12)^2={}_6C_4(\\frac12)^6=15\\cdot\\frac1{64}=\\frac{15}{64}$。"
  ],
  "4-(1)": [
    "$t=\\sin\\theta+\\cos\\theta$ とおくと、$t^2=\\sin^2\\theta+2\\sin\\theta\\cos\\theta+\\cos^2\\theta$。",
    "つまり $t^2=1+\\sin2\\theta$ なので、$\\sin2\\theta=t^2-1$。",
    "$y=\\sin2\\theta+2(\\sin\\theta+\\cos\\theta)-2$ に代入する。",
    "$y=(t^2-1)+2t-2=t^2+2t-3$。"
  ],
  "4-(2)": [
    "$\\sin\\theta+\\cos\\theta$ は合成して $\\sqrt2\\sin(\\theta+\\frac\\pi4)$ と表せる。",
    "$\\sin$ の値域は $-1$ から $1$。",
    "したがって $t$ の値域は $-\\sqrt2\\le t\\le\\sqrt2$。"
  ],
  "4-(3)": [
    "(1)より $y=t^2+2t-3$。平方完成すると $y=(t+1)^2-4$ である。",
    "(2)より $t$ の範囲は $-\\sqrt2\\le t\\le\\sqrt2$。つまり、$y=(t+1)^2-4$ をこの区間だけで考える。",
    "この二次関数は上に開く放物線で、頂点は $t=-1$、最小値は $-4$。しかも $-1$ は区間 $[-\\sqrt2,\\sqrt2]$ の中にあるので、この最小値は実際にとれる。",
    "次に $t=-1$ となる $\\theta$ を求める。$t=\\sin\\theta+\\cos\\theta=\\sqrt2\\sin(\\theta+\\frac\\pi4)$ だから、$\\sqrt2\\sin(\\theta+\\frac\\pi4)=-1$。",
    "よって $\\sin(\\theta+\\frac\\pi4)=-\\frac1{\\sqrt2}$。$0\\le\\theta<2\\pi$ で調べると、$\\theta=\\pi,\\frac32\\pi$ の2つが該当する。",
    "最大値は、上に開く放物線なので頂点ではなく区間の端で起こる。端点 $t=-\\sqrt2$ と $t=\\sqrt2$ を比べる。",
    "$t=-\\sqrt2$ のとき $y=2-2\\sqrt2-3=-1-2\\sqrt2$、$t=\\sqrt2$ のとき $y=2+2\\sqrt2-3=-1+2\\sqrt2$。",
    "大きいのは $-1+2\\sqrt2$ なので最大値は $-1+2\\sqrt2$。",
    "このとき $t=\\sqrt2$、つまり $\\sin\\theta+\\cos\\theta=\\sqrt2$。これは $\\sqrt2\\sin(\\theta+\\frac\\pi4)=\\sqrt2$ なので $\\sin(\\theta+\\frac\\pi4)=1$。",
    "$0\\le\\theta<2\\pi$ では $\\theta+\\frac\\pi4=\\frac\\pi2$ となり、$\\theta=\\frac\\pi4$。"
  ]
};

const DETAIL_TEXTS = {
  sougou: DETAIL_TEXT,
  ...(window.TEIKYO_DETAIL_TEXTS || {}),
  ...(window.MATH_DETAIL_TEXTS || {}),
};

function loadCurrentExam() {
  const requested = new URLSearchParams(window.location.search).get("exam");
  if (requested && AVAILABLE_EXAMS.includes(requested)) return requested;
  const stored = localStorage.getItem(CURRENT_EXAM_KEY);
  if (stored && AVAILABLE_EXAMS.includes(stored)) return stored;
  if (AVAILABLE_EXAMS.includes("sougou")) return "sougou";
  return AVAILABLE_EXAMS[0] || "sougou";
}

function setCurrentExam(key) {
  if (!hasExamData(key)) return;
  const wasMini = isMiniKey(currentExamKey);
  currentExamKey = key;
  localStorage.setItem(CURRENT_EXAM_KEY, key);
  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.set("exam", key);
  window.history.replaceState(null, "", nextUrl);
  if (isMiniKey(key)) {
    examFlow.enter(key);
    render();
    return;
  }
  if (wasMini) examFlow.leave();
  keypadOpen = false;
  DATA = DATASETS[currentExamKey] || { problem_groups: [] };
  groups = DATA.problem_groups || [];
  currentGroup = 0;
  progress = loadProgressFor(currentStudentName);
  answerDrafts = loadDraftsFor(currentStudentName);
  migrateLegacyProgress();
  progress = loadProgressFor(currentStudentName);
  answerDrafts = loadDraftsFor(currentStudentName);
  ensureAnswersForGroup();
  render();
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function progressStorageKey(examKey, name) {
  return `${PROGRESS_PREFIX}${examKey}:${encodeURIComponent(normalizeStudentName(name))}`;
}

function draftStorageKey(examKey, name) {
  return `${DRAFT_PREFIX}${examKey}:${encodeURIComponent(normalizeStudentName(name))}`;
}

function loadProgressSnapshot(examKey, name) {
  if (!hasExamData(examKey) || !normalizeStudentName(name)) return {};
  const snapshot = readJson(progressStorageKey(examKey, name), {});
  return snapshot && typeof snapshot === "object" && !Array.isArray(snapshot) ? snapshot : {};
}

function loadDraftSnapshot(examKey, name) {
  if (!hasExamData(examKey) || !normalizeStudentName(name)) return {};
  const snapshot = readJson(draftStorageKey(examKey, name), {});
  return snapshot && typeof snapshot === "object" && !Array.isArray(snapshot) ? snapshot : {};
}

function normalizeStudentName(name = "") {
  return String(name).trim().replace(/\s+/g, " ");
}

function progressKeyFor(name) {
  return progressStorageKey(currentExamKey, name);
}

function draftKeyFor(name) {
  return draftStorageKey(currentExamKey, name);
}

function loadStudents() {
  const lists = [readJson(STUDENTS_KEY, []), ...LEGACY_STUDENT_KEYS.map((key) => readJson(key, []))];
  return [...new Set(lists.flat().map(normalizeStudentName).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, "ja"));
}

function saveStudents() {
  writeJson(STUDENTS_KEY, students);
}

function loadCurrentStudent() {
  const name = normalizeStudentName(localStorage.getItem(CURRENT_STUDENT_KEY) || "");
  return name;
}

function setCurrentStudent(name) {
  currentStudentName = normalizeStudentName(name);
  localStorage.setItem(CURRENT_STUDENT_KEY, currentStudentName);
  progress = loadProgressFor(currentStudentName);
  answerDrafts = loadDraftsFor(currentStudentName);
}

function loadProgressFor(name) {
  return loadProgressSnapshot(currentExamKey, name);
}

function loadDraftsFor(name) {
  return loadDraftSnapshot(currentExamKey, name);
}

function saveProgress() {
  if (!currentStudentName) return;
  writeJson(progressKeyFor(currentStudentName), progress);
  if (cloud) cloud.queueSave();
}

function saveDrafts() {
  if (!currentStudentName) return;
  writeJson(draftKeyFor(currentStudentName), answerDrafts);
  if (cloud) cloud.queueSave();
}

function cloudPayload() {
  const exams = {};
  for (const examKey of AVAILABLE_EXAMS.filter((key) => !isMiniKey(key))) {
    const encodedName = encodeURIComponent(currentStudentName);
    exams[examKey] = {
      progress: readJson(`${PROGRESS_PREFIX}${examKey}:${encodedName}`, {}),
      drafts: readJson(`${DRAFT_PREFIX}${examKey}:${encodedName}`, {}),
    };
  }
  return { version: 1, exams };
}

function applyCloudPayload(payload) {
  const exams = payload && typeof payload === "object" ? payload.exams : null;
  const student = cloud?.getSession().student;
  if (!student || !exams || typeof exams !== "object") return;
  currentStudentName = normalizeStudentName(student.name);
  const encodedName = encodeURIComponent(currentStudentName);
  for (const [examKey, record] of Object.entries(exams)) {
    if (!DATASETS[examKey] || !record || typeof record !== "object") continue;
    writeJson(`${PROGRESS_PREFIX}${examKey}:${encodedName}`, record.progress || {});
    writeJson(`${DRAFT_PREFIX}${examKey}:${encodedName}`, record.drafts || {});
  }
}

function migrateLegacyProgress() {
  const legacyKey = EXAMS[currentExamKey]?.legacyProgressKey || LEGACY_PROGRESS_KEY;
  const migratedKey = `${legacyKey}_migrated_into_unified`;
  const legacyRaw = localStorage.getItem(legacyKey);
  if (!legacyRaw || localStorage.getItem(migratedKey)) return;
  const legacy = readJson(legacyKey, {});
  if (!legacy || !Object.keys(legacy).length) {
    localStorage.setItem(migratedKey, "1");
    return;
  }
  const legacyStudent = "既存データ";
  if (!students.includes(legacyStudent)) {
    students.push(legacyStudent);
    saveStudents();
  }
  if (!localStorage.getItem(progressKeyFor(legacyStudent))) {
    writeJson(progressKeyFor(legacyStudent), legacy);
  }
  if (!currentStudentName) setCurrentStudent(legacyStudent);
  localStorage.setItem(migratedKey, "1");
}

function escapeHtml(text = "") {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function mdLite(text = "") {
  return escapeHtml(text)
    .replace(/\n{2,}/g, "</p><p>")
    .replace(/\n/g, "<br>");
}

function renderMath(root = document.body) {
  if (!window.renderMathInElement) return;
  window.renderMathInElement(root, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true },
    ],
    throwOnError: false,
  });
}

function groupKey(index) {
  return `group-${groups[index]?.group_number || index + 1}`;
}

function groupDraftKey(index) {
  return groupKey(index);
}

function subKey(groupIndex, subIndex) {
  return `${groupKey(groupIndex)}-${subIndex}`;
}

function allSubProblems() {
  return groups.flatMap((group, groupIndex) =>
    (group.sub_problems || []).map((sub, subIndex) => ({ group, groupIndex, sub, subIndex }))
  );
}

function completedCount() {
  return allSubProblems().filter(({ groupIndex, subIndex }) => progress[subKey(groupIndex, subIndex)]?.correct).length;
}

function totalCount() {
  return allSubProblems().length;
}

function normalize(value) {
  return String(value || "")
    .trim()
    .replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xFEE0))
    .replace(/[−ー－]/g, "-")
    .replace(/\s+/g, "");
}

function fieldValue(field) {
  const cells = answers[field.uid] || [];
  return normalize(cells.join(""));
}

function isFieldFilled(field) {
  const cells = answers[field.uid] || [];
  return cells.every((cell) => String(cell || "").trim() !== "");
}

function isFieldCorrect(field) {
  return fieldValue(field) === normalize(field.value);
}

function createViewFields(groupIndex, subIndex, sub) {
  return (sub.answer_fields || []).map((field, fieldIndex) => {
    const labels = field.boxes || [...(field.num_boxes || []), ...(field.den_boxes || [])];
    return {
      ...field,
      uid: `${groupIndex}-${subIndex}-${fieldIndex}`,
      labels,
      title: labels.join(""),
      cellCount: Math.max(1, labels.length || String(field.value || "").length),
    };
  });
}

function ensureAnswersForGroup() {
  const group = groups[currentGroup];
  if (!group) return;
  const draftKey = groupDraftKey(currentGroup);
  answers = answerDrafts[draftKey] || {};
  (group.sub_problems || []).forEach((sub, subIndex) => {
    createViewFields(currentGroup, subIndex, sub).forEach((field) => {
      const stored = Array.isArray(answers[field.uid]) ? answers[field.uid] : [];
      answers[field.uid] = Array.from({ length: field.cellCount }, (_, index) => stored[index] || "");
    });
  });
  answerDrafts[draftKey] = answers;
  graded = false;
  checkedSubs = {};
  setFirstAvailableActive();
}

function persistCurrentAnswers() {
  answerDrafts[groupDraftKey(currentGroup)] = answers;
  saveDrafts();
}

function currentFields() {
  const group = groups[currentGroup];
  return (group.sub_problems || []).flatMap((sub, subIndex) =>
    createViewFields(currentGroup, subIndex, sub).map((field) => ({ field, sub, subIndex }))
  );
}

function fieldEntries() {
  return currentFields().flatMap(({ field, sub, subIndex }) =>
    Array.from({ length: field.cellCount }, (_, cellIndex) => ({ field, sub, subIndex, cellIndex }))
  );
}

function setFirstAvailableActive() {
  const blank = fieldEntries().find(({ field, cellIndex }) => !answers[field.uid]?.[cellIndex]);
  const first = blank || fieldEntries()[0];
  active = first ? { uid: first.field.uid, cellIndex: first.cellIndex } : null;
}

function renderExamShell() {
  const exam = EXAMS[currentExamKey] || EXAMS[AVAILABLE_EXAMS[0]];
  const school = SCHOOL_BY_EXAM[currentExamKey] || AVAILABLE_SCHOOLS[0];
  const currentState = catalogStateForExam(currentExamKey);
  if (isMiniKey(currentExamKey)) {
    document.title = `${exam.sourceTitle}｜数学ミニ試験`;
    $("#appTitle").textContent = "数学ミニ試験";
  } else {
    document.title = `${school.name} ${exam.label}｜数学過去問演習`;
    $("#appTitle").textContent = `${school.name} ${exam.label}`;
  }
  $("#sourceTitle").textContent = exam.sourceTitle;
  $("#sourceText").textContent = exam.sourceText;
  $(".brand .eyebrow").textContent = exam.eyebrow || school.eyebrow || "MATH / PAST EXAMS";

  // ミニ試験は選択肢が少ないため、ラベルだけ「回を変える」に言い換える。
  // 学校・回の選択肢は既定で畳んでおき、試験概要・開始CTAより先に表示されないようにする。
  $(".source-switch-toggle > summary").textContent = isMiniKey(currentExamKey) ? "回を変える" : "出典を変える";
  $("#sourceSummary").textContent = catalogSummaryText(isMiniKey(currentExamKey) ? MINI_EXAMS[currentExamKey] : exam, currentState);
  $("#examPanelLabel").textContent = isMiniKey(currentExamKey) ? "試験回" : "方式・年度";

  // 学校が1つだけのときは学校切替パネルを隠す
  $("#schoolPanel").classList.toggle("hidden", AVAILABLE_SCHOOLS.length <= 1);
  $("#schoolSwitch").innerHTML = AVAILABLE_SCHOOLS.map((s, index) => {
    const active = s.id === school.id;
    const summary = schoolCatalogSummary(s);
    const selectedText = active ? "・選択中" : "";
    return `<button class="exam-option ${active ? "active" : ""}" type="button" role="tab"
      aria-selected="${active ? "true" : "false"}" data-school="${escapeHtml(s.id)}"
      aria-label="${escapeHtml(`${s.name} ${summary.label}${selectedText}`)}">
      <span class="exam-option-no">SOURCE ${formatCatalogNumber(index)}</span>
      <span class="exam-option-title">${escapeHtml(s.name)}</span>
      <span class="exam-option-status">${escapeHtml(active ? `選択中・${summary.label}` : summary.label)}</span>
      <span class="exam-option-progress">${summary.total}セット</span>
    </button>`;
  }).join("");
  $$("[data-school]").forEach((button) => {
    button.addEventListener("click", () => {
      setCurrentSchool(button.dataset.school);
      $(".source-switch-toggle").open = false;
    });
  });

  const schoolExams = (school.exams || []).filter((e) => hasExamData(e.key));
  $("#examSwitch").innerHTML = schoolExams.map((option, index) => {
    const key = option.key;
    const state = catalogStateForExam(key);
    const optionExam = state.mode === "mini" ? MINI_EXAMS[key] : EXAMS[key];
    const active = key === currentExamKey;
    const modeLabel = state.mode === "mini" ? "30分ミニ試験" : "過去問演習";
    const groupLabel = `${groupCountFor(key)}大問・${state.total}${state.mode === "mini" ? "小問" : "小問"}`;
    const selectedText = active ? "・選択中" : "";
    return `<button class="exam-option ${active ? "active" : ""} ${catalogStateClass(state)}" type="button" role="tab"
      aria-selected="${active ? "true" : "false"}" data-exam="${escapeHtml(key)}"
      aria-label="${escapeHtml(`${option.label || option.shortLabel} ${modeLabel} ${catalogProgressText(optionExam, state)} ${state.status}${selectedText}`)}">
      <span class="exam-option-no">${formatCatalogNumber(index)}</span>
      <span class="exam-option-title">${escapeHtml(option.label || option.shortLabel)}</span>
      <span class="exam-option-mode">${escapeHtml(modeLabel)}</span>
      <span class="exam-option-status">${escapeHtml(active ? `選択中・${state.status}` : state.status)}</span>
      <span class="exam-option-progress">${escapeHtml(`${groupLabel}・${catalogProgressText(optionExam, state)}`)}</span>
      <span class="exam-option-action">次: ${escapeHtml(state.actionLabel)}</span>
    </button>`;
  }).join("");
  $$("[data-exam]").forEach((button) => {
    button.addEventListener("click", () => {
      setCurrentExam(button.dataset.exam);
      $(".source-switch-toggle").open = false;
    });
  });
}

function examCountForSchool(school) {
  return (school.exams || []).filter((exam) => hasExamData(exam.key)).length;
}

function setCurrentSchool(schoolId) {
  const school = AVAILABLE_SCHOOLS.find((s) => s.id === schoolId);
  if (!school) return;
  if (SCHOOL_BY_EXAM[currentExamKey]?.id === schoolId) return;
  const firstExam = (school.exams || []).find((exam) => hasExamData(exam.key));
  if (firstExam) setCurrentExam(firstExam.key);
}

function totalCountFor(examKey) {
  if (isMiniKey(examKey)) {
    return MINI_EXAMS[examKey].groups.reduce((sum, group) => sum + group.questions.length, 0);
  }
  return (DATASETS[examKey]?.problem_groups || []).reduce((sum, group) => sum + (group.sub_problems || []).length, 0);
}

function groupCountFor(examKey) {
  return isMiniKey(examKey)
    ? (MINI_EXAMS[examKey]?.groups || []).length
    : (DATASETS[examKey]?.problem_groups || []).length;
}

function hasDraftValues(value) {
  if (typeof value === "string") return value.trim() !== "";
  if (Array.isArray(value)) return value.some(hasDraftValues);
  if (value && typeof value === "object") return Object.values(value).some(hasDraftValues);
  return false;
}

function practiceCatalogState(examKey, studentName = currentStudentName) {
  const data = DATASETS[examKey] || { problem_groups: [] };
  const sourceGroups = data.problem_groups || [];
  const useLiveState = examKey === currentExamKey;
  const snapshot = useLiveState ? progress : loadProgressSnapshot(examKey, studentName);
  const drafts = useLiveState ? answerDrafts : loadDraftSnapshot(examKey, studentName);
  const total = sourceGroups.reduce((sum, group) => sum + (group.sub_problems || []).length, 0);
  const completed = sourceGroups.reduce((sum, group, groupIndex) => sum + (group.sub_problems || [])
    .filter((_, subIndex) => snapshot[`group-${group.group_number || groupIndex + 1}-${subIndex}`]?.correct === true).length, 0);
  const hasDraft = hasDraftValues(drafts);
  const status = completed >= total && total > 0
    ? "完了"
    : completed > 0 || hasDraft
    ? "学習中"
    : "未着手";
  return {
    mode: "practice",
    total,
    completed,
    hasDraft,
    status,
    actionLabel: status === "完了" ? "見直す" : status === "学習中" ? "続きから解く" : "この演習を開く",
  };
}

function isQuestionAnswered(question, answers = {}) {
  const value = answers?.[question.id];
  if (question.type === "numeric") {
    return Array.isArray(value) && value.length === question.prompts.length
      && value.every((entry) => normalize(entry) !== "");
  }
  return Array.isArray(value) ? value.length > 0 : typeof value === "number";
}

function safeStorageObject(key) {
  const value = readJson(key, null);
  return value && typeof value === "object" && !Array.isArray(value) ? value : null;
}

function miniCatalogState(exam) {
  const activeSnapshot = safeStorageObject(`math-mini-exam:${exam.id}:active`);
  const resultSnapshot = safeStorageObject(`math-mini-exam:${exam.id}:last-result`);
  const active = activeSnapshot?.status === "active" ? activeSnapshot : null;
  const result = resultSnapshot && Number.isFinite(Number(resultSnapshot.score)) ? resultSnapshot : null;
  const total = (exam.groups || []).reduce((sum, group) => sum + (group.questions || []).length, 0);
  const answered = active
    ? (exam.groups || []).flatMap((group) => group.questions || [])
      .filter((question) => isQuestionAnswered(question, active.answers)).length
    : 0;
  const status = active ? "保存中" : result ? "受験済み" : "未受験";
  return {
    mode: "mini",
    total,
    answered,
    active,
    result,
    status,
    score: result ? Number(result.score) : null,
    actionLabel: active ? "続きから再開" : result ? "結果を確認／再受験" : "試験を開く",
  };
}

function catalogStateForExam(examKey, studentName = currentStudentName) {
  return isMiniKey(examKey)
    ? miniCatalogState(MINI_EXAMS[examKey])
    : practiceCatalogState(examKey, studentName);
}

function schoolCatalogSummary(school, studentName = currentStudentName) {
  const states = (school.exams || [])
    .filter((exam) => hasExamData(exam.key))
    .map((exam) => catalogStateForExam(exam.key, studentName));
  const isMini = states.some((state) => state.mode === "mini");
  const counts = states.reduce((result, state) => {
    result[state.status] = (result[state.status] || 0) + 1;
    return result;
  }, {});
  return {
    total: states.length,
    counts,
    mode: isMini ? "mini" : "practice",
    label: isMini
      ? `${states.length}回・受験済み${counts["受験済み"] || 0}・保存中${counts["保存中"] || 0}`
      : `${states.length}方式・完了${counts["完了"] || 0}・途中${counts["学習中"] || 0}`,
  };
}

function catalogStateClass(state) {
  if (state.status === "完了" || state.status === "受験済み") return "is-complete";
  if (state.status === "学習中" || state.status === "保存中") return "is-progress";
  return "is-unstarted";
}

function formatCatalogNumber(index) {
  return String(index + 1).padStart(2, "0");
}

function catalogSummaryText(exam, state) {
  if (state.mode === "mini") {
    if (state.status === "保存中") {
      const remaining = state.active?.deadline ? Math.max(0, Math.ceil((state.active.deadline - Date.now()) / 1000)) : null;
      return `全${Object.keys(MINI_EXAMS).length}回・第${exam.seriesNumber}回 保存中${remaining === null ? "" : `・残り${formatTimeLabel(remaining)}`}`;
    }
    if (state.status === "受験済み") return `全${Object.keys(MINI_EXAMS).length}回・第${exam.seriesNumber}回 前回${state.score}/100点`;
    return `全${Object.keys(MINI_EXAMS).length}回・第${exam.seriesNumber}回 未受験`;
  }
  return `全${AVAILABLE_EXAMS.length}セット・現在 ${state.completed}/${state.total}小問完了`;
}

function formatTimeLabel(seconds) {
  const safe = Math.max(0, Number(seconds) || 0);
  return `${Math.floor(safe / 60)}:${String(safe % 60).padStart(2, "0")}`;
}

function catalogProgressText(exam, state) {
  if (state.mode === "mini") {
    if (state.status === "保存中") return `${state.answered}/${state.total}問回答`;
    if (state.status === "受験済み") return `前回 ${state.score}/${exam.totalPoints}点`;
    return `${exam.durationMinutes}分・${exam.totalPoints}点・${state.total}小問`;
  }
  return `${state.completed}/${state.total}小問完了`;
}

function truncateTitle(title = "", max = 10) {
  return title.length > max ? `${title.slice(0, max)}…` : title;
}

function practiceGroupState(group, groupIndex) {
  const subs = group.sub_problems || [];
  const completed = subs.filter((_, subIndex) => progress[subKey(groupIndex, subIndex)]?.correct === true).length;
  const hasDraft = hasDraftValues(answerDrafts[groupDraftKey(groupIndex)]);
  const total = subs.length;
  const status = completed >= total && total > 0
    ? "完了"
    : hasDraft
    ? "入力中"
    : completed > 0
    ? "学習中"
    : "未着手";
  const stateClass = status === "完了"
    ? "is-complete"
    : status === "入力中"
    ? "is-draft"
    : status === "学習中"
    ? "is-progress"
    : "is-unstarted";
  return {
    total,
    completed,
    hasDraft,
    status,
    stateClass,
    nextAction: status === "完了" ? "見直す" : status === "未着手" ? "最初の問題へ" : "未入力から続ける",
  };
}

function renderGroups() {
  $("#groupCount").textContent = `${groups.length}題`;
  $("#groupList").innerHTML = groups.map((group, index) => {
    const groupState = practiceGroupState(group, index);
    const selected = index === currentGroup;
    const selectedText = selected ? "・選択中" : "";
    return `<button class="group-item ${selected ? "active" : ""} ${groupState.stateClass}" data-group="${index}" type="button"
      ${selected ? 'aria-current="step"' : ""}
      aria-label="${escapeHtml(`大問${group.group_number} ${group.title} ${groupState.status} ${groupState.completed}/${groupState.total}小問完了${selectedText}`)}">
      <span class="group-head"><span class="num">GROUP ${formatCatalogNumber(index)}</span><span class="group-status">${groupState.status}${selectedText}</span></span>
      <span class="name">${escapeHtml(group.title)}</span>
      <span class="group-progress"><span>${groupState.completed}/${groupState.total}小問完了</span><span>次: ${groupState.nextAction}</span></span>
    </button>`;
  }).join("");
  $$("[data-group]").forEach((button) => {
    button.addEventListener("click", () => {
      currentGroup = Number(button.dataset.group);
      ensureAnswersForGroup();
      groupListOpen = false;
      render();
      $("#groupTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  const current = groups[currentGroup];
  const summaryEl = $("#groupSummaryText");
  if (summaryEl) {
    const currentState = current ? practiceGroupState(current, currentGroup) : null;
    summaryEl.innerHTML = current && currentState
      ? `<span class="group-summary-title">大問${escapeHtml(current.group_number)}・${escapeHtml(truncateTitle(current.title))}</span><span class="group-summary-state">${escapeHtml(currentState.status)}・${currentState.completed}/${currentState.total}完了</span>`
      : "";
  }
  $("#groupListToggle")?.setAttribute("aria-expanded", String(groupListOpen));
  $("#groupPanel")?.classList.toggle("list-open", groupListOpen);
}

function renderProgress() {
  const done = completedCount();
  const total = totalCount();
  $("#progressText").textContent = `${done} / ${total} 小問完了`;
  $("#progressFill").style.width = total ? `${Math.round((done / total) * 100)}%` : "0%";
}

function renderStudentMenu() {
  const sel = $("#studentSel");
  const sharedMode = Boolean(cloud?.isEnabled());
  sel.innerHTML = [`<option value="">ゲスト（記録なし）</option>`]
    .concat(students.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`))
    .concat([`<option value="__add__">＋ 新しい生徒を追加…</option>`])
    .join("");
  sel.value = students.includes(currentStudentName) ? currentStudentName : "";
  if (sel.value !== currentStudentName) setCurrentStudent("");

  const hasStudent = Boolean(currentStudentName);
  sel.disabled = sharedMode;
  $("#studentManage").hidden = sharedMode;
  $("#renameStudentBtn").disabled = sharedMode || !hasStudent;
  $("#deleteStudentBtn").disabled = sharedMode || !hasStudent;
  $("#studentHint").textContent = sharedMode
    ? `${currentStudentName} さんとして学習中です。進捗はクラウドに保存されます。`
    : hasStudent
    ? `${currentStudentName} さんの進捗を保存中です。`
    : "ゲスト：記録は保存されません。生徒を選ぶと進捗が残ります。";
  // 折りたたみ内のstudentHintだけだと初見の生徒が気づかず進捗を失うため、
  // トップバーに常設のゲスト通知も出す（開かなくても見える）。
  $("#guestNotice").classList.toggle("hidden", sharedMode || hasStudent);
}

function refreshStudentView() {
  ensureAnswersForGroup();
  render();
}

function showAddStudentInput() {
  const input = $("#newStudent");
  input.classList.remove("hidden-input");
  input.focus();
}

function addStudent() {
  const input = $("#newStudent");
  if (input.classList.contains("hidden-input")) {
    showAddStudentInput();
    return;
  }
  const name = normalizeStudentName(input.value);
  if (!name) {
    input.focus();
    return;
  }
  if (!students.includes(name)) {
    students.push(name);
    students.sort((a, b) => a.localeCompare(b, "ja"));
    saveStudents();
  }
  input.value = "";
  input.classList.add("hidden-input");
  setCurrentStudent(name);
  refreshStudentView();
}

function renameStudent() {
  const oldName = currentStudentName;
  if (!oldName) return;
  const nextName = normalizeStudentName(prompt("新しい生徒名を入力してください。", oldName) || "");
  if (!nextName || nextName === oldName) return;

  const oldProgress = loadProgressFor(oldName);
  const nextProgress = loadProgressFor(nextName);
  const mergedProgress = { ...oldProgress, ...nextProgress };

  students = students.filter((name) => name !== oldName);
  if (!students.includes(nextName)) students.push(nextName);
  students.sort((a, b) => a.localeCompare(b, "ja"));
  saveStudents();
  writeJson(progressKeyFor(nextName), mergedProgress);
  localStorage.removeItem(progressKeyFor(oldName));
  setCurrentStudent(nextName);
  refreshStudentView();
}

function deleteStudent() {
  const name = currentStudentName;
  if (!name) return;
  if (!confirm(`${name} さんの進捗記録を削除しますか。`)) return;
  students = students.filter((student) => student !== name);
  saveStudents();
  localStorage.removeItem(progressKeyFor(name));
  setCurrentStudent("");
  refreshStudentView();
}

function renderField(field) {
  const values = answers[field.uid] || [];
  const cells = values.map((value, cellIndex) => {
    const subIndex = Number(field.uid.split("-")[1]);
    const checked = isSubChecked(subIndex);
    const state = checked ? (isFieldCorrect(field) ? "correct" : "wrong") : "";
    const isActive = active && active.uid === field.uid && active.cellIndex === cellIndex;
    // 正誤は枠線・背景色だけでなくaria-labelにも反映し、色に頼らず伝わるようにする。
    const stateLabel = state === "correct" ? "・正解" : state === "wrong" ? "・不正解" : "";
    return `<button class="cell ${state} ${isActive ? "active" : ""}" type="button"
      data-cell="${field.uid}" data-cell-index="${cellIndex}" aria-label="${escapeHtml(field.title)} ${cellIndex + 1}マス目${stateLabel}">${escapeHtml(value)}</button>`;
  }).join("");
  return `<div class="field">
    <div class="flabel">${escapeHtml(field.title || "空欄")}</div>
    <div class="cells">${cells}</div>
  </div>`;
}

function detailStepsForSub(group, sub) {
  const raw = DETAIL_TEXTS[currentExamKey]?.[detailKey(group, sub)] || fallbackDetail(sub);
  return Array.isArray(raw) ? raw : Array.isArray(raw.steps) ? raw.steps : fallbackDetail(sub);
}

function detailStepLabel(stepIndex, totalSteps) {
  if (totalSteps <= 1) return DETAIL_STEP_LABELS[0];
  if (stepIndex === totalSteps - 1) return DETAIL_STEP_LABELS[3];
  const levelIndex = Math.min(DETAIL_STEP_LABELS.length - 2, Math.floor(stepIndex * (DETAIL_STEP_LABELS.length - 1) / totalSteps));
  return DETAIL_STEP_LABELS[levelIndex];
}

function subResult(subIndex) {
  return checkedSubs[subKey(currentGroup, subIndex)] || null;
}

function isSubChecked(subIndex) {
  return Boolean(subResult(subIndex));
}

function activeSubIndex() {
  const entry = activeEntry();
  return entry ? entry.subIndex : null;
}

function gradeSubProblem(subIndex) {
  const group = groups[currentGroup];
  const sub = group.sub_problems[subIndex];
  if (!sub) return null;
  const fields = createViewFields(currentGroup, subIndex, sub);
  const blank = fields.some((field) => !isFieldFilled(field));
  if (blank) return null;
  const correctFields = fields.filter(isFieldCorrect).length;
  const result = {
    checked: true,
    correct: correctFields === fields.length,
    correctFields,
    total: fields.length,
    at: new Date().toISOString(),
  };
  checkedSubs[subKey(currentGroup, subIndex)] = result;
  graded = Object.keys(checkedSubs).length > 0;
  if (result.correct) {
    const key = subKey(currentGroup, subIndex);
    progress[key] = { ...(progress[key] || {}), correct: true, at: result.at };
  }
  return result;
}

function invalidateSubCheck(subIndex) {
  if (subIndex == null) return;
  delete checkedSubs[subKey(currentGroup, subIndex)];
  graded = Object.keys(checkedSubs).length > 0;
}

function focusSubFirstBlank(subIndex) {
  const blank = fieldEntries().find(({ field, cellIndex, subIndex: entrySubIndex }) =>
    entrySubIndex === subIndex && !answers[field.uid]?.[cellIndex]
  );
  if (!blank) return;
  active = { uid: blank.field.uid, cellIndex: blank.cellIndex };
  renderProblem();
  renderActiveLabel();
  focusActiveCell();
}

function renderSubProblem(sub, subIndex) {
  const fields = createViewFields(currentGroup, subIndex, sub);
  const filled = fields.filter(isFieldFilled).length;
  const result = subResult(subIndex);
  const isCorrect = result?.correct;
  const isWrong = result && !result.correct;
  const resultText = !result
    ? "未確認"
    : result.correct
      ? "正解です"
      : `${result.correctFields}/${result.total} 正解・入力内容を見直してください`;
  const resultClass = !result ? "pending" : result.correct ? "ok" : "ng";
  const canShowSolution = !$("#hideSolutions").checked
    || Boolean(result);
  const solutionButton = canShowSolution
    ? `<button class="sub-solution-button ghost" type="button" data-open-solution="${subIndex}">解説を見る</button>`
    : "";
  return `<article class="sub-card ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}" data-sub="${subIndex}">
    <div class="sub-head">
      <div class="sub-label">${escapeHtml(sub.label)}</div>
      <div class="sub-meta">${filled}/${fields.length} 入力</div>
    </div>
    <div class="sub-stem"><p>${mdLite(sub.stem_md)}</p></div>
    <div class="fields">${fields.map(renderField).join("")}</div>
    <div class="sub-checkbar">
      <span class="check-result ${resultClass}" aria-live="polite">${resultText}</span>
      <button class="sub-check-button ${result ? "ghost" : "primary"}" type="button" data-check-sub="${subIndex}" ${filled < fields.length ? "disabled" : ""}>
        ${result ? "再確認" : "答えを確認"}
      </button>
      ${solutionButton}
    </div>
  </article>`;
}

function renderProblem() {
  const group = groups[currentGroup];
  $("#groupMeta").textContent = `GROUP ${group.group_number} / ${group.source_year}`;
  $("#groupTitle").textContent = group.title;
  $("#problemPosition").textContent = `大問 ${currentGroup + 1} / ${groups.length}`;
  $("#prevGroupBtn").disabled = currentGroup <= 0;
  $("#nextGroupBtn").disabled = currentGroup >= groups.length - 1;
  $("#topicTag").textContent = group.topic_tag || "数学";
  $("#groupStem").innerHTML = `<p>${mdLite(group.stem_md || "")}</p>`;
  $("#subList").innerHTML = (group.sub_problems || []).map(renderSubProblem).join("");
  bindCells();
  bindSubChecks();
  bindSolutionButtons();
  renderMath($("#groupStem"));
  renderMath($("#subList"));
}

function bindCells() {
  $$(".cell").forEach((cell) => {
    cell.addEventListener("click", () => {
      active = { uid: cell.dataset.cell, cellIndex: Number(cell.dataset.cellIndex) };
      keypadOpen = true;
      renderProblem();
      renderKeypad();
      renderActiveLabel();
      focusActiveCell();
    });
  });
}

function focusActiveCell() {
  if (!active) return;
  keypadOpen = true;
  renderKeypad();
  const cell = document.querySelector(`[data-cell="${CSS.escape(active.uid)}"][data-cell-index="${active.cellIndex}"]`);
  cell?.focus();
}

function renderKeypad() {
  // 最頻出の「次へ」を右手親指の最良位置（右下・span3）に置き、
  // 破壊的な「全部消す」は左上に隔離して誤タップ事故を防ぐ（フィッツの法則）。
  const keys = ["消去", "7", "8", "9", "-", "4", "5", "6", "⌫", "1", "2", "3", "0", "次へ"];
  const keyLabels = { "消去": "全部消す" };
  const keyAria = { "消去": "この欄を消去" };
  $("#keypad").innerHTML = keys.map((key) => {
    const wide = key === "次へ" ? "wide3" : "";
    const aria = keyAria[key] ? ` aria-label="${keyAria[key]}"` : "";
    return `<button class="${wide}" type="button" data-key="${key}"${aria}>${keyLabels[key] || key}</button>`;
  }).join("");
  $$("[data-key]").forEach((button) => {
    button.addEventListener("click", () => handleKey(button.dataset.key));
  });
  const panel = $("#practiceKeypadPanel");
  const toggle = $("#keypadToggle");
  panel?.classList.toggle("collapsed", !keypadOpen);
  $("#practiceMain")?.classList.toggle("keypad-open", keypadOpen);
  if (toggle) {
    toggle.setAttribute("aria-expanded", String(keypadOpen));
    toggle.textContent = keypadOpen ? "キーパッドを閉じる" : "数字を入力";
  }
}

function activeEntry() {
  if (!active) return null;
  return fieldEntries().find(({ field, cellIndex }) => field.uid === active.uid && cellIndex === active.cellIndex) || null;
}

function renderActiveLabel() {
  if (!active) {
    $("#activeLabel").textContent = "マスを選択してください";
    return;
  }
  const entry = activeEntry();
  const box = entry?.field.labels?.[active.cellIndex] || `${active.cellIndex + 1}マス目`;
  $("#activeLabel").textContent = entry
    ? `大問${groups[currentGroup].group_number} ${entry.sub.label} / ${box}`
    : `${active.uid.replaceAll("-", ".")} / ${active.cellIndex + 1}マス目`;
}

function handleKey(key) {
  if (!active) return;
  const editedSubIndex = activeSubIndex();
  const changesAnswer = key !== "次へ";
  if (changesAnswer) invalidateSubCheck(editedSubIndex);
  const cells = answers[active.uid];
  if (!cells) return;
  if (key === "⌫") {
    cells[active.cellIndex] = "";
    movePrevIfEmpty();
  } else if (key === "消去") {
    answers[active.uid] = cells.map(() => "");
    active.cellIndex = 0;
  } else if (key === "次へ") {
    moveNextCell();
  } else {
    cells[active.cellIndex] = key;
    moveNextCell();
  }
  persistCurrentAnswers();
  if (changesAnswer && $("#instantCheck").checked && editedSubIndex != null) {
    gradeSubProblem(editedSubIndex);
    saveProgress();
  }
  renderProblem();
  renderGroups();
  renderProgress();
  renderContinuePanel();
  renderScore(true);
  renderActiveLabel();
}

function moveNextCell() {
  if (!active) return;
  const cells = answers[active.uid] || [];
  if (active.cellIndex < cells.length - 1) {
    active.cellIndex += 1;
    return;
  }
  const ids = Object.keys(answers);
  const idx = ids.indexOf(active.uid);
  if (idx >= 0 && idx < ids.length - 1) {
    active = { uid: ids[idx + 1], cellIndex: 0 };
  }
}

function movePrevIfEmpty() {
  if (!active) return;
  if (active.cellIndex > 0) active.cellIndex -= 1;
}

function gradeCurrent() {
  checkedSubs = {};
  graded = false;
  const group = groups[currentGroup];
  (group.sub_problems || []).forEach((sub, subIndex) => {
    gradeSubProblem(subIndex);
  });
  saveProgress();
  persistCurrentAnswers();
  render();
}

function groupResults() {
  const group = groups[currentGroup];
  return (group.sub_problems || []).map((sub, subIndex) => {
    const fields = createViewFields(currentGroup, subIndex, sub);
    const checked = subResult(subIndex);
    const correctFields = fields.filter(isFieldCorrect).length;
    return {
      sub,
      subIndex,
      fields,
      correctFields,
      total: fields.length,
      checked: Boolean(checked),
      correct: Boolean(checked?.correct),
    };
  });
}

function anyBlankField() {
  return fieldEntries().some(({ field, cellIndex }) => !answers[field.uid]?.[cellIndex]);
}

function anyWrongField() {
  return groupResults().some((result) => result.checked && !result.correct);
}

function renderNextIssueBtn() {
  const button = $("#nextIssueBtn");
  const hasIssue = graded ? anyWrongField() : anyBlankField();
  button.disabled = !hasIssue;
  button.textContent = graded ? "次の誤答へ" : "次の未入力へ";
}

function bindSubChecks() {
  $$('[data-check-sub]').forEach((button) => {
    button.addEventListener("click", () => checkSubProblem(Number(button.dataset.checkSub)));
  });
}

function bindSolutionButtons() {
  $$("[data-open-solution]").forEach((button) => {
    button.addEventListener("click", () => {
      openSolutionModal(currentGroup, Number(button.dataset.openSolution));
    });
  });
}

function checkSubProblem(subIndex) {
  const result = gradeSubProblem(subIndex);
  if (!result) {
    focusSubFirstBlank(subIndex);
    return;
  }
  saveProgress();
  render();
  const card = document.querySelector(`[data-sub="${subIndex}"]`);
  card?.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function movePrevCell() {
  if (!active) return;
  if (active.cellIndex > 0) {
    active.cellIndex -= 1;
    return;
  }
  const ids = Object.keys(answers);
  const idx = ids.indexOf(active.uid);
  if (idx > 0) {
    const previousUid = ids[idx - 1];
    active = { uid: previousUid, cellIndex: Math.max(0, (answers[previousUid] || []).length - 1) };
  }
}

function renderScore(forceBlank = false) {
  if (!graded && forceBlank) {
    $("#scoreBox").innerHTML = `<span class="score-main">—</span><span class="score-sub">未採点</span>`;
    $("#resultList").innerHTML = "";
    $("#gradeBtn").textContent = "大問全体を確認";
    renderNextIssueBtn();
    return;
  }
  const results = groupResults();
  const correct = results.filter((r) => r.correct).length;
  const checked = results.filter((r) => r.checked).length;
  const total = results.length;
  $("#gradeBtn").textContent = graded ? "大問全体を再確認" : "大問全体を確認";
  renderNextIssueBtn();
  const scoreLabel = checked < total
    ? `確認済み ${checked}/${total}小問`
    : `正答率 ${Math.round((correct / total) * 100)}%`;
  $("#scoreBox").innerHTML = `<span class="score-main">${correct}/${checked || 0}</span><span class="score-sub">${scoreLabel}</span>`;
  // 個別の正誤は各小問カードが正とする（ゲシュタルト：閉合の重複を避ける）。
  // ここは集計のみを示し、行は詳しい正誤説明を繰り返さず該当カードへの短いジャンプナビとして扱う。
  $("#resultList").innerHTML = results.map((r) => {
    const state = !r.checked ? "pending" : r.correct ? "ok" : "ng";
    const label = !r.checked ? "未確認" : r.correct ? "正解" : `${r.correctFields}/${r.total}`;
    return `<button class="result-row" type="button" data-jump-sub="${r.subIndex}" aria-label="${escapeHtml(r.sub.label)}へ移動（${label}）">
      <span>${escapeHtml(r.sub.label)}</span>
      <span class="result-row-status"><span class="${state}">${label}</span><span class="result-row-arrow" aria-hidden="true">▸</span></span>
    </button>`;
  }).join("");
  bindResultRows();
}

function bindResultRows() {
  $$("[data-jump-sub]").forEach((row) => {
    row.addEventListener("click", () => {
      const card = document.querySelector(`[data-sub="${row.dataset.jumpSub}"]`);
      card?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
}

function answerSummary(sub) {
  return (sub.answer_fields || []).flatMap((field) => {
    const boxes = field.boxes || [...(field.num_boxes || []), ...(field.den_boxes || [])];
    if (!boxes.length) return [];
    return [`<span class="answer-chip">${escapeHtml(boxes.join(""))} = ${escapeHtml(field.value)}</span>`];
  }).join("");
}

function detailKey(group, sub) {
  return `${group.group_number}-${sub.label}`;
}

function fallbackDetail(sub) {
  return [
    "まず問題文から、求める量と条件を分けて確認する。",
    "次に使う公式・定理を決め、式を1本ずつ立てる。",
    "最後に空欄の桁数・符号・分母分子の位置に合わせて答えを入れる。",
    sub.solution_md || ""
  ].filter(Boolean);
}

function detailStepsHtml(group, sub) {
  const steps = detailStepsForSub(group, sub);
  const shown = Math.min(modalDetailShown, steps.length);
  const nextNumber = Math.min(shown + 1, steps.length);
  const revealed = steps.slice(0, shown).map((step, stepIndex) => `
    <li>
      <span class="detail-step-label">L${Math.min(stepIndex + 1, 4)} ${escapeHtml(detailStepLabel(stepIndex, steps.length))}</span>
      <p>${mdLite(step)}</p>
    </li>
  `).join("");
  const buttonLabel = shown >= steps.length
    ? "最後まで表示しました"
    : `${shown === 0 ? "最初のステップを見る" : "次のステップを見る"} (${nextNumber}/${steps.length})`;
  return `
    <div class="detail-step-toolbar">
      <button class="detail-step-button" type="button" data-reveal-detail ${shown >= steps.length ? "disabled" : ""}>${buttonLabel}</button>
      <span class="detail-step-status">${shown}/${steps.length} 段階表示中</span>
    </div>
    <div class="detail-steps">${revealed || `<p class="detail-empty">ボタンを押すと、詳しい解き方を1段階ずつ確認できます。</p>`}</div>
  `;
}

function renderSolutionModalBody(group, sub) {
  $("#modalMeta").textContent = `GROUP ${group.group_number} / ${sub.label}`;
  $("#modalTitle").textContent = `${group.title} ${sub.label}`;
  $("#modalBody").innerHTML = `
    <div class="detail-grid">
      <section class="detail-section">
        <h3>問題</h3>
        <p>${mdLite(sub.stem_md || "")}</p>
      </section>
      <section class="detail-section">
        <h3>答え</h3>
        <div>${answerSummary(sub) || "—"}</div>
      </section>
      <section class="detail-section">
        <h3>解説</h3>
        ${detailStepsHtml(group, sub)}
      </section>
    </div>
  `;
  $("[data-reveal-detail]")?.addEventListener("click", () => {
    modalDetailShown += 1;
    renderSolutionModalBody(group, sub);
  });
  renderMath($("#solutionModal"));
}

function openSolutionModal(groupIndex, subIndex) {
  const group = groups[groupIndex];
  const sub = group.sub_problems[subIndex];
  modalDetailShown = 0;
  renderSolutionModalBody(group, sub);
  modalReturnFocus = document.activeElement;
  $("#solutionModal").classList.remove("hidden");
  $("#modalCloseBtn").focus();
}

function closeSolutionModal() {
  $("#solutionModal").classList.add("hidden");
  if (modalReturnFocus instanceof HTMLElement) modalReturnFocus.focus();
  modalReturnFocus = null;
}

function clearCurrent() {
  if (!confirm("この大問の入力内容をすべて消します。正解済みの進捗（完了記録）は保持されます。")) return;
  answerDrafts[groupDraftKey(currentGroup)] = {};
  saveDrafts();
  ensureAnswersForGroup();
  render();
}

function firstUnfinishedGroupIndex() {
  const index = groups.findIndex((group, groupIndex) =>
    (group.sub_problems || []).some((_, subIndex) => !progress[subKey(groupIndex, subIndex)]?.correct));
  return index === -1 ? 0 : index;
}

function continueStudying() {
  const hasUnfinished = completedCount() < totalCount();
  currentGroup = firstUnfinishedGroupIndex();
  ensureAnswersForGroup();
  render();
  if (hasUnfinished) focusFirstBlank();
  else $("#groupTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openLearningPicker() {
  const toggle = $(".source-switch-toggle");
  if (!toggle) return;
  keypadOpen = false;
  $("#practiceKeypadPanel")?.classList.add("collapsed");
  $("#examKeypadPanel")?.classList.add("collapsed");
  $("#keypadToggle")?.setAttribute("aria-expanded", "false");
  $("#examKeypadToggle")?.setAttribute("aria-expanded", "false");
  if (isMiniKey(currentExamKey)) examFlow.closeKeypad?.();
  toggle.open = true;
  toggle.scrollIntoView({ behavior: "smooth", block: "start" });
  toggle.querySelector('[data-exam][aria-selected="true"]')?.focus();
}

function renderContinuePanel() {
  const done = completedCount();
  const total = totalCount();
  const hint = $("#continueHint");
  const btn = $("#continueBtn");
  const nextBtn = $("#nextLearningBtn");
  if (nextBtn) nextBtn.classList.add("hidden");
  if (!total) {
    hint.textContent = "";
    return;
  }
  // 初回訪問（進捗ゼロ）は「最初に選ぶべき行動」を明示する（ヒックの法則）。
  if (done === 0) {
    btn.textContent = "▶ 最初の問題へ進む";
    hint.textContent = "最初の入力欄へ移動します。";
    return;
  }
  if (done >= total) {
    btn.textContent = "▶ 最初の大問を見直す";
    hint.textContent = "全問完了しました。次の学習を選ぶか、好きな大問を見直せます。";
    nextBtn?.classList.remove("hidden");
    return;
  }
  btn.textContent = "▶ つづきから解く";
  const target = groups[firstUnfinishedGroupIndex()];
  hint.textContent = target ? `次は [${target.group_number}] ${target.title} です。` : "";
}

function resetProgress() {
  const target = currentStudentName ? `${currentStudentName} さんの進捗` : "ゲストの画面内進捗";
  if (!confirm(`${target}をリセットしますか。`)) return;
  progress = {};
  answerDrafts = {};
  saveProgress();
  saveDrafts();
  ensureAnswersForGroup();
  render();
}

function focusFirstBlank() {
  const blank = fieldEntries().find(({ field, cellIndex }) => !answers[field.uid]?.[cellIndex]);
  if (!blank) return;
  active = { uid: blank.field.uid, cellIndex: blank.cellIndex };
  renderProblem();
  renderActiveLabel();
  focusActiveCell();
}

function focusFirstWrong() {
  if (!graded) return;
  const wrong = fieldEntries().find(({ field }) => !isFieldCorrect(field));
  if (!wrong) return;
  active = { uid: wrong.field.uid, cellIndex: wrong.cellIndex };
  renderProblem();
  renderActiveLabel();
  focusActiveCell();
}

function focusNextIssue() {
  if (graded) focusFirstWrong();
  else focusFirstBlank();
}

function moveGroup(offset) {
  const next = currentGroup + offset;
  if (next < 0 || next >= groups.length) return;
  currentGroup = next;
  ensureAnswersForGroup();
  render();
  $("#groupTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handlePhysicalKey(event) {
  if (isMiniKey(currentExamKey)) return;
  const target = event.target;
  if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement) return;
  if (!active || !$("#solutionModal").classList.contains("hidden")) return;
  if (/^[0-9]$/.test(event.key)) {
    event.preventDefault();
    handleKey(event.key);
  } else if (event.key === "-" || event.key === "Minus") {
    event.preventDefault();
    handleKey("-");
  } else if (event.key === "Backspace") {
    event.preventDefault();
    handleKey("⌫");
  } else if (event.key === "Delete") {
    event.preventDefault();
    handleKey("消去");
  } else if (event.key === "Enter") {
    event.preventDefault();
    gradeCurrent();
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    moveNextCell();
    renderProblem();
    renderActiveLabel();
    focusActiveCell();
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    movePrevCell();
    renderProblem();
    renderActiveLabel();
    focusActiveCell();
  }
}

function bindStaticEvents() {
  $("#gradeBtn").addEventListener("click", gradeCurrent);
  $("#clearBtn").addEventListener("click", clearCurrent);
  $("#nextIssueBtn").addEventListener("click", focusNextIssue);
  $("#continueBtn").addEventListener("click", continueStudying);
  $("#nextLearningBtn").addEventListener("click", openLearningPicker);
  $("#keypadToggle").addEventListener("click", () => {
    keypadOpen = !keypadOpen;
    renderKeypad();
    if (keypadOpen) focusActiveCell();
  });
  $("#prevGroupBtn").addEventListener("click", () => moveGroup(-1));
  $("#nextGroupBtn").addEventListener("click", () => moveGroup(1));
  $("#groupListToggle").addEventListener("click", () => {
    groupListOpen = !groupListOpen;
    $("#groupListToggle").setAttribute("aria-expanded", String(groupListOpen));
    $("#groupPanel")?.classList.toggle("list-open", groupListOpen);
  });
  $(".source-switch-toggle")?.addEventListener("toggle", (event) => {
    document.body.classList.toggle("catalog-open", event.currentTarget.open);
  });
  $("#resetProgressBtn").addEventListener("click", resetProgress);
  $("#hideSolutions").addEventListener("change", renderProblem);
  $("#studentSel").addEventListener("change", (event) => {
    const value = event.target.value;
    if (value === "__add__") {
      event.target.value = students.includes(currentStudentName) ? currentStudentName : "";
      showAddStudentInput();
      return;
    }
    setCurrentStudent(value);
    refreshStudentView();
  });
  $("#newStudent").addEventListener("keydown", (event) => {
    if (event.key === "Enter") addStudent();
    if (event.key === "Escape") {
      event.currentTarget.value = "";
      event.currentTarget.classList.add("hidden-input");
    }
  });
  $("#renameStudentBtn").addEventListener("click", renameStudent);
  $("#deleteStudentBtn").addEventListener("click", deleteStudent);
  $("#modalCloseBtn").addEventListener("click", closeSolutionModal);
  $("#solutionModal").addEventListener("click", (event) => {
    if (event.target.id === "solutionModal") closeSolutionModal();
  });
  document.addEventListener("keydown", (event) => {
    const modal = $("#solutionModal");
    if (modal.classList.contains("hidden")) return;
    if (event.key === "Escape") {
      closeSolutionModal();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', modal)
      .filter((element) => !element.disabled && element.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  document.addEventListener("keydown", handlePhysicalKey);
}

function render() {
  const miniMode = isMiniKey(currentExamKey);
  document.body.classList.toggle("exam-flow", miniMode);
  $("#practiceMain").classList.toggle("hidden", miniMode);
  $("#examMain").classList.toggle("hidden", !miniMode);
  $("#modeLabel").classList.toggle("hidden", !miniMode);
  renderExamShell();
  if (miniMode) return;
  renderStudentMenu();
  renderGroups();
  renderProgress();
  renderContinuePanel();
  renderProblem();
  renderKeypad();
  renderActiveLabel();
  renderScore(true);
}

document.addEventListener("DOMContentLoaded", async () => {
  cloud = createCloud({
    appId: "teikyo-kakomon",
    getPayload: cloudPayload,
    applyLoaded: applyCloudPayload,
  });
  await cloud.init();
  if (cloud.isEnabled()) {
    currentStudentName = normalizeStudentName(cloud.getSession().student.name);
  }
  if (!isMiniKey(currentExamKey)) migrateLegacyProgress();
  if (currentStudentName && !students.includes(currentStudentName)) {
    students.push(currentStudentName);
    students.sort((a, b) => a.localeCompare(b, "ja"));
    saveStudents();
  }
  progress = loadProgressFor(currentStudentName);
  answerDrafts = loadDraftsFor(currentStudentName);
  await examFlow.initClouds();
  bindStaticEvents();
  if (isMiniKey(currentExamKey)) {
    examFlow.enter(currentExamKey);
  } else {
    ensureAnswersForGroup();
  }
  render();
});

/* ============================================================
   試験モード（旧 math-mini-exam エンジンの統合版）
   - データ: window.MINI_EXAMS（static/mini-data.js）
   - localStorage キーと Supabase appId（math-mini-exam / math-mini-exam:<id>）は
     旧アプリと完全互換。既存の受験データ・生徒別クラウド進捗をそのまま引き継ぐ。
   - 受験画面は演習モードと同じ3カラム構成（大問ナビ／問題カード／採点レール）。
   ============================================================ */
const examFlow = (() => {
  let EXAM = null;
  let state = null;
  let timerId = null;
  let activeInput = null;
  let keypadOpen = false;
  let currentGroupIndex = 0;
  let examGroupListOpen = false;
  const clouds = new Map();

  const storageKey = (exam = EXAM) => `math-mini-exam:${exam.id}:active`;
  const resultKey = (exam = EXAM) => `math-mini-exam:${exam.id}:last-result`;
  const cloudAppId = (exam) => (exam.id === "mini_01" ? "math-mini-exam" : `math-mini-exam:${exam.id}`);
  const currentCloud = () => (EXAM ? clouds.get(EXAM.id) : null);
  const allQuestions = () => EXAM.groups.flatMap((group) => group.questions.map((q) => ({ group, q })));
  const questionCount = () => allQuestions().length;
  const currentQuestions = () => EXAM.groups[currentGroupIndex]?.questions || [];
  const nextExam = () => Object.values(MINI_EXAMS)
    .filter((exam) => exam.seriesNumber > EXAM.seriesNumber)
    .sort((a, b) => a.seriesNumber - b.seriesNumber)[0] || null;

  function readActive() {
    try { return JSON.parse(localStorage.getItem(storageKey()) || "null"); } catch { return null; }
  }

  function saveActive() {
    localStorage.setItem(storageKey(), JSON.stringify(state));
    currentCloud()?.queueSave();
  }

  function cloudPayloadFor(exam) {
    let active = null;
    let result = null;
    try { active = JSON.parse(localStorage.getItem(storageKey(exam)) || "null"); } catch { /* ignore */ }
    try { result = JSON.parse(localStorage.getItem(resultKey(exam)) || "null"); } catch { /* ignore */ }
    return { version: 1, active, result };
  }

  function applyCloudPayloadFor(exam, payload) {
    if (!payload || typeof payload !== "object") return;
    if (payload.active && typeof payload.active === "object") {
      localStorage.setItem(storageKey(exam), JSON.stringify(payload.active));
    } else {
      localStorage.removeItem(storageKey(exam));
    }
    if (payload.result && typeof payload.result === "object") {
      localStorage.setItem(resultKey(exam), JSON.stringify(payload.result));
    }
  }

  function updateMode(label) { $("#modeLabel").textContent = label; }

  function formatTime(seconds) {
    const safe = Math.max(0, seconds);
    return `${String(Math.floor(safe / 60)).padStart(2, "0")}:${String(safe % 60).padStart(2, "0")}`;
  }

  function renderIntro() {
    $("#introEyebrow").textContent = `${EXAM.durationMinutes} MINUTES / ${EXAM.totalPoints} POINTS`;
    $("#examTitle").textContent = EXAM.title;
    $("#introSummary").textContent = `${EXAM.durationMinutes}分・${EXAM.totalPoints}点・${questionCount()}小問`;
    $("#examNote").textContent = EXAM.note;
    const seriesTotal = Number.isInteger(EXAM.seriesTotal)
      ? EXAM.seriesTotal
      : Object.keys(MINI_EXAMS).length;
    $("#seriesInfo").textContent = seriesTotal
      ? `全${seriesTotal}回公開中（第${EXAM.seriesNumber}回）`
      : `第${EXAM.seriesNumber}回公開中`;
    $("#unitList").textContent = EXAM.units.join(" ／ ");
    $("#durationInfo").textContent = `${EXAM.durationMinutes}分`;
    $("#structureInfo").textContent = `${EXAM.units.length}単元・${questionCount()}小問`;
    // 生徒名がクラウド／practiceモード側で既に確定している場合は、常時編集欄を出さず表示名だけ示す。
    const nameValue = $("#studentName").value.trim();
    $("#nameDisplay").classList.toggle("hidden", !nameValue);
    $("#nameFieldLabel").classList.toggle("hidden", Boolean(nameValue));
    if (nameValue) $("#nameDisplayValue").textContent = nameValue;
    const active = readActive();
    if (active?.status === "active") {
      $("#startBtn").textContent = "続きから再開する";
      const remaining = Math.max(0, Math.ceil((active.deadline - Date.now()) / 1000));
      $("#resumeHint").textContent = remaining > 0
        ? `前回の受験を保存しています。残り ${formatTime(remaining)}。`
        : "制限時間を過ぎています。回答は保存されています。提出するまで採点されません。";
    } else {
      $("#startBtn").textContent = "試験を開始する";
      $("#resumeHint").textContent = "";
    }
  }

  function showIntro() {
    $("#exam").classList.add("hidden");
    $("#result").classList.add("hidden");
    $("#intro").classList.remove("hidden");
    document.body.classList.remove("result-mode");
    updateMode("開始前");
    renderExamShell();
    renderIntro();
  }

  function begin() {
    const existing = readActive();
    if (existing?.status === "active") {
      state = existing;
    } else {
      state = { status: "active", startedAt: Date.now(), deadline: Date.now() + EXAM.durationMinutes * 60 * 1000, name: $("#studentName").value.trim() || "ゲスト", answers: {}, groupIndex: 0 };
      saveActive();
    }
    const savedGroupIndex = Number.isInteger(state.groupIndex) ? state.groupIndex : 0;
    const lastGroupIndex = Math.max(0, EXAM.groups.length - 1);
    currentGroupIndex = Math.min(Math.max(savedGroupIndex, 0), lastGroupIndex);
    state.groupIndex = currentGroupIndex;
    saveActive();
    activeInput = null;
    keypadOpen = false;
    $("#intro").classList.add("hidden");
    $("#result").classList.add("hidden");
    $("#exam").classList.remove("hidden");
    document.body.classList.remove("result-mode");
    updateMode("試験中");
    renderExamGroup();
    startTimer();
  }

  function startTimer() {
    clearInterval(timerId);
    const tick = () => {
      const remaining = Math.max(0, Math.ceil((state.deadline - Date.now()) / 1000));
      $("#timer").textContent = formatTime(remaining);
      $("#timer").classList.toggle("urgent", remaining <= 300);
    };
    tick();
    timerId = setInterval(tick, 1000);
  }

  function setExamGroup(index) {
    if (index < 0 || index >= EXAM.groups.length || index === currentGroupIndex) return;
    currentGroupIndex = index;
    if (state?.status === "active") {
      state.groupIndex = currentGroupIndex;
      saveActive();
    }
    activeInput = null;
    keypadOpen = false;
    examGroupListOpen = false;
    renderExamGroup();
    $("#examGroupTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function examGroupState(group) {
    const total = (group.questions || []).length;
    const answered = (group.questions || []).filter((question) => isQuestionAnswered(question, state?.answers)).length;
    const status = answered === 0 ? "未回答" : answered === total ? "回答済み" : "回答中";
    return {
      total,
      answered,
      status,
      stateClass: answered === 0 ? "is-unstarted" : answered === total ? "is-complete" : "is-progress",
    };
  }

  function renderExamGroupList() {
    $("#examGroupCount").textContent = `${EXAM.groups.length}題`;
    $("#examGroupList").innerHTML = EXAM.groups.map((group, index) => {
      const groupState = examGroupState(group);
      const selected = index === currentGroupIndex;
      const selectedText = selected ? "・選択中" : "";
      return `<button class="group-item ${selected ? "active" : ""} ${groupState.stateClass}" data-exam-group="${index}" type="button"
        ${selected ? 'aria-current="step"' : ""}
        aria-label="${escapeHtml(`大問${group.number} ${group.title} ${groupState.status} ${groupState.answered}/${groupState.total}回答${selectedText}`)}">
        <span class="group-head"><span class="num">QUESTION ${formatCatalogNumber(index)}</span><span class="group-status">${groupState.status}${selectedText}</span></span>
        <span class="name">${escapeHtml(group.title)}</span>
        <span class="group-progress"><span>${groupState.answered}/${groupState.total}問回答</span><span>状態: ${groupState.status}</span></span>
      </button>`;
    }).join("");
    const current = EXAM.groups[currentGroupIndex];
    const currentState = current ? examGroupState(current) : null;
    $("#examGroupSummaryText").innerHTML = current && currentState
      ? `<span class="group-summary-title">大問${escapeHtml(current.number)}・${escapeHtml(current.title)}</span><span class="group-summary-state">${currentState.status}・${currentState.answered}/${currentState.total}回答</span>`
      : "";
    $("#examGroupListToggle").setAttribute("aria-expanded", String(examGroupListOpen));
    $("#examGroupPanel").classList.toggle("list-open", examGroupListOpen);
    $$("[data-exam-group]").forEach((button) => {
      button.addEventListener("click", () => setExamGroup(Number(button.dataset.examGroup)));
    });
    renderExamShell();
  }

  function renderExamGroup() {
    const group = EXAM.groups[currentGroupIndex];
    if (!group) return;
    $("#examGroupMeta").textContent = `QUESTION ${group.number} / ${group.points}点`;
    $("#examGroupTitle").textContent = group.title;
    $("#examGroupTag").textContent = group.tag;
    $("#examPosition").textContent = `大問 ${currentGroupIndex + 1} / ${EXAM.groups.length}`;
    $("#examPrevBtn").disabled = currentGroupIndex <= 0;
    $("#examNextBtn").disabled = currentGroupIndex >= EXAM.groups.length - 1;
    const stemHtml = group.stem ? `<div class="stem chamfer">${group.stem}</div>` : "";
    $("#examSheet").innerHTML = stemHtml + group.questions.map(renderQuestion).join("");
    renderExamGroupList();
    updateAnsweredCount();
    bindQuestionEvents();
    renderExamKeypad();
    renderMath($("#examSheet"));
  }

  function renderQuestion(q) {
    const current = state.answers[q.id];
    if (q.type === "numeric") {
      const values = Array.isArray(current) ? current : [];
      return `<article class="sub-card" data-question="${q.id}">
        <div class="sub-head">
          <div class="sub-label">${escapeHtml(q.label)}</div>
          <div class="sub-meta">${q.points}点</div>
        </div>
        <div class="sub-stem">${q.stem}</div>
        <div class="numeric-fields">${q.prompts.map((prompt, index) => `<label><span>${prompt}</span><input inputmode="numeric" autocomplete="off" data-answer-index="${index}" value="${escapeHtml(values[index] || "")}" aria-label="${escapeHtml(prompt.replace(/\$/g, ""))}"></label>`).join("")}</div>
      </article>`;
    }
    const selected = Array.isArray(current) ? current : (typeof current === "number" ? [current] : []);
    return `<article class="sub-card" data-question="${q.id}">
      <div class="sub-head">
        <div class="sub-label">${escapeHtml(q.label)}</div>
        <div class="sub-meta">${q.points}点</div>
      </div>
      <div class="sub-stem">${q.stem}</div>
      <div class="options ${q.type === "multi" ? "multi-options" : ""}">${q.options.map((option, index) => `<button type="button" class="option ${selected.includes(index) ? "selected" : ""}" data-option-index="${index}" aria-pressed="${selected.includes(index)}"><span class="option-mark">${String.fromCharCode(65 + index)}</span><span>${option}</span></button>`).join("")}</div>
      ${q.type === "multi" ? '<p class="hint">複数選択</p>' : ""}
    </article>`;
  }

  function bindQuestionEvents() {
    $$('#examSheet [data-question] input[data-answer-index]').forEach((input) => {
      input.addEventListener("focus", () => {
        activeInput = { qid: input.closest("[data-question]").dataset.question, index: Number(input.dataset.answerIndex) };
        keypadOpen = true;
        renderExamKeypad();
      });
      input.addEventListener("click", () => {
        activeInput = { qid: input.closest("[data-question]").dataset.question, index: Number(input.dataset.answerIndex) };
        keypadOpen = true;
        renderExamKeypad();
      });
      input.addEventListener("input", () => {
        const article = input.closest("[data-question]");
        const q = allQuestions().find(({ q }) => q.id === article.dataset.question).q;
        activeInput = { qid: q.id, index: Number(input.dataset.answerIndex) };
        const values = q.prompts.map((_, index) => article.querySelector(`[data-answer-index="${index}"]`).value);
        state.answers[q.id] = values;
        saveActive();
        updateAnsweredCount();
        renderExamGroupList();
        renderExamKeypad();
      });
    });
    $$('#examSheet [data-question] .option').forEach((button) => button.addEventListener("click", () => {
      const article = button.closest("[data-question]");
      const q = allQuestions().find(({ q }) => q.id === article.dataset.question).q;
      const index = Number(button.dataset.optionIndex);
      if (q.type === "multi") {
        const current = Array.isArray(state.answers[q.id]) ? [...state.answers[q.id]] : [];
        const at = current.indexOf(index);
        if (at >= 0) current.splice(at, 1); else current.push(index);
        current.sort((a, b) => a - b);
        state.answers[q.id] = current;
      } else state.answers[q.id] = index;
      saveActive();
      keypadOpen = false;
      renderExamGroup();
    }));
  }

  function isAnswered(q) {
    return isQuestionAnswered(q, state?.answers);
  }

  function updateAnsweredCount() {
    $("#answeredCount").textContent = `${allQuestions().filter(({ q }) => isAnswered(q)).length} / ${questionCount()} 回答`;
  }

  function activeNumericEntry() {
    if (!activeInput) return null;
    const q = currentQuestions().find((item) => item.id === activeInput.qid);
    if (!q || q.type !== "numeric" || activeInput.index >= q.prompts.length) return null;
    return { q, index: activeInput.index };
  }

  function firstNumericInput() {
    for (const q of currentQuestions()) {
      if (q.type !== "numeric") continue;
      const values = Array.isArray(state.answers[q.id]) ? state.answers[q.id] : [];
      const index = q.prompts.findIndex((_, i) => normalize(values[i]) === "");
      return { q, index: index >= 0 ? index : 0 };
    }
    return null;
  }

  function focusActiveInput() {
    if (!activeInput) return;
    const selector = `#examSheet [data-question="${activeInput.qid}"] input[data-answer-index="${activeInput.index}"]`;
    document.querySelector(selector)?.focus();
  }

  function renderExamKeypad() {
    const entry = activeNumericEntry() || firstNumericInput();
    if (entry && !activeInput) activeInput = { qid: entry.q.id, index: entry.index };
    const current = activeNumericEntry();
    $("#examActiveLabel").textContent = current ? `${current.q.label} / ${current.q.prompts[current.index].replace(/\$/g, "")}` : "数字欄を選択してください";
    // 演習モードと同じ配列（次へ＝右下span3、全部消す＝左上隔離）
    const keys = ["消去", "7", "8", "9", "−", "4", "5", "6", "⌫", "1", "2", "3", "0", "次へ"];
    const keyLabels = { "消去": "全部消す" };
    const keyAria = { "消去": "この欄を消去" };
    $("#examKeypad").innerHTML = keys.map((key) => {
      const wide = key === "次へ" ? "wide3" : "";
      const aria = keyAria[key] ? ` aria-label="${keyAria[key]}"` : "";
      return `<button class="${wide}" type="button" data-exam-key="${key}"${aria} ${current ? "" : "disabled"}>${keyLabels[key] || key}</button>`;
    }).join("");
    $$('[data-exam-key]').forEach((button) => button.addEventListener("click", () => handleExamKey(button.dataset.examKey)));
    const panel = $("#examKeypadPanel");
    const toggle = $("#examKeypadToggle");
    panel?.classList.toggle("collapsed", !keypadOpen);
    $("#exam")?.classList.toggle("keypad-open", keypadOpen);
    if (toggle) {
      toggle.setAttribute("aria-expanded", String(keypadOpen));
      toggle.textContent = keypadOpen ? "キーパッドを閉じる" : "数字を入力";
    }
  }

  function closeKeypad() {
    keypadOpen = false;
    renderExamKeypad();
  }

  function handleExamKey(key) {
    const entry = activeNumericEntry();
    if (!entry) return;
    const values = Array.isArray(state.answers[entry.q.id]) ? [...state.answers[entry.q.id]] : entry.q.prompts.map(() => "");
    let value = String(values[entry.index] || "");
    if (key === "消去") value = "";
    else if (key === "⌫") value = value.slice(0, -1);
    else if (key === "−") value = value.startsWith("-") ? value.slice(1) : `-${value}`;
    else if (key === "次へ") {
      const next = entry.index + 1 < entry.q.prompts.length ? { q: entry.q, index: entry.index + 1 } : nextNumericInput(entry.q.id);
      if (next) activeInput = { qid: next.q.id, index: next.index };
      saveActive();
      renderExamKeypad();
      focusActiveInput();
      return;
    } else if (/^\d$/.test(key)) value += key;
    values[entry.index] = value;
    state.answers[entry.q.id] = values;
    saveActive();
    renderExamGroup();
    focusActiveInput();
  }

  function nextNumericInput(currentQid) {
    const items = currentQuestions().filter((q) => q.type === "numeric");
    const index = items.findIndex((q) => q.id === currentQid);
    return index >= 0 && index + 1 < items.length ? { q: items[index + 1], index: 0 } : null;
  }

  function openSubmitDialog() {
    const unanswered = allQuestions().filter(({ q }) => !isAnswered(q)).length;
    $("#dialogText").textContent = unanswered ? `未回答が${unanswered}問あります。このまま提出しますか？` : "回答を採点して終了します。";
    $("#submitDialog").classList.remove("hidden");
    $("#confirmSubmit").focus();
  }

  function grade(q) {
    const value = state.answers[q.id];
    if (q.type === "numeric") {
      const actual = Array.isArray(value) ? value : [];
      const correct = q.answers.reduce((sum, answer, index) => sum + (normalize(actual[index]) === normalize(answer) ? 1 : 0), 0);
      return { correct, total: q.answers.length, points: q.points * correct / q.answers.length };
    }
    const actual = q.type === "multi" ? (Array.isArray(value) ? [...value].sort((a, b) => a - b) : []) : value;
    const expected = q.type === "multi" ? [...q.answer].sort((a, b) => a - b) : q.answer;
    const correct = JSON.stringify(actual) === JSON.stringify(expected);
    return { correct: correct ? 1 : 0, total: 1, points: correct ? q.points : 0 };
  }

  function submit(auto = false) {
    if (!state || state.status !== "active") return;
    if (!auto && $("#submitDialog").classList.contains("hidden")) { openSubmitDialog(); return; }
    clearInterval(timerId);
    const results = allQuestions().map(({ group, q }) => ({ group, q, result: grade(q) }));
    const total = results.reduce((sum, item) => sum + item.result.points, 0);
    state = { ...state, status: "submitted", submittedAt: Date.now(), score: Math.round(total), results: results.map(({ q, result }) => ({ id: q.id, ...result })) };
    localStorage.removeItem(storageKey());
    localStorage.setItem(resultKey(), JSON.stringify(state));
    currentCloud()?.queueSave();
    $("#submitDialog").classList.add("hidden");
    renderResult(auto);
  }

  function resetAttempt() {
    if (!state || state.status !== "active") return;
    if (!window.confirm("試験を中断して、回答とタイマーをリセットしますか？")) return;
    clearInterval(timerId);
    localStorage.removeItem(storageKey());
    currentCloud()?.queueSave();
    state = null;
    activeInput = null;
    keypadOpen = false;
    showIntro();
  }

  function displayAnswer(q) {
    const value = state.answers[q.id];
    if (q.type === "numeric") return Array.isArray(value) ? value.map((entry) => entry || "—").join(" / ") : "—";
    const indices = q.type === "multi" ? (Array.isArray(value) ? value : []) : (typeof value === "number" ? [value] : []);
    return indices.length ? indices.map((index) => String.fromCharCode(65 + index)).join(", ") : "—";
  }

  function expectedAnswer(q) {
    if (q.type === "numeric") return q.answers.join(" / ");
    const indices = q.type === "multi" ? q.answer : [q.answer];
    return indices.map((index) => String.fromCharCode(65 + index)).join(", ");
  }

  function renderResult(auto) {
    $("#intro").classList.add("hidden");
    $("#exam").classList.add("hidden");
    $("#result").classList.remove("hidden");
    document.body.classList.add("result-mode");
    $(".source-switch-toggle")?.removeAttribute("open");
    updateMode("採点済み");
    $("#score").textContent = state.score;
    $("#scoreTotal").textContent = `/ ${EXAM.totalPoints}点`;
    $("#resultSummary").textContent = `${state.name}さん、${auto ? "時間切れのため自動提出しました。" : "提出を受け付けました。"}`;
    $("#resultSheet").innerHTML = EXAM.groups.map((group) => `<section class="result-group panel"><div class="group-heading"><div><p class="eyebrow">QUESTION ${escapeHtml(group.number)}</p><h2>${escapeHtml(group.title)}</h2></div><span class="tag">${group.points}点</span></div>${group.stem ? `<div class="stem chamfer">${group.stem}</div>` : ""}${group.questions.map((q) => {
      const result = state.results.find((entry) => entry.id === q.id);
      const ok = result.correct === result.total;
      return `<article class="review ${ok ? "correct" : "incorrect"}"><div class="question-head"><span class="question-number">${escapeHtml(q.label)}</span><strong>${ok ? "正解" : "確認"} ${result.points}/${q.points}点</strong></div><div class="question-stem">${q.stem}</div><p><span class="exam-label">あなたの回答</span> ${escapeHtml(displayAnswer(q))}　<span class="exam-label">正答</span> ${escapeHtml(expectedAnswer(q))}</p><details><summary>解説を表示</summary><div class="solution">${q.solution}</div></details></article>`;
    }).join("")}</section>`).join("");
    renderMath($("#resultSheet"));
    const next = nextExam();
    const nextButton = $("#nextExamBtn");
    if (nextButton) {
      nextButton.classList.toggle("hidden", !next);
      nextButton.textContent = next ? `第${next.seriesNumber}回へ進む` : "";
    }
    renderExamShell();
    window.scrollTo({ top: 0, behavior: "auto" });
    $("#resultTitle")?.focus({ preventScroll: true });
  }

  function enter(examId) {
    const nextExam = MINI_EXAMS[examId];
    if (!nextExam) return;
    clearInterval(timerId);
    if (state?.status === "active") saveActive();
    state = null;
    activeInput = null;
    keypadOpen = false;
    currentGroupIndex = 0;
    EXAM = nextExam;
    showIntro();
  }

  function leave() {
    if (!EXAM) return;
    clearInterval(timerId);
    if (state?.status === "active") saveActive();
    state = null;
    activeInput = null;
    keypadOpen = false;
    document.body.classList.remove("result-mode");
    showIntro();
  }

  async function initClouds() {
    for (const exam of Object.values(MINI_EXAMS)) {
      const examCloud = createCloud({
        appId: cloudAppId(exam),
        getPayload: () => cloudPayloadFor(exam),
        applyLoaded: (payload) => applyCloudPayloadFor(exam, payload),
      });
      clouds.set(exam.id, examCloud);
      await examCloud.init();
    }
    const enabledCloud = [...clouds.values()].find((examCloud) => examCloud.isEnabled());
    if (enabledCloud) {
      $("#studentName").value = enabledCloud.getSession().student.name;
      $("#studentName").readOnly = true;
      $("#saveMode").textContent = "生徒別クラウド";
    } else if (currentStudentName) {
      $("#studentName").value = currentStudentName;
    }
  }

  $("#startBtn").addEventListener("click", begin);
  $("#resetBtn").addEventListener("click", resetAttempt);
  $("#submitBtn").addEventListener("click", openSubmitDialog);
  $("#cancelSubmit").addEventListener("click", () => $("#submitDialog").classList.add("hidden"));
  $("#confirmSubmit").addEventListener("click", () => submit(false));
  $("#retryBtn").addEventListener("click", () => {
    state = null;
    keypadOpen = false;
    showIntro();
  });
  $("#nextExamBtn").addEventListener("click", () => {
    const next = nextExam();
    if (next) setCurrentExam(next.id);
  });
  $("#chooseExamBtn").addEventListener("click", openLearningPicker);
  $("#examGroupListToggle").addEventListener("click", () => {
    examGroupListOpen = !examGroupListOpen;
    $("#examGroupListToggle").setAttribute("aria-expanded", String(examGroupListOpen));
    $("#examGroupPanel")?.classList.toggle("list-open", examGroupListOpen);
  });
  $("#examKeypadToggle").addEventListener("click", () => {
    keypadOpen = !keypadOpen;
    renderExamKeypad();
    if (keypadOpen) focusActiveInput();
  });
  $("#examPrevBtn").addEventListener("click", () => setExamGroup(currentGroupIndex - 1));
  $("#examNextBtn").addEventListener("click", () => setExamGroup(currentGroupIndex + 1));
  window.addEventListener("beforeunload", () => { if (state?.status === "active") saveActive(); });

  return { enter, leave, initClouds, closeKeypad };
})();
