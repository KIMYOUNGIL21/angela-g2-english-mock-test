import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

import { answers } from "../assets/answers.js";
import { assessment, questions } from "../assets/questions.js";

const validChoiceIds = ["A", "B", "C", "D", "E"];
const validDifficulties = new Set(["하", "중", "상"]);

test("시험 기본 정보가 유효하다", () => {
  assert.ok(assessment.title.trim());
  assert.match(assessment.title, /안젤라 선생님/);
  assert.ok(assessment.target.trim());
  assert.ok(Number.isInteger(assessment.durationMinutes));
  assert.ok(assessment.durationMinutes > 0);
  assert.ok(Array.isArray(assessment.instructions));
  assert.ok(assessment.instructions.length > 0);
});

test("문항 ID와 순서는 중복되지 않는다", () => {
  assert.ok(questions.length > 0, "문항을 한 개 이상 입력해야 합니다.");
  assert.equal(new Set(questions.map(({ id }) => id)).size, questions.length);
  assert.equal(new Set(questions.map(({ order }) => order)).size, questions.length);
});

test("모든 문항은 A~E 다섯 선택지를 가진다", () => {
  questions.forEach((question) => {
    assert.ok(question.id.trim(), "문항 ID가 비어 있습니다.");
    assert.ok(Number.isInteger(question.order), `${question.id}의 order가 정수가 아닙니다.`);
    assert.ok(question.prompt.trim(), `${question.id}의 질문이 비어 있습니다.`);
    assert.ok(
      question.passage.join("").length > 400,
      `${question.id}의 지문이 완성본으로 보기에는 너무 짧습니다.`,
    );
    assert.ok(validDifficulties.has(question.difficulty), `${question.id}의 난이도를 확인하세요.`);
    assert.deepEqual(
      question.choices.map(({ id }) => id),
      validChoiceIds,
      `${question.id}의 선택지는 A~E 순서여야 합니다.`,
    );
    question.choices.forEach((choice) => {
      assert.ok(choice.text.trim(), `${question.id}의 ${choice.id} 선택지가 비어 있습니다.`);
    });
  });
});

test("모든 문항에는 유효한 정답이 정확히 하나씩 있다", () => {
  const questionIds = new Set(questions.map(({ id }) => id));
  assert.equal(new Set(answers.map(({ questionId }) => questionId)).size, answers.length);
  assert.deepEqual(
    new Set(answers.map(({ questionId }) => questionId)),
    questionIds,
    "문제와 정답의 questionId 구성이 일치해야 합니다.",
  );

  answers.forEach((answer) => {
    assert.ok(validChoiceIds.includes(answer.correctChoice));
    assert.ok(answer.rationale.trim(), `${answer.questionId}의 정답 근거가 비어 있습니다.`);
    assert.ok(answer.evidence.trim(), `${answer.questionId}의 지문 근거가 비어 있습니다.`);
    assert.ok(Array.isArray(answer.teachingPoints));
    assert.ok(answer.teachingPoints.length > 0);
    assert.ok(Array.isArray(answer.vocabulary));
    assert.ok(answer.vocabulary.length >= 3);

    const distractorIds = Object.keys(answer.distractors).sort();
    assert.deepEqual(
      distractorIds,
      validChoiceIds.filter((id) => id !== answer.correctChoice),
      `${answer.questionId}에는 정답을 제외한 네 선택지의 오답 해설이 필요합니다.`,
    );
  });
});

test("완성본은 10문항이다", () => {
  assert.equal(questions.length, 10);
});

test("문항 영역과 난이도 분포가 기획과 일치한다", () => {
  const countBy = (field) =>
    questions.reduce((counts, question) => {
      counts[question[field]] = (counts[question[field]] ?? 0) + 1;
      return counts;
    }, {});

  assert.deepEqual(countBy("section"), { 어휘: 1, 어법: 2, 독해: 7 });
  assert.deepEqual(countBy("difficulty"), { 중: 4, 하: 3, 상: 3 });
});

test("정답표와 출처 메타데이터가 확정본과 일치한다", () => {
  const answersById = new Map(answers.map((answer) => [answer.questionId, answer]));
  const answerKey = questions
    .slice()
    .sort((a, b) => a.order - b.order)
    .map((question) => answersById.get(question.id).correctChoice);

  assert.deepEqual(answerKey, ["E", "D", "A", "B", "D", "C", "C", "D", "E", "A"]);

  const sourceKeys = questions.map(
    ({ source }) => `${source.year}-${source.month}-${source.number}`,
  );
  assert.equal(new Set(sourceKeys).size, 10);
  questions.forEach(({ source }) => {
    assert.match(source.questionUrl, /^https:\/\/wdown\.ebsi\.co\.kr\//);
    assert.match(source.solutionUrl, /^https:\/\/wdown\.ebsi\.co\.kr\//);
    assert.ok(source.note.trim());
  });
});

test("학생용과 교사용 페이지에 안젤라 선생님 브랜드가 표시되고 답 데이터는 분리된다", async () => {
  const [studentHtml, teacherHtml] = await Promise.all([
    readFile(new URL("../index.html", import.meta.url), "utf8"),
    readFile(new URL("../answers.html", import.meta.url), "utf8"),
  ]);

  assert.match(studentHtml, /안젤라 선생님 1:1 영어/);
  assert.match(studentHtml, /assets\/images\/angela-logo\.png/);
  assert.doesNotMatch(studentHtml, /answers\.js|answers\.html/);
  assert.match(teacherHtml, /안젤라 선생님 1:1 영어/);
  assert.match(teacherHtml, /교사용/);

  await access(new URL("../assets/images/angela-logo.png", import.meta.url));
});
