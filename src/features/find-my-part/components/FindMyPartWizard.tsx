"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Container } from "@/core/components/Container";
import { routes } from "@/core/constants/routes";
import {
  configFieldsFor,
  defaultConfigFor,
  makes,
  popularSearches,
  yearsFor,
} from "../data/vehicles";
import type { Config, Make } from "../types";

const STEPS = ["Make", "Model", "Year", "Configuration"] as const;
const CONFIG_STEP = 3;
const VISIBLE_MAKES = 12;

const tileClasses =
  "flex items-center justify-center rounded-md border border-brand-border bg-white px-3 py-6 text-center text-sm font-bold uppercase tracking-wide text-brand-ink transition-colors hover:border-brand-green hover:text-brand-green";

const panelClasses = "rounded-md border border-brand-border bg-white p-4";

function MakeTile({ make, onSelect }: { make: Make; onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={make.name}
      className="flex h-28 flex-col items-center justify-center gap-2 rounded-md border border-brand-border bg-white p-3 text-brand-ink transition-colors hover:border-brand-green hover:text-brand-green"
    >
      {make.logoPath && (
        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current" aria-hidden>
          <path d={make.logoPath} />
        </svg>
      )}
      <span
        className={
          make.logoPath
            ? "text-[10px] font-bold uppercase tracking-wide text-brand-muted"
            : "text-sm font-extrabold uppercase tracking-wide"
        }
      >
        {make.name}
      </span>
    </button>
  );
}

