import { Routes } from '@angular/router';

import { AtendimentoEspecialistaComponent } from './atendimento-especialista/atendimento-especialista.component';
import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component';
import { HistoricoPacienteComponent } from './historico-paciente/historico-paciente.component';
import { PrescreverMedicacaoComponent } from './prescrever-medicacao/prescrever-medicacao.component';
import { AgendaMedicoComponent } from './agenda-medico/agenda-medico.component';
import { LoginMedicoComponent } from './login-medico/login-medico.component';
import { SolicitacaoExamesComponent } from './solicitacao-exames/solicitacao-exames.component';
import { DashboardMedicoComponent } from './dashboard-medico/dashboard-medico.component';
import { PerfilMedicoComponent } from './perfil-medico/perfil-medico.component';


export const Grupo4RoutingModule: Routes = [
    {path: 'cadastro/medico' , component: CadastroMedicoComponent},
    {path: 'historico/paciente' , component: HistoricoPacienteComponent},
    { path: 'atendimento/especialista', component: AtendimentoEspecialistaComponent},
    { path: 'prescrever/medicacao', component: PrescreverMedicacaoComponent},
    { path: 'agenda/medico', component: AgendaMedicoComponent},
    { path: 'login/medico', component:LoginMedicoComponent},
    { path: 'solicitacao/exames', component:SolicitacaoExamesComponent},
    {path: 'perfil/medico' , component: PerfilMedicoComponent},
    {path: 'dashboard/medico', component: DashboardMedicoComponent}
  
];
