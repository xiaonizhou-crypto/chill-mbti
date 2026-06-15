/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface QuestionOption {
  value: 'A' | 'B';
  text: string;
  dimension: string; // The letter it contributes to: E, I, S, N, T, F, J, P
}

export interface Question {
  id: number;
  text: string;
  options: [QuestionOption, QuestionOption];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "新入职第一周，午休时间你更想——",
    options: [
      { value: 'A', text: "找同事一起吃饭，快速熟悉团队", dimension: 'E' },
      { value: 'B', text: "自己吃，先观察一下环境和工作节奏", dimension: 'I' }
    ]
  },
  {
    id: 2,
    text: "开会讨论方案时，你通常会——",
    options: [
      { value: 'A', text: "边想边说，在交流讨论中完善想法", dimension: 'E' },
      { value: 'B', text: "先想清楚再发言，说出来的就是最终决定", dimension: 'I' }
    ]
  },
  {
    id: 3,
    text: "老板说'把这个项目做好'，你的第一反应是——",
    options: [
      { value: 'A', text: "确认具体指标：截止时间、预算、验收标准", dimension: 'S' },
      { value: 'B', text: "思考这个项目背后的战略意图，明确根本方向", dimension: 'N' }
    ]
  },
  {
    id: 4,
    text: "在挑选心仪的工作单位时，你更看重——",
    options: [
      { value: 'A', text: "薪资、Title、公司现有的成熟规模和保障", dimension: 'S' },
      { value: 'B', text: "业务未来的成长空间，以及行业的前景可能性", dimension: 'N' }
    ]
  },
  {
    id: 5,
    text: "当同事的方案有明显漏洞，但他很用心准备时，你通常会——",
    options: [
      { value: 'A', text: "直接指出问题，对事不对人，效率第一", dimension: 'T' },
      { value: 'B', text: "先肯定用心的部分，呵护热情，再婉转提出改进", dimension: 'F' }
    ]
  },
  {
    id: 6,
    text: "面临两个Offer候选，你会倾向于选择——",
    options: [
      { value: 'A', text: "薪资高30%但团队氛围和企业文化一般的公司", dimension: 'T' },
      { value: 'B', text: "薪资中等但团队氛围极好、导师特别契合的公司", dimension: 'F' }
    ]
  },
  {
    id: 7,
    text: "接到一个紧急突发的新项目，你的首要行动是——",
    options: [
      { value: 'A', text: "列出详细计划、排期和分工，一步一步严谨推进", dimension: 'J' },
      { value: 'B', text: "先收集信息并随机应变，边做边探索更多的可能性", dimension: 'P' }
    ]
  },
  {
    id: 8,
    text: "你理想中的日常工作和交付状态是——",
    options: [
      { value: 'A', text: "目标明确且稳定，按部就班按计划提前交付", dimension: 'J' },
      { value: 'B', text: "适应快速变化，在Deadline临近时爆发出高能产出", dimension: 'P' }
    ]
  }
];

/**
 * Calculates the MBTI type based on progress selection
 * @param answers Array of chosen option values ('A', 'B' or 'C') for questions 0-7
 */
export function calculateMBTI(answers: ('A' | 'B' | 'C')[]): string {
  let eCount = 0;
  let iCount = 0;
  let sCount = 0;
  let nCount = 0;
  let tCount = 0;
  let fCount = 0;
  let jCount = 0;
  let pCount = 0;

  // Question 1, 2 (idx 0, 1) -> E/I
  for (let i = 0; i < 2; i++) {
    const val = answers[i];
    if (val === 'A') {
      eCount += 1.0;
    } else if (val === 'B') {
      iCount += 1.0;
    } else if (val === 'C') {
      eCount += 0.5;
      iCount += 0.5;
    }
  }

  // Question 3, 4 (idx 2, 3) -> S/N
  for (let i = 2; i < 4; i++) {
    const val = answers[i];
    if (val === 'A') {
      sCount += 1.0;
    } else if (val === 'B') {
      nCount += 1.0;
    } else if (val === 'C') {
      sCount += 0.5;
      nCount += 0.5;
    }
  }

  // Question 5, 6 (idx 4, 5) -> T/F
  for (let i = 4; i < 6; i++) {
    const val = answers[i];
    if (val === 'A') {
      tCount += 1.0;
    } else if (val === 'B') {
      fCount += 1.0;
    } else if (val === 'C') {
      tCount += 0.5;
      fCount += 0.5;
    }
  }

  // Question 7, 8 (idx 6, 7) -> J/P
  for (let i = 6; i < 8; i++) {
    const val = answers[i];
    if (val === 'A') {
      jCount += 1.0;
    } else if (val === 'B') {
      pCount += 1.0;
    } else if (val === 'C') {
      jCount += 0.5;
      pCount += 0.5;
    }
  }

  // For 2-question axes, a tie (1 each) defaults to: E, N, T, J (represented as primary workplace drivers)
  const mbti = [
    eCount >= iCount ? 'E' : 'I',
    sCount >= nCount ? 'S' : 'N',
    tCount >= fCount ? 'T' : 'F',
    jCount >= pCount ? 'J' : 'P'
  ].join('');

  return mbti;
}
