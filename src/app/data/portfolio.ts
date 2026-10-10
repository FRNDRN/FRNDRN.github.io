import { computed, inject, Service, Signal } from '@angular/core';
import { I18n } from '../shared/i18n/i18n';
import { Locale } from '../shared/i18n/locale';
import { profileContent } from './content/profile.content';
import { experienceContent } from './content/experience.content';
import { skillsContent } from './content/skills.content';
import { educationContent } from './content/education.content';
import { projectsContent } from './content/projects';
import { Translate } from './content/translate';
import { Profile } from './profile';
import { Experience } from './experience';
import { Project } from './project';
import { SkillGroup } from './skill';
import { EducationItem } from './education';

// The content is static for now. This service is the single point that changes if the data
// later comes from JSON or an API; presentation components never import the content directly.
@Service()
export class Portfolio {
  // Dependencies
  private readonly i18n: I18n = inject(I18n);

  // State
  private readonly t: Signal<Translate> = computed<Translate>(() => {
    const locale: Locale = this.i18n.locale();
    return (en: string, es: string): string => (locale === 'es' ? es : en);
  });

  // Content
  public readonly profile: Signal<Profile> = computed(() => profileContent(this.t()));
  public readonly experience: Signal<readonly Experience[]> = computed(() =>
    experienceContent(this.t()),
  );
  public readonly projects: Signal<readonly Project[]> = computed(() => projectsContent(this.t()));
  public readonly skills: Signal<readonly SkillGroup[]> = computed(() => skillsContent(this.t()));
  public readonly education: Signal<readonly EducationItem[]> = computed(() =>
    educationContent(this.t()),
  );

  // Derived
  public readonly featuredProject: Signal<Project | undefined> = computed(() =>
    this.projects().find((project) => project.featured),
  );
  public readonly otherProjects: Signal<readonly Project[]> = computed(() =>
    this.projects().filter((project) => !project.featured),
  );

  public projectBySlug(slug: string): Project | undefined {
    return this.projects().find((project) => project.slug === slug);
  }
}
