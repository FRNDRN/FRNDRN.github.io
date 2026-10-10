import { Component, computed, inject, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ActiveSection } from '../active-section';
import { BOTTOM_NAV_ITEMS, NavItem, PAGE_ORDER, SectionId } from '../navigation';
import { I18n } from '../../shared/i18n/i18n';
import { UiStrings } from '../../shared/i18n/ui-strings';

const DESTINATION_IDS: ReadonlySet<string> = new Set<string>(
  BOTTOM_NAV_ITEMS.map((item) => item.id),
);

@Component({
  selector: 'app-bottom-nav',
  imports: [RouterLink, MatIconModule],
  styleUrl: './bottom-nav.scss',
  templateUrl: './bottom-nav.html',
})
export class BottomNav {
  // Dependencies
  private readonly activeSection: ActiveSection = inject(ActiveSection);

  // View state
  protected readonly strings: Signal<UiStrings> = inject(I18n).strings;
  protected readonly items: readonly NavItem[] = BOTTOM_NAV_ITEMS;

  // Keep a destination lit at all times: when the active section isn't one of the four
  // bottom-nav destinations (e.g. about or skills), light the nearest preceding one.
  private readonly current: Signal<SectionId> = computed(() => {
    const active: string = this.activeSection.currentSection() ?? 'home';
    if (DESTINATION_IDS.has(active)) {
      return active as SectionId;
    }
    const index: number = PAGE_ORDER.indexOf(active);
    for (let i: number = index; i >= 0; i--) {
      if (DESTINATION_IDS.has(PAGE_ORDER[i])) {
        return PAGE_ORDER[i] as SectionId;
      }
    }
    return 'home';
  });

  // Template helpers
  protected link(item: NavItem): string {
    return item.id === 'projects' ? '/projects' : '/';
  }

  protected fragment(item: NavItem): string | undefined {
    return item.id === 'home' || item.id === 'projects' ? undefined : item.id;
  }

  protected isActive(id: SectionId): boolean {
    return this.current() === id;
  }

  protected ariaCurrent(item: NavItem): 'page' | 'true' | null {
    if (item.id === 'projects' && this.activeSection.onProjectsPage()) {
      return 'page';
    }
    return this.isActive(item.id) ? 'true' : null;
  }
}
