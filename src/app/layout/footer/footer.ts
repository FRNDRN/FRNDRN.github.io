import { Component, inject, input, VERSION as NG_VERSION } from '@angular/core';
import { VERSION as MAT_VERSION } from '@angular/material/core';
import { I18n } from '../../shared/i18n/i18n';
import { Skeleton } from '../../shared/ui/skeleton/skeleton';

@Component({
  selector: 'app-footer',
  imports: [Skeleton],
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly strings = inject(I18n).strings;

  readonly name = input<string | undefined>();

  protected readonly year = new Date().getFullYear();
  protected readonly angularVersion = `${NG_VERSION.major}.${NG_VERSION.minor}`;
  protected readonly materialVersion = `${MAT_VERSION.major}.${MAT_VERSION.minor}`;
}
