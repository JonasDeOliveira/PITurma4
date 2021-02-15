import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente/shared/cliente.service';
import { Cliente, FormularioMeusDados, ResponseFormularioMeusDados} from '../cliente/shared/cliente.model';
import { Usuario } from '../../usuario/shared/usuario.model';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-cliente',
  templateUrl: './dados-cliente.component.html',
  styleUrls: ['./dados-cliente.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class DadosClienteComponent implements OnInit {

  idUsuario: string;
  responseFormularioMeusDados: any;
 //dsEndImg: "";
  dsEndImg: string;
  

  constructor(private clienteService: ClienteService,
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

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

  ver() {
    console.log("ok");
  }

  open(content) {
    this.modalService.open(content);
  }

}