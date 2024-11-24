import {  Routes } from '@angular/router';
  import path from 'path';

export const routes: Routes = [
 {
   path: 'autenticacion',
   loadChildren: () => import('./autenticacion/autenticacion.component')
 },
 // {path: 'tanks';}
];