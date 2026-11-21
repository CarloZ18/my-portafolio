import { PROFILE } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-[#09090B]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
          <span className="inline-flex items-center gap-2 font-mono text-zinc-200">
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              aria-hidden="true"
            />
            {PROFILE.name}
          </span>
          <span className="hidden text-zinc-700 sm:inline" aria-hidden="true">
            /
          </span>
          <span>{PROFILE.location}</span>
        </div>

        <div className="flex items-center gap-5 font-mono">
          <a
            href={PROFILE.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-emerald-400"
          >
            GitHub
          </a>
          <a
            href={PROFILE.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-emerald-400"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="transition-colors hover:text-emerald-400"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
