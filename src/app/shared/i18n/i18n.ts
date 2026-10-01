import { afterNextRender, computed, DOCUMENT, effect, inject, Service, signal } from '@angular/core';
import { DEFAULT_LOCALE, Locale } from './locale';
import { UI_STRINGS } from './ui-strings';

const STORAGE_KEY = 'locale';

const NEXT: Record<Locale, Locale> = {
  en: 'es',
  es: 'en',
};

@Service()
export class I18n {
  private readonly document = inject(DOCUMENT);

  // Starts at the default locale so server render and first client render match (no hydration
  // mismatch). The stored preference is applied after hydration, in the browser only.
  private readonly state = signal<Locale>(DEFAULT_LOCALE);
  readonly locale = this.state.asReadonly();

  /** The full string table for the active locale. Everything user-facing reads from here. */
  readonly strings = computed(() => UI_STRINGS[this.state()]);

  constructor() {
    effect(() => {
      this.document.documentElement.lang = this.state();
    });

    afterNextRender(() => {
      const stored = this.readStored();
      if (stored !== this.state()) {
        this.setLocale(stored);
      }
    });
  }

  setLocale(locale: Locale): void {
    this.state.set(locale);
    this.persist(locale);
  }

  toggle(): void {
    this.setLocale(NEXT[this.state()]);
  }

  private persist(locale: Locale): void {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // Storage may be unavailable; language still works for this session.
    }
  }

  private readStored(): Locale {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === 'en' || stored === 'es' ? stored : DEFAULT_LOCALE;
    } catch {
      return DEFAULT_LOCALE;
    }
  }
}
