import { Component, input } from '@angular/core';
import { Stat } from '../../../data/stat';
import { Skeleton } from '../skeleton/skeleton';

type StatVariant = 'about' | 'metric';

@Component({
  selector: 'app-stat-card',
  imports: [Skeleton],
  styleUrl: './stat-card.scss',
  templateUrl: './stat-card.html',
  host: {
    '[class.stat-card--metric]': "variant() === 'metric'",
  },
})
export class StatCard {
  readonly stat = input<Stat | undefined>();
  readonly variant = input<StatVariant>('about');
}
