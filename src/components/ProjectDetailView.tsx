"use client";

import { CaseSection, NextProject } from "@/components/case/CaseSections";
import { Reveal } from "@/components/Reveal";
import { PROJECT_META, TONE_ACCENT } from "@/content/projects";
import type { IndependentId } from "@/content/types";
import { useLanguage } from "@/lib/i18n";

const IMAGES: Record<IndependentId, { src: string; cls: string }[]> = {
  "flight-deal": [
    { src: "/images/projects/flight-deal/v1-home.jpg", cls: "md:col-span-5" },
    { src: "/images/projects/flight-deal/v1-flight-deals.jpg", cls: "md:col-span-6 md:col-start-7 md:mt-32" },
    { src: "/images/projects/flight-deal/v1-flight-detail.jpg", cls: "md:col-span-9 md:col-start-2 md:mt-16" },
    { src: "/images/projects/flight-deal/v1-my-subscriptions.jpg", cls: "md:col-span-5 md:col-start-4 md:mt-16" },
  ],
  "vicky-portfolio": [
    { src: "/images/projects/vicky-portfolio/home-hero.jpg", cls: "md:col-span-7" },
    { src: "/images/projects/vicky-portfolio/home-work.jpg", cls: "md:col-span-4 md:col-start-9 md:mt-24" },
  ],
};

export function ProjectDetailView({ id }: { id: IndependentId }) {
  const { dictionary } = useLanguage();
  const c = dictionary.projectPages[id];
  const meta = PROJECT_META[id];
  const tone = TONE_ACCENT[meta.tone];
  const labels = dictionary.caseLabels;

  return (
    <main>
      <section className="px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <p className="meta" style={{ color: tone }}>
                {c.category}
              </p>
              <span className="meta flex items-center gap-2 border border-ink/20 px-3 py-1.5">
                <span
                  aria-hidden
                  className="inline-block h-[6px] w-[6px] rounded-full"
                  style={{ background: tone }}
                />
                {c.status}
              </span>
            </div>
            <h1 className="mt-6 max-w-3xl text-[2.4rem] font-medium leading-[1.08] tracking-[-0.035em] text-ink md:text-[3.6rem]">
              {c.title}
            </h1>
            <p className="serif-italic mt-6 max-w-xl text-[1.3rem] leading-[1.5] text-ink/75 md:text-[1.5rem]">
              {c.tagline}
            </p>
            <p className="mt-8 max-w-2xl text-[1.05rem] leading-[1.85] text-ink/70">
              {c.body}
            </p>
            {c.links ? (
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
                {c.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="meta text-ink/60 underline decoration-ink/25 underline-offset-[6px] transition-colors hover:text-ink hover:decoration-ink/60"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}
          </Reveal>
        </div>
      </section>

      <CaseSection eyebrow={c.pillarsTitle ?? c.focusTitle ?? ""}>
        {c.pillars ? (
          <ol className="border-t border-ink/12">
            {c.pillars.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                delay={i * 50}
                className="grid gap-2 border-b border-ink/12 py-6 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <span className="serif-italic text-[1.05rem] md:col-span-1" style={{ color: tone }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[1.15rem] font-medium tracking-[-0.01em] text-ink md:col-span-4 md:text-[1.3rem]">
                  {p.title}
                </span>
                <span className="max-w-xl text-[0.98rem] leading-[1.75] text-ink/60 md:col-span-6 md:col-start-7">
                  {p.body}
                </span>
              </Reveal>
            ))}
          </ol>
        ) : (
          <ol className="border-t border-ink/12">
            {(c.focus ?? []).map((f, i) => (
              <Reveal
                as="li"
                key={f}
                delay={i * 50}
                className="flex items-baseline gap-6 border-b border-ink/12 py-5"
              >
                <span className="serif-italic text-[1.05rem]" style={{ color: tone }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[1.15rem] font-medium tracking-[-0.01em] text-ink md:text-[1.3rem]">
                  {f}
                </span>
              </Reveal>
            ))}
          </ol>
        )}
      </CaseSection>

      {c.evolution ? (
        <CaseSection eyebrow={c.evolution.title} className="border-t border-ink/12">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <Reveal>
              <h3 className="text-[1.3rem] font-medium tracking-[-0.02em] text-ink/70">
                {c.evolution.v0Label}
              </h3>
              <p className="mt-5 max-w-lg text-[1rem] leading-[1.8] text-ink/60">
                {c.evolution.v0Body}
              </p>
              <p className="meta mt-10 text-ink/45">{c.evolution.v0IssuesLabel}</p>
              <p className="mt-3 max-w-lg text-[1rem] leading-[1.8] text-ink/60">
                {c.evolution.v0Issues}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h3 className="text-[1.3rem] font-medium tracking-[-0.02em]" style={{ color: tone }}>
                {c.evolution.v1Label}
              </h3>
              <p className="mt-5 max-w-lg text-[1rem] leading-[1.8] text-ink/70">
                {c.evolution.v1Body}
              </p>
            </Reveal>
          </div>
        </CaseSection>
      ) : null}

      <CaseSection eyebrow={labels.evidence}>
        <div className="grid items-start gap-10 md:grid-cols-12 md:gap-x-10">
          {IMAGES[id].map((img, i) => (
            <Reveal key={img.src} delay={i * 60} className={img.cls}>
              <figure>
                <div className="img-frame img-mat">
                  <img src={img.src} alt={c.captions[i] ?? c.title} loading="lazy" />
                </div>
                {c.captions[i] ? (
                  <figcaption
                    className="figcap mt-5 max-w-sm text-[0.9rem] leading-[1.7] text-ink/55"
                    style={{ "--figtone": tone } as React.CSSProperties}
                  >
                    {c.captions[i]}
                  </figcaption>
                ) : null}
              </figure>
            </Reveal>
          ))}
        </div>
        {c.note ? (
          <Reveal className="mt-14">
            <p className="meta max-w-lg text-ink/45">{c.note}</p>
          </Reveal>
        ) : null}
      </CaseSection>

      <NextProject
        href="/work"
        label={dictionary.nav.items.work}
        title={dictionary.pages.work.title}
      />
    </main>
  );
}
