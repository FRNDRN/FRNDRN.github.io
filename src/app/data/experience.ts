export interface Experience {
  readonly id: string;
  readonly role: string;
  readonly organization: string;
  readonly team?: string;
  readonly location: string;
  readonly start: string; // 'YYYY-MM'
  readonly end?: string; // 'YYYY-MM'; absent = current
  readonly highlights: readonly string[];
  readonly moreHighlights?: readonly string[]; // shown under "Show all responsibilities"
  readonly stack: readonly string[];
}
