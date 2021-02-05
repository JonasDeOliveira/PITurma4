import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginMedicoComponent } from './login-medico/login-medico.component';
import { SolicitacaoExamesComponent } from './solicitacao-exames/solicitacao-exames.component';



@NgModule({
  declarations: [LoginMedicoComponent, SolicitacaoExamesComponent],
  imports: [
    CommonModule
  ]
})
export class Grupo4Module { }
