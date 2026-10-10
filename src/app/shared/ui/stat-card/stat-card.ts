import { Component, input, InputSignal } from '@angular/core';
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
  // Inputs
  public readonly stat: InputSignal<Stat | undefined> = input<Stat | undefined>();
  public readonly variant: InputSignal<StatVariant> = input<StatVariant>('about');
}
