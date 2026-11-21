export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly display: string;
}

export interface ProfileData {
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly email: string;
  readonly availability: string;
  readonly heroSummary: string;
  readonly avatarUrl: string;
  readonly cvPath: string;
  readonly github: SocialLink;
  readonly linkedin: SocialLink;
}

export interface ProjectActionLink {
  readonly label: string;
  readonly href: string;
  readonly kind: "demo" | "github";
}

export interface ProjectCaseStudy {
  readonly id: string;
  readonly index: string;
  readonly title: string;
  readonly subtitle: string;
  readonly category: string;
  readonly problemSolved: string;
  readonly architectureSummary: string;
  readonly stack: readonly string[];
  readonly links: readonly ProjectActionLink[];
}

export interface TechDomain {
  readonly id: string;
  readonly code: string;
  readonly title: string;
  readonly description: string;
  readonly items: readonly string[];
  readonly spanClass: string;
}

export interface TimelineItem {
  readonly id: string;
  readonly period: string;
  readonly title: string;
  readonly organization: string;
  readonly type: "experience" | "education";
  readonly summary: string;
  readonly highlights: readonly string[];
}

export interface CertificationItem {
  readonly title: string;
  readonly issuer: string;
}
