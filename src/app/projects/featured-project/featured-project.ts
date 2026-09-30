import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../data/project';
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
  readonly project = input<Project | undefined>();

  protected readonly placeholderMetrics = [0, 1, 2];
}
