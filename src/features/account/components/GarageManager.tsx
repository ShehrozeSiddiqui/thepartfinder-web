"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { Plus, Trash2 } from "lucide-react";
import { routes } from "@/core/constants/routes";
import { makes, yearsFor } from "@/features/find-my-part/data/vehicles";

type Vehicle = { id: string; make: string; model: string; year: string };

const STORAGE_KEY = "pf-garage";
const fieldClasses = "rounded-md border border-brand-border bg-white px-3 py-2.5 text-sm outline-none focus:border-brand-green";

/** Saved vehicles, kept in localStorage until accounts exist (Phase 2/3). */
export function GarageManager() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [adding, setAdding] = useState(false);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from storage
      if (saved) setVehicles(JSON.parse(saved));
    } catch {
      // ignore unavailable/corrupt storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(vehicles));
    } catch {
      // ignore quota / private-mode errors
    }
  }, [vehicles, hydrated]);

  const selectedMake = makes.find((m) => m.name === make);
  const selectedModel = selectedMake?.models.find((m) => m.name === model);

  const onAdd = (event: FormEvent) => {
    event.preventDefault();
    setVehicles((prev) => [...prev, { id: crypto.randomUUID(), make, model, year }]);
    setAdding(false);
    setMake("");
    setModel("");
    setYear("");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setAdding((v) => !v)}
          className="flex items-center gap-1.5 rounded-md bg-brand-green px-4 py-2 text-xs font-bold uppercase tracking-wide text-white hover:bg-brand-green-dark"
        >
          <Plus size={14} /> Add vehicle
        </button>
      </div>

      {adding && (
        <form onSubmit={onAdd} className="grid grid-cols-1 gap-3 rounded-md border border-brand-border bg-white p-4 sm:grid-cols-4">
          <select required value={make} onChange={(e) => { setMake(e.target.value); setModel(""); setYear(""); }} className={fieldClasses}>
            <option value="">Make</option>
            {makes.map((m) => <option key={m.name}>{m.name}</option>)}
          </select>
          <select required disabled={!selectedMake} value={model} onChange={(e) => { setModel(e.target.value); setYear(""); }} className={fieldClasses}>
            <option value="">Model</option>
            {selectedMake?.models.map((m) => <option key={m.name}>{m.name}</option>)}
          </select>
          <select required disabled={!selectedModel} value={year} onChange={(e) => setYear(e.target.value)} className={fieldClasses}>
            <option value="">Year</option>
            {selectedModel && yearsFor(selectedModel).map((y) => <option key={y}>{y}</option>)}
          </select>
          <button type="submit" className="rounded-md bg-brand-ink px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white">Save</button>
        </form>
      )}

      {!vehicles.length && hydrated && !adding && (
        <p className="rounded-md border border-dashed border-brand-border p-10 text-center text-sm text-brand-muted">
          No vehicles saved yet. Add one to jump straight to parts that fit.
        </p>
      )}

      {vehicles.map((v) => (
        <div key={v.id} className="flex items-center gap-4 rounded-md border border-brand-border bg-white p-4">
          <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded bg-black/5">
            <Image
              src={`https://picsum.photos/seed/${encodeURIComponent(`${v.make}-${v.model}`)}/300/200`}
              alt={`${v.make} ${v.model}`}
              fill
              unoptimized
              sizes="96px"
              className="object-cover"
            />
          </div>
          <p className="flex-1 font-bold">{v.year} {v.make} {v.model}</p>
          <Link href={routes.findMyPart} className="rounded-md border border-brand-border px-4 py-2 text-xs font-bold uppercase tracking-wide hover:border-brand-green">
            View parts
          </Link>
          <button type="button" aria-label={`Remove ${v.make} ${v.model}`} onClick={() => setVehicles(vehicles.filter((x) => x.id !== v.id))} className="text-brand-muted hover:text-brand-orange">
            <Trash2 size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}
