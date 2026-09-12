import { ExperimentsPage } from "@/components/ExperimentsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiments — Vicky",
};

export default function Page() {
  return <ExperimentsPage />;
}
