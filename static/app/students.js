// 生徒の選択・追加・改名・削除。進捗はここで選ばれた生徒名ごとに保存される。
// ポータル発行の共有URL（クラウド保存）では生徒名が固定され、選択UIは無効になる。
import { app } from "./state.js?v=20260830-modules";
import { $, escapeHtml } from "./dom.js?v=20260830-modules";
import {
  normalizeStudentName,
  saveStudents,
  setCurrentStudent,
  loadProgressFor,
  progressKeyFor,
  writeJson,
} from "./storage.js?v=20260830-modules";
import { ensureAnswersForGroup } from "./practice.js?v=20260830-modules";
import { hooks } from "./hooks.js?v=20260830-modules";

export function renderStudentMenu() {
  const sel = $("#studentSel");
  const sharedMode = Boolean(app.cloud?.isEnabled());
  sel.innerHTML = [`<option value="">ゲスト（記録なし）</option>`]
    .concat(app.students.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`))
    .concat([`<option value="__add__">＋ 新しい生徒を追加…</option>`])
    .join("");
  sel.value = app.students.includes(app.currentStudentName) ? app.currentStudentName : "";
  if (sel.value !== app.currentStudentName) setCurrentStudent("");

  const hasStudent = Boolean(app.currentStudentName);
  sel.disabled = sharedMode;
  $("#studentManage").hidden = sharedMode;
  $("#renameStudentBtn").disabled = sharedMode || !hasStudent;
  $("#deleteStudentBtn").disabled = sharedMode || !hasStudent;
  $("#studentHint").textContent = sharedMode
    ? `${app.currentStudentName} さんとして学習中です。進捗はクラウドに保存されます。`
    : hasStudent
    ? `${app.currentStudentName} さんの進捗を保存中です。`
    : "ゲスト：記録は保存されません。生徒を選ぶと進捗が残ります。";
  // 折りたたみ内のstudentHintだけだと初見の生徒が気づかず進捗を失うため、
  // トップバーに常設のゲスト通知も出す（開かなくても見える）。
  $("#guestNotice").classList.toggle("hidden", sharedMode || hasStudent);
}

function refreshStudentView() {
  ensureAnswersForGroup();
  hooks.renderApp();
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
  if (!app.students.includes(name)) {
    app.students.push(name);
    app.students.sort((a, b) => a.localeCompare(b, "ja"));
    saveStudents();
  }
  input.value = "";
  input.classList.add("hidden-input");
  setCurrentStudent(name);
  refreshStudentView();
}

function renameStudent() {
  const oldName = app.currentStudentName;
  if (!oldName) return;
  const nextName = normalizeStudentName(prompt("新しい生徒名を入力してください。", oldName) || "");
  if (!nextName || nextName === oldName) return;

  const oldProgress = loadProgressFor(oldName);
  const nextProgress = loadProgressFor(nextName);
  const mergedProgress = { ...oldProgress, ...nextProgress };

  app.students = app.students.filter((name) => name !== oldName);
  if (!app.students.includes(nextName)) app.students.push(nextName);
  app.students.sort((a, b) => a.localeCompare(b, "ja"));
  saveStudents();
  writeJson(progressKeyFor(nextName), mergedProgress);
  localStorage.removeItem(progressKeyFor(oldName));
  setCurrentStudent(nextName);
  refreshStudentView();
}

function deleteStudent() {
  const name = app.currentStudentName;
  if (!name) return;
  if (!confirm(`${name} さんの進捗記録を削除しますか。`)) return;
  app.students = app.students.filter((student) => student !== name);
  saveStudents();
  localStorage.removeItem(progressKeyFor(name));
  setCurrentStudent("");
  refreshStudentView();
}

export function bindStudentEvents() {
  $("#studentSel").addEventListener("change", (event) => {
    const value = event.target.value;
    if (value === "__add__") {
      event.target.value = app.students.includes(app.currentStudentName) ? app.currentStudentName : "";
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
}
