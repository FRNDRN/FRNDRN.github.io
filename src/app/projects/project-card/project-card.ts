import { Component, inject, input, InputSignal, Signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Project, ProjectCategory } from '../../data/project';
import { I18n } from '../../shared/i18n/i18n';
import { UiStrings } from '../../shared/i18n/ui-strings';
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
  // Inputs
  public readonly project: InputSignal<Project | undefined> = input<Project | undefined>();

  // View state
  protected readonly strings: Signal<UiStrings> = inject(I18n).strings;

  // Template helpers
  protected categoryLabel(project: Project): string {
    const labels: Record<ProjectCategory, string> = this.strings().projects.categories;
    return project.categories.map((category) => labels[category]).join(' · ');
  }
}
