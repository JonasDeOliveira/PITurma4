import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Grupo1RoutingModule } from './grupo1/grupo1-routing.module';
import { Grupo2RoutingModule } from './grupo2/grupo2-routing.module';
import { Grupo3RoutingModule } from './grupo3/grupo3-routing.module';
import { Grupo4RoutingModule } from './grupo4/grupo4-routing.module';


const routes: Routes = [
 // {
   // path: '',
    //redirectTo: 'grupo3/resultado-buscar-receitas',
    //pathMatch: 'full'
  //},
  ...Grupo1RoutingModule,
  ...Grupo2RoutingModule,
  ...Grupo3RoutingModule,
  ...Grupo4RoutingModule

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
