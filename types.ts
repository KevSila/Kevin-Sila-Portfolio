
import { LucideIcon } from 'lucide-react';

export type LinkType = 'github' | 'live' | 'figma' | 'doc' | 'palette';

export interface ProjectLink {
  label: string;
  url: string;
  type: LinkType;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  links: ProjectLink[];
  image: string;
}

export interface ResearchProject {
  title: string;
  organization: string;
  year: string;
  methodology: string[];
  description: string[];
}

export interface ResearchSystem {
  title: string;
  role: string;
  year: string;
  toolsMethods: string[];
  scope: string;
  impact: string;
  tags: string[];
}

export interface ImpactArea {
  id: string;
  title: string;
  description: string;
  cards: {
    title: string;
    role?: string;
    organizations?: string;
    year?: string;
    details?: string;
    tags: string[];
  }[];
}

export interface ExperienceItem {
  year: string;
  role: string;
  company?: string;
  description: string[];
  image?: string;
  link?: { label: string; url: string };
}

export interface Service {
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  link?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  grade?: string;
  description?: string;
}

export interface SkillData {
  subject: string;
  A: number;
  fullMark: number;
}
