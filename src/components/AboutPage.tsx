"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { Reveal } from "@/components/Reveal";
import { EXPERIENCE_ORDER, TONE_ACCENT } from "@/content/projects";
import { useLanguage } from "@/lib/i18n";

const BRING_TONES = [
  TONE_ACCENT.terracotta,
  TONE_ACCENT.blue,
  TONE_ACCENT.sage,
  TONE_ACCENT.ochre,
];

export function AboutPage() {
  const { dictionary } = useLanguage();
  const copy = dictionary.pages.about;

  return (
    <main>
      {/* ——— Hero ——— */}
      <section className="px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36 lg:px-14">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-8">
            <p className="eyebrow mb-5">{copy.eyebrow}</p>
            <h1 className="text-[2.6rem] font-medium leading-[1.05] tracking-[-0.035em] text-ink md:text-[4rem]">
              {copy.heroTitle}
            </h1>
            <p className="serif-italic mt-6 max-w-xl text-[1.4rem] leading-[1.5] text-ink/75 md:text-[1.7rem]">
              {copy.heroLead}
            </p>
            <p className="mt-8 max-w-2xl text-[1.05rem] leading-[1.85] text-ink/70">
              {copy.heroBody}
            </p>
          </Reveal>
          <Reveal delay={140} className="md:col-span-3 md:col-start-10">
            <div className="img-frame aspect-[3/4]">
              <img src="/images/home/portrait.jpg" alt="Vicky" loading="eager" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——— Background ——— */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto grid max-w-[1400px] gap-10 border-t border-ink/12 pt-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <h2 className="serif-italic max-w-sm text-[1.8rem] leading-[1.3] text-ink md:text-[2.2rem]">
              {copy.backgroundTitle}
            </h2>
          </Reveal>
          <div className="max-w-2xl space-y-6 md:col-span-6 md:col-start-7">
            {copy.background.map((p, i) => (
              <Reveal key={p} delay={i * 60}>
                <p className="text-[1.02rem] leading-[1.9] text-ink/70">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Experience ——— */}
      <section className="bg-paper/70 px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-12 md:mb-16">
            <p className="eyebrow">{copy.experienceTitle}</p>
          </Reveal>
          <ol>
            {EXPERIENCE_ORDER.map((id, i) => {
              const e = dictionary.experience[id];
              return (
                <Reveal
                  as="li"
                  key={id}
                  delay={i * 50}
                  className="grid gap-2 border-t border-ink/12 py-7 md:grid-cols-12 md:items-baseline"
                >
                  <p className="meta md:col-span-2">{e.period}</p>
                  <p className="text-[1.25rem] font-medium tracking-[-0.01em] text-ink md:col-span-3">
                    {e.org}
                  </p>
                  <p className="text-[1rem] text-ink/75 md:col-span-3">{e.role}</p>
                  <p className="text-[0.92rem] leading-[1.7] text-ink/55 md:col-span-4">
                    {e.scope}
                  </p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ——— What I bring ——— */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-12 md:mb-16">
            <p className="eyebrow">{copy.bringTitle}</p>
          </Reveal>
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {copy.bring.map((b, i) => (
              <Reveal key={b.title} delay={i * 60}>
                <span
                  aria-hidden
                  className="mb-6 block h-px w-10"
                  style={{ background: BRING_TONES[i % BRING_TONES.length] }}
                />
                <h3 className="text-[1.15rem] font-medium tracking-[-0.01em] text-ink">
                  {b.title}
                </h3>
                <p className="mt-4 text-[0.92rem] leading-[1.8] text-ink/60">{b.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Skills ——— */}
      <section className="px-6 pb-16 md:px-10 md:pb-24 lg:px-14">
        <div className="mx-auto max-w-[1400px] border-t border-ink/12 pt-14">
          <Reveal className="mb-12 md:mb-16">
            <p className="eyebrow">{copy.skillsTitle}</p>
          </Reveal>
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {copy.skills.map((g, i) => (
              <Reveal key={g.title} delay={i * 60}>
                <h3 className="text-[1.05rem] font-medium tracking-[-0.01em] text-ink">
                  {g.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="border border-ink/15 px-3 py-1.5 text-[0.85rem] text-ink/65"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Exploring ——— */}
      <section className="px-6 pb-20 md:px-10 md:pb-28 lg:px-14">
        <div className="mx-auto max-w-[1400px] border-t border-ink/12 pt-14">
          <Reveal className="mb-12 md:mb-16">
            <p className="eyebrow">{copy.exploringTitle}</p>
          </Reveal>
          <ol>
            {copy.exploring.map((e, i) => (
              <Reveal
                as="li"
                key={e.title}
                delay={i * 50}
                className="grid gap-2 border-b border-ink/12 py-6 first:border-t md:grid-cols-12 md:items-baseline"
              >
                <p className="serif-italic text-[1.05rem] text-ink/40 md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="text-[1.2rem] font-medium tracking-[-0.01em] text-ink md:col-span-3">
                  {e.title}
                </p>
                <p className="text-[0.95rem] leading-[1.75] text-ink/60 md:col-span-7">
                  {e.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— Closing ——— */}
      <section className="px-6 pb-28 md:px-10 md:pb-36 lg:px-14">
        <div className="mx-auto max-w-[1400px] border-t border-ink/12 pt-16 md:pt-20">
          <Reveal>
            <p className="serif-italic max-w-3xl text-[2rem] leading-[1.35] text-ink md:text-[2.6rem]">
              {copy.closingTitle}
            </p>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-[1.85] text-ink/70">
              {copy.closingBody}
            </p>
            <div className="mt-10 flex flex-wrap gap-8">
              <LocaleLink
                href="/work"
                className="group inline-flex items-center gap-2.5 text-[12px] uppercase tracking-[0.2em] text-ink/70 transition-colors duration-500 hover:text-ink"
              >
                <span className="border-b border-ink/25 pb-0.5 transition-colors duration-500 group-hover:border-ink/60">
                  {copy.closingCtaWork}
                </span>
                <span aria-hidden className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
                  →
                </span>
              </LocaleLink>
              <LocaleLink
                href="/contact"
                className="group inline-flex items-center gap-2.5 text-[12px] uppercase tracking-[0.2em] text-ink/70 transition-colors duration-500 hover:text-ink"
              >
                <span className="border-b border-ink/25 pb-0.5 transition-colors duration-500 group-hover:border-ink/60">
                  {copy.closingCtaContact}
                </span>
                <span aria-hidden className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
                  →
                </span>
              </LocaleLink>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
