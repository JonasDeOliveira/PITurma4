import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente/shared/cliente.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { OutputCliente } from '../cliente/shared/cliente.model';
import { Cartao } from '../../Cartoes/shared/cartao.model';
import { LoginClienteService } from '../cliente/shared/loginCliente.service';
import { PlanosService } from '../planos/shared/planos.service';


@Component({
  selector: 'app-dados-cliente',
  templateUrl: './dados-cliente.component.html',
  styleUrls: ['./dados-cliente.component.css'],
  providers: [NgbModalConfig, NgbModal]
})

export class DadosClienteComponent implements OnInit {

  cliente = JSON.parse(localStorage.getItem("cliente"));
  ehLogado = JSON.parse(localStorage.getItem("isLogado"));
  idUsuario: string;

  responseFormularioMeusDados: any;
  responseCidadesByUf: any;
  responsePlanos: any;

  planos = {
    plano1: 1,
    plano2: 2,
    plano3: 3
  }

  confirmacao = {
    senhaNova: '',
    senhaConfirmacao: '',
    senhaAtual: '',
    mensagem: '',
  };

  dadosAtuais = {
    cartaoAtual: null,
    planoAtual: null
  }

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
      //idPreco: null,
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
    private planosService: PlanosService,
    private loginService: LoginClienteService,
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  // password = document.getElementById("cadastro-senha-nova")
  // confirm_password = document.getElementById("cadastro-senha-nova2");

  ngOnInit(): void {
    if (this.cliente != null) {
      this.idUsuario = this.cliente.idUsuario;
      this.getFormularioMeusDados();
      this.getPlanos()
    }
  }

  getFormularioMeusDados() {
    this.clienteService.getFormularioMeusDados().subscribe(
      response => {
        console.log(response);
        this.responseFormularioMeusDados = response;

        this.outputCliente = this.responseFormularioMeusDados.inputCliente;

        this.outputCliente.loginUsuario.dsSenha = "";
        this.dadosAtuais.planoAtual = this.outputCliente.contrato.plano.idPlano;
        this.dadosAtuais.cartaoAtual = this.outputCliente.cartao;

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


  //TODO: Rever isso aqui!!!!----------------------------
  alterarDadosCliente() {
    console.log(this.outputCliente);
    if (this.confirmacao.senhaNova != "" && this.confirmacao.senhaNova != null) {
      this.outputCliente.loginUsuario.dsSenha = this.confirmacao.senhaNova;
    }

    console.log(this.outputCliente.loginUsuario.dsSenha);

    this.clienteService.alteraDadosCliente(Number(this.idUsuario), this.outputCliente).subscribe(
      response => {
        alert("Dados alterados com sucesso.");
        this.router.navigate([`/area-cliente`]);
      },
      error => {
        console.log(error)
        alert('Algo inesperado aconteceu.');
      }
    )
  }

  selecaoPlano(event, content): void {
    const id = event.target.id;
    this.dadosAtuais.planoAtual = this.outputCliente.contrato.plano.idPlano

    switch (id) {
      case "1":
        if (confirm("Deseja alterar o plano?")) {
          this.outputCliente.contrato.plano.idPlano = 1
          event.target.enabled
        }
        break;
      case "2":
        if (confirm("Deseja alterar o plano?")) {
          this.outputCliente.contrato.plano.idPlano = 2
          this.open(content)
        }
        break;
      case "3":
        if (confirm("Deseja alterar o plano?")) {
          this.outputCliente.contrato.plano.idPlano = 3
          this.open(content)
        }
        break;
    }
  }

  limparCartao(): void {
    console.log(this.outputCliente.cartao)
    this.outputCliente.contrato.plano.idPlano = this.dadosAtuais.planoAtual;
    this.outputCliente.cartao = this.dadosAtuais.cartaoAtual;

    console.log(this.outputCliente.cartao)
    this.modalService.dismissAll();
  }

  ver() {
    console.log(this.outputCliente)
    // console.log(this.confirmacao.senhaAtual);
    // console.log(this.confirmacao.senhaNova);
    // console.log(this.outputCliente.loginUsuario.dsSenha);
    console.log(this.outputCliente.usuario.dsEndImg);
  }

  conferirSenha(): void {
    if (this.confirmacao.senhaAtual != "") {
      this.loginService.conferirSenha(this.confirmacao.senhaAtual).subscribe(
        response => {
          console.log(response.mensagem);
          //this.confirmacao.mensagem = response.mensagem;
          this.confirmacao.mensagem = "";
        },
        error => {
          console.log(error.error.mensagem);
          this.confirmacao.mensagem = error.error.mensagem;
        }
      )
    }
  }


  getPlanos() {
    this.planosService.getPlanos().subscribe(
      response => {
        console.log(response);
        this.responsePlanos = response;
      }
    )
  }


  //VER ESSE MÉTODO PARA FUNCIONAR A IMAGEM NO FRONT...
  // getDsEndImg() {
  //   if (this.outputCliente.usuario.getDsEndImg().contains("/assets/grupo1/img/avatar/")) {
  //     String dsEndImg = usuario.getDsEndImg().substring(25, usuario.getDsEndImg().length() - 1);
  //     usuarioEntity.setDsEndImg("/assets/grupo1/img/avatar/" + dsEndImg);
  //   } else if (this.outputCliente.usuario.getDsEndImg().contains("C:\\fakepath\\")) {
  //     String dsEndImg = this.outputCliente.usuario.getDsEndImg().substring(13, usuario.getDsEndImg().length() - 1);
  //     usuarioEntity.setDsEndImg("/assets/grupo1/img/avatar/" + dsEndImg);
  //   } else {
  //     usuarioEntity.setDsEndImg("/assets/grupo1/img/avatar/" + usuario.getDsEndImg());
  //   }
  // }



}

