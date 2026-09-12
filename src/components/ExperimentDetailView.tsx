"use client";

import { CaseSection, NextProject } from "@/components/case/CaseSections";
import { Reveal } from "@/components/Reveal";
import { PROJECT_META, TONE_ACCENT } from "@/content/projects";
import { useLanguage } from "@/lib/i18n";

const IMAGES = [
  { src: "/images/experiments/ecommerce-app/screen-1.jpg", cls: "md:col-span-3" },
  { src: "/images/experiments/ecommerce-app/screen-2.jpg", cls: "md:col-span-3 md:col-start-5 md:mt-20" },
  { src: "/images/experiments/ecommerce-app/screen-3.jpg", cls: "md:col-span-3 md:col-start-9 md:mt-36" },
  { src: "/images/experiments/ecommerce-app/screen-4.jpg", cls: "md:col-span-9 md:col-start-2" },
];

export function ExperimentDetailView() {
  const { dictionary } = useLanguage();
  const c = dictionary.experimentPages["minimal-ecommerce"];
  const labels = dictionary.caseLabels;
  const tone = TONE_ACCENT[PROJECT_META["minimal-ecommerce"].tone];

  return (
    <main>
      <section className="px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="meta" style={{ color: tone }}>
              {c.category}
            </p>
            <h1 className="mt-6 max-w-3xl text-[2.4rem] font-medium leading-[1.08] tracking-[-0.035em] text-ink md:text-[3.6rem]">
              {c.title}
            </h1>
            <p className="serif-italic mt-6 max-w-xl text-[1.3rem] leading-[1.5] text-ink/75 md:text-[1.5rem]">
              {c.tagline}
            </p>
            <p className="mt-8 max-w-2xl text-[1.05rem] leading-[1.85] text-ink/70">
              {c.body}
            </p>
          </Reveal>
        </div>
      </section>

      <CaseSection eyebrow={c.exploredTitle}>
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <ul className="flex flex-wrap gap-3">
              {c.explored.map((e) => (
                <li
                  key={e}
                  className="border border-ink/20 px-4 py-2 text-[0.95rem] text-ink/75"
                >
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="md:col-span-4 md:col-start-9">
            <p className="eyebrow mb-4">{c.toolsLabel}</p>
            <p className="text-[1.15rem] font-medium tracking-[-0.01em] text-ink">{c.tools}</p>
          </Reveal>
        </div>
      </CaseSection>

      <CaseSection eyebrow={labels.evidence}>
        <div className="grid items-start gap-10 md:grid-cols-12 md:gap-x-10">
          {IMAGES.map((img, i) => (
            <Reveal key={img.src} delay={i * 60} className={img.cls}>
              <figure>
                <div className="img-frame img-mat">
                  <img src={img.src} alt={c.captions[i] ?? c.title} loading="lazy" />
                </div>
                {c.captions[i] ? (
                  <figcaption
                    className="figcap mt-5 text-[0.9rem] leading-[1.7] text-ink/55"
                    style={{ "--figtone": tone } as React.CSSProperties}
                  >
                    {c.captions[i]}
                  </figcaption>
                ) : null}
              </figure>
            </Reveal>
          ))}
        </div>
      </CaseSection>

      <NextProject
        href="/experiments"
        label={dictionary.nav.items.experiments}
        title={dictionary.pages.experiments.title}
      />
    </main>
  );
}
