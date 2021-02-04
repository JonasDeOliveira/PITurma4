import { Routes } from '@angular/router';
import { from } from 'rxjs';
import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component'
import { HistoricoPacienteComponent } from './historico-paciente/historico-paciente.component'


export const Grupo4RoutingModule: Routes = [
    {path: 'cadastro/medico' , component: CadastroMedicoComponent},
    {path: 'historico/paciente' , component: HistoricoPacienteComponent}
  
];
