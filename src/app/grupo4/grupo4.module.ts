import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component';
import { HistoricoPacienteComponent } from './historico-paciente/historico-paciente.component';
import { AgendaMedicoComponent } from './agenda-medico/agenda-medico.component';
import { LoginMedicoComponent } from './login-medico/login-medico.component';
import { SolicitacaoExamesComponent } from './solicitacao-exames/solicitacao-exames.component';
import { PerfilMedicoComponent } from './perfil-medico/perfil-medico.component';
import { DashboardMedicoComponent } from './dashboard-medico/dashboard-medico.component';

@NgModule({
  declarations: [CadastroMedicoComponent, HistoricoPacienteComponent, AgendaMedicoComponent, LoginMedicoComponent, SolicitacaoExamesComponent, PerfilMedicoComponent, DashboardMedicoComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class Grupo4Module { }
