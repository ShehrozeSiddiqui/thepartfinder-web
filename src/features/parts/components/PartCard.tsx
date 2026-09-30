import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/core/components/Badge";
import { routes } from "@/core/constants/routes";
import { formatPrice } from "@/core/lib/format";
import { AddToCartButton } from "@/features/cart/components/AddToCartButton";
import { availabilityLabel } from "../lib/parts";
import type { Part } from "../types";

export function PartCard({ part }: { part: Part }) {
  const inStock = part.availability === "in-stock";
  return (
    <article className="flex flex-col gap-4 rounded-md border border-brand-border bg-white p-4 sm:flex-row sm:items-center">
      <Link
        href={routes.part(part.slug)}
        className="relative h-28 w-full shrink-0 overflow-hidden rounded bg-black/5 sm:w-36"
      >
        <Image src={part.image} alt={part.name} fill unoptimized sizes="144px" className="object-cover" />
      </Link>

      <div className="flex flex-1 flex-col gap-1">
        <Link href={routes.part(part.slug)} className="text-base font-bold text-brand-ink hover:text-brand-green">
          {part.name}
        </Link>
        <p className="text-xs text-brand-muted">
          {part.brand} &middot; {part.partNumber}
        </p>
        <p className="text-xs text-brand-muted">
          {part.compatibility[0].make} {part.compatibility[0].model} {part.compatibility[0].years} &middot;{" "}
          {part.compatibility[0].engine}
        </p>
        <div className="mt-1">
          <Badge tone={part.condition === "Genuine OEM" ? "orange" : "neutral"}>{part.condition}</Badge>
        </div>
      </div>

      <div className="flex shrink-0 flex-row items-center justify-between gap-3 sm:w-40 sm:flex-col sm:items-end">
        <p className={`text-xs font-semibold ${inStock ? "text-brand-green-dark" : "text-brand-orange"}`}>
          {availabilityLabel[part.availability]}
        </p>
        <p className="text-lg font-extrabold text-brand-ink">
          {part.price === null ? "On request" : formatPrice(part.price)}
        </p>
        {part.price === null ? (
          <Link
            href={`${routes.partRequest}?part=${encodeURIComponent(part.name)}&partNumber=${encodeURIComponent(part.partNumber)}`}
            className="rounded-md bg-brand-orange px-4 py-2 text-xs font-bold uppercase tracking-wide text-white"
          >
            Request price
          </Link>
        ) : (
          <AddToCartButton part={part} />
        )}
      </div>
    </article>
  );
}
