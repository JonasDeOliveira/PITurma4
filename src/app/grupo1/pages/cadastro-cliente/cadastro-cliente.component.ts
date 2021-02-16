import { Component, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ResponseFormularioCadastro, FormularioCadastro, FormularioMeusDados, OutputCliente, Cidade } from '../cliente/shared/cliente.model';
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

  password = document.getElementById("cadastro-senha")
  confirm_password = document.getElementById("cadastro-senha2");

  email = document.getElementById("cadastro-email")
  confirm_email = document.getElementById("cadastro-email2");

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
  confirmar() {
     
  }
  validatePassword(){
  if(this.password != this.confirm_password) {
    alert("As senhas não conferem!");
    }
  }
  validateEmail(){
  if(this.email != this.confirm_email) {
    alert("Os emails não conferem!");
    }
  }
}