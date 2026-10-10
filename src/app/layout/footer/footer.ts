import {
  Component,
  inject,
  input,
  InputSignal,
  Signal,
  VERSION as NG_VERSION,
} from '@angular/core';
import { VERSION as MAT_VERSION } from '@angular/material/core';
import { I18n } from '../../shared/i18n/i18n';
import { UiStrings } from '../../shared/i18n/ui-strings';
import { Skeleton } from '../../shared/ui/skeleton/skeleton';

@Component({
  selector: 'app-footer',
  imports: [Skeleton],
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  // Inputs
  public readonly name: InputSignal<string | undefined> = input<string | undefined>();

  // View state
  protected readonly strings: Signal<UiStrings> = inject(I18n).strings;
  protected readonly year: number = new Date().getFullYear();
  protected readonly angularVersion: string = `${NG_VERSION.major}.${NG_VERSION.minor}`;
  protected readonly materialVersion: string = `${MAT_VERSION.major}.${MAT_VERSION.minor}`;
}
