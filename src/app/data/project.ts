import { Stat } from './stat';

export type ProjectCategory = 'embedded' | 'web' | 'machine-learning' | 'robotics';

// Order of the filter chips. Display labels are localised in the i18n string table.
export const PROJECT_CATEGORIES: readonly ProjectCategory[] = [
  'embedded',
  'web',
  'machine-learning',
  'robotics',
];

export type ProjectStatus = 'completed' | 'in-progress';

export interface ProjectLink {
  readonly label: string;
  readonly url: string;
}

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly categories: readonly ProjectCategory[];
  readonly status: ProjectStatus;
  readonly featured: boolean;
  readonly context: string; // e.g. 'Final degree project · 2023'
  readonly origin: string; // e.g. 'Personal project · 2026'
  readonly metrics: readonly Stat[];
  readonly highlight?: string; // mono line on the card (protocols, key metric)
  readonly stack: readonly string[];
  readonly image?: { readonly src: string; readonly alt: string };
  readonly hasCaseStudy: boolean;
  readonly links: readonly ProjectLink[]; // Report, Code, Schematics…
}
