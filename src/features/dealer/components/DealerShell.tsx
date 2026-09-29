import type { ReactNode } from "react";
import { SidebarNav } from "@/core/components/SidebarNav";
import { dealerNav } from "../data/nav";

export function DealerShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="grid min-h-[70vh] grid-cols-1 lg:grid-cols-[230px_1fr]">
      <aside className="bg-brand-forest p-3 lg:p-4">
        <p className="mb-3 hidden px-2 text-xs font-bold uppercase tracking-widest text-white/50 lg:block">
          Dealer portal
        </p>
        <SidebarNav items={dealerNav} dark />
      </aside>
      <section className="flex flex-col gap-6 bg-black/[0.03] p-4 sm:p-8">
        <h1 className="text-2xl font-extrabold uppercase">{title}</h1>
        {children}
      </section>
    </div>
  );
}
