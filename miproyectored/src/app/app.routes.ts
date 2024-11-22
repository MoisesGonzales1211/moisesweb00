import { RouterLink, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


export const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' }, 
   { path: 'login', component: LoginComponent }, 
   {path:'register',
      loadComponent: ()=> import('./register/register.component').then(m=>m.RegisterComponent)
   }
];

@NgModule({
   declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
    bootstrap:[]
    
   
  })
  export class  AppRoutingModule{}