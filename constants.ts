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
  { name: 'Services', href: '#services' },
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
  title: 'Systems Builder • ICT & Digital Transformation Consultant • Research & Data Professional',
  heroStatement: 'Building practical systems that connect research, operations, data, and software.',
  heroDescription: 'I work across ICT, operational research, data engineering, business analysis, software development, and AI-assisted workflows. I help organisations turn fragmented information and manual processes into tested systems that support clearer decisions, dependable delivery, and useful operational intelligence.',
  philosophyQuote: 'Systemic clarity follows the subtraction of the unnecessary.',
  philosophySupport: 'I believe technology should simplify complexity, research should inform action, and leadership should empower people. Whether I am building AI systems, coordinating national surveys, improving business workflows, or leading community initiatives, my focus remains the same: create systems that help people make better decisions.',
  aboutText1: 'I am a multidisciplinary ICT, research, data, and operations professional with a B.Sc. Mathematics and Computer Science from Kenyatta University. My work spans public-health research, field coordination, data engineering, business systems, software development, AI-assisted workflows, operational reporting, and technical documentation.',
  aboutText2: 'I have supported national research initiatives, coordinated field teams, built reusable data-collection and validation workflows, developed full-stack business tools, and translated operational problems into documented systems. My career is connected by one theme: building practical systems that turn complexity into clarity.',
  coreIdentity: [
    'ICT and digital systems practitioner',
    'Research coordinator',
    'Software and business-systems builder',
    'Website and digital media support professional',
    'Digital transformation practitioner',
    'Community leader',
    'Technical communicator',
    'Operations and analytics problem-solver'
  ]
};

export const METRICS = [
  { value: 'National', label: 'Research Coordination', detail: 'Public-health and expenditure research operations' },
  { value: 'Multi-site', label: 'Field Operations', detail: 'Team coordination, QA, ethics, and daily reporting' },
  { value: 'Full-stack', label: 'Business Systems', detail: 'Operational data, APIs, workflows, and owner tools' },
  { value: 'Cross-platform', label: 'Data Engineering', detail: 'Browser automation, validation, recovery, and CI' },
  { value: 'QA-led', label: 'Product Development', detail: 'Typed models, regression tests, and clear boundaries' },
  { value: 'Human-led', label: 'AI Workflows', detail: 'Bounded enhancement with review and fallback paths' },
];

