import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "My Account | The Pathfinder Auto Parts Sales" };

export default function AccountLayout({ children }: { children: ReactNode }) {
  return children;
}
