import { Camera, ChevronRight, FileText, Search } from "lucide-react";
import { Container } from "@/core/components/Container";
import { Button } from "@/core/components/Button";
import { site } from "@/core/constants/site";

const steps = ["Make", "Model", "Year", "Configuration"];

const fieldClasses =
  "w-full rounded-md border border-brand-border bg-white px-3 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-green disabled:cursor-not-allowed disabled:bg-black/5";

const secondaryActionClasses =
  "flex items-center justify-center gap-2 rounded-md bg-black/5 px-4 py-3 text-xs font-bold uppercase tracking-wide text-brand-ink transition-colors hover:bg-black/10 disabled:cursor-not-allowed";

export function Hero() {
  return (
    <section id="find-my-part" className="relative overflow-hidden bg-brand-navy text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(47,174,78,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(242,139,32,0.12),transparent_50%)]"
      />

      <Container className="relative flex flex-col gap-10 py-14 sm:py-20 lg:flex-row lg:items-center lg:gap-12">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h1 className="text-4xl font-extrabold uppercase leading-tight sm:text-5xl">
            Finding the parts
            <br />
            <span className="text-brand-green">others can&apos;t find.</span>
          </h1>
          <p className="text-sm font-medium text-white/70">
            {site.descriptors.join("  •  ")}
          </p>
        </div>

        <div className="w-full overflow-hidden rounded-xl bg-white text-brand-ink shadow-2xl lg:w-1/2 lg:max-w-xl">
          <div className="flex flex-col gap-4 p-6">
            <div>
              <h2 className="text-lg font-extrabold uppercase">Find My Part</h2>
              <p className="text-sm text-brand-muted">Search your vehicle for the exact parts</p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold uppercase tracking-wide">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center gap-1.5">
                  <span
                    className={
                      index === 0
                        ? "rounded-full bg-brand-green px-3 py-1.5 text-white"
                        : "rounded-full bg-black/5 px-3 py-1.5 text-brand-muted"
                    }
                  >
                    {index + 1}. {step}
                  </span>
                  {index < steps.length - 1 && (
                    <ChevronRight size={14} className="shrink-0 text-brand-muted/60" />
                  )}
                </div>
              ))}
            </div>

            <form className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <select className={fieldClasses} disabled defaultValue="">
                <option value="" disabled>
                  Select Make
                </option>
              </select>
              <select className={fieldClasses} disabled defaultValue="">
                <option value="" disabled>
                  Select Model
                </option>
              </select>
              <select className={fieldClasses} disabled defaultValue="">
                <option value="" disabled>
                  Select Year
                </option>
              </select>
              <select className={fieldClasses} disabled defaultValue="">
                <option value="" disabled>
                  Select Configuration
                </option>
              </select>
              <Button
                type="submit"
                disabled
                title="Vehicle finder arrives in Phase 2"
                className="sm:col-span-2 lg:col-span-4"
              >
                <Search size={16} /> Search
              </Button>
            </form>

            <div className="grid grid-cols-1 gap-2 border-t border-brand-border pt-4 sm:grid-cols-3">
              <button type="button" disabled title="Part-number search arrives in Phase 2" className={secondaryActionClasses}>
                <Search size={16} /> Find by Part #
              </button>
              <button type="button" disabled title="Description search arrives in Phase 2" className={secondaryActionClasses}>
                <FileText size={16} /> Find by Description
              </button>
              <button type="button" disabled title="Photo search arrives in Phase 2" className={secondaryActionClasses}>
                <Camera size={16} /> Upload a Photo
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
