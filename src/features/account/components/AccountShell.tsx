import type { ReactNode } from "react";
import { Container } from "@/core/components/Container";
import { SidebarNav } from "@/core/components/SidebarNav";
import { accountNav } from "../data/nav";

export function AccountShell({ title, action, children }: { title: string; action?: ReactNode; children: ReactNode }) {
  return (
    <Container className="grid grid-cols-1 gap-6 py-10 lg:grid-cols-[220px_1fr]">
      <aside className="self-start rounded-md border border-brand-border bg-white p-2">
        <SidebarNav items={accountNav} />
      </aside>
      <section className="flex flex-col gap-5">
        <header className="flex items-center justify-between gap-3">
          <h1 className="text-2xl font-extrabold uppercase">{title}</h1>
          {action}
        </header>
        {children}
      </section>
    </Container>
  );
}
