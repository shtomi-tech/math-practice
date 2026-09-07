// エントリポイント。状態の初期化 → クラウド接続 → イベント登録 → 初回描画。
import { app } from "./state.js?v=20260907-keep-check-result";
import { isMiniKey } from "./datasets.js?v=20260907-keep-check-result";
import {
  loadStudents,
  loadCurrentStudent,
  normalizeStudentName,
  saveStudents,
  loadProgressFor,
  loadDraftsFor,
  loadPracticePosition,
  migrateLegacyProgress,
  cloudPayload,
  applyCloudPayload,
} from "./storage.js?v=20260907-keep-check-result";
import { loadCurrentExam, loadPracticeExam, render } from "./shell.js?v=20260907-keep-check-result";
import { ensureAnswersForGroup, bindPracticeEvents, setPhysicalKeyGuard, restorePracticePosition } from "./practice.js?v=20260907-keep-check-result";
import { bindStudentEvents } from "./students.js?v=20260907-keep-check-result";
import { examFlow } from "./exam.js?v=20260907-keep-check-result";

app.currentExamKey = loadCurrentExam();
loadPracticeExam();
app.students = loadStudents();
app.currentStudentName = loadCurrentStudent();
// 試験モード中はマス目が無いので、演習モードの物理キー操作を止める。
setPhysicalKeyGuard(() => !isMiniKey(app.currentExamKey));

document.addEventListener("DOMContentLoaded", async () => {
  app.cloud = window.createCloud({
    appId: "teikyo-kakomon",
    getPayload: cloudPayload,
    applyLoaded: applyCloudPayload,
  });
  await app.cloud.init();
  if (app.cloud.isEnabled()) {
    app.currentStudentName = normalizeStudentName(app.cloud.getSession().student.name);
  }
  if (!isMiniKey(app.currentExamKey)) migrateLegacyProgress();
  if (app.currentStudentName && !app.students.includes(app.currentStudentName)) {
    app.students.push(app.currentStudentName);
    app.students.sort((a, b) => a.localeCompare(b, "ja"));
    saveStudents();
  }
  app.progress = loadProgressFor(app.currentStudentName);
  app.answerDrafts = loadDraftsFor(app.currentStudentName);
  app.lastPracticePosition = loadPracticePosition(app.currentExamKey, app.currentStudentName);
  restorePracticePosition();
  await examFlow.initClouds();
  bindPracticeEvents();
  bindStudentEvents();
  if (isMiniKey(app.currentExamKey)) {
    examFlow.enter(app.currentExamKey);
  } else {
    ensureAnswersForGroup();
  }
  render();
});
