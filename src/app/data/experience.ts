import { IconName } from '../shared/icons/icons';

export interface Experience {
  readonly id: string;
  readonly role: string;
  readonly organization: string;
  readonly logo: IconName | null; // organization mark, shown before its name
  readonly team: string | null;
  readonly location: string;
  readonly start: string; // 'YYYY-MM'
  readonly end: string | null; // 'YYYY-MM'; null = current
  readonly summary: string | null; // intro paragraph shown under the title, before the bullets
  readonly highlights: readonly string[];
  readonly moreHighlights: readonly string[]; // shown under "Show all responsibilities"
  readonly stack: readonly string[];
}
