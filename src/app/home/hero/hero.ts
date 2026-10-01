import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Profile } from '../../data/profile';
import { I18n } from '../../shared/i18n/i18n';
import { Skeleton } from '../../shared/ui/skeleton/skeleton';
import { Oscilloscope } from './oscilloscope/oscilloscope';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, MatButtonModule, MatIconModule, Skeleton, Oscilloscope],
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly strings = inject(I18n).strings;

  readonly profile = input<Profile | undefined>();
}
