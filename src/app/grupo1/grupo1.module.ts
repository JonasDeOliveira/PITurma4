import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages/pages.component';
import { ComponentsComponent } from './components/components.component';
import { LoginClienteComponent } from './pages/login-cliente/login-cliente.component';
import { ListaLembretesComponent } from './pages/lista-lembretes/lista-lembretes.component';
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { DadosClienteComponent } from './pages/dados-cliente/dados-cliente.component';


@NgModule({
  declarations: [PagesComponent, ComponentsComponent, LoginClienteComponent, ListaLembretesComponent, CadastroClienteComponent, DadosClienteComponent],
  imports: [
    CommonModule
  ]
})
export class Grupo1Module { }
