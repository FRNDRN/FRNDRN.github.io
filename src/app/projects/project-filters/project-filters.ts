import { Component, model, viewChild } from '@angular/core';
import { MatChipListbox, MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { PROJECT_CATEGORY_LABELS, ProjectCategory } from '../../data/project';
import { CategoryFilter } from '../filter-projects';

interface FilterOption {
  readonly value: CategoryFilter;
  readonly label: string;
}

@Component({
  selector: 'app-project-filters',
  imports: [MatChipsModule],
  styleUrl: './project-filters.scss',
  templateUrl: './project-filters.html',
})
export class ProjectFilters {
  readonly category = model<CategoryFilter>('all');

  private readonly listbox = viewChild.required(MatChipListbox);

  protected readonly options: readonly FilterOption[] = [
    { value: 'all', label: 'All' },
    ...(Object.entries(PROJECT_CATEGORY_LABELS) as [ProjectCategory, string][]).map(
      ([value, label]) => ({ value, label }),
    ),
  ];

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
