import { Component, effect, inject, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Portfolio } from './data/portfolio';
import { Profile } from './data/profile';
import { ActiveSection } from './layout/active-section';
import { I18n } from './shared/i18n/i18n';
import { UiStrings } from './shared/i18n/ui-strings';
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
  // Dependencies
  private readonly title: Title = inject(Title);
  private readonly activeSection: ActiveSection = inject(ActiveSection);

  // View state
  protected readonly strings: Signal<UiStrings> = inject(I18n).strings;
  protected readonly profile: Signal<Profile> = inject(Portfolio).profile;

  public constructor() {
    // Keep the document title in sync with the route and the active locale.
    effect(() => {
      const strings: UiStrings = this.strings();
      const profile: Profile = this.profile();
      this.title.setTitle(
        this.activeSection.onProjectsPage()
          ? `${strings.sections.projects.title} — ${profile.name}`
          : `${profile.name} — ${profile.role}`,
      );
    });
  }
}
