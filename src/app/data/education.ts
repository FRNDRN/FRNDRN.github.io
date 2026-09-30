import { ProjectLink } from './project';

export interface EducationItem {
  readonly id: string;
  readonly kind: 'degree' | 'publication';
  readonly meta: string; // '2017 — 2023 · 6-year degree'
  readonly title: string;
  readonly institution?: string;
  readonly link?: ProjectLink;
}
