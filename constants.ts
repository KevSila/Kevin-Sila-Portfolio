
import { 
  Code2, 
  Palette, 
  BarChart3, 
  PenTool, 
  Globe, 
  Cpu 
} from 'lucide-react';
import { Project, ExperienceItem, Service, SkillData } from './types.ts';

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
  { subject: 'UI/UX', A: 92, fullMark: 100 },
  { subject: 'Data Analytics', A: 85, fullMark: 100 },
  { subject: 'Digital Strategy', A: 90, fullMark: 100 },
  { subject: 'Creative Design', A: 95, fullMark: 100 },
  { subject: 'System Architecture', A: 80, fullMark: 100 },
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
    year: 'Jan 2024 - Present',
    role: 'Freelance Developer & Strategist',
    company: 'K-Sila Services',
    description: [
      'Automating Kenyan SMEs through AI integration and high-performance digital sales machines.',
      'Developing conversion-optimized websites and automated WhatsApp sales funnels for nationwide reach.',
      'Crafting comprehensive digital media strategies and premium visual identities (Style Guides).',
      'Implementing National SEO strategies to dominate Google search results across all 47 counties.'
    ],
    link: { label: 'Visit K-Sila Services', url: 'https://ksilaservices.netlify.app' }
  },
  {
    year: 'May 2025 - July 2025',
    role: 'Website & Digital Platform Assistant',
    company: 'Christine Campbell Rapin',
    description: [
      'Managed and maintained WordPress website using Divi theme builder.',
      'Customized CSS and troublshooted front-end display issues.',
      'Collaborated on funnel integration within GoHighLevel (Actionera) for lead capture.',
      'Performed regular site audits, updates, and SEO optimizations.'
    ]
  },
  {
    year: 'Mar 2022 - May 2025',
    role: 'Information Technology Lead',
    company: 'Maisha Youth Movement',
    description: [
      'Spearheaded digital media strategies aimed at increasing engagement and created the official digital media style guide.',
      'Designed the organizations prototype website using Figma and orchestrated the development process.',
      'Led the integration of Google Cloud services for secure data storage across 47 county chapters.'
    ],
    image: '/images/maisha-speaking.jpg'
  },
  {
    year: 'Dec 2020 - May 2025',
    role: 'Chairperson - Machakos Chapter',
    company: 'Maisha Youth Movement',
    description: [
      'Led youth-focused health awareness initiatives and community engagement programs.',
      'Drafted comprehensive county work plans, budgets, and event strategies.',
      'Mentored members in proposal writing, leadership, and conflict resolution.',
      'Authored high-quality concept notes and reports that secured funding.'
    ],
    image: '/images/maisha-marathon.jpg'
  },
  {
    year: 'Jan 2024 - Jan 2025',
    role: 'Assistant Manager & I.T Associate',
    company: 'Equavo Limited',
    description: [
      'Managed daily operations and finances for crude avocado oil production.',
      'Maintained Fruit Inventory and Production Spreadsheets for quality control metrics.',
      'Provided technical support and managed IT-related tasks including data entry and analysis.',
      'Designed company identification cards and operational workflow spreadsheets.'
    ]
  },
  {
    year: 'Mar 2024 - Dec 2024',
    role: 'Fellow - President’s Fellowship Program',
    company: 'Global Peace Foundation Kenya',
    description: [
      'Selected as Machakos County representative for this prestigious leadership program.',
      'Acquired advanced skills in conflict resolution, peace-building, and strategic communication.',
      'Championed Peace and Climate Change initiatives as a designated Ambassador.'
    ],
    image: '/images/gpf-certificate.jpg'
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'AI Job Application Assistant',
    category: 'AI & Productivity',
    description: 'An elite AI-powered career optimization suite built with React and Google Gemini. It automates the generation of ATS-optimized CVs and tailored interview responses.',
    techStack: ['React', 'Gemini API', 'TypeScript', 'Tailwind'],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/KevSila/Job-application-assistant', type: 'github' }
    ],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'AI Audio Generator',
    category: 'AI & Multimedia',
    description: 'A modern tool that transforms text into natural-sounding speech using Google Gemini AI. Features a sleek interface for managing audio generation in real-time.',
    techStack: ['TypeScript', 'Gemini AI', 'Web Audio API'],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/KevSila/Text-To-Speech-Audio-Generator', type: 'github' }
    ],
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Sample Staff Portal Project',
    category: 'System Development',
    description: 'A professional dashboard designed to streamline organizational workflows, serving as a centralized hub for employee data and task management.',
    techStack: ['Laravel', 'MySQL', 'Bootstrap', 'Git'],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/KevSila/Staff-portal', type: 'github' }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Attention by Design',
    category: 'Published Book',
    description: 'Mastering the digital patterns that shape your mind. An exploration of connection, mental health, and the impact of technology on the human psyche.',
    techStack: ['Author', 'Social Analysis', 'Digital Ethics'],
    links: [
      { label: 'View Landing Page', url: 'https://ksilabooks.netlify.app/', type: 'live' }
    ],
    image: '/images/book-solitude.jpg'
  },
  {
    title: 'The Firelit Mind',
    category: 'Published Book',
    description: '13 timeless principles for a life well-lived. Ancient truths for modern living, bridging traditional wisdom with contemporary challenges.',
    techStack: ['Author', 'Philosophy', 'Personal Growth'],
    links: [
      { label: 'View Landing Page', url: 'https://ksilabooks.netlify.app/', type: 'live' }
    ],
    image: '/images/book-firelit.jpg'
  },
  {
    title: 'Digital Design Showcase',
    category: 'Creative Portfolio',
    description: 'A curated collection of visual designs and brand identity projects. This repository serves as a professional exhibition of modern UI/UX trends.',
    techStack: ['Figma', 'React', 'Branding', 'Digital Media'],
    links: [
      { label: 'View Designs', url: 'https://ksiladesigns.netlify.app', type: 'palette' },
      { label: 'GitHub', url: 'https://github.com/KevSila/KevSilaDesigns', type: 'github' }
    ],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800'
  }
];

export const CONTACT_INFO = {
  email: 'kevinsila100@gmail.com',
  phone: '+254 717578394',
  whatsapp: '+254717578394',
  location: 'Nairobi, Kenya (EAT – UTC+3)',
  linkedin: 'https://www.linkedin.com/in/kevin-sila-9143b618a/', 
  github: 'https://github.com/kevsila',
};
