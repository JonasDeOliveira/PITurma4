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

  agendamentos: boolean;
  
  constructor(private agendamentoService : AgServicoService, private router: Router) { 
    this.agAgendados = new Array; 
    this.agRealizados = new Array; 
    this.agCancelados = new Array; 

    this.idUsuario = 46;
    this.agendamentos = true;
  }

  ngOnInit(): void {
    this.listarAgendamentos();
  }

  listarAgendamentos(){

    this.agendamentoService.getAgendamentosPorUsuario(this.idUsuario).subscribe(
      response => {
        this.responseAgendamentos = response; 

        this.responseAgendamentos.forEach(element => {
      
          //1 REALIZADA, 2 CANCELADA, 3 AGENDADA
          if (element.idStatus == 1){
            this.agRealizados.push(element);
          }else if (element.idStatus == 2){
            this.agCancelados.push(element);
          }else if (element.idStatus == 3){
            this.agAgendados.push(element);
          }          
        });

        if (this.responseAgendamentos.length == 0){
          this.agendamentos = false;
        }
      }
    )
  }

}
