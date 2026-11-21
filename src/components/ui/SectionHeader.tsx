interface SectionHeaderProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly description?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <div className="mb-3 inline-flex items-center gap-2">
        <span
          className="h-1.5 w-1.5 rounded-full bg-emerald-400"
          aria-hidden="true"
        />
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-emerald-400">
          {eyebrow}
        </p>
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
