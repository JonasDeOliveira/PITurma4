import { Component, OnInit } from '@angular/core';
import { AgServico } from '../../shared/model/agservico.model';
import { Servicos } from '../../shared/model/servico.model';
import { LojaService } from '../../shared/service/lojas.service';
import { ServicoService } from '../../shared/service/servico.service';

@Component({
  selector: 'app-confirmacao-agendamento',
  templateUrl: './confirmacao-agendamento.component.html',
  styleUrls: ['./confirmacao-agendamento.component.css']
})
export class ConfirmacaoAgendamentoComponent implements OnInit {

  agendamentos: AgServico[];
  servicos: Servicos[];

  constructor(public servicoService: ServicoService, public lojaService: LojaService) {
    this.servicos = new Array;
   }
  
  ngOnInit(): void {
    this.listarConfirmacao();
  }


  listarConfirmacao(){

    this.agendamentos =  JSON.parse(localStorage.getItem("agendamentos"));

    this.agendamentos.forEach(element => {

      this.servicoService.getServicoById(element.idServico).subscribe(
        response => {
          element.servico = response;
        }
      )

      this.lojaService.getLojaById(element.idLoja).subscribe(
        response =>{
          element.loja = response;
        }
      )

    });

    localStorage.removeItem("agendamentos");
  }

}
