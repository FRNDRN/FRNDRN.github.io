import { DOCUMENT } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Theme } from './theme';

describe('Theme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  function create(): Theme {
    return TestBed.inject(Theme);
  }

  it('starts in system when nothing is stored', () => {
    expect(create().preference()).toBe('system');
  });

  it('reads a stored light preference', () => {
    localStorage.setItem('theme', 'light');
    expect(create().preference()).toBe('light');
  });

  it('reads a stored dark preference', () => {
    localStorage.setItem('theme', 'dark');
    expect(create().preference()).toBe('dark');
  });

  it('ignores an invalid stored value', () => {
    localStorage.setItem('theme', 'purple');
    expect(create().preference()).toBe('system');
  });

  it('cycles system -> light -> dark -> system', () => {
    const theme = create();
    expect(theme.preference()).toBe('system');
    theme.cycle();
    expect(theme.preference()).toBe('light');
    theme.cycle();
    expect(theme.preference()).toBe('dark');
    theme.cycle();
    expect(theme.preference()).toBe('system');
  });

  it('stores light and dark, and clears the key on system', () => {
    const theme = create();

    theme.cycle();
    TestBed.tick();
    expect(localStorage.getItem('theme')).toBe('light');

    theme.cycle();
    TestBed.tick();
    expect(localStorage.getItem('theme')).toBe('dark');

    theme.cycle();
    TestBed.tick();
    expect(localStorage.getItem('theme')).toBeNull();
  });

  it('sets and removes data-theme on the document element', () => {
    const theme = create();
    const root = TestBed.inject(DOCUMENT).documentElement;

    TestBed.tick();
    expect(root.hasAttribute('data-theme')).toBe(false);

    theme.cycle();
    TestBed.tick();
    expect(root.getAttribute('data-theme')).toBe('light');

    theme.cycle();
    TestBed.tick();
    expect(root.getAttribute('data-theme')).toBe('dark');

    theme.cycle();
    TestBed.tick();
    expect(root.hasAttribute('data-theme')).toBe(false);
  });

  it('falls back to system and does not throw when storage access fails', () => {
    const boom = (): never => {
      throw new Error('storage blocked');
    };
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(boom);
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(boom);
    vi.spyOn(Storage.prototype, 'removeItem').mockImplementation(boom);

    let theme!: Theme;
    expect(() => {
      theme = create();
      TestBed.tick();
      theme.cycle();
      TestBed.tick();
    }).not.toThrow();
    expect(theme.preference()).toBe('light');
  });
});
