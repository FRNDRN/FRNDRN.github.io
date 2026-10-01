import { PROJECT_CATEGORIES, Project, ProjectCategory } from '../data/project';

export type CategoryFilter = ProjectCategory | 'all';

/** Coerces a raw query-param value into a valid category; anything unknown falls back to 'all'. */
export function parseCategory(value: string | null | undefined): CategoryFilter {
  if (value === 'all') {
    return 'all';
  }
  return PROJECT_CATEGORIES.includes(value as ProjectCategory) ? (value as ProjectCategory) : 'all';
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
