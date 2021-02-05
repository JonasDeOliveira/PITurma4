import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { PerfilMedicoComponent } from './perfil-medico/perfil-medico.component';
import { DashboardMedicoComponent } from './dashboard-medico/dashboard-medico.component';



@NgModule({
  declarations: [PerfilMedicoComponent, DashboardMedicoComponent],
=======
import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component';
import { HistoricoPacienteComponent } from './historico-paciente/historico-paciente.component';
import { AgendaMedicoComponent } from './agenda-medico/agenda-medico.component';
import { LoginMedicoComponent } from './login-medico/login-medico.component';
import { SolicitacaoExamesComponent } from './solicitacao-exames/solicitacao-exames.component';

@NgModule({
  declarations: [CadastroMedicoComponent, HistoricoPacienteComponent, AgendaMedicoComponent, LoginMedicoComponent, SolicitacaoExamesComponent],
>>>>>>> 166fe4417cc40b07af9fe337b944450aab15b37b
  imports: [
    CommonModule
  ]
})
export class Grupo4Module { }
