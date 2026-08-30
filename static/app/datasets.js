// データファイル（static/*-data.js など）が window に登録した内容を、
// アプリが扱う「学校（出典）→ 方式・年度」の2階層へ組み立てる。
// ここは読み取り専用の定数だけを持ち、可変状態は state.js が持つ。

// 帝京の既存データ（window.TEIKYO_DATASETS）と、新規追加分（window.MATH_DATASETS）を統合。
// 各 exam.key は DATASETS 内で一意（進捗キーの識別子を兼ねるため衝突不可）。
export const DATASETS = { ...(window.TEIKYO_DATASETS || {}), ...(window.MATH_DATASETS || {}) };
if (!Object.keys(DATASETS).length && window.TEIKYO_DATA) DATASETS.sougou = window.TEIKYO_DATA;

// ミニ試験（旧math-mini-exam）。window.MINI_EXAMS の各回を「学校」の1つとして統合する。
export const MINI_EXAMS = window.MINI_EXAMS || {};
export const isMiniKey = (key) => Object.prototype.hasOwnProperty.call(MINI_EXAMS, key);
export const hasExamData = (key) => Boolean(DATASETS[key] || isMiniKey(key));

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
export const EXAMS = {};
export const SCHOOL_BY_EXAM = {};
SCHOOLS.forEach((school) => {
  (school.exams || []).forEach((exam) => {
    if (!hasExamData(exam.key)) return;
    EXAMS[exam.key] = { ...exam, schoolId: school.id, eyebrow: exam.eyebrow || school.eyebrow };
    SCHOOL_BY_EXAM[exam.key] = school;
  });
});
export const AVAILABLE_EXAMS = Object.keys(EXAMS);
export const AVAILABLE_SCHOOLS = SCHOOLS.filter((school) => (school.exams || []).some((exam) => hasExamData(exam.key)));

export function groupCountFor(examKey) {
  return isMiniKey(examKey)
    ? (MINI_EXAMS[examKey]?.groups || []).length
    : (DATASETS[examKey]?.problem_groups || []).length;
}

// 段階表示する詳細解説（従来方式）と、HTML方式の解答データ。
export const DETAIL_STEP_LABELS = ["着眼点", "立式", "計算", "答え合わせ"];
export const DETAIL_TEXTS = {
  ...(window.TEIKYO_DETAIL_TEXTS || {}),
  ...(window.MATH_DETAIL_TEXTS || {}),
};
export const MATH_SOLUTIONS = window.MATH_SOLUTIONS || {};
