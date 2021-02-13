import { Component, OnInit } from '@angular/core';
import { ResponseFormularioCadastro } from '../cliente/shared/cliente.model';
import { ClienteService } from '../cliente/shared/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  
  responseFormularioCadastro: any;
  responseFormularioMeusDados: any;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getFormularioCadastro();
  }

  getFormularioCadastro() {
    this.clienteService.getFormularioCadastro().subscribe(
      response => {
        this.responseFormularioCadastro = response;
        console.log(response);
      }
    )
}

}