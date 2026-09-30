import Link from "next/link";
import { Compass } from "lucide-react";
import { Container } from "./Container";
import { site } from "@/core/constants/site";
import { footerNav } from "@/core/constants/nav";
import { routes } from "@/core/constants/routes";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="mt-auto bg-brand-navy text-white/70">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)_1.4fr]">
        <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
          <Link href={routes.home} className="flex items-center gap-2 font-extrabold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand-green text-brand-green">
              <Compass size={18} strokeWidth={2.5} />
            </span>
            {site.name.toUpperCase()}
          </Link>
          <p className="max-w-xs text-sm">{site.logoTagline}</p>
          <p className="text-xs uppercase tracking-wide text-white/40">
            {site.descriptors.join(" · ")}
          </p>
          <div className="flex gap-4 pt-2 text-sm font-medium">
            <a href={site.social.facebook} className="hover:text-white">
              Facebook
            </a>
            <a href={site.social.instagram} className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>

        {footerNav.map((column) => (
          <div key={column.title} className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white">{column.title}</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
          <h3 className="text-sm font-semibold text-white">Newsletter</h3>
          <p className="text-sm">Get updates on new parts and special offers.</p>
          <NewsletterForm />
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <p>{site.tagline}</p>
        </Container>
      </div>
    </footer>
  );
}
