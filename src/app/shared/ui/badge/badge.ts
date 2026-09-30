import { Component, input } from '@angular/core';

type BadgeTone = 'tertiary' | 'secondary' | 'outlined';

@Component({
  selector: 'app-badge',
  styleUrl: './badge.scss',
  templateUrl: './badge.html',
  host: {
    '[class.badge--tertiary]': "tone() === 'tertiary'",
    '[class.badge--secondary]': "tone() === 'secondary'",
    '[class.badge--outlined]': "tone() === 'outlined'",
  },
})
export class Badge {
  readonly tone = input<BadgeTone>('tertiary');
  readonly pulse = input<boolean>(false);
}
