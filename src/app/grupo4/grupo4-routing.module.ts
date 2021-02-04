import { Routes } from '@angular/router';
import { from } from 'rxjs';
import { AtendimentoEspecialistaComponent } from './atendimento-especialista/atendimento-especialista.component';
import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component'
import { HistoricoPacienteComponent } from './historico-paciente/historico-paciente.component'
import { PrescreverMedicacaoComponent } from './prescrever-medicacao/prescrever-medicacao.component';


export const Grupo4RoutingModule: Routes = [
    {path: 'cadastro/medico' , component: CadastroMedicoComponent},
    {path: 'historico/paciente' , component: HistoricoPacienteComponent},
    { path: 'atendimento/especialista', component: AtendimentoEspecialistaComponent},
    { path: 'prescrever/medicacao', component: PrescreverMedicacaoComponent}
  
];
