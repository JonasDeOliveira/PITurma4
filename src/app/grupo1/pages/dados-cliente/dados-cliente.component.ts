import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente/shared/cliente.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ResponseFormularioCadastro, FormularioCadastro, FormularioMeusDados, OutputCliente, Cidade, Cliente, ResponseFormularioMeusDados, ResponseCidades } from '../cliente/shared/cliente.model';

@Component({
  selector: 'app-dados-cliente',
  templateUrl: './dados-cliente.component.html',
  styleUrls: ['./dados-cliente.component.css'],
  providers: [NgbModalConfig, NgbModal]
})

export class DadosClienteComponent implements OnInit {

  responseFormularioMeusDados: any;
  responseCidadesByUf: any;

  outputCliente: OutputCliente = {
    loginUsuario: {
      idUsuario: null,
      dsSenha: '',
      dsEmail: ''
    },
    usuario: {
      idUsuario: null,
      idGenero: null,
      idEspMedica: null,
      idUfCrm: null,
      idTipoUsuario: null,
      nmNome: '',
      dtNascimento: '',
      nrCpf: '',
      nrCrm: '',
      dsEndImg: '',
      idPreco: null,
      enderecos: [{
        idEndereco: null,
        dsEndereco: '',
        dsComplemento: '',
        dsBairro: '',
        nrCep: '',
        cidade: null,
        idUf: null
      }
      ]
    },
    ddd: '',
    celular: '',
    contrato: {
      idContrato: null,
      dsContrato: '',
      dtVigencia: '',
      plano: {
        idPlano: null,
        nmPlano: '',
        dsPlano: '',
        vlPlano: null
      },
      idUsuario: null
    },
    cartao: {
      idCartao: null,
      usuario: null,
      nrCartao: null,
      codSeguranca: null,
      dtValidade: '',
      dtEmissao: ''
    }

  }


  constructor(private clienteService: ClienteService,
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getFormularioMeusDados();

  }

  getFormularioMeusDados() {
    this.clienteService.getFormularioMeusDados(141).subscribe(
      response => {
        console.log(response);
        this.responseFormularioMeusDados = response;

        this.outputCliente = this.responseFormularioMeusDados.inputCliente;
        this.getCidadesByUf();
      }
    )
  }

  getCidadesByUf() {
    this.clienteService.getCidadesByUf(this.outputCliente.usuario.enderecos[0].cidade.uf.idUf).subscribe(
      response => {
        this.responseCidadesByUf = response;
      }
    )
  }

  ver() {
    console.log(this.outputCliente.usuario);
  }

  open(content) {
    this.modalService.open(content);
  }

}