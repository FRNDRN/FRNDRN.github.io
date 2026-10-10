import { Component, input, InputSignal } from '@angular/core';

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
  // Inputs
  public readonly tone: InputSignal<BadgeTone> = input<BadgeTone>('tertiary');
  public readonly pulse: InputSignal<boolean> = input<boolean>(false);
}
