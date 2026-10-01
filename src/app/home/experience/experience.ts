import { Component, inject, input } from '@angular/core';
import { Experience as ExperienceItem } from '../../data/experience';
import { I18n } from '../../shared/i18n/i18n';
import { SectionHeader } from '../../shared/ui/section-header/section-header';
import { TimelineItem } from './timeline-item/timeline-item';

@Component({
  selector: 'app-experience',
  imports: [SectionHeader, TimelineItem],
  styleUrl: './experience.scss',
  templateUrl: './experience.html',
})
export class Experience {
  protected readonly strings = inject(I18n).strings;

  readonly items = input<readonly ExperienceItem[] | undefined>();

  protected readonly placeholders = [0, 1];
}
