import {
  afterNextRender,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  InputSignal,
} from '@angular/core';
import { ActiveSection } from './active-section';

/** Registers the host section with the ActiveSection service so the nav can track it. */
@Directive({
  selector: '[appSectionAnchor]',
})
export class SectionAnchor {
  // Dependencies
  private readonly host: ElementRef<HTMLElement> = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly active: ActiveSection = inject(ActiveSection);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  // Inputs
  public readonly appSectionAnchor: InputSignal<string> = input.required<string>();

  public constructor() {
    afterNextRender(() => {
      const id: string = this.appSectionAnchor();
      this.active.register(id, this.host.nativeElement);
      this.destroyRef.onDestroy(() => this.active.unregister(id));
    });
  }
}
