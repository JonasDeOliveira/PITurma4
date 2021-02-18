
import { Routes } from '@angular/router';
import { PlanosComponent } from './pages/planos/planos.component';
import { PortalComponent } from './pages/portal/portal.component';
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { DadosClienteComponent } from './pages/dados-cliente/dados-cliente.component';
import { LoginClienteComponent } from './pages/login-cliente/login-cliente.component';
import { ListaLembretesComponent } from './pages/lista-lembretes/lista-lembretes.component';
import { AreaClienteComponent } from './pages/area-cliente/area-cliente.component';

export const Grupo1RoutingModule: Routes = [
    {path:'login-cliente', component: LoginClienteComponent},
    {path:'lista-lembretes', component: ListaLembretesComponent},
    {path:'cadastro-cliente', component: CadastroClienteComponent},
    {path:'dados-cliente', component: DadosClienteComponent},
    {path:'planos', component: PlanosComponent},
    {path:'', component: PortalComponent},
    {path:'area-cliente', component: AreaClienteComponent},
    
];

