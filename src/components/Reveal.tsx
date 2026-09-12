"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/lib/use-in-view";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "header";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: RevealProps) {
  const ref = useInView<HTMLElement>();
  const style = delay
    ? ({ transitionDelay: `${delay}ms` } as CSSProperties)
    : undefined;
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={`reveal-up ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
