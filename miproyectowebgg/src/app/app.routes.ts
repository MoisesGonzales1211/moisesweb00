import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'autenticacion/lo-gin', pathMatch: 'full', // redirige al login 
  },
    {
        path: 'autenticacion',
        loadChildren: () => import('./autenticacion/features/autenticacion.routes').then(
          (mod) => mod.default),
    }
    
  //  {path: 'tasks'}
];
