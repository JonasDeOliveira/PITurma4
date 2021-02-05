import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages/pages.component';
import { ComponentsComponent } from './components/components.component';
import { LoginClienteComponent } from './pages/login-cliente/login-cliente.component';
import { ListaLembretesComponent } from './pages/lista-lembretes/lista-lembretes.component';


@NgModule({
  declarations: [ PagesComponent, ComponentsComponent, LoginClienteComponent, ListaLembretesComponent],
  imports: [
    CommonModule
  ]
})
export class Grupo1Module { }
