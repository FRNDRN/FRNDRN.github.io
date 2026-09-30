import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../data/project';
import { CategoryFilter, filterProjects, parseCategory } from '../filter-projects';
import { FeaturedProject } from '../featured-project/featured-project';
import { NextProjectSlot } from '../next-project-slot/next-project-slot';
import { ProjectCard } from '../project-card/project-card';
import { ProjectFilters } from '../project-filters/project-filters';
import { Skeleton } from '../../shared/ui/skeleton/skeleton';

@Component({
  selector: 'app-projects-page',
  imports: [
    RouterLink,
    MatIconModule,
    FeaturedProject,
    NextProjectSlot,
    ProjectCard,
    ProjectFilters,
    Skeleton,
  ],
  styleUrl: './projects-page.scss',
  templateUrl: './projects-page.html',
})
export class ProjectsPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  // No data service yet: everything shows its skeleton state.
  protected readonly projects = signal<readonly Project[] | undefined>(undefined);

  // The URL query param is the source of truth for the selected category.
  protected readonly category = toSignal(
    this.route.queryParamMap.pipe(map((params) => parseCategory(params.get('category')))),
    { initialValue: parseCategory(this.route.snapshot.queryParamMap.get('category')) },
  );

  private readonly visible = computed(() => {
    const list = this.projects();
    return list ? filterProjects(list, this.category()) : undefined;
  });

  protected readonly featured = computed(() => this.visible()?.find((p) => p.featured));
  protected readonly others = computed(() => this.visible()?.filter((p) => !p.featured) ?? []);

  protected readonly cardPlaceholders = [0, 1, 2, 3, 4];

  protected onCategoryChange(value: CategoryFilter): void {
    this.router.navigate([], {
      queryParams: { category: value === 'all' ? null : value },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}
