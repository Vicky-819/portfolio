"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { ProjectVisual } from "@/components/ProjectVisual";
import type { ProjectId } from "@/content/types";
import { PROJECT_META } from "@/content/projects";
import { useLanguage } from "@/lib/i18n";

export function ProjectCard({
  id,
  playful = false,
}: {
  id: ProjectId;
  playful?: boolean;
}) {
  const { dictionary } = useLanguage();
  const project = dictionary.projects[id];
  const meta = PROJECT_META[id];

  return (
    <LocaleLink href={meta.href} className="group block">
      <div className={`overflow-hidden bg-paper ${playful ? "md:mt-8" : ""}`}>
        <div className="aspect-[5/4] overflow-hidden">
          <div className="h-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
            <ProjectVisual
              tone={meta.tone}
              index={project.index}
              title={project.title}
            />
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-[1.35rem] tracking-[-0.03em] text-ink">
            {project.title}
          </h3>
          <span
            aria-hidden
            className="text-ink/40 transition-transform duration-500 group-hover:translate-x-1"
          >
            →
          </span>
        </div>
        <p className="meta mt-2">{project.category}</p>
        <p className="mt-3 max-w-md text-[0.95rem] leading-[1.7] text-ink/60">
          {project.summary}
        </p>
      </div>
    </LocaleLink>
  );
}
