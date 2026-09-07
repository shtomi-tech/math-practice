// localStorage への保存・読み出しと、クラウド保存用ペイロードの組み立て。
// 保存キーは旧アプリ（teikyo-kakomon / math-mini-exam）と互換のため変更しない。
import { app } from "./state.js?v=20260907-ui-audit";
import { DATASETS, EXAMS, AVAILABLE_EXAMS, hasExamData, isMiniKey } from "./datasets.js?v=20260907-ui-audit";

export const CURRENT_EXAM_KEY = "teikyo_2026_math_current_exam_v1";
const LEGACY_PROGRESS_KEY = "teikyo_2026_math_practice_v1";
const STUDENTS_KEY = "teikyo_2026_math_students_unified_v1";
const LEGACY_STUDENT_KEYS = ["teikyo_2026_math_students_v1", "teikyo_2026_recommend_math_students_v1"];
const CURRENT_STUDENT_KEY = "teikyo_2026_math_current_student_v1";
const PROGRESS_PREFIX = "teikyo_2026_math_progress_v2:";
const DRAFT_PREFIX = "teikyo_2026_math_drafts_v2:";
const POSITION_PREFIX = "teikyo_2026_math_position_v1:";

export function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

export function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// オブジェクト（配列ではない）としてだけ受け取りたい保存値を安全に読む。
export function safeStorageObject(key) {
  const value = readJson(key, null);
  return value && typeof value === "object" && !Array.isArray(value) ? value : null;
}

export function progressStorageKey(examKey, name) {
  return `${PROGRESS_PREFIX}${examKey}:${encodeURIComponent(normalizeStudentName(name))}`;
}

export function draftStorageKey(examKey, name) {
  return `${DRAFT_PREFIX}${examKey}:${encodeURIComponent(normalizeStudentName(name))}`;
}

export function positionStorageKey(examKey, name) {
  return `${POSITION_PREFIX}${examKey}:${encodeURIComponent(normalizeStudentName(name))}`;
}

export function loadProgressSnapshot(examKey, name) {
  if (!hasExamData(examKey) || !normalizeStudentName(name)) return {};
  const snapshot = readJson(progressStorageKey(examKey, name), {});
  return snapshot && typeof snapshot === "object" && !Array.isArray(snapshot) ? snapshot : {};
}

export function loadDraftSnapshot(examKey, name) {
  if (!hasExamData(examKey) || !normalizeStudentName(name)) return {};
  const snapshot = readJson(draftStorageKey(examKey, name), {});
  return snapshot && typeof snapshot === "object" && !Array.isArray(snapshot) ? snapshot : {};
}

export function normalizePracticePosition(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  if (!Number.isInteger(value.groupIndex) || value.groupIndex < 0) return null;
  const position = { groupIndex: value.groupIndex };
  if (typeof value.fieldUid === "string" && /^\d+-\d+-\d+$/.test(value.fieldUid)) {
    position.fieldUid = value.fieldUid;
  }
  if (Number.isInteger(value.subIndex) && value.subIndex >= 0) position.subIndex = value.subIndex;
  if (Number.isInteger(value.cellIndex) && value.cellIndex >= 0) position.cellIndex = value.cellIndex;
  return position;
}

export function loadPracticePosition(examKey, name) {
  if (!hasExamData(examKey) || !normalizeStudentName(name)) return null;
  return normalizePracticePosition(readJson(positionStorageKey(examKey, name), null));
}

export function savePracticePosition(position) {
  const normalized = normalizePracticePosition(position);
  if (!normalized) return null;
  if (app.currentStudentName) {
    writeJson(positionStorageKey(app.currentExamKey, app.currentStudentName), normalized);
    if (app.cloud) app.cloud.queueSave();
  }
  return normalized;
}

export function clearPracticePosition(name = app.currentStudentName) {
  if (!normalizeStudentName(name)) return;
  localStorage.removeItem(positionStorageKey(app.currentExamKey, name));
  if (app.cloud) app.cloud.queueSave();
}

export function normalizeStudentName(name = "") {
  return String(name).trim().replace(/\s+/g, " ");
}

export function progressKeyFor(name) {
  return progressStorageKey(app.currentExamKey, name);
}

export function draftKeyFor(name) {
  return draftStorageKey(app.currentExamKey, name);
}

export function loadStudents() {
  const lists = [readJson(STUDENTS_KEY, []), ...LEGACY_STUDENT_KEYS.map((key) => readJson(key, []))];
  return [...new Set(lists.flat().map(normalizeStudentName).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, "ja"));
}

export function saveStudents() {
  writeJson(STUDENTS_KEY, app.students);
}

