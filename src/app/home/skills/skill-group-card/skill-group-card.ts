import { Component, computed, input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { SkillGroup } from '../../../data/skill';
import { Skeleton } from '../../../shared/ui/skeleton/skeleton';

@Component({
  selector: 'app-skill-group-card',
  imports: [MatChipsModule, Skeleton],
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
  readonly group = input<SkillGroup | undefined>();
  // Drives the skeleton layout (large vs outlined) before data arrives.
  readonly fallbackTone = input<SkillGroup['tone']>('primary');

  protected readonly tone = computed(() => this.group()?.tone ?? this.fallbackTone());
  protected readonly isLarge = computed(() => this.tone() !== 'outlined');

  protected readonly placeholders = [0, 1, 2, 3, 4];
}
