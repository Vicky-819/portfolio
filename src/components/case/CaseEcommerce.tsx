"use client";

import {
  CaseHero,
  CaseSection,
  FlowSteps,
  NextProject,
  Reflection,
  ResultsBlock,
  ScopeStrip,
} from "@/components/case/CaseSections";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n";

const IMGS = [
  { src: "/images/work/ecommerce/content-01.jpg", cls: "md:col-span-7" },
  { src: "/images/work/ecommerce/content-02.jpg", cls: "md:col-span-4 md:col-start-9 md:mt-28" },
  { src: "/images/work/ecommerce/product-01.jpg", cls: "md:col-span-3 md:col-start-2" },
  { src: "/images/work/ecommerce/product-02.jpg", cls: "md:col-span-4 md:col-start-6 md:mt-16" },
];

export function CaseEcommerce() {
  const { dictionary } = useLanguage();
  const c = dictionary.cases["ecommerce-growth"];
  const labels = dictionary.caseLabels;
  const next = dictionary.projects["ai-product-ops"];

  return (
    <main>
      <CaseHero
        category={dictionary.projects["ecommerce-growth"].category}
        tone="terracotta"
        title={c.title}
        tagline={c.tagline}
        meta={c.meta}
        image={{ src: "/images/work/ecommerce/hero.jpg", alt: c.title }}
      />

      <CaseSection eyebrow={labels.context}>
        <Reveal className="grid gap-8 md:grid-cols-12">
          <h2 className="text-[1.35rem] font-medium tracking-[-0.02em] text-ink md:col-span-4">
            {c.contextTitle}
          </h2>
          <p className="max-w-2xl text-[1.05rem] leading-[1.85] text-ink/70 md:col-span-7">
            {c.contextBody}
          </p>
        </Reveal>
        <ScopeStrip stats={c.scope} />
      </CaseSection>

      <CaseSection>
        <Reveal className="mb-12 md:mb-16">
          <h2 className="serif-italic text-[1.9rem] leading-[1.25] text-ink md:text-[2.4rem]">
            {c.approach.title}
          </h2>
        </Reveal>
        <FlowSteps steps={c.approach.steps} tone="terracotta" />
      </CaseSection>

      <CaseSection eyebrow={labels.evidence}>
        <Reveal className="mb-12 md:mb-16">
          <h2 className="text-[1.35rem] font-medium tracking-[-0.02em] text-ink">
            {c.evidence.title}
          </h2>
        </Reveal>
        <div className="grid items-start gap-10 md:grid-cols-12 md:gap-x-10">
          {IMGS.map((img, i) => (
            <Reveal key={img.src} delay={i * 60} className={img.cls}>
              <figure>
                <div className="img-frame img-mat">
                  <img src={img.src} alt={c.evidence.captions[i]} loading="lazy" />
                </div>
                <figcaption
                  className="figcap mt-4 max-w-sm text-[0.9rem] leading-[1.7] text-ink/55"
                  style={{ "--figtone": "var(--tone-terracotta-mark)" } as React.CSSProperties}
                >
                  {c.evidence.captions[i]}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </CaseSection>

      <CaseSection eyebrow={labels.results}>
        <ResultsBlock
          title={c.results.title}
          dominant={c.results.dominant}
          supporting={c.results.supporting}
          tone="terracotta"
        />
      </CaseSection>

      <Reflection text={c.reflection} label={labels.reflection} tone="terracotta" />

      <NextProject
        href="/work/ai-product-ops"
        label={labels.nextProject}
        title={next.title}
        meta={next.category}
        thumb={{ src: "/images/home/ai-product-operations.jpg", alt: next.title }}
      />
    </main>
  );
}
