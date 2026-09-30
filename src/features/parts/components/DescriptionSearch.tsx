"use client";

import Link from "next/link";
import { useState } from "react";
import { Camera, Search } from "lucide-react";
import { routes } from "@/core/constants/routes";

const fieldClasses = "w-full rounded-md border border-brand-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-green";

export function DescriptionSearch({ initialQuery }: { initialQuery: string }) {
  const [tab, setTab] = useState<"description" | "photo">("description");
  const [fileName, setFileName] = useState("");

  return (
    <div className="rounded-md border border-brand-border bg-white">
      <div role="tablist" className="grid grid-cols-2 border-b border-brand-border text-xs font-bold uppercase tracking-wide">
        {(["description", "photo"] as const).map((key) => (
          <button
            key={key}
            role="tab"
            type="button"
            aria-selected={tab === key}
            onClick={() => setTab(key)}
            className={`px-4 py-3 ${tab === key ? "border-b-2 border-brand-green text-brand-green" : "text-brand-muted"}`}
          >
            {key === "description" ? "Search by description" : "Upload a photo"}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4 p-5">
        {tab === "description" ? (
          <form action={routes.searchDescription} className="flex flex-col gap-3">
            <label htmlFor="q" className="text-sm font-semibold">Describe the part you need</label>
            <textarea
              id="q"
              name="q"
              rows={3}
              defaultValue={initialQuery}
              placeholder="Example: Toyota Hilux front lower control arm"
              className={fieldClasses}
            />
            <button type="submit" className="flex items-center justify-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-green-dark">
              <Search size={16} /> Search
            </button>
          </form>
        ) : (
          <div className="flex flex-col gap-4">
            <label className="flex cursor-pointer flex-col items-center gap-2 rounded-md border-2 border-dashed border-brand-border p-10 text-center hover:border-brand-green">
              <Camera size={32} className="text-brand-muted" />
              <span className="text-sm font-bold">Click to upload or drag and drop</span>
              <span className="text-xs text-brand-muted">JPG, PNG up to 5MB</span>
              {fileName && <span className="text-sm font-semibold text-brand-green-dark">{fileName}</span>}
              <input
                type="file"
                accept="image/jpeg,image/png"
                className="sr-only"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
              />
            </label>
            <p className="text-xs text-brand-muted">
              Our experts will identify the part and get back to you with options. Photo upload is
              completed on the part request form.
            </p>
            <Link
              href={routes.partRequest}
              className="rounded-md bg-brand-green px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-green-dark"
            >
              Continue to part request
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
