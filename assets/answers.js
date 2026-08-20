/**
 * @typedef {Object} Answer
 * @property {string} questionId - questions.js의 Question.id와 일치
 * @property {"A"|"B"|"C"|"D"|"E"} correctChoice - 정답 선택지 ID
 * @property {string} rationale - 정답의 핵심 근거
 * @property {string} evidence - 지문에서 확인할 표현과 해석
 * @property {Partial<Record<"A"|"B"|"C"|"D"|"E", string>>} distractors - 오답 해설
 * @property {{term: string, meaning: string}[]} vocabulary - 핵심 어휘
 * @property {string[]} teachingPoints - 수업에서 짚을 학습 요소
 */

/** @type {Answer[]} */
export const answers = [
  {
    questionId: "q1",
    correctChoice: "E",
    rationale:
      "글은 관점 취하기가 정서적 소진, 내집단 편향, 잘못된 확신을 낳을 수 있다고 설명한 뒤 다른 접근이 필요하다고 명시합니다. 따라서 공감을 더 요구하는 것만으로 협력을 만들기에 ‘충분하다’는 sufficient는 insufficient로 바꾸어야 합니다.",
    evidence:
      "“A different approach is needed.”와 이어지는 연민의 대안은 공감만으로는 안정적인 협력을 만들기에 부족하다는 판단을 분명히 보여 줍니다.",
    distractors: {
      A: "engaged는 다른 사람의 감정에 정서적으로 관여한다는 문맥에 적절합니다.",
      B: "selective는 가까운 친구와 낯선 또래에게 서로 다른 정도의 관심을 보인다는 문맥에 적절합니다.",
      C: "deepen은 경쟁 상황에서 편향이 분열을 심화할 수 있다는 의미에 적절합니다.",
      D: "distort는 경험하지 못한 일을 섣불리 이해했다고 믿을 때 타인의 필요를 왜곡할 수 있다는 의미에 적절합니다.",
    },
    vocabulary: [
      { term: "perspective-taking", meaning: "관점 취하기" },
      { term: "selective", meaning: "선택적인, 편향된" },
      { term: "distort", meaning: "왜곡하다" },
      { term: "compassion", meaning: "연민" },
    ],
    teachingPoints: ["역접 이후 논리 추적", "문맥상 반의어 판단", "공감과 연민의 구분"],
  },
  {
    questionId: "q2",
    correctChoice: "D",
    rationale:
      "주어 Our town 뒤의 needs는 해야 할 행동을 나타내므로 목적어 역할의 to부정사가 필요합니다. needs redesign은 needs to redesign으로 고쳐야 합니다.",
    evidence:
      "문장의 뼈대는 “Our town needs to redesign its growth plan.”입니다. need가 일반동사일 때 뒤에 행동을 이어 주려면 need to do 구조를 사용합니다.",
    distractors: {
      A: "begin to do 구조이므로 to give는 적절합니다.",
      B: "주어 Each marsh가 단수이므로 filters가 적절하며, stores와 provides도 병렬을 이룹니다.",
      C: "가주어 it이 뒤의 to see 내용을 받으므로 적절합니다.",
      E: "선행사 areas에서 건설이 제한된다는 뜻이므로 장소 관계 표현 in which가 적절합니다.",
    },
    vocabulary: [
      { term: "wetland", meaning: "습지" },
      { term: "infrastructure", meaning: "기반 시설" },
      { term: "pollutant", meaning: "오염 물질" },
      { term: "ecological stability", meaning: "생태적 안정성" },
    ],
    teachingPoints: ["need to do", "단수 주어 수일치", "가주어 it", "전치사+관계대명사"],
  },
  {
    questionId: "q3",
    correctChoice: "A",
    rationale:
      "there + be 구문의 수는 뒤에 오는 실제 주어에 일치시킵니다. 실제 주어 several changes가 복수이므로 there is가 아니라 there are가 되어야 합니다.",
    evidence:
      "“there is several changes”에서 there는 형식적인 자리만 차지합니다. 실제 주어가 several changes이므로 복수 동사 are를 사용해야 합니다.",
    distractors: {
      B: "탁자가 위에서 보이는 수동 관계이므로 과거분사 viewed가 적절합니다.",
      C: "seem to do 구조이므로 to meet가 적절합니다.",
      D: "앞 절의 결과를 덧붙이는 분사구문이므로 allowing이 적절합니다.",
      E: "복수 주어 they와 일치하며, 실제와 다른 듯한 모습을 나타내는 as though 절에도 were가 적절합니다.",
    },
    vocabulary: [
      { term: "observer", meaning: "관찰자" },
      { term: "parallel", meaning: "평행한" },
      { term: "viewpoint", meaning: "관찰 지점" },
      { term: "spatial", meaning: "공간의" },
    ],
    teachingPoints: ["there + be 수일치", "과거분사 수식", "seem to do", "분사구문"],
  },
  {
    questionId: "q4",
    correctChoice: "B",
    rationale:
      "글은 기술이 일부 업무를 대체하는 동시에 다른 업무의 가치를 높이고 새로운 노동 수요를 만든다는 양면성을 설명합니다. 대체와 창출을 함께 담은 ②가 글 전체를 가장 잘 포괄합니다.",
    evidence:
      "“take over one task while making another task more valuable”과 마지막 문장의 “removes, reshapes, and expands demand”가 중심 내용을 직접 드러냅니다.",
    distractors: {
      A: "인간 노동이 완전히 패배한다고 단정해 글의 양면적 논지와 맞지 않습니다.",
      C: "번역은 중심 주장을 설명하는 사례일 뿐이며, 번역 산업이 사라진다고 하지 않았습니다.",
      D: "모든 노동자가 동일한 혜택을 받는다는 내용은 본문에서 오히려 부정됩니다.",
      E: "기계가 절대 배울 수 없는 하나의 기술을 제시하지 않았습니다.",
    },
    vocabulary: [
      { term: "ambiguity", meaning: "모호성" },
      { term: "negotiate", meaning: "조율하다, 협상하다" },
      { term: "unevenly distributed", meaning: "불균등하게 분배된" },
      { term: "reshape", meaning: "재편하다" },
    ],
    teachingPoints: ["사례와 중심 주장 구분", "대조 구조", "제목의 포괄 범위"],
  },
  {
    questionId: "q5",
    correctChoice: "D",
    rationale:
      "글은 경계선이 자연적으로 존재하는 본질적 차이가 아니라 행정상 만들어진 결정일 수 있다고 강조합니다. 기준선이 언제나 자연적 차이를 드러낸다는 ④는 본문과 반대입니다.",
    evidence:
      "“the line is a decision rather than a natural boundary”가 ④의 주장과 직접 반대됩니다.",
    distractors: {
      A: "첫 문장에서 측정되는 특성은 점진적으로 변하지만 기관은 이를 범주화한다고 설명합니다.",
      B: "제한된 장학기금을 배분하려면 기준선이 필요할 수 있다는 내용과 일치합니다.",
      C: "79점과 80점의 작은 차이가 이후 기회에는 큰 차이를 만든다는 사례와 일치합니다.",
      E: "선택된 선을 객관적 현실로 오해할 때 문제가 생긴다는 결론과 일치합니다.",
    },
    vocabulary: [
      { term: "cutoff", meaning: "기준점, 경계 점수" },
      { term: "threshold", meaning: "기준선, 문턱" },
      { term: "fundamentally", meaning: "근본적으로" },
      { term: "administrative convenience", meaning: "행정적 편의" },
    ],
    teachingPoints: ["내용 일치 근거 대조", "rather than", "경계선 효과"],
  },
  {
    questionId: "q6",
    correctChoice: "C",
    rationale:
      "갑작스러운 움직임에 주의를 돌리는 반응은 과거 환경에서는 유용했지만, 인공적 신호가 넘치는 현대 환경에서는 집중을 방해합니다. 따라서 반응의 유용성은 그 규칙과 현재 환경이 얼마나 잘 맞는지에 따라 달라진다는 ③이 적절합니다.",
    evidence:
      "“The rule has remained while the surroundings have been deliberately filled with artificial triggers.”라는 대조가 과거의 적응적 규칙과 현재 환경의 불일치를 나타냅니다.",
    distractors: {
      A: "자동 반응 자체가 항상 비합리적인 것이 아니라 환경에 따라 유용성이 달라진다는 글과 맞지 않습니다.",
      B: "반복 노출로 주의가 움직임과 무관해진다는 변화는 제시되지 않았습니다.",
      D: "본문은 알림이 유용한 정보가 적어도 주의를 끈다고 설명하므로 반대입니다.",
      E: "과거에 형성된 반응이 이후 경험으로 절대 바뀔 수 없다고 주장하지 않았습니다.",
    },
    vocabulary: [
      { term: "peripheral vision", meaning: "주변 시야" },
      { term: "exploit", meaning: "이용하다" },
      { term: "adaptive", meaning: "환경 적응에 유리한" },
      { term: "misfire", meaning: "잘못 작동하다" },
    ],
    teachingPoints: ["구체적 사례의 일반화", "과거 적응과 현재 부적응", "빈칸 전후 대조"],
  },
  {
    questionId: "q7",
    correctChoice: "C",
    rationale:
      "글은 이론이 새로운 현상을 예측하고 후대의 실험이 그 예측을 확인하는 과정을 설명합니다. 실험실 창문의 설계는 이 예측과 검증의 논리에서 벗어납니다.",
    evidence:
      "①과 ②는 Maxwell의 예측, ④는 Hertz의 실험, ⑤는 실험의 의미를 연결합니다. ③만 연구실의 건축적 특징을 말합니다.",
    distractors: {
      A: "검증될 이론적 예측을 도입합니다.",
      B: "예측 내용을 빛의 속도와 전자기학의 관계로 구체화합니다.",
      D: "앞에서 제시한 예측을 실제로 검증한 실험을 설명합니다.",
      E: "실험 결과가 이론을 지지했음을 결론으로 제시합니다.",
    },
    vocabulary: [
      { term: "forecast", meaning: "예측하다" },
      { term: "imply", meaning: "암시하다, 함축하다" },
      { term: "electromagnetic", meaning: "전자기의" },
      { term: "transmission", meaning: "전송" },
    ],
    teachingPoints: ["예측→실험→확인", "소재와 논리의 구분", "무관문 제거 후 흐름 검증"],
  },
  {
    questionId: "q8",
    correctChoice: "D",
    rationale:
      "초기 녹음 장치가 등장한 뒤 그 약점을 자기 테이프가 보완하고, 복제할 때마다 품질이 낮아지는 테이프의 한계를 디지털 녹음이 줄이는 순서가 자연스럽습니다. 따라서 (B)－(C)－(A)입니다.",
    evidence:
      "(B)의 this situation은 주어진 글의 한계를, (C)의 those weaknesses는 (B)의 흠집·짧은 재생 시간·품질 저하를, (A)의 That limitation은 (C)의 복제 품질 저하를 각각 받습니다.",
    distractors: {
      A: "(A)의 That limitation이 가리킬 선행 내용이 없습니다.",
      B: "(A)의 지시 대상이 없고 이후 기술의 발전 순서도 거꾸로 이어집니다.",
      C: "초기 녹음 장치 다음에 디지털 기술이 나온 뒤 다시 자기 테이프로 돌아가 시간 순서가 어긋납니다.",
      E: "(C)의 those weaknesses가 가리킬 초기 녹음 장치의 약점이 앞에 제시되지 않습니다.",
    },
    vocabulary: [
      { term: "notation", meaning: "기보법" },
      { term: "magnetic tape", meaning: "자기 테이프" },
      { term: "faithful", meaning: "원본에 충실한" },
      { term: "degrade", meaning: "품질이 저하되다" },
    ],
    teachingPoints: ["지시어의 선행사", "기술 발전의 시간 순서", "두 개 이상 연결 단서 확인"],
  },
  {
    questionId: "q9",
    correctChoice: "E",
    rationale:
      "주어진 문장의 This two-way support는 바로 앞 문장에서 설명한 외부 판과 내부 물결층의 상호 지지를 가리킵니다. 뒤의 As a result는 그 상호 지지가 만든 결과를 제시하므로 ⑤ 위치가 적절합니다.",
    evidence:
      "“The outer sheets keep the arches aligned, while the inner layer prevents the sheets from folding inward.” 다음에 주어진 문장을 넣으면 양방향 지지의 설명과 결과가 정확히 이어집니다.",
    distractors: {
      A: "두 구조가 구체적으로 어떻게 서로 지지하는지 아직 설명되지 않았습니다.",
      B: "외부 판의 기능만 제시되어 two-way support의 선행 내용이 없습니다.",
      C: "두 층은 소개되었지만 서로 지지하는 관계는 아직 제시되지 않았습니다.",
      D: "아치의 하중 분산만 설명되었고 양방향 지지 관계는 아직 나오지 않았습니다.",
    },
    vocabulary: [
      { term: "corrugated cardboard", meaning: "골판지" },
      { term: "pulling force", meaning: "인장력" },
      { term: "distribute the load", meaning: "하중을 분산하다" },
      { term: "align", meaning: "정렬된 상태로 유지하다" },
    ],
    teachingPoints: ["This의 선행 내용", "양방향 문맥 연결", "As a result 결과 관계"],
  },
  {
    questionId: "q10",
    correctChoice: "A",
    rationale:
      "성체 제비갈매기는 자기 새끼를 구별하지만 포식자가 군락 전체를 위협할 수 있으므로 다른 둥지 근처의 경고에도 공동 대응합니다. 따라서 distinguish와 reduce의 조합이 적절합니다.",
    evidence:
      "(A)는 “recognize the calls of their own chicks”를 바꿔 쓴 것이고, (B)는 공동 방어가 포식자를 쫓아 군락 전체의 위험을 낮춘다는 내용을 압축한 것입니다.",
    distractors: {
      B: "tell A from B는 구별한다는 뜻으로 (A)에는 맞지만, 공동 방어는 위험을 심화하지 않습니다.",
      C: "reduce는 (B)에 맞지만, 자기 새끼를 다른 새끼들로부터 물리적으로 떼어 놓는다는 내용은 없습니다.",
      D: "다른 새끼들로부터 자기 새끼를 보호하거나 위험을 끌어들인다는 내용과 맞지 않습니다.",
      E: "새끼를 버리거나 위험을 퍼뜨린다는 내용은 없습니다.",
    },
    vocabulary: [
      { term: "dense colony", meaning: "밀집 군락" },
      { term: "selective", meaning: "선택적인" },
      { term: "predator", meaning: "포식자" },
      { term: "joint response", meaning: "공동 대응" },
    ],
    teachingPoints: ["Although 대조", "요약어 대응", "두 빈칸의 의미 결합"],
  },
];
