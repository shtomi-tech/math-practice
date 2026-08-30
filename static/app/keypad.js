// 演習モードと試験モードで共通のクリック式テンキー。
// 配列・ラベル・パネル開閉の作法を1か所に集約し、両モードで見た目と操作を一致させる。
import { $, $$ } from "./dom.js?v=20260830-modules";

const KEY_LABELS = { "消去": "全部消す" };
const KEY_ARIA = { "消去": "この欄を消去" };

// 最頻出の「次へ」を右手親指の最良位置（右下・span3）に置き、
// 破壊的な「全部消す」は左上に隔離して誤タップ事故を防ぐ（フィッツの法則）。
const layout = (minusKey) => ["消去", "7", "8", "9", minusKey, "4", "5", "6", "⌫", "1", "2", "3", "0", "次へ"];

/**
 * @param {object} options
 * @param {string} options.keypadSelector キーを描画する要素
 * @param {string} options.panelSelector 折りたたみパネル
 * @param {string} options.toggleSelector 開閉ボタン
 * @param {string} options.containerSelector keypad-open を付ける外枠
 * @param {string} options.dataAttribute キー識別に使うdata属性名
 * @param {string} [options.minusKey] マイナスキーの表記（モードで文字種が異なる）
 * @param {boolean} options.open パネルを開いているか
 * @param {boolean} [options.disabled] 入力先が無いときにキーを押せなくする
 * @param {(key: string) => void} options.onKey
 */
export function renderKeypadPanel({
  keypadSelector,
  panelSelector,
  toggleSelector,
  containerSelector,
  dataAttribute,
  minusKey = "-",
  open,
  disabled = false,
  onKey,
}) {
  $(keypadSelector).innerHTML = layout(minusKey).map((key) => {
    const wide = key === "次へ" ? "wide3" : "";
    const aria = KEY_ARIA[key] ? ` aria-label="${KEY_ARIA[key]}"` : "";
    return `<button class="${wide}" type="button" ${dataAttribute}="${key}"${aria}${disabled ? " disabled" : ""}>${KEY_LABELS[key] || key}</button>`;
  }).join("");
  $$(`[${dataAttribute}]`).forEach((button) => {
    button.addEventListener("click", () => onKey(button.getAttribute(dataAttribute)));
  });
  const panel = $(panelSelector);
  const toggle = $(toggleSelector);
  panel?.classList.toggle("collapsed", !open);
  $(containerSelector)?.classList.toggle("keypad-open", open);
  if (toggle) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "キーパッドを閉じる" : "数字を入力";
  }
}
