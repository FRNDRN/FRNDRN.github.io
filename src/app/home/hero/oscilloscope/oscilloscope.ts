import { Component, inject } from '@angular/core';
import { I18n } from '../../../shared/i18n/i18n';

@Component({
  selector: 'app-oscilloscope',
  styleUrl: './oscilloscope.scss',
  templateUrl: './oscilloscope.html',
})
export class Oscilloscope {
  protected readonly strings = inject(I18n).strings;
}
