import { Component, Input, OnInit } from '@angular/core';
import { CadastromedicoService } from './cadastromedico.service'
import { Router } from '@angular/router';
import { Cadastro } from './cadastro.model';

@Component({
  selector: 'app-cadastro-medico',
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.css']
})
export class CadastroMedicoComponent implements OnInit {

  constructor(private cadastroService :CadastromedicoService, private router: Router ) { }

  request: Cadastro = {
    espMed : {
      idEspMed: null,
    },
    uf : {
      idUf: null,
    } ,
    nome: '',
    nrCpf:'',
    dtNascimento : null,
    nrCrm: '',
    preco: {
      vlConsulta: null,
    } ,
    enderecos: [
      {
      dsEndereco: '',
      dsComplemento: '',
      dsBairro: '',
      nrCep: '',
      cidade : {
        idCidade: null,
        uf: {
            idUf: null,
        }
      }
    }
    ],
    contatos: [
      {
        dsContato: '',
    }
    ],
    login: {
      dsEmail: '',
      dsSenha: '',
    }
  }
  dadosResposta: any
  confirmacao = {
    senhaConfirmacao: ''
  };

  responseCep: any = {
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    ibge: '',
    gia: '',
    ddd: '',
    siafi: ''
  }

  ngOnInit(): void {
    this.getDadosCadastro();
  }

  getDadosCadastro(){
    this.cadastroService.getDadosCadastro().subscribe( 
      resposta => {
         this.dadosResposta = resposta;
        console.log(resposta);
      }
    );
  }

  buscarEnderecoCep() {
    this.cadastroService.getEnderecoByViaCep(this.request.enderecos[0].nrCep).subscribe(
      response => {
        console.log(response);
        this.responseCep = response;
        this.request.enderecos[0].dsEndereco = this.responseCep.logradouro;
        this.request.enderecos[0].dsBairro = this.responseCep.bairro;
      }
    )
  }

  registrar() {
    this.request.preco.vlConsulta  = this.request.preco.vlConsulta .slice(0, this.request.preco.vlConsulta .length-2)+"."+this.request.preco.vlConsulta .slice(this.request.preco.vlConsulta .length-2, this.request.preco.vlConsulta .length);
    this.request.preco.vlConsulta = Number.parseFloat(this.request.preco.vlConsulta);
    this.cadastroService.createCadastro(this.request).subscribe(
      response => {
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['/login/medico']);
      },
      error => {
        console.log(error);
        alert('Usuário já cadastrado!');
        window.location.reload();
      }
    )
  }

}
