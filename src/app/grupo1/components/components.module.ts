import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderLogadoComponent } from './header-logado/header-logado.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ClienteService } from '../pages/cliente/shared/cliente.service';
import { LoginClienteService } from '../pages/cliente/shared/loginCliente.service';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, HeaderLogadoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent, 
    HeaderComponent,
    HeaderLogadoComponent
  ],
  providers: [
    ClienteService,
    LoginClienteService
  ]
})
export class ComponentsModule { }
