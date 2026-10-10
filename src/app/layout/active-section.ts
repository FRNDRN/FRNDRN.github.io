import {
  afterNextRender,
  computed,
  DestroyRef,
  inject,
  Service,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

export interface SectionBounds {
  readonly id: string;
  readonly top: number;
  readonly bottom: number;
}

/**
 * Picks the section that crosses a horizontal line (the viewport center).
 * Returns null when the line falls in no section. Sections are read in document
 * order, so on an exact boundary tie the upper section wins.
 */
export function activeSectionAt(sections: readonly SectionBounds[], center: number): string | null {
  for (const section of sections) {
    if (center >= section.top && center <= section.bottom) {
      return section.id;
    }
  }
  return null;
}

@Service()
export class ActiveSection {
  // Dependencies
  private readonly router: Router = inject(Router);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  // State
  private readonly elements: Map<string, Element> = new Map<string, Element>();
  private observer: IntersectionObserver | null = null;
  private readonly active: WritableSignal<string | null> = signal<string | null>(null);
  private readonly url: Signal<string> = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.router.url),
    ),
    { initialValue: this.router.url },
  );

  // Public API
  public readonly activeId: Signal<string | null> = this.active.asReadonly();
  public readonly onProjectsPage: Signal<boolean> = computed(() =>
    this.url().startsWith('/projects'),
  );

  /** The active destination combining the route with the scrolled-to section. */
  public readonly currentSection: Signal<string | null> = computed(() =>
    this.onProjectsPage() ? 'projects' : this.activeId(),
  );

  public constructor() {
    afterNextRender(() => {
      // A thin band at the viewport center; the observer just triggers a recompute.
      this.observer = new IntersectionObserver(() => this.recompute(), {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      });
      for (const element of this.elements.values()) {
        this.observer.observe(element);
      }
      this.recompute();
    });

    this.destroyRef.onDestroy(() => {
      this.observer?.disconnect();
      this.observer = null;
    });
  }

  public register(id: string, element: Element): void {
    this.elements.set(id, element);
    this.observer?.observe(element);
    this.recompute();
  }

  public unregister(id: string): void {
    const element: Element | undefined = this.elements.get(id);
    if (element !== undefined) {
      this.observer?.unobserve(element);
      this.elements.delete(id);
    }
    if (this.active() === id) {
      this.recompute();
    }
  }

  // Helpers
  private recompute(): void {
    if (typeof window === 'undefined') {
      return;
    }
    const center: number = window.innerHeight / 2;
    const bounds: SectionBounds[] = [];
    for (const [id, element] of this.elements) {
      const rect: DOMRect = element.getBoundingClientRect();
      bounds.push({ id, top: rect.top, bottom: rect.bottom });
    }
    bounds.sort((a, b) => a.top - b.top);
    this.active.set(activeSectionAt(bounds, center));
  }
}
