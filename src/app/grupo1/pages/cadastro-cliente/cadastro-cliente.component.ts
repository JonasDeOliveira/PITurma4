import { Component, OnInit, Output } from '@angular/core';
import { ResponseFormularioCadastro , FormularioCadastro, FormularioMeusDados, OutputCliente, Cidade} from '../cliente/shared/cliente.model';
import { ClienteService } from '../cliente/shared/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  
  responseFormularioCadastro: any;
  responseCidadesByUf: any;
  
  outputCliente: OutputCliente={
    loginUsuario: {
      idUsuario: null,
      dsSenha: '',
      dsEmail: ''
    },
    usuario:{
      idUsuario:null, 
      idGenero: null,
      idEspMedica: null,
      idUfCrm: null,
      idTipoUsuario: null,
      nmNome: '',
      dtNascimento: null,
      nrCpf: '',
      nrCrm: '',
      dsEndImg: '' ,
      idPreco: null,
      enderecos:[{idEndereco: null,
        dsEndereco: '',
        dsComplemento: '',
        dsBairro: '',
        nrCep: '',
        idCidade: null,
        idUf: null}
    ]
    },
    ddd: '',
    celular: '',
    contrato:{
      idContrato: null,
      dsContrato: '',
      dtVigencia: null,
      idPlano: null,
      idUsuario: null
    },
    cartao:{
      idCartao:null, 
      idUsuario:null,
      nrCartao:null,
      codSeguranca:null,
      dtValidade:'',
      dtEmissao:''
    }

  }
  
  constructor(private clienteService: ClienteService) { }

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
  getCidadesByUf(){
    this.clienteService.getCidadesByUf(this.outputCliente.usuario.enderecos[0].idUf).subscribe(
      response => {
        this.responseCidadesByUf= response;
        console.log(response);
      }
    )
  }
  ver(){
    console.log(this.outputCliente.usuario.enderecos[0].idUf)
  }
}