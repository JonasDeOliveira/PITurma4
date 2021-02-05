import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilMedicoComponent } from './perfil-medico/perfil-medico.component';
import { DashboardMedicoComponent } from './dashboard-medico/dashboard-medico.component';



@NgModule({
  declarations: [PerfilMedicoComponent, DashboardMedicoComponent],
  imports: [
    CommonModule
  ]
})
export class Grupo4Module { }
