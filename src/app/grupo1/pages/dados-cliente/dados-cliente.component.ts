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

  mostraSpin = false; //<--- adicione isto --->
  mostraSpinInicio = false;

  responseFormularioMeusDados: any;
  responseCidadesByUf: any;
  responsePlanos: any;

  minDate: Date = new Date(1910, 1, 1);
  maxDate: Date = new Date(2003, 1, 1);

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
    valida: true
  };

  dadosAtuais = {
    cartaoAtual: null,
    cartaoSeguro: "",
    planoAtual: null,

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


  ngOnInit(): void {
    if (this.cliente != null) {
      this.idUsuario = this.cliente.idUsuario;
      this.getFormularioMeusDados();
      this.getPlanos()
    }
  }


  //GETS DO BANCO
  getFormularioMeusDados() {
    this.mostraSpinInicio = true;
    this.clienteService.getFormularioMeusDados().subscribe(
      response => {
        console.log(response);
        this.responseFormularioMeusDados = response;

        this.outputCliente = this.responseFormularioMeusDados.inputCliente;

        this.preparacaoDados();

        this.getCidadesByUf();
        setTimeout(() => { this.mostraSpinInicio = false }, 2000)
      }
    )

  }

  preparacaoDados() {
    this.outputCliente.loginUsuario.dsSenha = "";
    this.outputCliente.cartao.codSeguranca = null;
    if (this.outputCliente.cartao.dtValidade != "" && this.outputCliente.cartao.dtValidade != null) {
      this.outputCliente.cartao.dtValidade = this.outputCliente.cartao.dtValidade.substring(0, this.outputCliente.cartao.dtValidade.length - 3);
      this.ocultarCartao(this.outputCliente.cartao.nrCartao);
    }
    this.dadosAtuais.planoAtual = this.outputCliente.contrato.plano.idPlano;
    this.dadosAtuais.cartaoAtual = this.outputCliente.cartao;
  }

  getCidadesByUf() {
    this.clienteService.getCidadesByUf(this.outputCliente.usuario.enderecos[0].cidade.uf.idUf).subscribe(
      response => {
        this.responseCidadesByUf = response;
      }
    )
  }

  getPlanos() {
    this.planosService.getPlanos().subscribe(
      response => {
        console.log(response);
        this.responsePlanos = response;
      }
    )
  }

  //MÉTODO ALTERAR
  alterarDadosCliente() {
    this.mostraSpin = true; //<--- adicione isto --->

    console.log(this.outputCliente);
    //nova senha
    if (this.confirmacao.senhaNova != "" && this.confirmacao.senhaNova != null) {
      this.outputCliente.loginUsuario.dsSenha = this.confirmacao.senhaNova;
    }

    //novo cartão
    if (!this.dadosAtuais.cartaoSeguro.includes("*")
      && this.dadosAtuais.cartaoSeguro != this.outputCliente.cartao.nrCartao
      && this.dadosAtuais.cartaoSeguro != "") {
      this.outputCliente.cartao.nrCartao = this.dadosAtuais.cartaoSeguro;
    }

    //concatenar data de validade
    if (this.outputCliente.cartao.dtValidade != "" && this.outputCliente.cartao.dtValidade != null) {
      this.outputCliente.cartao.dtValidade = this.outputCliente.cartao.dtValidade + "-01"
    }

    this.clienteService.alteraDadosCliente(Number(this.idUsuario), this.outputCliente).subscribe(
      response => {
        this.mostraSpin = false; //<--- adicione isto --->
        alert(response.mensagem);
        this.router.navigate([`/area-cliente`]);
      },
      error => {
        console.log(error)
        alert('Algo inesperado aconteceu.');
      }
    )
  }

  //MODAL
  open(content) {
    this.modalService.open(content);
  }

  //FUNÇÕES DA PÁGINAS  
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
    //console.log(this.outputCliente.usuario.dsEndImg);
  }

  conferirSenha(): void {
    if (this.confirmacao.senhaAtual != "") {
      this.loginService.conferirSenha(this.confirmacao.senhaAtual).subscribe(
        response => {
          console.log(response.mensagem);
          //this.confirmacao.mensagem = response.mensagem;
          this.confirmacao.mensagem = "";
          this.confirmacao.valida = true;
        },
        error => {
          console.log(error.error.mensagem);
          this.confirmacao.mensagem = error.error.mensagem;
          this.confirmacao.valida = false;
        }
      )
    } else {
      this.confirmacao.mensagem = "";
      this.confirmacao.valida = true;
    }
  }

  ocultarCartao(numeroCartao: string) {
    this.dadosAtuais.cartaoSeguro = "************" + numeroCartao.substring(11, 15);

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

