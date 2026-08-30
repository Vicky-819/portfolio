"use client";

import { ArrowLink } from "@/components/ArrowLink";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import {
  EXPERIMENT_IDS,
  FEATURED_IDS,
  INDEPENDENT_IDS,
} from "@/content/projects";
import { useLanguage } from "@/lib/i18n";

export function WorkPage() {
  const { dictionary } = useLanguage();
  const copy = dictionary.pages.work;

  return (
    <main className="pt-24 md:pt-28">
      <section className="px-6 pb-10 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="grid gap-4 md:grid-cols-12">
            <p className="eyebrow md:col-span-3">{copy.eyebrow}</p>
            <h1 className="text-[2.4rem] font-medium tracking-[-0.04em] text-ink md:col-span-8 md:text-[3.5rem]">
              {copy.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 lg:px-14 lg:py-16">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-10">
            <h2 className="text-[1.4rem] tracking-tight text-ink md:text-[1.7rem]">
              {copy.featured}
            </h2>
          </Reveal>
          <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2">
            {FEATURED_IDS.map((id, index) => (
              <Reveal key={id} delay={index * 60}>
                <ProjectCard id={id} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 lg:px-14 lg:py-16">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-10 border-t border-line pt-10">
            <h2 className="text-[1.4rem] tracking-tight text-ink md:text-[1.7rem]">
              {copy.projects}
            </h2>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {INDEPENDENT_IDS.map((id) => (
              <Reveal key={id}>
                <ProjectCard id={id} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 pb-24 md:px-10 lg:px-14 lg:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4 border-t border-line pt-10">
            <h2 className="text-[1.4rem] tracking-tight text-ink md:text-[1.7rem]">
              {copy.experiments}
            </h2>
            <ArrowLink href="/experiments">{copy.viewExperiments}</ArrowLink>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {EXPERIMENT_IDS.map((id) => (
              <Reveal key={id}>
                <ProjectCard id={id} playful />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
