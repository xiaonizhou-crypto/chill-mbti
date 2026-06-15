/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MBTIProfile {
  type: string;
  name: string;
  group: 'analyst' | 'diplomat' | 'sentinel' | 'explorer';
  groupName: string;
  color: string; // hex color or Tailwind color class prefix
  tagline: string;
  style: string;
  strengths: string[];
  needBoss: string;
  bestBosses: string[];
  worstBosses: string[];
  matchExplanation: string;
  alertMessage: string;
}

export const mbtiColorSchema = {
  analyst: {
    color: '#8B5CF6', // Purple v4
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    text: 'text-violet-700',
    darkBg: 'bg-violet-950',
    accent: '#A78BFA',
    groupName: "分析师"
  },
  diplomat: {
    color: '#10B981', // Green
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    darkBg: 'bg-emerald-950',
    accent: '#34D399',
    groupName: "外交官"
  },
  sentinel: {
    color: '#14B8A6', // Teal
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    text: 'text-teal-700',
    darkBg: 'bg-teal-950',
    accent: '#2DD4BF',
    groupName: "守卫者"
  },
  explorer: {
    color: '#F59E0B', // Amber
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    darkBg: 'bg-amber-950',
    accent: '#FBBF24',
    groupName: "探索者"
  }
};

export const mbtiProfiles: Record<string, MBTIProfile> = {
  INTJ: {
    type: "INTJ",
    name: "战略建筑师",
    group: "analyst",
    groupName: "分析师",
    color: "#5E35B1",
    tagline: "别管我怎么做，看结果就行",
    style: "独立思考，讨厌被微管理，喜欢从0到1搭建体系",
    strengths: ["系统性思维", "长期规划", "独立执行力强"],
    needBoss: "给空间、看结果不看过程、逻辑对等沟通",
    bestBosses: ["ENTJ", "ENTP"],
    worstBosses: ["ESFJ", "ESTJ"],
    matchExplanation: "你需要一个有远见、不废话、给你足够空间的老板。ENTJ 老板和你最合拍——都看大局，效率至上。",
    alertMessage: "如果老板每天问进度、要求事事汇报，你会窒息。面试时注意观察管理密度。"
  },
  INTP: {
    type: "INTP",
    name: "逻辑极客",
    group: "analyst",
    groupName: "分析师",
    color: "#5E35B1",
    tagline: "让我想明白，比让我快点做更重要",
    style: "深度思考型，需要理解'为什么'才能行动，讨厌重复和形式主义",
    strengths: ["深度分析", "创新思维", "技术钻研"],
    needBoss: "容忍思考时间、不催不压、技术对话能力",
    bestBosses: ["ENTJ", "INTJ"],
    worstBosses: ["ESFJ", "ESTJ"],
    matchExplanation: "你需要一个懂技术、不催活、能和你深度讨论问题的老板。ENTJ 老板能帮你把想法落地。",
    alertMessage: "如果老板说'别想那么多先做了再说'，你们不合适。"
  },
  ENTJ: {
    type: "ENTJ",
    name: "指挥官",
    group: "analyst",
    groupName: "分析师",
    color: "#5E35B1",
    tagline: "目标在那，怎么到我来定",
    style: "天生领导者，高效决策，喜欢掌控节奏和方向",
    strengths: ["决策力强", "推动力", "全局思维"],
    needBoss: "放权、战略对齐、不拖泥带水",
    bestBosses: ["ENTJ", "INTJ"],
    worstBosses: ["ISFP", "INFP"],
    matchExplanation: "你需要一个段位更高、能给你更大舞台的老板，而不是事事过问的管理者。双 ENTJ 强强连手，或搭档 INTJ 运筹帷幄都是顶级匹配。",
    alertMessage: "如果老板比你还慢、决策拖沓，你会非常痛苦。"
  },
  ENTP: {
    type: "ENTP",
    name: "点子发动机",
    group: "analyst",
    groupName: "分析师",
    color: "#5E35B1",
    tagline: "规则？那是用来改的",
    style: "创意驱动，讨厌重复，善于发现新机会和新玩法",
    strengths: ["创新能力", "口才说服力", "跨领域连接"],
    needBoss: "容许试错、开放讨论、不死板",
    bestBosses: ["INTJ", "ENTJ"],
    worstBosses: ["ISTJ", "ISFJ"],
    matchExplanation: "你需要一个敢让你试新东西、不被失败吓到的老板。INTJ 老板可以帮你把疯狂想法变成可执行方案。",
    alertMessage: "如果老板说'我们一直都是这么做的'，快跑。"
  },
  INFJ: {
    type: "INFJ",
    name: "洞察者",
    group: "diplomat",
    groupName: "外交官",
    color: "#2E7D32",
    tagline: "表面在干活，其实在看人",
    style: "看重意义感，善于理解人和组织动态，需要深度连接",
    strengths: ["洞察力", "使命驱动", "沟通深度"],
    needBoss: "真诚、有愿景、尊重个体",
    bestBosses: ["ENFJ", "INFJ"],
    worstBosses: ["ESTP", "ESTJ"],
    matchExplanation: "你需要一个有使命感、真诚对待团队的老板。ENFJ 老板能给你归属感和方向感，并高度赏识你的直觉。",
    alertMessage: "如果老板只谈KPI不谈为什么，你的热情会迅速耗尽。"
  },
  INFP: {
    type: "INFP",
    name: "理想主义者",
    group: "diplomat",
    groupName: "外交官",
    color: "#2E7D32",
    tagline: "不是不能卷，是觉得不值得卷",
    style: "价值观驱动，需要认同感，讨厌虚伪和无意义的内卷",
    strengths: ["创意表达", "共情力", "忠诚度"],
    needBoss: "尊重、给空间、不 PUA",
    bestBosses: ["ENFJ", "INFJ"],
    worstBosses: ["ESTJ", "ENTJ"],
    matchExplanation: "你需要一个理解你、不强压你、能看到你独特价值的老板。ENFJ 老板是最好的伯乐，能用温暖的话语点燃你的引擎。",
    alertMessage: "如果面试时感受到'狼性文化''结果导向''不问过程'，大概率不适合你。"
  },
  ENFJ: {
    type: "ENFJ",
    name: "团队灵魂",
    group: "diplomat",
    groupName: "外交官",
    color: "#2E7D32",
    tagline: "搞定事之前，先搞定人",
    style: "天生的团队 builder，善于激发他人，在乎每个人的状态",
    strengths: ["领导力", "团队凝聚", "沟通影响力"],
    needBoss: "被认可、参与决策、价值对齐",
    bestBosses: ["ENFJ", "ENTJ"],
    worstBosses: ["ISTP", "INTP"],
    matchExplanation: "你需要一个认可你贡献、让你参与决策的老板。同类 ENFJ 老板最懂你，能携手共筑有温度的组织；ENTJ 则能给你强大的商业施展底气。",
    alertMessage: "如果老板从不给正反馈、把你的付出当理所当然，你会心寒。"
  },
  ENFP: {
    type: "ENFP",
    name: "热情传播者",
    group: "diplomat",
    groupName: "外交官",
    color: "#2E7D32",
    tagline: "人生苦短，工作得有意思",
    style: "创意+社交双引擎，讨厌枯燥和官僚，需要新鲜感",
    strengths: ["感染力", "创意输出", "人脉广"],
    needBoss: "自由度、鼓励、不死板",
    bestBosses: ["INTJ", "INFJ"],
    worstBosses: ["ISTJ", "ESTJ"],
    matchExplanation: "你需要一个给你自由、欣赏你创意的老板。INTJ 老板帮你精简聚焦，辅助你把灵感转化为现实成果。",
    alertMessage: "如果公司流程比产出还多，你待不过试用期。"
  },
  ISTJ: {
    type: "ISTJ",
    name: "可靠执行者",
    group: "sentinel",
    groupName: "守卫者",
    color: "#00796B",
    tagline: "说了做，做了说，不含糊",
    style: "靠谱担当，重流程和规则，讨厌模糊指令和朝令夕改",
    strengths: ["执行力", "责任感", "细节把控"],
    needBoss: "目标清晰、规则稳定、言出必行",
    bestBosses: ["ESTJ", "ISTJ"],
    worstBosses: ["ENTP", "ENFP"],
    matchExplanation: "你需要一个靠谱、守规矩、不乱改方向的老板。ESTJ 老板注重细节，信守承诺，能和你达成极度舒适的稳定配合节奏。",
    alertMessage: "如果老板经常'我们灵活一点''方向可能要调'，你会很焦虑。"
  },
  ISFJ: {
    type: "ISFJ",
    name: "暖心守护者",
    group: "sentinel",
    groupName: "守卫者",
    color: "#00796B",
    tagline: "默默把事做好，不争不抢",
    style: "低调实干，在乎团队和谐，不喜欢冲突和竞争",
    strengths: ["可靠", "细心", "团队协作"],
    needBoss: "稳定、被看见、不搞办公室政治",
    bestBosses: ["ESFJ", "ENFJ"],
    worstBosses: ["ENTP", "ENTJ"],
    matchExplanation: "你需要一个温暖、注重团队氛围的老板。ESFJ 老板注重人情味且有条理，最能让你安心、无后顾之忧地扎实工作。",
    alertMessage: "如果团队氛围紧张、老板喜欢搞内部恶意竞争和排名，你会很不舒服。"
  },
  ESTJ: {
    type: "ESTJ",
    name: "效率铁腕",
    group: "sentinel",
    groupName: "守卫者",
    color: "#00796B",
    tagline: "别跟我讲感受，讲数据",
    style: "结果导向，重效率和执行力，喜欢有条理的工作方式",
    strengths: ["组织能力", "执行推动", "标准化流程"],
    needBoss: "授权明确、赏罚分明、不拖泥带水",
    bestBosses: ["ENTJ", "ESTJ"],
    worstBosses: ["INFP", "ENFP"],
    matchExplanation: "你需要一个行事果断、授权清晰的老板。ENTJ 老板能理清终极战场，给你非常明确的数据化目标和高产出汇报线。",
    alertMessage: "如果老板决策慢、喜欢开很多虚无缥缈的'务虚会'或对齐会，你会烦躁。"
  },
  ESFJ: {
    type: "ESFJ",
    name: "团队粘合剂",
    group: "sentinel",
    groupName: "守卫者",
    color: "#00796B",
    tagline: "大家好才是真的好",
    style: "在乎人际关系，善于维护团队氛围，讨厌冷漠和不尊重",
    strengths: ["人际协调", "服务意识", "执行稳定"],
    needBoss: "尊重、正面反馈、团队文化好",
    bestBosses: ["ENFJ", "ESFJ"],
    worstBosses: ["INTJ", "INTP"],
    matchExplanation: "你需要一个重视团队文化、有同理心、愿意公开发表鼓励与赞誉的老板。ENFJ 重情重义，会让你的努力备受赞扬。",
    alertMessage: "如果老板从不说'辛苦了'、只谈冰冷的算法、效率和指标，你会觉得不被看见而受委屈。"
  },
  ISTP: {
    type: "ISTP",
    name: "冷静手艺人",
    group: "explorer",
    groupName: "探索者",
    color: "#F57F17",
    tagline: "别 BB，让我上手试试",
    style: "动手能力强，喜欢解决实际问题，讨厌空谈和形式",
    strengths: ["问题解决", "极速响应", "冷静应变"],
    needBoss: "不啰嗦、给实际问题、放手让做",
    bestBosses: ["INTJ", "ENTJ"],
    worstBosses: ["ENFJ", "ESFJ"],
    matchExplanation: "你需要一个不废话、直接给你技术/业务卡点、放手让你拆解解决的老板。INTJ 提供的极简主义极有逻辑感，深得你心。",
    alertMessage: "如果老板天天开晨会、要求写每日周报明细、处处微观管理，你会感到被严重桎梏。"
  },
  ISFP: {
    type: "ISFP",
    name: "安静的创作者",
    group: "explorer",
    groupName: "探索者",
    color: "#F57F17",
    tagline: "给我空间，我还你惊喜",
    style: "审美驱动，需要创作自由，讨厌被条条框框框住和催促",
    strengths: ["审美独特", "高创造力", "高神入专注力"],
    needBoss: "给足艺术空间、少催进度、懂设计与审美",
    bestBosses: ["INFJ", "ENFP"],
    worstBosses: ["ESTJ", "ENTJ"],
    matchExplanation: "你需要一个懂得欣赏、给你充分布白与创作自由的老板。INFJ 老板天生敏感于深层艺术，能用深邃愿景保护你不受冰冷 KPI 侵扰。",
    alertMessage: "如果老板只要干瘪的'快快快'、不懂美学、事事用标准化硬套，你会觉得十分折磨。"
  },
  ESTP: {
    type: "ESTP",
    name: "行动派破局者",
    group: "explorer",
    groupName: "探索者",
    color: "#F57F17",
    tagline: "想那么多干嘛，先干了再说",
    style: "行动力极强，喜欢挑战和竞争，讨厌慢吞吞和优柔寡断",
    strengths: ["即刻行动力", "危机公关力", "强竞争意识"],
    needBoss: "决策快、给大战场、利益分配公允",
    bestBosses: ["ENTJ", "ESTP"],
    worstBosses: ["INFJ", "INFP"],
    matchExplanation: "你需要一个极其果断、敢吃大饼也真分肉的老板。ENTJ 的野心勃勃搭配你的前线冲锋，是市场上最无坚不摧的赚钱组合。",
    alertMessage: "如果老板凡事都要'我们开会研究一下'、优柔寡断甚至想好几天，你会直接破防离职。"
  },
  ESFP: {
    type: "ESFP",
    name: "快乐感染者",
    group: "explorer",
    groupName: "探索者",
    color: "#F57F17",
    tagline: "工作不开心，赚再多也没意思",
    style: "氛围感驱动，喜欢有趣的人和有活力的团队",
    strengths: ["超强凝聚", "现场爆发力", "公关表达性"],
    needBoss: "亲和、积极鼓励、允许在开心中干完活",
    bestBosses: ["ENFJ", "ENFP"],
    worstBosses: ["INTJ", "ISTJ"],
    matchExplanation: "你需要一个有天然亲和力、能带着大家快乐破冰并懂得发红利的老板。ENFJ 和 ENFP 的能量圈，能引爆你的创作和展现灵感。",
    alertMessage: "如果办公室死气沉沉静得像图书馆、老板面无表情，你的情绪能量会被瞬间封印。"
  }
};

export function getProfile(type: string): MBTIProfile {
  const t = type.toUpperCase().trim();
  return mbtiProfiles[t] || mbtiProfiles["INFP"]; // fallback to INFP
}
