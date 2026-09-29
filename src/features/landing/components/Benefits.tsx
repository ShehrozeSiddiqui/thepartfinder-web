import { Container } from "@/core/components/Container";
import { benefits } from "../data/benefits";

export function Benefits() {
  return (
    <section className="bg-brand-forest text-white">
      <Container className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-5">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white">
              <benefit.icon size={18} />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide">{benefit.title}</p>
              <p className="text-xs text-white/60">{benefit.subtitle}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
