import { Component, computed, input } from '@angular/core';

type SkeletonShape = 'text' | 'rect' | 'circle' | 'pill';

@Component({
  selector: 'app-skeleton',
  styleUrl: './skeleton.scss',
  templateUrl: './skeleton.html',
  host: { 'aria-hidden': 'true' },
})
export class Skeleton {
  readonly width = input<string>('100%');
  readonly height = input<string>('1em');
  readonly shape = input<SkeletonShape>('text');
  readonly lines = input<number>(1);

  protected readonly items = computed(() =>
    Array.from({ length: this.lines() }, (_, i) => i),
  );
}
