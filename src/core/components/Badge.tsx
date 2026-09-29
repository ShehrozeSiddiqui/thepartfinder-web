import type { ReactNode } from "react";

type Tone = "green" | "orange" | "neutral";

const toneClasses: Record<Tone, string> = {
  green: "bg-brand-green/15 text-brand-green-dark",
  orange: "bg-brand-orange/15 text-brand-orange",
  neutral: "bg-black/5 text-brand-muted",
};

export function Badge({ tone = "neutral", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span
      className={`inline-block rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
