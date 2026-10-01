import { Component, inject, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../data/project';
import { I18n } from '../../shared/i18n/i18n';
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
  protected readonly strings = inject(I18n).strings;

  readonly project = input<Project | undefined>();

  protected categoryLabel(project: Project): string {
    const labels = this.strings().projects.categories;
    return project.categories.map((category) => labels[category]).join(' · ');
  }
}
