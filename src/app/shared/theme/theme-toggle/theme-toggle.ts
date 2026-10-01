import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconName } from '../../icons/icons';
import { I18n } from '../../i18n/i18n';
import { Theme, ThemePreference } from '../theme';

const ICON: Record<ThemePreference, IconName> = {
  system: 'theme-auto',
  light: 'sun',
  dark: 'moon',
};

const NEXT: Record<ThemePreference, ThemePreference> = {
  system: 'light',
  light: 'dark',
  dark: 'system',
};

@Component({
  selector: 'app-theme-toggle',
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  styleUrl: './theme-toggle.scss',
  templateUrl: './theme-toggle.html',
})
export class ThemeToggle {
  private readonly theme = inject(Theme);
  private readonly strings = inject(I18n).strings;

  protected readonly preference = this.theme.preference;
  protected readonly icon = computed(() => ICON[this.preference()]);
  protected readonly label = computed(() => {
    const s = this.strings().theme;
    return `${s.prefix} ${s[this.preference()]}. ${s.switchTo} ${s[NEXT[this.preference()]]}`;
  });

  cycleTheme(): void {
    this.theme.cycle();
  }
}
