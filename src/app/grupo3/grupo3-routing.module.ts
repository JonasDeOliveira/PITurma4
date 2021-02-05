import { Routes } from '@angular/router';
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
  
];

