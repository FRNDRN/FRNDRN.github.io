import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { TECH_ICONS } from '../shared/icons/tech-icons';
import { Portfolio } from './portfolio';
import { Project } from './project';

describe('Portfolio', () => {
  function service(): Portfolio {
    return TestBed.inject(Portfolio);
  }

  it('has exactly one featured project, and it is the current industry work', () => {
    const portfolio: Portfolio = service();
    expect(portfolio.projects().filter((project) => project.featured)).toHaveLength(1);
    expect(portfolio.featuredProject()?.slug).toBe('power-quality-test-platform');
  });

  it('has unique project slugs', () => {
    const slugs: string[] = service()
      .projects()
      .map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('otherProjects excludes the featured one and keeps order', () => {
    const portfolio: Portfolio = service();
    const others: readonly Project[] = portfolio.otherProjects();
    expect(others.every((project) => !project.featured)).toBe(true);
    expect(others.map((project) => project.slug)).toEqual(
      portfolio
        .projects()
        .filter((project) => !project.featured)
        .map((project) => project.slug),
    );
  });

  it('projectBySlug returns the project or undefined', () => {
    const portfolio: Portfolio = service();
    expect(portfolio.projectBySlug('rosbot')?.slug).toBe('rosbot');
    expect(portfolio.projectBySlug('does-not-exist')).toBeUndefined();
  });

  it('every link URL is https', () => {
    const portfolio: Portfolio = service();
    const urls: string[] = [
      ...portfolio.projects().flatMap((project) => project.links.map((link) => link.url)),
      ...portfolio.education().flatMap((item) => (item.link !== null ? [item.link.url] : [])),
    ];
    for (const url of urls) {
      expect(url.startsWith('https://')).toBe(true);
    }
  });

  it('every skill logo references an existing tech icon', () => {
    for (const group of service().skills()) {
      for (const item of group.items) {
        if (item.icon !== null) {
          expect(item.icon in TECH_ICONS).toBe(true);
        }
      }
    }
  });
});
