import Link from "next/link";
import { Badge } from "@/core/components/Badge";
import { Container } from "@/core/components/Container";
import { routes } from "@/core/constants/routes";
import { formatPrice } from "@/core/lib/format";
import type { PartRequest, RequestStatus } from "../types";

const statusTone: Record<RequestStatus, "green" | "orange" | "neutral"> = {
  Pending: "orange",
  Sourcing: "orange",
  Quoted: "green",
  Closed: "neutral",
};

export function QuoteDetail({ request }: { request: PartRequest }) {
  const total = request.quotes.reduce((sum, q) => sum + (q.price ?? 0), 0);

  return (
    <Container className="flex max-w-4xl flex-col gap-6 py-10">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-extrabold uppercase">Request #{request.id}</h1>
          <p className="text-sm text-brand-muted">Submitted {request.submitted}</p>
        </div>
        <Badge tone={statusTone[request.status]}>{request.status}</Badge>
      </header>

      <dl className="grid grid-cols-1 gap-3 rounded-md border border-brand-border bg-white p-5 text-sm sm:grid-cols-3">
        <div><dt className="text-brand-muted">Vehicle</dt><dd className="font-semibold">{request.vehicle}</dd></div>
        <div><dt className="text-brand-muted">Part</dt><dd className="font-semibold">{request.partName}</dd></div>
        <div><dt className="text-brand-muted">Notes</dt><dd className="font-semibold">{request.notes}</dd></div>
      </dl>

      <div className="overflow-x-auto rounded-md border border-brand-border bg-white">
        <table className="w-full min-w-[520px] text-sm">
          <thead className="text-left text-xs font-bold uppercase tracking-wide text-brand-muted">
            <tr>
              <th className="px-4 py-3">Part</th>
              <th className="px-4 py-3">Supplier</th>
              <th className="px-4 py-3 text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {request.quotes.map((line) => (
              <tr key={line.partNumber} className="border-t border-brand-border">
                <td className="px-4 py-3">
                  <p className="font-semibold">{line.part}</p>
                  <p className="text-xs text-brand-muted">{line.partNumber}</p>
                </td>
                <td className="px-4 py-3">{line.supplier}</td>
                <td className="px-4 py-3 text-right font-semibold">
                  {line.price === null ? "Pending" : formatPrice(line.price)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-brand-border">
              <td colSpan={2} className="px-4 py-3 text-right text-xs font-bold uppercase tracking-wide">Total</td>
              <td className="px-4 py-3 text-right text-base font-extrabold">{formatPrice(total)}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href={routes.contact} className="rounded-md bg-brand-green px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-green-dark">
          Accept quote
        </Link>
        <Link href={routes.contact} className="rounded-md border border-brand-border px-8 py-3 text-sm font-bold uppercase tracking-wide hover:border-brand-green">
          Ask a question
        </Link>
      </div>
    </Container>
  );
}
