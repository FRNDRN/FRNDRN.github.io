import {
  computed,
  DOCUMENT,
  effect,
  inject,
  PLATFORM_ID,
  Service,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemePreference = 'system' | 'light' | 'dark';

const STORAGE_KEY: string = 'theme';

const NEXT: Record<ThemePreference, ThemePreference> = {
  system: 'light',
  light: 'dark',
  dark: 'system',
};

@Service()
export class Theme {
  // Dependencies
  private readonly document: Document = inject(DOCUMENT);
  private readonly isBrowser: boolean = isPlatformBrowser(inject(PLATFORM_ID));

  // State
  private readonly state: WritableSignal<ThemePreference> = signal<ThemePreference>(
    this.readStored(),
  );

  // Public API
  public readonly preference: Signal<ThemePreference> = this.state.asReadonly();

  /** The preference that `cycle()` will switch to. */
  public readonly next: Signal<ThemePreference> = computed(() => NEXT[this.state()]);

  public constructor() {
    // Mirror the preference to <html data-theme> and localStorage; styles.scss does the rest.
    effect(() => this.apply(this.state()));
  }

  public cycle(): void {
    this.state.set(this.next());
  }

  // Helpers
  private apply(preference: ThemePreference): void {
    const root: HTMLElement = this.document.documentElement;
    if (preference === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', preference);
    }
    this.persist(preference);
  }

  private persist(preference: ThemePreference): void {
    if (!this.isBrowser) {
      return;
    }
    try {
      if (preference === 'system') {
        localStorage.removeItem(STORAGE_KEY);
      } else {
        localStorage.setItem(STORAGE_KEY, preference);
      }
    } catch {
      // Storage can be blocked (private mode, disabled cookies); the theme still works this session.
    }
  }

  private readStored(): ThemePreference {
    if (!this.isBrowser) {
      return 'system';
    }
    try {
      const stored: string | null = localStorage.getItem(STORAGE_KEY);
      return stored === 'light' || stored === 'dark' ? stored : 'system';
    } catch {
      return 'system';
    }
  }
}
