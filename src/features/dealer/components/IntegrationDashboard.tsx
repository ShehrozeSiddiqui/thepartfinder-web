"use client";

import { useState } from "react";
import { Badge } from "@/core/components/Badge";
import type { Integration } from "../types";

/** Marketplace dashboard. "Sync inventory" is simulated — no marketplace API is called yet. */
export function IntegrationDashboard({ integration }: { integration: Integration }) {
  const [syncing, setSyncing] = useState(false);
  const [lastSync, setLastSync] = useState("Never (this session)");

  const sync = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      setLastSync(new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }));
    }, 1200);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-brand-border bg-white p-5">
        <div>
          <p className="text-xs text-brand-muted">Connected account</p>
          <p className="font-bold">{integration.account}</p>
        </div>
        <Badge tone={integration.connected ? "green" : "neutral"}>
          {integration.connected ? "Connected" : "Not connected"}
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {integration.metrics.map((m) => (
          <div key={m.label} className="rounded-md border border-brand-border bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-muted">{m.label}</p>
            <p className="mt-1 text-2xl font-extrabold">{m.value}</p>
          </div>
        ))}
      </div>

      <section className="rounded-md border border-brand-border bg-white p-5">
        <h2 className="mb-3 text-xs font-bold uppercase tracking-widest">Listing sync</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm">
            <thead className="text-left text-xs font-bold uppercase tracking-wide text-brand-muted">
              <tr>
                <th className="py-2">Part number</th>
                <th className="py-2">Title</th>
                <th className="py-2">Price</th>
                <th className="py-2">Qty</th>
                <th className="py-2 text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {integration.listings.map((l) => (
                <tr key={l.partNumber} className="border-t border-brand-border">
                  <td className="py-2.5 font-semibold">{l.partNumber}</td>
                  <td className="py-2.5">{l.title}</td>
                  <td className="py-2.5">{integration.currency}{l.price.toLocaleString("en-US")}</td>
                  <td className="py-2.5">{l.quantity}</td>
                  <td className="py-2.5 text-right">
                    <Badge tone={l.status === "Active" ? "green" : "orange"}>{l.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={sync}
            disabled={syncing}
            className="rounded-md bg-brand-green px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-green-dark disabled:opacity-60"
          >
            {syncing ? "Syncing…" : "Sync inventory"}
          </button>
          <p className="text-xs text-brand-muted" aria-live="polite">Last sync: {lastSync}</p>
        </div>
        <p className="mt-3 text-xs text-brand-muted">
          Demo only — figures are sample data and syncing does not contact {integration.name}.
        </p>
      </section>
    </div>
  );
}