export const CATEGORIZED_SKILLS = [
  {
    category: 'ICT & Website Support',
    skills: [
      'WordPress', 'Divi', 'Elementor', 'Google Sites', 'Wix', 'Netlify', 
      'Website Maintenance', 'SEO', 'Google Analytics', 'Search Console', 
      'Domain/Hosting Basics', 'Google Workspace', 'Forms', 'Sheets', 'Drive'
    ]
  },
  {
    category: 'Software & Business Systems',
    skills: [
      'Python', 'TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma',
      'REST APIs', 'Selenium', 'Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'Vite',
      'Netlify', 'Railway', 'Relational Data Modelling', 'Testing & QA'
    ]
  },
  {
    category: 'Digital Media & Campaigns',
    skills: [
      'Digital Media Strategy', 'Content Calendars', 'Canva', 'Social Media Graphics', 
      'Google Ads', 'Meta Ads', 'Facebook Ads Manager', 'Campaign Reporting', 
      'Google Business Profile', 'SEO Content'
    ]
  },
  {
    category: 'AI & Automation',
    skills: [
      'Google AI Studio', 'Gemini API', 'ChatGPT', 'AI-assisted Development', 
      'Codex-style Coding Support', 'AI Workflows', 'WhatsApp Automation Concepts', 
      'CRM Automation', 'Reporting Automation', 'Google Apps Script', 'Make/n8n Concepts', 'Airtable'
    ]
  },
  {
    category: 'Research & Data',
    skills: [
      'ODK', 'Kobo/ODK-style Tools', 'Google Forms', 'Microsoft Forms', 
      'Qualitative Research', 'Quantitative Research', 'Mixed Methods', 
      'Data Collection', 'Data Cleaning', 'Data Validation', 'MEL/M&E', 'Excel', 'SQL', 
      'Power BI', 'Looker Studio', 'Tableau'
    ]
  },
  {
    category: 'Strategy & Documentation',
    skills: [
      'Concept Notes', 'Project Proposals', 'Budgets', 'Work Plans', 
      'Monitoring Reports', 'Research Reports', 'Technical Documentation', 
      'Training Materials', 'SOPs', 'Digital Strategy Documents', 'Brand Style Guides'
    ]
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
        details: 'Selected through a competitive national recruitment process for a baseline assessment examining HIV & TB Prevention, Sexual & Reproductive Health Services, Human Rights, and Gender Needs among incarcerated populations in Kenya. Served as Rift Valley Site Coordinator across Nakuru, Eldoret, and Kitale, supervising 8 Research Assistants and coordinating operations, stakeholder engagement, quality assurance, ethical compliance, and daily reporting.',
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
    id: 'ict-websites-media',
    title: 'ICT, Websites & Digital Media',
    description: 'I support organizations with practical ICT services, websites, digital media, paid campaigns, communication assets, and digital tools that improve visibility, engagement, lead capture, reporting, and service delivery.',
    cards: [
      {
        title: 'Website & Digital Platform Support',
        role: 'Website & Digital Platform Assistant',
        organizations: 'Christine Campbell Rapin',
        year: '2025',
        details: 'Managed and updated WordPress website assets using Divi, supported page edits, CSS fixes, mobile responsiveness improvements, SEO checks, site audits, and funnel integrations through GoHighLevel/Actionera. Helped improve the connection between website presence, lead capture, and user journey.',
        tags: ['WordPress', 'Divi', 'CSS', 'SEO', 'Website Maintenance', 'Mobile Responsiveness', 'GoHighLevel', 'Lead Funnels', 'Digital Platform Support']
      },
      {
        title: 'Website, SEO & Digital Presence Projects',
        role: 'Developer & Digital Strategist',
        organizations: 'Independent practice → Silatech Growth Partners',
        year: '2024 - Present',
        details: 'Built and maintained websites and digital-presence projects through independent freelance work from 2024, continuing the practice through Silatech Growth Partners after its formal registration as a sole proprietorship in 2026. Applied SEO, responsive design, analytics thinking, and content structure to support visibility and lead generation.',
        tags: ['Website Development', 'Landing Pages', 'SEO', 'Google Sites', 'Wix', 'WordPress', 'Netlify', 'Responsive Design', 'Portfolio Websites', 'Analytics']
      },
      {
        title: 'Digital Media & Paid Campaign Support',
        role: 'Digital Media Strategist / Campaign Support',
        organizations: 'Personal projects and independent practice → Silatech Growth Partners',
        year: '2023 - Present',
        details: 'Developed personal digital-media capability from 2023, delivered independent freelance campaign work from 2024, and continued the practice through Silatech Growth Partners after formal registration in 2026. Work includes social media planning, Google Ads, Meta Ads, campaign tracking, reporting, content calendars, style guides, and communication assets.',
        tags: ['Digital Media Strategy', 'Google Ads', 'Meta Ads', 'Facebook Ads Manager', 'Campaign Reporting', 'Content Calendars', 'Social Media Strategy', 'Google Analytics', 'SEO', 'Communication Assets']
      },
      {
        title: 'Canva-Based Communication Design',
        role: 'Design Support / Communication Assets',
        organizations: 'Personal projects and independent practice → Silatech Growth Partners',
        year: 'Active',
        details: 'Create and adapt Canva-based visual communication assets through personal projects, independent freelance work, and the current Silatech Growth Partners practice. Outputs include posters, flyers, social media graphics, presentation decks, infographics, and campaign materials.',
        tags: ['Canva', 'Posters', 'Flyers', 'Social Media Graphics', 'Presentation Decks', 'Infographics', 'Communication Design', 'Brand Assets', 'Campaign Materials']
      }
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    description: 'I design AI-assisted workflows with structured inputs, deterministic controls, human review, and clear fallback paths.',
    cards: [
      {
        title: 'BeeEPiC WISDOM Delegation Mapper',
        role: 'Business systems and implementation contributor',
        organizations: 'Private client work',
        year: '2026',
        details: 'Contributed to a multi-step decision-support workflow that turns business context, delegation goals, bottlenecks, tasks, and current systems into structured role, workflow, systems, and KPI recommendations. The implementation combines deterministic logic with bounded Gemini enhancement, rules-based fallback, human review, structured storage, and notification controls.',
        tags: ['Business Analysis', 'Workflow Design', 'Decision Support', 'Gemini', 'Human Review', 'Regression Testing']
      },
      {
        title: 'Asili Operations Automation',
        role: 'Full-stack systems development',
        organizations: 'Asili / Silatech Growth Partners',
        year: '2026',
        details: 'Implemented API-backed order capture, idempotent processing, transactional stock updates, lifecycle notifications, payment records, and owner reporting so customer-facing activity produces dependable operational records.',
        tags: ['Workflow Automation', 'REST APIs', 'Structured Data', 'Notifications', 'Idempotency', 'QA']
      },
      {
        title: 'AI Job Application Assistant',
        role: 'Private AI-assisted career application workspace',
        organizations: 'Private repository',
        year: '2024',
        details: 'Analyses job descriptions and employer requirements against verified career evidence to create editable CVs, cover letters, and application responses, with document extraction, gap analysis, claim checks, ATS estimates, and DOCX/PDF export.',
        tags: ['React', 'TypeScript', 'Gemini API', 'Schema Validation', 'ATS', 'DOCX / PDF Export']
      }
    ]
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'I connect customer-facing tools, operational records, workflows, and reporting into practical business systems.',
    cards: [
      {
        title: 'Asili Commerce & Operations Platform',
        role: 'Full-stack systems development',
        organizations: 'Asili / Silatech Growth Partners',
        year: '2026',
        details: 'Evolved a product website into a connected commerce and owner-operations system covering orders, customers, inventory movements, payment records, manual sales, notifications, and sales reporting. The sample batch passport remains a clearly labelled demonstration while richer traceability stays on the roadmap.',
        tags: ['Business Systems', 'React', 'Express', 'PostgreSQL', 'Prisma', 'Operational Reporting']
      },
      {
        title: 'Maisha Youth Movement National Digital Operations',
        role: 'Information Technology Lead',
        organizations: 'Maisha Youth Movement (National)',
        year: 'March 2022 – May 2025',
        details: 'Supported national digital operations across 47 county chapters through Google Workspace adoption, reporting systems, membership data-collection forms, cloud file structures, website prototypes, and workflow documentation.',
        tags: ['Google Workspace', 'Digital Transformation', 'Figma', 'Reporting Systems', 'Data Collection', 'Workflows']
      },
      {
        title: 'Christine Campbell Rapin Digital Platform Support',
        role: 'Website & Digital Platform Assistant',
        organizations: 'Christine Campbell Rapin — Business Mentor & Strategist',
        year: '2025',
        details: 'Managed WordPress infrastructure using Divi. Integrated GoHighLevel / Actionera lead capture and conversion funnels. Performed SEO audits, mobile responsiveness checks, CSS fixes, and website optimization to drive user journey from lead capture to conversion.',
        tags: ['WordPress', 'Divi', 'GoHighLevel', 'SEO Audits', 'CSS Fixes', 'Website Optimization', 'Lead Capture']
      }
    ]
  },
  {
    id: 'community-leadership',
    title: 'Community Leadership & Youth Development',
    description: 'I have led youth-focused programs, community initiatives, mentorship, stakeholder engagement, and strategic documentation.',
    cards: [
      {
        title: 'Maisha Youth Movement — Machakos County Chapter',
        role: 'Chairperson',
        organizations: 'Maisha Youth Movement',
        year: 'December 2020 – May 2025',
        details: 'Led county-level youth health awareness and community engagement initiatives. Developed work plans, budgets, event strategies, proposals, concept notes, and reports while coordinating partners and youth networks.',
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
        title: 'Residential Market Intelligence & Research Operations',
        role: 'Research operations and systems support',
        organizations: 'Home Builders Research',
        year: '2026',
        details: 'Supported public-source county-record research, subdivision and builder review, exception investigation, geographic and property validation, structured tracking, and documentation. Recurring research work informed a reusable deed-data platform with explicit validation and handover boundaries.',
        tags: ['Market Research', 'County Records', 'Data Validation', 'Exception Review', 'Structured Trackers', 'Documentation']
      },
      {
        title: 'Equavo Limited Operational Systems',
        role: 'Assistant Manager & IT Associate',
        organizations: 'Equavo Limited (Athi River, Machakos)',
        year: 'January 2024 – January 2025',
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
    impact: 'Managed Rift Valley site data collection, supervised 8 Research Assistants, navigated administrative coordination, and maintained strict ethical and quality standards within correctional environments.',
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
    title: 'Maisha Youth Movement National Surveys & Digital Operations',
    role: 'Information Technology Lead',
    year: 'March 2022 – May 2025',
    scope: 'National youth-led research assessing health, socioeconomic development, and policy alignment across a distributed chapter network.',
    impact: 'Designed membership data collection systems and implemented Google Cloud services for secure reporting across 47 county chapters. Coordinated nationwide qualitative & quantitative surveys, informing county/national work plans and budgets.',
    toolsMethods: ['ODK (Open Data Kit)', 'Cloud Infrastructure Integration', 'Quantitative Survey Design', 'Figma Prototyping'],
    tags: ['Survey Operations', 'Youth Advocacy', 'Cloud Infrastructure', 'Digital Forms']
  },
  {
    title: 'UNAIDS Community Rights Survey',
    role: 'Research Assistant & Cluster Team Lead (Cluster 2)',
    year: '2024',
    scope: 'Rights, gender, and HIV response assessment in Central Kenya (Nairobi, Kajiado, Embu, Kitui).',
    impact: 'Supervised primary field interviews, facilitated focus group discussions (FGDs) with vulnerable groups, and maintained strict ethical and data-quality protocols.',
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
      'Supervised 8 Research Assistants executing survey protocols across Nakuru, Eldoret, and Kitale.',
      'Oversaw stakeholder field operations, ethical conformance, technical data validation, and daily data reporting chains.'
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
    role: 'Founder & Digital Strategist',
    company: 'Silatech Growth Partners',
    description: [
      'Built and delivered independent freelance digital, systems, website, campaign, and automation work from 2024, later formalising the practice as Silatech Growth Partners, a registered sole proprietorship, in 2026.',
      'Supported paid campaign setup, tracking, and reporting across Meta and Google Ads, including campaign and project work for Zenfit.',
      'Work spans business systems, AI-assisted workflows, websites, digital strategy, operational intelligence, and client delivery.'
    ],
    link: { label: 'View GitHub Profile', url: 'https://github.com/kevsila' }
  },
  {
    year: '2025',
    role: 'Website & Digital Platform Assistant',
    company: 'Christine Campbell Rapin',
    description: [
      'Maintained business WordPress assets through Divi, responsive page updates, performance checks, and content support.',
      'Configured automated lead workflows and strategic funnels inside GoHighLevel / Actionera platforms.',
      'Addressed frontend CSS display issues and implemented SEO improvements verified through PageSpeed Audits.'
    ]
  },
  {
    year: 'March 2022 – May 2025',
    role: 'Information Technology Lead',
    company: 'Maisha Youth Movement (National)',
    description: [
      'Supported national digital operations across 47 county chapters, including Google Workspace and Google Cloud migrations for secure inter-chapter document repositories.',
      'Developed website sitemaps and Figma wireframes to coordinate the national website development budget.',
      'Developed ODK frameworks for nationwide qualitative and quantitative youth research, supporting administrative work plans.'
    ]
  },
  {
    year: 'December 2020 – May 2025',
    role: 'Chairperson',
    company: 'Maisha Youth Movement — Machakos County Chapter',
    description: [
      'Led county-level community health awareness, mental-health, and youth engagement initiatives.',
      'Drafted comprehensive county strategic work plans, annual budgets, proposal briefs, and milestone reporting documents.',
      'Engaged with local public health officials and cross-county youth networks to strengthen service linkages.'
    ]
  },
  {
    year: 'January 2024 – January 2025',
    role: 'Assistant Manager & IT Associate',
    company: 'Equavo Limited',
    description: [
      'Coordinated daily operations and wage payouts for Athi River avocado oil centrifugation processing facility.',
      'Built Excel trackers covering FFA levels, moisture loss, machine-parts inventory, production records, petty cash, and wages.',
      'Improved the consistency of production logging and operational reporting through structured records and review routines.'
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
    year: 'January 2020 – December 2022',
    role: 'Online Academic Tutor',
    company: 'Course Hero',
    description: [
      'Tutored university students in Mathematics, Computer Science, and English through structured written explanations.',
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
    title: 'Home Builders Research — County Deed Data Platform',
    category: 'Data Engineering & Research Automation',
    description: 'A reusable Python and Selenium platform for collecting and validating county deed records. Its completed Greenville reference adapter supports reliable pagination, resumable enrichment, QC checks, immutable exports, and recovery-ready engineering handover.',
    techStack: ['Python', 'Selenium', 'Data Validation', 'Recovery', 'GitHub Actions', 'Windows / Linux'],
    status: 'Private client implementation · Reference adapter and engineering handover complete',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'BeeEPiC WISDOM Delegation Mapper',
    category: 'Business Systems & AI Decision Support',
    description: 'A structured business diagnostic that turns business context, bottlenecks, and delegation goals into practical role, workflow, systems, and KPI recommendations. It combines deterministic logic with bounded Gemini enhancement, rules fallback, human review, and structured submission handling.',
    techStack: ['Business Analysis', 'React', 'Google Apps Script', 'Gemini', 'Structured Data', 'Regression Testing'],
    status: 'Private client work · Sanitised case study',
    links: [
      { label: 'Case Study', url: 'https://kevsilaservices.netlify.app/portfolio/beeepic-wisdom-mapper', type: 'live' }
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Asili — Commerce & Business Operations System',
    category: 'Full-Stack Business Systems',
    description: 'An API-backed commerce and owner-operations system for a Kenyan honey brand. It connects ordering, customer and product records, inventory movements, payments, manual sales, lifecycle notifications, and sales reporting; the batch passport remains a labelled demonstration.',
    techStack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'REST APIs'],
    status: 'Working system · Traceability demonstration clearly labelled',
    links: [
      { label: 'Live Site', url: 'https://asilii.netlify.app/', type: 'live' },
      { label: 'Source', url: 'https://github.com/KevSila/Asili-Eco-wellness-Brand', type: 'github' },
      { label: 'Case Study', url: 'https://kevsilaservices.netlify.app/portfolio/asili-business-helper', type: 'live' }
    ],
    image: 'https://asilii.netlify.app/images/asili-raw-honey-jar.webp'
  },
  {
    title: 'Stawi — Member & Coach Fitness Platform',
    category: 'Product R&D & Application Engineering',
    description: 'Designing and building a member-centred, trainer-connected fitness platform linking programmes, workout execution, progress evidence, and coach visibility. Alpha 0.8.0 includes member and coach workspaces, workout and programme flows, device-local session history, an exercise catalogue, and an installable PWA.',
    techStack: ['React', 'TypeScript', 'React Router', 'IndexedDB', 'PWA', 'CSS Modules'],
    status: 'Product R&D · Interactive Alpha 0.8.0',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Silatech Growth Partners',
    category: 'Business Systems & Digital Transformation',
    description: 'My founder-led consulting platform, formalised as a registered sole proprietorship in 2026 after freelance work began in 2024. Silatech builds practical business systems, AI-assisted workflows, operational reporting, and digital solutions for SMEs, NGOs, and growing organisations.',
    techStack: ['Workflow Design', 'Business Systems', 'Operational Intelligence', 'AI-assisted Workflows', 'Research Support', 'Netlify'],
    links: [
      { label: 'Live Site', url: 'https://kevsilaservices.netlify.app', type: 'live' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'AI Job Application Assistant',
    category: 'AI & Productivity',
    description: 'A private AI-assisted career workspace that analyses job descriptions and employer requirements, maps them against verified career evidence, and produces editable ATS-focused CVs, cover letters, and application responses. It also supports document extraction, gap analysis, claim checks, and DOCX/PDF export.',
    techStack: ['React', 'TypeScript', 'Gemini API', 'Schema Validation', 'ATS Analysis', 'DOCX / PDF Export'],
    status: 'Private AI-assisted career application workspace',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800'
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
    degree: 'B.Sc. Mathematics and Computer Science',
    institution: 'Kenyatta University (Nairobi, Kenya)',
    year: 'Graduated July 2023',
    grade: 'Second Class Honors',
    description: 'Focus: Algorithmic Logic, Database Architecture, Linear Algebra, Calculus.'
  },
  {
    degree: 'Secondary Education (KCSE)',
    institution: 'Murang\'a High School',
    year: 'KCSE completed December 2015',
    grade: 'A-',
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
