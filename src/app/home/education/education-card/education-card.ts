import { Component, computed, inject, input, InputSignal, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EducationItem } from '../../../data/education';
import { IconName } from '../../../shared/icons/icons';
import { I18n } from '../../../shared/i18n/i18n';
import { UiStrings } from '../../../shared/i18n/ui-strings';
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
  // Inputs
  public readonly item: InputSignal<EducationItem | undefined> = input<EducationItem | undefined>();

  // View state
  protected readonly strings: Signal<UiStrings> = inject(I18n).strings;
  protected readonly icon: Signal<IconName> = computed<IconName>(() =>
    this.item()?.kind === 'publication' ? 'document' : 'school',
  );
}
