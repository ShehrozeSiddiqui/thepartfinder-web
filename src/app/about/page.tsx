import type { Metadata } from "next";
import { Container } from "@/core/components/Container";
import { SectionHeading } from "@/core/components/SectionHeading";
import { site } from "@/core/constants/site";

export const metadata: Metadata = {
  title: `About Us | ${site.fullName}`,
  description: `Learn what drives ${site.fullName} — genuine parts, global sourcing, and a solutions-first approach.`,
};

const journey = [
  { step: "Listen", detail: "We hear the problem — the part, the vehicle, or the underlying need." },
  { step: "Understand", detail: "We confirm the exact vehicle, part, or service required." },
  { step: "Source", detail: "We search our network of local, regional and international suppliers." },
  { step: "Solve", detail: "We deliver the right product or coordinate the right service." },
  { step: "Support", detail: "We stay available through the process, from order to delivery." },
];

export default function AboutPage() {
  return (
    <Container className="flex flex-col gap-16 py-16">
      <SectionHeading
        eyebrow="About Us"
        title={`Why ${site.name} exists`}
        description="Finding the right automotive part shouldn't be difficult. We take the complexity out of vehicle ownership so you can focus on getting where you need to go."
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-brand-ink">Our Approach</h3>
          <p className="text-brand-muted">
            Whether it&apos;s a genuine replacement part, a hard-to-find component, or technical
            help tracking down the right fit, {site.name} exists to make that process simpler —
            genuine, OEM, aftermarket, obsolete and hard-to-find parts, sourced with the same
            standard every time.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-brand-ink">What We Focus On</h3>
          <ul className="flex flex-col gap-2 text-brand-muted">
            <li>Genuine and aftermarket parts sourcing</li>
            <li>Hard-to-find and obsolete automotive parts</li>
            <li>Regional and international sourcing</li>
            <li>Vehicle-specific compatibility guidance</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-lg font-semibold text-brand-ink">How We Work</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
          {journey.map((item, index) => (
            <div key={item.step} className="flex flex-col gap-2 rounded-lg border border-brand-border p-5">
              <span className="text-xs font-semibold text-brand-green">
                0{index + 1}
              </span>
              <p className="font-semibold text-brand-ink">{item.step}</p>
              <p className="text-sm text-brand-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
