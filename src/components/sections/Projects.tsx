import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechBadge } from "@/components/ui/TechBadge";

export function Projects() {
  return (
    <section
      id="proyectos"
      className="scroll-mt-20 border-b border-zinc-800/80 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="01 // Casos de Estudio"
          title="Proyectos destacados"
          description="Sistemas diseñados con foco en aislamiento de datos, arquitectura mantenible, validación estricta y entrega orientada a producto."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/90 bg-[#0D0D10] p-6 transition-colors hover:border-emerald-500/40"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-70 transition-opacity group-hover:opacity-100"
              />

              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-emerald-400">
                    {project.index} {"//"} {project.category}
                  </span>
                  <span className="rounded-md border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] text-emerald-300">
                    {project.subtitle}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-50">
                  {project.title}
                </h3>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">
                      Problema resuelto
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">
                      {project.problemSolved}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">
                      Arquitectura y seguridad
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                      {project.architectureSummary}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <TechBadge key={tech} label={tech} variant="subtle" />
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-end gap-2 border-t border-zinc-800/80 pt-5">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      link.kind === "demo"
                        ? "inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/35 bg-emerald-500/10 px-3.5 py-2 text-xs font-medium text-emerald-300 transition-colors hover:border-emerald-400/60 hover:bg-emerald-500/20 hover:text-emerald-200"
                        : "inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-emerald-500/40 hover:text-emerald-300"
                    }
                  >
                    {link.kind === "github" ? (
                      <Github
                        className="h-3.5 w-3.5 text-emerald-400"
                        aria-hidden="true"
                      />
                    ) : null}
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
