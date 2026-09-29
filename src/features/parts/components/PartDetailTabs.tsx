"use client";

import { useState } from "react";
import type { Part } from "../types";

const TABS = ["Vehicle compatibility", "Cross references", "Shipping & returns"] as const;

const tableHead = "px-3 py-2 text-left text-xs font-bold uppercase tracking-wide text-brand-muted";
const tableCell = "px-3 py-2.5 text-sm";

export function PartDetailTabs({ part }: { part: Part }) {
  const [tab, setTab] = useState<(typeof TABS)[number]>(TABS[0]);

  return (
    <section className="rounded-md border border-brand-border bg-white">
      <div role="tablist" className="flex overflow-x-auto border-b border-brand-border">
        {TABS.map((name) => (
          <button
            key={name}
            role="tab"
            type="button"
            aria-selected={tab === name}
            onClick={() => setTab(name)}
            className={`shrink-0 px-5 py-3 text-xs font-bold uppercase tracking-wide ${
              tab === name ? "border-b-2 border-brand-green text-brand-green" : "text-brand-muted hover:text-brand-ink"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto p-2">
        {tab === "Vehicle compatibility" && (
          <table className="w-full min-w-[520px]">
            <thead>
              <tr>
                {["Make", "Model", "Year", "Engine", "Notes"].map((h) => (
                  <th key={h} className={tableHead}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {part.compatibility.map((row) => (
                <tr key={`${row.make}-${row.model}-${row.years}`} className="border-t border-brand-border">
                  <td className={tableCell}>{row.make}</td>
                  <td className={tableCell}>{row.model}</td>
                  <td className={tableCell}>{row.years}</td>
                  <td className={tableCell}>{row.engine}</td>
                  <td className={tableCell}>{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {tab === "Cross references" &&
          (part.crossReferences.length ? (
            <table className="w-full">
              <thead>
                <tr>
                  <th className={tableHead}>Manufacturer</th>
                  <th className={tableHead}>Part number</th>
                </tr>
              </thead>
              <tbody>
                {part.crossReferences.map((ref) => (
                  <tr key={`${ref.manufacturer}-${ref.partNumber}`} className="border-t border-brand-border">
                    <td className={tableCell}>{ref.manufacturer}</td>
                    <td className={tableCell}>{ref.partNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="p-3 text-sm text-brand-muted">No cross references on file for this part.</p>
          ))}

        {tab === "Shipping & returns" && (
          <div className="flex flex-col gap-2 p-3 text-sm text-brand-muted">
            <p>In-stock parts ship from Trinidad and Tobago; sourced parts ship from our international suppliers and are quoted individually.</p>
            <p>Unused parts in original packaging can be returned within 14 days. Electrical parts are non-returnable once installed.</p>
            <p>Warranty: {part.warranty}.</p>
          </div>
        )}
      </div>
    </section>
  );
}
