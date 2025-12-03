import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  link?: string;
  repo?: string;
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