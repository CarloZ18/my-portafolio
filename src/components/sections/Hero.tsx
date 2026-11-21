import Image from "next/image";
import { ArrowUpRight, Download, Github, Linkedin, MapPin, Terminal } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative border-b border-zinc-800/80 pt-14 pb-20 sm:pt-20 sm:pb-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs text-emerald-300">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>{PROFILE.availability}</span>
            </div>

            <h1 className="mt-7 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              {PROFILE.name}
              <span className="mt-2 block text-2xl font-medium text-emerald-400 sm:text-3xl lg:text-4xl">
                {PROFILE.role}
              </span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
              {PROFILE.heroSummary}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-zinc-500">
              <span className="inline-flex items-center gap-1.5 text-zinc-300">
                <MapPin
                  className="h-3.5 w-3.5 text-emerald-400"
                  aria-hidden="true"
                />
                {PROFILE.location}
              </span>
              <span
                className="hidden text-emerald-500/50 sm:inline"
                aria-hidden="true"
              >
                •
              </span>
              <span className="text-zinc-400">{PROFILE.email}</span>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <CopyEmailButton email={PROFILE.email} variant="primary" />

              <a
                href={PROFILE.cvPath}
                download="CV_Developer.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/70 px-4 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-emerald-500/40 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B]"
              >
                <Download
                  className="h-4 w-4 text-emerald-400"
                  aria-hidden="true"
                />
                <span>Descargar CV (PDF)</span>
              </a>

              <div className="flex items-center gap-2 sm:ml-1">
                <a
                  href={PROFILE.github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil de GitHub de Carlos Mata"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800/80 bg-zinc-950/60 px-3 py-2.5 text-xs font-medium text-zinc-300 transition-colors hover:border-emerald-500/40 hover:text-emerald-300"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  <span>GitHub</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-zinc-500"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={PROFILE.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil de LinkedIn de Carlos Mata"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800/80 bg-zinc-950/60 px-3 py-2.5 text-xs font-medium text-zinc-300 transition-colors hover:border-emerald-500/40 hover:text-emerald-300"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  <span>LinkedIn</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-zinc-500"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-emerald-500/5 to-transparent blur-xl"
              />
              <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-[#0D0D10] p-2.5 shadow-2xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900">
                  <Image
                    src={PROFILE.avatarUrl}
                    alt={`${PROFILE.name} — ${PROFILE.role}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 440px"
                    className="object-cover object-center"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090B]/70 via-transparent to-transparent"
                  />
                </div>

                <div className="mt-2.5 flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-950/90 px-3.5 py-2.5">
                  <div className="flex items-center gap-2">
                    <Terminal
                      className="h-3.5 w-3.5 text-emerald-400"
                      aria-hidden="true"
                    />
                    <span className="font-mono text-xs text-zinc-200">
                      carlos@ucv-fullstack
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] text-emerald-300">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                      aria-hidden="true"
                    />
                    +3 años exp.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