export function FindMyPartWizard() {
  const [step, setStep] = useState(0);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [config, setConfig] = useState<Config | null>(null);
  const [makeQuery, setMakeQuery] = useState("");
  const [showAllMakes, setShowAllMakes] = useState(false);

  const selectedMake = makes.find((m) => m.name === make);
  const selectedModel = selectedMake?.models.find((m) => m.name === model);
  const fields = selectedModel ? configFieldsFor(selectedModel) : [];
  const filteredMakes = makes.filter((m) => m.name.toLowerCase().includes(makeQuery.toLowerCase()));
  const shownMakes = showAllMakes || makeQuery ? filteredMakes : filteredMakes.slice(0, VISIBLE_MAKES);

  const chooseMake = (name: string) => {
    setMake(name);
    setModel("");
    setYear("");
    setConfig(null);
    setStep(1);
  };
  const chooseModel = (name: string) => {
    setModel(name);
    setYear("");
    setConfig(null);
    setStep(2);
  };
  const chooseYear = (value: string) => {
    setYear(value);
    if (selectedModel) setConfig(defaultConfigFor(selectedModel));
    setStep(CONFIG_STEP);
  };
  const choosePopular = (makeName: string, modelName: string) => {
    setMake(makeName);
    setModel(modelName);
    setYear("");
    setConfig(null);
    setStep(2);
  };
  const reachable = (index: number) => index <= step;

  const summary = [
    ["Make", make],
    ["Model", model],
    ["Year", year],
    ...fields.map((f) => [f.label, config?.[f.key] ?? ""]),
  ];
  const resetAll = () => {
    setStep(0);
    setMake("");
    setModel("");
    setYear("");
    setConfig(null);
  };

  return (
    <Container className="flex flex-col gap-6 py-10">
      <header>
        {step === CONFIG_STEP && config ? (
          <>
            <h1 className="text-3xl font-extrabold uppercase">
              {make} {model} {year}
            </h1>
            <p className="text-sm text-brand-muted">
              {config.engine} &bull; {config.transmission} &bull; {config.drive} &bull; {config.body}
            </p>
            <button
              type="button"
              onClick={resetAll}
              className="mt-1 text-xs font-semibold text-brand-green hover:underline"
            >
              Change vehicle
            </button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-extrabold uppercase">Find My Part</h1>
            <p className="text-sm text-brand-muted">Select your vehicle to find the exact parts.</p>
          </>
        )}
      </header>

      <ol className="grid grid-cols-2 overflow-hidden rounded-md bg-black/5 text-xs font-bold uppercase tracking-wide sm:grid-cols-4">
        {STEPS.map((label, index) => (
          <li key={label}>
            <button
              type="button"
              disabled={!reachable(index)}
              onClick={() => setStep(index)}
              className={`w-full px-4 py-3 text-center transition-colors ${
                index === step
                  ? "bg-brand-green text-white"
                  : reachable(index)
                    ? "text-brand-ink hover:bg-black/5"
                    : "cursor-not-allowed text-brand-muted"
              }`}
            >
              {index + 1}. {label}
            </button>
          </li>
        ))}
      </ol>

      {step === 0 && (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[220px_1fr_240px]">
          <aside className={`${panelClasses} flex flex-col gap-3`}>
            <p className="text-xs font-bold uppercase tracking-wide">Choose make</p>
            <div className="flex items-center gap-2 rounded-md border border-brand-border px-3 py-2">
              <Search size={14} className="text-brand-muted" />
              <input
                type="search"
                value={makeQuery}
                onChange={(e) => setMakeQuery(e.target.value)}
                placeholder="Search make..."
                className="w-full text-sm outline-none"
              />
            </div>
            <ul className="max-h-72 overflow-y-auto text-sm">
              {filteredMakes.map((m) => (
                <li key={m.name}>
                  <button
                    type="button"
                    onClick={() => chooseMake(m.name)}
                    className="w-full py-1.5 text-left hover:text-brand-green"
                  >
                    {m.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="flex flex-col items-center gap-5">
            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
              {shownMakes.map((m) => (
                <MakeTile key={m.name} make={m} onSelect={() => chooseMake(m.name)} />
              ))}
            </div>
            {!showAllMakes && !makeQuery && filteredMakes.length > VISIBLE_MAKES && (
              <button
                type="button"
                onClick={() => setShowAllMakes(true)}
                className="rounded-md bg-brand-green px-10 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-green-dark"
              >
                View all makes
              </button>
            )}
          </div>

          <aside className="flex flex-col gap-4">
            <div className={panelClasses}>
              <p className="mb-2 text-xs font-bold uppercase tracking-wide">Popular searches</p>
              <ul className="flex flex-col gap-1.5 text-sm text-brand-muted">
                {popularSearches.map(({ make: makeName, model: modelName }) => (
                  <li key={`${makeName}-${modelName}`}>
                    <button
                      type="button"
                      onClick={() => choosePopular(makeName, modelName)}
                      className="hover:text-brand-green"
                    >
                      {makeName} {modelName}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className={panelClasses}>
              <p className="mb-1 text-xs font-bold uppercase tracking-wide">Need help?</p>
              <p className="mb-3 text-sm text-brand-muted">
                Can&apos;t find your vehicle? Our experts are here to help.
              </p>
              <Link
                href={routes.contact}
                className="inline-block rounded-md bg-brand-green px-4 py-2 text-xs font-bold uppercase tracking-wide text-white hover:bg-brand-green-dark"
              >
                Contact us
              </Link>
            </div>
          </aside>
        </div>
      )}

      {step === 1 && selectedMake && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {selectedMake.models.map(({ name, years: [from, to] }) => (
            <button key={name} type="button" onClick={() => chooseModel(name)} className={`${tileClasses} flex-col gap-1`}>
              {name}
              <span className="text-[10px] font-semibold normal-case text-brand-muted">
                {from}–{to}
              </span>
            </button>
          ))}
        </div>
      )}

      {step === 2 && selectedModel && (
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {yearsFor(selectedModel).map((value) => (
            <button key={value} type="button" onClick={() => chooseYear(value)} className={tileClasses}>
              {value}
            </button>
          ))}
        </div>
      )}

      {step === CONFIG_STEP && config && (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[240px_1fr_240px]">
          <div className="flex flex-col gap-4">
            {fields.map((field) => (
              <label key={field.key} className="flex flex-col gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wide">{field.label}</span>
                <span className="relative">
                  <select
                    value={config[field.key]}
                    onChange={(e) => setConfig({ ...config, [field.key]: e.target.value })}
                    className="w-full appearance-none rounded-md border border-brand-border bg-white py-3 pl-4 pr-10 text-sm outline-none focus:border-brand-green"
                  >
                    {field.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted"
                  />
                </span>
              </label>
            ))}
          </div>

          <div className="relative min-h-64 overflow-hidden rounded-md border border-brand-border bg-black/5">
            <Image
              src={`https://loremflickr.com/900/600/${encodeURIComponent(make)},${encodeURIComponent(model)},car?lock=1`}
              alt={`${make} ${model}`}
              fill
              unoptimized
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <aside className={panelClasses}>
            <p className="mb-3 text-xs font-bold uppercase tracking-wide">Your selection</p>
            <dl className="flex flex-col gap-1.5 text-sm">
              {summary.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-3">
                  <dt className="text-brand-muted">{label}</dt>
                  <dd className="text-right font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
            <button
              type="button"
              onClick={resetAll}
              className="mt-4 w-full rounded-md border border-brand-border px-3 py-2 text-xs font-bold uppercase tracking-wide hover:border-brand-green"
            >
              Reset selection
            </button>
          </aside>
        </div>
      )}

      {step === CONFIG_STEP && config && (
        <div className="flex justify-center">
          <button
            type="button"
            disabled
            title="Parts catalog arrives in Phase 2"
            className="rounded-md bg-brand-green px-12 py-3.5 text-sm font-bold uppercase tracking-wide text-white disabled:opacity-60"
          >
            Find parts for this vehicle
          </button>
        </div>
      )}
    </Container>
  );
}
