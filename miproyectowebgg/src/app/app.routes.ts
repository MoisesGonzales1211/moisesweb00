import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'autenticacion',
        loadChildren: () => import('./autenticacion/features/autenticacion.routes'),
    }
  //  {path: 'tasks'}
];
