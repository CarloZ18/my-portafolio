import type {
  CertificationItem,
  ProfileData,
  ProjectCaseStudy,
  TechDomain,
  TimelineItem,
} from "@/types/portfolio";

export const PROFILE: ProfileData = {
  name: "Carlos Mata",
  role: "Desarrollador de Software Full Stack",
  location: "Caracas, Venezuela (Disponibilidad Remota)",
  email: "carlosgmatal@gmail.com",
  availability:
    "Disponible para roles remotos (Part-time / Contractor) y proyectos de consultoría.",
  heroSummary:
    "Desarrollador Full Stack con más de 3 años de experiencia arquitectando y desplegando aplicaciones web escalables, sistemas SaaS multi-tenant e integraciones con APIs de Inteligencia Artificial (LLMs). Estudiante de Licenciatura en Computación en la Universidad Central de Venezuela (UCV), combinando fundamentos sólidos de ciencias de la computación con entrega rápida orientada a producto.",
  // También tienes "/images/foto-portafolio.png" en public/images por si prefieres alternar
  avatarUrl: "/images/carlos-mata.jpg",
  cvPath: "/cv/CV_Developer.pdf",
  github: {
    label: "GitHub",
    href: "https://github.com/CarloZ18",
    display: "github.com/CarloZ18",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/carlos-mata-6bb44b18a/",
    display: "linkedin.com/in/carlos-mata-6bb44b18a",
  },
};

export const PROJECTS: readonly ProjectCaseStudy[] = [
  {
    id: "posadas-app",
    index: "01",
    title: "Plataforma SaaS Multi-Tenant de Gestión",
    subtitle: "Posadas App",
    category: "SaaS Multi-Tenant",
    problemSolved:
      "Sistema web integral para administración de reservas, check-in digital, inventario de cabañas y CRM de huéspedes en un entorno multi-inquilino.",
    architectureSummary:
      "Implementación de Row Level Security (RLS) en PostgreSQL/Supabase para garantizar aislamiento estricto de datos por inquilino, autenticación segura y renderizado híbrido (SSR / Server Actions).",
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
    ],
    links: [
      {
        label: "Demo en vivo",
        href: "https://tuposada-app.vercel.app/",
        kind: "demo",
      },
    ],
  },
  {
    id: "compara-ya",
    index: "02",
    title: "Comparador y Cotizador de Seguros de Viajes",
    subtitle: "Compara Ya",
    category: "Fintech / Insurtech",
    problemSolved:
      "Aplicación web orientada a conversión para cotización en tiempo real, filtrado dinámico de planes y flujo completo de compra de seguros de viaje.",
    architectureSummary:
      "Interfaz reactiva de alto rendimiento, integración con APIs REST externas, validación estricta de esquemas en cliente y servidor, y panel de control administrativo.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    links: [
      {
        label: "Código en GitHub",
        href: "https://github.com/guaregua19/compara-ya-fe.git",
        kind: "github",
      },
    ],
  },
  {
    id: "creditos-financiamiento",
    index: "03",
    title: "Sistema de Administración de Créditos y Financiamiento",
    subtitle: "Plataforma Financiera Empresarial",
    category: "Enterprise / Fintech",
    problemSolved:
      "Plataforma empresarial para gestión de cuotas, monitoreo financiero y métricas operativas en tiempo real.",
    architectureSummary:
      "Arquitectura modular bajo principios S.O.L.I.D, control de acceso basado en roles (RBAC), seguridad mediante tokens JWT e integridad referencial en base de datos relacional.",
    stack: ["React / Vue", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    links: [
      {
        label: "Demo en vivo",
        href: "https://dashboard.whaledigitals.com/login",
        kind: "demo",
      },
    ],
  },
  {
    id: "comedor-ucv",
    index: "04",
    title: "Sistema de Gestión de Comedor Universitario (UCV)",
    subtitle: "Ingeniería de Software & Concurrencia",
    category: "Sistemas & Liderazgo Técnico",
    problemSolved:
      "Proyecto de ingeniería de software donde lideré como Project Manager a un equipo de 3 desarrolladores para digitalizar el acceso y gestión del comedor universitario.",
    architectureSummary:
      "Autenticación por roles (estudiantes/personal), visualización de menús y actualización de cupos en tiempo real manejando concurrencia, respaldado por modelado UML (diagramas de clases y secuencia) y prototipado en Figma.",
    stack: ["Java", "POO", "Concurrencia", "UML", "Figma"],
    links: [
      {
        label: "Código en GitHub",
        href: "https://github.com/andribyEducation/comedor-app.git",
        kind: "github",
      },
    ],
  },
];

