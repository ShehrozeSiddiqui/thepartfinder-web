import { Badge } from "@/core/components/Badge";
import { formatPrice } from "@/core/lib/format";
import { dashboardStats, recentOrders, topSelling } from "../data/dashboard";
import { SalesChart } from "./SalesChart";

const cardClasses = "rounded-md border border-brand-border bg-white p-5";

export function DashboardView() {
  const topMax = Math.max(...topSelling.map((t) => t.units));

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {dashboardStats.map((s) => (
          <div key={s.label} className={`rounded-md p-5 ${s.tone}`}>
            <p className="text-xs font-bold uppercase tracking-wide text-brand-muted">{s.label}</p>
            <p className="mt-1 text-2xl font-extrabold">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.4fr_1fr]">
        <section className={cardClasses}>
          <h2 className="mb-3 text-xs font-bold uppercase tracking-widest">Recent orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] text-sm">
              <tbody>
                {recentOrders.map((o) => (
                  <tr key={o.id} className="border-t border-brand-border first:border-0">
                    <td className="py-2.5 font-semibold">{o.id}</td>
                    <td className="py-2.5">{o.customer}</td>
                    <td className="py-2.5">{formatPrice(o.amount)}</td>
                    <td className="py-2.5 text-right">
                      <Badge tone={o.status === "Delivered" ? "green" : "orange"}>{o.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={cardClasses}>
          <h2 className="mb-3 text-xs font-bold uppercase tracking-widest">Sales overview</h2>
          <SalesChart />
        </section>
      </div>

      <section className={cardClasses}>
        <h2 className="mb-3 text-xs font-bold uppercase tracking-widest">Top selling parts</h2>
        <ul className="flex flex-col gap-3">
          {topSelling.map((t) => (
            <li key={t.name} className="grid grid-cols-[120px_1fr_40px] items-center gap-3 text-sm">
              <span>{t.name}</span>
              <span className="h-2 rounded bg-black/5">
                <span className="block h-2 rounded bg-brand-green" style={{ width: `${(t.units / topMax) * 100}%` }} />
              </span>
              <span className="text-right font-semibold">{t.units}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
