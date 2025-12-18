
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
    image: 'images/maisha-speaking.jpg'
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
    image: 'images/maisha-marathon.jpg'
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
    year: 'Feb 2024 - Mar 2024',
    role: 'Research Assistant (Cluster Lead)',
    company: 'UNAIDS Community Rights Survey',
    description: [
      'Led Cluster 2 (Nairobi, Kajiado, Embu, Kitui) in assessing community rights in HIV response.',
      'Administered questionnaires and facilitated Focus Group Discussions (FGDs).',
      'Ensured data quality and adhered to ethical guidelines during collection.',
      'Coordinated with Regional HIV/AIDS Coordinators and supervised fellow assistants.'
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
    image: 'images/gpf-certificate.jpg'
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Digital Design Showcase',
    category: 'Creative Portfolio',
    description: 'A curated collection of my visual designs, freelance graphics, and brand identity projects. This portfolio highlights my work in digital media and creative direction.',
    techStack: ['Photoshop', 'Canva', 'Branding', 'Digital Media'],
    links: [
      { label: 'View Designs', url: 'https://kevsiladesigns.netlify.app', type: 'palette' }
    ],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Solitude in the Digital Age',
    category: 'Published Book',
    description: 'An exploration of connection, mental health, and isolation in the modern technological era. Analyzes the impact of constant connectivity on the human psyche.',
    techStack: ['Author', 'Psychology', 'Social Analysis'],
    links: [
      { label: 'View Book', url: 'http://kevsilabooks.netlify.app/', type: 'live' }
    ],
    image: 'images/book-solitude.jpg'
  },
  {
    title: 'UNEP Staff Portal',
    category: 'System Development',
    description: 'A Laravel & MySQL-based staff management system designed to streamline employee data, authentication, and role-based access control.',
    techStack: ['Laravel', 'MySQL', 'Bootstrap', 'Git'],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/KevSila/UNEP-staff-portal', type: 'github' },
      { label: 'Documentation', url: 'https://docs.google.com/document/d/17XXWR1IgGD7LWUByKq4Es2yK9Oq7zEAtp8B1NkCGkPs/edit?usp=sharing', type: 'doc' }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Maisha Youth Website Strategy',
    category: 'UI/UX & Web Design',
    description: 'Designed fully structured wireframes, prototypes, and sitemaps. Implemented SEO strategies and optimized user flow for the national movement.',
    techStack: ['Figma', 'UI/UX', 'SEO'],
    links: [
      { label: 'Figma Wireframe', url: 'https://www.figma.com/design/EOfvREd0WNcb6B2IX58Px9', type: 'figma' },
      { label: 'Figma Prototype', url: 'https://www.figma.com/design/hEER7bARHmufwmBUkH2Y2W', type: 'figma' }
    ],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Firelit Wisdom',
    category: 'Published Book',
    description: 'Ancient truths for modern living. A collection of insights bridging traditional wisdom with contemporary challenges.',
    techStack: ['Author', 'Culture', 'Philosophy'],
    links: [
      { label: 'View Book', url: 'http://kevsilabooks.netlify.app/', type: 'live' }
    ],
    image: 'images/book-firelit.jpg'
  },
  {
    title: 'Ads Campaign Performance',
    category: 'Data Analytics',
    description: 'Managed high-performance ad campaigns on Google & Meta. Optimized audience targeting and analyzed performance using Looker Studio.',
    techStack: ['Google Ads', 'Meta Ads', 'Looker Studio'],
    links: [
      { label: 'Google Ads Report', url: 'https://docs.google.com/document/d/16aAv_Zs4N6c4OkhW46tn11BTjZX9rGA8I5VeChFQflg/edit?usp=sharing', type: 'doc' },
      { label: 'Meta Ads Insights', url: 'https://docs.google.com/document/d/1Gr245d5y3vPOOvtKXgRKHnUcnn1s_yY2N1lnhTYXWew/edit?usp=sharing', type: 'doc' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
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
