import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AgendamedicoService } from './agendamedico.service';
import { ResponsePeriodos } from './agenda.model';
import { Router } from '@angular/router';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agenda-medico',
  templateUrl: './agenda-medico.component.html',
  styleUrls: ['./agenda-medico.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AgendaMedicoComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal, 
    private agendaService : AgendamedicoService, private router: Router,
    private calendar: NgbCalendar) {
      
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
    this.getHorarios();
  }

  model: NgbDateStruct;                 
  date: {year: number, month: number};

  agendamentosResposta: any;
  data: any;
  responsePeriodos: any;

  ngOnInit(): void {
    this.getAgendamentos();
  }

  selectToday() {    
    this.model = this.calendar.getToday();    
  }

  getAgendamentos(){
    this.agendaService.getAgendamentos().subscribe(
      resposta => {
        this.agendamentosResposta = resposta;
        console.log(resposta);

        this.data = new Date(Date.now()).toISOString().slice(0,10);
      }
    )
  }

  consultarAgendamentos(){
    this.agendaService.consultarAgendamentos().subscribe(
      resposta => {
        this.agendamentosResposta = resposta;
        console.log(resposta);

        this.data = "2021-06-06";
      }
    )
  }

  remover(idAgPaciente: number): void {
    if(confirm('Deseja cancelar a consulta?')) {
      this.agendaService.cancelarAgendamento(idAgPaciente).subscribe(
        response => {
          this.router.navigate(['/agenda/medico']);
          //this.agendaService.getAgendamentos(); 
          console.log(idAgPaciente)
        }
      )
    }
  }

  getHorarios() {
    this.agendaService.getHorarios().subscribe(
      resposta => {
        this.responsePeriodos = resposta;
        console.log(resposta);

        this.data = new Date(Date.now()).toISOString().slice(0,10);
      }
    )
  }

  onClickHorarios(indice: number){
    if(this.responsePeriodos[indice].disponibilidade == 0){
      this.responsePeriodos[indice].disponibilidade = 1;
    } else {
      this.responsePeriodos[indice].disponibilidade = 0;
    }
  }

  cadastrarAgenda(): void {

    console.log("antes")
    this.responsePeriodos.forEach(agenda => {
      var objMedico = JSON.parse(localStorage.getItem("medico"));
      agenda.medico.idUsuario = objMedico.idUsuario;
  
      var dt =  new Date(Date.now()).toISOString().slice(0,10).split('-');
      agenda.data = dt[2] + '/' + dt[1] + '/' + dt[0];

      console.log("Passou")
    });

    this.agendaService.cadastrarAgenda(this.responsePeriodos).subscribe(
      response => {
        alert('Agenda cadastrada com sucesso!');
        this.router.navigate(['/agenda/medico']);
      },
      error => {
        alert('Algo inesperado aconteceu!');
        console.log(error);
      }
    )
  } 

  setTipoConsulta(id:number){
 this.responsePeriodos.forEach(agenda => {
        agenda.idTipoConsulta = id;
 });


  }

}
