"use client";

import {
  CaseSection,
  FlowLine,
  NextProject,
  Reflection,
  ScopeStrip,
} from "@/components/case/CaseSections";
import { Reveal } from "@/components/Reveal";
import { TONE_ACCENT } from "@/content/projects";
import { useLanguage } from "@/lib/i18n";

const SAGE = TONE_ACCENT.sage;

export function CaseResearch() {
  const { dictionary } = useLanguage();
  const c = dictionary.cases["quantitative-research"];
  const labels = dictionary.caseLabels;
  const next = dictionary.projects["content-brand-growth"];

  return (
    <main>
      {/* Hero — text carries the hierarchy; the framework map supports */}
      <section className="px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="meta mb-5" style={{ color: SAGE }}>
              {dictionary.projects["quantitative-research"].category}
            </p>
            <h1 className="text-[2.6rem] font-medium leading-[1.05] tracking-[-0.035em] text-ink md:text-[4rem]">
              {c.title}
            </h1>
            <p className="serif-italic mt-6 max-w-xl text-[1.35rem] leading-[1.5] text-ink/75 md:text-[1.6rem]">
              {c.tagline}
            </p>
            <p className="meta mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
              {c.meta.map((m, i) => (
                <span key={m} className="flex items-center gap-3">
                  {i > 0 && (
                    <span aria-hidden className="h-[3px] w-[3px] rounded-full bg-ink/30" />
                  )}
                  {m}
                </span>
              ))}
            </p>
          </Reveal>
          <Reveal delay={140} className="mt-14 md:mt-20">
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-9 md:col-start-2">
                <div className="img-frame img-mat">
                  <img
                    src="/images/work/research/framework.jpg"
                    alt={c.dimensions.title}
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CaseSection eyebrow={labels.context}>
        <Reveal className="grid gap-8 md:grid-cols-12">
          <h2 className="text-[1.35rem] font-medium tracking-[-0.02em] text-ink md:col-span-4">
            {c.contextTitle}
          </h2>
          <div className="max-w-2xl md:col-span-7">
            <p className="text-[1.05rem] leading-[1.85] text-ink/70">
              {c.contextBody}
            </p>
            <p className="mt-4 text-[1.05rem] leading-[1.85] text-ink/70">
              {c.contextBody2}
            </p>
          </div>
        </Reveal>
        <ScopeStrip stats={c.snapshot} />
      </CaseSection>

      {/* Workflow */}
      <CaseSection>
        <Reveal className="mb-10 md:mb-12">
          <h2 className="serif-italic text-[1.9rem] leading-[1.25] text-ink md:text-[2.4rem]">
            {c.workflow.title}
          </h2>
          <p className="mt-6 max-w-2xl text-[1.02rem] leading-[1.85] text-ink/65">
            {c.workflow.intro}
          </p>
        </Reveal>
        <FlowLine steps={c.workflow.steps} tone="sage" />
      </CaseSection>

      {/* Four dimensions — one research map, RH2 emphasized */}
      <CaseSection>
        <Reveal className="mb-10 md:mb-12">
          <h2 className="text-[1.35rem] font-medium tracking-[-0.02em] text-ink">
            {c.dimensions.title}
          </h2>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-[1.75] text-ink/55">
            {c.dimensions.note}
          </p>
        </Reveal>
        <ol className="border-t border-ink/12">
          {c.dimensions.items.map((d, i) => {
            const primary = d.code === "RH2";
            return (
              <Reveal
                as="li"
                key={d.code}
                delay={i * 60}
                className={`grid gap-2 border-b border-ink/12 py-7 md:grid-cols-12 md:items-baseline md:gap-8 ${
                  primary ? "-mx-6 bg-paper/70 px-6 md:-mx-10 md:px-10 lg:-mx-14 lg:px-14" : ""
                }`}
              >
                <span
                  className="serif-italic text-[1.4rem] leading-none md:col-span-2"
                  style={{ color: primary ? SAGE : "var(--ink)", opacity: primary ? 1 : 0.35 }}
                >
                  {d.code}
                </span>
                <span className="flex items-baseline gap-3 text-[1.25rem] font-medium tracking-[-0.01em] text-ink md:col-span-5">
                  {d.name}
                  {primary && (
                    <span
                      aria-hidden
                      className="mb-0.5 inline-block h-1.5 w-1.5 rounded-full"
                      style={{ background: SAGE }}
                    />
                  )}
                </span>
                <span className="meta md:col-span-5">{d.method}</span>
              </Reveal>
            );
          })}
        </ol>
      </CaseSection>

      {/* Findings — RH2 core: median / IQR range visual + group split */}
      <CaseSection className="bg-paper">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-6">
            <h2 className="text-[1.6rem] font-medium leading-[1.3] tracking-[-0.02em] text-ink md:text-[2rem]">
              {c.findings.title}
            </h2>
            <p className="mt-6 max-w-lg text-[1.02rem] leading-[1.85] text-ink/70">
              {c.findings.body1}
            </p>
            <p className="mt-4 max-w-lg text-[1.02rem] leading-[1.85] text-ink/70">
              {c.findings.body2}
            </p>

            {/* Scale 0–28 with IQR band and median marker */}
            <div className="mt-12 max-w-lg">
              <div className="relative h-2 rounded-full bg-ink/10">
                <div
                  className="absolute top-0 h-full rounded-full"
                  style={{
                    left: `${(11 / 28) * 100}%`,
                    width: `${(8 / 28) * 100}%`,
                    background: SAGE,
                    opacity: 0.45,
                  }}
                />
                <div
                  className="absolute top-1/2 h-6 w-[2px] -translate-y-1/2"
                  style={{ left: `${(15 / 28) * 100}%`, background: SAGE }}
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-x-10 gap-y-3">
                <p className="text-[0.95rem] text-ink/70">
                  <span className="meta mr-2">{c.findings.medianLabel}</span>
                  <span className="text-[1.2rem] font-medium text-ink">
                    {c.findings.median}
                  </span>
                </p>
                <p className="text-[0.95rem] text-ink/70">
                  <span className="meta mr-2">{c.findings.iqrLabel}</span>
                  <span className="text-[1.2rem] font-medium text-ink">
                    {c.findings.iqr}
                  </span>
                </p>
              </div>

              {/* Group split */}
              <div className="mt-10">
                <div className="flex h-3 overflow-hidden rounded-full">
                  <div style={{ width: "55.5%", background: SAGE }} />
                  <div className="bg-ink/15" style={{ width: "44.5%" }} />
                </div>
                <div className="mt-4 flex flex-wrap justify-between gap-3 text-[0.9rem] text-ink/65">
                  <span>{c.findings.highLabel}</span>
                  <span>{c.findings.lowLabel}</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 md:col-start-8">
            <div className="img-frame img-mat">
              <img
                src="/images/work/research/rh2-protective.jpg"
                alt={c.findings.title}
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </CaseSection>

      {/* Strategy adoption — code-drawn bilingual bars */}
      <CaseSection>
        <Reveal className="mb-10 md:mb-12">
          <h2 className="text-[1.35rem] font-medium tracking-[-0.02em] text-ink">
            {c.strategies.title}
          </h2>
          <p className="mt-3 max-w-xl text-[0.95rem] text-ink/55">
            {c.strategies.note}
          </p>
        </Reveal>
        <ul className="grid gap-7">
          {c.strategies.bars.map((bar, i) => (
            <Reveal as="li" key={bar.label} delay={i * 60}>
              <div className="grid items-baseline gap-2 md:grid-cols-12">
                <span className="text-[1.02rem] text-ink md:col-span-4">
                  {bar.label}
                </span>
                <span className="relative block h-[6px] overflow-hidden rounded-full bg-ink/8 md:col-span-7 md:self-center">
                  <span
                    className="absolute left-0 top-0 h-full rounded-full"
                    style={{ width: `${bar.pct}%`, background: SAGE }}
                  />
                </span>
                <span className="font-sans text-[1.1rem] font-medium text-ink md:col-span-1 md:text-right">
                  {bar.pct}%
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </CaseSection>

      {/* Key findings RH1–RH4 */}
      <CaseSection>
        <Reveal className="mb-10 md:mb-12">
          <h2 className="text-[1.35rem] font-medium tracking-[-0.02em] text-ink">
            {c.keyFindings.title}
          </h2>
        </Reveal>
        <ol className="border-t border-ink/12">
          {c.keyFindings.items.map((f, i) => (
            <Reveal
              as="li"
              key={f.code}
              delay={i * 60}
              className="grid gap-2 border-b border-ink/12 py-7 md:grid-cols-12 md:items-baseline md:gap-8"
            >
              <span className="serif-italic text-[1.2rem] leading-none text-ink/40 md:col-span-1">
                {f.code}
              </span>
              <span className="text-[1.1rem] font-medium text-ink md:col-span-3">
                {f.name}
              </span>
              <span className="max-w-xl text-[0.95rem] leading-[1.75] text-ink/65 md:col-span-6">
                {f.result}
              </span>
              <span
                className="meta md:col-span-2 md:text-right"
                style={{ color: f.supported.includes("未") || f.supported.startsWith("Not") ? "var(--ink)" : SAGE, opacity: 0.75 }}
              >
                {f.supported}
              </span>
            </Reveal>
          ))}
        </ol>
      </CaseSection>

      {/* Key insight */}
      <CaseSection>
        <Reveal>
          <div className="border-t border-ink/12 pt-12 md:pt-16">
            <p className="eyebrow mb-8" style={{ color: SAGE }}>
              {c.keyInsight.title}
            </p>
            <p className="font-sans text-[3rem] font-medium leading-none tracking-[-0.04em] text-ink md:text-[5rem]">
              {c.keyInsight.stat}
            </p>
            <p className="meta mt-4">{c.keyInsight.detail}</p>
            <p className="serif-italic mt-8 max-w-2xl text-[1.3rem] leading-[1.6] text-ink/75 md:text-[1.5rem]">
              {c.keyInsight.body}
            </p>
          </div>
        </Reveal>
      </CaseSection>

      <Reflection
        text={c.reflection}
        label={labels.reflection}
        tone="sage"
        image={{ src: "/images/work/research/platforms.jpg", alt: c.title }}
      />

      <NextProject
        href="/work/content-brand-growth"
        label={labels.nextProject}
        title={next.title}
        meta={next.category}
        thumb={{ src: "/images/home/content-brand-growth.jpg", alt: next.title }}
      />
    </main>
  );
}
