"use client";

import {
  CaseHero,
  CaseSection,
  FlowLine,
  NextProject,
  Reflection,
  ScopeStrip,
} from "@/components/case/CaseSections";
import { Reveal } from "@/components/Reveal";
import { TONE_ACCENT } from "@/content/projects";
import { useLanguage } from "@/lib/i18n";

const TONE = TONE_ACCENT.ochre;
const FIGTONE = { "--figtone": "var(--tone-ochre-mark)" } as React.CSSProperties;

function MetricRows({ stats, accent = false }: { stats: { value: string; label: string }[]; accent?: boolean }) {
  return (
    <dl className="grid grid-cols-2 gap-y-10 border-t border-ink/12 pt-8 md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label}>
          <dd
            className="font-sans text-[1.9rem] font-medium tracking-[-0.02em] md:text-[2.2rem]"
            style={{ color: accent ? TONE : undefined }}
          >
            <span className={accent ? "" : "text-ink"}>{s.value}</span>
          </dd>
          <dd className="meta mt-2">{s.label}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CaseContentBrand() {
  const { dictionary } = useLanguage();
  const c = dictionary.cases["content-brand-growth"];
  const labels = dictionary.caseLabels;

  return (
    <main>
      <CaseHero
        category={dictionary.projects["content-brand-growth"].category}
        tone="ochre"
        title={c.title}
        tagline={c.tagline}
        meta={c.meta}
        scopeLine={c.scopeLine}
      />

      <CaseSection eyebrow={labels.context}>
        <Reveal className="grid gap-8 md:grid-cols-12">
          <h2 className="text-[1.35rem] font-medium tracking-[-0.02em] text-ink md:col-span-4">
            {c.contextTitle}
          </h2>
          <div className="max-w-2xl md:col-span-7">
            <p className="text-[1.05rem] leading-[1.85] text-ink/70">{c.contextBody}</p>
            <p className="mt-5 text-[1.05rem] leading-[1.85] text-ink/70">{c.contextBody2}</p>
          </div>
        </Reveal>
        <ScopeStrip stats={c.snapshot} />
      </CaseSection>

      <CaseSection>
        <Reveal className="mb-10 max-w-2xl md:mb-14">
          <h2 className="serif-italic text-[1.9rem] leading-[1.25] text-ink md:text-[2.4rem]">
            {c.framework.title}
          </h2>
          <p className="mt-6 text-[1.02rem] leading-[1.85] text-ink/65">{c.framework.body}</p>
        </Reveal>
        <FlowLine steps={c.framework.steps} tone="ochre" />
      </CaseSection>

      {/* ——— Work 01 · 职卓教育 ——— */}
      <CaseSection eyebrow={c.work01.source} className="border-t border-ink/12">
        <div className="grid items-start gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <h2 className="text-[1.8rem] font-medium tracking-[-0.02em] text-ink md:text-[2.2rem]">
              {c.work01.title}
            </h2>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-[1.85] text-ink/70">
              {c.work01.body}
            </p>
            <p className="mt-5 max-w-xl text-[1.02rem] leading-[1.85] text-ink/70">
              {c.work01.system}
            </p>
          </Reveal>
          <Reveal delay={120} className="md:col-span-4 md:col-start-9">
            <figure>
              <div className="img-frame img-mat">
                <img src="/images/work/content-brand/douyin.jpg" alt={c.work01.captions[0]} loading="lazy" />
              </div>
              <figcaption className="figcap mt-4 text-[0.9rem] leading-[1.7] text-ink/55" style={FIGTONE}>
                {c.work01.captions[0]}
              </figcaption>
            </figure>
          </Reveal>
        </div>
        <Reveal className="mt-14">
          <MetricRows stats={c.work01.metrics} />
        </Reveal>

        <div className="mt-20 grid items-start gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow mb-8" style={{ color: TONE }}>
              {c.work01.monetizationTitle}
            </p>
            <dl className="border-t border-ink/12">
              {c.work01.monetization.map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-ink/12 py-5"
                >
                  <dd className="font-sans text-[1.3rem] font-medium tracking-[-0.02em] text-ink">
                    {s.value}
                  </dd>
                  <dd className="meta">{s.label}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 max-w-md text-[0.95rem] leading-[1.8] text-ink/60">
              {c.work01.liveOps}
            </p>
          </Reveal>
          <Reveal delay={100} className="md:col-span-3 md:col-start-7">
            <figure>
              <div className="img-frame img-mat">
                <img src="/images/work/content-brand/knowledge-planet.jpg" alt={c.work01.captions[1]} loading="lazy" />
              </div>
              <figcaption className="figcap mt-4 text-[0.9rem] leading-[1.7] text-ink/55" style={FIGTONE}>
                {c.work01.captions[1]}
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={180} className="md:col-span-3 md:mt-20">
            <figure>
              <div className="img-frame img-mat">
                <img src="/images/work/content-brand/knowledge-planet-2.jpg" alt={c.work01.captions[2]} loading="lazy" />
              </div>
              <figcaption className="figcap mt-4 text-[0.9rem] leading-[1.7] text-ink/55" style={FIGTONE}>
                {c.work01.captions[2]}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </CaseSection>

      {/* ——— Work 02 · 清河至臻 ——— */}
      <CaseSection eyebrow={c.work02.source} className="border-t border-ink/12">
        <Reveal className="max-w-2xl">
          <h2 className="text-[1.8rem] font-medium tracking-[-0.02em] text-ink md:text-[2.2rem]">
            {c.work02.title}
          </h2>
          <p className="mt-6 text-[1.02rem] leading-[1.85] text-ink/70">{c.work02.body}</p>
        </Reveal>
        <Reveal delay={80}>
          <dl className="mt-12 flex flex-wrap items-baseline gap-x-20 gap-y-8">
            {c.work02.dominant.map((s) => (
              <div key={s.label}>
                <dd
                  className="font-sans text-[3rem] font-medium leading-none tracking-[-0.04em] md:text-[4.2rem]"
                  style={{ color: TONE }}
                >
                  {s.value}
                </dd>
                <dd className="mt-3 text-[0.95rem] text-ink/65">{s.label}</dd>
              </div>
            ))}
            <p className="meta self-center">{c.work02.supporting}</p>
          </dl>
        </Reveal>
        <div className="mt-16 grid items-start gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <figure>
              <div className="img-frame img-mat">
                <img src="/images/work/content-brand/weibo-hot-search.jpg" alt={c.work02.captions[0]} loading="lazy" />
              </div>
              <figcaption className="figcap mt-4 text-[0.9rem] leading-[1.7] text-ink/55" style={FIGTONE}>
                {c.work02.captions[0]}
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={100} className="md:col-span-4 md:mt-20">
            <figure>
              <div className="img-frame img-mat">
                <img src="/images/work/content-brand/hebei-youth-daily.jpg" alt={c.work02.captions[1]} loading="lazy" />
              </div>
              <figcaption className="figcap mt-4 text-[0.9rem] leading-[1.7] text-ink/55" style={FIGTONE}>
                {c.work02.captions[1]}
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={180} className="md:col-span-3 md:mt-40">
            <figure>
              <div className="img-frame img-mat">
                <img src="/images/work/content-brand/heqing-news.jpg" alt={c.work02.captions[2]} loading="lazy" />
              </div>
              <figcaption className="figcap mt-4 text-[0.9rem] leading-[1.7] text-ink/55" style={FIGTONE}>
                {c.work02.captions[2]}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </CaseSection>

      {/* ——— Work 03 · 公众号 ——— */}
      <CaseSection eyebrow={c.work03.source} className="border-t border-ink/12">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <h2 className="text-[1.8rem] font-medium tracking-[-0.02em] text-ink md:text-[2.2rem]">
              {c.work03.title}
            </h2>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-[1.85] text-ink/70">
              {c.work03.body}
            </p>
          </Reveal>
          <Reveal delay={100} className="md:col-span-5 md:col-start-8">
            <dl>
              <dd
                className="font-sans text-[3rem] font-medium leading-none tracking-[-0.04em] md:text-[4.2rem]"
                style={{ color: TONE }}
              >
                {c.work03.results[3].value}
              </dd>
              <dd className="mt-3 text-[0.95rem] text-ink/65">{c.work03.results[3].label}</dd>
            </dl>
            <dl className="mt-10 border-t border-ink/12">
              {c.work03.results.slice(0, 3).map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-ink/12 py-4"
                >
                  <dd className="font-sans text-[1.15rem] font-medium tracking-[-0.02em] text-ink">
                    {s.value}
                  </dd>
                  <dd className="meta">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <Reveal className="mt-14">
          <figure className="grid md:grid-cols-12">
            <div className="md:col-span-9">
              <div className="img-frame img-mat">
                <img src="/images/work/content-brand/account-growth.jpg" alt={c.work03.caption} loading="lazy" />
              </div>
            </div>
            <figcaption className="figcap mt-4 max-w-md text-[0.9rem] leading-[1.7] text-ink/55 md:col-span-3 md:mt-0 md:self-end md:pl-6" style={FIGTONE}>
              {c.work03.caption}
            </figcaption>
          </figure>
        </Reveal>
      </CaseSection>

      {/* ——— Impact ——— */}
      <CaseSection className="bg-paper/70">
        <Reveal className="max-w-2xl">
          <h2 className="text-[1.6rem] font-medium leading-[1.3] tracking-[-0.02em] text-ink md:text-[2rem]">
            {c.impact.title}
          </h2>
          <p className="mt-6 text-[1.02rem] leading-[1.85] text-ink/70">{c.impact.body}</p>
        </Reveal>
        <Reveal delay={100}>
          <dl className="mt-12 grid grid-cols-2 gap-x-10 gap-y-12 md:grid-cols-4">
            {c.impact.figures.map((s) => (
              <div key={s.label}>
                <dd
                  className="font-sans text-[2.4rem] font-medium leading-none tracking-[-0.03em] md:text-[3rem]"
                  style={{ color: TONE }}
                >
                  {s.value}
                </dd>
                <dd className="meta mt-3">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </CaseSection>

      <Reflection text={c.reflection} label={labels.reflection} tone="ochre" />
      <NextProject
        href="/about"
        label={labels.nextAbout}
        title={dictionary.pages.about.heroTitle}
        thumb={{ src: "/images/home/portrait.jpg", alt: "Vicky" }}
      />
    </main>
  );
}
