import { ExperimentDetailView } from "@/components/ExperimentDetailView";
import { EXPERIMENT_IDS, getProjectIdBySlug } from "@/content/projects";
import { PROJECT_META } from "@/content/projects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return EXPERIMENT_IDS.map((id) => ({ slug: PROJECT_META[id].slug }));
}

export const metadata: Metadata = {
  title: "Experiments — Vicky",
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const id = getProjectIdBySlug(slug, "experiment");
  if (!id) {
    notFound();
  }
  return <ExperimentDetailView />;
}
