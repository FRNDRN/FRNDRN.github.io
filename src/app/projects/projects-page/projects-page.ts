import { Component, computed, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { Portfolio } from '../../data/portfolio';
import { Project } from '../../data/project';
import { I18n } from '../../shared/i18n/i18n';
import { UiStrings } from '../../shared/i18n/ui-strings';
import { CategoryFilter, filterProjects, parseCategory } from '../filter-projects';
import { FeaturedProject } from '../featured-project/featured-project';
import { ProjectCard } from '../project-card/project-card';
import { ProjectFilters } from '../project-filters/project-filters';

@Component({
  selector: 'app-projects-page',
  imports: [RouterLink, MatIconModule, FeaturedProject, ProjectCard, ProjectFilters],
  styleUrl: './projects-page.scss',
  templateUrl: './projects-page.html',
})
export class ProjectsPage {
  // Dependencies
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly router: Router = inject(Router);

  // State
  protected readonly projects: Signal<readonly Project[]> = inject(Portfolio).projects;
  // The URL query param is the source of truth for the selected category.
  protected readonly category: Signal<CategoryFilter> = toSignal(
    this.route.queryParamMap.pipe(map((params: ParamMap) => parseCategory(params.get('category')))),
    { initialValue: parseCategory(this.route.snapshot.queryParamMap.get('category')) },
  );
  private readonly visible: Signal<readonly Project[]> = computed(() =>
    filterProjects(this.projects(), this.category()),
  );

  // View state
  protected readonly strings: Signal<UiStrings> = inject(I18n).strings;
  protected readonly featured: Signal<Project | undefined> = computed(() =>
    this.visible().find((project) => project.featured),
  );
  protected readonly others: Signal<readonly Project[]> = computed(() =>
    this.visible().filter((project) => !project.featured),
  );

  // Events
  protected onCategoryChange(value: CategoryFilter): void {
    this.router.navigate([], {
      queryParams: { category: value === 'all' ? null : value },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}
