import { Component, OnInit } from '@angular/core';
import { CadastromedicoService } from './cadastromedico.service'

@Component({
  selector: 'app-cadastro-medico',
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.css']
})
export class CadastroMedicoComponent implements OnInit {

  constructor(private cadastroService :CadastromedicoService) { }

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

}
