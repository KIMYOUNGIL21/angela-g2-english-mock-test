import { answers } from "./answers.js";
import { assessment, questions } from "./questions.js";
import { choiceNumber, createElement, setupPrintButton, sourceLabel } from "./dom.js";

const answersByQuestion = new Map(answers.map((answer) => [answer.questionId, answer]));

function renderQuickAnswers() {
  const grid = document.querySelector("#quick-answer-grid");
  questions
    .slice()
    .sort((a, b) => a.order - b.order)
    .forEach((question) => {
      const answer = answersByQuestion.get(question.id);
      const item = createElement("div", "quick-answer-item");
      item.append(createElement("span", "quick-answer-number", `${question.order}번`));
      item.append(
        createElement(
          "strong",
          "quick-answer-choice",
          answer ? choiceNumber(answer.correctChoice) : "—",
        ),
      );
      grid.append(item);
    });
}

function renderExplanation(question) {
  const answer = answersByQuestion.get(question.id);
  const article = createElement("article", "explanation-card");
  article.dataset.brand = "ANGELA ENGLISH · 안젤라 선생님 1:1 영어 · 교사용";

  const header = createElement("header", "explanation-heading");
  const title = createElement(
    "h2",
    "",
    `${question.order}. ${question.type} · 난이도 ${question.difficulty}`,
  );
  const answerChip = createElement(
    "span",
    "answer-chip",
    answer ? `정답 ${choiceNumber(answer.correctChoice)}` : "정답 미입력",
  );
  header.append(title, answerChip);
  article.append(header);

  const source = createElement("p", "source-line");
  source.append(document.createTextNode(`참고 기출 · ${sourceLabel(question.source)} · `));
  const questionLink = createElement("a", "", "공식 문제지");
  questionLink.href = question.source.questionUrl;
  questionLink.target = "_blank";
  questionLink.rel = "noreferrer";
  const solutionLink = createElement("a", "", "공식 정답·해설");
  solutionLink.href = question.source.solutionUrl;
  solutionLink.target = "_blank";
  solutionLink.rel = "noreferrer";
  source.append(questionLink, document.createTextNode(" · "), solutionLink);
  source.append(createElement("span", "source-note", `변형 범위 · ${question.source.note}`));
  article.append(source);

  if (!answer) {
    article.append(createElement("p", "missing-answer", "이 문항의 정답 데이터가 없습니다."));
    return article;
  }

  const rationale = createElement("section", "explanation-section");
  rationale.append(createElement("h3", "", "정답 근거"));
  rationale.append(createElement("p", "", answer.rationale));
  article.append(rationale);

  const evidence = createElement("section", "explanation-section evidence-box");
  evidence.append(createElement("h3", "", "지문 근거"));
  evidence.append(createElement("p", "", answer.evidence));
  article.append(evidence);

  const distractorEntries = Object.entries(answer.distractors ?? {});
  if (distractorEntries.length > 0) {
    const distractors = createElement("section", "explanation-section");
    distractors.append(createElement("h3", "", "오답 해설"));
    const list = createElement("ul", "distractor-list");
    distractorEntries.forEach(([choiceId, explanation]) => {
      const item = createElement("li", "");
      item.append(createElement("strong", "", `${choiceNumber(choiceId)} `));
      item.append(document.createTextNode(explanation));
      list.append(item);
    });
    distractors.append(list);
    article.append(distractors);
  }

  if (answer.teachingPoints.length > 0) {
    const points = createElement("section", "explanation-section teaching-points");
    points.append(createElement("h3", "", "수업 포인트"));
    const tags = createElement("div", "point-tags");
    answer.teachingPoints.forEach((point) => tags.append(createElement("span", "point-tag", point)));
    points.append(tags);
    article.append(points);
  }

  if (answer.vocabulary?.length > 0) {
    const vocabulary = createElement("section", "explanation-section");
    vocabulary.append(createElement("h3", "", "핵심 어휘"));
    const list = createElement("dl", "vocabulary-list");
    answer.vocabulary.forEach(({ term, meaning }) => {
      const item = createElement("div", "vocabulary-item");
      item.append(createElement("dt", "", term));
      item.append(createElement("dd", "", meaning));
      list.append(item);
    });
    vocabulary.append(list);
    article.append(vocabulary);
  }

  return article;
}

document.querySelector("#answer-subtitle").textContent =
  `${assessment.title} · 총 ${questions.length}문항 · 교사용`;
renderQuickAnswers();
questions
  .slice()
  .sort((a, b) => a.order - b.order)
  .forEach((question) =>
    document.querySelector("#explanation-list").append(renderExplanation(question)),
  );

setupPrintButton();
