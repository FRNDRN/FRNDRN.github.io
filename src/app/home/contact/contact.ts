import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Profile } from '../../data/profile';
import { SectionHeader } from '../../shared/ui/section-header/section-header';
import { Skeleton } from '../../shared/ui/skeleton/skeleton';

@Component({
  selector: 'app-contact',
  imports: [MatButtonModule, MatIconModule, SectionHeader, Skeleton],
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  readonly profile = input<Profile | undefined>();

  protected readonly linkPlaceholders = [0, 1, 2];
}
