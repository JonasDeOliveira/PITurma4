import { Component, Input, OnInit } from '@angular/core';
import { Lembrete } from '../shared/lembrete.model';

@Component({
  selector: 'app-lembrete-item-lista',
  templateUrl: './lembrete-item-lista.component.html',
  styleUrls: ['./lembrete-item-lista.component.css']
})
export class LembreteItemListaComponent implements OnInit {

  @Input() lembrete: Lembrete;

  constructor() { }

  ngOnInit(): void {
  }

}
