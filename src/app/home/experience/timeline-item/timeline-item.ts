import { Component, computed, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Experience as ExperienceItem } from '../../../data/experience';
import { I18n } from '../../../shared/i18n/i18n';
import { Badge } from '../../../shared/ui/badge/badge';
import { Skeleton } from '../../../shared/ui/skeleton/skeleton';
import { TagList } from '../../../shared/ui/tag-list/tag-list';

let uid = 0;

@Component({
  selector: 'app-timeline-item',
  imports: [MatButtonModule, MatIconModule, Badge, Skeleton, TagList],
  styleUrl: './timeline-item.scss',
  templateUrl: './timeline-item.html',
})
export class TimelineItem {
  private readonly i18n = inject(I18n);
  protected readonly strings = this.i18n.strings;

  readonly item = input<ExperienceItem | undefined>();

  protected readonly moreId = `experience-more-${uid++}`;

  private readonly showAll = signal(false);
  protected readonly expanded = this.showAll.asReadonly();

  protected readonly isCurrent = computed(() => {
    const it = this.item();
    return !!it && !it.end;
  });

  protected readonly dateRange = computed(() => {
    const it = this.item();
    if (!it) {
      return '';
    }
    const formatter = new Intl.DateTimeFormat(this.i18n.locale(), {
      month: 'short',
      year: 'numeric',
    });
    const format = (value: string): string => {
      const [year, month] = value.split('-').map(Number);
      return formatter.format(new Date(year, (month || 1) - 1, 1));
    };
    const end = it.end ? format(it.end) : this.strings().experience.present;
    return `${format(it.start)} — ${end}`;
  });

  protected toggleResponsibilities(): void {
    this.showAll.update((value) => !value);
  }
}
