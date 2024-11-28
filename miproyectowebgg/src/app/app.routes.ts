import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'autenticacion/lo-gin', // Redirige al login
    pathMatch: 'full',
  },
    {
        path: 'autenticacion',
        loadChildren: () => import('./autenticacion/features/autenticacion.routes').then(
          (mod) => mod.default
    }
  //  {path: 'tasks'}
];
