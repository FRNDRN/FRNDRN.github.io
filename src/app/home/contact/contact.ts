import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Profile } from '../../data/profile';
import { I18n } from '../../shared/i18n/i18n';
import { SectionHeader } from '../../shared/ui/section-header/section-header';
import { Skeleton } from '../../shared/ui/skeleton/skeleton';

@Component({
  selector: 'app-contact',
  imports: [MatButtonModule, MatIconModule, SectionHeader, Skeleton],
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly strings = inject(I18n).strings;

  readonly profile = input<Profile | undefined>();

  protected readonly linkPlaceholders = [0, 1, 2];
}
