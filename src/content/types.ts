export type Locale = "en" | "zh";

export type ProjectId =
  | "ecommerce-growth"
  | "ai-product-ops"
  | "quantitative-research"
  | "content-brand-growth"
  | "flight-deal"
  | "vicky-portfolio"
  | "minimal-ecommerce";

export type FeaturedId =
  | "ecommerce-growth"
  | "ai-product-ops"
  | "quantitative-research"
  | "content-brand-growth";

export type IndependentId = "flight-deal" | "vicky-portfolio";

export type ProjectKind = "featured" | "project" | "experiment";

export type CapabilityId = "growth" | "product" | "research" | "ai";

export type NavKey = "work" | "experiments" | "about" | "contact";

export type CurrentlyId = "studying" | "exploring" | "building" | "learning";

export type ExperienceId =
  | "bytedance"
  | "qinghe"
  | "zhizhuo"
  | "gaoding"
  | "haiying";

export type Stat = { value: string; label: string };

export type FlowStep = { title: string; body: string };

/* Listing-level copy — used by cards, rows and index pages */
export type ProjectListCopy = {
  index: string;
  title: string;
  category: string;
  summary: string;
  status?: string;
};

export type CaseBase = {
  title: string;
  tagline: string;
  meta: string[];
  contextTitle: string;
  contextBody: string;
  reflection: string;
};

export type EcommerceCase = CaseBase & {
  scope: Stat[];
  approach: { title: string; steps: FlowStep[] };
  evidence: { title: string; captions: string[] };
  results: { title: string; dominant: Stat[]; supporting: Stat[] };
};

export type AiProductCase = CaseBase & {
  scope: Stat[];
  operations: { title: string; steps: FlowStep[] };
  evidence: { title: string; gifCaptions: string[]; uiCaption: string };
  results: { title: string; dominant: Stat[]; supporting: Stat[] };
};

export type ResearchCase = CaseBase & {
  contextBody2: string;
  snapshot: Stat[];
  workflow: { title: string; intro: string; steps: string[] };
  dimensions: {
    title: string;
    note: string;
    items: { code: string; name: string; method: string }[];
  };
  findings: {
    title: string;
    body1: string;
    body2: string;
    medianLabel: string;
    median: string;
    iqrLabel: string;
    iqr: string;
    highLabel: string;
    lowLabel: string;
  };
  strategies: {
    title: string;
    note: string;
    bars: { label: string; pct: number }[];
  };
  keyFindings: {
    title: string;
    items: { code: string; name: string; result: string; supported: string }[];
  };
  keyInsight: { title: string; stat: string; detail: string; body: string };
};

export type ContentBrandCase = CaseBase & {
  scopeLine: string;
  contextBody2: string;
  snapshot: Stat[];
  framework: { title: string; body: string; steps: string[] };
  work01: {
    source: string;
    title: string;
    body: string;
    metrics: Stat[];
    system: string;
    monetizationTitle: string;
    monetization: Stat[];
    liveOps: string;
    captions: string[];
  };
  work02: {
    source: string;
    title: string;
    body: string;
    dominant: Stat[];
    supporting: string;
    captions: string[];
  };
  work03: {
    source: string;
    title: string;
    body: string;
    results: Stat[];
    caption: string;
  };
  impact: { title: string; body: string; figures: Stat[] };
};

export type ProjectPageCopy = {
  title: string;
  category: string;
  status: string;
  tagline: string;
  body: string;
  focusTitle?: string;
  focus?: string[];
  pillarsTitle?: string;
  pillars?: { title: string; body: string }[];
  evolution?: {
    title: string;
    v0Label: string;
    v0Body: string;
    v0IssuesLabel: string;
    v0Issues: string;
    v1Label: string;
    v1Body: string;
  };
  links?: { label: string; href: string }[];
  note?: string;
  captions: string[];
};

export type ExperimentPageCopy = {
  title: string;
  category: string;
  tagline: string;
  body: string;
  exploredTitle: string;
  explored: string[];
  toolsLabel: string;
  tools: string;
  captions: string[];
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    brand: string;
    items: Record<NavKey, string>;
    languageLabel: string;
  };
  hero: {
    name: string;
    givenName: string;
    positioning: string;
    statementLead: string;
    statementEmphasis: string;
    cta: string;
  };
  selectedWork: {
    eyebrow: string;
    title: string;
    previewLabel: string;
  };
  workAcross: {
    eyebrow: string;
    title: string;
  };
  homeAbout: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    portraitAlt: string;
  };
  currently: {
    eyebrow: string;
    title: string;
    items: Record<CurrentlyId, { label: string; value: string }>;
  };
  homeContact: {
    eyebrow: string;
    statement: string;
    subline: string;
  };
  caseLabels: {
    context: string;
    evidence: string;
    results: string;
    reflection: string;
    nextProject: string;
    nextAbout: string;
  };
  pages: {
    work: {
      documentTitle: string;
      eyebrow: string;
      title: string;
      intro: string;
      featured: string;
      projects: string;
      experiments: string;
      viewCase: string;
      viewProject: string;
      viewExperiments: string;
    };
    experiments: {
      documentTitle: string;
      eyebrow: string;
      title: string;
      intro: string;
      future: string;
      ruleTitle: string;
      ruleQuestions: string[];
      viewExperiment: string;
    };
    about: {
      documentTitle: string;
      eyebrow: string;
      heroTitle: string;
      heroLead: string;
      heroBody: string;
      backgroundTitle: string;
      background: string[];
      experienceTitle: string;
      bringTitle: string;
      bring: { title: string; body: string }[];
      skillsTitle: string;
      skills: { title: string; items: string[] }[];
      exploringTitle: string;
      exploring: { title: string; body: string }[];
      closingTitle: string;
      closingBody: string;
      closingCtaWork: string;
      closingCtaContact: string;
    };
    contact: {
      documentTitle: string;
      eyebrow: string;
      statement: string;
    };
  };
  experience: Record<
    ExperienceId,
    {
      period: string;
      org: string;
      role: string;
      scope: string;
    }
  >;
  contactLinks: {
    email: { label: string; value: string; href: string };
    linkedin: { label: string; value: string; href: string };
    github: { label: string; value: string; href: string };
    cv: { label: string; href: string };
  };
  footer: {
    note: string;
  };
  projects: Record<ProjectId, ProjectListCopy>;
  capabilities: Record<
    CapabilityId,
    {
      title: string;
      description: string;
    }
  >;
  cases: {
    "ecommerce-growth": EcommerceCase;
    "ai-product-ops": AiProductCase;
    "quantitative-research": ResearchCase;
    "content-brand-growth": ContentBrandCase;
  };
  projectPages: Record<IndependentId, ProjectPageCopy>;
  experimentPages: {
    "minimal-ecommerce": ExperimentPageCopy;
  };
};
