import { salesSeries } from "../data/dashboard";

const W = 400;
const H = 160;
const PAD = 24;

/** Dependency-free SVG line chart of the mock monthly sales. */
export function SalesChart() {
  const max = Math.max(...salesSeries.map((p) => p.value));
  const x = (i: number) => PAD + (i * (W - PAD * 2)) / (salesSeries.length - 1);
  const y = (v: number) => H - PAD - (v / max) * (H - PAD * 2);
  const points = salesSeries.map((p, i) => `${x(i)},${y(p.value)}`).join(" ");

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Monthly sales, TT$ thousands" className="w-full">
      <polyline points={points} fill="none" stroke="var(--color-brand-green)" strokeWidth="2.5" strokeLinejoin="round" />
      {salesSeries.map((p, i) => (
        <g key={p.label}>
          <circle cx={x(i)} cy={y(p.value)} r="3.5" fill="var(--color-brand-green)" />
          <text x={x(i)} y={H - 6} textAnchor="middle" fontSize="10" fill="var(--color-brand-muted)">{p.label}</text>
        </g>
      ))}
    </svg>
  );
}
