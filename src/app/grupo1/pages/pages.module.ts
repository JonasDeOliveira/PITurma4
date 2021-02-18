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
import { ClienteService } from './cliente/shared/cliente.service';
import { MensagemLoginComponent } from './mensagem-login/mensagem-login.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [PlanosComponent, PortalComponent, AreaClienteComponent, LoginClienteComponent, ListaLembretesComponent, CadastroClienteComponent, DadosClienteComponent, CardPlanosComponent, MensagemLoginComponent],
  imports: [
    CommonModule,
    LembretesModule,
    RouterModule,
    ComponentsModule,
    [ModalModule.forRoot()]
  ],
  exports: [PlanosComponent, 
    PortalComponent, 
    AreaClienteComponent, 
    LoginClienteComponent, 
    ListaLembretesComponent, 
    CadastroClienteComponent, 
    DadosClienteComponent],

    providers: [
      ClienteService
    ]

})
export class PagesModule { }
