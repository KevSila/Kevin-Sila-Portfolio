import { 
  Code2, 
  Palette, 
  BarChart3, 
  Globe, 
  Cpu,
  Database,
  FlaskConical,
  BookOpen,
  Search,
  PenTool
} from 'lucide-react';
import { Project, ExperienceItem, Service, SkillData, ResearchProject, Certification, EducationItem } from './types.ts';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certificates', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS_DATA: SkillData[] = [
  { subject: 'Systems Dev', A: 96, fullMark: 100 },
  { subject: 'AI Automation', A: 94, fullMark: 100 },
  { subject: 'Data Analysis', A: 98, fullMark: 100 },
  { subject: 'Financial Disagg', A: 92, fullMark: 100 },
  { subject: 'Tech Writing', A: 90, fullMark: 100 },
  { subject: 'Research Ops', A: 95, fullMark: 100 },
];

export const TECHNICAL_STACK = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'C++'],
  frameworks: ['React', 'Next.js', 'Laravel', 'Tailwind', 'Node.js', 'Bootstrap'],
  aiTools: ['Google AI Studio', 'Gemini API', 'CrewAI', 'Manus', 'Opal', 'Web Audio API'],
  dataResearch: [
    'ODK (Open Data Kit)', 
    'NASA Methodology', 
    'Tableau / Power BI', 
    'Looker Studio', 
    'Figma', 
    'Google Cloud Integration',
    'Advanced Excel'
  ]
};

export const CURRENTLY_EXPLORING = [
  'AI workflow automation',
  'Retrieval-augmented systems',
  'Research operations',
  'Developer tooling',
  'AI-assisted productivity systems',
  'Data storytelling'
];

export const SERVICES: Service[] = [
  {
    title: 'Systems Development',
    icon: Code2,
    description: 'Building scalable web applications and internal tools with a focus on performant architecture and technical logic.',
  },
  {
    title: 'AI & Automation',
    icon: Cpu,
    description: 'Developing intelligent agents and custom workflow automations to reduce manual technical debt using AI SDKs.',
  },
  {
    title: 'Data & Research',
    icon: BarChart3,
    description: 'Data collection, financial analysis, and research coordination using industry-standard methodologies.',
  },
];

