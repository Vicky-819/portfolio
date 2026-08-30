import type { Dictionary, ProjectCopy } from "./types";

const draft: Pick<
  ProjectCopy,
  | "challenge"
  | "approach"
  | "process"
  | "whatIDid"
  | "outcome"
  | "reflection"
  | "nextDirection"
> = {
  challenge: "占位 — 挑战描述稍后补充。",
  approach: "占位 — 方法与思路稍后补充。",
  process: [
    "占位 — 研究。",
    "占位 — 定义。",
    "占位 — 设计 / 策略。",
    "占位 — 执行 / 搭建。",
    "占位 — 迭代。",
  ],
  whatIDid: "占位 — 我做了什么、搭建了什么，稍后记录。",
  outcome: "占位 — 结果将在信息确认后再写入。目前不锁定任何结论。",
  reflection: "占位 — 复盘稍后补充。",
  nextDirection: "占位 — 下一步与后续方向稍后补充。",
};

export const zh: Dictionary = {
  meta: {
    title: "Vicky — 研究 · 增长 · 数字",
    description: "Vicky（ShaoWen Sun）个人作品集 — 研究、增长与数字实践。",
  },
  nav: {
    brand: "Vicky",
    items: {
      work: "作品",
      experiments: "实验",
      about: "关于",
      contact: "联系",
    },
    languageLabel: "语言",
  },
  hero: {
    name: "Vicky",
    givenName: "ShaoWen Sun",
    positioning: "研究 · 增长 · 数字",
    statementLead: "我把数据、想法与用户洞察，转化为",
    statementEmphasis: "有意义的数字体验。",
    cta: "浏览作品",
  },
  selectedWork: {
    eyebrow: "精选作品",
    title: "来自增长、产品、研究与内容的案例。",
    previewLabel: "预览",
  },
  workAcross: {
    eyebrow: "实践",
    title: "我关注的领域",
  },
  homeAbout: {
    eyebrow: "关于",
    title: "我是谁",
    body: "占位 — 一段关于研究、增长、产品与数字实践的简短介绍。更完整的说明在关于页。",
    cta: "查看关于",
  },
  currently: {
    eyebrow: "现在",
    title: "正在做",
    items: {
      studying: {
        label: "在读",
        value: "科学传播硕士",
      },
      exploring: {
        label: "探索",
        value: "AI × 数据 × 数字产品",
      },
      building: {
        label: "在做",
        value: "个人作品集 + AI 项目",
      },
      learning: {
        label: "学习",
        value: "AI 辅助开发",
      },
    },
  },
  homeContact: {
    eyebrow: "联系",
    statement: "一起做有意义的事。",
  },
  pages: {
    work: {
      documentTitle: "作品 — Vicky",
      eyebrow: "档案",
      title: "作品",
      featured: "精选作品",
      projects: "项目",
      experiments: "实验",
      viewExperiments: "全部实验",
    },
    experiments: {
      documentTitle: "实验 — Vicky",
      eyebrow: "工作室",
      title: "实验",
      intro: "更小、仍在演进的练习 — Figma、代码、数据与工具。这里会持续增加。",
      future: "新的实验会放在这里。",
    },
    about: {
      documentTitle: "关于 — Vicky",
      eyebrow: "简介",
      title: "关于 Vicky",
      whoTitle: "我是谁",
      whoBody:
        "占位 — 一段更个人的介绍：研究、增长、产品、AI 与传播。完整文案稍后补充。",
      educationTitle: "教育",
      experienceTitle: "经历",
      capabilitiesTitle: "能力",
    },
    contact: {
      documentTitle: "联系 — Vicky",
      eyebrow: "联系",
      statement: "一起做有意义的事。",
    },
  },
  caseStudy: {
    overview: "概览",
    role: "角色",
    timeline: "时间",
    category: "类别",
    tools: "工具",
    challenge: "挑战",
    approach: "方法",
    process: "过程",
    processLabels: ["研究", "定义", "设计 / 策略", "执行 / 搭建", "迭代"],
    whatIDid: "我做了什么",
    visuals: "视觉",
    outcome: "结果",
    reflection: "复盘",
    nextDirection: "下一步",
    nextProject: "下一个项目",
  },
  education: [
    {
      school: "马来亚大学",
      detail: "科学传播硕士 — 细节占位，稍后补充。",
    },
    {
      school: "本科学习",
      detail: "旅游 / 酒店相关背景 — 占位。",
    },
  ],
  experience: {
    bytedance: {
      period: "2020",
      org: "字节跳动",
      role: "内容与视频",
    },
    qinghe: {
      period: "2022–2023",
      org: "清河至臻实验学校",
      role: "媒体与品牌传播",
    },
    zhizhuo: {
      period: "2023–2024",
      org: "智卓教育",
      role: "内容 · 增长 · 变现",
    },
    gaoding: {
      period: "2025",
      org: "稿定",
      role: "AI 产品运营",
    },
    haiying: {
      period: "2025",
      org: "上海海英",
      role: "电商增长",
    },
    um: {
      period: "2025–2026",
      org: "马来亚大学",
      role: "科学传播 · 研究",
    },
  },
  contactLinks: {
    email: {
      label: "邮箱",
      value: "占位",
      href: "#",
    },
    linkedin: {
      label: "LinkedIn",
      value: "占位",
      href: "#",
    },
    github: {
      label: "GitHub",
      value: "占位",
      href: "#",
    },
    cv: {
      label: "下载简历",
      href: "#",
    },
  },
  footer: {
    note: "研究 · 增长 · 数字",
  },
  projects: {
    "ecommerce-growth": {
      index: "01",
      title: "电商增长",
      category: "增长 · 电商",
      summary: "占位 — 电商增长、内容策略、抖音、小红书、付费投放与转化。",
      subtitle: "占位 — 面向实际电商业务的内容、投放与转化。",
      role: "占位 — 增长 / 运营",
      timeline: "占位",
      tools: "占位 — 稍后列出",
      ...draft,
    },
    "ai-product-ops": {
      index: "02",
      title: "AI 产品运营",
      category: "产品 · AI",
      summary: "占位 — Web / App 的 AI 产品运营：功能、社群、上线与留存。",
      subtitle: "占位 — 与跨团队协作，运营 AI 功能与上线。",
      role: "占位 — 产品运营",
      timeline: "占位",
      tools: "占位 — 稍后列出",
      ...draft,
    },
    "quantitative-research": {
      index: "03",
      title: "量化研究",
      category: "研究 · 数据",
      summary: "占位 — 硕士问卷调查研究。分析仍在与导师共同完善中。",
      subtitle: "占位 — 问卷调查进行中。方法与发现尚未定稿。",
      role: "占位 — 研究者",
      timeline: "占位",
      tools: "SPSS · 问卷设计 — 占位",
      ...draft,
      outcome: "占位 — 统计发现暂不在此公布。研究仍在与导师共同完善。",
    },
    "content-brand-growth": {
      index: "04",
      title: "内容与品牌增长",
      category: "内容 · 品牌",
      summary: "占位 — 多平台内容、IP 增长、社群、变现与品牌传播。",
      subtitle: "占位 — 内容体系、社群与品牌传播。",
      role: "占位 — 内容 / 增长",
      timeline: "占位",
      tools: "占位 — 稍后列出",
      ...draft,
    },
    "flight-deal": {
      index: "01",
      title: "机票优惠发现平台",
      category: "AI / 产品",
      summary: "占位 — 独立的 AI 辅助产品探索。尚不属于四件精选职业案例。",
      subtitle: "占位 — 围绕机票优惠发现的产品探索。",
      role: "占位 — 独立项目",
      timeline: "占位",
      tools: "占位 — AI 辅助开发",
      ...draft,
    },
    "minimal-ecommerce": {
      index: "01",
      title: "极简电商应用",
      category: "Figma / UI",
      summary: "占位 — Figma / UI 探索。",
      subtitle: "占位 — 一个小型店铺界面练习。",
      role: "占位 — 设计探索",
      timeline: "占位",
      tools: "Figma",
      ...draft,
    },
  },
  capabilities: {
    growth: {
      title: "增长",
      description: "电商、内容与付费效果 — 把注意力转化为可衡量的结果。",
    },
    product: {
      title: "产品",
      description: "产品运营与上线 — 连接用户、功能，以及真正把产品做出来的团队。",
    },
    research: {
      title: "研究与数据",
      description: "问卷设计、SPSS、SQL 与分析 — 先把问题问清楚，再下结论。",
    },
    ai: {
      title: "AI / 数字",
      description: "AI 功能、数字产品与 AI 辅助创作 — 探索工具如何改变工作方式。",
    },
  },
};
