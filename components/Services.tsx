import React from 'react';
import { motion } from 'motion/react';
import { Globe, Search, Cpu, BarChart3, Megaphone, Users, FileText } from 'lucide-react';

interface ServiceCluster {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  bullets: string[];
}

const Services: React.FC = () => {
  const clusters: ServiceCluster[] = [
    {
      id: 'ict',
      title: 'ICT & Website Support',
      icon: <Globe size={18} />,
      description: 'Practical support for website platforms, SEO optimization, domain integrations, and workspace administration.',
      bullets: [
        'WordPress, Divi, Elementor, and Google Sites layout updates',
        'Netlify static deployments & Wix platform management',
        'SEO audits, setup, and Google Search Console optimization',
        'Digital reporting & data collection forms integration',
        'Domain setups, hosting management, and DNS records configuration',
        'Google Workspace setup, file organization, and cloud storage audits'
      ]
    },
    {
      id: 'research',
      title: 'Research & Data Systems',
      icon: <Search size={18} />,
      description: 'Structured data collection, cleaning, and field-team coordination for public health, demographic, and civil surveys.',
      bullets: [
        'Mobile survey tool scripting using ODK and Kobo Toolbox',
        'Data cleaning, validation, and multi-year data disaggregation',
        'Quantitative, qualitative, and mixed-methods research support',
        'Field team logistics, supervision, and daily progress reporting',
        'Program monitoring and evaluation (M&E) reporting support',
        'Strict ethical data compliance and quality assurance protocols'
      ]
    },
    {
      id: 'ai-automation',
      title: 'AI & Workflow Automation',
      icon: <Cpu size={18} />,
      description: 'Prototyping automated tools, AI workflows, and smart helpers that eliminate repetitive administrative work.',
      bullets: [
        'Custom AI assistant prototypes using Google Gemini API & AI Studio',
        'ChatGPT API integrations and prompt engineering workflows',
        'Google Apps Script automation for Gmail, Calendar, and Sheets',
        'AI-assisted code development and script generation',
        'WhatsApp lead qualification and CRM-lite workflow concepts',
        'Low-cost data synchronisation and automated response pipelines'
      ]
    },
    {
      id: 'bi-operations',
      title: 'Dashboards & Operations',
      icon: <BarChart3 size={18} />,
      description: 'Creating dashboards and internal trackers that give operations managers clear visibility into productivity, costs, and output.',
      bullets: [
        'Looker Studio and Power BI interactive dashboard setup',
        'Advanced Excel trackers (inventory, wages, petty cash, maintenance)',
        'Data consolidation from disjointed sheets and sources',
        'Operational reporting systems and warehouse production tracking',
        'SQL modeling and basic relational database queries'
      ]
    },
    {
      id: 'media-campaigns',
      title: 'Digital Media & Campaigns',
      icon: <Megaphone size={18} />,
      description: 'Communication asset creation, digital planning, and paid campaign tracking for outreach and social programs.',
      bullets: [
        'Canva-based visual design (posters, flyers, social graphics, slide decks)',
        'Content calendar coordination and social media planning',
        'Paid campaign setup and metrics tracking (Google Ads, Meta Ads)',
        'Campaign performance analytics and visibility reporting',
        'Branding assets adaptation and localized campaign materials'
      ]
    },
    {
      id: 'youth-community',
      title: 'Youth & Community Programs',
      icon: <Users size={18} />,
      description: 'Organizing program events, facilitating stakeholder communication, and leading peer advocacy initiatives.',
      bullets: [
        'Youth mobilization, training facilitation, and peer mentorship',
        'Community health awareness and social program execution',
        'Youth networks coordination and partner communications',
        'Strategic coalition building & localized community advocacy'
      ]
    },
    {
      id: 'strategy-docs',
      title: 'Strategy & Documentation',
      icon: <FileText size={18} />,
      description: 'Transforming technical data and program concepts into clear, packaged institutional writing.',
      bullets: [
        'Concept notes, project proposals, and grant writing assistance',
        'Strategic plans, annual work plans, and program budgets development',
        'Standard Operating Procedures (SOPs) and operations manuals',
        'User guides, instruction handbooks, and onboarding manuals',
        'Brand style guides and program communication frameworks'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-primary px-6 border-t border-border/40 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/20 pb-8">
          <div className="space-y-3">
            <h2 className="text-textMuted text-[10px] font-medium uppercase tracking-[0.25em]">Services</h2>
            <h3 className="text-textLight text-3xl md:text-4xl font-semibold tracking-tight">Services & Engagement Areas</h3>
          </div>
          <p className="text-textDim text-xs md:text-sm max-w-sm leading-relaxed opacity-95 font-light">
            Providing practical, structured technical services and coordination support for organizations, businesses, and campaigns.
          </p>
        </div>

        {/* Services Bento-like Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clusters.map((cluster, idx) => (
            <motion.div
              key={cluster.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 bg-secondary hover:bg-accentSoft border border-border/45 rounded-[2px] transition-all duration-300 flex flex-col justify-between group hover:border-border"
            >
              <div className="space-y-5">
                {/* Cluster Header */}
                <div className="flex items-center gap-4 border-b border-border/20 pb-4">
                  <div className="w-9 h-9 rounded-full bg-accentSoft flex items-center justify-center text-textLight border border-border group-hover:border-accent transition-colors">
                    {cluster.icon}
                  </div>
                  <h4 className="text-textLight text-sm font-semibold uppercase tracking-wider">{cluster.title}</h4>
                </div>

                {/* Description */}
                <p className="text-textDim text-xs font-light leading-relaxed">
                  {cluster.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 pt-2">
                  {cluster.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-textDim text-xs font-light leading-relaxed">
                      <span className="w-1 h-1 bg-accent rounded-full mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
