import Image from "next/image";
import { ChevronDown, Compass, Search } from "lucide-react";
import { Container } from "@/core/components/Container";
import { site } from "@/core/constants/site";
import { heroImage, searchTabs, vehicleFields } from "../data/hero";

const fieldClasses =
  "w-full appearance-none rounded-md border border-brand-border bg-white py-3 pl-4 pr-10 text-sm text-brand-ink outline-none focus:border-brand-green disabled:cursor-not-allowed disabled:bg-black/5";

export function Hero() {
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
        <div className="flex items-center gap-4">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-orange text-brand-orange">
            <Compass size={34} strokeWidth={1.75} />
          </span>
          <div className="text-left leading-tight">
            <p className="text-3xl font-extrabold uppercase tracking-wide sm:text-4xl">
              {site.name}
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Auto Parts Sales
            </p>
          </div>
        </div>
        <p className="text-xs font-semibold italic text-brand-green">{site.logoTagline}</p>

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
                disabled={index !== 0}
                title={index === 0 ? undefined : "Arrives in Phase 2"}
                className={
                  index === 0
                    ? "shrink-0 bg-brand-green px-6 py-3 text-white"
                    : "shrink-0 px-6 py-3 text-white/70 disabled:cursor-not-allowed"
                }
              >
                {tab}
              </button>
            ))}
          </div>

          <form className="grid grid-cols-1 gap-3 rounded-b-lg bg-white p-4 text-brand-ink sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]">
            {vehicleFields.map((field) => (
              <div key={field} className="relative">
                <select className={fieldClasses} disabled defaultValue="">
                  <option value="" disabled>
                    Select {field}
                  </option>
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted"
                />
              </div>
            ))}
            <button
              type="submit"
              disabled
              title="Vehicle finder arrives in Phase 2"
              className="flex items-center justify-center gap-2 rounded-md bg-brand-green px-8 py-3 text-sm font-bold uppercase tracking-wide text-white disabled:opacity-60"
            >
              <Search size={16} /> Search
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
