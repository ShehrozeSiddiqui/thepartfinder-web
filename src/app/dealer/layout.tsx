import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Dealer Portal | The Pathfinder Auto Parts Sales" };

export default function DealerLayout({ children }: { children: ReactNode }) {
  return children;
}
