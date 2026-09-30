import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Profile } from '../../data/profile';
import { Skeleton } from '../../shared/ui/skeleton/skeleton';
import { Oscilloscope } from './oscilloscope/oscilloscope';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, MatButtonModule, MatIconModule, Skeleton, Oscilloscope],
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  readonly profile = input<Profile | undefined>();
}
