import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';


import { ComponentsModule } from './components/components.module'
import { LembretesModule } from './lembretes/lembretes.module'
import { PagesModule } from './pages/pages.module';
import { CartoesModule } from './cartoes/cartao.module';



@NgModule({
  declarations: [ ],
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
    ComponentsModule,
    RouterModule
  ]
})
export class Grupo1Module { }
