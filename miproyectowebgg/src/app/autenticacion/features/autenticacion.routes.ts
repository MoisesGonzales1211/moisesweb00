import { Routes } from '@angular/router';

export default [
    {
        path: 'lo-gin',
        loadComponent: () => import('./lo-gin/lo-gin.component'),
    },
    {
        path: 'reg-ister',
        loadComponent: () => import('./reg-ister/reg-ister.component'),
    }
] as Routes;
