import { ProjectLink } from './project';

export type EducationKind = 'degree' | 'publication';

export interface EducationItem {
  readonly id: string;
  readonly kind: EducationKind;
  readonly meta: string; // '2017 — 2023 · 6-year degree'
  readonly title: string;
  readonly institution: string | null;
  readonly link: ProjectLink | null;
}
