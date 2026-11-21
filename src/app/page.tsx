import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#09090B]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-subtle-grid [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,#000_35%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[320px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-500/[0.07] blur-3xl"
      />

      <Navbar />

      <main className="relative">
        <Hero />
        <Projects />
        <TechStack />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
