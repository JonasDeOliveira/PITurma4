import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalCartaoComponent } from './modal-cartao/modal-cartao.component';
import { CartaoService } from './shared/cartao.service';



@NgModule({
  declarations: [ModalCartaoComponent ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    [ModalModule.forRoot()]
  ],
  exports: [
    ModalCartaoComponent,
    FormsModule
  ],
  providers: [
    CartaoService
  ]
})
export class CartoesModule { }
