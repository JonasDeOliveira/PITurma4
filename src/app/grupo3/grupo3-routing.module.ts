import { Routes } from '@angular/router';
import { AgservicoComponent } from './agservico/agservico.component';
import { HistoricoAgservicoComponent } from './historico-agservico/historico-agservico.component';
import { ProcurarPacienteComponent } from './procurar-paciente/procurar-paciente.component';


export const Grupo3RoutingModule: Routes = [
    {path:'historico-agservico', component:HistoricoAgservicoComponent},
    {path:'agservico', component:AgservicoComponent},
    {path:'procurar-paciente', component:ProcurarPacienteComponent}

];

