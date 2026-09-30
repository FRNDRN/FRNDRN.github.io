import { Component, input } from '@angular/core';
import { Experience as ExperienceItem } from '../../data/experience';
import { SectionHeader } from '../../shared/ui/section-header/section-header';
import { TimelineItem } from './timeline-item/timeline-item';

@Component({
  selector: 'app-experience',
  imports: [SectionHeader, TimelineItem],
  styleUrl: './experience.scss',
  templateUrl: './experience.html',
})
export class Experience {
  readonly items = input<readonly ExperienceItem[] | undefined>();

  protected readonly placeholders = [0, 1];
}
