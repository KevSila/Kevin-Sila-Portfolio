import { LucideIcon } from 'lucide-react';

export type LinkType = 'github' | 'live' | 'figma' | 'doc';

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

export interface ExperienceItem {
  year: string;
  role: string;
  company?: string;
  description: string[];
}

export interface Service {
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface SkillData {
  subject: string;
  A: number;
  fullMark: number;
}