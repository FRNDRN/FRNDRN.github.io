export interface SkillGroup {
  readonly id: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly glyph?: string; // 'HW', '</>'
  readonly tone: 'primary' | 'tertiary' | 'outlined';
  readonly items: readonly string[];
  readonly highlightedItems?: readonly string[]; // tonal chips (instruments)
}
