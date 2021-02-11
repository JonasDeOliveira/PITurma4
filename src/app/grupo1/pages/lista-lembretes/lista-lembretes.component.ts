import { Component, OnInit } from '@angular/core';
import { Lembrete } from "../../lembretes/shared/lembrete.model"
//import { LembreteItemListaComponent } from '../../lembretes/lembrete-item-lista/lembrete-item-lista.component';
//import { ModalLembreteComponent } from '../../lembretes/modal-lembrete/modal-lembrete.component'
import "src/assets/grupo1/css/grupo1.component.css";


@Component({
  selector: 'app-lista-lembretes',
  templateUrl: './lista-lembretes.component.html',
  styleUrls: [ './lista-lembretes.component.css']
})
export class ListaLembretesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
