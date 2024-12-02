import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/auth.guard';

export const routes: Routes = [
 
    {
      canActivateChild: [publicGuard ()],
        path: 'autenticacion',
        loadChildren: () => import('./autenticacion/features/autenticacion.routes').then(
          (mod) => mod.default),
    },
    {
      canActivateChild: [privateGuard()],
      path: 'tasks',
      loadChildren: () => import('./task/features/task.routes')
    },
    {
      path: '**',
      redirectTo: '/tasks',
    },    
];
