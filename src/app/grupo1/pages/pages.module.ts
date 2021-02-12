import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

import { PlanosComponent } from './planos/planos.component';
import { PortalComponent } from './portal/portal.component';
import { AreaClienteComponent } from './area-cliente/area-cliente.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { ListaLembretesComponent } from './lista-lembretes/lista-lembretes.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { DadosClienteComponent } from './dados-cliente/dados-cliente.component';

import { LembretesModule } from '../lembretes/lembretes.module';
import { CardPlanosComponent } from './planos/card-planos/card-planos.component';

@NgModule({
  declarations: [PlanosComponent, PortalComponent, AreaClienteComponent, LoginClienteComponent, ListaLembretesComponent, CadastroClienteComponent, DadosClienteComponent, CardPlanosComponent],
  imports: [
    CommonModule,
    LembretesModule,
    RouterModule,
    [ModalModule.forRoot()]
  ],
  exports: [PlanosComponent, 
    PortalComponent, 
    AreaClienteComponent, 
    LoginClienteComponent, 
    ListaLembretesComponent, 
    CadastroClienteComponent, 
    DadosClienteComponent],


})
export class PagesModule { }
