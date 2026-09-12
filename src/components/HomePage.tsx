"use client";

import { AboutPreview } from "@/components/AboutPreview";
import { ContactBlock } from "@/components/ContactBlock";
import { Currently } from "@/components/Currently";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { WorkAcross } from "@/components/WorkAcross";

export function HomePage() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <WorkAcross />
      <AboutPreview />
      <Currently />
      <ContactBlock />
    </main>
  );
}
