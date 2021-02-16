import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ResponseFormularioCadastro, FormularioCadastro, FormularioMeusDados, OutputCliente, Cidade } from '../cliente/shared/cliente.model';
import { ClienteService } from '../cliente/shared/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  responseFormularioCadastro: any;
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
      nmNome: '',
      idCartao:null, 
      usuario: null,
      nrCartao:null,
      codSeguranca:null,
      dtValidade:'',
      dtEmissao:''
    }

  }

  constructor(private clienteService: ClienteService,
              private router: Router,
              config: NgbModalConfig,
              private modalService: NgbModal ) {
              config.backdrop = 'static';
              config.keyboard = false; }

  ngOnInit(): void {
    this.getFormularioCadastro();
    this.getCidadesByUf();
  }

  getFormularioCadastro() {
    this.clienteService.getFormularioCadastro().subscribe(
      response => {
        this.responseFormularioCadastro = response;
        console.log(response);
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
    console.log(this.outputCliente.usuario.enderecos[0].idUf)
  }
  cadastrar() {
    this.clienteService.createUsuario(this.outputCliente).subscribe(
      response => {
        alert('Cadastro realizado com sucesso');
        this.router.navigate(['/area-cliente']);
      },
      error => {
        alert('algo inesperado aconteceu');
      }
    )
  }
  open(content) {
    this.modalService.open(content);
  }
}