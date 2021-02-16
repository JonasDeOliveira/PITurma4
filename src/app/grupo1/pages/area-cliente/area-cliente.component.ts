import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente/shared/cliente.service';
import { Output, EventEmitter, Input } from '@angular/core'; 
import {LembreteItemListaComponent} from '../../lembretes/lembrete-item-lista/lembrete-item-lista.component'
import { Lembrete, ResponseLembretes } from '../../lembretes/shared/lembrete.model';
import { LembreteService } from '../../lembretes/shared/lembrete.service'


@Component({
  selector: 'app-area-cliente',
  templateUrl: './area-cliente.component.html',
  styleUrls: ['./area-cliente.component.css']
})
export class AreaClienteComponent implements OnInit {

  @Input() idUsuario: string;
  @Output("deletarLembrete") deletarLembrete : EventEmitter<any> = new EventEmitter();
  
  constructor( private clienteService: ClienteService, ) { }

  areaDoCliente : any;


  ngOnInit(): void {
    this.getAreaDoCliente();
  }


getAreaDoCliente(){
  this.clienteService.getAreaClienteById(6).subscribe(
    response => {
      this.areaDoCliente = response;
      console.log(response);
    }
  )
}
}
