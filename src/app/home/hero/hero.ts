import { Component, inject, input, InputSignal, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Profile } from '../../data/profile';
import { I18n } from '../../shared/i18n/i18n';
import { UiStrings } from '../../shared/i18n/ui-strings';
import { Skeleton } from '../../shared/ui/skeleton/skeleton';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, MatButtonModule, MatIconModule, Skeleton],
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  // Inputs
  public readonly profile: InputSignal<Profile | undefined> = input<Profile | undefined>();

  // View state
  protected readonly strings: Signal<UiStrings> = inject(I18n).strings;
}
