import { Routes } from '@angular/router';
import { AreaClienteComponent } from './pages/area-cliente/area-cliente.component';


export const Grupo1RoutingModule: Routes = [

    {path:'area-cliente', component: AreaClienteComponent}
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { DadosClienteComponent } from './pages/dados-cliente/dados-cliente.component';
import { LoginClienteComponent } from './pages/login-cliente/login-cliente.component';
import { ListaLembretesComponent } from './pages/lista-lembretes/lista-lembretes.component';

export const Grupo1RoutingModule: Routes = [
    {path:'login-cliente', component: LoginClienteComponent},
    {path:'lista-lembretes', component: ListaLembretesComponent},
    {path:'cadastro-cliente', component: CadastroClienteComponent},
    {path:'dados-cliente', component: DadosClienteComponent}
  
];
