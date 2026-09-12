"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { Reveal } from "@/components/Reveal";
import {
  EXPERIMENT_IDS,
  FEATURED_IDS,
  INDEPENDENT_IDS,
  PROJECT_META,
  TONE_ACCENT,
} from "@/content/projects";
import type { ProjectId } from "@/content/types";
import { useLanguage } from "@/lib/i18n";

const LIST_IMAGE: Record<ProjectId, string> = {
  "ecommerce-growth": "/images/home/ecommerce-growth.jpg",
  "ai-product-ops": "/images/home/ai-product-operations.jpg",
  "quantitative-research": "/images/home/quantitative-research.jpg",
  "content-brand-growth": "/images/home/content-brand-growth.jpg",
  "flight-deal": "/images/projects/flight-deal/cover-list-v1.jpg",
  "vicky-portfolio": "/images/projects/vicky-portfolio/home-hero.jpg",
  "minimal-ecommerce": "/images/experiments/ecommerce-app/screen-1.jpg",
};

const FEATURED_LAYOUT = [
  { figure: "md:col-span-7", text: "md:col-span-4 md:col-start-9 md:pt-12" },
  { figure: "md:col-span-6 md:col-start-7 md:order-2", text: "md:col-span-4 md:col-start-1 md:order-1 md:pt-24" },
  { figure: "md:col-span-6 md:col-start-2", text: "md:col-span-4 md:col-start-9 md:pt-16" },
  { figure: "md:col-span-7 md:col-start-6 md:order-2", text: "md:col-span-4 md:col-start-1 md:order-1 md:pt-8" },
] as const;

