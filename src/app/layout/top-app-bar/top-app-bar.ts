import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActiveSection } from '../active-section';
import { SectionId, TOP_BAR_ITEMS } from '../navigation';
import { ThemeToggle } from '../../shared/theme/theme-toggle/theme-toggle';
import { Skeleton } from '../../shared/ui/skeleton/skeleton';

@Component({
  selector: 'app-top-app-bar',
  imports: [RouterLink, ThemeToggle, Skeleton],
  styleUrl: './top-app-bar.scss',
  templateUrl: './top-app-bar.html',
})
export class TopAppBar {
  private readonly activeSection = inject(ActiveSection);

  readonly name = input<string | undefined>();

  protected readonly items = TOP_BAR_ITEMS;

  protected isActive(id: SectionId): boolean {
    return this.activeSection.currentSection() === id;
  }

  protected ariaCurrent(id: SectionId): 'true' | null {
    return this.isActive(id) ? 'true' : null;
  }
}
