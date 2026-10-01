import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Portfolio } from './data/portfolio';
import { ActiveSection } from './layout/active-section';
import { I18n } from './shared/i18n/i18n';
import { TopAppBar } from './layout/top-app-bar/top-app-bar';
import { BottomNav } from './layout/bottom-nav/bottom-nav';
import { Footer } from './layout/footer/footer';

@Component({
  imports: [RouterOutlet, TopAppBar, BottomNav, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  private readonly title = inject(Title);
  private readonly activeSection = inject(ActiveSection);

  protected readonly strings = inject(I18n).strings;
  protected readonly profile = inject(Portfolio).profile;

  constructor() {
    // Keep the document title in sync with the route and the active locale.
    effect(() => {
      const s = this.strings();
      const profile = this.profile();
      this.title.setTitle(
        this.activeSection.onProjectsPage()
          ? `${s.projects.pageTitle} — ${profile.name}`
          : `${profile.name} — ${profile.role}`,
      );
    });
  }
}
