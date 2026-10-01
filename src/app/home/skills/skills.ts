import { Component, computed, inject, input } from '@angular/core';
import { SkillGroup } from '../../data/skill';
import { I18n } from '../../shared/i18n/i18n';
import { SectionHeader } from '../../shared/ui/section-header/section-header';
import { SkillGroupCard } from './skill-group-card/skill-group-card';

@Component({
  selector: 'app-skills',
  imports: [SectionHeader, SkillGroupCard],
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly strings = inject(I18n).strings;

  readonly groups = input<readonly SkillGroup[] | undefined>();

  protected readonly largeGroups = computed(
    () => this.groups()?.filter((group) => group.tone !== 'outlined') ?? [],
  );
  protected readonly outlinedGroups = computed(
    () => this.groups()?.filter((group) => group.tone === 'outlined') ?? [],
  );
}