export function WorkPage() {
  const { dictionary } = useLanguage();
  const copy = dictionary.pages.work;

  return (
    <main>
      {/* ——— Intro ——— */}
      <section className="px-6 pb-10 pt-28 md:px-10 md:pb-16 md:pt-36 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="eyebrow mb-5">{copy.eyebrow}</p>
              <h1 className="text-[2.6rem] font-medium leading-[1.05] tracking-[-0.035em] text-ink md:text-[4rem]">
                {copy.title}
              </h1>
            </div>
            <p className="max-w-sm text-[1.02rem] leading-[1.8] text-ink/60 md:col-span-4 md:justify-self-end">
              {copy.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ——— Featured ——— */}
      <section className="px-6 pb-24 md:px-10 md:pb-36 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-14 border-t border-ink/12 pt-8 md:mb-24">
            <p className="eyebrow">{copy.featured}</p>
          </Reveal>
          <ul className="space-y-24 md:space-y-36">
            {FEATURED_IDS.map((id, index) => {
              const project = dictionary.projects[id];
              const meta = PROJECT_META[id];
              const layout = FEATURED_LAYOUT[index % FEATURED_LAYOUT.length];
              return (
                <Reveal as="li" key={id} delay={60}>
                  <LocaleLink
                    href={meta.href}
                    className="group grid items-start gap-8 md:grid-cols-12 md:gap-10"
                  >
                    <figure className={layout.figure}>
                      <div className="img-frame aspect-[3/2]">
                        <img
                          src={LIST_IMAGE[id]}
                          alt={project.title}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    </figure>
                    <div className={layout.text}>
                      <div className="flex items-baseline gap-4">
                        <span className="serif-italic text-[1.6rem] leading-none text-ink/35">
                          {project.index}
                        </span>
                        <span
                          className="h-px flex-1 origin-left scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100"
                          style={{ background: TONE_ACCENT[meta.tone] }}
                          aria-hidden
                        />
                      </div>
                      <h2 className="mt-5 text-[1.6rem] font-medium leading-[1.15] tracking-[-0.02em] text-ink md:text-[1.85rem]">
                        {project.title}
                      </h2>
                      <p className="meta mt-3">{project.category}</p>
                      <p className="mt-5 max-w-sm text-[0.98rem] leading-[1.75] text-ink/60">
                        {project.summary}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2.5 text-[12px] uppercase tracking-[0.2em] text-ink/55 transition-colors duration-500 group-hover:text-ink">
                        <span className="border-b border-ink/20 pb-0.5 transition-colors duration-500 group-hover:border-ink/60">
                          {copy.viewCase}
                        </span>
                        <span
                          aria-hidden
                          className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </LocaleLink>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ——— Independent projects ——— */}
      <section className="bg-paper/70 px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-14 md:mb-20">
            <p className="eyebrow">{copy.projects}</p>
          </Reveal>
          <ul className="space-y-20 md:space-y-28">
            {INDEPENDENT_IDS.map((id) => {
              const project = dictionary.projects[id];
              const meta = PROJECT_META[id];
              return (
                <Reveal as="li" key={id}>
                  <LocaleLink
                    href={meta.href}
                    className="group grid items-center gap-8 md:grid-cols-12 md:gap-10"
                  >
                    <div className="md:col-span-6">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <h2 className="text-[1.6rem] font-medium leading-[1.15] tracking-[-0.02em] text-ink md:text-[1.85rem]">
                          {project.title}
                        </h2>
                        {project.status ? (
                          <span className="meta flex items-center gap-2 border border-ink/20 px-3 py-1">
                            <span
                              aria-hidden
                              className="inline-block h-[5px] w-[5px] rounded-full"
                              style={{ background: TONE_ACCENT[meta.tone] }}
                            />
                            {project.status}
                          </span>
                        ) : null}
                      </div>
                      <p className="meta mt-3">{project.category}</p>
                      <p className="mt-5 max-w-md text-[0.98rem] leading-[1.75] text-ink/60">
                        {project.summary}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2.5 text-[12px] uppercase tracking-[0.2em] text-ink/55 transition-colors duration-500 group-hover:text-ink">
                        <span className="border-b border-ink/20 pb-0.5 transition-colors duration-500 group-hover:border-ink/60">
                          {copy.viewProject}
                        </span>
                        <span
                          aria-hidden
                          className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
                        >
                          →
                        </span>
                      </span>
                    </div>
                    <figure className="md:col-span-5 md:col-start-8">
                      <div className="img-frame img-mat">
                        <img src={LIST_IMAGE[id]} alt={project.title} loading="lazy" />
                      </div>
                    </figure>
                  </LocaleLink>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ——— Experiments preview ——— */}
      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-14 md:mb-16">
            <p className="eyebrow">{copy.experiments}</p>
          </Reveal>
          <ul>
            {EXPERIMENT_IDS.map((id) => {
              const project = dictionary.projects[id];
              const meta = PROJECT_META[id];
              return (
                <Reveal as="li" key={id}>
                  <LocaleLink href={meta.href} className="group flex flex-wrap items-baseline gap-x-8 gap-y-3 border-t border-ink/12 py-8">
                    <span className="serif-italic text-[1.3rem] leading-none text-ink/35">
                      {project.index}
                    </span>
                    <span className="text-[1.4rem] font-medium tracking-[-0.02em] text-ink transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-3 md:text-[1.7rem]">
                      {project.title}
                    </span>
                    <span className="meta">{project.category}</span>
                    <span
                      aria-hidden
                      className="ml-auto text-[1.3rem] text-ink/40 transition-all duration-500 group-hover:translate-x-2 group-hover:text-ink"
                    >
                      →
                    </span>
                  </LocaleLink>
                </Reveal>
              );
            })}
          </ul>
          <Reveal className="mt-8">
            <LocaleLink
              href="/experiments"
              className="group inline-flex items-center gap-2.5 text-[12px] uppercase tracking-[0.2em] text-ink/55 transition-colors duration-500 hover:text-ink"
            >
              <span className="border-b border-ink/20 pb-0.5 transition-colors duration-500 group-hover:border-ink/60">
                {copy.viewExperiments}
              </span>
              <span aria-hidden className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
                →
              </span>
            </LocaleLink>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
