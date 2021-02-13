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
<<<<<<< HEAD
import { TipoRefeicaoService } from './shared/tipoRefeicao.service';


=======
import { LojaService } from './shared/lojas.service';
>>>>>>> 50794aaeb0bb89c5e9f489487b47ee6dccc6efc9

@NgModule({
  
  declarations: [PagamentoServicoComponent, SustentabilidadeComponent, ConfirmacaoAgendamentoComponent,PesquisarReceitasComponent, ResultadoBuscarReceitasComponent, HistoricoAgservicoComponent, AgservicoComponent, HistoricoAgservicoComponent, AgservicoComponent, ProcurarPacienteComponent, ProgramaNutricionalComponent, AgendaAlimentarComponent, ResultadoReceitaComponent],
  
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
<<<<<<< HEAD
    ProgramaNutricionalComponent
  ],
providers:[
 TipoRefeicaoService
]
=======
    SustentabilidadeComponent
  ],
  providers: [
    LojaService
  ]

>>>>>>> 50794aaeb0bb89c5e9f489487b47ee6dccc6efc9
})
export class Grupo3Module { }
