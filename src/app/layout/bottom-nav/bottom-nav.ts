import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ActiveSection } from '../active-section';
import { BOTTOM_NAV_ITEMS, NavItem, SectionId } from '../navigation';

@Component({
  selector: 'app-bottom-nav',
  imports: [RouterLink, MatIconModule],
  styleUrl: './bottom-nav.scss',
  templateUrl: './bottom-nav.html',
})
export class BottomNav {
  private readonly activeSection = inject(ActiveSection);

  protected readonly items = BOTTOM_NAV_ITEMS;

  // At the top of the home page no section crosses the center yet, so Home lights up.
  private readonly current = computed<SectionId>(
    () => (this.activeSection.currentSection() as SectionId | null) ?? 'home',
  );

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
