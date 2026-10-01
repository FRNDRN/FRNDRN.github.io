import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, ParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
import { describe, expect, it } from 'vitest';
import { CategoryFilter } from '../filter-projects';
import { ProjectsPage } from './projects-page';

function configure(category: string | null): void {
  const paramMap: ParamMap = convertToParamMap(category ? { category } : {});
  TestBed.configureTestingModule({
    providers: [
      { provide: Router, useValue: { navigate: () => Promise.resolve(true) } },
      {
        provide: ActivatedRoute,
        useValue: { queryParamMap: of(paramMap), snapshot: { queryParamMap: paramMap } },
      },
    ],
  });
}

function selectedCategory(): CategoryFilter {
  const fixture = TestBed.createComponent(ProjectsPage);
  return (fixture.componentInstance as unknown as { category: () => CategoryFilter }).category();
}

describe('ProjectsPage query param', () => {
  it('preselects the category from ?category=web', () => {
    configure('web');
    expect(selectedCategory()).toBe('web');
  });

  it('falls back to all for an invalid category', () => {
    configure('bogus');
    expect(selectedCategory()).toBe('all');
  });

  it('defaults to all when no category is present', () => {
    configure(null);
    expect(selectedCategory()).toBe('all');
  });
});
