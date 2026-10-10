import { Component, computed, inject, Signal } from '@angular/core';
import { I18n } from '../i18n';
import { UiStrings } from '../ui-strings';

@Component({
  selector: 'app-language-toggle',
  styleUrl: './language-toggle.scss',
  templateUrl: './language-toggle.html',
})
export class LanguageToggle {
  // Dependencies
  private readonly i18n: I18n = inject(I18n);

  // View state
  protected readonly code: Signal<string> = computed(() => this.i18n.locale().toUpperCase());
  protected readonly label: Signal<string> = computed(() => {
    const copy: UiStrings['language'] = this.i18n.strings().language;
    const isEnglish: boolean = this.i18n.locale() === 'en';
    const current: string = isEnglish ? copy.english : copy.spanish;
    const next: string = isEnglish ? copy.spanish : copy.english;
    return `${copy.prefix} ${current}. ${copy.switchTo} ${next}`;
  });

  // Events
  protected onToggleClicked(): void {
    this.i18n.toggle();
  }
}
