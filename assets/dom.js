export function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

export function sourceLabel(source) {
  if (!source) return "자체 구성";
  return `${source.year}년 ${source.month}월 고2 전국연합학력평가 ${source.number}번 유형·논리 참고`;
}

export function choiceNumber(choiceId) {
  return { A: "①", B: "②", C: "③", D: "④", E: "⑤" }[choiceId] ?? choiceId;
}

export function setupPrintButton() {
  document.querySelectorAll("[data-print]").forEach((button) => {
    button.addEventListener("click", () => window.print());
  });
}
