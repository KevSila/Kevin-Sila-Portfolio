import { 
  Code2, 
  Palette, 
  BarChart3, 
  PenTool, 
  Globe, 
  Cpu 
} from 'lucide-react';
import { Project, ExperienceItem, Service, SkillData } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS_DATA: SkillData[] = [
  { subject: 'Web Dev', A: 95, fullMark: 100 },
  { subject: 'UI/UX', A: 85, fullMark: 100 },
  { subject: 'Data Analytics', A: 80, fullMark: 100 },
  { subject: 'Digital Strategy', A: 90, fullMark: 100 },
  { subject: 'SEO/Marketing', A: 85, fullMark: 100 },
  { subject: 'System Auto', A: 75, fullMark: 100 },
];

export const SERVICES: Service[] = [
  {
    title: 'Web Development',
    icon: Code2,
    description: 'Building responsive, scalable web applications using React, Laravel, and Modern CMS tools like WordPress & Wix.',
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    description: 'Creating intuitive wireframes, prototypes, and user-friendly layouts using Figma and Adobe XD.',
  },
  {
    title: 'Digital Strategy',
    icon: Globe,
    description: 'Developing data-driven content calendars, brand strategies, and style guides to boost digital engagement.',
  },
  {
    title: 'Data Analytics',
    icon: BarChart3,
    description: 'Visualizing insights using SQL, Tableau, and Looker Studio to drive business decisions.',
  },
  {
    title: 'Technical Writing',
    icon: PenTool,
    description: 'Authoring clear technical guides, documentation, and blogs on AI, Web Dev, and UX.',
  },
  {
    title: 'System Automation',
    icon: Cpu,
    description: 'Optimizing workflows and integrating solutions using Python, PHP, and SQL.',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: '2023 - Present',
    role: 'Performance Marketing & Optimization',
    description: [
      'Managing Google Ads & Meta Ads to optimize conversions.',
      'Utilizing Google Analytics & Looker Studio for deep performance insights.',
      'Achieving higher ROI through targeted audience strategies.'
    ]
  },
  {
    year: '2022 - Present',
    role: 'Digital Media Strategist',
    description: [
      'Spearheaded digital media strategies aimed at increasing engagement by 20%.',
      'Created content calendars and brand style guides.',
      'Enhanced IT systems and cloud-based storage solutions.'
    ]
  },
  {
    year: '2022 - Present',
    role: 'Website & UI/UX Development',
    description: [
      'Designed wireframes and prototypes for the Maisha Youth website.',
      'Built responsive websites using CMS tools and custom code.',
      'Applied frontend & backend SEO best practices.'
    ]
  },
  {
    year: '2020 - Present',
    role: 'Technical Writing & Blogging',
    description: [
      'Published blogs on web development, AI, and UX/UI.',
      'Wrote technical documentation for developer tools.',
      'Optimized content for search engines.'
    ]
  },
  {
    year: 'Fellowship',
    role: 'President’s Fellowship Program',
    company: 'Global Peace Foundation Kenya',
    description: [
      'Selected as Machakos County representative.',
      'Acquired advanced skills in leadership, conflict resolution, and project management.',
      'Championed Peace and Climate Change initiatives.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'UNEP Staff Portal',
    category: 'System Development',
    description: 'A Laravel & MySQL-based staff management system designed to streamline employee data, authentication, and role-based access control.',
    techStack: ['Laravel', 'MySQL', 'Bootstrap', 'Git'],
    repo: 'https://github.com/kevsila',
    image: 'https://picsum.photos/id/0/600/400'
  },
  {
    title: 'Maisha Youth Website',
    category: 'UI/UX & Web Design',
    description: 'Designed fully structured wireframes, prototypes, and sitemaps. Implemented SEO strategies and optimized user flow.',
    techStack: ['Figma', 'UI/UX', 'Prototyping'],
    link: '#',
    image: 'https://picsum.photos/id/119/600/400'
  },
  {
    title: 'Google & Meta Ads Campaigns',
    category: 'Digital Marketing',
    description: 'Managed high-performance ad campaigns achieving higher ROI. Analyzed performance using Looker Studio.',
    techStack: ['Google Ads', 'Meta Ads', 'Looker Studio'],
    link: '#',
    image: 'https://picsum.photos/id/160/600/400'
  },
  {
    title: 'Data Analytics Dashboard',
    category: 'Data Visualization',
    description: 'Built SQL-based queries and interactive Tableau dashboards to visualize complex datasets for decision making.',
    techStack: ['SQL', 'Tableau', 'Power BI'],
    link: '#',
    image: 'https://picsum.photos/id/48/600/400'
  }
];

export const CONTACT_INFO = {
  email: 'kevinsila100@gmail.com',
  phone: '+254 717578394',
  location: 'Nairobi, Kenya (EAT – UTC+3)',
  linkedin: 'https://linkedin.com/in/kevsila', // Placeholder based on name
  github: 'https://github.com/kevsila', // Placeholder based on name
};