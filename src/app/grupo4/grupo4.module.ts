import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component';
import { HistoricoPacienteComponent } from './historico-paciente/historico-paciente.component';
import { AgendaMedicoComponent } from './agenda-medico/agenda-medico.component';
import { LoginMedicoComponent } from './login-medico/login-medico.component';
import { SolicitacaoExamesComponent } from './solicitacao-exames/solicitacao-exames.component';
import { AtendimentoEspecialistaComponent } from './atendimento-especialista/atendimento-especialista.component';
import { PrescreverMedicacaoComponent } from './prescrever-medicacao/prescrever-medicacao.component';
import { PerfilMedicoComponent } from './perfil-medico/perfil-medico.component';
import { DashboardMedicoComponent } from './dashboard-medico/dashboard-medico.component';
import {CadastromedicoService} from './cadastro-medico/cadastromedico.service';
  import { from } from 'rxjs';
@NgModule({
  declarations: [
    PerfilMedicoComponent, 
    PrescreverMedicacaoComponent, 
    AtendimentoEspecialistaComponent, 
    DashboardMedicoComponent,
    CadastroMedicoComponent, 
    HistoricoPacienteComponent, 
    AgendaMedicoComponent, 
    LoginMedicoComponent, 
    SolicitacaoExamesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],

  providers: [
    CadastromedicoService
  ]
})
export class Grupo4Module { }
