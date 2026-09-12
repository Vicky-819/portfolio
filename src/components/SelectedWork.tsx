"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { Reveal } from "@/components/Reveal";
import { FEATURED_IDS, PROJECT_META, TONE_ACCENT } from "@/content/projects";
import type { ProjectId } from "@/content/types";
import { useLanguage } from "@/lib/i18n";

const HOME_IMAGE: Record<ProjectId, string> = {
  "ecommerce-growth": "/images/home/ecommerce-growth.jpg",
  "ai-product-ops": "/images/home/ai-product-operations.jpg",
  "quantitative-research": "/images/home/quantitative-research.jpg",
  "content-brand-growth": "/images/home/content-brand-growth.jpg",
  "flight-deal": "/images/projects/flight-deal/cover-home-v1.jpg",
  "minimal-ecommerce": "/images/experiments/ecommerce-app/screen-1.jpg",
  "vicky-portfolio": "/images/projects/vicky-portfolio/home-hero.jpg",
};

/* Each row gets its own editorial rhythm — images stay at their native 3:2
   so the artwork's own composition is never cropped; rhythm comes from
   width, offset and alignment instead */
const ROW_LAYOUT = [
  {
    figure: "md:col-span-7 md:col-start-1",
    text: "md:col-span-4 md:col-start-9 md:pt-10",
  },
  {
    figure: "md:col-span-6 md:col-start-7 md:order-2",
    text: "md:col-span-4 md:col-start-1 md:order-1 md:pt-24",
  },
  {
    figure: "md:col-span-6 md:col-start-2",
    text: "md:col-span-4 md:col-start-9 md:pt-16",
  },
  {
    figure: "md:col-span-7 md:col-start-6 md:order-2",
    text: "md:col-span-4 md:col-start-1 md:order-1 md:pt-8",
  },
] as const;

export function SelectedWork() {
  const { dictionary } = useLanguage();

  return (
    <section id="work" className="px-6 pb-24 pt-10 md:px-10 md:pb-32 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16 grid gap-4 border-t border-ink/12 pt-8 md:mb-28 md:grid-cols-12 md:items-end md:pt-10">
          <p className="eyebrow md:col-span-3">
            {dictionary.selectedWork.eyebrow}
          </p>
          <h2 className="max-w-xl text-[1.75rem] font-medium leading-[1.25] tracking-tight text-ink md:col-span-8 md:text-[2.15rem]">
            {dictionary.selectedWork.title}
          </h2>
        </Reveal>

        <ul className="space-y-24 md:space-y-40">
          {FEATURED_IDS.map((id, index) => {
            const project = dictionary.projects[id];
            const meta = PROJECT_META[id];
            const layout = ROW_LAYOUT[index % ROW_LAYOUT.length];

            return (
              <Reveal as="li" key={id} delay={60}>
                <LocaleLink
                  href={meta.href}
                  className="group grid items-start gap-8 md:grid-cols-12 md:gap-10"
                >
                  <figure className={layout.figure}>
                    <div className="img-frame aspect-[3/2]">
                      <img
                        src={HOME_IMAGE[id]}
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
                    <h3 className="mt-5 text-[1.6rem] font-medium leading-[1.15] tracking-[-0.02em] text-ink md:text-[1.85rem]">
                      {project.title}
                    </h3>
                    <p className="meta mt-3">{project.category}</p>
                    <p className="mt-5 max-w-sm text-[0.98rem] leading-[1.75] text-ink/60">
                      {project.summary}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2.5 text-[12px] uppercase tracking-[0.2em] text-ink/55 transition-colors duration-500 group-hover:text-ink">
                      <span className="border-b border-ink/20 pb-0.5 transition-colors duration-500 group-hover:border-ink/60">
                        {dictionary.selectedWork.previewLabel}
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
  );
}
