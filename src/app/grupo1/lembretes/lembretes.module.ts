import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LembreteItemListaComponent} from './lembrete-item-lista/lembrete-item-lista.component'
import { ModalLembreteComponent } from './modal-lembrete/modal-lembrete.component';
import { LembreteService } from './shared/lembrete.service';
import { LembreteListaComponent } from './lembrete-lista/lembrete-lista.component';


@NgModule({
  declarations: [LembreteItemListaComponent, ModalLembreteComponent, LembreteListaComponent ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    LembreteItemListaComponent, 
    ModalLembreteComponent,
    LembreteListaComponent,
    FormsModule
  ],
  providers: [
    LembreteService
  ]
})
export class LembretesModule { }
