import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/core/components/Container";
import { routes } from "@/core/constants/routes";
import { categories } from "../data/categories";

export function ShopByCategory() {
  return (
    <section id="shop-by-category" className="py-14">
      <Container className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-ink">
            Shop by Category
          </h2>
          <Link
            href={routes.findMyPart}
            className="flex items-center gap-1 text-xs font-semibold text-brand-green hover:underline"
          >
            View all categories <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col gap-3 rounded-lg border border-brand-border p-4 text-center transition-shadow hover:shadow-md"
            >
              <div className="flex h-24 items-center justify-center rounded-md bg-black/5 text-brand-ink/60">
                <category.icon size={32} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wide text-brand-ink">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
