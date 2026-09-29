import Link from "next/link";
import { Badge } from "@/core/components/Badge";
import { routes } from "@/core/constants/routes";
import { mockRequests } from "@/features/part-requests/data/mockRequests";

export function AccountQuotes() {
  return (
    <div className="flex flex-col gap-3">
      {mockRequests.map((r) => (
        <Link key={r.id} href={routes.quote(r.id)} className="flex items-center justify-between gap-3 rounded-md border border-brand-border bg-white p-4 hover:border-brand-green">
          <div>
            <p className="font-bold">#{r.id} &middot; {r.partName}</p>
            <p className="text-xs text-brand-muted">{r.vehicle} &middot; {r.submitted}</p>
          </div>
          <Badge tone="orange">{r.status}</Badge>
        </Link>
      ))}
      <Link href={routes.partRequest} className="self-start text-xs font-semibold text-brand-green hover:underline">
        + New part request
      </Link>
    </div>
  );
}
