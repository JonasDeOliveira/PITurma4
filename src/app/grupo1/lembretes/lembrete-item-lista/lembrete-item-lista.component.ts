import { Component, Input, OnInit } from '@angular/core';
import { Lembrete } from '../shared/lembrete.model';
import { Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-lembrete-item-lista',
  templateUrl: './lembrete-item-lista.component.html',
  styleUrls: ['./lembrete-item-lista.component.css']
})
export class LembreteItemListaComponent implements OnInit {

  @Input() lembrete: Lembrete;
  @Output("deletarLembrete") deletarLembrete : EventEmitter<any> = new EventEmitter();
  //@Output("alerta") alerta : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }




}
