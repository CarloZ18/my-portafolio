import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { PROFILE } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// TODO: Actualizar con tu dominio final en producción (ej. https://carlosmata.dev)
const SITE_URL = "https://carlosmata.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PROFILE.name} — ${PROFILE.role}`,
    template: `%s | ${PROFILE.name}`,
  },
  description: PROFILE.heroSummary,
  keywords: [
    "Carlos Mata",
    "Desarrollador Full Stack",
    "Next.js",
    "TypeScript",
    "React",
    "PostgreSQL",
    "Supabase",
    "SaaS Multi-Tenant",
    "Inteligencia Artificial",
    "LLMs",
    "UCV",
    "LATAM",
    "España",
    "Remoto",
  ],
  authors: [{ name: PROFILE.name, url: PROFILE.github.href }],
  creator: PROFILE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: `${PROFILE.name} — Portafolio`,
    title: `${PROFILE.name} — ${PROFILE.role}`,
    description: PROFILE.heroSummary,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} — ${PROFILE.role}`,
    description: PROFILE.heroSummary,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#09090B] text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  );
}
