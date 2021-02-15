import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente/shared/cliente.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ResponseFormularioCadastro , FormularioCadastro, FormularioMeusDados, OutputCliente, Cidade, Cliente} from '../cliente/shared/cliente.model';

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
        idCidade: null,
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
      idPlano: null,
      idUsuario: null
    },
    cartao: {
      idCartao: null,
      idUsuario: null,
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
    //this.passarDados();
    this.getCidadesByUf();
    
  }

  getFormularioMeusDados() {
    this.clienteService.getFormularioMeusDados(6).subscribe(
      response => {
        this.responseFormularioMeusDados = response;
        console.log(response);
        this.outputCliente.usuario = this.responseFormularioMeusDados.usuario;
      }
    )
  }

  passarDados(){
    this.outputCliente.usuario = this.responseFormularioMeusDados.usuario;
    this.outputCliente.loginUsuario.dsEmail = this.responseFormularioMeusDados.dsEmail;
    this.outputCliente.ddd = this.responseFormularioMeusDados.nrDdd;


  }

  getCidadesByUf() {
    this.clienteService.getCidadesByUf(this.outputCliente.usuario.enderecos[0].idUf).subscribe(
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