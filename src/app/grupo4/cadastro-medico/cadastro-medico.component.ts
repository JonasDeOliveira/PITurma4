import { Component, OnInit } from '@angular/core';
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
      idEspMed: null 
    },
    uf : {
      idUf: null
    } ,
    nome: '',
    nrCpf:'',
    dtNascimento : null,
    nrCrm: '',
    preco: {
      vlConsulta: null
    } ,
    enderecos: [
      {
      dsEndereco: '',
      dsComplemento: '',
      dsBairro: '',
      nrCep: '',
      idCidade: 147
      }
    ],
    contatos: [
      {
        dsContato: ''
    }
    ],
    login: {
      dsEmail: null,
      dsSenha: null
    }
  }

  dadosResposta: any

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

  registrar() {
    this.cadastroService.createCadastro(this.request).subscribe(
      response => {
        alert('Cadastro realizado com sucesso');
        this.router.navigate(['/dashboard/medico']);
      },
      error => {
        alert('algo inesperado aconteceu');
      }
    )
  }

}
