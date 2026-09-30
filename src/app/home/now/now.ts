import { Component, input } from '@angular/core';
import { NowItem } from '../../data/now-item';
import { SectionHeader } from '../../shared/ui/section-header/section-header';
import { Skeleton } from '../../shared/ui/skeleton/skeleton';

@Component({
  selector: 'app-now',
  imports: [SectionHeader, Skeleton],
  styleUrl: './now.scss',
  templateUrl: './now.html',
})
export class Now {
  readonly items = input<readonly NowItem[] | undefined>();

  protected readonly placeholders = [0, 1];
}
