import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente/shared/cliente.service';
import {PlanosService} from '../planos/shared/planos.service'




@Component({
  selector: 'app-area-cliente',
  templateUrl: './area-cliente.component.html',
  styleUrls: ['./area-cliente.component.css']
})
export class AreaClienteComponent implements OnInit {

  

  constructor( private clienteService: ClienteService, private planosService: PlanosService) { }

  areaDoCliente : any;
  public lembretes=[] ;

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
removeTarefa(lembrete){
  if (confirm("Deseja apagar o lembrete?")) {
this.areaDoCliente.lembretes.splice(
  this.areaDoCliente.lembretes.indexOf(lembrete),1);
}
}


}
