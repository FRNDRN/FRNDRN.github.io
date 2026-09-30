import { DOCUMENT, effect, inject, PLATFORM_ID, Service, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemePreference = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'theme';

const NEXT: Record<ThemePreference, ThemePreference> = {
  system: 'light',
  light: 'dark',
  dark: 'system',
};

@Service()
export class Theme {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly state = signal<ThemePreference>(this.readStored());
  readonly preference = this.state.asReadonly();

  constructor() {
    // Mirror the preference to <html data-theme> and localStorage; styles.scss does the rest.
    effect(() => this.apply(this.state()));
  }

  cycle(): void {
    this.state.set(NEXT[this.state()]);
  }

  private apply(preference: ThemePreference): void {
    const root = this.document.documentElement;
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
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === 'light' || stored === 'dark' ? stored : 'system';
    } catch {
      return 'system';
    }
  }
}
