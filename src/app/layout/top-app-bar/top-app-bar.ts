import { Component, computed, inject, input, InputSignal, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActiveSection } from '../active-section';
import { NavItem, SectionId, TOP_BAR_ITEMS } from '../navigation';
import { I18n } from '../../shared/i18n/i18n';
import { UiStrings } from '../../shared/i18n/ui-strings';
import { LanguageToggle } from '../../shared/i18n/language-toggle/language-toggle';
import { ThemeToggle } from '../../shared/theme/theme-toggle/theme-toggle';
import { Skeleton } from '../../shared/ui/skeleton/skeleton';

@Component({
  selector: 'app-top-app-bar',
  imports: [RouterLink, ThemeToggle, LanguageToggle, Skeleton],
  styleUrl: './top-app-bar.scss',
  templateUrl: './top-app-bar.html',
})
export class TopAppBar {
  // Dependencies
  private readonly activeSection: ActiveSection = inject(ActiveSection);

  // Inputs
  public readonly name: InputSignal<string | undefined> = input<string | undefined>();

  // View state
  protected readonly strings: Signal<UiStrings> = inject(I18n).strings;
  protected readonly items: readonly NavItem[] = TOP_BAR_ITEMS;
  protected readonly monogram: Signal<string> = computed(() => {
    const name: string | undefined = this.name();
    if (name === undefined) {
      return '';
    }
    return name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  });

  // Template helpers
  protected isActive(id: SectionId): boolean {
    return this.activeSection.currentSection() === id;
  }

  protected ariaCurrent(id: SectionId): 'true' | null {
    return this.isActive(id) ? 'true' : null;
  }
}
