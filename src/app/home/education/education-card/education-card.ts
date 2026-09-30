import { Component, computed, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EducationItem } from '../../../data/education';
import { IconName } from '../../../shared/icons/icons';
import { Skeleton } from '../../../shared/ui/skeleton/skeleton';

@Component({
  selector: 'app-education-card',
  imports: [MatButtonModule, MatIconModule, Skeleton],
  styleUrl: './education-card.scss',
  templateUrl: './education-card.html',
  host: {
    '[class.card--publication]': "item()?.kind === 'publication'",
  },
})
export class EducationCard {
  readonly item = input<EducationItem | undefined>();

  protected readonly icon = computed<IconName>(() =>
    this.item()?.kind === 'publication' ? 'document' : 'school',
  );
}
