type Tone = "dark" | "light";

const titleClasses: Record<Tone, string> = {
  dark: "text-brand-ink",
  light: "text-white",
};

const descriptionClasses: Record<Tone, string> = {
  dark: "text-brand-muted",
  light: "text-white/60",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: Tone;
}) {
  const alignClasses = align === "center" ? "text-center items-center mx-auto" : "text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-2 ${alignClasses}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-green">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-2xl font-bold sm:text-3xl ${titleClasses[tone]}`}>{title}</h2>
      {description && <p className={descriptionClasses[tone]}>{description}</p>}
    </div>
  );
}
