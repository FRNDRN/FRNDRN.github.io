import { Component, computed, inject, input, InputSignal, Signal } from '@angular/core';
import { SkillGroup } from '../../data/skill';
import { I18n } from '../../shared/i18n/i18n';
import { UiStrings } from '../../shared/i18n/ui-strings';
import { SectionHeader } from '../../shared/ui/section-header/section-header';
import { SkillGroupCard } from './skill-group-card/skill-group-card';

@Component({
  selector: 'app-skills',
  imports: [SectionHeader, SkillGroupCard],
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {
  // Inputs
  public readonly groups: InputSignal<readonly SkillGroup[] | undefined> = input<
    readonly SkillGroup[] | undefined
  >();

  // View state
  protected readonly strings: Signal<UiStrings> = inject(I18n).strings;
  protected readonly largeGroups: Signal<readonly SkillGroup[]> = computed(
    () => this.groups()?.filter((group) => group.tone !== 'outlined') ?? [],
  );
  protected readonly outlinedGroups: Signal<readonly SkillGroup[]> = computed(
    () => this.groups()?.filter((group) => group.tone === 'outlined') ?? [],
  );
}
