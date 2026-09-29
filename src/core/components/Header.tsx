"use client";

import Link from "next/link";
import { useState } from "react";
import { Compass, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Container } from "./Container";
import { site } from "@/core/constants/site";
import { primaryNav } from "@/core/constants/nav";
import { routes } from "@/core/constants/routes";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-navy text-white">
      <Container className="flex h-[72px] items-center justify-between gap-5">
        <Link href={routes.home} className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-orange text-brand-orange">
            <Compass size={20} strokeWidth={2} />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-extrabold tracking-tight">
              {site.name.toUpperCase()}
            </span>
            <span className="block text-[9px] font-semibold tracking-[0.15em] text-white/60">
              AUTO PARTS SALES
            </span>
            <span className="block text-[9px] font-medium italic text-brand-green">
              {site.logoTagline}
            </span>
          </span>
        </Link>

        <nav className="hidden shrink-0 items-center gap-5 text-sm font-bold uppercase lg:flex">
          {primaryNav.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                index === 0
                  ? "border-b-2 border-brand-green pb-1 text-brand-green"
                  : "pb-1 text-white/85 hover:text-white"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <form
          role="search"
          className="hidden flex-1 min-w-[220px] max-w-xl items-center overflow-hidden rounded-md bg-white md:flex"
        >
          <input
            type="search"
            placeholder="Search by Part Number, OEM, or Description..."
            className="w-full px-4 py-2 text-sm text-brand-ink outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="flex h-full items-center bg-brand-green px-3.5 py-2 text-white hover:bg-brand-green-dark"
          >
            <Search size={18} />
          </button>
        </form>

        <div className="hidden shrink-0 items-center gap-5 md:flex">
          <button type="button" disabled title="Coming in a future phase" className="flex items-center gap-1.5 text-sm">
            <User size={18} />
            <span className="hidden lg:inline">Login / Register</span>
          </button>
          <button type="button" disabled title="Coming in a future phase" className="flex items-center gap-1.5 text-sm">
            <ShoppingCart size={18} />
            <span className="hidden lg:inline">Cart (0)</span>
          </button>
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-brand-navy lg:hidden">
          <Container className="flex flex-col gap-3 py-4">
            <form role="search" className="flex items-center overflow-hidden rounded-md bg-white md:hidden">
              <input
                type="search"
                placeholder="Search by Part Number, OEM, or Description..."
                className="w-full px-4 py-2 text-sm text-brand-ink outline-none"
              />
              <button type="submit" aria-label="Search" className="flex items-center bg-brand-green px-4 py-2.5">
                <Search size={18} />
              </button>
            </form>
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wide text-white/80 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
