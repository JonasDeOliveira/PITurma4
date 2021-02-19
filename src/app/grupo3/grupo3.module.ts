import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ProgramaNutricionalComponent } from './pages/programa-nutricional/programa-nutricional.component';
import { AgendaAlimentarComponent } from './pages/agenda-alimentar/agenda-alimentar.component';
import { ResultadoReceitaComponent } from './pages/resultado-receita/resultado-receita.component';
import { PagamentoServicoComponent } from './pages/pagamento-servico/pagamento-servico.component';
import { SustentabilidadeComponent } from './pages/sustentabilidade/sustentabilidade.component';
import { ConfirmacaoAgendamentoComponent } from './pages/confirmacao-agendamento/confirmacao-agendamento.component';
import { PesquisarReceitasComponent } from './pages/pesquisar-receitas/pesquisar-receitas.component';
import { ResultadoBuscarReceitasComponent } from './pages/resultado-buscar-receitas/resultado-buscar-receitas.component';
import { HistoricoAgservicoComponent } from './pages/historico-agservico/historico-agservico.component';
import { AgservicoComponent } from './pages/agservico/agservico.component';
import { ProcurarPacienteComponent } from './pages/procurar-paciente/procurar-paciente.component';
import { ReceitaService } from './shared/service/receitas.service';
import { LojaService } from './shared/service/lojas.service';
import { ProgramaNutriService } from './shared/ProgramaNutri/service/programaNutri.service';
import { TipoRefeicaoService } from './shared/ProgramaNutri/service/tipoRefeicao.service';
import { PipeComponent } from './pipe/pipe.component';
import { AgServico } from './shared/model/agservico.model';
import { Grupo1Module } from '../grupo1/grupo1.module';




@NgModule({
  
  declarations: [PagamentoServicoComponent, SustentabilidadeComponent, ConfirmacaoAgendamentoComponent,PesquisarReceitasComponent, ResultadoBuscarReceitasComponent, HistoricoAgservicoComponent, AgservicoComponent, HistoricoAgservicoComponent, AgservicoComponent, ProcurarPacienteComponent, ProgramaNutricionalComponent, AgendaAlimentarComponent, ResultadoReceitaComponent, PipeComponent],
  
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatIconModule,
    Grupo1Module
    ],
  exports: [
    PesquisarReceitasComponent,
    ProgramaNutricionalComponent,
    SustentabilidadeComponent
  ],
  providers: [
    ReceitaService,
    ProgramaNutriService,
    LojaService,
    TipoRefeicaoService,
    AgServico  
  ]
})
export class Grupo3Module { }

