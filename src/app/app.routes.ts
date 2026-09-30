import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then(m => m.Home),
    title: 'Franco Andrian — Electronics & Software Engineer',
  },
  {
    path: 'projects',
    loadComponent: () => import('./projects/projects-page/projects-page').then(m => m.ProjectsPage),
    title: 'Projects — Franco Andrian',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
