"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { Reveal } from "@/components/Reveal";
import {
  CAPABILITY_ORDER,
  CAPABILITY_TONE,
  PROJECT_META,
  TONE_ACCENT,
} from "@/content/projects";
import type { CapabilityId, ProjectId } from "@/content/types";
import { useLanguage } from "@/lib/i18n";

/* Each capability points at the featured case where it shows up most —
   gives the rows a second layer of hierarchy and somewhere to go */
const CAPABILITY_CASE: Record<CapabilityId, ProjectId> = {
  growth: "ecommerce-growth",
  product: "ai-product-ops",
  research: "quantitative-research",
  ai: "content-brand-growth",
};

export function WorkAcross() {
  const { dictionary } = useLanguage();

  return (
    <section className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-12 grid gap-4 md:mb-16 md:grid-cols-12 md:items-end">
          <p className="eyebrow md:col-span-3">
            {dictionary.workAcross.eyebrow}
          </p>
          <h2 className="max-w-2xl text-[1.75rem] font-medium leading-[1.25] tracking-tight text-ink md:col-span-8 md:text-[2.15rem]">
            {dictionary.workAcross.title}
          </h2>
        </Reveal>

        <ul className="border-t border-ink/12">
          {CAPABILITY_ORDER.map((id, index) => {
            const item = dictionary.capabilities[id];
            const tone = CAPABILITY_TONE[id];
            const caseId = CAPABILITY_CASE[id];
            const caseMeta = PROJECT_META[caseId];
            const caseTitle = dictionary.projects[caseId].title;
            return (
              <Reveal
                key={id}
                as="li"
                delay={index * 60}
                className="group border-b border-ink/12"
              >
                <div className="-mx-6 grid gap-3 px-6 py-8 transition-colors duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:bg-paper/70 md:-mx-10 md:grid-cols-12 md:items-baseline md:gap-10 md:px-10 md:py-10 lg:-mx-14 lg:px-14">
                  <div className="flex items-baseline gap-5 md:col-span-5">
                    <span className="serif-italic w-8 shrink-0 text-[1.15rem] leading-none text-ink/30 transition-colors duration-500 group-hover:text-ink/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[1.6rem] font-medium tracking-[-0.02em] text-ink transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-2 md:text-[1.95rem]">
                      {item.title}
                    </h3>
                    <span
                      className="mb-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full opacity-70 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.8]"
                      style={{ background: TONE_ACCENT[tone] }}
                      aria-hidden
                    />
                  </div>
                  <p className="max-w-xl text-[0.98rem] leading-[1.75] text-ink/60 transition-colors duration-500 group-hover:text-ink/80 md:col-span-5 md:col-start-7">
                    {item.description}
                  </p>
                  <div className="md:col-span-2 md:col-start-11 md:text-right">
                    <LocaleLink
                      href={caseMeta.href}
                      className="meta inline-flex items-center gap-2 text-ink/45 transition-colors duration-500 hover:text-ink group-hover:text-ink/70"
                    >
                      <span className="border-b border-ink/15 pb-0.5">
                        {caseTitle}
                      </span>
                      <span
                        aria-hidden
                        className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </LocaleLink>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
