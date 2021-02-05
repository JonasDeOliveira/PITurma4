import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentoServicoComponent } from './pagamento-servico/pagamento-servico.component';
import { SustentabilidadeComponent } from './sustentabilidade/sustentabilidade.component';
import { ConfirmacaoAgendamentoComponent } from './confirmacao-agendamento/confirmacao-agendamento.component';


@NgModule({
  declarations: [PagamentoServicoComponent, SustentabilidadeComponent, ConfirmacaoAgendamentoComponent],
  imports: [
    CommonModule
  ]
})
export class Grupo3Module { }
