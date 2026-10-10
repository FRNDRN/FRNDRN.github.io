import { Component, computed, inject, input, InputSignal, Signal } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { SkillGroup, SkillGroupTone } from '../../../data/skill';
import { I18n } from '../../../shared/i18n/i18n';
import { UiStrings } from '../../../shared/i18n/ui-strings';
import { Skeleton } from '../../../shared/ui/skeleton/skeleton';

@Component({
  selector: 'app-skill-group-card',
  imports: [MatChipsModule, MatIconModule, Skeleton],
  styleUrl: './skill-group-card.scss',
  templateUrl: './skill-group-card.html',
  host: {
    '[class.card--large]': 'isLarge()',
    '[class.card--outlined]': "tone() === 'outlined'",
    '[class.card--primary]': "tone() === 'primary'",
    '[class.card--tertiary]': "tone() === 'tertiary'",
  },
})
export class SkillGroupCard {
  // Inputs
  public readonly group: InputSignal<SkillGroup | undefined> = input<SkillGroup | undefined>();
  // Drives the skeleton layout (large vs outlined) before data arrives.
  public readonly fallbackTone: InputSignal<SkillGroupTone> = input<SkillGroupTone>('primary');

  // View state
  protected readonly strings: Signal<UiStrings> = inject(I18n).strings;
  protected readonly tone: Signal<SkillGroupTone> = computed(
    () => this.group()?.tone ?? this.fallbackTone(),
  );
  protected readonly isLarge: Signal<boolean> = computed(() => this.tone() !== 'outlined');
  protected readonly placeholders: readonly number[] = [0, 1, 2, 3, 4];
}
