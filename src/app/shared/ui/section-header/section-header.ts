import { Component, input, InputSignal } from '@angular/core';
import { Skeleton } from '../skeleton/skeleton';

@Component({
  selector: 'app-section-header',
  imports: [Skeleton],
  styleUrl: './section-header.scss',
  templateUrl: './section-header.html',
})
export class SectionHeader {
  // Inputs
  public readonly title: InputSignal<string | undefined> = input<string | undefined>();
  public readonly headingId: InputSignal<string> = input.required<string>();
}
