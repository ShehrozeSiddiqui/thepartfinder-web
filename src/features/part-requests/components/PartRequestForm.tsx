"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Camera, CheckCircle2 } from "lucide-react";
import { Container } from "@/core/components/Container";
import { routes } from "@/core/constants/routes";
import { makes } from "@/features/find-my-part/data/vehicles";
import { conditionOptions } from "../data/formOptions";

type Prefill = { part?: string; partNumber?: string };

const labelClasses = "flex flex-col gap-1.5 text-xs font-bold uppercase tracking-wide";
const fieldClasses =
  "rounded-md border border-brand-border bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-brand-green";

export function PartRequestForm({ prefill }: { prefill: Prefill }) {
  const [makeName, setMakeName] = useState("");
  const [fileName, setFileName] = useState("");
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const models = makes.find((m) => m.name === makeName)?.models ?? [];

  // Phase 1: no backend yet — acknowledge the request locally with a reference number.
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedId(`PF-${String(Date.now()).slice(-6)}`);
  };

  if (submittedId) {
    return (
      <Container className="flex flex-col items-center gap-4 py-20 text-center">
        <CheckCircle2 size={48} className="text-brand-green" />
        <h1 className="text-3xl font-extrabold uppercase">Request received</h1>
        <p className="max-w-md text-brand-muted">
          Reference <strong className="text-brand-ink">{submittedId}</strong>. Our team will source
          your part and reply with options and pricing. This is a demo — requests aren&apos;t
          stored until the backend arrives in Phase 2.
        </p>
        <Link
          href={routes.quote("PF-000124")}
          className="rounded-md bg-brand-green px-6 py-3 text-xs font-bold uppercase tracking-wide text-white hover:bg-brand-green-dark"
        >
          See how tracking looks
        </Link>
      </Container>
    );
  }

  return (
    <Container className="max-w-3xl py-10">
      <h1 className="text-3xl font-extrabold uppercase">Can&apos;t find your part?</h1>
      <p className="mb-6 text-sm text-brand-muted">Tell The Pathfinder what you need and we&apos;ll find it.</p>

      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 rounded-md border border-brand-border bg-white p-6 sm:grid-cols-2">
        <label className={labelClasses}>
          Vehicle make *
          <select required value={makeName} onChange={(e) => setMakeName(e.target.value)} className={fieldClasses}>
            <option value="">Select make</option>
            {makes.map((m) => (
              <option key={m.name}>{m.name}</option>
            ))}
          </select>
        </label>
        <label className={labelClasses}>
          Model *
          <select required disabled={!models.length} className={fieldClasses}>
            <option value="">Select model</option>
            {models.map((m) => (
              <option key={m.name}>{m.name}</option>
            ))}
          </select>
        </label>
        <label className={labelClasses}>
          Year *
          <input required type="number" min={1980} max={2026} placeholder="e.g. 2015" className={fieldClasses} />
        </label>
        <label className={labelClasses}>
          VIN (optional)
          <input type="text" maxLength={17} placeholder="17-character VIN" className={fieldClasses} />
        </label>
        <label className={labelClasses}>
          Part name *
          <input required type="text" defaultValue={prefill.part} placeholder="e.g. Front right wheel bearing" className={fieldClasses} />
        </label>
        <label className={labelClasses}>
          Part number (if known)
          <input type="text" defaultValue={prefill.partNumber} placeholder="OEM / manufacturer number" className={fieldClasses} />
        </label>
        <label className={labelClasses}>
          Condition wanted
          <select className={fieldClasses}>
            {conditionOptions.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className={`${labelClasses} cursor-pointer`}>
          Photo (optional)
          <span className={`${fieldClasses} flex items-center gap-2 text-brand-muted`}>
            <Camera size={16} /> {fileName || "Attach a photo of the part"}
          </span>
          <input type="file" accept="image/*" className="sr-only" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} />
        </label>
        <label className={`${labelClasses} sm:col-span-2`}>
          Additional details
          <textarea rows={4} placeholder="Symptoms, where it fits, budget, urgency — anything that helps us find the right part." className={fieldClasses} />
        </label>
        <label className={`${labelClasses} sm:col-span-2`}>
          Your email *
          <input required type="email" placeholder="you@example.com" className={fieldClasses} />
        </label>
        <button type="submit" className="rounded-md bg-brand-green px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-green-dark sm:col-span-2">
          Submit request
        </button>
      </form>
    </Container>
  );
}
