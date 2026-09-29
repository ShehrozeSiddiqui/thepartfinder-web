"use client";

import { useMemo, useState } from "react";
import { Container } from "@/core/components/Container";
import { availabilityLabel, conditions } from "../lib/parts";
import type { Availability, Condition, Part } from "../types";
import { PartCard } from "./PartCard";

type Sort = "popularity" | "price-asc" | "price-desc" | "name";

const sortLabels: Record<Sort, string> = {
  popularity: "Popularity",
  "price-asc": "Price: low to high",
  "price-desc": "Price: high to low",
  name: "Name",
};

const availabilities = Object.keys(availabilityLabel) as Availability[];

function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function FilterGroup<T extends string>({
  title,
  options,
  selected,
  label = (v) => v,
  onToggle,
}: {
  title: string;
  options: T[];
  selected: T[];
  label?: (value: T) => string;
  onToggle: (value: T) => void;
}) {
  return (
    <fieldset className="flex flex-col gap-1.5 border-b border-brand-border pb-4">
      <legend className="mb-1 text-xs font-bold uppercase tracking-wide">{title}</legend>
      {options.map((option) => (
        <label key={option} className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => onToggle(option)}
            className="accent-brand-green"
          />
          {label(option)}
        </label>
      ))}
    </fieldset>
  );
}

export function PartsListing({ parts, category }: { parts: Part[]; category?: string }) {
  const [subcategories, setSubcategories] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<Condition[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<Availability[]>([]);
  const [sort, setSort] = useState<Sort>("popularity");

  const inScope = useMemo(() => (category ? parts.filter((p) => p.category === category) : parts), [parts, category]);
  const subcategoryOptions = useMemo(() => [...new Set(inScope.map((p) => p.subcategory))].sort(), [inScope]);

  const visible = useMemo(() => {
    const filtered = inScope.filter(
      (p) =>
        (!subcategories.length || subcategories.includes(p.subcategory)) &&
        (!selectedConditions.length || selectedConditions.includes(p.condition)) &&
        (!selectedAvailability.length || selectedAvailability.includes(p.availability)),
    );
    // "popularity" keeps catalog order; price-on-request parts sort last for both price orders.
    const price = (p: Part) => p.price ?? Number.POSITIVE_INFINITY;
    if (sort === "price-asc") return [...filtered].sort((a, b) => price(a) - price(b));
    if (sort === "price-desc")
      return [...filtered].sort((a, b) => (b.price ?? -1) - (a.price ?? -1));
    if (sort === "name") return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    return filtered;
  }, [inScope, subcategories, selectedConditions, selectedAvailability, sort]);

  return (
    <Container className="flex flex-col gap-6 py-10">
      <header className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <h1 className="text-3xl font-extrabold uppercase">
          {category ?? "All"} Parts <span className="text-lg text-brand-muted">({visible.length})</span>
        </h1>
        <label className="flex items-center gap-2 text-sm text-brand-muted">
          Sort by
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="rounded-md border border-brand-border bg-white px-3 py-2 text-brand-ink outline-none focus:border-brand-green"
          >
            {(Object.keys(sortLabels) as Sort[]).map((key) => (
              <option key={key} value={key}>
                {sortLabels[key]}
              </option>
            ))}
          </select>
        </label>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
        <aside className="flex flex-col gap-4 rounded-md border border-brand-border bg-white p-4 self-start">
          <p className="text-xs font-bold uppercase tracking-widest">Filters</p>
          <FilterGroup title="Subcategory" options={subcategoryOptions} selected={subcategories} onToggle={(v) => setSubcategories(toggle(subcategories, v))} />
          <FilterGroup title="Brand type" options={conditions} selected={selectedConditions} onToggle={(v) => setSelectedConditions(toggle(selectedConditions, v))} />
          <FilterGroup title="Availability" options={availabilities} selected={selectedAvailability} label={(v) => availabilityLabel[v]} onToggle={(v) => setSelectedAvailability(toggle(selectedAvailability, v))} />
          <button
            type="button"
            onClick={() => {
              setSubcategories([]);
              setSelectedConditions([]);
              setSelectedAvailability([]);
            }}
            className="text-left text-xs font-semibold text-brand-green hover:underline"
          >
            Clear filters
          </button>
        </aside>

        <div className="flex flex-col gap-3">
          {visible.length ? (
            visible.map((part) => <PartCard key={part.slug} part={part} />)
          ) : (
            <p className="rounded-md border border-dashed border-brand-border p-10 text-center text-sm text-brand-muted">
              No parts match these filters. Try clearing some, or request the part and we&apos;ll find it.
            </p>
          )}
        </div>
      </div>
    </Container>
  );
}
