import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Container } from "@/core/components/Container";
import { formatPrice } from "@/core/lib/format";
import { featuredParts } from "../data/featuredParts";

export function FeaturedParts() {
  return (
    <section className="bg-black/[0.02] py-14">
      <Container className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-ink">
            Featured Parts
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              disabled
              title="Coming in a future phase"
              className="rounded-md border border-brand-border p-1.5 text-brand-muted"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              disabled
              title="Coming in a future phase"
              className="rounded-md border border-brand-border p-1.5 text-brand-muted"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {featuredParts.map((part) => (
            <div
              key={part.name}
              className="flex flex-col gap-3 rounded-lg border border-brand-border bg-white p-4"
            >
              <div className="flex h-28 items-center justify-center rounded-md bg-black/5 text-xs text-brand-muted">
                Part Image
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-ink">{part.name}</p>
                <p className="text-xs text-brand-muted">
                  {part.make} &middot; {part.partNumber}
                </p>
              </div>
              <p className="text-base font-bold text-brand-ink">{formatPrice(part.price)}</p>
              <p className="flex items-center gap-1.5 text-xs font-medium">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${part.inStock ? "bg-brand-green" : "bg-brand-orange"}`}
                />
                <span className={part.inStock ? "text-brand-green-dark" : "text-brand-orange"}>
                  {part.inStock ? "In Stock" : "Request Price"}
                </span>
              </p>
              <button
                type="button"
                disabled
                title="Cart arrives in Phase 3"
                className="flex items-center justify-center gap-1.5 rounded-md bg-brand-green px-3 py-2 text-xs font-bold uppercase tracking-wide text-white disabled:opacity-60"
              >
                <ShoppingCart size={14} /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
