import { Component, inject, input, InputSignal, Signal } from '@angular/core';
import { EducationItem } from '../../data/education';
import { I18n } from '../../shared/i18n/i18n';
import { UiStrings } from '../../shared/i18n/ui-strings';
import { SectionHeader } from '../../shared/ui/section-header/section-header';
import { EducationCard } from './education-card/education-card';

@Component({
  selector: 'app-education',
  imports: [SectionHeader, EducationCard],
  styleUrl: './education.scss',
  templateUrl: './education.html',
})
export class Education {
  // Inputs
  public readonly items: InputSignal<readonly EducationItem[] | undefined> = input<
    readonly EducationItem[] | undefined
  >();

  // View state
  protected readonly strings: Signal<UiStrings> = inject(I18n).strings;
  protected readonly placeholders: readonly number[] = [0, 1];
}
