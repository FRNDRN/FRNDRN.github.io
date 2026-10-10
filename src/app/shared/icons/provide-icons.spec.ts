import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { describe, expect, it, Mock, vi } from 'vitest';
import { ICONS } from './icons';
import { TECH_ICONS } from './tech-icons';
import { registerIcons } from './provide-icons';

describe('registerIcons', () => {
  it('registers every stroke icon and every tech logo (with the tech- prefix)', () => {
    const addSvgIconLiteral: Mock = vi.fn();
    TestBed.configureTestingModule({
      providers: [
        { provide: MatIconRegistry, useValue: { addSvgIconLiteral } },
        { provide: DomSanitizer, useValue: { bypassSecurityTrustHtml: (svg: string) => svg } },
      ],
    });
    TestBed.runInInjectionContext(registerIcons);

    const iconNames: string[] = Object.keys(ICONS);
    const techNames: string[] = Object.keys(TECH_ICONS);

    expect(addSvgIconLiteral).toHaveBeenCalledTimes(iconNames.length + techNames.length);
    for (const name of iconNames) {
      expect(addSvgIconLiteral).toHaveBeenCalledWith(name, expect.anything());
    }
    for (const name of techNames) {
      expect(addSvgIconLiteral).toHaveBeenCalledWith(`tech-${name}`, expect.anything());
    }
  });
});
