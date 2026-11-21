import { Award, Briefcase, GraduationCap } from "lucide-react";
import { CERTIFICATIONS, TIMELINE } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Experience() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-20 border-b border-zinc-800/80 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="03 // Experiencia y Formación"
          title="Trayectoria técnica y base académica"
          description="Experiencia práctica entregando software en producción combinada con formación formal en Ciencias de la Computación."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-8">
            {TIMELINE.map((item) => {
              const Icon =
                item.type === "experience" ? Briefcase : GraduationCap;

              return (
                <article
                  key={item.id}
                  className="rounded-2xl border border-zinc-800/90 bg-[#0D0D10] p-6 transition-colors hover:border-emerald-500/40"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-emerald-400">
                      <Icon
                        className="h-3.5 w-3.5 text-emerald-400"
                        aria-hidden="true"
                      />
                      <span>
                        {item.type === "experience"
                          ? "Experiencia"
                          : "Formación"}
                      </span>
                    </div>
                    <span className="rounded-md border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 font-mono text-xs text-emerald-300">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-50">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-zinc-400">
                    {item.organization}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                    {item.summary}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-zinc-800/80 pt-4">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-400"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <aside className="lg:col-span-4">
            <div className="h-full rounded-2xl border border-zinc-800/90 bg-[#0D0D10] p-6 transition-colors hover:border-emerald-500/40">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-emerald-400">
                <Award
                  className="h-3.5 w-3.5 text-emerald-400"
                  aria-hidden="true"
                />
                <span>Certificaciones</span>
              </div>

              <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-50">
                FreeCodeCamp
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                Especializaciones prácticas en desarrollo web full stack,
                algoritmos y diseño responsivo.
              </p>

              <ul className="mt-5 divide-y divide-zinc-800/80 border-t border-zinc-800/80">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert.title} className="py-3.5 first:pt-4 last:pb-0">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
                        aria-hidden="true"
                      />
                      <p className="text-sm font-medium text-zinc-200">
                        {cert.title}
                      </p>
                    </div>
                    <p className="mt-0.5 pl-3.5 font-mono text-xs text-zinc-500">
                      {cert.issuer}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
