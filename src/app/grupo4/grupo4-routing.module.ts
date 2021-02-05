import { Routes } from '@angular/router';
import { DashboardMedicoComponent } from './dashboard-medico/dashboard-medico.component';
import { PerfilMedicoComponent } from './perfil-medico/perfil-medico.component';


export const Grupo4RoutingModule: Routes = [

    {path: 'perfil/medico' , component: PerfilMedicoComponent},
    {path: 'dashboard/medico', component: DashboardMedicoComponent}
  
];
