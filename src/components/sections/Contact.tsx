import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-[#0D0D10] p-8 sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent"
          />

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-emerald-400">
                  04 // Contacto Directo
                </p>
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                ¿Buscas un desarrollador Full Stack para tu equipo o producto?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                {PROFILE.availability} Escríbeme directamente por correo o
                conectemos en LinkedIn y GitHub.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <CopyEmailButton
                email={PROFILE.email}
                variant="primary"
                showEmail
              />
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/70 px-4 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-emerald-500/40 hover:bg-zinc-900"
              >
                <Mail
                  className="h-4 w-4 text-emerald-400"
                  aria-hidden="true"
                />
                <span>Enviar correo</span>
              </a>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 border-t border-zinc-800/80 pt-6 sm:grid-cols-3">
            <a
              href={PROFILE.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-300 transition-colors hover:border-emerald-500/40 hover:text-zinc-100"
            >
              <span className="inline-flex items-center gap-2.5">
                <Github
                  className="h-4 w-4 text-emerald-400"
                  aria-hidden="true"
                />
                <span className="font-mono text-xs">{PROFILE.github.display}</span>
              </span>
              <ArrowUpRight
                className="h-4 w-4 text-zinc-500"
                aria-hidden="true"
              />
            </a>

            <a
              href={PROFILE.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-300 transition-colors hover:border-emerald-500/40 hover:text-zinc-100"
            >
              <span className="inline-flex items-center gap-2.5 overflow-hidden">
                <Linkedin
                  className="h-4 w-4 shrink-0 text-emerald-400"
                  aria-hidden="true"
                />
                <span className="truncate font-mono text-xs">
                  {PROFILE.linkedin.display}
                </span>
              </span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-zinc-500"
                aria-hidden="true"
              />
            </a>

            <a
              href={PROFILE.cvPath}
              download="CV_Developer.pdf"
              className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-300 transition-colors hover:border-emerald-500/40 hover:text-zinc-100"
            >
              <span className="inline-flex items-center gap-2.5">
                <Download
                  className="h-4 w-4 text-emerald-400"
                  aria-hidden="true"
                />
                <span className="font-mono text-xs">CV_Developer.pdf</span>
              </span>
              <ArrowUpRight
                className="h-4 w-4 text-zinc-500"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
