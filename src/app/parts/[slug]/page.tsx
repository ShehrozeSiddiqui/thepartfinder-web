import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { parts } from "@/features/parts/data/parts";
import { getPart } from "@/features/parts/lib/parts";
import { PartDetail } from "@/features/parts/components/PartDetail";

export const generateStaticParams = () => parts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: PageProps<"/parts/[slug]">): Promise<Metadata> {
  const part = getPart((await params).slug);
  return part
    ? { title: `${part.name} ${part.partNumber} | The Pathfinder`, description: part.description }
    : {};
}

export default async function PartPage({ params }: PageProps<"/parts/[slug]">) {
  const part = getPart((await params).slug);
  if (!part) notFound();
  return <PartDetail part={part} />;
}
