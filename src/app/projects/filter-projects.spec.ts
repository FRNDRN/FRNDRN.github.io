import { describe, expect, it } from 'vitest';
import { Project } from '../data/project';
import { filterProjects, parseCategory } from './filter-projects';

function project(slug: string, categories: Project['categories']): Project {
  return {
    slug,
    title: slug,
    summary: '',
    categories,
    status: 'completed',
    featured: false,
    context: '',
    origin: '',
    metrics: [],
    stack: [],
    hasCaseStudy: false,
    links: [],
  };
}

describe('filterProjects', () => {
  const projects: readonly Project[] = [
    project('a', ['embedded']),
    project('b', ['web', 'machine-learning']),
    project('c', ['embedded', 'robotics']),
  ];

  it("returns every project for 'all'", () => {
    expect(filterProjects(projects, 'all')).toEqual(projects);
  });

  it('returns only the projects in a category', () => {
    expect(filterProjects(projects, 'embedded').map((p) => p.slug)).toEqual(['a', 'c']);
    expect(filterProjects(projects, 'web').map((p) => p.slug)).toEqual(['b']);
  });

  it('preserves the original order', () => {
    expect(filterProjects(projects, 'embedded').map((p) => p.slug)).toEqual(['a', 'c']);
  });

  it('returns an empty list for an empty input', () => {
    expect(filterProjects([], 'all')).toEqual([]);
    expect(filterProjects([], 'web')).toEqual([]);
  });
});

describe('parseCategory', () => {
  it('accepts a valid category from the query param', () => {
    expect(parseCategory('web')).toBe('web');
    expect(parseCategory('embedded')).toBe('embedded');
  });

  it("keeps 'all'", () => {
    expect(parseCategory('all')).toBe('all');
  });

  it("falls back to 'all' for invalid or missing values", () => {
    expect(parseCategory('nope')).toBe('all');
    expect(parseCategory(null)).toBe('all');
    expect(parseCategory(undefined)).toBe('all');
  });
});
