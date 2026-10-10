import { Component, inject, input, InputSignal, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Profile } from '../../data/profile';
import { I18n } from '../../shared/i18n/i18n';
import { UiStrings } from '../../shared/i18n/ui-strings';
import { SectionHeader } from '../../shared/ui/section-header/section-header';
import { Skeleton } from '../../shared/ui/skeleton/skeleton';

@Component({
  selector: 'app-contact',
  imports: [MatButtonModule, MatIconModule, SectionHeader, Skeleton],
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  // Inputs
  public readonly profile: InputSignal<Profile | undefined> = input<Profile | undefined>();

  // View state
  protected readonly strings: Signal<UiStrings> = inject(I18n).strings;
  protected readonly linkPlaceholders: readonly number[] = [0, 1, 2];
}
