import { Component, inject, input, InputSignal, Signal } from '@angular/core';
import { Profile } from '../../data/profile';
import { I18n } from '../../shared/i18n/i18n';
import { UiStrings } from '../../shared/i18n/ui-strings';
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
  // Inputs
  public readonly profile: InputSignal<Profile | undefined> = input<Profile | undefined>();

  // View state
  protected readonly strings: Signal<UiStrings> = inject(I18n).strings;
  protected readonly placeholderParagraphs: readonly number[] = [0, 1];
  protected readonly placeholderStats: readonly number[] = [0, 1, 2];
}
