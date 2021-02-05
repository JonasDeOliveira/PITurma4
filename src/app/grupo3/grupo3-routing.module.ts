import { Routes } from '@angular/router';
<<<<<<< HEAD
import { AgendaAlimentarComponent } from './agenda-alimentar/agenda-alimentar.component';
import { ProgramaNutricionalComponent } from './programa-nutricional/programa-nutricional.component';
import { ResultadoReceitaComponent } from './resultado-receita/resultado-receita.component';


export const Grupo3RoutingModule: Routes = [

  {path:'agenda-alimentar', component: AgendaAlimentarComponent},
{path: 'resultado-receita', component: ResultadoReceitaComponent},
{path:'programa-nutricional', component: ProgramaNutricionalComponent}

=======
import { ConfirmacaoAgendamentoComponent } from './confirmacao-agendamento/confirmacao-agendamento.component';
import { PagamentoServicoComponent } from './pagamento-servico/pagamento-servico.component';
import { SustentabilidadeComponent } from './sustentabilidade/sustentabilidade.component';
import { PesquisarReceitasComponent } from './pesquisar-receitas/pesquisar-receitas.component'
import { ResultadoBuscarReceitasComponent } from './resultado-buscar-receitas/resultado-buscar-receitas.component';
import { HistoricoAgservicoComponent } from './historico-agservico/historico-agservico.component';

export const Grupo3RoutingModule: Routes = [
    {path: 'pagamento-servico', component: PagamentoServicoComponent},
    {path: 'sustentabilidade', component: SustentabilidadeComponent},
    {path: 'confirmacao-agendamento', component: ConfirmacaoAgendamentoComponent},
    {path: 'pesquisar-receitas', component: PesquisarReceitasComponent},
    {path: 'resultado-buscar-receitas', component: ResultadoBuscarReceitasComponent},
    {path:'historico-agservico', component:HistoricoAgservicoComponent}
  
>>>>>>> 57df746f998dcee78ed61e53590ebff56bd169f1
];

