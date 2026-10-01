import { computed, inject, Service } from '@angular/core';
import { I18n } from '../shared/i18n/i18n';
import { buildPortfolio } from './mock-data';

@Service()
export class Portfolio {
  private readonly i18n = inject(I18n);

  private readonly content = computed(() => buildPortfolio(this.i18n.locale()));

  readonly profile = computed(() => this.content().profile);
  readonly experiences = computed(() => this.content().experiences);
  readonly projects = computed(() => this.content().projects);
  readonly skills = computed(() => this.content().skills);
  readonly education = computed(() => this.content().education);
  readonly now = computed(() => this.content().now);
}
