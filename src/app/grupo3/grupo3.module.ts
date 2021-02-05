import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricoAgservicoComponent } from './historico-agservico/historico-agservico.component';
import { AgservicoComponent } from './agservico/agservico.component';
import { ProcurarPacienteComponent } from './procurar-paciente/procurar-paciente.component';


@NgModule({
  declarations: [HistoricoAgservicoComponent, AgservicoComponent, ProcurarPacienteComponent],
  imports: [
    CommonModule
  ]
})
export class Grupo3Module { }
