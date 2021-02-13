import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProgramaNutricionalComponent } from './programa-nutricional/programa-nutricional.component';
import { AgendaAlimentarComponent } from './agenda-alimentar/agenda-alimentar.component';
import { ResultadoReceitaComponent } from './resultado-receita/resultado-receita.component';
import { PagamentoServicoComponent } from './pagamento-servico/pagamento-servico.component';
import { SustentabilidadeComponent } from './sustentabilidade/sustentabilidade.component';
import { ConfirmacaoAgendamentoComponent } from './confirmacao-agendamento/confirmacao-agendamento.component';
import { PesquisarReceitasComponent } from './pesquisar-receitas/pesquisar-receitas.component';
import { ResultadoBuscarReceitasComponent } from './resultado-buscar-receitas/resultado-buscar-receitas.component';
import { HistoricoAgservicoComponent } from './historico-agservico/historico-agservico.component';
import { AgservicoComponent } from './agservico/agservico.component';
import { ProcurarPacienteComponent } from './procurar-paciente/procurar-paciente.component';
import { TipoRefeicaoService } from './shared/tipoRefeicao.service';
import { LojaService } from './shared/lojas.service';
<<<<<<< HEAD
=======

>>>>>>> 3f08756588d242af82df5d3515447db5cdebab7d

@NgModule({
  
  declarations: [PagamentoServicoComponent, SustentabilidadeComponent, ConfirmacaoAgendamentoComponent,PesquisarReceitasComponent, ResultadoBuscarReceitasComponent, HistoricoAgservicoComponent, AgservicoComponent, HistoricoAgservicoComponent, AgservicoComponent, ProcurarPacienteComponent, ProgramaNutricionalComponent, AgendaAlimentarComponent, ResultadoReceitaComponent],
  
  imports: [
    CommonModule,
    RouterModule
  ],

  exports: [
<<<<<<< HEAD
    ProgramaNutricionalComponent,
    SustentabilidadeComponent
  ],

  providers:[
    TipoRefeicaoService,
    LojaService
  ]

  
=======
ProgramaNutricionalComponent,
SustentabilidadeComponent
  ],
providers:[
 TipoRefeicaoService,
 LojaService
]
>>>>>>> 3f08756588d242af82df5d3515447db5cdebab7d
})
export class Grupo3Module { }
