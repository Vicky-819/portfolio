import type { CapabilityId, ProjectId, ProjectKind } from "./types";

export type VisualTone = "terracotta" | "blue" | "sage" | "ochre";

export const FEATURED_IDS: ProjectId[] = [
  "ecommerce-growth",
  "ai-product-ops",
  "quantitative-research",
  "content-brand-growth",
];

export const INDEPENDENT_IDS: ProjectId[] = ["flight-deal"];

export const EXPERIMENT_IDS: ProjectId[] = ["minimal-ecommerce"];

export const EXPERIENCE_ORDER = [
  "bytedance",
  "qinghe",
  "zhizhuo",
  "gaoding",
  "haiying",
  "um",
] as const;

export const CURRENTLY_ORDER = [
  "studying",
  "exploring",
  "building",
  "learning",
] as const;

export const CAPABILITY_ORDER: CapabilityId[] = [
  "growth",
  "product",
  "research",
  "ai",
];

export const PROJECT_META: Record<
  ProjectId,
  {
    slug: string;
    kind: ProjectKind;
    tone: VisualTone;
    href: string;
  }
> = {
  "ecommerce-growth": {
    slug: "ecommerce-growth",
    kind: "featured",
    tone: "terracotta",
    href: "/work/ecommerce-growth",
  },
  "ai-product-ops": {
    slug: "ai-product-ops",
    kind: "featured",
    tone: "blue",
    href: "/work/ai-product-ops",
  },
  "quantitative-research": {
    slug: "quantitative-research",
    kind: "featured",
    tone: "sage",
    href: "/work/quantitative-research",
  },
  "content-brand-growth": {
    slug: "content-brand-growth",
    kind: "featured",
    tone: "ochre",
    href: "/work/content-brand-growth",
  },
  "flight-deal": {
    slug: "flight-deal-discovery",
    kind: "project",
    tone: "blue",
    href: "/work/flight-deal-discovery",
  },
  "minimal-ecommerce": {
    slug: "minimal-ecommerce",
    kind: "experiment",
    tone: "ochre",
    href: "/experiments/minimal-ecommerce",
  },
};

export const CAPABILITY_TONE: Record<CapabilityId, VisualTone> = {
  growth: "terracotta",
  product: "blue",
  research: "sage",
  ai: "ochre",
};

export const NAV_HREFS: Record<string, string> = {
  work: "/work",
  experiments: "/experiments",
  about: "/about",
  contact: "/contact",
};

export const TONE_ACCENT: Record<VisualTone, string> = {
  terracotta: "var(--tone-terracotta-mark)",
  blue: "var(--tone-blue-mark)",
  sage: "var(--tone-sage-mark)",
  ochre: "var(--tone-ochre-mark)",
};

export function getProjectIdBySlug(
  slug: string,
  kind?: ProjectKind,
): ProjectId | null {
  const entry = (Object.entries(PROJECT_META) as [ProjectId, (typeof PROJECT_META)[ProjectId]][]).find(
    ([, meta]) => meta.slug === slug && (!kind || meta.kind === kind),
  );
  return entry ? entry[0] : null;
}

export function getNextProjectId(id: ProjectId): ProjectId {
  if (FEATURED_IDS.includes(id)) {
    const index = FEATURED_IDS.indexOf(id);
    return FEATURED_IDS[(index + 1) % FEATURED_IDS.length];
  }
  if (id === "flight-deal") return "minimal-ecommerce";
  return FEATURED_IDS[0];
}

export function workCaseIds(): ProjectId[] {
  return [...FEATURED_IDS, ...INDEPENDENT_IDS];
}
