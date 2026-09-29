import { Container } from "@/core/components/Container";
import { stats } from "../data/stats";

export function StatsBar() {
  return (
    <section className="border-t border-white/10 bg-brand-navy text-white">
      <Container className="grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-extrabold text-brand-orange sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-white/60 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
