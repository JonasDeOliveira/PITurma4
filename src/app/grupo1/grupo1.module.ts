import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';


import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent} from './components/header/header.component';
import { LembretesModule } from './lembretes/lembretes.module'
import { PagesModule } from './pages/pages.module';
import { CartoesModule } from './cartoes/cartao.module';
import { HeaderLogadoComponent } from './components/header-logado/header-logado.component'



@NgModule({
  declarations: [ 
    FooterComponent,
    HeaderComponent,
    HeaderLogadoComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesModule,
    LembretesModule,
    CartoesModule,
    ModalModule,
    FormsModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    RouterModule,
    HeaderLogadoComponent
  ]
})
export class Grupo1Module { }
