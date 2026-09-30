import { describe, expect, it } from 'vitest';
import { activeSectionAt, SectionBounds } from './active-section';

describe('activeSectionAt', () => {
  const sections: readonly SectionBounds[] = [
    { id: 'about', top: 0, bottom: 100 },
    { id: 'experience', top: 100, bottom: 200 },
    { id: 'projects', top: 200, bottom: 300 },
  ];

  it('picks the section crossing the center line', () => {
    expect(activeSectionAt(sections, 150)).toBe('experience');
  });

  it('returns null when no section crosses the center line', () => {
    expect(activeSectionAt(sections, 500)).toBeNull();
  });

  it('returns null for an empty list', () => {
    expect(activeSectionAt([], 150)).toBeNull();
  });

  it('prefers the upper section on a boundary tie', () => {
    expect(activeSectionAt(sections, 100)).toBe('about');
  });
});
