import { Component, inject, input } from '@angular/core';
import { Profile } from '../../data/profile';
import { I18n } from '../../shared/i18n/i18n';
import { SectionHeader } from '../../shared/ui/section-header/section-header';
import { StatCard } from '../../shared/ui/stat-card/stat-card';
import { Skeleton } from '../../shared/ui/skeleton/skeleton';
import { ProfilePhoto } from './profile-photo/profile-photo';

@Component({
  selector: 'app-about',
  imports: [SectionHeader, StatCard, Skeleton, ProfilePhoto],
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  protected readonly strings = inject(I18n).strings;

  readonly profile = input<Profile | undefined>();

  protected readonly placeholderParagraphs = [0, 1];
  protected readonly placeholderStats = [0, 1, 2];
}
