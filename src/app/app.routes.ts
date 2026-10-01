import { Routes } from '@angular/router';

// Document titles are set reactively (and localised) from App, so no static titles here.
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'projects',
    loadComponent: () => import('./projects/projects-page/projects-page').then((m) => m.ProjectsPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
