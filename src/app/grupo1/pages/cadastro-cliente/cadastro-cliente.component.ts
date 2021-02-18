import { Component, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginUsuario, OutputCliente } from '../cliente/shared/cliente.model';
import { ClienteService } from '../cliente/shared/cliente.service';
import { PlanosService } from '../planos/shared/planos.service';
import { LoginClienteService } from '../cliente/shared/loginCliente.service';
import { LoginClienteComponent } from '../login-cliente/login-cliente.component';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  ehLogado = JSON.parse(localStorage.getItem("isLogado"));

  responseFormularioCadastro: any;
  responseCidadesByUf: any;
  responsePlanos: any;

  loginCliente: LoginUsuario = {
    idUsuario: null,
    dsSenha: "",
    dsEmail: ""
  }

  planos = {
    plano1: 1,
    plano2: 2,
    plano3: 3
  }

  confirmacao = {
    emailConfirmacao: '',
    senhaConfirmacao: ''
  };

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
      idTipoUsuario: 1,
      nmNome: '',
      dtNascimento: '',
      nrCpf: '',
      nrCrm: '',
      dsEndImg: '',
      //idPreco: null,
      enderecos: [{
        idEndereco: null,
        dsEndereco: '',
        dsComplemento: '',
        dsBairro: '',
        nrCep: '',
        cidade: {
          idCidade: null,
          cdCidadeIbge: null,
          dsCidade: "",
          uf: null
        },
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
        idPlano: 1,
        nmPlano: '',
        dsPlano: '',
        vlPlano: null,
        servicos: [{
          idServicoPlano: null,
          dsServico: ''
        }
        ]
      },
      idUsuario: null

    },
    cartao: {
      nmNome: '',
      idCartao: null,
      usuario: null,
      nrCartao: '',
      codSeguranca: null,
      dtValidade: '',
      dtEmissao: ''
    }

  }

  constructor(private clienteService: ClienteService,
    private loginService: LoginClienteService,
    private planosService: PlanosService,
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    
    this.getFormularioCadastro();
    this.getPlanos()
  }

  getFormularioCadastro() {
    this.clienteService.getFormularioCadastro().subscribe(
      response => {
        console.log(response);
        this.responseFormularioCadastro = response;
      }
    )
  }

  getCidadesByUf() {
    this.clienteService.getCidadesByUf(this.outputCliente.usuario.enderecos[0].idUf).subscribe(
      response => {
        this.responseCidadesByUf = response;
        console.log(response);
      }
    )
  }

  ver() {
    console.log(this.outputCliente)
  }

  cadastrar() {
    this.clienteService.createCliente(this.outputCliente).subscribe(
      response => {
        alert('Cadastro realizado com sucesso');
        this.loginCliente = this.outputCliente.loginUsuario;
        this.logarCliente()
      },
      error => {
        console.log(error)
        //alert('algo inesperado aconteceu');
      }
    )
  }

  open(content) {
    // this.modalService.open(content);
    this.modalService.open(content);
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

  getPlanos() {
    this.planosService.getPlanos().subscribe(
      response => {
        console.log(response);
        this.responsePlanos = response;
      }
    )
  }

  logarCliente() {
    this.loginService.getAcessoCliente(this.loginCliente).subscribe(
      response => {
        localStorage.setItem("cliente", JSON.stringify(response.retorno));
        localStorage.setItem("isLogado", JSON.stringify(true));
        window.location.replace("http://localhost:4200/area-cliente");
      },
      error => {
        alert(error.error.mensagem);
      }
    )
  }
}