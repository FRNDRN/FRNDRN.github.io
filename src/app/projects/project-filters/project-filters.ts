import { Component, inject, model, ModelSignal, Signal, viewChild } from '@angular/core';
import { MatChipListbox, MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { PROJECT_CATEGORIES, ProjectCategory } from '../../data/project';
import { I18n } from '../../shared/i18n/i18n';
import { UiStrings } from '../../shared/i18n/ui-strings';
import { CategoryFilter } from '../filter-projects';

@Component({
  selector: 'app-project-filters',
  imports: [MatChipsModule],
  styleUrl: './project-filters.scss',
  templateUrl: './project-filters.html',
})
export class ProjectFilters {
  // Models
  public readonly category: ModelSignal<CategoryFilter> = model<CategoryFilter>('all');

  // Queries
  private readonly listbox: Signal<MatChipListbox> = viewChild.required(MatChipListbox);

  // View state
  protected readonly strings: Signal<UiStrings> = inject(I18n).strings;
  protected readonly categories: readonly ProjectCategory[] = PROJECT_CATEGORIES;

  // Events
  protected onChange(event: MatChipListboxChange): void {
    const value: CategoryFilter | null | undefined = event.value;
    if (value === null || value === undefined) {
      // A category is always selected: restore the current one on deselection.
      this.listbox().value = this.category();
      return;
    }
    this.category.set(value);
  }
}
