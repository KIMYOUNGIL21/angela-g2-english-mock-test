# 안젤라 선생님용 시작 안내

이 파일은 선생님이 다른 사람에게 도움을 요청하지 않고 워크북을 직접 만드는 방법을 설명합니다.

## 처음 한 번만 준비

1. GitHub 계정을 준비합니다.
2. 저장소 소유자에게 이 저장소의 collaborator 초대를 받습니다.
3. GitHub Desktop을 설치하고 GitHub 계정으로 로그인합니다.
4. GitHub Desktop에서 `Clone a repository`를 누르고 아래 주소를 붙여 넣습니다.

```text
https://github.com/KIMYOUNGIL21/angela-g2-english-mock-test.git
```

5. Claude Code를 설치합니다. Windows에서는 Git for Windows 또는 WSL 환경이 필요할 수 있습니다.
6. 저장소 폴더에서 `scripts\open-claude.cmd`를 두 번 클릭합니다.

Claude Code 설치와 Windows 준비는 Anthropic 공식 안내를 따릅니다.
<https://docs.anthropic.com/en/docs/claude-code/getting-started>

## 매번 문제를 만들 때

1. `scripts\open-claude.cmd`를 두 번 클릭합니다.
2. 아래처럼 원하는 지문, 유형, 난이도, 문항 수를 말합니다.

```text
모의고사 지문 7번으로 유형 11번 내용 불일치 문제 2개를 만들어줘.
난이도는 중간으로 해줘.
문제와 보기는 영어로 작성해줘.
정답과 한국어 해설, 오답별 이유는 교사용 답지에 넣어줘.
기존 문제를 덮어쓰지 말고 새로운 세트로 추가해줘.
```

3. Claude가 만든 문제를 검토합니다.
4. 다음 문장으로 검사를 시킵니다.

```text
문항과 정답이 정확히 연결되는지 확인하고 npm test를 실행해줘.
문제와 선택지는 영어인지, 정답이 하나뿐인지, 학생용 페이지에 정답이 노출되지 않는지도 확인해줘.
```

5. 결과가 마음에 들면 다음 문장으로 게시합니다.

```text
검사 결과를 다시 보여주고, 이상이 없으면 변경사항을 커밋하고 GitHub main 브랜치에 푸시해줘.
커밋 메시지는 변경 내용을 한 줄로 요약해줘.
```

## 자주 쓰는 요청

```text
교과서 3과 지문으로 S2 단어 순서 배열 2문항을 만들어줘.
어형 변화가 한 번씩 들어가게 하고 허용 답안과 채점 기준도 작성해줘.
```

```text
모의고사 지문 12번으로 유형 5번 A·B 빈칸 문제를 1개 만들어줘.
접속사와 논리 관계가 핵심이 되게 하고, 오답은 본문 단어를 활용해 만들어줘.
```

```text
이번 세트의 학생용 문제지와 교사용 답지를 인쇄하기 좋은 상태로 확인해줘.
```

## 확인할 주소

- 학생용 문제지. <https://kimyoungil21.github.io/angela-g2-english-mock-test/>
- 교사용 답지. <https://kimyoungil21.github.io/angela-g2-english-mock-test/answers.html>

## 꼭 지킬 것

- `CLAUDE.md`와 `WORKBOOK_SPEC.md`를 먼저 읽힌다.
- 문제와 선택지는 영어로 작성한다.
- 기출 원문을 그대로 복사하지 않는다.
- 새 문항을 만들 때 기존 문항을 삭제하거나 덮어쓰지 않는다.
- `npm test`가 통과한 뒤에만 GitHub에 푸시한다.
