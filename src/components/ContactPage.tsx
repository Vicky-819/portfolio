"use client";

import { ContactBlock } from "@/components/ContactBlock";

export function ContactPage() {
  return (
    <main className="flex min-h-[100svh] flex-col justify-end pt-24 md:pt-28">
      <ContactBlock id="connect" compact />
    </main>
  );
}
