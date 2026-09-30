import { Component, computed, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Experience as ExperienceItem } from '../../../data/experience';
import { Badge } from '../../../shared/ui/badge/badge';
import { Skeleton } from '../../../shared/ui/skeleton/skeleton';
import { TagList } from '../../../shared/ui/tag-list/tag-list';

let uid = 0;

const MONTH_FORMAT = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' });

function formatMonth(value: string): string {
  const [year, month] = value.split('-').map(Number);
  return MONTH_FORMAT.format(new Date(year, (month || 1) - 1, 1));
}

@Component({
  selector: 'app-timeline-item',
  imports: [MatButtonModule, MatIconModule, Badge, Skeleton, TagList],
  styleUrl: './timeline-item.scss',
  templateUrl: './timeline-item.html',
})
export class TimelineItem {
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
    const end = it.end ? formatMonth(it.end) : 'Present';
    return `${formatMonth(it.start)} — ${end}`;
  });

  protected toggleResponsibilities(): void {
    this.showAll.update((value) => !value);
  }
}
