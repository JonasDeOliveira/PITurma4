import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';


import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent} from './components/header/header.component';
import { LembretesModule } from './lembretes/lembretes.module'
import { PagesModule } from './pages/pages.module'



@NgModule({
  declarations: [ 
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesModule,
    LembretesModule,
    ModalModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    RouterModule
  ]
})
export class Grupo1Module { }
