// アプリ全体で共有する可変状態。
// ES Modulesではimportした束縛を他モジュールから再代入できないため、
// 可変値は1つのオブジェクトにまとめて `app.xxx = ...` の形で更新する。
export const app = {
  // 表示中の演習・試験のキー（DATASETS または MINI_EXAMS のキー）
  currentExamKey: "",
  // 演習モードのデータと大問配列
  data: { problem_groups: [] },
  groups: [],
  currentGroup: 0,

  // 演習モードの入力状態
  answers: {},
  answerDrafts: {},
  graded: false,
  active: null,
  checkedSubs: {},

  // UIの開閉状態
  keypadOpen: false,
  groupListOpen: false,
  modalReturnFocus: null,
  modalDetailShown: 0,

  // 生徒と進捗
  students: [],
  currentStudentName: "",
  progress: {},
  cloud: null,
};
