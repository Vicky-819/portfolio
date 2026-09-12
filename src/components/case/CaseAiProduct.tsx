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

export function CaseAiProduct() {
  const { dictionary } = useLanguage();
  const c = dictionary.cases["ai-product-ops"];
  const labels = dictionary.caseLabels;
  const next = dictionary.projects["quantitative-research"];

  return (
    <main>
      <CaseHero
        category={dictionary.projects["ai-product-ops"].category}
        tone="blue"
        title={c.title}
        tagline={c.tagline}
        meta={c.meta}
        image={{ src: "/images/work/ai-product/popup.jpg", alt: c.title }}
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
            {c.operations.title}
          </h2>
        </Reveal>
        <FlowSteps steps={c.operations.steps} tone="blue" cols={4} />
      </CaseSection>

      <CaseSection eyebrow={labels.evidence}>
        <Reveal className="mb-12 md:mb-16">
          <h2 className="text-[1.35rem] font-medium tracking-[-0.02em] text-ink">
            {c.evidence.title}
          </h2>
        </Reveal>
        <div className="grid items-start gap-10 md:grid-cols-12 md:gap-x-10">
          <Reveal className="md:col-span-8">
            <figure>
              <div className="img-frame img-mat">
                <img
                  src="/images/work/ai-product/tutorial-bg-change.gif"
                  alt={c.evidence.gifCaptions[0]}
                  loading="lazy"
                />
              </div>
              <figcaption
                className="figcap mt-4 max-w-md text-[0.9rem] leading-[1.7] text-ink/55"
                style={{ "--figtone": "var(--tone-blue-mark)" } as React.CSSProperties}
              >
                {c.evidence.gifCaptions[0]}
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={90} className="md:col-span-4 md:mt-24">
            <figure>
              <div className="img-frame img-mat">
                <img
                  src="/images/work/ai-product/tutorial-subject-select.gif"
                  alt={c.evidence.gifCaptions[1]}
                  loading="lazy"
                />
              </div>
              <figcaption
                className="figcap mt-4 text-[0.9rem] leading-[1.7] text-ink/55"
                style={{ "--figtone": "var(--tone-blue-mark)" } as React.CSSProperties}
              >
                {c.evidence.gifCaptions[1]}
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={60} className="md:col-span-5 md:col-start-2">
            <figure>
              <div className="img-frame img-mat">
                <img
                  src="/images/work/ai-product/tutorial-transparent-bg.gif"
                  alt={c.evidence.gifCaptions[2]}
                  loading="lazy"
                />
              </div>
              <figcaption
                className="figcap mt-4 text-[0.9rem] leading-[1.7] text-ink/55"
                style={{ "--figtone": "var(--tone-blue-mark)" } as React.CSSProperties}
              >
                {c.evidence.gifCaptions[2]}
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120} className="md:col-span-4 md:col-start-8 md:mt-20">
            <figure>
              <div className="img-frame img-mat">
                <img
                  src="/images/work/ai-product/tutorial-qr-code.gif"
                  alt={c.evidence.gifCaptions[3]}
                  loading="lazy"
                />
              </div>
              <figcaption
                className="figcap mt-4 text-[0.9rem] leading-[1.7] text-ink/55"
                style={{ "--figtone": "var(--tone-blue-mark)" } as React.CSSProperties}
              >
                {c.evidence.gifCaptions[3]}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </CaseSection>

      <CaseSection eyebrow={labels.results}>
        <ResultsBlock
          title={c.results.title}
          dominant={c.results.dominant}
          supporting={c.results.supporting}
          tone="blue"
        />
      </CaseSection>

      <Reflection text={c.reflection} label={labels.reflection} tone="blue" />

      <NextProject
        href="/work/quantitative-research"
        label={labels.nextProject}
        title={next.title}
        meta={next.category}
        thumb={{ src: "/images/home/quantitative-research.jpg", alt: next.title }}
      />
    </main>
  );
}
