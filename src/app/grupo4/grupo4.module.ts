import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component';
import { HistoricoPacienteComponent } from './historico-paciente/historico-paciente.component';


@NgModule({
  declarations: [CadastroMedicoComponent, HistoricoPacienteComponent],
  imports: [
    CommonModule
  ]
})
export class Grupo4Module { }
