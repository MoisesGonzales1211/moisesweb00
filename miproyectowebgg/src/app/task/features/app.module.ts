import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Importa el módulo de enrutamiento
import taskRoutes from './task.routes'; // Asegúrate de que la ruta esté importada



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(taskRoutes), // Registra las rutas en tu módulo
  ],
  providers: [],
  bootstrap: [], // Si tu componente principal es TaskListComponent
})
export class AppModule {}
