import { Routes } from '@angular/router';
import { LoginMedicoComponent } from './login-medico/login-medico.component';
import { SolicitacaoExamesComponent } from './solicitacao-exames/solicitacao-exames.component';



export const Grupo4RoutingModule: Routes = [

  { path: 'login/medico', component:LoginMedicoComponent},
  { path: 'solicitacao/exames', component:SolicitacaoExamesComponent}
];
