import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/core/components/Container";
import { routes } from "@/core/constants/routes";
import { brands } from "../data/brands";

export function TrustedBrands() {
  return (
    <section id="trusted-brands" className="border-b border-brand-border py-8">
      <Container className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-muted">
            Trusted Brands
          </span>
          <Link
            href={routes.findMyPart}
            className="flex items-center gap-1 text-xs font-semibold text-brand-green hover:underline"
          >
            View all makes <ArrowRight size={14} />
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
          {brands.map((brand) => (
            <span
              key={brand.name}
              title={brand.name}
              className="flex items-center gap-2 text-brand-ink/60 grayscale transition hover:text-brand-ink hover:grayscale-0"
            >
              {brand.logoPath ? (
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
                  <path d={brand.logoPath} />
                </svg>
              ) : (
                <span className="text-lg font-bold tracking-tight">{brand.name}</span>
              )}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
