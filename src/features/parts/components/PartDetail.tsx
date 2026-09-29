import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/core/components/Badge";
import { Container } from "@/core/components/Container";
import { routes } from "@/core/constants/routes";
import { formatPrice } from "@/core/lib/format";
import { availabilityLabel } from "../lib/parts";
import type { Part } from "../types";
import { PartBuyPanel } from "./PartBuyPanel";
import { PartDetailTabs } from "./PartDetailTabs";

export function PartDetail({ part }: { part: Part }) {
  const first = part.compatibility[0];
  const specs: [string, string][] = [
    ["Part number", part.partNumber],
    ["Brand", part.brand],
    ["Category", `${part.category} › ${part.subcategory}`],
    ["Fits", `${first.make} ${first.model} ${first.years}`],
    ["Engine", first.engine],
    ["Condition", part.condition],
    ["Warranty", part.warranty],
    ["Origin", part.origin],
  ];

  return (
    <Container className="flex flex-col gap-8 py-10">
      <nav aria-label="Breadcrumb" className="text-xs text-brand-muted">
        <Link href={routes.home} className="hover:text-brand-green">Home</Link> /{" "}
        <Link href={routes.parts} className="hover:text-brand-green">Parts</Link> /{" "}
        <Link href={`${routes.parts}?category=${encodeURIComponent(part.category)}`} className="hover:text-brand-green">
          {part.category}
        </Link>{" "}
        / {part.name}
      </nav>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="relative aspect-4/3 overflow-hidden rounded-md border border-brand-border bg-black/5">
          <Image src={part.image} alt={part.name} fill unoptimized priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-extrabold">{part.name}</h1>
            <div>
              <Badge tone={part.condition === "Genuine OEM" ? "orange" : "neutral"}>{part.condition}</Badge>
            </div>
          </div>

          <dl className="grid grid-cols-[110px_1fr] gap-x-4 gap-y-1.5 text-sm">
            {specs.map(([label, value]) => (
              <div key={label} className="contents">
                <dt className="text-brand-muted">{label}</dt>
                <dd className="font-medium">{value}</dd>
              </div>
            ))}
          </dl>

          <p className={`text-sm font-semibold ${part.availability === "in-stock" ? "text-brand-green-dark" : "text-brand-orange"}`}>
            {availabilityLabel[part.availability]}
          </p>
          <p className="text-3xl font-extrabold">{part.price === null ? "Price on request" : formatPrice(part.price)}</p>

          <PartBuyPanel part={part} />
        </div>
      </div>

      <section className="flex flex-col gap-2">
        <h2 className="text-sm font-bold uppercase tracking-widest">Description</h2>
        <p className="text-sm text-brand-muted">{part.description}</p>
      </section>

      <PartDetailTabs part={part} />
    </Container>
  );
}
