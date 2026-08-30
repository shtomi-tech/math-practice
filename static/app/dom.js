// DOM取得と文字列整形の共通ユーティリティ。状態を持たない関数だけを置く。

export const $ = (selector, root = document) => root.querySelector(selector);
export const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

export function escapeHtml(text = "") {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function mdLite(text = "") {
  return escapeHtml(text)
    .replace(/\n{2,}/g, "</p><p>")
    .replace(/\n/g, "<br>");
}

export function solutionTextHtml(text = "") {
  const normalized = String(text).replace(/\$\$([\s\S]*?)\$\$/g, (_, body) =>
    `$$${body.replace(/\r?\n/g, " ")}$$`,
  );
  return mdLite(normalized);
}

export function renderMath(root = document.body) {
  if (!window.renderMathInElement) return;
  window.renderMathInElement(root, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
      { left: "\(", right: "\)", display: false },
      { left: "\[", right: "\]", display: true },
    ],
    macros: { "\bun": "\dfrac{#1}{#2}" },
    throwOnError: false,
  });
}

// 全角数字・各種マイナス記号・空白を吸収して解答照合に使える形へそろえる。
export function normalize(value) {
  return String(value || "")
    .trim()
    .replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xFEE0))
    .replace(/[−ー－]/g, "-")
    .replace(/\s+/g, "");
}

export function formatCatalogNumber(index) {
  return String(index + 1).padStart(2, "0");
}

// カタログの残り時間表示（分は0埋めしない）。
export function formatTimeLabel(seconds) {
  const safe = Math.max(0, Number(seconds) || 0);
  return `${Math.floor(safe / 60)}:${String(safe % 60).padStart(2, "0")}`;
}

// 試験中のタイマー表示（mm:ss で桁を固定する）。
export function formatClock(seconds) {
  const safe = Math.max(0, seconds);
  return `${String(Math.floor(safe / 60)).padStart(2, "0")}:${String(safe % 60).padStart(2, "0")}`;
}

export function truncateTitle(title = "", max = 10) {
  return title.length > max ? `${title.slice(0, max)}…` : title;
}
