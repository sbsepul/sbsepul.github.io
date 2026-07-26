export type ProjectStatus = 'Active' | 'Open source' | 'Research';
export type ProjectCategory = 'Products' | 'AI Tooling' | 'Research';
export type AccentColor = 'emerald' | 'violet' | 'amber' | 'rose' | 'sky';

export interface Project {
  title: string;
  description: string;
  impact: string;
  category: ProjectCategory;
  status: ProjectStatus;
  icon: string;
  logo?: string;
  accentColor: AccentColor;
  tags: string[];
  href: string;
  repo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Kibura',
    description:
      'Web platform with secure login for families to manage clinical health data: blood pressure, glucose and insulin records.',
    impact:
      'Built for family care coordination with multi-patient tracking, daily summaries, trend charts, Excel export and an optional Telegram bot.',
    category: 'Products',
    status: 'Active',
    icon: '+',
    logo: '/kibura-logo.png',
    accentColor: 'rose',
    tags: [],
    href: 'https://health-trackerweb-production.up.railway.app/login',
    featured: true,
  },
  {
    title: 'Dream Home',
    description:
      'Mortgage and property analysis app for Chilean home buyers comparing affordability, UF values and candidate properties.',
    impact:
      'Combines financial capacity simulation, property management, geocoding, maps, quotations and export workflows for real buying decisions.',
    category: 'Products',
    status: 'Active',
    icon: 'DH',
    accentColor: 'emerald',
    tags: [],
    href: 'https://dream-home-pi.vercel.app/',
    featured: true,
  },
  {
    title: 'AI Memory Vault',
    description:
      'Personal database for AI coding history across tools such as Claude Code and Codex CLI.',
    impact:
      'Extracts, normalizes, searches, exports, backs up and restores agent sessions so engineering context remains portable.',
    category: 'AI Tooling',
    status: 'Open source',
    icon: 'AI',
    accentColor: 'sky',
    tags: [],
    href: 'https://github.com/sbsepul/ai-memory-vault',
    repo: 'https://github.com/sbsepul/ai-memory-vault',
    featured: true,
  },
  {
    title: 'Repetitive Patterns Dataset',
    description:
      'Dataset and research work for detecting and segmenting repetitive patterns on ancient Peruvian vessels.',
    impact:
      'Published in ACM Journal on Computing and Cultural Heritage after applied Vision AI research with annotated 2D and 3D data.',
    category: 'Research',
    status: 'Research',
    icon: 'CV',
    accentColor: 'violet',
    tags: [],
    href: 'https://github.com/sbsepul/Repetitive-Archetypes-Patterns-Dataset',
    repo: 'https://github.com/sbsepul/Repetitive-Archetypes-Patterns-Dataset',
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectCategories: ProjectCategory[] = [
  'Products',
  'AI Tooling',
  'Research',
];
