import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component';
import { HistoricoPacienteComponent } from './historico-paciente/historico-paciente.component';
import { AgendaMedicoComponent } from './agenda-medico/agenda-medico.component';


@NgModule({
  declarations: [CadastroMedicoComponent, HistoricoPacienteComponent, AgendaMedicoComponent],
  imports: [
    CommonModule
  ]
})
export class Grupo4Module { }
