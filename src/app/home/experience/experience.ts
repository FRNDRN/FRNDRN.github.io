import { Component, inject, input, InputSignal, Signal } from '@angular/core';
import { Experience as ExperienceItem } from '../../data/experience';
import { I18n } from '../../shared/i18n/i18n';
import { UiStrings } from '../../shared/i18n/ui-strings';
import { SectionHeader } from '../../shared/ui/section-header/section-header';
import { TimelineItem } from './timeline-item/timeline-item';

@Component({
  selector: 'app-experience',
  imports: [SectionHeader, TimelineItem],
  styleUrl: './experience.scss',
  templateUrl: './experience.html',
})
export class Experience {
  // Inputs
  public readonly items: InputSignal<readonly ExperienceItem[] | undefined> = input<
    readonly ExperienceItem[] | undefined
  >();

  // View state
  protected readonly strings: Signal<UiStrings> = inject(I18n).strings;
  protected readonly placeholders: readonly number[] = [0, 1];
}
