"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Camera, ChevronDown, Search } from "lucide-react";
import { Container } from "@/core/components/Container";
import { site } from "@/core/constants/site";
import { routes } from "@/core/constants/routes";
import { makes, yearsFor } from "@/features/find-my-part/data/vehicles";
import { heroImage, searchTabs } from "../data/hero";

const fieldClasses =
  "w-full appearance-none rounded-md border border-brand-border bg-white py-3 pl-4 pr-10 text-sm text-brand-ink outline-none focus:border-brand-green disabled:cursor-not-allowed disabled:bg-black/5";

const searchButtonClasses =
  "flex items-center justify-center gap-2 rounded-md bg-brand-green px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-green-dark disabled:cursor-not-allowed disabled:opacity-60";

export function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const selectedMake = makes.find((m) => m.name === make);
  const selectedModel = selectedMake?.models.find((m) => m.name === model);
  const years = selectedModel ? yearsFor(selectedModel) : [];

  return (
    <section id="find-my-part" className="relative overflow-hidden bg-brand-navy text-white">
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div aria-hidden className="absolute inset-0 bg-brand-navy/70" />

      <Container className="relative flex flex-col items-center gap-6 py-12 text-center sm:py-16">
        <Image
          src={site.logoSrc}
          alt={site.fullName}
          width={site.logoDimensions.width}
          height={site.logoDimensions.height}
          priority
          className="h-28 w-auto sm:h-36"
        />

        <h1 className="mt-2 text-5xl font-extrabold uppercase leading-[1.05] sm:text-6xl lg:text-7xl">
          Finding the parts
          <br />
          <span className="text-brand-green">others can&apos;t find.</span>
        </h1>
        <p className="text-sm font-semibold sm:text-base">{site.descriptors.join("  •  ")}</p>

        <div className="mt-4 w-full max-w-4xl text-left">
          <div className="flex overflow-x-auto rounded-t-lg bg-black/40 text-xs font-bold uppercase tracking-wide">
            {searchTabs.map((tab, index) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(index)}
                className={
                  index === activeTab
                    ? "shrink-0 bg-brand-green px-6 py-3 text-white"
                    : "shrink-0 px-6 py-3 text-white/70 hover:text-white"
                }
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="rounded-b-lg bg-white p-4 text-brand-ink">
            {activeTab === 0 && (
              <form
                action={routes.findMyPart}
                className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]"
              >
                <div className="relative">
                  <select
                    name="make"
                    value={make}
                    onChange={(e) => {
                      setMake(e.target.value);
                      setModel("");
                      setYear("");
                    }}
                    className={fieldClasses}
                  >
                    <option value="">Select Make</option>
                    {makes.map((m) => (
                      <option key={m.name} value={m.name}>
                        {m.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted" />
                </div>

                <div className="relative">
                  <select
                    name="model"
                    value={model}
                    onChange={(e) => {
                      setModel(e.target.value);
                      setYear("");
                    }}
                    disabled={!selectedMake}
                    className={fieldClasses}
                  >
                    <option value="">Select Model</option>
                    {selectedMake?.models.map((m) => (
                      <option key={m.name} value={m.name}>
                        {m.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted" />
                </div>

                <div className="relative">
                  <select
                    name="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    disabled={!selectedModel}
                    className={fieldClasses}
                  >
                    <option value="">Select Year</option>
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted" />
                </div>

                <button type="submit" disabled={!make} className={searchButtonClasses}>
                  <Search size={16} /> Search
                </button>
              </form>
            )}

            {activeTab === 1 && (
              <form action={routes.searchPartNumber} className="flex flex-col gap-3 sm:flex-row">
                <input
                  name="q"
                  placeholder="Enter OEM / Manufacturer Part Number"
                  className={`flex-1 ${fieldClasses}`}
                />
                <button type="submit" className={searchButtonClasses}>
                  <Search size={16} /> Search
                </button>
              </form>
            )}

            {activeTab === 2 && (
              <form action={routes.searchDescription} className="flex flex-col gap-3">
                <textarea
                  name="q"
                  rows={2}
                  placeholder="Example: Toyota Hilux front lower control arm"
                  className={fieldClasses}
                />
                <button type="submit" className={`self-start ${searchButtonClasses}`}>
                  <Search size={16} /> Search
                </button>
              </form>
            )}

            {activeTab === 3 && (
              <div className="flex flex-col items-center gap-3 rounded-md border-2 border-dashed border-brand-border py-8 text-center">
                <Camera size={28} className="text-brand-muted" />
                <p className="text-sm font-semibold">Upload a photo of your part and we&apos;ll identify it</p>
                <Link href={`${routes.searchDescription}?tab=photo`} className={searchButtonClasses}>
                  Continue to Photo Upload
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
