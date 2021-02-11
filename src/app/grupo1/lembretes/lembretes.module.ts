import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LembreteItemListaComponent} from './lembrete-item-lista/lembrete-item-lista.component'
import { ModalLembreteComponent } from './modal-lembrete/modal-lembrete.component';
import { ResponseLembretes, Lembrete, ResponseLembrete } from './shared/lembrete.model';
import { LembreteService } from './shared/lembrete.service';


@NgModule({
  declarations: [LembreteItemListaComponent, ModalLembreteComponent ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    LembreteItemListaComponent, 
    ModalLembreteComponent,
    FormsModule
  ],
  providers: [
    LembreteService
  ]
})
export class LembretesModule { }
