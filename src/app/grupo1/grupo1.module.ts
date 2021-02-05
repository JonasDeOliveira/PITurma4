import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { ComponentsComponent } from './components/components.component';
import { PlanosComponent } from './pages/planos/planos.component';
import { PortalComponent } from './pages/portal/portal.component';
import { AreaClienteComponent } from './pages/area-cliente/area-cliente.component';
import { LoginClienteComponent } from './pages/login-cliente/login-cliente.component';
import { ListaLembretesComponent } from './pages/lista-lembretes/lista-lembretes.component';
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { DadosClienteComponent } from './pages/dados-cliente/dados-cliente.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent} from './components/header/header.component';
import { LembreteItemListaComponent } from './components/lembrete-item-lista/lembrete-item-lista.component';


@NgModule({
  declarations: [
    PagesComponent, 
    ComponentsComponent, 
    LoginClienteComponent, 
    ListaLembretesComponent, 
    CadastroClienteComponent, 
    DadosClienteComponent, 
    AreaClienteComponent, 
    LembreteItemListaComponent,
    PlanosComponent, 
    PortalComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    RouterModule
  ]
})
export class Grupo1Module { }
