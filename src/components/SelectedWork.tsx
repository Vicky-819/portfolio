"use client";

import { useState } from "react";
import { LocaleLink } from "@/components/LocaleLink";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Reveal } from "@/components/Reveal";
import { FEATURED_IDS, PROJECT_META } from "@/content/projects";
import type { ProjectId } from "@/content/types";
import { useLanguage } from "@/lib/i18n";

export function SelectedWork() {
  const { dictionary } = useLanguage();
  const [active, setActive] = useState<ProjectId>(FEATURED_IDS[0]);
  const [previewLifted, setPreviewLifted] = useState(false);
  const activeCopy = dictionary.projects[active];

  return (
    <section id="work" className="px-6 py-20 md:px-10 lg:px-14 lg:py-[6.5rem]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-12 grid gap-3 md:mb-16 md:grid-cols-12 md:items-end">
          <p className="eyebrow md:col-span-3">
            {dictionary.selectedWork.eyebrow}
          </p>
          <h2 className="max-w-xl text-[1.75rem] font-medium leading-[1.25] tracking-tight text-ink md:col-span-8 md:text-[2.15rem]">
            {dictionary.selectedWork.title}
          </h2>
        </Reveal>

        <div
          className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14"
          onMouseLeave={() => setPreviewLifted(false)}
        >
          <ul className="lg:col-span-6">
            {FEATURED_IDS.map((id, index) => {
              const project = dictionary.projects[id];
              const meta = PROJECT_META[id];
              const isActive = active === id;

              return (
                <Reveal
                  key={id}
                  as="li"
                  delay={80 + index * 70}
                  className="border-t border-line last:border-b"
                >
                  <LocaleLink
                    href={meta.href}
                    className="group block py-6 outline-none md:py-7"
                    onMouseEnter={() => {
                      setActive(id);
                      setPreviewLifted(true);
                    }}
                    onFocus={() => {
                      setActive(id);
                      setPreviewLifted(true);
                    }}
                  >
                    <div className="flex items-start gap-5 md:gap-7">
                      <span
                        className={`mt-1.5 w-8 shrink-0 text-[11px] tracking-[0.18em] transition-colors duration-500 ${
                          isActive ? "text-accent" : "text-ink/30"
                        }`}
                      >
                        {project.index}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <h3
                            className={`text-[1.35rem] tracking-[-0.03em] transition-colors duration-500 md:text-[1.7rem] ${
                              isActive
                                ? "text-ink"
                                : "text-ink/40 group-hover:text-ink/80"
                            }`}
                          >
                            {project.title}
                          </h3>
                          <span className="meta">{project.category}</span>
                        </div>
                        <p
                          className={`mt-2.5 max-w-md text-[0.95rem] leading-[1.7] transition-all duration-500 ${
                            isActive
                              ? "translate-y-0 text-ink/60 opacity-100"
                              : "text-ink/50 opacity-80 lg:translate-y-1 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-70"
                          }`}
                        >
                          {project.summary}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 overflow-hidden lg:hidden">
                      <div
                        className={`origin-center transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isActive ? "scale-[1.03]" : "scale-100"
                        }`}
                      >
                        <ProjectVisual
                          tone={meta.tone}
                          index={project.index}
                          title={project.title}
                        />
                      </div>
                    </div>
                  </LocaleLink>
                </Reveal>
              );
            })}
          </ul>

          <div className="sticky top-28 hidden lg:col-span-6 lg:block">
            <Reveal delay={160}>
              <div
                className="group/preview relative aspect-[4/5] overflow-hidden bg-paper"
                onMouseEnter={() => setPreviewLifted(true)}
              >
                {FEATURED_IDS.map((id) => {
                  const project = dictionary.projects[id];
                  const meta = PROJECT_META[id];
                  const isActive = active === id;
                  return (
                    <div
                      key={id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div
                        className={`h-full w-full will-change-transform transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isActive
                            ? previewLifted
                              ? "scale-[1.055] translate-y-[-6px]"
                              : "scale-[1.02]"
                            : "scale-[1.08]"
                        }`}
                      >
                        <ProjectVisual
                          tone={meta.tone}
                          index={project.index}
                          title={project.title}
                        />
                      </div>
                    </div>
                  );
                })}
                <p className="sr-only">
                  {dictionary.selectedWork.previewLabel}: {activeCopy.title}
                </p>
              </div>
              <p className="mt-5 max-w-md text-[0.9rem] leading-[1.7] text-ink/50">
                {activeCopy.summary}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
