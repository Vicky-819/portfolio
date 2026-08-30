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
  challenge: "Placeholder — the challenge will be written here.",
  approach: "Placeholder — the approach will be written here.",
  process: [
    "Placeholder — research.",
    "Placeholder — define.",
    "Placeholder — design / strategy.",
    "Placeholder — execute / build.",
    "Placeholder — iterate.",
  ],
  whatIDid: "Placeholder — what I did and built will be documented here.",
  outcome: "Placeholder — outcomes will be added when they are ready. No results are locked in yet.",
  reflection: "Placeholder — reflection will be written here.",
  nextDirection: "Placeholder — next steps and future direction will be added here.",
};

export const en: Dictionary = {
  meta: {
    title: "Vicky — Research · Growth · Digital",
    description:
      "Personal portfolio of Vicky (ShaoWen Sun) — research, growth, and digital practice.",
  },
  nav: {
    brand: "Vicky",
    items: {
      work: "Work",
      experiments: "Experiments",
      about: "About",
      contact: "Contact",
    },
    languageLabel: "Language",
  },
  hero: {
    name: "Vicky",
    givenName: "ShaoWen Sun",
    positioning: "Research · Growth · Digital",
    statementLead: "I turn data, ideas and user insights into",
    statementEmphasis: "meaningful digital experiences.",
    cta: "Explore Work",
  },
  selectedWork: {
    eyebrow: "Selected Work",
    title: "Case studies from growth, product, research and content.",
    previewLabel: "Preview",
  },
  workAcross: {
    eyebrow: "Practice",
    title: "What I work across",
  },
  homeAbout: {
    eyebrow: "About",
    title: "Who I am",
    body: "Placeholder — a short introduction to a multidisciplinary practice across research, growth, product and digital making. Fuller notes live on the About page.",
    cta: "View About",
  },
  currently: {
    eyebrow: "Now",
    title: "Currently",
    items: {
      studying: {
        label: "Studying",
        value: "MSc Science Communication",
      },
      exploring: {
        label: "Exploring",
        value: "AI × Data × Digital Products",
      },
      building: {
        label: "Building",
        value: "Personal Portfolio + AI Projects",
      },
      learning: {
        label: "Learning",
        value: "AI-assisted Development",
      },
    },
  },
  homeContact: {
    eyebrow: "Contact",
    statement: "Let's build something meaningful.",
  },
  pages: {
    work: {
      documentTitle: "Work — Vicky",
      eyebrow: "Archive",
      title: "Work",
      featured: "Featured Work",
      projects: "Projects",
      experiments: "Experiments",
      viewExperiments: "All experiments",
    },
    experiments: {
      documentTitle: "Experiments — Vicky",
      eyebrow: "Studio",
      title: "Experiments",
      intro:
        "Smaller, evolving studies — Figma, code, data and tools. This shelf will grow.",
      future: "New experiments will appear here.",
    },
    about: {
      documentTitle: "About — Vicky",
      eyebrow: "Profile",
      title: "About Vicky",
      whoTitle: "Who I am",
      whoBody:
        "Placeholder — a warmer portrait of a practitioner working across research, growth, products, AI and communication. Final copy will be added later.",
      educationTitle: "Education",
      experienceTitle: "Experience",
      capabilitiesTitle: "Capabilities",
    },
    contact: {
      documentTitle: "Contact — Vicky",
      eyebrow: "Contact",
      statement: "Let's build something meaningful.",
    },
  },
  caseStudy: {
    overview: "Overview",
    role: "Role",
    timeline: "Timeline",
    category: "Category",
    tools: "Tools",
    challenge: "The Challenge",
    approach: "My Approach",
    process: "Process",
    processLabels: [
      "Research",
      "Define",
      "Design / Strategy",
      "Execute / Build",
      "Iterate",
    ],
    whatIDid: "What I Did / Built",
    visuals: "Visuals",
    outcome: "Outcome / Results",
    reflection: "Reflection",
    nextDirection: "Next / Future Direction",
    nextProject: "Next Project",
  },
  education: [
    {
      school: "Universiti Malaya",
      detail: "MSc Science Communication — placeholder details to be added.",
    },
    {
      school: "Bachelor's studies",
      detail: "Tourism / hospitality-related background — placeholder.",
    },
  ],
  experience: {
    bytedance: {
      period: "2020",
      org: "ByteDance",
      role: "Content & Video",
    },
    qinghe: {
      period: "2022–2023",
      org: "Qinghe Zhizhen Experimental School",
      role: "Media & Brand Communication",
    },
    zhizhuo: {
      period: "2023–2024",
      org: "Zhi Zhuo Education",
      role: "Content · Growth · Monetization",
    },
    gaoding: {
      period: "2025",
      org: "Gaoding",
      role: "AI Product Operations",
    },
    haiying: {
      period: "2025",
      org: "Shanghai Haiying",
      role: "E-commerce Growth",
    },
    um: {
      period: "2025–2026",
      org: "Universiti Malaya",
      role: "Science Communication · Research",
    },
  },
  contactLinks: {
    email: {
      label: "Email",
      value: "Placeholder",
      href: "#",
    },
    linkedin: {
      label: "LinkedIn",
      value: "Placeholder",
      href: "#",
    },
    github: {
      label: "GitHub",
      value: "Placeholder",
      href: "#",
    },
    cv: {
      label: "Download CV",
      href: "#",
    },
  },
  footer: {
    note: "Research · Growth · Digital",
  },
  projects: {
    "ecommerce-growth": {
      index: "01",
      title: "E-commerce Growth",
      category: "Growth · Commerce",
      summary:
        "Placeholder — e-commerce growth, content strategy, Douyin, Xiaohongshu, paid traffic and conversion.",
      subtitle: "Placeholder — content, paid traffic and conversion for a live commerce business.",
      role: "Placeholder — growth / operations",
      timeline: "Placeholder",
      tools: "Placeholder — to be listed",
      ...draft,
    },
    "ai-product-ops": {
      index: "02",
      title: "AI Product Operations",
      category: "Product · AI",
      summary:
        "Placeholder — AI product operations across Web / App, features, community, launches and retention.",
      subtitle: "Placeholder — operating AI features and launches with cross-functional teams.",
      role: "Placeholder — product operations",
      timeline: "Placeholder",
      tools: "Placeholder — to be listed",
      ...draft,
    },
    "quantitative-research": {
      index: "03",
      title: "Quantitative Research",
      category: "Research · Data",
      summary:
        "Placeholder — master’s survey research. Analysis is still being finalized with my supervisor.",
      subtitle:
        "Placeholder — survey research in progress. Findings and methods are not finalized.",
      role: "Placeholder — researcher",
      timeline: "Placeholder",
      tools: "SPSS · survey design — placeholder",
      ...draft,
      outcome:
        "Placeholder — statistical findings are not published here yet. Work is still being finalized with my supervisor.",
    },
    "content-brand-growth": {
      index: "04",
      title: "Content & Brand Growth",
      category: "Content · Brand",
      summary:
        "Placeholder — multi-platform content, IP growth, community, monetization and brand communication.",
      subtitle: "Placeholder — content systems, community and brand communication.",
      role: "Placeholder — content / growth",
      timeline: "Placeholder",
      tools: "Placeholder — to be listed",
      ...draft,
    },
    "flight-deal": {
      index: "01",
      title: "Flight Deal Discovery Platform",
      category: "AI / Product",
      summary:
        "Placeholder — an independent AI-assisted product exploration. Not a featured professional case study.",
      subtitle: "Placeholder — exploring a product around discovering flight deals.",
      role: "Placeholder — independent project",
      timeline: "Placeholder",
      tools: "Placeholder — AI-assisted development",
      ...draft,
    },
    "minimal-ecommerce": {
      index: "01",
      title: "Minimal E-commerce App",
      category: "Figma / UI",
      summary: "Placeholder — a Figma / UI exploration.",
      subtitle: "Placeholder — a compact interface study for a small shop.",
      role: "Placeholder — design exploration",
      timeline: "Placeholder",
      tools: "Figma",
      ...draft,
    },
  },
  capabilities: {
    growth: {
      title: "Growth",
      description:
        "E-commerce, content, and paid performance — turning attention into measurable outcomes.",
    },
    product: {
      title: "Product",
      description:
        "Product operations and launches — connecting users, features, and the teams that ship them.",
    },
    research: {
      title: "Research & Data",
      description:
        "Survey design, SPSS, SQL, and analysis — asking better questions before drawing conclusions.",
    },
    ai: {
      title: "AI / Digital",
      description:
        "AI features, digital products, and AI-assisted making — exploring how tools change the work.",
    },
  },
};
