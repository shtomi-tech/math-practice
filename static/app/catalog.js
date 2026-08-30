// 進捗キーの規約と、演習セットカタログ／大問Unitカードに出す状態の算出。
// 「未着手・学習中・入力中・完了」「未受験・保存中・受験済み」の語彙はここが正。
import { app } from "./state.js?v=20260830-modules";
import { normalize, formatTimeLabel } from "./dom.js?v=20260830-modules";
import { DATASETS, MINI_EXAMS, AVAILABLE_EXAMS, isMiniKey, hasExamData } from "./datasets.js?v=20260830-modules";
import { loadProgressSnapshot, loadDraftSnapshot, safeStorageObject } from "./storage.js?v=20260830-modules";

// 進捗・下書きの保存キー。大問番号を含めるので、大問の並び替えでも記録が壊れない。
export function groupKey(index) {
  return `group-${app.groups[index]?.group_number || index + 1}`;
}

export function groupDraftKey(index) {
  return groupKey(index);
}

export function subKey(groupIndex, subIndex) {
  return `${groupKey(groupIndex)}-${subIndex}`;
}

export function hasDraftValues(value) {
  if (typeof value === "string") return value.trim() !== "";
  if (Array.isArray(value)) return value.some(hasDraftValues);
  if (value && typeof value === "object") return Object.values(value).some(hasDraftValues);
  return false;
}

export function practiceCatalogState(examKey, studentName = app.currentStudentName) {
  const data = DATASETS[examKey] || { problem_groups: [] };
  const sourceGroups = data.problem_groups || [];
  const useLiveState = examKey === app.currentExamKey;
  const snapshot = useLiveState ? app.progress : loadProgressSnapshot(examKey, studentName);
  const drafts = useLiveState ? app.answerDrafts : loadDraftSnapshot(examKey, studentName);
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

export function isQuestionAnswered(question, answers = {}) {
  const value = answers?.[question.id];
  if (question.type === "numeric") {
    return Array.isArray(value) && value.length === question.prompts.length
      && value.every((entry) => normalize(entry) !== "");
  }
  return Array.isArray(value) ? value.length > 0 : typeof value === "number";
}

export function miniCatalogState(exam) {
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

export function catalogStateForExam(examKey, studentName = app.currentStudentName) {
  return isMiniKey(examKey)
    ? miniCatalogState(MINI_EXAMS[examKey])
    : practiceCatalogState(examKey, studentName);
}

export function schoolCatalogSummary(school, studentName = app.currentStudentName) {
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

export function catalogStateClass(state) {
  if (state.status === "完了" || state.status === "受験済み") return "is-complete";
  if (state.status === "学習中" || state.status === "保存中") return "is-progress";
  return "is-unstarted";
}

export function catalogSummaryText(exam, state) {
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

export function catalogProgressText(exam, state) {
  if (state.mode === "mini") {
    if (state.status === "保存中") return `${state.answered}/${state.total}問回答`;
    if (state.status === "受験済み") return `前回 ${state.score}/${exam.totalPoints}点`;
    return `${exam.durationMinutes}分・${exam.totalPoints}点・${state.total}小問`;
  }
  return `${state.completed}/${state.total}小問完了`;
}

// 大問Unitカード（演習モード）の状態。入力中と学習中を区別する。
export function practiceGroupState(group, groupIndex) {
  const subs = group.sub_problems || [];
  const completed = subs.filter((_, subIndex) => app.progress[subKey(groupIndex, subIndex)]?.correct === true).length;
  const hasDraft = hasDraftValues(app.answerDrafts[groupDraftKey(groupIndex)]);
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
