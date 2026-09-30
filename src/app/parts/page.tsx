import type { Metadata } from "next";
import { parts } from "@/features/parts/data/parts";
import { PartsListing } from "@/features/parts/components/PartsListing";

export const metadata: Metadata = {
  title: "Parts | The Pathfinder Auto Parts Sales",
  description: "Browse genuine, OEM and aftermarket vehicle parts.",
};

export default async function PartsPage({ searchParams }: PageProps<"/parts">) {
  const { category } = await searchParams;
  const selected = typeof category === "string" ? category : undefined;
  return <PartsListing parts={parts} category={selected} />;
}
