import { Routes } from '@angular/router';
import { AgservicoComponent } from './pages/agservico/agservico.component';
import { HistoricoAgservicoComponent } from './pages/historico-agservico/historico-agservico.component';
import { ProcurarPacienteComponent } from './pages/procurar-paciente/procurar-paciente.component';
import { AgendaAlimentarComponent } from './pages/agenda-alimentar/agenda-alimentar.component';
import { ProgramaNutricionalComponent } from './pages/programa-nutricional/programa-nutricional.component';
import { ResultadoReceitaComponent } from './pages/resultado-receita/resultado-receita.component';
import { ConfirmacaoAgendamentoComponent } from './pages/confirmacao-agendamento/confirmacao-agendamento.component';
import { PagamentoServicoComponent } from './pages/pagamento-servico/pagamento-servico.component';
import { SustentabilidadeComponent } from './pages/sustentabilidade/sustentabilidade.component';
import { PesquisarReceitasComponent } from './pages/pesquisar-receitas/pesquisar-receitas.component'
import { ResultadoBuscarReceitasComponent } from './pages/resultado-buscar-receitas/resultado-buscar-receitas.component';

export const Grupo3RoutingModule: Routes = [

{path: 'agenda-alimentar', component: AgendaAlimentarComponent},
{path: 'resultado-receita', component: ResultadoReceitaComponent},
{path: 'programa-nutricional', component: ProgramaNutricionalComponent},
{path: 'agservico', component:AgservicoComponent},
{path: 'procurar-paciente', component:ProcurarPacienteComponent},
{path: 'pagamento-servico', component: PagamentoServicoComponent},
{path: 'sustentabilidade', component: SustentabilidadeComponent},
{path: 'confirmacao-agendamento', component: ConfirmacaoAgendamentoComponent},
{path: 'pesquisar-receitas', component: PesquisarReceitasComponent},
{path: 'resultado-buscar-receitas', component: ResultadoBuscarReceitasComponent},
{path: 'historico-agservico', component:HistoricoAgservicoComponent}

];

