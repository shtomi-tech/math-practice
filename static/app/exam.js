/* ============================================================
   試験モード（旧 math-mini-exam エンジンの統合版）
   - データ: window.MINI_EXAMS（static/mini-data.js）
   - localStorage キーと Supabase appId（math-mini-exam / math-mini-exam:<id>）は
     旧アプリと完全互換。既存の受験データ・生徒別クラウド進捗をそのまま引き継ぐ。
   - 受験画面は演習モードと同じ3カラム構成（大問ナビ／問題カード／採点レール）。
   ============================================================ */
import { app } from "./state.js?v=20260903-group-nav-fix";
import { $, $$, escapeHtml, renderMath, normalize, formatCatalogNumber, formatClock } from "./dom.js?v=20260903-group-nav-fix";
import { MINI_EXAMS } from "./datasets.js?v=20260903-group-nav-fix";
import { isQuestionAnswered } from "./catalog.js?v=20260903-group-nav-fix";
import { renderKeypadPanel } from "./keypad.js?v=20260903-group-nav-fix";
import { hooks } from "./hooks.js?v=20260903-group-nav-fix";

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

/* ---------- 開始前 ---------- */

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
      ? `前回の受験を保存しています。残り ${formatClock(remaining)}。`
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
  hooks.renderExamShell();
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
    $("#timer").textContent = formatClock(remaining);
    $("#timer").classList.toggle("urgent", remaining <= 300);
  };
  tick();
  timerId = setInterval(tick, 1000);
}

/* ---------- 受験中 ---------- */

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
  hooks.renderExamShell();
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

/* ---------- テンキー ---------- */

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
  renderKeypadPanel({
    keypadSelector: "#examKeypad",
    panelSelector: "#examKeypadPanel",
    toggleSelector: "#examKeypadToggle",
    containerSelector: "#exam",
    dataAttribute: "data-exam-key",
    minusKey: "−",
    open: keypadOpen,
    disabled: !current,
    onKey: handleExamKey,
  });
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

/* ---------- 提出と採点 ---------- */

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
  hooks.renderExamShell();
  window.scrollTo({ top: 0, behavior: "auto" });
  $("#resultTitle")?.focus({ preventScroll: true });
}

/* ---------- モードの出入りとクラウド ---------- */

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
    const examCloud = window.createCloud({
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
  } else if (app.currentStudentName) {
    $("#studentName").value = app.currentStudentName;
  }
}

// 演習モードと同じく、静的な要素のイベントはモジュール読み込み時に1度だけ張る。
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
  if (next) hooks.setCurrentExam(next.id);
});
$("#chooseExamBtn").addEventListener("click", () => hooks.openLearningPicker());
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

export const examFlow = { enter, leave, initClouds, closeKeypad };
