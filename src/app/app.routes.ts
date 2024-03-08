import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'timeline',
    loadComponent: () => import('./features/timeline/timeline.component').then((m) => m.TimelineComponent),
    canActivate: [authGuard]
  }
];
