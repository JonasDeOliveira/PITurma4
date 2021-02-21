import { Component, OnInit } from '@angular/core';
import { AgServico, ResponseAgendamentos } from '../../shared/model/agservico.model';
import { Router } from '@angular/router';
import { AgServicoService } from '../../shared/service/agservico.service';
import { Usuario } from 'src/app/grupo1/usuario/shared/usuario.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-historico-agservico',
  templateUrl: './historico-agservico.component.html',
  styleUrls: ['./historico-agservico.component.css']
})
export class HistoricoAgservicoComponent implements OnInit {

  responseAgendamentos: AgServico[]; 

  agAgendados: AgServico[];
  agRealizados: AgServico[];
  agCancelados: AgServico[];

  agendamentos: boolean;
  spinCarregando: boolean = true;

  idCancelar: number;

  cliente = JSON.parse(localStorage.getItem("cliente"));
  ehLogado = JSON.parse(localStorage.getItem("isLogado"));
  
  constructor(private agendamentoService : AgServicoService, private router: Router, private modalService: NgbModal) { 
    this.agAgendados = new Array; 
    this.agRealizados = new Array; 
    this.agCancelados = new Array; 
    this.agendamentos = true;

  }

  ngOnInit(): void {
    this.listarAgendamentos();
  }

  open(content, id: number) {
    this.modalService.open(content);
    this.idCancelar = id;
  }

  listarAgendamentos(){
    this.spinCarregando = true;
    this.agendamentoService.getAgendamentosPorUsuario(this.cliente.idUsuario).subscribe(
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

        this.spinCarregando = false;
      }
    )
  }

  cancelarAgendamento(callback: any){
    callback('Cross click');//fechar a modal
    this.agendamentoService.cancelarAgendamento(this.idCancelar).subscribe(
      (response) => {
        console.log(response);
      }, (error) =>{
        //alert('Não foi possível cancelar o agendamento, tente novamente mais tarde');
      })

      window.location.reload();
  }

}
