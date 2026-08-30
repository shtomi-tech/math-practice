// 解説の表示（方針パネル・解説モーダル・印刷リンク）。
// HTML方式（window.MATH_SOLUTIONS）があればそれを、無ければ段階解説（DETAIL_TEXTS）を出す。
import { app } from "./state.js?v=20260830-modules";
import { $, escapeHtml, mdLite, solutionTextHtml, renderMath } from "./dom.js?v=20260830-modules";
import { DETAIL_TEXTS, DETAIL_STEP_LABELS, MATH_SOLUTIONS } from "./datasets.js?v=20260830-modules";

export function questionFigureHtml(sub) {
  return sub.figure
    ? `<div class="solution-figure question-figure">${sub.figure}</div>`
    : "";
}

export function answerSummary(sub) {
  return (sub.answer_fields || []).flatMap((field) => {
    const boxes = field.boxes || [...(field.num_boxes || []), ...(field.den_boxes || [])];
    if (!boxes.length) return [];
    return [`<span class="answer-chip">${escapeHtml(boxes.join(""))} = ${escapeHtml(field.value)}</span>`];
  }).join("");
}

export function detailKey(group, sub) {
  return `${group.group_number}-${sub.label}`;
}

export function solutionForSub(group, sub) {
  return MATH_SOLUTIONS[app.currentExamKey]?.[detailKey(group, sub)] || null;
}

export function groupPrintUrl(group) {
  if (!group || !MATH_SOLUTIONS[app.currentExamKey]) return null;
  const url = new URL("./print.html", window.location.href);
  url.searchParams.set("exam", app.currentExamKey);
  url.searchParams.set("group", group.group_number);
  return url.href;
}

function solutionFormulaHtml(formula) {
  if (!formula) return "";
  return `
    <div class="solution-formula">
      <h4>${escapeHtml(formula.title || "公式")}</h4>
      <div>${solutionTextHtml(formula.body || "")}</div>
    </div>
  `;
}

export function strategyPanelHtml(solution) {
  return `
    <div class="sub-strategy hidden" data-strategy-panel hidden>
      <div class="sub-strategy-label">方針</div>
      <p>${solutionTextHtml(solution.approach || "")}</p>
      ${solutionFormulaHtml(solution.formula)}
    </div>
  `;
}

function fallbackDetail(sub) {
  return [
    "まず問題文から、求める量と条件を分けて確認する。",
    "次に使う公式・定理を決め、式を1本ずつ立てる。",
    "最後に空欄の桁数・符号・分母分子の位置に合わせて答えを入れる。",
    sub.solution_md || ""
  ].filter(Boolean);
}

function detailStepsForSub(group, sub) {
  const raw = DETAIL_TEXTS[app.currentExamKey]?.[detailKey(group, sub)] || fallbackDetail(sub);
  return Array.isArray(raw) ? raw : Array.isArray(raw.steps) ? raw.steps : fallbackDetail(sub);
}

function detailStepLabel(stepIndex, totalSteps) {
  if (totalSteps <= 1) return DETAIL_STEP_LABELS[0];
  if (stepIndex === totalSteps - 1) return DETAIL_STEP_LABELS[3];
  const levelIndex = Math.min(DETAIL_STEP_LABELS.length - 2, Math.floor(stepIndex * (DETAIL_STEP_LABELS.length - 1) / totalSteps));
  return DETAIL_STEP_LABELS[levelIndex];
}

function detailStepsHtml(group, sub) {
  const steps = detailStepsForSub(group, sub);
  const shown = Math.min(app.modalDetailShown, steps.length);
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

export function renderSolutionModalBody(group, sub) {
  $("#modalMeta").textContent = `GROUP ${group.group_number} / ${sub.label}`;
  $("#modalTitle").textContent = `${group.title} ${sub.label}`;
  const solution = solutionForSub(group, sub);
  const sections = solution
    ? `
      <section class="detail-section">
        <h3>問題</h3>
        <p>${mdLite(sub.stem_md || "")}</p>
        ${questionFigureHtml(sub)}
      </section>
      <section class="detail-section">
        <h3>方針</h3>
        <p>${solutionTextHtml(solution.approach || "")}</p>
        ${solutionFormulaHtml(solution.formula)}
      </section>
      <section class="detail-section">
        <h3>解答</h3>
        <div>${solutionTextHtml(solution.solution || "")}</div>
        ${solution.figure ? `<div class="solution-figure">${solution.figure}</div>` : ""}
        <p class="solution-answer"><strong>答え：</strong>${solutionTextHtml(solution.answer || "")}</p>
      </section>
    `
    : `
      <section class="detail-section">
        <h3>問題</h3>
        <p>${mdLite(sub.stem_md || "")}</p>
        ${questionFigureHtml(sub)}
      </section>
      <section class="detail-section">
        <h3>答え</h3>
        <div>${answerSummary(sub) || "—"}</div>
      </section>
      <section class="detail-section">
        <h3>解説</h3>
        ${detailStepsHtml(group, sub)}
      </section>
    `;
  $("#modalBody").innerHTML = `
    <div class="detail-grid">
      ${sections}
    </div>
  `;
  if (!solution) {
    $("[data-reveal-detail]")?.addEventListener("click", () => {
      app.modalDetailShown += 1;
      renderSolutionModalBody(group, sub);
    });
  }
  renderMath($("#solutionModal"));
}

export function openSolutionModal(groupIndex, subIndex) {
  const group = app.groups[groupIndex];
  const sub = group.sub_problems[subIndex];
  app.modalDetailShown = 0;
  renderSolutionModalBody(group, sub);
  app.modalReturnFocus = document.activeElement;
  $("#solutionModal").classList.remove("hidden");
  $("#modalCloseBtn").focus();
}

export function closeSolutionModal() {
  $("#solutionModal").classList.add("hidden");
  if (app.modalReturnFocus instanceof HTMLElement) app.modalReturnFocus.focus();
  app.modalReturnFocus = null;
}
