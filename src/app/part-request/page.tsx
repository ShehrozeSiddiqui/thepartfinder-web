import type { Metadata } from "next";
import { PartRequestForm } from "@/features/part-requests/components/PartRequestForm";

export const metadata: Metadata = {
  title: "Part Request | The Pathfinder Auto Parts Sales",
  description: "Can't find your part? Tell us what you need and we'll source it.",
};

export default async function PartRequestPage({ searchParams }: PageProps<"/part-request">) {
  const { part, partNumber } = await searchParams;
  return (
    <PartRequestForm
      prefill={{
        part: typeof part === "string" ? part : undefined,
        partNumber: typeof partNumber === "string" ? partNumber : undefined,
      }}
    />
  );
}
