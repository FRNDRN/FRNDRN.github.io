import { Component, inject, input, InputSignal, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../data/project';
import { I18n } from '../../shared/i18n/i18n';
import { UiStrings } from '../../shared/i18n/ui-strings';
import { Badge } from '../../shared/ui/badge/badge';
import { Skeleton } from '../../shared/ui/skeleton/skeleton';
import { StatCard } from '../../shared/ui/stat-card/stat-card';
import { TagList } from '../../shared/ui/tag-list/tag-list';

@Component({
  selector: 'app-featured-project',
  imports: [MatButtonModule, MatIconModule, Badge, Skeleton, StatCard, TagList],
  styleUrl: './featured-project.scss',
  templateUrl: './featured-project.html',
})
export class FeaturedProject {
  // Inputs
  public readonly project: InputSignal<Project | undefined> = input<Project | undefined>();

  // View state
  protected readonly strings: Signal<UiStrings> = inject(I18n).strings;
  protected readonly placeholderMetrics: readonly number[] = [0, 1, 2];
}
