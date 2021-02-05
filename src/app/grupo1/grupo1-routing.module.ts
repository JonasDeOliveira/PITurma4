
import { Routes} from '@angular/router';
import { LoginClienteComponent } from './pages/login-cliente/login-cliente.component';
import { ListaLembretesComponent } from './pages/lista-lembretes/lista-lembretes.component';

export const Grupo1RoutingModule: Routes = [
    {path:'login-cliente', component: LoginClienteComponent},
    {path:'lista-lembretes', component: ListaLembretesComponent}
];
