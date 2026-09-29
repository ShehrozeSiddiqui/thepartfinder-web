import { Container } from "@/core/components/Container";
import { SectionHeading } from "@/core/components/SectionHeading";
import { values } from "../data/values";

export function WhyChooseUs() {
  return (
    <section className="bg-brand-navy py-16 text-white">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          tone="light"
          eyebrow="Why Pathfinder"
          title="We don't just sell parts. We find solutions."
          description="Every request gets the same approach: listen, understand the vehicle, source the right part, and stay available until it's resolved."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="flex flex-col gap-3 rounded-lg bg-white/5 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green/20 text-brand-green">
                <value.icon size={20} />
              </span>
              <p className="font-semibold">{value.title}</p>
              <p className="text-sm text-white/60">{value.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
