/**
 * @typedef {Object} Choice
 * @property {"A"|"B"|"C"|"D"|"E"} id - 선택지 식별자
 * @property {string} text - 선택지 내용
 *
 * @typedef {Object} Source
 * @property {number} year - 시행 연도
 * @property {number} month - 시행 월
 * @property {number} number - 참고 문항 번호
 * @property {string} questionUrl - EBSi 공식 문제지
 * @property {string} solutionUrl - EBSi 공식 정답·해설
 * @property {string} note - 변형 범위 설명
 *
 * @typedef {Object} Question
 * @property {string} id - 정답 데이터와 연결되는 고유 ID
 * @property {number} order - 화면에 표시할 문항 번호
 * @property {string} section - 어휘, 어법, 독해 영역
 * @property {string} type - 문맥 어휘, 제목, 빈칸 등 문항 유형
 * @property {"하"|"중"|"상"} difficulty - 난이도
 * @property {string[]} passage - 신뢰할 수 있는 정적 HTML 문단
 * @property {string} prompt - 질문
 * @property {Choice[]} choices - A부터 E까지 정확히 다섯 개의 선택지
 * @property {Source} source - 참고한 공식 기출 정보
 */

const sources = {
  "2025-09": {
    questionUrl:
      "https://wdown.ebsi.co.kr/W61001/01exam/20250903/go2/eng_1_mun_97CFC6XF_1.pdf",
    solutionUrl:
      "https://wdown.ebsi.co.kr/W61001/01exam/20250903/go2/eng_1_hsj_875LD859.pdf",
  },
  "2025-06": {
    questionUrl:
      "https://wdown.ebsi.co.kr/W61001/01exam/20250604/go2/eng_1_mun_29E7I1V8.pdf",
    solutionUrl:
      "https://wdown.ebsi.co.kr/W61001/01exam/20250604/go2/eng_main_hsj_4A53HZ97_1.pdf",
  },
  "2024-09": {
    questionUrl:
      "https://wdown.ebsi.co.kr/W61001/01exam/20240904/go2/eng_1_mun_6C3QQF3B.pdf",
    solutionUrl:
      "https://wdown.ebsi.co.kr/W61001/01exam/20240904/go2/eng_main_hsj_HA5TYRV4_1.pdf",
  },
};

export const assessment = {
  title: "안젤라 선생님 고2 영어 기출 변형 Set 01",
  subtitle: "공식 기출의 핵심 논리와 출제 유형을 바탕으로 새로 쓴 10문항 진단 테스트",
  target: "고등학교 2학년",
  durationMinutes: 25,
  totalPoints: 100,
  instructions: [
    "각 문항의 답으로 가장 적절한 것을 하나 고르세요.",
    "지문에 제시된 정보를 근거로 답하고, 모르는 표현에는 표시해 두세요.",
    "권장 시간 안에 먼저 풀고, 남은 시간에 답을 검토하세요.",
  ],
};

