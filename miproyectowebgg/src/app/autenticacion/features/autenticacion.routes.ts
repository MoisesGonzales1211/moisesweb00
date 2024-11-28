import { Routes } from '@angular/router';

export default [
    {
        path: 'lo-gin',
        loadComponent: () => 
            import('./lo-gin/lo-gin.component').then((mod)=> mod.default),
    },
    {
        path: 'reg-ister',
        loadComponent: () => 
            import('./reg-ister/reg-ister.component').then((mod) => mod.default),
    }
] as Routes;
