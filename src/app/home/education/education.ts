import { Component, inject, input } from '@angular/core';
import { EducationItem } from '../../data/education';
import { I18n } from '../../shared/i18n/i18n';
import { SectionHeader } from '../../shared/ui/section-header/section-header';
import { EducationCard } from './education-card/education-card';

@Component({
  selector: 'app-education',
  imports: [SectionHeader, EducationCard],
  styleUrl: './education.scss',
  templateUrl: './education.html',
})
export class Education {
  protected readonly strings = inject(I18n).strings;

  readonly items = input<readonly EducationItem[] | undefined>();

  protected readonly placeholders = [0, 1];
}