/** @type {Question[]} */
export const questions = [
  {
    id: "q1",
    order: 1,
    section: "어휘",
    type: "문맥상 어휘",
    difficulty: "중",
    prompt: "다음 글의 밑줄 친 부분 중, 문맥상 낱말의 쓰임이 적절하지 않은 것은?",
    passage: [
      "Many schools promote perspective-taking as a cure for conflict. Yet it is not universally beneficial. Students asked to imagine the distress of one classmate may become emotionally <u>① engaged</u>, but they can also become exhausted. Their concern may be <u>② selective</u>—strong for close friends but weak for unfamiliar peers. Under competitive conditions, this bias can even <u>③ deepen</u> division. A further problem is confidence: people sometimes assume that they understand experiences they have never lived through, so their imagined account may <u>④ distort</u> rather than clarify their picture of another person’s needs. For these reasons, simply demanding more empathy is <u>⑤ sufficient</u> to create reliable cooperation. A different approach is needed. Deliberate compassion, which aims to reduce suffering without claiming to share every feeling, may be more reliable.",
    ],
    choices: [
      { id: "A", text: "engaged" },
      { id: "B", text: "selective" },
      { id: "C", text: "deepen" },
      { id: "D", text: "distort" },
      { id: "E", text: "sufficient" },
    ],
    source: {
      year: 2025,
      month: 9,
      number: 30,
      ...sources["2025-09"],
      note: "공감 비판의 논리와 어휘 유형만 참고하고 지문과 선택지는 새로 작성함",
    },
  },
  {
    id: "q2",
    order: 2,
    section: "어법",
    type: "어법 판단",
    difficulty: "중",
    prompt: "다음 글의 밑줄 친 부분 중, 어법상 틀린 것은?",
    passage: [
      "Several decades ago, city planners treated wetlands as empty land waiting to be developed. As evidence accumulated, however, this view began <u>① to give</u> way to one that recognized wetlands as active infrastructure. Each marsh <u>② filters</u> pollutants, stores floodwater, and provides habitat. Once residents understand these functions, <u>③ it</u> becomes easier for them to see that economic security depends on ecological stability. Our town therefore needs <u>④ redesign</u> its growth plan before the remaining wetlands disappear. By identifying areas <u>⑤ in which</u> construction should be limited, the town can protect both homes and ecosystems.",
    ],
    choices: [
      { id: "A", text: "to give" },
      { id: "B", text: "filters" },
      { id: "C", text: "it" },
      { id: "D", text: "redesign" },
      { id: "E", text: "in which" },
    ],
    source: {
      year: 2024,
      month: 9,
      number: 29,
      ...sources["2024-09"],
      note: "생태 중심 관점 전환의 논리와 어법 유형만 참고하고 소재를 새로 구성함",
    },
  },
  {
    id: "q3",
    order: 3,
    section: "어법",
    type: "어법 판단",
    difficulty: "중",
    prompt: "다음 글의 밑줄 친 부분 중, 어법상 틀린 것은?",
    passage: [
      "When sketching a street, beginners often assume that objects keep the same visual shape from every position. In fact, there <u>① is</u> several changes that occur as the observer moves. A circular table, <u>② viewed</u> from above, appears round, but from a lower angle it looks oval. Lines that are parallel in the real world may seem <u>③ to meet</u> in the distance. For this reason, artists choose a fixed eye level and use it consistently, <u>④ allowing</u> every object to share the same spatial logic. Without a stable reference point, one building may follow one set of visual rules and the next another. If the viewpoint shifts halfway through the drawing, the buildings can look as though they <u>⑤ were</u> leaning in different directions.",
    ],
    choices: [
      { id: "A", text: "is" },
      { id: "B", text: "viewed" },
      { id: "C", text: "to meet" },
      { id: "D", text: "allowing" },
      { id: "E", text: "were" },
    ],
    source: {
      year: 2025,
      month: 6,
      number: 29,
      ...sources["2025-06"],
      note: "원근법 소재와 어법 유형만 참고하고 문장을 새로 작성함",
    },
  },
  {
    id: "q4",
    order: 4,
    section: "독해",
    type: "제목",
    difficulty: "하",
    prompt: "다음 글의 제목으로 가장 적절한 것은?",
    passage: [
      "Whenever a new workplace tool appears, public discussion often asks how many jobs it will erase. That question captures only half of the change. A machine may take over one task while making another task more valuable. When translation software handles routine sentences, for instance, human translators can spend more time resolving cultural ambiguity and negotiating meaning with clients. The technology also lowers the cost of translation, allowing smaller organizations to reach foreign audiences and creating work that did not previously exist. None of this guarantees that every worker benefits, because skills and opportunities are unevenly distributed. Still, the future of employment cannot be understood as a simple contest in which machines win and people lose. Technology removes some forms of labor, reshapes others, and expands demand in places that are hard to predict.",
    ],
    choices: [
      { id: "A", text: "Automation’s Final Victory over Human Labor" },
      { id: "B", text: "Technology at Work: Replacing Some Tasks, Creating Others" },
      { id: "C", text: "Why Translation Is the First Industry to Disappear" },
      { id: "D", text: "Equal Rewards for All Workers in the Digital Age" },
      { id: "E", text: "The One Human Skill No Machine Can Learn" },
    ],
    source: {
      year: 2025,
      month: 9,
      number: 22,
      ...sources["2025-09"],
      note: "기술과 노동의 이중 효과라는 논리만 참고하고 사례와 선택지를 새로 작성함",
    },
  },
  {
    id: "q5",
    order: 5,
    section: "독해",
    type: "내용 불일치",
    difficulty: "하",
    prompt: "다음 글의 내용과 일치하지 않는 것은?",
    passage: [
      "Many qualities we measure—speed, income, blood pressure—change gradually, yet institutions often turn them into categories. This makes decisions manageable, but a sharp cutoff can create consequences far larger than the difference it represents. Consider a scholarship requiring 80 points. A student with 80 receives tuition support and extra mentoring, while one with 79 receives neither. The one-point gap may reveal almost nothing about their potential, but the opportunities that follow can push their futures apart. Such thresholds are sometimes necessary; schools cannot divide a limited fund into infinitely small shares. Problems arise when people forget that the line is a decision rather than a natural boundary. Treating those just below it as fundamentally different from those just above it gives administrative convenience the appearance of objective truth.",
    ],
    choices: [
      {
        id: "A",
        text: "Measured qualities can vary gradually even when institutions classify them.",
      },
      { id: "B", text: "Cutoffs can help organizations distribute limited resources." },
      {
        id: "C",
        text: "A small numerical difference can lead to a large difference in later opportunities.",
      },
      {
        id: "D",
        text: "A threshold always identifies a natural and fundamental difference between people.",
      },
      {
        id: "E",
        text: "Problems arise when a chosen line is mistaken for objective reality.",
      },
    ],
    source: {
      year: 2025,
      month: 9,
      number: 24,
      ...sources["2025-09"],
      note: "연속선과 자의적 경계의 논리만 참고하고 장학금 사례로 새로 구성함",
    },
  },
  {
    id: "q6",
    order: 6,
    section: "독해",
    type: "빈칸 추론",
    difficulty: "상",
    prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
    passage: [
      "Automatic reactions are often judged by how well they serve us now, but this can hide the conditions in which they developed. A sudden movement at the edge of vision once deserved immediate attention: it might signal an approaching animal, a falling branch, or another person. Modern interfaces exploit the same tendency with blinking badges, sliding banners, and animated alerts. Each signal pulls the eyes away from the task at hand, even when it carries little useful information. It would be easy to call users irrational for being distracted. Yet the reaction itself follows a sensible rule—rapidly inspect unexpected movement—that protected people under earlier conditions. The rule has remained while the surroundings have been deliberately filled with artificial triggers. This example shows that <span class=\"blank\">______________________________</span>.",
    ],
    choices: [
      {
        id: "A",
        text: "an automatic response becomes irrational whenever conscious thought does not precede it",
      },
      {
        id: "B",
        text: "repeated exposure to artificial signals eventually makes attention independent of movement",
      },
      {
        id: "C",
        text: "the value of a response depends on how well its rule fits the environment that triggers it",
      },
      {
        id: "D",
        text: "modern interfaces distract mainly because their signals contain too much useful information",
      },
      {
        id: "E",
        text: "responses shaped under earlier conditions cannot be altered by later experience",
      },
    ],
    source: {
      year: 2025,
      month: 6,
      number: 33,
      ...sources["2025-06"],
      note: "진화한 단서와 현대 환경의 불일치 논리만 참고하고 사례를 새로 구성함",
    },
  },
  {
    id: "q7",
    order: 7,
    section: "독해",
    type: "무관한 문장",
    difficulty: "하",
    prompt: "다음 글에서 전체 흐름과 관계없는 문장은?",
    passage: [
      "Scientific theories gain power when they forecast effects that have not yet been observed. <span class=\"sentence-marker\">①</span> In the 1860s, James Clerk Maxwell’s equations implied that changing electric and magnetic fields could travel through space as waves. <span class=\"sentence-marker\">②</span> The equations also suggested that these waves would move at approximately the speed of light, linking light to electromagnetism. <span class=\"sentence-marker\">③</span> Scientific laboratories in Europe were often designed with large windows to provide researchers with natural light. <span class=\"sentence-marker\">④</span> Years later, Heinrich Hertz generated electromagnetic waves and detected them across his laboratory. <span class=\"sentence-marker\">⑤</span> His result supported Maxwell’s prediction and opened the way for technologies based on radio transmission.",
    ],
    choices: [
      { id: "A", text: "첫 번째 문장" },
      { id: "B", text: "두 번째 문장" },
      { id: "C", text: "세 번째 문장" },
      { id: "D", text: "네 번째 문장" },
      { id: "E", text: "다섯 번째 문장" },
    ],
    source: {
      year: 2025,
      month: 9,
      number: 35,
      ...sources["2025-09"],
      note: "과학 이론의 예측과 검증 구조 및 무관문 유형만 참고하고 사례를 새로 작성함",
    },
  },
  {
    id: "q8",
    order: 8,
    section: "독해",
    type: "글의 순서",
    difficulty: "상",
    prompt: "주어진 글 다음에 이어질 글의 순서로 가장 적절한 것은?",
    passage: [
      "For centuries, music could survive only through live performance or written notation. Both methods preserved part of a composition, but neither captured the exact sound of a particular performance.",
      "<strong>(A)</strong> That limitation was reduced by digital recording. Because a performance was encoded as digital data, copies could be made without cumulative loss, and a recording could be accessed repeatedly without the wear caused by playing a disc or tape. Yet this solution introduced a new dependence on software and file formats.",
      "<strong>(B)</strong> The first recording devices changed this situation by storing sound itself on cylinders and discs. However, these objects were easily scratched, offered little playing time, and gradually lost quality through repeated use.",
      "<strong>(C)</strong> Magnetic tape addressed several of those weaknesses: it held longer performances and could be edited. Still, every copy was slightly less faithful than the one before it, and the tape could stretch or decay. A medium was needed that would not degrade each time its contents were duplicated.",
    ],
    choices: [
      { id: "A", text: "(A) － (B) － (C)" },
      { id: "B", text: "(A) － (C) － (B)" },
      { id: "C", text: "(B) － (A) － (C)" },
      { id: "D", text: "(B) － (C) － (A)" },
      { id: "E", text: "(C) － (A) － (B)" },
    ],
    source: {
      year: 2025,
      month: 6,
      number: 36,
      ...sources["2025-06"],
      note: "기록 매체 발전 논리와 지시어 중심 순서 유형만 참고하고 소재를 새로 구성함",
    },
  },
  {
    id: "q9",
    order: 9,
    section: "독해",
    type: "문장 삽입",
    difficulty: "상",
    prompt: "글의 흐름으로 보아, 주어진 문장이 들어가기에 가장 적절한 곳은?",
    passage: [
      "<span class=\"given-sentence\">This two-way support is what lets the material resist pressure from several directions without becoming unnecessarily heavy.</span>",
      "Corrugated cardboard looks simple, but understanding its strength requires examining two different structures. <span class=\"gap-marker\">( ① )</span> The flat outer sheets resist pulling forces and provide smooth surfaces for printing. <span class=\"gap-marker\">( ② )</span> Between them, a wavy inner layer acts like a row of tiny arches. <span class=\"gap-marker\">( ③ )</span> When the box is pressed from above, those arches spread the load instead of allowing it to concentrate at one point. <span class=\"gap-marker\">( ④ )</span> The outer sheets keep the arches aligned, while the inner layer prevents the sheets from folding inward. <span class=\"gap-marker\">( ⑤ )</span> As a result, a box made mostly of air can protect heavy objects during transport.",
    ],
    choices: [
      { id: "A", text: "① 위치" },
      { id: "B", text: "② 위치" },
      { id: "C", text: "③ 위치" },
      { id: "D", text: "④ 위치" },
      { id: "E", text: "⑤ 위치" },
    ],
    source: {
      year: 2025,
      month: 9,
      number: 39,
      ...sources["2025-09"],
      note: "재료의 상반된 기능 결합 논리와 문장 삽입 유형만 참고하고 소재를 새로 구성함",
    },
  },
  {
    id: "q10",
    order: 10,
    section: "독해",
    type: "요약문 완성",
    difficulty: "중",
    prompt:
      "다음 글의 내용을 한 문장으로 요약하고자 한다. 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?",
    passage: [
      "Common terns raise their young in dense colonies where many nests are built only a short distance apart. Parents can recognize the calls of their own chicks and normally deliver food only to them. Their response to danger, however, is much less selective. When a bird gives an alarm near one nest, adults from several neighboring nests often gather and dive at the approaching predator. Some of those adults may be defending chicks that are not their own. At first, this behavior seems to waste energy that could be reserved for their families. Yet a predator allowed to hunt undisturbed at one nest is likely to visit others. By joining the defense immediately, each adult helps drive the threat away from the entire nesting area, indirectly improving the safety of its own young.",
      "<span class=\"summary-label\">요약문</span> Although adult common terns can <strong>(A)</strong> their own chicks from others, they may defend any nearby nest because a joint response can <strong>(B)</strong> danger to the whole colony.",
    ],
    choices: [
      { id: "A", text: "distinguish － reduce" },
      { id: "B", text: "tell － intensify" },
      { id: "C", text: "remove － reduce" },
      { id: "D", text: "protect － attract" },
      { id: "E", text: "abandon － spread" },
    ],
    source: {
      year: 2025,
      month: 9,
      number: 40,
      ...sources["2025-09"],
      note: "개체 식별과 집단 위험 감소 논리 및 요약 유형만 참고하고 동물과 상황을 새로 구성함",
    },
  },
];
