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
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          {brands.map((brand) => (
            <span
              key={brand.name}
              className="text-lg font-bold tracking-tight text-brand-ink/70 grayscale transition hover:text-brand-ink hover:grayscale-0"
            >
              {brand.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
