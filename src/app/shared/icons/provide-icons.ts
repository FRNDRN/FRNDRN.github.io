import { inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { ICONS } from './icons';
import { TECH_ICONS } from './tech-icons';

export function registerIcons(): void {
  const registry: MatIconRegistry = inject(MatIconRegistry);
  const sanitizer: DomSanitizer = inject(DomSanitizer);

  for (const [name, svg] of Object.entries(ICONS)) {
    registry.addSvgIconLiteral(name, sanitizer.bypassSecurityTrustHtml(svg));
  }

  // Technology logos use a `tech-` prefix so they never collide with the stroke icons above.
  for (const [name, svg] of Object.entries(TECH_ICONS)) {
    registry.addSvgIconLiteral(`tech-${name}`, sanitizer.bypassSecurityTrustHtml(svg));
  }
}
