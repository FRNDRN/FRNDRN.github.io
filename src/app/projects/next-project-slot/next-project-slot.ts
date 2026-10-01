import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { I18n } from '../../shared/i18n/i18n';

@Component({
  selector: 'app-next-project-slot',
  imports: [MatIconModule],
  styleUrl: './next-project-slot.scss',
  templateUrl: './next-project-slot.html',
})
export class NextProjectSlot {
  protected readonly strings = inject(I18n).strings;
}
