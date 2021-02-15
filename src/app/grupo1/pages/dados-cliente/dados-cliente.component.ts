import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente/shared/cliente.service';
import { Cliente, FormularioMeusDados, ResponseFormularioMeusDados} from '../cliente/shared/cliente.model';
import { Usuario } from '../../usuario/shared/usuario.model';

@Component({
  selector: 'app-dados-cliente',
  templateUrl: './dados-cliente.component.html',
  styleUrls: ['./dados-cliente.component.css']
})
export class DadosClienteComponent implements OnInit {
  
  idUsuario : string;
  responseFormularioMeusDados: any;
 
 constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getFormularioMeusDados()
  
  }
  getFormularioMeusDados() {
    this.clienteService.getFormularioMeusDados('6').subscribe(
      response => {
        this.responseFormularioMeusDados = response;
        console.log(response);
      }
    )
}

}