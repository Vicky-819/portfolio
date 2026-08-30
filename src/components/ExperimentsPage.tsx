"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { EXPERIMENT_IDS } from "@/content/projects";
import { useLanguage } from "@/lib/i18n";

export function ExperimentsPage() {
  const { dictionary } = useLanguage();
  const copy = dictionary.pages.experiments;

  return (
    <main className="pt-24 md:pt-28">
      <section className="px-6 pb-8 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="grid gap-5 md:grid-cols-12">
            <p className="eyebrow md:col-span-3">{copy.eyebrow}</p>
            <div className="md:col-span-8">
              <h1 className="font-serif text-[2.6rem] italic tracking-tight text-ink md:text-[3.75rem]">
                {copy.title}
              </h1>
              <p className="mt-5 max-w-xl text-[1.05rem] leading-[1.75] text-ink/65">
                {copy.intro}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-12 pb-24 md:px-10 lg:px-14 lg:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-start gap-12 md:grid-cols-12">
            {EXPERIMENT_IDS.map((id, index) => (
              <Reveal
                key={id}
                delay={index * 80}
                className={index === 0 ? "md:col-span-7" : "md:col-span-5 md:mt-16"}
              >
                <ProjectCard id={id} playful />
              </Reveal>
            ))}
            <Reveal
              delay={120}
              className="border border-dashed border-line/80 p-8 text-ink/40 md:col-span-5 md:col-start-8"
            >
              <p className="meta mb-3">00</p>
              <p className="text-[1.15rem] tracking-tight">{copy.future}</p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