export function loadCurrentStudent() {
  return normalizeStudentName(localStorage.getItem(CURRENT_STUDENT_KEY) || "");
}

export function setCurrentStudent(name) {
  app.currentStudentName = normalizeStudentName(name);
  localStorage.setItem(CURRENT_STUDENT_KEY, app.currentStudentName);
  app.progress = loadProgressFor(app.currentStudentName);
  app.answerDrafts = loadDraftsFor(app.currentStudentName);
  app.lastPracticePosition = loadPracticePosition(app.currentExamKey, app.currentStudentName);
}

function migrateCurrentTanmonGridState(name) {
  if (app.currentExamKey !== "tanmon_ippan" || !normalizeStudentName(name) || !window.migrateTanmonGridState) return;
  const progressKey = progressKeyFor(name);
  const draftKey = draftKeyFor(name);
  const oldProgress = readJson(progressKey, {});
  const oldDrafts = readJson(draftKey, {});
  const migrated = window.migrateTanmonGridState(oldProgress, oldDrafts);
  if (JSON.stringify(migrated.progress) !== JSON.stringify(oldProgress)) writeJson(progressKey, migrated.progress);
  if (JSON.stringify(migrated.drafts) !== JSON.stringify(oldDrafts)) writeJson(draftKey, migrated.drafts);
}

export function loadProgressFor(name) {
  migrateCurrentTanmonGridState(name);
  return loadProgressSnapshot(app.currentExamKey, name);
}

export function loadDraftsFor(name) {
  return loadDraftSnapshot(app.currentExamKey, name);
}

export function saveProgress() {
  if (!app.currentStudentName) return;
  writeJson(progressKeyFor(app.currentStudentName), app.progress);
  if (app.cloud) app.cloud.queueSave();
}

export function saveDrafts() {
  if (!app.currentStudentName) return;
  writeJson(draftKeyFor(app.currentStudentName), app.answerDrafts);
  if (app.cloud) app.cloud.queueSave();
}

export function cloudPayload() {
  const exams = {};
  for (const examKey of AVAILABLE_EXAMS.filter((key) => !isMiniKey(key))) {
    const encodedName = encodeURIComponent(app.currentStudentName);
    exams[examKey] = {
      progress: readJson(`${PROGRESS_PREFIX}${examKey}:${encodedName}`, {}),
      drafts: readJson(`${DRAFT_PREFIX}${examKey}:${encodedName}`, {}),
    };
    const position = loadPracticePosition(examKey, app.currentStudentName);
    if (position) exams[examKey].position = position;
  }
  return { version: 1, exams };
}

export function applyCloudPayload(payload) {
  const exams = payload && typeof payload === "object" ? payload.exams : null;
  const student = app.cloud?.getSession().student;
  if (!student || !exams || typeof exams !== "object") return;
  app.currentStudentName = normalizeStudentName(student.name);
  const encodedName = encodeURIComponent(app.currentStudentName);
  for (const [examKey, record] of Object.entries(exams)) {
    if (!DATASETS[examKey] || !record || typeof record !== "object") continue;
    writeJson(`${PROGRESS_PREFIX}${examKey}:${encodedName}`, record.progress || {});
    writeJson(`${DRAFT_PREFIX}${examKey}:${encodedName}`, record.drafts || {});
    if (Object.prototype.hasOwnProperty.call(record, "position")) {
      const positionKey = positionStorageKey(examKey, app.currentStudentName);
      const position = normalizePracticePosition(record.position);
      if (position) writeJson(positionKey, position);
      else localStorage.removeItem(positionKey);
    }
  }
}

// 統合前の単一キー進捗を「既存データ」という生徒名へ1度だけ移す。
export function migrateLegacyProgress() {
  const legacyKey = EXAMS[app.currentExamKey]?.legacyProgressKey || LEGACY_PROGRESS_KEY;
  const migratedKey = `${legacyKey}_migrated_into_unified`;
  const legacyRaw = localStorage.getItem(legacyKey);
  if (!legacyRaw || localStorage.getItem(migratedKey)) return;
  const legacy = readJson(legacyKey, {});
  if (!legacy || !Object.keys(legacy).length) {
    localStorage.setItem(migratedKey, "1");
    return;
  }
  const legacyStudent = "既存データ";
  if (!app.students.includes(legacyStudent)) {
    app.students.push(legacyStudent);
    saveStudents();
  }
  if (!localStorage.getItem(progressKeyFor(legacyStudent))) {
    writeJson(progressKeyFor(legacyStudent), legacy);
  }
  if (!app.currentStudentName) setCurrentStudent(legacyStudent);
  localStorage.setItem(migratedKey, "1");
}
