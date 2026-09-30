import { Component, input } from '@angular/core';
import { EducationItem } from '../../data/education';
import { SectionHeader } from '../../shared/ui/section-header/section-header';
import { EducationCard } from './education-card/education-card';

@Component({
  selector: 'app-education',
  imports: [SectionHeader, EducationCard],
  styleUrl: './education.scss',
  templateUrl: './education.html',
})
export class Education {
  readonly items = input<readonly EducationItem[] | undefined>();

  protected readonly placeholders = [0, 1];
}
