import { afterNextRender, Directive, ElementRef, DestroyRef, inject, input } from '@angular/core';
import { ActiveSection } from './active-section';

/** Registers the host section with the ActiveSection service so the nav can track it. */
@Directive({
  selector: '[appSectionAnchor]',
})
export class SectionAnchor {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly active = inject(ActiveSection);
  private readonly destroyRef = inject(DestroyRef);

  readonly appSectionAnchor = input.required<string>();

  constructor() {
    afterNextRender(() => {
      const id = this.appSectionAnchor();
      this.active.register(id, this.host.nativeElement);
      this.destroyRef.onDestroy(() => this.active.unregister(id));
    });
  }
}