export const TECH_DOMAINS: readonly TechDomain[] = [
  {
    id: "frontend-ui",
    code: "01 // FRONTEND",
    title: "Frontend & UI",
    description:
      "Interfaces rápidas, tipadas y accesibles con foco en arquitectura de componentes y renderizado híbrido.",
    items: [
      "Next.js (App Router, SSR, Server Actions)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Responsive Design",
    ],
    spanClass: "md:col-span-7",
  },
  {
    id: "backend-data",
    code: "02 // BACKEND & DATOS",
    title: "Backend & Datos",
    description:
      "APIs mantenibles, modelado relacional y aislamiento de datos multi-tenant orientado a producción.",
    items: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase (Auth & RLS)",
      "RESTful APIs",
      "Firebase",
    ],
    spanClass: "md:col-span-5",
  },
  {
    id: "ai-automation",
    code: "03 // IA & AUTOMATIZACIÓN",
    title: "IA & Automatización",
    description:
      "Integración práctica de modelos de lenguaje y flujos automatizados para acelerar producto y operaciones.",
    items: [
      "Integración con OpenAI & Anthropic APIs",
      "Flujos asistidos por IA",
      "n8n",
    ],
    spanClass: "md:col-span-5",
  },
  {
    id: "engineering-devops",
    code: "04 // INGENIERÍA & DEVOPS",
    title: "Ingeniería & DevOps",
    description:
      "Fundamentos de ciencias de la computación, arquitectura limpia y entrega continua confiable.",
    items: [
      "Arquitectura S.O.L.I.D",
      "Clean Code",
      "Concurrencia",
      "RBAC/JWT",
      "UML",
      "Git/GitHub",
      "Docker",
      "CI/CD",
      "Vercel",
      "Cloudflare",
    ],
    spanClass: "md:col-span-7",
  },
];

export const TIMELINE: readonly TimelineItem[] = [
  {
    id: "consultoria-fullstack",
    period: "2023 – Presente",
    title: "Desarrollador de Software Full Stack",
    organization: "Consultoría Independiente",
    type: "experience",
    summary:
      "Ciclo completo de ingeniería de software: levantamiento de requerimientos, modelado de datos, desarrollo Full Stack y despliegue CI/CD.",
    highlights: [
      "Arquitectura y puesta en producción de aplicaciones web escalables y sistemas SaaS multi-tenant.",
      "Aceleración de entregas en más de un 30% mediante la adopción sistemática de flujos asistidos por IA.",
    ],
  },
  {
    id: "ucv-computacion",
    period: "2024 – Presente",
    title: "Licenciatura en Computación",
    organization: "Universidad Central de Venezuela (UCV)",
    type: "education",
    summary:
      "Formación universitaria orientada a los fundamentos teóricos y prácticos de las ciencias de la computación.",
    highlights: [
      "Enfoque en algoritmos, estructuras de datos, sistemas operativos, bases de datos e ingeniería de software.",
    ],
  },
];

export const CERTIFICATIONS: readonly CertificationItem[] = [
  {
    title: "Back End Development & APIs",
    issuer: "FreeCodeCamp",
  },
  {
    title: "Front End Libraries",
    issuer: "FreeCodeCamp",
  },
  {
    title: "JS Algorithms & Data Structures",
    issuer: "FreeCodeCamp",
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
  },
];
