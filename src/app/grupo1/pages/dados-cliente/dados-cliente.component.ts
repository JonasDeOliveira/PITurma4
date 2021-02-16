import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente/shared/cliente.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { OutputCliente } from '../cliente/shared/cliente.model';


@Component({
  selector: 'app-dados-cliente',
  templateUrl: './dados-cliente.component.html',
  styleUrls: ['./dados-cliente.component.css'],
  providers: [NgbModalConfig, NgbModal]
})

export class DadosClienteComponent implements OnInit {

  responseFormularioMeusDados: any;
  responseCidadesByUf: any;

  planos = {
    plano1: 1,
    plano2: 2,
    plano3: 3
  }

  confirmacao = {
    senhaNova: '',
    senhaConfirmacao: '',
    senhaAtual: ''
  };

  password = document.getElementById("cadastro-senha-nova")
  confirm_password = document.getElementById("cadastro-senha-nova2");

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
        vlPlano: null,
        servicos: [{
          idServicoPlano: null,
          dsServico: ''
        }]
      },
      idUsuario: null
    },
    cartao: {
      idCartao: null,
      usuario: null,
      nrCartao: null,
      codSeguranca: null,
      dtValidade: '',
      dtEmissao: '',
      nmNome: ''
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
    this.clienteService.getFormularioMeusDados(165).subscribe(
      response => {
        console.log(response);
        this.responseFormularioMeusDados = response;

        this.outputCliente = this.responseFormularioMeusDados.inputCliente;

        this.confirmacao.senhaAtual = this.outputCliente.loginUsuario.dsSenha;

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

  open(content) {
    this.modalService.open(content);
  }

  alterarDadosCliente() {
    console.log(this.outputCliente);

    this.clienteService.alteraDadosCliente(165, this.outputCliente).subscribe(
      response => {
        alert("Dados alterados com sucesso.");
        this.router.navigate([`/area-cliente/165`]);
      },
      error => {
        console.log(error)
        alert('Algo inesperado aconteceu.');
      }
    )
  }

  selecaoPlano(event, content): void {
    const id = event.target.id;

    switch (id) {
      case "1":
        this.outputCliente.contrato.plano.idPlano = 1
        event.target.enabled
        break;
      case "2":
        this.outputCliente.contrato.plano.idPlano = 2
        this.open(content)
        break;
      case "3":
        this.outputCliente.contrato.plano.idPlano = 3
        this.open(content)
        break;
    }
  }

  limparCartao(): void {
    console.log(this.outputCliente.cartao)
    this.outputCliente.cartao = {
      nmNome: '',
      idCartao: null,
      usuario: null,
      nrCartao: '',
      codSeguranca: null,
      dtValidade: '',
      dtEmissao: ''
    }

    this.outputCliente.contrato.plano.idPlano = 1;

    console.log(this.outputCliente.cartao)
    this.modalService.dismissAll();
  }

  ver() {
    console.log(this.outputCliente)
  }



}