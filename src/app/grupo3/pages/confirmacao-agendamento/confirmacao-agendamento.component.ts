import { Component, OnInit } from '@angular/core';
import { AgServico } from '../../shared/model/agservico.model';

@Component({
  selector: 'app-confirmacao-agendamento',
  templateUrl: './confirmacao-agendamento.component.html',
  styleUrls: ['./confirmacao-agendamento.component.css']
})
export class ConfirmacaoAgendamentoComponent implements OnInit {

  constructor() { }

  
  ngOnInit(): void {
    // agendamento: AgServico = JSON.parse(localStorage.getItem("agendamento"));
    //   nome : string = this.agendamento.nome;
    //   dtHr : any = this.agendamento.dtDataHora;
    //   local: string = this.agendamento.nmLoja;
  }

}
