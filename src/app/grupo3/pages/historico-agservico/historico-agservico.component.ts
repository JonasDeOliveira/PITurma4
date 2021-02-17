import { Component, OnInit } from '@angular/core';
import { AgServico, ResponseAgendamentos } from '../../shared/model/agservico.model';
import { Router } from '@angular/router';
import { AgServicoService } from '../../shared/service/agservico.service';

@Component({
  selector: 'app-historico-agservico',
  templateUrl: './historico-agservico.component.html',
  styleUrls: ['./historico-agservico.component.css']
})
export class HistoricoAgservicoComponent implements OnInit {

  idUsuario: number;
  responseAgendamentos: AgServico[]; 

  agAgendados: AgServico[];
  agRealizados: AgServico[];
  agCancelados: AgServico[];

  exibir1: boolean;
  exibir2: boolean;
  exibir3: boolean;
  
  constructor(private agendamentoService : AgServicoService) { 
    this.agAgendados = new Array; 
    this.agRealizados = new Array; 
    this.agCancelados = new Array; 

    this.exibir1 = false;
    this.exibir2 = false;
    this.exibir3 = false;

    this.idUsuario = 1;
  }

  ngOnInit(): void {
    
  }

  clickAqui(){
    this.listarAgendamentos();
  }

  listarAgendamentos(){

    this.agendamentoService.getAgendamentosPorUsuario(this.idUsuario).subscribe(
      response => {
        this.responseAgendamentos = response; 
      }
    )

    this.responseAgendamentos.forEach(element => {
      
      //1 REALIZADA, 2 CANCELADA, 3 AGENDADA
      if (element.idStatus == 1){
        this.agRealizados.push(element);
        this.exibir1 = true;
      }else if (element.idStatus == 2){
        this.agCancelados.push(element);
        this.exibir2 = true;
      }else if (element.idStatus == 3){
        this.agAgendados.push(element);
        this.exibir3 = true;
      }
      
    });

  }

}
