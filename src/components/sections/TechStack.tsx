import { TECH_DOMAINS } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechBadge } from "@/components/ui/TechBadge";

export function TechStack() {
  return (
    <section
      id="stack"
      className="scroll-mt-20 border-b border-zinc-800/80 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="02 // Stack Tecnológico"
          title="Herramientas y fundamentos por dominio"
          description="Tecnologías y principios de ingeniería aplicados en producción para construir productos web confiables."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {TECH_DOMAINS.map((domain) => (
            <div
              key={domain.id}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/90 bg-[#0D0D10] p-6 transition-colors hover:border-emerald-500/40 ${domain.spanClass}`}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-60 transition-opacity group-hover:opacity-100"
              />

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-emerald-400">
                  {domain.code}
                </p>
                <h3 className="mt-2.5 text-lg font-semibold tracking-tight text-zinc-50">
                  {domain.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {domain.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {domain.items.map((item) => (
                  <TechBadge key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
