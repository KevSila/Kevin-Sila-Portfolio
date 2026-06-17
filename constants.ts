import { 
  Code2, 
  Palette, 
  BarChart3, 
  Globe, 
  Cpu,
  Database,
  BookOpen,
  Search,
  PenTool,
  Network,
  ClipboardList
} from 'lucide-react';
import { Project, ExperienceItem, Service, Certification, EducationItem, ImpactArea, ResearchSystem } from './types.ts';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Impact Areas', href: '#impact-areas' },
  { name: 'Research Systems', href: '#research-systems' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Publications', href: '#publications' },
  { name: 'Contact', href: '#contact' },
];

export const BRANDING = {
  name: 'Kevin Yumbya Sila',
  title: 'Systems Builder • Research & Data Professional • AI & Digital Transformation Specialist',
  heroStatement: 'Bridging research, technology, leadership, and operations to build systems that create measurable impact.',
  heroDescription: 'I work at the intersection of data, public health research, AI automation, digital transformation, community leadership, and business operations. My strength is turning complex problems into structured systems that people can understand, use, and improve.',
  philosophyQuote: 'Systemic clarity follows the subtraction of the unnecessary.',
  philosophySupport: 'I believe technology should simplify complexity, research should inform action, and leadership should empower people. Whether I am building AI systems, coordinating national surveys, improving business workflows, or leading community initiatives, my focus remains the same: create systems that help people make better decisions.',
  aboutText1: 'I am a multidisciplinary technology, research, and operations professional with a B.Sc. in Mathematics and Computer Science from Kenyatta University. My work spans public health research, data analytics, digital transformation, AI automation, IT operations, business intelligence, community leadership, and strategic documentation.',
  aboutText2: 'I have supported national-level research initiatives, led field teams, built digital workflows, managed operational reporting systems, developed proposals and concept notes, and created AI-powered tools. My career is connected by one theme: building practical systems that turn complexity into clarity.',
  coreIdentity: [
    'Systems thinker',
    'Research coordinator',
    'AI and automation builder',
    'Digital transformation practitioner',
    'Community leader',
    'Technical communicator',
    'Operations and analytics problem-solver'
  ]
};

export const METRICS = [
  { value: '47', label: 'County Chapters Supported', detail: 'Led Google Cloud & digital adoption nationwide' },
  { value: '10+', label: 'Team Members Supervised', detail: 'Coordinated Rift Valley field research teams' },
  { value: '5+', label: 'Years of Community Leadership', detail: 'Spearheading technology & social programs' },
  { value: '100+', label: 'Strategic Docs Produced', detail: 'Reports, concept notes & administrative proposals' },
  { value: '10+', label: 'Digital Systems & Tech Built', detail: 'Deploying custom workflows & automation apps' },
  { value: '500+', label: 'Youth Reached Through Programs', detail: 'Health awareness & mentorship campaigns' },
];

