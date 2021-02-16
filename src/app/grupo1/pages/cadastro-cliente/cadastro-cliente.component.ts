import { Component, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { OutputCliente} from '../cliente/shared/cliente.model';
import { ClienteService } from '../cliente/shared/cliente.service';
import { LoginClienteComponent } from '../login-cliente/login-cliente.component';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  responseFormularioCadastro: any;
  responseCidadesByUf: any;

  planos = {
    plano1: 1,
    plano2: 2,
    plano3: 3
  }

  confirmacao= {
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
      idPreco: null,
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
      idCartao:null, 
      usuario: null,
      nrCartao:'',
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
        //this.router.navigate(['/area-cliente/6']);
      },
      error => {
        console.log(error)
      //alert('algo inesperado aconteceu');
     }
    )
  }

  open(content) {
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

}