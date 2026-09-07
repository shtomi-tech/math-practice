// 画面の外枠：出典・回のカタログ表示と、演習モード／試験モードの切り替え。
// 両モードから呼ばれる関数はここで hooks に登録し、モジュール間の循環importを避ける。
import { app } from "./state.js?v=20260907-ui-audit";
import { $, $$, escapeHtml, formatCatalogNumber } from "./dom.js?v=20260907-ui-audit";
import {
  DATASETS,
  MINI_EXAMS,
  EXAMS,
  SCHOOL_BY_EXAM,
  AVAILABLE_EXAMS,
  AVAILABLE_SCHOOLS,
  isMiniKey,
  hasExamData,
  groupCountFor,
} from "./datasets.js?v=20260907-ui-audit";
import {
  catalogStateForExam,
  catalogStateClass,
  catalogSummaryText,
  catalogProgressText,
  schoolCatalogSummary,
} from "./catalog.js?v=20260907-ui-audit";
import { CURRENT_EXAM_KEY, loadProgressFor, loadDraftsFor, loadPracticePosition, migrateLegacyProgress } from "./storage.js?v=20260907-ui-audit";
import { ensureAnswersForGroup, renderPractice, restorePracticePosition } from "./practice.js?v=20260907-ui-audit";
import { renderStudentMenu } from "./students.js?v=20260907-ui-audit";
import { examFlow } from "./exam.js?v=20260907-ui-audit";
import { hooks } from "./hooks.js?v=20260907-ui-audit";

export function loadCurrentExam() {
  const requested = new URLSearchParams(window.location.search).get("exam");
  if (requested && AVAILABLE_EXAMS.includes(requested)) return requested;
  const stored = localStorage.getItem(CURRENT_EXAM_KEY);
  if (stored && AVAILABLE_EXAMS.includes(stored)) return stored;
  if (AVAILABLE_EXAMS.includes("sougou")) return "sougou";
  return AVAILABLE_EXAMS[0] || "sougou";
}

// 演習モードのデータを現在のキーに合わせて読み直す。
export function loadPracticeExam() {
  app.data = DATASETS[app.currentExamKey] || { problem_groups: [] };
  app.groups = app.data.problem_groups || [];
}

export function setCurrentExam(key) {
  if (!hasExamData(key)) return;
  const wasMini = isMiniKey(app.currentExamKey);
  app.currentExamKey = key;
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
  app.keypadOpen = false;
  loadPracticeExam();
  app.currentGroup = 0;
  app.progress = loadProgressFor(app.currentStudentName);
  app.answerDrafts = loadDraftsFor(app.currentStudentName);
  app.lastPracticePosition = loadPracticePosition(app.currentExamKey, app.currentStudentName);
  restorePracticePosition();
  migrateLegacyProgress();
  app.progress = loadProgressFor(app.currentStudentName);
  app.answerDrafts = loadDraftsFor(app.currentStudentName);
  app.lastPracticePosition = loadPracticePosition(app.currentExamKey, app.currentStudentName);
  restorePracticePosition();
  ensureAnswersForGroup();
  render();
}

function setCurrentSchool(schoolId) {
  const school = AVAILABLE_SCHOOLS.find((s) => s.id === schoolId);
  if (!school) return;
  if (SCHOOL_BY_EXAM[app.currentExamKey]?.id === schoolId) return;
  const firstExam = (school.exams || []).find((exam) => hasExamData(exam.key));
  if (firstExam) setCurrentExam(firstExam.key);
}

export function renderExamShell() {
  const exam = EXAMS[app.currentExamKey] || EXAMS[AVAILABLE_EXAMS[0]];
  const school = SCHOOL_BY_EXAM[app.currentExamKey] || AVAILABLE_SCHOOLS[0];
  const currentState = catalogStateForExam(app.currentExamKey);
  if (isMiniKey(app.currentExamKey)) {
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
  $(".source-switch-toggle > summary").textContent = isMiniKey(app.currentExamKey) ? "回を変える" : "出典を変える";
  $("#sourceSummary").textContent = catalogSummaryText(isMiniKey(app.currentExamKey) ? MINI_EXAMS[app.currentExamKey] : exam, currentState);
  $("#examPanelLabel").textContent = isMiniKey(app.currentExamKey) ? "試験回" : "方式・年度";

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
    const active = key === app.currentExamKey;
    const modeLabel = state.mode === "mini" ? `${optionExam.durationMinutes}分ミニ試験` : "過去問演習";
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

// 「次の学習を選ぶ／別の演習を選ぶ」からカタログパネルを開く。
function openLearningPicker() {
  const toggle = $(".source-switch-toggle");
  if (!toggle) return;
  app.keypadOpen = false;
  $("#practiceKeypadPanel")?.classList.add("collapsed");
  $("#examKeypadPanel")?.classList.add("collapsed");
  $("#keypadToggle")?.setAttribute("aria-expanded", "false");
  $("#examKeypadToggle")?.setAttribute("aria-expanded", "false");
  if (isMiniKey(app.currentExamKey)) examFlow.closeKeypad?.();
  toggle.open = true;
  toggle.scrollIntoView({ behavior: "smooth", block: "start" });
  toggle.querySelector('[data-exam][aria-selected="true"]')?.focus();
}

export function render() {
  const miniMode = isMiniKey(app.currentExamKey);
  document.body.classList.toggle("exam-flow", miniMode);
  $("#practiceMain").classList.toggle("hidden", miniMode);
  $("#examMain").classList.toggle("hidden", !miniMode);
  $("#modeLabel").classList.toggle("hidden", !miniMode);
  renderExamShell();
  if (miniMode) return;
  renderStudentMenu();
  renderPractice();
}

Object.assign(hooks, {
  renderApp: render,
  renderExamShell,
  setCurrentExam,
  openLearningPicker,
});
