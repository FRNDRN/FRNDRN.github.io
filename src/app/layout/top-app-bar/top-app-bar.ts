import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActiveSection } from '../active-section';
import { SectionId, TOP_BAR_ITEMS } from '../navigation';
import { I18n } from '../../shared/i18n/i18n';
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
  private readonly activeSection = inject(ActiveSection);
  protected readonly strings = inject(I18n).strings;

  readonly name = input<string | undefined>();

  protected readonly items = TOP_BAR_ITEMS;

  protected readonly monogram = computed(() => {
    const name = this.name();
    if (!name) {
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

  protected isActive(id: SectionId): boolean {
    return this.activeSection.currentSection() === id;
  }

  protected ariaCurrent(id: SectionId): 'true' | null {
    return this.isActive(id) ? 'true' : null;
  }
}
