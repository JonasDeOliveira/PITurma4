import { Routes } from '@angular/router';
import { ConfirmacaoAgendamentoComponent } from './confirmacao-agendamento/confirmacao-agendamento.component';
import { PagamentoServicoComponent } from './pagamento-servico/pagamento-servico.component';
import { SustentabilidadeComponent } from './sustentabilidade/sustentabilidade.component';


export const Grupo3RoutingModule: Routes = [
    {path: 'pagamento-servico', component: PagamentoServicoComponent},
    {path: 'sustentabilidade', component: SustentabilidadeComponent},
    {path: 'confirmacao-agendamento', component: ConfirmacaoAgendamentoComponent}
  
];
