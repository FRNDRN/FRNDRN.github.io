import { Component, inject, model, viewChild } from '@angular/core';
import { MatChipListbox, MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { PROJECT_CATEGORIES } from '../../data/project';
import { I18n } from '../../shared/i18n/i18n';
import { CategoryFilter } from '../filter-projects';

@Component({
  selector: 'app-project-filters',
  imports: [MatChipsModule],
  styleUrl: './project-filters.scss',
  templateUrl: './project-filters.html',
})
export class ProjectFilters {
  protected readonly strings = inject(I18n).strings;

  readonly category = model<CategoryFilter>('all');

  private readonly listbox = viewChild.required(MatChipListbox);

  protected readonly categories = PROJECT_CATEGORIES;

  protected onChange(event: MatChipListboxChange): void {
    const value = event.value as CategoryFilter | null;
    if (value == null) {
      // A category is always selected: restore the current one on deselection.
      this.listbox().value = this.category();
    } else {
      this.category.set(value);
    }
  }
}
