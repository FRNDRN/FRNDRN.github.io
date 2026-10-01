import { Component, inject, input } from '@angular/core';
import { NowItem } from '../../data/now-item';
import { I18n } from '../../shared/i18n/i18n';
import { SectionHeader } from '../../shared/ui/section-header/section-header';
import { Skeleton } from '../../shared/ui/skeleton/skeleton';

@Component({
  selector: 'app-now',
  imports: [SectionHeader, Skeleton],
  styleUrl: './now.scss',
  templateUrl: './now.html',
})
export class Now {
  protected readonly strings = inject(I18n).strings;

  readonly items = input<readonly NowItem[] | undefined>();

  protected readonly placeholders = [0, 1];
}
