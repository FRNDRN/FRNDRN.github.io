import { Component, computed, input } from '@angular/core';
import { Skeleton } from '../skeleton/skeleton';

type HeaderTone = 'default' | 'on-primary-container';

@Component({
  selector: 'app-section-header',
  imports: [Skeleton],
  styleUrl: './section-header.scss',
  templateUrl: './section-header.html',
})
export class SectionHeader {
  readonly index = input<string>();
  readonly name = input.required<string>();
  readonly title = input<string | undefined>();
  readonly headingId = input.required<string>();
  readonly tone = input<HeaderTone>('default');

  protected readonly overline = computed(() => {
    const index = this.index();
    return index ? `// ${index} — ${this.name()}` : `// ${this.name()}`;
  });
}
