// 演習モード（過去問）。マス目入力・小問ごとの採点・大問ナビ・採点レールを担当する。
import { app } from "./state.js?v=20260903-group-nav-fix";
import { $, $$, escapeHtml, mdLite, renderMath, normalize, formatCatalogNumber, truncateTitle } from "./dom.js?v=20260903-group-nav-fix";
import { groupKey, groupDraftKey, subKey, practiceGroupState } from "./catalog.js?v=20260903-group-nav-fix";
import { saveProgress, saveDrafts } from "./storage.js?v=20260903-group-nav-fix";
import { renderKeypadPanel } from "./keypad.js?v=20260903-group-nav-fix";
import { hooks } from "./hooks.js?v=20260903-group-nav-fix";
import {
  questionFigureHtml,
  solutionForSub,
  strategyPanelHtml,
  groupPrintUrl,
  openSolutionModal,
  closeSolutionModal,
} from "./solution.js?v=20260903-group-nav-fix";

/* ---------- 解答欄（フィールド）とマス ---------- */

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

function fieldValue(field) {
  const cells = app.answers[field.uid] || [];
  return normalize(cells.join(""));
}

function isFieldFilled(field) {
  const cells = app.answers[field.uid] || [];
  return cells.every((cell) => String(cell || "").trim() !== "");
}

function isFieldCorrect(field) {
  return fieldValue(field) === normalize(field.value);
}

function currentFields() {
  const group = app.groups[app.currentGroup];
  return (group.sub_problems || []).flatMap((sub, subIndex) =>
    createViewFields(app.currentGroup, subIndex, sub).map((field) => ({ field, sub, subIndex }))
  );
}

function fieldEntries() {
  return currentFields().flatMap(({ field, sub, subIndex }) =>
    Array.from({ length: field.cellCount }, (_, cellIndex) => ({ field, sub, subIndex, cellIndex }))
  );
}

function setFirstAvailableActive() {
  const blank = fieldEntries().find(({ field, cellIndex }) => !app.answers[field.uid]?.[cellIndex]);
  const first = blank || fieldEntries()[0];
  app.active = first ? { uid: first.field.uid, cellIndex: first.cellIndex } : null;
}

export function ensureAnswersForGroup() {
  const group = app.groups[app.currentGroup];
  if (!group) return;
  const draftKey = groupDraftKey(app.currentGroup);
  app.answers = app.answerDrafts[draftKey] || {};
  (group.sub_problems || []).forEach((sub, subIndex) => {
    createViewFields(app.currentGroup, subIndex, sub).forEach((field) => {
      const stored = Array.isArray(app.answers[field.uid]) ? app.answers[field.uid] : [];
      app.answers[field.uid] = Array.from({ length: field.cellCount }, (_, index) => stored[index] || "");
    });
  });
  app.answerDrafts[draftKey] = app.answers;
  restoreChecksForGroup(group);
  setFirstAvailableActive();
}

// 大問を移動しても、正解として保存済みの小問は「正解」表示を保つ。
// checkedSubs はセッション限りの表示状態で永続化されないため、大問を切り替えるたびに
// 保存済みの解答（answerDrafts）と進捗（app.progress）から作り直す。
// 保存済みの解答が今も全マス埋まっていて正解のときだけ復元し、誤答表示や未回答の先出しはしない。
function restoreChecksForGroup(group) {
  app.checkedSubs = {};
  (group.sub_problems || []).forEach((sub, subIndex) => {
    const key = subKey(app.currentGroup, subIndex);
    if (!app.progress[key]?.correct) return;
    const fields = createViewFields(app.currentGroup, subIndex, sub);
    if (!fields.every(isFieldFilled) || !fields.every(isFieldCorrect)) return;
    app.checkedSubs[key] = {
      checked: true,
      correct: true,
      correctFields: fields.length,
      total: fields.length,
      at: app.progress[key].at || new Date().toISOString(),
    };
  });
  app.graded = Object.keys(app.checkedSubs).length > 0;
}

function persistCurrentAnswers() {
  app.answerDrafts[groupDraftKey(app.currentGroup)] = app.answers;
  saveDrafts();
}

/* ---------- 進捗の集計 ---------- */

function allSubProblems() {
  return app.groups.flatMap((group, groupIndex) =>
    (group.sub_problems || []).map((sub, subIndex) => ({ group, groupIndex, sub, subIndex }))
  );
}

