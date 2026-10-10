import {
  Component,
  computed,
  inject,
  input,
  InputSignal,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { I18n } from '../../shared/i18n/i18n';
import { UiStrings } from '../../shared/i18n/ui-strings';
import { Project } from '../../data/project';
import { CategoryFilter, filterProjects } from '../../projects/filter-projects';
import { FeaturedProject } from '../../projects/featured-project/featured-project';
import { ProjectCard } from '../../projects/project-card/project-card';
import { ProjectFilters } from '../../projects/project-filters/project-filters';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

const MAX_CARDS: number = 4;

@Component({
  selector: 'app-projects-section',
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    FeaturedProject,
    ProjectCard,
    ProjectFilters,
    SectionHeader,
  ],
  styleUrl: './projects-section.scss',
  templateUrl: './projects-section.html',
})
export class ProjectsSection {
  // Inputs
  public readonly projects: InputSignal<readonly Project[] | undefined> = input<
    readonly Project[] | undefined
  >();

  // State
  protected readonly category: WritableSignal<CategoryFilter> = signal<CategoryFilter>('all');
  private readonly visible: Signal<readonly Project[] | undefined> = computed(() => {
    const list: readonly Project[] | undefined = this.projects();
    return list !== undefined ? filterProjects(list, this.category()) : undefined;
  });

  // View state
  protected readonly strings: Signal<UiStrings> = inject(I18n).strings;
  protected readonly featured: Signal<Project | undefined> = computed(() =>
    this.visible()?.find((project) => project.featured),
  );
  protected readonly others: Signal<readonly Project[]> = computed(
    () => this.visible()?.filter((project) => !project.featured) ?? [],
  );
  protected readonly shown: Signal<readonly Project[]> = computed(() =>
    this.others().slice(0, MAX_CARDS),
  );
  protected readonly hasMore: Signal<boolean> = computed(() => this.others().length > MAX_CARDS);
  protected readonly cardPlaceholders: readonly number[] = [0, 1, 2];
}
