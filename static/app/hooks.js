// モードをまたぐ呼び出しの受け渡し口。
// shell.js（画面切替とカタログ）と practice.js / exam.js は互いを呼ぶため、
// 循環importを避けて shell.js が起動時にここへ実装を登録する。
export const hooks = {
  /** 画面全体を再描画する */
  renderApp: () => {},
  /** 上部の出典・回カタログだけを再描画する */
  renderExamShell: () => {},
  /** 演習・試験を切り替える */
  setCurrentExam: () => {},
  /** カタログパネルを開いて次の学習を選ばせる */
  openLearningPicker: () => {},
};
