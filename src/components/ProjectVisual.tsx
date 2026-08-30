"use client";

import type { VisualTone } from "@/content/projects";

const toneSurface: Record<VisualTone, string> = {
  terracotta: "bg-tone-terracotta",
  blue: "bg-tone-blue",
  sage: "bg-tone-sage",
  ochre: "bg-tone-ochre",
};

export function ProjectVisual({
  tone,
  index,
  title,
  className = "",
}: {
  tone: VisualTone;
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`relative h-full min-h-[220px] overflow-hidden ${toneSurface[tone]} ${className}`}
      aria-hidden
    >
      {tone === "terracotta" ? (
        <div className="absolute inset-0">
          <div className="absolute left-[12%] top-[18%] h-[58%] w-[42%] bg-ink/8" />
          <div className="absolute bottom-[14%] right-[10%] h-[38%] w-[36%] bg-ivory/40" />
        </div>
      ) : null}
      {tone === "blue" ? (
        <div className="absolute inset-0">
          <div className="absolute right-[8%] top-[12%] h-40 w-40 rounded-full bg-ivory/45" />
          <div className="absolute bottom-[16%] left-[14%] h-24 w-24 rounded-full bg-ink/8" />
        </div>
      ) : null}
      {tone === "sage" ? (
        <div className="absolute inset-0 flex items-end gap-2 px-10 pb-16">
          <span className="h-10 w-[8%] bg-ink/10" />
          <span className="h-20 w-[8%] bg-ink/14" />
          <span className="h-14 w-[8%] bg-ink/8" />
          <span className="h-28 w-[8%] bg-ink/16" />
          <span className="h-16 w-[8%] bg-ink/10" />
        </div>
      ) : null}
      {tone === "ochre" ? (
        <div className="absolute inset-0">
          <div className="absolute left-0 top-[30%] h-px w-full bg-ink/15" />
          <div className="absolute left-0 top-[46%] h-px w-2/3 bg-ink/12" />
          <div className="absolute left-0 top-[62%] h-px w-1/2 bg-ink/10" />
        </div>
      ) : null}
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <span className="font-serif text-3xl italic text-ink/35">{index}</span>
        <span className="meta max-w-[14ch]">{title}</span>
      </div>
    </div>
  );
}
