import { TechIconName } from '../shared/icons/tech-icons';

export type SkillGroupTone = 'primary' | 'tertiary' | 'outlined';

export interface SkillItem {
  readonly label: string;
  readonly icon: TechIconName | null; // technology logo, rendered before the label
}

export interface SkillGroup {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string | null;
  readonly glyph: string | null; // 'HW', '</>'
  readonly tone: SkillGroupTone;
  readonly items: readonly SkillItem[];
}
