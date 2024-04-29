import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'movie-synopsis',
    loadComponent: () => import('./movie-synopsis/movie-synopsis.page').then( m => m.MovieSynopsisPage)
  },
];
