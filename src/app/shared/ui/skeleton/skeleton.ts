import { Component, computed, input, InputSignal, Signal } from '@angular/core';

type SkeletonShape = 'text' | 'rect' | 'circle' | 'pill';

@Component({
  selector: 'app-skeleton',
  styleUrl: './skeleton.scss',
  templateUrl: './skeleton.html',
  host: { 'aria-hidden': 'true' },
})
export class Skeleton {
  // Inputs
  public readonly width: InputSignal<string> = input<string>('100%');
  public readonly height: InputSignal<string> = input<string>('1em');
  public readonly shape: InputSignal<SkeletonShape> = input<SkeletonShape>('text');
  public readonly lines: InputSignal<number> = input<number>(1);

  // View state
  protected readonly items: Signal<readonly number[]> = computed(() =>
    Array.from({ length: this.lines() }, (_, index) => index),
  );
}
