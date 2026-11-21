import { PROFILE } from "@/data/portfolio";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

const NAV_ITEMS = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack", href: "#stack" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-[#09090B]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="group inline-flex items-center gap-2.5 text-sm font-semibold tracking-tight text-zinc-100"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-emerald-500/40 bg-emerald-500/10 font-mono text-xs text-emerald-400 transition-colors group-hover:border-emerald-400 group-hover:bg-emerald-500/20">
            CM
          </span>
          <span>{PROFILE.name}</span>
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-emerald-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <CopyEmailButton email={PROFILE.email} variant="ghost" />
        </div>
      </div>
    </header>
  );
}
