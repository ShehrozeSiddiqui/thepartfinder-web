import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/core/components/Container";
import { routes } from "@/core/constants/routes";
import { categories } from "../data/categories";

/** Categories shown in the homepage strip; the full list lives on the catalog pages (Phase 2). */
const VISIBLE_CATEGORIES = 6;

export function ShopByCategory() {
  return (
    <section id="shop-by-category" className="bg-brand-navy py-10 text-white">
      <Container className="flex flex-col items-center gap-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.25em]">Shop by Category</h2>
        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {categories.slice(0, VISIBLE_CATEGORIES).map((category) => (
            <Link
              key={category.name}
              href={`${routes.parts}?category=${encodeURIComponent(category.name)}`}
              className="flex flex-col items-center gap-3 hover:text-brand-green"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-white">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 16vw, 50vw"
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-wide">{category.name}</span>
            </Link>
          ))}
        </div>
        <Link
          href={routes.parts}
          className="flex items-center gap-1 text-xs font-semibold text-brand-green hover:underline"
        >
          View all categories <ArrowRight size={14} />
        </Link>
      </Container>
    </section>
  );
}
