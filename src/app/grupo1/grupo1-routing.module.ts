import { Routes } from '@angular/router';
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { DadosClienteComponent } from './pages/dados-cliente/dados-cliente.component';

export const Grupo1RoutingModule: Routes = [

    {path:'cadastro-cliente', component: CadastroClienteComponent},
    {path:'dados-cliente', component: DadosClienteComponent}
  
];