function completedCount() {
  return allSubProblems().filter(({ groupIndex, subIndex }) => app.progress[subKey(groupIndex, subIndex)]?.correct).length;
}

function totalCount() {
  return allSubProblems().length;
}

/* ---------- 大問ナビと進捗バー ---------- */

export function renderGroups() {
  $("#groupCount").textContent = `${app.groups.length}題`;
  $("#groupList").innerHTML = app.groups.map((group, index) => {
    const groupState = practiceGroupState(group, index);
    const selected = index === app.currentGroup;
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
      app.currentGroup = Number(button.dataset.group);
      ensureAnswersForGroup();
      app.groupListOpen = false;
      hooks.renderApp();
      $("#groupTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  const current = app.groups[app.currentGroup];
  const summaryEl = $("#groupSummaryText");
  if (summaryEl) {
    const currentState = current ? practiceGroupState(current, app.currentGroup) : null;
    summaryEl.innerHTML = current && currentState
      ? `<span class="group-summary-title">大問${escapeHtml(current.group_number)}・${escapeHtml(truncateTitle(current.title))}</span><span class="group-summary-state">${escapeHtml(currentState.status)}・${currentState.completed}/${currentState.total}完了</span>`
      : "";
  }
  $("#groupListToggle")?.setAttribute("aria-expanded", String(app.groupListOpen));
  $("#groupPanel")?.classList.toggle("list-open", app.groupListOpen);
}

export function renderProgress() {
  const done = completedCount();
  const total = totalCount();
  $("#progressText").textContent = `${done} / ${total} 小問完了`;
  $("#progressFill").style.width = total ? `${Math.round((done / total) * 100)}%` : "0%";
}

/* ---------- 問題カード ---------- */

function renderField(field) {
  const values = app.answers[field.uid] || [];
  const cells = values.map((value, cellIndex) => {
    const subIndex = Number(field.uid.split("-")[1]);
    const checked = isSubChecked(subIndex);
    const state = checked ? (isFieldCorrect(field) ? "correct" : "wrong") : "";
    const isActive = app.active && app.active.uid === field.uid && app.active.cellIndex === cellIndex;
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

function renderSubProblem(sub, subIndex) {
  const fields = createViewFields(app.currentGroup, subIndex, sub);
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
  const solution = solutionForSub(app.groups[app.currentGroup], sub);
  const strategyId = `strategy-${groupKey(app.currentGroup)}-${subIndex}`;
  const strategyButton = solution
    ? `<button class="sub-strategy-button ghost" type="button" data-open-strategy aria-controls="${strategyId}" aria-expanded="false">方針を見る</button>`
    : "";
  const solutionButton = canShowSolution
    ? `<button class="sub-solution-button ghost" type="button" data-open-solution="${subIndex}">解説を見る</button>`
    : "";
  return `<article class="sub-card ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}" data-sub="${subIndex}">
    <div class="sub-head">
      <div class="sub-label">${escapeHtml(sub.label)}</div>
      <div class="sub-meta">${filled}/${fields.length} 入力</div>
    </div>
    <div class="sub-stem"><p>${mdLite(sub.stem_md)}</p>${questionFigureHtml(sub)}</div>
    <div class="fields">${fields.map(renderField).join("")}</div>
    <div class="sub-checkbar">
      <span class="check-result ${resultClass}" aria-live="polite">${resultText}</span>
      <button class="sub-check-button ${result ? "ghost" : "primary"}" type="button" data-check-sub="${subIndex}" ${filled < fields.length ? "disabled" : ""}>
        ${result ? "再確認" : "答えを確認"}
      </button>
      ${strategyButton}
      ${solutionButton}
    </div>
    ${solution ? `<div id="${strategyId}">${strategyPanelHtml(solution)}</div>` : ""}
  </article>`;
}

export function renderProblem() {
  const group = app.groups[app.currentGroup];
  $("#groupMeta").textContent = `GROUP ${group.group_number} / ${group.source_year}`;
  $("#groupTitle").textContent = group.title;
  $("#problemPosition").textContent = `大問 ${app.currentGroup + 1} / ${app.groups.length}`;
  $("#prevGroupBtn").disabled = app.currentGroup <= 0;
  $("#nextGroupBtn").disabled = app.currentGroup >= app.groups.length - 1;
  $("#topicTag").textContent = group.topic_tag || "数学";
  const printLink = $("#groupPrintLink");
  const printUrl = groupPrintUrl(group);
  if (printLink) {
    printLink.classList.toggle("hidden", !printUrl);
    if (printUrl) printLink.href = printUrl;
    else printLink.removeAttribute("href");
  }
  $("#groupStem").innerHTML = `<p>${mdLite(group.stem_md || "")}</p>`;
  $("#subList").innerHTML = (group.sub_problems || []).map(renderSubProblem).join("");
  bindCells();
  bindSubChecks();
  bindStrategyButtons();
  bindSolutionButtons();
  renderMath($("#groupStem"));
  renderMath($("#subList"));
}

function bindCells() {
  $$(".cell").forEach((cell) => {
    cell.addEventListener("click", () => {
      app.active = { uid: cell.dataset.cell, cellIndex: Number(cell.dataset.cellIndex) };
      app.keypadOpen = true;
      renderProblem();
      renderKeypad();
      renderActiveLabel();
      focusActiveCell();
    });
  });
}

function focusActiveCell() {
  if (!app.active) return;
  app.keypadOpen = true;
  renderKeypad();
  const cell = document.querySelector(`[data-cell="${CSS.escape(app.active.uid)}"][data-cell-index="${app.active.cellIndex}"]`);
  cell?.focus();
}

/* ---------- テンキー ---------- */

export function renderKeypad() {
  renderKeypadPanel({
    keypadSelector: "#keypad",
    panelSelector: "#practiceKeypadPanel",
    toggleSelector: "#keypadToggle",
    containerSelector: "#practiceMain",
    dataAttribute: "data-key",
    open: app.keypadOpen,
    onKey: handleKey,
  });
}

function activeEntry() {
  if (!app.active) return null;
  return fieldEntries().find(({ field, cellIndex }) => field.uid === app.active.uid && cellIndex === app.active.cellIndex) || null;
}

export function renderActiveLabel() {
  if (!app.active) {
    $("#activeLabel").textContent = "マスを選択してください";
    return;
  }
  const entry = activeEntry();
  const box = entry?.field.labels?.[app.active.cellIndex] || `${app.active.cellIndex + 1}マス目`;
  $("#activeLabel").textContent = entry
    ? `大問${app.groups[app.currentGroup].group_number} ${entry.sub.label} / ${box}`
    : `${app.active.uid.replaceAll("-", ".")} / ${app.active.cellIndex + 1}マス目`;
}

function handleKey(key) {
  if (!app.active) return;
  const editedSubIndex = activeSubIndex();
  const changesAnswer = key !== "次へ";
  if (changesAnswer) invalidateSubCheck(editedSubIndex);
  const cells = app.answers[app.active.uid];
  if (!cells) return;
  if (key === "⌫") {
    cells[app.active.cellIndex] = "";
    movePrevIfEmpty();
  } else if (key === "消去") {
    app.answers[app.active.uid] = cells.map(() => "");
    app.active.cellIndex = 0;
  } else if (key === "次へ") {
    moveNextCell();
  } else {
    cells[app.active.cellIndex] = key;
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
  if (!app.active) return;
  const cells = app.answers[app.active.uid] || [];
  if (app.active.cellIndex < cells.length - 1) {
    app.active.cellIndex += 1;
    return;
  }
  const ids = Object.keys(app.answers);
  const idx = ids.indexOf(app.active.uid);
  if (idx >= 0 && idx < ids.length - 1) {
    app.active = { uid: ids[idx + 1], cellIndex: 0 };
  }
}

function movePrevIfEmpty() {
  if (!app.active) return;
  if (app.active.cellIndex > 0) app.active.cellIndex -= 1;
}

function movePrevCell() {
  if (!app.active) return;
  if (app.active.cellIndex > 0) {
    app.active.cellIndex -= 1;
    return;
  }
  const ids = Object.keys(app.answers);
  const idx = ids.indexOf(app.active.uid);
  if (idx > 0) {
    const previousUid = ids[idx - 1];
    app.active = { uid: previousUid, cellIndex: Math.max(0, (app.answers[previousUid] || []).length - 1) };
  }
}

/* ---------- 採点 ---------- */

function subResult(subIndex) {
  return app.checkedSubs[subKey(app.currentGroup, subIndex)] || null;
}

function isSubChecked(subIndex) {
  return Boolean(subResult(subIndex));
}

function activeSubIndex() {
  const entry = activeEntry();
  return entry ? entry.subIndex : null;
}

function gradeSubProblem(subIndex) {
  const group = app.groups[app.currentGroup];
  const sub = group.sub_problems[subIndex];
  if (!sub) return null;
  const fields = createViewFields(app.currentGroup, subIndex, sub);
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
  app.checkedSubs[subKey(app.currentGroup, subIndex)] = result;
  app.graded = Object.keys(app.checkedSubs).length > 0;
  if (result.correct) {
    const key = subKey(app.currentGroup, subIndex);
    app.progress[key] = { ...(app.progress[key] || {}), correct: true, at: result.at };
  }
  return result;
}

function invalidateSubCheck(subIndex) {
  if (subIndex == null) return;
  delete app.checkedSubs[subKey(app.currentGroup, subIndex)];
  app.graded = Object.keys(app.checkedSubs).length > 0;
}

function focusSubFirstBlank(subIndex) {
  const blank = fieldEntries().find(({ field, cellIndex, subIndex: entrySubIndex }) =>
    entrySubIndex === subIndex && !app.answers[field.uid]?.[cellIndex]
  );
  if (!blank) return;
  app.active = { uid: blank.field.uid, cellIndex: blank.cellIndex };
  renderProblem();
  renderActiveLabel();
  focusActiveCell();
}

function gradeCurrent() {
  app.checkedSubs = {};
  app.graded = false;
  const group = app.groups[app.currentGroup];
  (group.sub_problems || []).forEach((sub, subIndex) => {
    gradeSubProblem(subIndex);
  });
  saveProgress();
  persistCurrentAnswers();
  hooks.renderApp();
}

function checkSubProblem(subIndex) {
  const result = gradeSubProblem(subIndex);
  if (!result) {
    focusSubFirstBlank(subIndex);
    return;
  }
  saveProgress();
  hooks.renderApp();
  const card = document.querySelector(`[data-sub="${subIndex}"]`);
  card?.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function groupResults() {
  const group = app.groups[app.currentGroup];
  return (group.sub_problems || []).map((sub, subIndex) => {
    const fields = createViewFields(app.currentGroup, subIndex, sub);
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
  return fieldEntries().some(({ field, cellIndex }) => !app.answers[field.uid]?.[cellIndex]);
}

function anyWrongField() {
  return groupResults().some((result) => result.checked && !result.correct);
}

function renderNextIssueBtn() {
  const button = $("#nextIssueBtn");
  const hasIssue = app.graded ? anyWrongField() : anyBlankField();
  button.disabled = !hasIssue;
  button.textContent = app.graded ? "次の誤答へ" : "次の未入力へ";
}

export function renderScore(forceBlank = false) {
  if (!app.graded && forceBlank) {
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
  $("#gradeBtn").textContent = app.graded ? "大問全体を再確認" : "大問全体を確認";
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

/* ---------- 問題カード内のイベント ---------- */

function bindSubChecks() {
  $$('[data-check-sub]').forEach((button) => {
    button.addEventListener("click", () => checkSubProblem(Number(button.dataset.checkSub)));
  });
}

function bindSolutionButtons() {
  $$("[data-open-solution]").forEach((button) => {
    button.addEventListener("click", () => {
      openSolutionModal(app.currentGroup, Number(button.dataset.openSolution));
    });
  });
}

function bindStrategyButtons() {
  $$("[data-open-strategy]").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      const strategyPanel = panel?.querySelector("[data-strategy-panel]");
      if (!strategyPanel) return;
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      strategyPanel.hidden = expanded;
      strategyPanel.classList.toggle("hidden", expanded);
      if (!expanded) renderMath(strategyPanel);
    });
  });
}

function bindResultRows() {
  $$("[data-jump-sub]").forEach((row) => {
    row.addEventListener("click", () => {
      const card = document.querySelector(`[data-sub="${row.dataset.jumpSub}"]`);
      card?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
}

/* ---------- 学習の続き・移動 ---------- */

function clearCurrent() {
  if (!confirm("この大問の入力内容をすべて消します。正解済みの進捗（完了記録）は保持されます。")) return;
  app.answerDrafts[groupDraftKey(app.currentGroup)] = {};
  saveDrafts();
  ensureAnswersForGroup();
  hooks.renderApp();
}

function firstUnfinishedGroupIndex() {
  const index = app.groups.findIndex((group, groupIndex) =>
    (group.sub_problems || []).some((_, subIndex) => !app.progress[subKey(groupIndex, subIndex)]?.correct));
  return index === -1 ? 0 : index;
}

function continueStudying() {
  const hasUnfinished = completedCount() < totalCount();
  app.currentGroup = firstUnfinishedGroupIndex();
  ensureAnswersForGroup();
  hooks.renderApp();
  if (hasUnfinished) focusFirstBlank();
  else $("#groupTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function renderContinuePanel() {
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
  const target = app.groups[firstUnfinishedGroupIndex()];
  hint.textContent = target ? `次は [${target.group_number}] ${target.title} です。` : "";
}

function resetProgress() {
  const target = app.currentStudentName ? `${app.currentStudentName} さんの進捗` : "ゲストの画面内進捗";
  if (!confirm(`${target}をリセットしますか。`)) return;
  app.progress = {};
  app.answerDrafts = {};
  saveProgress();
  saveDrafts();
  ensureAnswersForGroup();
  hooks.renderApp();
}

function focusFirstBlank() {
  const blank = fieldEntries().find(({ field, cellIndex }) => !app.answers[field.uid]?.[cellIndex]);
  if (!blank) return;
  app.active = { uid: blank.field.uid, cellIndex: blank.cellIndex };
  renderProblem();
  renderActiveLabel();
  focusActiveCell();
}

function focusFirstWrong() {
  if (!app.graded) return;
  const wrong = fieldEntries().find(({ field }) => !isFieldCorrect(field));
  if (!wrong) return;
  app.active = { uid: wrong.field.uid, cellIndex: wrong.cellIndex };
  renderProblem();
  renderActiveLabel();
  focusActiveCell();
}

function focusNextIssue() {
  if (app.graded) focusFirstWrong();
  else focusFirstBlank();
}

function moveGroup(offset) {
  const next = app.currentGroup + offset;
  if (next < 0 || next >= app.groups.length) return;
  app.currentGroup = next;
  ensureAnswersForGroup();
  hooks.renderApp();
  $("#groupTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ---------- 物理キーボード ---------- */

// 試験モード中は演習モードの物理キー操作を無効にする。
let physicalKeysEnabled = () => true;

export function setPhysicalKeyGuard(predicate) {
  physicalKeysEnabled = predicate;
}

function handlePhysicalKey(event) {
  if (!physicalKeysEnabled()) return;
  const target = event.target;
  if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement) return;
  if (!app.active || !$("#solutionModal").classList.contains("hidden")) return;
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

/* ---------- 描画とイベント登録 ---------- */

export function renderPractice() {
  renderGroups();
  renderProgress();
  renderContinuePanel();
  renderProblem();
  renderKeypad();
  renderActiveLabel();
  renderScore(true);
}

export function bindPracticeEvents() {
  $("#gradeBtn").addEventListener("click", gradeCurrent);
  $("#clearBtn").addEventListener("click", clearCurrent);
  $("#nextIssueBtn").addEventListener("click", focusNextIssue);
  $("#continueBtn").addEventListener("click", continueStudying);
  $("#nextLearningBtn").addEventListener("click", () => hooks.openLearningPicker());
  $("#keypadToggle").addEventListener("click", () => {
    app.keypadOpen = !app.keypadOpen;
    renderKeypad();
    if (app.keypadOpen) focusActiveCell();
  });
  $("#prevGroupBtn").addEventListener("click", () => moveGroup(-1));
  $("#nextGroupBtn").addEventListener("click", () => moveGroup(1));
  $("#groupListToggle").addEventListener("click", () => {
    app.groupListOpen = !app.groupListOpen;
    $("#groupListToggle").setAttribute("aria-expanded", String(app.groupListOpen));
    $("#groupPanel")?.classList.toggle("list-open", app.groupListOpen);
  });
  $(".source-switch-toggle")?.addEventListener("toggle", (event) => {
    document.body.classList.toggle("catalog-open", event.currentTarget.open);
  });
  $("#resetProgressBtn").addEventListener("click", resetProgress);
  $("#hideSolutions").addEventListener("change", renderProblem);
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
