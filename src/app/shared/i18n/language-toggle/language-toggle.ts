import { Component, computed, inject } from '@angular/core';
import { I18n } from '../i18n';

@Component({
  selector: 'app-language-toggle',
  styleUrl: './language-toggle.scss',
  templateUrl: './language-toggle.html',
})
export class LanguageToggle {
  private readonly i18n = inject(I18n);

  protected readonly locale = this.i18n.locale;
  private readonly strings = this.i18n.strings;

  protected readonly code = computed(() => this.locale().toUpperCase());
  protected readonly label = computed(() => {
    const s = this.strings().language;
    const isEnglish = this.locale() === 'en';
    const current = isEnglish ? s.english : s.spanish;
    const next = isEnglish ? s.spanish : s.english;
    return `${s.prefix} ${current}. ${s.switchTo} ${next}`;
  });

  toggleLanguage(): void {
    this.i18n.toggle();
  }
}
