import type { Metadata } from "next";
import { FindMyPartWizard } from "@/features/find-my-part/components/FindMyPartWizard";

export const metadata: Metadata = {
  title: "Find My Part | The Pathfinder Auto Parts Sales",
  description: "Select your vehicle make, model, year and configuration to find the exact parts.",
};

export default function FindMyPartPage() {
  return <FindMyPartWizard />;
}
