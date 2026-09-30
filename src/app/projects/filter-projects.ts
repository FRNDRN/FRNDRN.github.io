import { PROJECT_CATEGORY_LABELS, Project, ProjectCategory } from '../data/project';

export type CategoryFilter = ProjectCategory | 'all';

/** Coerces a raw query-param value into a valid category; anything unknown falls back to 'all'. */
export function parseCategory(value: string | null | undefined): CategoryFilter {
  if (value === 'all') {
    return 'all';
  }
  if (value != null && value in PROJECT_CATEGORY_LABELS) {
    return value as ProjectCategory;
  }
  return 'all';
}

/** Returns the projects in the given category (all of them for 'all'), preserving order. */
export function filterProjects(
  projects: readonly Project[],
  category: CategoryFilter,
): readonly Project[] {
  if (category === 'all') {
    return projects;
  }
  return projects.filter((project) => project.categories.includes(category));
}
