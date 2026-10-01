import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { Portfolio } from '../../data/portfolio';
import { I18n } from '../../shared/i18n/i18n';
import { CategoryFilter, filterProjects, parseCategory } from '../filter-projects';
import { FeaturedProject } from '../featured-project/featured-project';
import { NextProjectSlot } from '../next-project-slot/next-project-slot';
import { ProjectCard } from '../project-card/project-card';
import { ProjectFilters } from '../project-filters/project-filters';

@Component({
  selector: 'app-projects-page',
  imports: [
    RouterLink,
    MatIconModule,
    FeaturedProject,
    NextProjectSlot,
    ProjectCard,
    ProjectFilters,
  ],
  styleUrl: './projects-page.scss',
  templateUrl: './projects-page.html',
})
export class ProjectsPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected readonly strings = inject(I18n).strings;
  protected readonly projects = inject(Portfolio).projects;

  // The URL query param is the source of truth for the selected category.
  protected readonly category = toSignal(
    this.route.queryParamMap.pipe(map((params) => parseCategory(params.get('category')))),
    { initialValue: parseCategory(this.route.snapshot.queryParamMap.get('category')) },
  );

  private readonly visible = computed(() => filterProjects(this.projects(), this.category()));

  protected readonly featured = computed(() => this.visible().find((p) => p.featured));
  protected readonly others = computed(() => this.visible().filter((p) => !p.featured));

  protected onCategoryChange(value: CategoryFilter): void {
    this.router.navigate([], {
      queryParams: { category: value === 'all' ? null : value },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}
