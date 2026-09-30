"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Container } from "./Container";
import { site } from "@/core/constants/site";
import { primaryNav } from "@/core/constants/nav";
import { routes } from "@/core/constants/routes";
import { useCart } from "@/features/cart/lib/CartProvider";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count } = useCart();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const activeMenu = primaryNav.find((link) => link.label === openMenu)?.megaMenu;

  return (
    <header
      className="sticky top-0 z-50 bg-brand-navy text-white"
      onMouseLeave={() => setOpenMenu(null)}
      onKeyDown={(e) => e.key === "Escape" && setOpenMenu(null)}
    >
      <Container tight className="flex h-[72px] items-center justify-between gap-5">
        <Link href={routes.home} className="flex shrink-0 items-center">
          <Image
            src={site.logoSrc}
            alt={site.fullName}
            width={site.logoDimensions.width}
            height={site.logoDimensions.height}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden shrink-0 items-center gap-5 text-sm font-bold uppercase lg:flex">
          {primaryNav.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              onMouseEnter={() => setOpenMenu(link.megaMenu ? link.label : null)}
              onFocus={() => setOpenMenu(link.megaMenu ? link.label : null)}
              aria-expanded={link.megaMenu ? openMenu === link.label : undefined}
              className={
                index === 0
                  ? "border-b-2 border-brand-green pb-1 text-brand-green"
                  : `flex items-center gap-1 pb-1 hover:text-white ${
                      openMenu === link.label ? "text-white" : "text-white/85"
                    }`
              }
            >
              {link.label}
              {link.megaMenu && (
                <ChevronDown
                  size={14}
                  className={`transition-transform ${openMenu === link.label ? "rotate-180" : ""}`}
                />
              )}
            </Link>
          ))}
        </nav>

        <form
          role="search"
          action={routes.searchPartNumber}
          className="hidden flex-1 min-w-[220px] max-w-xl items-center overflow-hidden rounded-md bg-white md:flex"
        >
          <input
            type="search"
            name="q"
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
          <Link href={routes.account} className="flex items-center gap-1.5 text-sm hover:text-brand-green">
            <User size={18} />
            <span className="hidden lg:inline">My Account</span>
          </Link>
          <Link href={routes.checkout} className="flex items-center gap-1.5 text-sm hover:text-brand-green">
            <ShoppingCart size={18} />
            <span className="hidden lg:inline">Cart ({count})</span>
          </Link>
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

      {activeMenu && (
        <div className="absolute inset-x-0 top-full hidden border-t border-white/10 bg-brand-navy-light shadow-xl lg:block">
          <Container tight className="grid grid-cols-3 gap-8 py-8">
            {activeMenu.map((group) => (
              <div key={group.title}>
                <p className="mb-3 border-b border-white/10 pb-2 text-xs font-bold uppercase tracking-widest text-brand-orange">
                  {group.title}
                </p>
                <ul className="flex flex-col gap-2">
                  {group.links.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setOpenMenu(null)}
                        className="text-sm text-white/80 hover:text-brand-green"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Container>
        </div>
      )}

      {mobileOpen && (
        <div className="border-t border-white/10 bg-brand-navy lg:hidden">
          <Container tight className="flex flex-col gap-3 py-4">
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