export const RESEARCH_WORK: ResearchProject[] = [
  {
    title: 'National Health Expenditure Assessment (KNASA)',
    organization: 'FHEM & NSDCC',
    year: '2026',
    methodology: ['NASA Methodology', 'Financial Analysis', 'Excel Auditing'],
    description: [
      'Processed and validated health expenditure data across multiple financial years.',
      'Applied disaggregation techniques to unstructured financial records for national reporting.',
      'Collaborated with stakeholders to ensure data integrity for regional health policy insights.',
    ],
  },
  {
    title: 'MAISHA YOUTH MOVEMENT — National Surveys & Digital Operations',
    organization: 'Maisha Youth / NSDCC',
    year: '2022 - 2024',
    methodology: ['ODK', 'Survey Coordination', 'Data Collection', 'Digital Operations', 'Quantitative Research'],
    description: [
      'Managed nationwide qualitative and quantitative survey coordination across multiple counties.',
      'Used ODK, Google Forms, and structured digital collection workflows for fieldwork.',
      'Coordinated data validation and reporting processes for youth program monitoring.',
      'Supported organizational digitization and systems transformation across county chapters.',
    ],
  },
  {
    title: 'UNAIDS Community Rights Survey',
    organization: 'UNAIDS / Cluster Team Lead',
    year: '2024',
    methodology: ['ODK', 'Qualitative Analysis', 'FGD Facilitation'],
    description: [
      'Led Cluster 2 data collection across 4 counties for rights-based research in HIV response.',
      'Facilitated Focus Group Discussions (FGDs) and administered assessments according to protocols.',
      'Maintained data quality and ethical compliance for international reporting standards.',
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: '2024 - Present',
    role: 'Developer & Data Strategist',
    company: 'K-Sila Services & Zenfit',
    description: [
      'Automating business operations by integrating AI tools and building web platforms for Kenyan SMEs.',
      'Managing performance marketing campaigns with 11.15% CTR on Meta and 10.5% on Google Ads ($0.03 average CPC).',
      'Implementing national SEO strategies to improve organic visibility across regional markets.',
      'Consulting on technical infrastructure scaling and deploying automated customer communication funnels.'
    ],
    link: { label: 'View GitHub', url: 'https://github.com/kevsila' }
  },
  {
    year: '2025',
    role: 'Website & Digital Platform Assistant',
    company: 'Christine Campbell Rapin',
    description: [
      'Managed WordPress infrastructure using Divi builder, maintaining 99.9% uptime and mobile responsiveness.',
      'Integrated marketing tools via GoHighLevel to drive user journey from lead capture to conversion.',
      'Executed technical SEO audits resulting in measurable improvements to Core Web Vitals.'
    ]
  },
  {
    year: '2024',
    role: 'Fellow - President\'s Fellowship Program',
    company: 'Global Peace Foundation Kenya',
    description: [
      'Selected as the Machakos County representative for this prestigious leadership and mentorship initiative.',
      'Acquired advanced skills in conflict resolution, strategic communication, and community peace-building.',
      'Strengthened capabilities in project management and partnership-building as a designated Foundation Ambassador.',
      'Represented the chapter in national forums, advocating for youth-led health and community interventions.'
    ]
  },
  {
    year: '2022 - 2025',
    role: 'Information Technology Lead',
    company: 'Maisha Youth Movement (National)',
    description: [
      'Spearheaded the integration and adoption of Google Cloud services across 47 chapters for secure and accessible data storage.',
      'Designed and launched the movement\'s website, creating wireframes and prototypes in Figma and managing the budget.',
      'Led the Digital Media Committee, overseeing strategy creation and creating a comprehensive branding style guide.',
      'Automated organizational workflows and data transcription projects to digitize historical health records.'
    ]
  },
  {
    year: '2020 - 2025',
    role: 'Chairperson',
    company: 'Maisha Youth - Machakos Chapter',
    description: [
      'Led 500+ members in youth-focused health awareness initiatives and community engagement programs.',
      'Drafted comprehensive county work plans, budgets, and event strategies aligned with national health goals.',
      'Managed coordinated partnerships with regional stakeholders to amplify the impact of community health programs.',
      'Mentored youth members in project planning, proposal writing, and organizational leadership.'
    ]
  },
  {
    year: '2024 - 2025',
    role: 'Assistant Manager & IT Associate',
    company: 'Equavo Limited',
    description: [
      'Built automated fruit inventory and production tracking systems using Advanced Excel and SQL.',
      'Developed quality control metrics dashboards for tracking FFA levels, Dry Matter, and Moisture Loss.',
      'Optimized weekly and monthly wage payment processes, improving accuracy and reducing overhead.',
      'Streamlined warehouse operations and technical workflows through integrated data management solutions.'
    ]
  },
  {
    year: '2020 - 2022',
    role: 'Online Academic Tutor',
    company: 'Course Hero',
    description: [
      'Maintained a 4.8/5 satisfaction rating through high-quality technical and mathematical instruction for global students.',
      'Delivered tailored lessons in Mathematics, Computer Science, and English using visual aids and interactive discussions.',
      'Created a robust library of educational resources accessed by thousands of students worldwide.'
    ]
  },
  {
    year: '2019',
    role: 'Enumerator',
    company: 'Kenya National Bureau of Statistics (KNBS)',
    description: [
      'Executed data collection and verification for the 2019 Kenya National Housing Census in Machakos County.',
      'Conducted structured household interviews and ensured accurate digital entry of data within strict time constraints.',
      'Maintained 100% data integrity and security for households within designated enumeration areas.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'AI Job Application Suite',
    category: 'Productivity',
    description: 'A career tool built with React and the Gemini API. It uses LLMs to analyze job descriptions and generate optimized CVs synced with user profiles.',
    techStack: ['React', 'Gemini API', 'TypeScript', 'Tailwind'],
    links: [
      { label: 'Source', url: 'https://github.com/KevSila/Job-application-assistant', type: 'github' }
    ],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Neural Audio Engine',
    category: 'Multimedia',
    description: 'A text-to-speech application utilizing Gemini AI models for natural voice synthesis. Built with the Web Audio API for custom audio processing control.',
    techStack: ['TypeScript', 'Gemini AI', 'Web Audio API'],
    links: [
      { label: 'Source', url: 'https://github.com/KevSila/Text-To-Speech-Audio-Generator', type: 'github' }
    ],
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Staff Management Portal',
    category: 'Systems',
    description: 'A full-stack management system designed to streamline employee data, authentication workflows, and administrative reporting.',
    techStack: ['Laravel', 'MySQL', 'PHP', 'Bootstrap'],
    links: [
      { label: 'Source', url: 'https://github.com/KevSila/Staff-portal', type: 'github' }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  }
];

export const PUBLICATIONS = [
  {
    title: 'Attention by Design',
    category: 'Analysis',
    description: 'A deep dive into Psychology & Social Analysis, exploring how digital attention economies shape human behavior.',
    url: 'https://kevsilabooks.netlify.app/'
  },
  {
    title: 'The Firelit Mind',
    category: 'Philosophy & Strategy',
    description: 'A collection of essays on Culture & Philosophy, bridging traditional wisdom with contemporary leadership.',
    url: 'https://kevsilabooks.netlify.app/'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Sc. in Mathematics and Computer Science',
    institution: 'Kenyatta University',
    year: 'Graduated Jul 2023',
    grade: 'Second Class Honors',
    description: 'Focus: Algorithmic Logic, Database Architecture, Linear Algebra, Calculus.'
  },
  {
    degree: 'Kenya Certificate of Secondary Education (KCSE)',
    institution: 'Murang\'a High School',
    year: 'Graduated Dec 2015',
    grade: 'A- (Minus)',
    description: 'Strong foundation in logical sciences and mathematical reasoning.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    year: '2023',
    link: 'https://coursera.org/verify/professional-cert/GOOGLE-DATA'
  },
  {
    title: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    year: '2019'
  },
  {
    title: 'IBM Project Management Fundamentals',
    issuer: 'IBM',
    year: '2022'
  },
  {
    title: 'IBM Artificial Intelligence V2',
    issuer: 'IBM',
    year: '2020'
  },
  {
    title: 'Cisco Cybersecurity Essentials',
    issuer: 'Cisco',
    year: '2020'
  },
  {
    title: 'TRREE Research Ethics',
    issuer: 'TRREE',
    year: '2024'
  },
  {
    title: 'Agile Requirements Foundations',
    issuer: 'LinkedIn Learning',
    year: '2022'
  },
  {
    title: 'Business Analysis Foundations',
    issuer: 'LinkedIn Learning',
    year: '2022'
  },
  {
    title: 'SQL for Data Analysis',
    issuer: 'Udacity / LinkedIn',
    year: '2022'
  },
  {
    title: 'Google Analytics Individual Qualification',
    issuer: 'Google',
    year: '2023'
  },
  {
    title: 'Power BI Dashboard Visualization',
    issuer: 'Microsoft / Coursera',
    year: '2023'
  },
  {
    title: 'ICDL Profile Certificate',
    issuer: 'ICDL Africa',
    year: '2016'
  }
];

export const CONTACT_INFO = {
  email: 'kevinsila100@gmail.com',
  phone: '+254 717-578394',
  location: 'Nairobi, Kenya',
  linkedin: 'https://linkedin.com/in/kevin-sila-9143b618a/',
  github: 'https://github.com/kevsila',
  whatsapp: '+254717578394'
};