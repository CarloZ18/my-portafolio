interface TechBadgeProps {
  readonly label: string;
  readonly variant?: "default" | "subtle";
}

export function TechBadge({ label, variant = "default" }: TechBadgeProps) {
  const variantClasses =
    variant === "default"
      ? "border-zinc-800 bg-zinc-900/70 text-zinc-300 hover:border-emerald-500/40 hover:bg-emerald-500/5 hover:text-emerald-300"
      : "border-zinc-800/80 bg-zinc-950/70 text-zinc-400 group-hover:border-zinc-700/80";

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs tracking-tight transition-colors ${variantClasses}`}
    >
      {label}
    </span>
  );
}
