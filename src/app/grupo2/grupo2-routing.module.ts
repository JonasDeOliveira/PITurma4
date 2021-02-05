import { Routes} from '@angular/router';
import { AgendamentoConsultasComponent } from './pages/agendamento-consultas/agendamento-consultas.component';
import { CalendarioAgendamentoComponent } from './pages/calendario-agendamento/calendario-agendamento.component';
import { EscolhaEspecialistaComponent} from './pages/escolha-especialista/escolha-especialista.component';
import { PagamentoPlanoComponent} from './pages/pagamento-plano/pagamento-plano.component';
import { PagamentoParticularComponent} from './pages/pagamento-particular/pagamento-particular.component';
import { ConfirmacaoConsultaComponent} from './pages/confirmacao-consulta/confirmacao-consulta.component';
import { MinhasConsultasComponent} from './pages/minhas-consultas/minhas-consultas.component';


export const Grupo2RoutingModule: Routes = [

{ path: 'agendamento-consultas', component: AgendamentoConsultasComponent},
{ path: 'calendario-agendamento', component: CalendarioAgendamentoComponent},
{ path: 'escolha-especialista', component: EscolhaEspecialistaComponent},
{ path: 'pagamento-plano', component: PagamentoPlanoComponent},
{ path: 'pagamento-particular', component: PagamentoParticularComponent},
{ path: 'confirmacao-consulta', component: ConfirmacaoConsultaComponent},
{ path: 'minhas-consultas', component: MinhasConsultasComponent},

];




