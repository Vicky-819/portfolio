"use client";

import type { ReactNode } from "react";
import { LocaleLink } from "@/components/LocaleLink";
import { Reveal } from "@/components/Reveal";
import { TONE_ACCENT, type VisualTone } from "@/content/projects";
import type { Stat, FlowStep } from "@/content/types";

const wrap = "px-6 md:px-10 lg:px-14";
const inner = "mx-auto max-w-[1400px]";

/* ————————————————— Hero ————————————————— */

export function CaseHero({
  category,
  tone,
  title,
  tagline,
  meta,
  image,
  scopeLine,
}: {
  category: string;
  tone: VisualTone;
  title: string;
  tagline: string;
  meta: string[];
  image?: { src: string; alt: string };
  scopeLine?: string;
}) {
  return (
    <section className={`${wrap} pb-16 pt-28 md:pb-24 md:pt-36`}>
      <div className={`${inner} grid gap-12 lg:grid-cols-12 lg:items-end`}>
        <Reveal className={image ? "lg:col-span-7" : "lg:col-span-9"}>
          <p className="meta mb-5" style={{ color: TONE_ACCENT[tone] }}>
            {category}
          </p>
          <h1 className="text-[2.6rem] font-medium leading-[1.05] tracking-[-0.035em] text-ink md:text-[4rem]">
            {title}
          </h1>
          <p className="serif-italic mt-6 max-w-xl text-[1.35rem] leading-[1.5] text-ink/75 md:text-[1.6rem]">
            {tagline}
          </p>
          <p className="meta mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
            {meta.map((m, i) => (
              <span key={m} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden className="h-[3px] w-[3px] rounded-full bg-ink/30" />
                )}
                {m}
              </span>
            ))}
          </p>
          {scopeLine ? (
            <p className="meta mt-4 text-ink/45">{scopeLine}</p>
          ) : null}
        </Reveal>
        {image ? (
          <Reveal delay={140} className="lg:col-span-4 lg:col-start-9">
            <div className="img-frame">
              <img src={image.src} alt={image.alt} loading="eager" />
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

/* ————————————————— Section shell ————————————————— */

export function CaseSection({
  eyebrow,
  children,
  className = "",
  dark = false,
}: {
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section className={`${wrap} py-14 md:py-20 ${className}`}>
      <div className={inner}>
        {eyebrow ? (
          <Reveal className="mb-10 md:mb-14">
            <p className={`eyebrow ${dark ? "text-ivory/50" : ""}`}>{eyebrow}</p>
          </Reveal>
        ) : null}
        {children}
      </div>
    </section>
  );
}

/* ————————————————— Context + scope strip ————————————————— */

export function ScopeStrip({ stats }: { stats: Stat[] }) {
  return (
    <Reveal>
      <dl className="mt-12 grid grid-cols-2 gap-y-10 border-t border-ink/12 pt-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-sans text-[2rem] font-medium tracking-[-0.02em] text-ink md:text-[2.4rem]">
              {s.value}
            </dd>
            <dd className="meta mt-2">{s.label}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}

/* ————————————————— Connected flow steps ————————————————— */

export function FlowSteps({
  steps,
  tone,
  cols,
}: {
  steps: FlowStep[];
  tone: VisualTone;
  cols?: 4 | 5;
}) {
  const colsClass = cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5";
  return (
    <ol
      className={`grid gap-10 border-t border-ink/12 pt-10 sm:grid-cols-2 ${colsClass} lg:gap-8`}
    >
      {steps.map((step, i) => (
        <Reveal as="li" key={step.title} delay={i * 70} className="relative">
          <p className="flex items-baseline gap-3">
            <span
              className="serif-italic text-[1.15rem] leading-none"
              style={{ color: TONE_ACCENT[tone] }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[1.1rem] font-medium tracking-[-0.01em] text-ink">
              {step.title}
            </span>
          </p>
          <p className="mt-4 text-[0.92rem] leading-[1.75] text-ink/60">
            {step.body}
          </p>
        </Reveal>
      ))}
    </ol>
  );
}

/* ————————————————— Label-only flow line ————————————————— */

export function FlowLine({ steps, tone }: { steps: string[]; tone: VisualTone }) {
  return (
    <Reveal>
      <ol className="flex flex-wrap items-center gap-x-5 gap-y-4 border-t border-ink/12 pt-8">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-5">
            {i > 0 && (
              <span
                aria-hidden
                className="h-px w-6 md:w-10"
                style={{ background: TONE_ACCENT[tone] }}
              />
            )}
            <span className="text-[1.05rem] font-medium tracking-[-0.01em] text-ink md:text-[1.15rem]">
              {step}
            </span>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

/* ————————————————— Results ————————————————— */

export function ResultsBlock({
  title,
  dominant,
  supporting,
  tone,
}: {
  title: string;
  dominant: Stat[];
  supporting: Stat[];
  tone: VisualTone;
}) {
  return (
    <div>
      <Reveal>
        <h2 className="max-w-2xl text-[1.6rem] font-medium leading-[1.3] tracking-[-0.02em] text-ink md:text-[2rem]">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <dl className="mt-12 flex flex-wrap gap-x-20 gap-y-10">
          {dominant.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd
                className="font-sans text-[3.2rem] font-medium leading-none tracking-[-0.04em] md:text-[4.5rem]"
                style={{ color: TONE_ACCENT[tone] }}
              >
                {s.value}
              </dd>
              <dd className="mt-3 text-[0.95rem] text-ink/65">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
      <dl className="mt-14 border-t border-ink/12">
        {supporting.map((s, i) => (
          <Reveal
            as="li"
            key={s.label}
            delay={i * 50}
            className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-ink/12 py-5 md:grid-cols-12"
          >
            <dd className="font-sans text-[1.3rem] font-medium tracking-[-0.02em] text-ink md:col-span-4">
              {s.value}
            </dd>
            <dd className="meta md:col-span-7">{s.label}</dd>
          </Reveal>
        ))}
      </dl>
    </div>
  );
}

/* ————————————————— Reflection ————————————————— */

export function Reflection({
  text,
  label,
  tone,
  image,
}: {
  text: string;
  label: string;
  tone?: VisualTone;
  image?: { src: string; alt: string };
}) {
  const accent = tone ? TONE_ACCENT[tone] : "var(--ink)";
  return (
    <section className={`${wrap} py-20 md:py-28`}>
      <div className={inner}>
        <Reveal>
          <div className="grid gap-10 border-t border-ink/12 pt-12 md:grid-cols-12 md:pt-16">
            <div className={image ? "md:col-span-8" : "md:col-span-10"}>
              <div className="flex items-end gap-5">
                <span
                  aria-hidden
                  className="serif-italic select-none text-[4.5rem] leading-[0.7] md:text-[6rem]"
                  style={{ color: accent }}
                >
                  &ldquo;
                </span>
                <p className="eyebrow pb-1">{label}</p>
              </div>
              <p className="serif-italic mt-8 max-w-3xl text-[1.6rem] leading-[1.55] text-ink/85 md:text-[2rem]">
                {text}
              </p>
            </div>
            {image ? (
              <figure className="md:col-span-3 md:col-start-10 md:mt-6">
                <div className="img-frame img-mat">
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </div>
              </figure>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ————————————————— Next project ————————————————— */

export function NextProject({
  href,
  label,
  title,
  meta,
  thumb,
}: {
  href: string;
  label: string;
  title: string;
  meta?: string;
  thumb?: { src: string; alt: string };
}) {
  return (
    <section className={`${wrap} pb-28 pt-6 md:pb-36`}>
      <div className={inner}>
        <Reveal>
          <LocaleLink
            href={href}
            className="group block border-t border-ink/12 pt-10"
          >
            <p className="eyebrow mb-6">{label}</p>
            <div className="grid grid-cols-[1fr_auto] items-center gap-6 md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-12">
              {thumb ? (
                <div className="col-span-2 w-40 md:col-span-1 md:w-44 lg:w-52">
                  <div className="img-frame aspect-[3/2]">
                    <img src={thumb.src} alt={thumb.alt} loading="lazy" />
                  </div>
                </div>
              ) : null}
              <div className="col-span-2 min-w-0 md:col-span-1">
                <h2 className="text-[2rem] font-medium leading-[1.12] tracking-[-0.03em] text-ink transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-3 md:text-[3rem]">
                  {title}
                </h2>
                {meta ? <p className="meta mt-3">{meta}</p> : null}
              </div>
              <span
                aria-hidden
                className="justify-self-end text-[1.6rem] text-ink/40 transition-all duration-500 group-hover:translate-x-2 group-hover:text-ink md:text-[2rem]"
              >
                →
              </span>
            </div>
          </LocaleLink>
        </Reveal>
      </div>
    </section>
  );
}
