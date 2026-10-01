import { Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { I18n } from '../../shared/i18n/i18n';
import { Project } from '../../data/project';
import { CategoryFilter, filterProjects } from '../../projects/filter-projects';
import { FeaturedProject } from '../../projects/featured-project/featured-project';
import { NextProjectSlot } from '../../projects/next-project-slot/next-project-slot';
import { ProjectCard } from '../../projects/project-card/project-card';
import { ProjectFilters } from '../../projects/project-filters/project-filters';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

const MAX_CARDS = 4;

@Component({
  selector: 'app-projects-section',
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    FeaturedProject,
    NextProjectSlot,
    ProjectCard,
    ProjectFilters,
    SectionHeader,
  ],
  styleUrl: './projects-section.scss',
  templateUrl: './projects-section.html',
})
export class ProjectsSection {
  protected readonly strings = inject(I18n).strings;

  readonly projects = input<readonly Project[] | undefined>();

  protected readonly category = signal<CategoryFilter>('all');

  private readonly visible = computed(() => {
    const list = this.projects();
    return list ? filterProjects(list, this.category()) : undefined;
  });

  protected readonly featured = computed(() => this.visible()?.find((p) => p.featured));
  protected readonly others = computed(() => this.visible()?.filter((p) => !p.featured) ?? []);
  protected readonly shown = computed(() => this.others().slice(0, MAX_CARDS));
  protected readonly hasMore = computed(() => this.others().length > MAX_CARDS);

  protected readonly cardPlaceholders = [0, 1, 2];
}