export const CATEGORIZED_SKILLS = [
  {
    category: 'Research & Data',
    skills: ['ODK', 'Google Forms', 'Microsoft Forms', 'Qualitative Research', 'Quantitative Research', 'Mixed Methods', 'Data Collection', 'Data Cleaning', 'Data Validation', 'Research Reporting', 'MEL']
  },
  {
    category: 'Analytics',
    skills: ['Excel (Advanced)', 'SQL', 'Power BI', 'Tableau', 'Looker Studio', 'Data Visualization', 'Dashboarding']
  },
  {
    category: 'Development',
    skills: ['React', 'TypeScript', 'JavaScript', 'PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'Tailwind', 'Bootstrap']
  },
  {
    category: 'AI & Automation',
    skills: ['Gemini API', 'Google AI Studio', 'AI Workflows', 'WhatsApp Automation', 'CRM Automation', 'Reporting Automation']
  },
  {
    category: 'Digital Strategy',
    skills: ['WordPress', 'Divi', 'Elementor', 'Wix', 'Google Sites', 'SEO', 'Google Ads', 'Meta Ads', 'Facebook Ads Manager', 'GoHighLevel']
  },
  {
    category: 'Leadership & Strategy',
    skills: ['Team Leadership', 'Stakeholder Engagement', 'Proposal Writing', 'Concept Notes', 'Budgeting', 'Work Plans', 'Report Writing', 'Strategic Communication', 'Training', 'Mentorship']
  }
];

export const IMPACT_AREAS: ImpactArea[] = [
  {
    id: 'research-evidence',
    title: 'Research & Evidence Systems',
    description: 'I coordinate and support research systems that generate evidence for health, policy, and program decision-making.',
    cards: [
      {
        title: 'NSDCC Prison Health Baseline Assessment',
        role: 'Research Assistant & Rift Valley Site Coordinator',
        organizations: 'NSDCC, Kenya Prisons Service, NASCOP, Kenya Red Cross Society, ADI',
        year: '2026',
        details: 'Selected through a competitive national recruitment process for a baseline assessment examining HIV & TB Prevention, Sexual & Reproductive Health Services, Human Rights, and Gender Needs among incarcerated populations in Kenya. Served as Rift Valley Site Coordinator. Oversaw data collection activities in Nakuru, Eldoret, and Kitale. Supervised a team of 8 Research Assistants. Coordinated field operations, stakeholder engagement, quality assurance, ethical compliance, and daily reporting.',
        tags: ['Public Health Research', 'MEL', 'Data Collection', 'Site Coordination', 'HIV/TB', 'SRH', 'Human Rights', 'Correctional Health', 'Daily Reporting', 'Team Supervision']
      },
      {
        title: 'KNASA 2026 (Kenya National AIDS Spending Assessment)',
        role: 'Research Assistant',
        organizations: 'Futures Health Economics and Metrics Limited (FHEM) & NSDCC',
        year: '2026',
        details: 'Supported the Kenya National AIDS Spending Assessment. Collected, validated, cleaned, and disaggregated HIV-related expenditure data across five financial years (2020-2025). Applied NASA methodology and Excel-based data standardization. Engaged NGOs, government agencies, healthcare institutions, and stakeholders. Contributed to health financing evidence and national reporting.',
        tags: ['NASA Methodology', 'Health Financing', 'Excel', 'Data Cleaning', 'Stakeholder Engagement', 'HIV Expenditure', 'National Reporting']
      },
      {
        title: 'UNAIDS Community Rights Survey',
        role: 'Research Assistant & Cluster Team Lead',
        organizations: 'UNAIDS / Cluster 2',
        year: '2024',
        details: 'Led Cluster 2 research activities across Nairobi, Kajiado, Embu, and Kitui Counties. Used ODK for mobile data collection. Facilitated Focus Group Discussions (FGDs) and administered questionnaires. Supported gender rights and community rights research in the HIV response. Maintained research ethics, data quality, and field coordination.',
        tags: ['ODK', 'Qualitative Research', 'FGDs', 'HIV Response', 'Gender Rights', 'Cluster Leadership', 'Data Quality']
      }
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    description: 'I build and experiment with AI-powered systems that reduce manual work, improve decision-making, and support productivity.',
    cards: [
      {
        title: 'AI Job Application Assistant',
        role: 'Developer & Integrator',
        organizations: 'GitHub: Job-application-assistant',
        year: '2024',
        details: 'An AI-powered career optimization suite built with React, TypeScript, Tailwind CSS, and Google Gemini API. It automates the generation of ATS-optimized CVs, cover letters, and tailored application responses.',
        tags: ['React', 'TypeScript', 'Tailwind', 'Gemini API', 'ATS', 'Automation', 'Productivity']
      },
      {
        title: 'Neural Audio Engine / Text-To-Speech Audio Generator',
        role: 'Developer & Integrator',
        organizations: 'GitHub: Text-To-Speech-Audio-Generator',
        year: '2024',
        details: 'A web-based tool that transforms text into natural-sounding speech using Google Gemini AI and the Web Audio API. It demonstrates AI-powered multimedia generation and user-friendly audio interaction.',
        tags: ['TypeScript', 'Gemini AI', 'Web Audio API', 'Text-to-Speech', 'Multimedia']
      },
      {
        title: 'WhatsApp Lead Qualification System',
        role: 'Concept / Prototype',
        organizations: 'Personal Research / K-Sila Services',
        year: '2025',
        details: 'A concept/prototype for businesses that captures leads through forms or WhatsApp, qualifies them using AI, summarizes the request, and routes leads for follow-up.',
        tags: ['AI Automation', 'WhatsApp', 'CRM', 'Lead Qualification', 'Business Systems']
      },
      {
        title: 'AI CRM Assistant',
        role: 'Concept / Prototype',
        organizations: 'Silatech Growth Partners',
        year: '2025',
        details: 'A Silatech Growth Partners concept for helping SMEs manage customer inquiries, summarize leads, prioritize follow-ups, and automate response workflows.',
        tags: ['CRM', 'AI Assistant', 'Sales Automation', 'SME Automation', 'Business Intelligence']
      },
      {
        title: 'Automated Reporting System',
        role: 'Concept / Tool Project',
        organizations: 'Inspired by Maisha Youth Movement',
        year: '2025',
        details: 'A concept inspired by Maisha Youth Movement reporting needs, designed to collect field data through forms, summarize activity reports using AI, and generate dashboards for leadership decision-making.',
        tags: ['Reporting Automation', 'Google Forms', 'Dashboards', 'AI Summaries', 'Program Monitoring']
      }
    ]
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'I help organizations adopt digital tools, improve workflows, and create systems for communication, reporting, and collaboration.',
    cards: [
      {
        title: 'Maisha Youth Movement National Digital Operations',
        role: 'Information Technology Lead',
        organizations: 'Maisha Youth Movement (National)',
        year: '2022 - 2025',
        details: 'Supported digital transformation across 47 county chapters. Led Google Cloud/Google Workspace adoption. Developed digital forms, reporting systems, and membership data collection processes. Designed website prototypes in Figma. Supported digital media strategy, SEO, reporting, cloud storage, and workflow improvement.',
        tags: ['Google Cloud', 'Digital Transformation', '47 Counties', 'Figma', 'Reporting Systems', 'Youth Programs']
      },
      {
        title: 'Christine Campbell Rapin Digital Platform Support',
        role: 'Website & Digital Platform Assistant',
        organizations: 'Christine Campbell Rapin — Business Mentor & Strategist',
        year: '2025',
        details: 'Managed WordPress infrastructure using Divi. Integrated GoHighLevel/Actionera funnels. Performed SEO audits, mobile responsiveness checks, CSS fixes, and site optimization to drive user journey from lead capture to conversion.',
        tags: ['WordPress', 'Divi', 'GoHighLevel', 'SEO', 'CSS', 'Digital Platform Support']
      }
    ]
  },
  {
    id: 'community-leadership',
    title: 'Community Leadership & Youth Development',
    description: 'I have led youth-focused programs, community initiatives, mentorship, stakeholder engagement, and strategic documentation.',
    cards: [
      {
        title: 'Maisha Youth Machakos Chapter leadership',
        role: 'Chairperson',
        organizations: 'Maisha Youth Movement',
        year: '2020 - 2025',
        details: 'Led county-level youth health awareness and community engagement initiatives with 500+ members. Developed county work plans, budgets, event strategies, proposals, concept notes, and reports. Coordinated partnerships with stakeholders and youth networks.',
        tags: ['Youth Leadership', 'Community Engagement', 'Proposal Writing', 'Budgeting', 'Mentorship', 'Health Awareness']
      },
      {
        title: 'President\'s Fellowship Program',
        role: 'Fellow & Peace Ambassador',
        organizations: 'Global Peace Foundation Kenya & Global Peace Foundation USA',
        year: '2024',
        details: 'Selected as Machakos County representative for a leadership and mentorship fellowship. Trained in peacebuilding, conflict resolution, strategic communication, report writing, proposal development, and partnership-building. Supported peace and climate advocacy initiatives.',
        tags: ['Peacebuilding', 'Climate Action', 'Leadership', 'Strategic Communication', 'Fellowship', 'Community Development']
      }
    ]
  },
  {
    id: 'operations-bi',
    title: 'Operations & Business Intelligence',
    description: 'I build operational systems that improve tracking, reporting, decision-making, and workflow efficiency.',
    cards: [
      {
        title: 'Equavo Limited Operational Systems',
        role: 'Assistant Manager & IT Associate',
        organizations: 'Equavo Limited (Athi River, Machakos)',
        year: '2024 - 2025',
        details: 'Managed warehouse operations and operational reporting for crude avocado oil production. Built Excel-based tracking systems for inventory, production, petty cash, wages, machine parts, and quality control. Tracked Free Fatty Acid (FFA), Dry Matter, and Moisture Loss metrics. Supported technical troubleshooting, data entry, reporting, and workflow optimization.',
        tags: ['Operations', 'Excel Automation', 'Inventory Systems', 'Production Analytics', 'Quality Control', 'FFA', 'Dry Matter', 'Reporting']
      }
    ]
  },
  {
    id: 'strategy-docs',
    title: 'Strategy & Documentation',
    description: 'This section details my capacity to structure, articulate, write and package institutional intelligence.',
    cards: [
      {
        title: 'Strategic Asset & Report Library',
        role: 'Systems Thinker & Communicator',
        organizations: 'Cross-functional projects',
        year: 'Active',
        details: 'Broad expertise compiling mission-critical administrative documentation: Concept Notes, Project Proposals, Budgets, Work Plans, Monitoring Reports, Research Reports, Daily Field Reports, Technical Documentation, Training Materials, Digital Strategy Documents, Brand Style Guides, and SOP-style process guides. These documentation skills support research teams, NGOs, community organizations, and business operations.',
        tags: ['Concept Notes', 'Project Proposals', 'Budgets', 'Work Plans', 'Technical Documentation', 'Style Guides', 'SOPs']
      }
    ]
  }
];

export const RESEARCH_SYSTEM_CARDS: ResearchSystem[] = [
  {
    title: 'NSDCC Prison Baseline Assessment',
    role: 'Research Assistant & Rift Valley Site Coordinator',
    year: '2026',
    scope: 'A national baseline assessment examining HIV & TB Prevention, Sexual & Reproductive Health, Human Rights, and gender needs inside prisons across Nairobi, Nakuru, Eldoret, and Kitale.',
    impact: 'Directly managed Rift Valley site data collection, supervised 8 Research Assistants, navigated administrative coordination and maintained strict ethical and quality standards within correctional environments.',
    toolsMethods: ['Mixed-methods Research', 'Digital Questionnaires', 'Site Coordination', 'Field Logistics', 'Ethical Approvals'],
    tags: ['Correctional Health', 'Public Health', 'Site Coordination', 'Team Supervision']
  },
  {
    title: 'KNASA 2026 (Kenya National AIDS Spending Assessment)',
    role: 'Research Assistant',
    year: '2026',
    scope: 'National HIV resource tracking across public, private, and civil society sectors spanning five financial years (2020-2025).',
    impact: 'Extracted, validated, disaggregated, and synthesized financial records (Human Resources, budgets, HTS services) into standardized NASA templates, producing health financing databases for national policy and reporting.',
    toolsMethods: ['NASA Methodology', 'Financial Disaggregation', 'Excel Modeling', 'Stakeholder Engagement'],
    tags: ['Health Financing', 'HIV Expenditure', 'Policy Analytics', 'Data Standardisation']
  },
  {
    title: 'Maisha Youth National Surveys & Digital Operations',
    role: 'Information Technology Lead',
    year: '2022 - 2025',
    scope: 'National youth-led research assessing health, socioeconomic development, and policy alignment across 47 chapters.',
    impact: 'Designed membership data collection systems and implemented Google Cloud services for secure reporting. Coordinated nationwide qualitative & quantitative surveys, informing county/national work plans and budgets.',
    toolsMethods: ['ODK (Open Data Kit)', 'Cloud Infrastructure Integration', 'Quantitative Survey Design', 'Figma Prototyping'],
    tags: ['Survey Operations', 'Youth Advocacy', 'Cloud Infrastructure', 'Digital Forms']
  },
  {
    title: 'UNAIDS Community Rights Survey',
    role: 'Research Assistant & Cluster Team Lead (Cluster 2)',
    year: '24',
    scope: 'Rights, gender, and HIV response assessment in Central Kenya (Nairobi, Kajiado, Embu, Kitui).',
    impact: 'Supervised primary field interviews, facilitated focus group discussions (FGDs) with vulnerable groups, and ensured 100% compliance with strict international ethical data protocols.',
    toolsMethods: ['Focus Group Discussions (FGD)', 'ODK Mobile Systems', 'Qualitative Analysis', 'Ethical Compliance'],
    tags: ['Qualitative Research', 'Gender Rights', 'FGD Facilitation', 'Rights Assessment']
  },
  {
    title: 'Kenya National Housing Census',
    role: 'Enumerator',
    year: '2019',
    scope: 'Decennial national demographic housing logging by the Kenya National Bureau of Statistics (KNBS).',
    impact: 'Administered structured household demographic surveys in Athi River, Machakos County. Met target collection timelines while maintaining data security.',
    toolsMethods: ['CAPI Digital Surveys', 'Household Structured Interviewing', 'Demographic Mapping', 'Field Data Security'],
    tags: ['Census', 'CAPI Surveys', 'Demographic Research', 'KNBS']
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: '2026',
    role: 'Research Assistant & Rift Valley Site Coordinator',
    company: 'NSDCC / KPS / NASCOP / KRCS / ADI',
    description: [
      'Selected through competitive national recruitment for HIV/TB, SRH, Human Rights, and Gender Needs Baseline in Kenya Prisons.',
      'Supervised 8 Research Assistants executing survey protocols across key locations: Nakuru, Eldoret, and Kitale.',
      'Over-saw stakeholder field operations, ethical conformance, technical data validation, and daily data reporting chains.'
    ]
  },
  {
    year: '2026',
    role: 'Research Assistant',
    company: 'Futures Health Economics and Metrics Limited (FHEM) & NSDCC',
    description: [
      'Collected, audited, validated, and disaggregated complex multi-year HIV-related expenditures for KNASA 2026.',
      'Standardized financial tables from healthcare institutions, NGOs, and government databases using NASA templates.',
      'Facilitated key contact communications and courtesy calls to secure missing commodity and financial data.'
    ]
  },
  {
    year: '2024 - Present',
    role: 'Developer & Data Strategist',
    company: 'K-Sila Services & Zenfit',
    description: [
      'Automating business workflows for regional organizations through custom AI integrations and conversion-optimized websites.',
      'Engineered and managed paid marketing campaigns, attaining 11.15% CTR on Meta and 10.5% on Google Ads ($0.03 CPC average).',
      'Deployed regional and national search engine optimization targeting strategic workflows across all 47 Kenyan counties.'
    ],
    link: { label: 'View GitHub Profile', url: 'https://github.com/kevsila' }
  },
  {
    year: '2025',
    role: 'Website & Digital Platform Assistant',
    company: 'Christine Campbell Rapin',
    description: [
      'Maintained business WordPress assets via Divi builder, sustaining 99.9% uptime and streamlined page load-speeds.',
      'Configured automated lead workflows and strategic funnels inside GoHighLevel / Actionera platforms.',
      'Addressed frontend CSS display issues and implemented SEO improvements verified through PageSpeed Audits.'
    ]
  },
  {
    year: '2022 - 2025',
    role: 'Information Technology Lead',
    company: 'Maisha Youth Movement (National)',
    description: [
      'Managed Google Workspace and Google Cloud migrations nationwide for secure inter-chapter document repositories.',
      'Engineered wireframes and high-conversion sitemaps in Figma to coordinate the national website development budget.',
      'Pioneered ODK frameworks for nationwide qualitative/quantitative youth research, supporting administrative work plans.'
    ]
  },
  {
    year: '2020 - 2025',
    role: 'Chairperson',
    company: 'Maisha Youth - Machakos Chapter',
    description: [
      'Led 500+ community advocates in region-wide health awareness campaigns and mental health initiatives.',
      'Drafted comprehensive county strategic work plans, annual budgets, proposal briefs, and milestone reporting documents.',
      'Engaged with local public health officials and cross-county youth networks to strengthen service linkages.'
    ]
  },
  {
    year: '2024 - 2025',
    role: 'Assistant Manager & IT Associate',
    company: 'Equavo Limited',
    description: [
      'Coordinated daily operations and wage payouts for Athi River avocado oil centrifugation processing facility.',
      'Constructed Advanced Excel dashboards monitoring FFA levels, water loss, machine maintenance inventories, and weekly wage rates.',
      'Integrated SQL data models, eliminating production logging errors by an estimated 30%.'
    ]
  },
  {
    year: '2024',
    role: 'Research Assistant & Cluster Team Lead (Cluster 2)',
    company: 'UNAIDS Community Rights Survey',
    description: [
      'Coordinated Nairobi, Kajiado, Embu, and Kitui counties assessing human rights, gender structures, and clinical barriers.',
      'Led Focus Group Discussions (FGDs) with vulnerable clinical cohorts and mapped community survey targets.',
      'Upheld strict ethical protocols and supervised quality assurance of uploaded ODK datasets.'
    ]
  },
  {
    year: '2024',
    role: 'President\'s Fellow & peace Ambassador',
    company: 'Global Peace Foundation Kenya',
    description: [
      'Represented Machakos County in senior leadership, conflict resolution, and strategic development fellowship modules.',
      'Co-directed localized climate and cohesion advocacy interventions in collaboration with national stakeholders.',
      'Acquired advanced training in strategic coalition building and policy-oriented documentation.'
    ]
  },
  {
    year: '2020 - 2022',
    role: 'Online Academic Tutor',
    company: 'Course Hero',
    description: [
      'Tutored global university students in Mathematics, Computer Science, and English, maintaining a 4.8/5.0 rating.',
      'Compiled academic study guides and instructional resources to simplify numerical logic and algorithmic studies.'
    ]
  },
  {
    year: '2019',
    role: 'Enumerator',
    company: 'Kenya National Housing Census (KNBS)',
    description: [
      'Conducted door-to-door structured household registry interviews inside the Athi River region.',
      'Ensured secure storage and transmission of local demographic surveys using designated KNBS software.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Job-application-assistant',
    category: 'AI & Productivity',
    description: 'AI-powered career optimization suite built with React, TypeScript, Tailwind CSS, and Gemini API. It analyzes unstructured job descriptions and creates ATS-aligned CVs matched with user profiles.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API'],
    links: [
      { label: 'Source', url: 'https://github.com/KevSila/Job-application-assistant', type: 'github' }
    ],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Staff-portal',
    category: 'Systems Automation',
    description: 'A professional internal-facing staff management system designed to streamline employee data, authentication workflows, task management, and administrative reporting.',
    techStack: ['Laravel', 'MySQL', 'PHP', 'Bootstrap'],
    links: [
      { label: 'Source', url: 'https://github.com/KevSila/Staff-portal', type: 'github' }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Text-To-Speech-Audio-Generator',
    category: 'AI & Multimedia',
    description: 'A modern text-to-speech web application using Gemini AI and Web Audio API for custom audio synthesis and smooth browser playback.',
    techStack: ['TypeScript', 'Gemini AI', 'Web Audio API'],
    links: [
      { label: 'Source', url: 'https://github.com/KevSila/Text-To-Speech-Audio-Generator', type: 'github' }
    ],
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Kenya-Covid-Data-Exploration',
    category: 'Data Analytics',
    description: 'An exploratory data analysis project using SQL to analyze COVID-19 data, with intense focus on regional trends, casualty rates, and country-level health metrics.',
    techStack: ['SQL', 'Data Analysis', 'EDA'],
    links: [
      { label: 'Source', url: 'https://github.com/kevsila/Kenya-Covid-Data-Exploration', type: 'github' }
    ],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'KevSilaDesigns',
    category: 'UI/UX Design',
    description: 'A design portfolio / landing page showcasing visual design, front-end presentation, and personal branding work with high-fidelity mockups.',
    techStack: ['TypeScript', 'Front-End Design', 'UI', 'Figma'],
    links: [
      { label: 'Source', url: 'https://github.com/KevSila/KevSilaDesigns', type: 'github' },
      { label: 'Live Showcase', url: 'https://kevsiladesigns.netlify.app', type: 'live' }
    ],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'KevSila-Books-Landing-Page',
    category: 'Landing Page & Publications',
    description: 'A modern landing page designed to showcase books, author identity, and high-conversion publishing presence with elegant typography.',
    techStack: ['TypeScript', 'Landing Page', 'UI/UX'],
    links: [
      { label: 'Source', url: 'https://github.com/KevSila/KevSila-Books-Landing-Page', type: 'github' },
      { label: 'Live Showcase', url: 'https://kevsilabooks.netlify.app', type: 'live' }
    ],
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800'
  }
];

export const PUBLICATIONS = [
  {
    title: 'Attention by Design',
    category: 'Psychology & Social Analysis',
    description: 'An in-depth book/project exploring psychology, attention, digital behavior, and social analysis, outlining how digital economies shape human agency.',
    url: 'https://kevsilabooks.netlify.app'
  },
  {
    title: 'The Firelit Mind',
    category: 'Culture & Philosophy',
    description: 'A collection of strategic essays on culture, reflection, practical wisdom, and bridging traditional insight with contemporary leadership hurdles.',
    url: 'https://kevsilabooks.netlify.app'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Sc. in Mathematics and Computer Science',
    institution: 'Kenyatta University (Nairobi, Kenya)',
    year: 'Graduated July 2023',
    grade: 'Second Class Honors',
    description: 'Focus: Algorithmic Logic, Database Architecture, Linear Algebra, Calculus.'
  },
  {
    degree: 'Secondary Education (KCSE)',
    institution: 'Murang\'a High School',
    year: 'Graduated Dec 2015',
    grade: 'A- (Minus)',
    description: 'Strong foundation in logical sciences and mathematical reasoning.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'B.Sc. Mathematics and Computer Science',
    issuer: 'Kenyatta University',
    year: '2023'
  },
  {
    title: 'Cisco Certified Network Associate (CCNA) Routing & Switching',
    issuer: 'Cisco',
    year: '2019'
  },
  {
    title: 'Cisco Cybersecurity Essentials',
    issuer: 'Cisco',
    year: '2020'
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
    title: 'SQL for Data Analysis',
    issuer: 'Udacity / LinkedIn',
    year: '2022'
  },
  {
    title: 'Power BI Dashboard Visualization',
    issuer: 'Microsoft / Coursera',
    year: '2023'
  },
  {
    title: 'Google Analytics Individual Qualification',
    issuer: 'Google',
    year: '2023'
  },
  {
    title: 'TRREE Research Ethics',
    issuer: 'TRREE.org',
    year: '2024'
  },
  {
    title: 'ICDL Profile Certificate',
    issuer: 'ICDL Africa',
    year: '2016'
  },
  {
    title: 'Business Analysis Foundations',
    issuer: 'LinkedIn Learning',
    year: '2022'
  },
  {
    title: 'Agile Requirements Foundations',
    issuer: 'LinkedIn Learning',
    year: '2022'
  }
];

export const CONTACT_INFO = {
  email: 'kevinsila100@gmail.com',
  phone: '+254 717-578394',
  location: 'Nairobi, Kenya (EAT – UTC+3)',
  linkedin: 'https://linkedin.com/in/kevin-sila-9143b618a',
  github: 'https://github.com/KevSila',
  whatsapp: '+254717578394',
  portfolio: 'https://kevsilaportfolio.netlify.app',
  authorHub: 'https://kevsilabooks.netlify.app',
  designPortfolio: 'https://kevsiladesigns.netlify.app'
};
