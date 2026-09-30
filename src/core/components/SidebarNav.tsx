"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type SidebarItem = { label: string; href: string };

/** Vertical nav shared by the customer account and dealer portal. `dark` is the portal style. */
export function SidebarNav({ items, dark = false }: { items: SidebarItem[]; dark?: boolean }) {
  const pathname = usePathname();
  return (
    <nav aria-label="Section" className="flex flex-row gap-1 overflow-x-auto lg:flex-col">
      {items.map((item) => {
        const active = pathname === item.href;
        const base = "shrink-0 rounded-md px-4 py-2.5 text-sm font-semibold";
        const tone = dark
          ? active
            ? "bg-brand-green text-white"
            : "text-white/70 hover:bg-white/10 hover:text-white"
          : active
            ? "bg-brand-green text-white"
            : "text-brand-ink hover:bg-black/5";
        return (
          <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`${base} ${tone}`}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
