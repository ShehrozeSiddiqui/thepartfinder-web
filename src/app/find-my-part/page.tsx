import type { Metadata } from "next";
import { FindMyPartWizard } from "@/features/find-my-part/components/FindMyPartWizard";

export const metadata: Metadata = {
  title: "Find My Part | The Pathfinder Auto Parts Sales",
  description: "Select your vehicle make, model, year and configuration to find the exact parts.",
};

const asString = (value: string | string[] | undefined) => (typeof value === "string" ? value : undefined);

export default async function FindMyPartPage({ searchParams }: PageProps<"/find-my-part">) {
  const { make, model, year } = await searchParams;

  return (
    <FindMyPartWizard
      initialMake={asString(make)}
      initialModel={asString(model)}
      initialYear={asString(year)}
    />
  );
}
