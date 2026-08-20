import { assessment, questions } from "./questions.js";
import { choiceNumber, createElement, setupPrintButton } from "./dom.js";

function renderMetadata() {
  document.querySelector("#exam-title").textContent = assessment.title;
  document.querySelector("#exam-subtitle").textContent = assessment.subtitle;

  const metadata = [
    ["대상", assessment.target],
    ["문항", `${questions.length}문항`],
    ["시간", `${assessment.durationMinutes}분`],
    ["배점", `${assessment.totalPoints}점`],
  ];

  const container = document.querySelector("#exam-meta");
  metadata.forEach(([term, value]) => {
    const item = createElement("div", "meta-item");
    item.append(createElement("dt", "meta-label", term));
    item.append(createElement("dd", "meta-value", value));
    container.append(item);
  });

  const instructions = document.querySelector("#instructions-list");
  assessment.instructions.forEach((instruction) => {
    instructions.append(createElement("li", "", instruction));
  });
}

function renderQuestion(question) {
  const article = createElement("article", "question-card");
  article.id = question.id;
  article.dataset.brand = "ANGELA ENGLISH · 안젤라 선생님 1:1 영어";

  const heading = createElement("header", "question-heading");
  const titleRow = createElement("div", "question-title-row");
  titleRow.append(createElement("span", "question-number", String(question.order).padStart(2, "0")));

  const title = createElement("h2", "question-title", question.prompt);
  title.id = `${question.id}-title`;
  titleRow.append(title);
  heading.append(titleRow);

  const tags = createElement("div", "question-tags");
  [question.section, question.type].forEach((tag) => {
    tags.append(createElement("span", "tag", tag));
  });
  heading.append(tags);
  article.append(heading);
  article.setAttribute("aria-labelledby", title.id);

  if (question.passage.length > 0) {
    const passage = createElement("div", "passage");
    question.passage.forEach((paragraph) => {
      const paragraphElement = createElement("p");
      paragraphElement.innerHTML = paragraph;
      passage.append(paragraphElement);
    });
    article.append(passage);
  }

  const choices = createElement("fieldset", "choices");
  choices.setAttribute("aria-label", `${question.order}번 선택지`);
  question.choices.forEach((choice) => {
    const label = createElement("label", "choice");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = question.id;
    input.value = choice.id;
    input.setAttribute("aria-label", `${question.order}번 ${choiceNumber(choice.id)}`);

    label.append(input);
    label.append(createElement("span", "choice-marker", choiceNumber(choice.id)));
    label.append(createElement("span", "choice-text", choice.text));
    choices.append(label);
  });
  article.append(choices);

  return article;
}

function renderAnswerSheet() {
  const grid = document.querySelector("#answer-grid");
  questions.forEach((question) => {
    const row = createElement("div", "answer-row");
    row.append(createElement("strong", "answer-number", String(question.order)));
    const bubbles = createElement("div", "answer-bubbles");
    question.choices.forEach((choice) => {
      bubbles.append(createElement("span", "answer-bubble", choiceNumber(choice.id)));
    });
    row.append(bubbles);
    grid.append(row);
  });
}

renderMetadata();
questions
  .slice()
  .sort((a, b) => a.order - b.order)
  .forEach((question) => document.querySelector("#question-list").append(renderQuestion(question)));
renderAnswerSheet();

setupPrintButton();
