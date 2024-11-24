import { Route, Routes } from "@angular/router";
import path from "path";

export default [ 
    {
         path: 'login',
        loadComponent: () => import('./login/login.component'),
    },
    {
        path: 'register',
       loadComponent: () => import('./register/register.component'),
   },

] as Routes;