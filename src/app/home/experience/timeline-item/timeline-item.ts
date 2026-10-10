import {
  Component,
  computed,
  inject,
  input,
  InputSignal,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Experience as ExperienceItem } from '../../../data/experience';
import { I18n } from '../../../shared/i18n/i18n';
import { UiStrings } from '../../../shared/i18n/ui-strings';
import { Badge } from '../../../shared/ui/badge/badge';
import { Skeleton } from '../../../shared/ui/skeleton/skeleton';
import { TagList } from '../../../shared/ui/tag-list/tag-list';

let nextId: number = 0;

@Component({
  selector: 'app-timeline-item',
  imports: [MatButtonModule, MatIconModule, Badge, Skeleton, TagList],
  styleUrl: './timeline-item.scss',
  templateUrl: './timeline-item.html',
})
export class TimelineItem {
  // Dependencies
  private readonly i18n: I18n = inject(I18n);

  // Inputs
  public readonly item: InputSignal<ExperienceItem | undefined> = input<
    ExperienceItem | undefined
  >();

  // State
  private readonly showAll: WritableSignal<boolean> = signal<boolean>(false);

  // View state
  protected readonly strings: Signal<UiStrings> = this.i18n.strings;
  protected readonly moreId: string = `experience-more-${nextId++}`;
  protected readonly expanded: Signal<boolean> = this.showAll.asReadonly();
  protected readonly isCurrent: Signal<boolean> = computed(() => {
    const item: ExperienceItem | undefined = this.item();
    return item !== undefined && item.end === null;
  });
  protected readonly dateRange: Signal<string> = computed(() => {
    const item: ExperienceItem | undefined = this.item();
    if (item === undefined) {
      return '';
    }
    const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat(this.i18n.locale(), {
      month: 'short',
      year: 'numeric',
    });
    const format = (value: string): string => {
      const [year, month] = value.split('-').map(Number);
      return formatter.format(new Date(year, (month || 1) - 1, 1));
    };
    const end: string = item.end !== null ? format(item.end) : this.strings().experience.present;
    return `${format(item.start)} — ${end}`;
  });

  // Events
  protected onToggleClicked(): void {
    this.showAll.update((value) => !value);
  }
}
