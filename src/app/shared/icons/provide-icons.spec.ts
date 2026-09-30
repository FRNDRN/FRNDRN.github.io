import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { vi } from 'vitest';
import { ICONS } from './icons';
import { registerIcons } from './provide-icons';

describe('registerIcons', () => {
  it('registers every icon from ICONS in MatIconRegistry', () => {
    const addSvgIconLiteral = vi.fn();
    TestBed.configureTestingModule({
      providers: [
        { provide: MatIconRegistry, useValue: { addSvgIconLiteral } },
        { provide: DomSanitizer, useValue: { bypassSecurityTrustHtml: (s: string) => s } },
      ],
    });
    TestBed.runInInjectionContext(registerIcons);

    const names = Object.keys(ICONS);
    expect(addSvgIconLiteral).toHaveBeenCalledTimes(names.length);
    for (const name of names) {
      expect(addSvgIconLiteral).toHaveBeenCalledWith(name, expect.anything());
    }
  });
});
