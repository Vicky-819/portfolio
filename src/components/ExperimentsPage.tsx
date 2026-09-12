"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { Reveal } from "@/components/Reveal";
import { EXPERIMENT_IDS, PROJECT_META, TONE_ACCENT } from "@/content/projects";
import { useLanguage } from "@/lib/i18n";

export function ExperimentsPage() {
  const { dictionary } = useLanguage();
  const copy = dictionary.pages.experiments;

  return (
    <main>
      {/* ——— Intro ——— */}
      <section className="px-6 pb-14 pt-28 md:px-10 md:pb-20 md:pt-36 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="eyebrow mb-5">{copy.eyebrow}</p>
              <h1 className="text-[2.6rem] font-medium leading-[1.05] tracking-[-0.035em] text-ink md:text-[4rem]">
                {copy.title}
              </h1>
            </div>
            <p className="max-w-sm text-[1.02rem] leading-[1.8] text-ink/60 md:col-span-4 md:col-start-9">
              {copy.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ——— Three-question rule ——— */}
      <section className="px-6 pb-16 md:px-10 md:pb-24 lg:px-14">
        <div className="mx-auto max-w-[1400px] border-t border-ink/12 pt-12">
          <Reveal className="mb-10">
            <p className="eyebrow">{copy.ruleTitle}</p>
          </Reveal>
          <ol className="grid gap-8 md:grid-cols-3">
            {copy.ruleQuestions.map((q, i) => (
              <Reveal as="li" key={q} delay={i * 70}>
                <p className="serif-italic text-[1.1rem] text-ink/40">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-[1.2rem] font-medium leading-[1.4] tracking-[-0.01em] text-ink md:text-[1.35rem]">
                  {q}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— Anchor experiment ——— */}
      <section className="px-6 pb-16 md:px-10 md:pb-24 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <ul>
            {EXPERIMENT_IDS.map((id) => {
              const project = dictionary.projects[id];
              const meta = PROJECT_META[id];
              return (
                <Reveal as="li" key={id}>
                  <LocaleLink
                    href={meta.href}
                    className="group grid items-center gap-8 border-t border-ink/12 py-12 md:grid-cols-12 md:gap-10"
                  >
                    <figure className="md:col-span-5">
                      <div className="img-frame img-mat">
                        <img
                          src="/images/experiments/ecommerce-app/screen-4.jpg"
                          alt={project.title}
                          loading="lazy"
                        />
                      </div>
                    </figure>
                    <div className="md:col-span-6 md:col-start-7">
                      <p className="meta" style={{ color: TONE_ACCENT[meta.tone] }}>
                        {project.category}
                      </p>
                      <h2 className="mt-4 text-[1.7rem] font-medium leading-[1.15] tracking-[-0.02em] text-ink md:text-[2rem]">
                        {project.title}
                      </h2>
                      <p className="mt-5 max-w-md text-[0.98rem] leading-[1.75] text-ink/60">
                        {project.summary}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2.5 text-[12px] uppercase tracking-[0.2em] text-ink/55 transition-colors duration-500 group-hover:text-ink">
                        <span className="border-b border-ink/20 pb-0.5 transition-colors duration-500 group-hover:border-ink/60">
                          {copy.viewExperiment}
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
          <Reveal className="mt-10">
            <p className="meta max-w-lg border-t border-ink/12 pt-8 text-ink/45">
              {copy.future}
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
