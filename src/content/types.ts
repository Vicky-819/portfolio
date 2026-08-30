export type Locale = "en" | "zh";

export type ProjectId =
  | "ecommerce-growth"
  | "ai-product-ops"
  | "quantitative-research"
  | "content-brand-growth"
  | "flight-deal"
  | "minimal-ecommerce";

export type ProjectKind = "featured" | "project" | "experiment";

export type CapabilityId = "growth" | "product" | "research" | "ai";

export type NavKey = "work" | "experiments" | "about" | "contact";

export type CurrentlyId = "studying" | "exploring" | "building" | "learning";

export type ExperienceId =
  | "bytedance"
  | "qinghe"
  | "zhizhuo"
  | "gaoding"
  | "haiying"
  | "um";

export type ProjectCopy = {
  index: string;
  title: string;
  category: string;
  summary: string;
  subtitle: string;
  role: string;
  timeline: string;
  tools: string;
  challenge: string;
  approach: string;
  process: [string, string, string, string, string];
  whatIDid: string;
  outcome: string;
  reflection: string;
  nextDirection: string;
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
  };
  currently: {
    eyebrow: string;
    title: string;
    items: Record<CurrentlyId, { label: string; value: string }>;
  };
  homeContact: {
    eyebrow: string;
    statement: string;
  };
  pages: {
    work: {
      documentTitle: string;
      eyebrow: string;
      title: string;
      featured: string;
      projects: string;
      experiments: string;
      viewExperiments: string;
    };
    experiments: {
      documentTitle: string;
      eyebrow: string;
      title: string;
      intro: string;
      future: string;
    };
    about: {
      documentTitle: string;
      eyebrow: string;
      title: string;
      whoTitle: string;
      whoBody: string;
      educationTitle: string;
      experienceTitle: string;
      capabilitiesTitle: string;
    };
    contact: {
      documentTitle: string;
      eyebrow: string;
      statement: string;
    };
  };
  caseStudy: {
    overview: string;
    role: string;
    timeline: string;
    category: string;
    tools: string;
    challenge: string;
    approach: string;
    process: string;
    processLabels: [string, string, string, string, string];
    whatIDid: string;
    visuals: string;
    outcome: string;
    reflection: string;
    nextDirection: string;
    nextProject: string;
  };
  education: { school: string; detail: string }[];
  experience: Record<
    ExperienceId,
    {
      period: string;
      org: string;
      role: string;
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
  projects: Record<ProjectId, ProjectCopy>;
  capabilities: Record<
    CapabilityId,
    {
      title: string;
      description: string;
    }
  >;
};
