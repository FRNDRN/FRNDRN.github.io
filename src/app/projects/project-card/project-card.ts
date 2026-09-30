import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PROJECT_CATEGORY_LABELS, Project } from '../../data/project';
import { Badge } from '../../shared/ui/badge/badge';
import { Skeleton } from '../../shared/ui/skeleton/skeleton';
import { TagList } from '../../shared/ui/tag-list/tag-list';

@Component({
  selector: 'app-project-card',
  imports: [NgOptimizedImage, MatIconModule, Badge, Skeleton, TagList],
  styleUrl: './project-card.scss',
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly project = input<Project | undefined>();

  protected categoryLabel(project: Project): string {
    return project.categories.map((category) => PROJECT_CATEGORY_LABELS[category]).join(' · ');
  }
}
