import {
  afterNextRender,
  computed,
  DOCUMENT,
  effect,
  inject,
  Service,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { DEFAULT_LOCALE, Locale } from './locale';
import { UI_STRINGS, UiStrings } from './ui-strings';

const STORAGE_KEY: string = 'locale';

const NEXT: Record<Locale, Locale> = {
  en: 'es',
  es: 'en',
};

@Service()
export class I18n {
  // Dependencies
  private readonly document: Document = inject(DOCUMENT);

  // State
  // Starts at the default locale so server render and first client render match (no hydration
  // mismatch). The stored preference is applied after hydration, in the browser only.
  private readonly state: WritableSignal<Locale> = signal<Locale>(DEFAULT_LOCALE);

  // Public API
  public readonly locale: Signal<Locale> = this.state.asReadonly();

  /** The full string table for the active locale. Everything user-facing reads from here. */
  public readonly strings: Signal<UiStrings> = computed(() => UI_STRINGS[this.state()]);

  public constructor() {
    effect(() => {
      this.document.documentElement.lang = this.state();
    });

    afterNextRender(() => {
      const stored: Locale = this.readStored();
      if (stored !== this.state()) {
        this.setLocale(stored);
      }
    });
  }

  public setLocale(locale: Locale): void {
    this.state.set(locale);
    this.persist(locale);
  }

  public toggle(): void {
    this.setLocale(NEXT[this.state()]);
  }

  // Helpers
  private persist(locale: Locale): void {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // Storage may be unavailable; language still works for this session.
    }
  }

  private readStored(): Locale {
    try {
      const stored: string | null = localStorage.getItem(STORAGE_KEY);
      return stored === 'en' || stored === 'es' ? stored : DEFAULT_LOCALE;
    } catch {
      return DEFAULT_LOCALE;
    }
  }
}
