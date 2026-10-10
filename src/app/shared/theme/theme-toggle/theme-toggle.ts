import { Component, computed, inject, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconName } from '../../icons/icons';
import { I18n } from '../../i18n/i18n';
import { UiStrings } from '../../i18n/ui-strings';
import { Theme, ThemePreference } from '../theme';

const ICON: Record<ThemePreference, IconName> = {
  system: 'theme-auto',
  light: 'sun',
  dark: 'moon',
};

@Component({
  selector: 'app-theme-toggle',
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  styleUrl: './theme-toggle.scss',
  templateUrl: './theme-toggle.html',
})
export class ThemeToggle {
  // Dependencies
  private readonly theme: Theme = inject(Theme);
  private readonly strings: Signal<UiStrings> = inject(I18n).strings;

  // View state
  protected readonly icon: Signal<IconName> = computed(() => ICON[this.theme.preference()]);
  protected readonly label: Signal<string> = computed(() => {
    const copy: UiStrings['theme'] = this.strings().theme;
    return `${copy.prefix} ${copy[this.theme.preference()]}. ${copy.switchTo} ${copy[this.theme.next()]}`;
  });

  // Events
  protected onToggleClicked(): void {
    this.theme.cycle();
  }
}
