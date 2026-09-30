import { Component, computed, input } from '@angular/core';

type TraceVariant = 0 | 1 | 2 | 3;

interface TracePattern {
  readonly d: string;
  readonly vias: readonly (readonly [number, number])[];
}

const PATTERNS: Record<TraceVariant, TracePattern> = {
  0: { d: 'M0 20H470L490 6H640L656 20H1200', vias: [[470, 20], [490, 6], [640, 6], [656, 20]] },
  1: { d: 'M0 20H640L660 34H820L836 20H1200', vias: [[640, 20], [660, 34], [820, 34], [836, 20]] },
  2: { d: 'M0 20H300L320 6H520L536 20H1200', vias: [[300, 20], [320, 6], [520, 6], [536, 20]] },
  3: { d: 'M0 20H760L780 34H960L976 20H1200', vias: [[760, 20], [780, 34], [960, 34], [976, 20]] },
};

@Component({
  selector: 'app-trace-divider',
  styleUrl: './trace-divider.scss',
  templateUrl: './trace-divider.html',
})
export class TraceDivider {
  readonly variant = input<TraceVariant>(0);

  protected readonly pattern = computed(() => PATTERNS[this.variant()]);
}
