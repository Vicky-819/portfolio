"use client";

import { ArrowLink } from "@/components/ArrowLink";
import { LocaleLink } from "@/components/LocaleLink";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Reveal } from "@/components/Reveal";
import {
  getNextProjectId,
  PROJECT_META,
  TONE_ACCENT,
} from "@/content/projects";
import type { ProjectId } from "@/content/types";
import { useLanguage } from "@/lib/i18n";

export function CaseStudyView({
  id,
  compact = false,
}: {
  id: ProjectId;
  compact?: boolean;
}) {
  const { dictionary } = useLanguage();
  const project = dictionary.projects[id];
  const meta = PROJECT_META[id];
  const labels = dictionary.caseStudy;
  const nextId = getNextProjectId(id);
  const next = dictionary.projects[nextId];
  const nextHref = PROJECT_META[nextId].href;
  const accent = TONE_ACCENT[meta.tone];

  return (
    <main
      className="pt-24 md:pt-28"
      style={{ ["--project-accent" as string]: accent }}
    >
      <section className="px-6 pb-10 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <p
              className="meta mb-4"
              style={{ color: "var(--project-accent)" }}
            >
              {project.category}
            </p>
            <h1 className="text-[2.2rem] font-medium tracking-[-0.04em] text-ink md:text-[3.25rem]">
              {project.title}
            </h1>
            <p className="mt-5 max-w-md font-serif text-xl italic text-ink/65">
              {project.subtitle}
            </p>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-6">
            <div className="aspect-[5/4] overflow-hidden bg-paper">
              <ProjectVisual
                tone={meta.tone}
                index={project.index}
                title={project.title}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1400px] border-t border-line pt-10">
          <p className="eyebrow mb-8">{labels.overview}</p>
          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="meta mb-2">{labels.role}</dt>
              <dd className="text-[0.95rem] text-ink/75">{project.role}</dd>
            </div>
            <div>
              <dt className="meta mb-2">{labels.timeline}</dt>
              <dd className="text-[0.95rem] text-ink/75">{project.timeline}</dd>
            </div>
            <div>
              <dt className="meta mb-2">{labels.category}</dt>
              <dd className="text-[0.95rem] text-ink/75">{project.category}</dd>
            </div>
            <div>
              <dt className="meta mb-2">{labels.tools}</dt>
              <dd className="text-[0.95rem] text-ink/75">{project.tools}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-12">
          <h2 className="text-[1.3rem] tracking-tight text-ink md:col-span-3">
            {labels.challenge}
          </h2>
          <p className="max-w-xl text-[1.05rem] leading-[1.8] text-ink/65 md:col-span-7">
            {project.challenge}
          </p>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-12">
          <h2 className="text-[1.3rem] tracking-tight text-ink md:col-span-3">
            {labels.approach}
          </h2>
          <p className="max-w-xl text-[1.05rem] leading-[1.8] text-ink/65 md:col-span-7">
            {project.approach}
          </p>
        </div>
      </section>

      {compact ? null : (
        <section className="px-6 py-10 md:px-10 lg:px-14">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="mb-8 text-[1.3rem] tracking-tight text-ink">
              {labels.process}
            </h2>
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {labels.processLabels.map((label, index) => (
                <li key={label} className="border-t border-line pt-5">
                  <p
                    className="meta mb-3"
                    style={{ color: "var(--project-accent)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="text-[1.05rem] text-ink">{label}</p>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-ink/55">
                    {project.process[index]}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <section className="px-6 py-10 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-4 text-[1.3rem] tracking-tight text-ink">
            {labels.whatIDid}
          </h2>
          <p className="mb-8 max-w-xl text-[1.05rem] leading-[1.8] text-ink/65">
            {project.whatIDid}
          </p>
          <p className="meta mb-4">{labels.visuals}</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="aspect-[5/4] overflow-hidden bg-paper">
              <ProjectVisual
                tone={meta.tone}
                index={project.index}
                title={project.title}
              />
            </div>
            <div className="aspect-[5/4] bg-paper/80" />
          </div>
        </div>
      </section>

      {compact ? null : (
        <>
          <section className="px-6 py-10 md:px-10 lg:px-14">
            <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-12">
              <h2 className="text-[1.3rem] tracking-tight text-ink md:col-span-3">
                {labels.outcome}
              </h2>
              <p className="max-w-xl text-[1.05rem] leading-[1.8] text-ink/65 md:col-span-7">
                {project.outcome}
              </p>
            </div>
          </section>
          <section className="px-6 py-10 md:px-10 lg:px-14">
            <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-12">
              <h2 className="text-[1.3rem] tracking-tight text-ink md:col-span-3">
                {labels.reflection}
              </h2>
              <p className="max-w-xl text-[1.05rem] leading-[1.8] text-ink/65 md:col-span-7">
                {project.reflection}
              </p>
            </div>
          </section>
        </>
      )}

      <section className="px-6 py-10 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-12">
          <h2 className="text-[1.3rem] tracking-tight text-ink md:col-span-3">
            {labels.nextDirection}
          </h2>
          <p className="max-w-xl text-[1.05rem] leading-[1.8] text-ink/65 md:col-span-7">
            {project.nextDirection}
          </p>
        </div>
      </section>

      <section className="px-6 py-12 pb-24 md:px-10 lg:px-14 lg:pb-28">
        <div className="mx-auto max-w-[1400px] border-t border-line pt-10">
          <p className="eyebrow mb-4">{labels.nextProject}</p>
          <LocaleLink href={nextHref} className="group block max-w-xl">
            <h2 className="text-[1.8rem] tracking-tight text-ink md:text-[2.2rem]">
              {next.title}
            </h2>
            <p className="meta mt-2">{next.category}</p>
          </LocaleLink>
          <ArrowLink href={nextHref} className="mt-6">
            {labels.nextProject}
          </ArrowLink>
        </div>
      </section>
    </main>
  );
}
