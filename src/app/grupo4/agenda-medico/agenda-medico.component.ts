import { Component, OnInit } from '@angular/core';
import { NgbDate, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
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

  fromDate: NgbDate;
  constructor(config: NgbModalConfig, private modalService: NgbModal, 
    private agendaService : AgendamedicoService, private router: Router,
    private calendar: NgbCalendar) {
      
      this.fromDate = calendar.getToday();
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
  dataHj: any;
  dataFormatada: any;
  dataCalendario= {
    diaValid: "",
    mesValid: "",
    anoValid: ""
  }
  

  ngOnInit(): void {
    this.getAgendamentos();
  }

  selectToday() {    
    this.model = this.calendar.getToday();    
  }

  dataSelect(){
    this.dataHj = new Date(this.model.year, this.model.month, this.model.day, 0, 0, 0, 0);
    var dia = this.model.day;
    var mes = this.model.month;
    var ano = this.model.year;
    this.dataFormatada = ano + '-' + mes + '-' + dia;
  }

  getAgendamentos(){
    this.agendaService.getAgendamentos().subscribe(
      resposta => {
        this.agendamentosResposta = resposta;
        
      this.data = new Date(Date.now()).toISOString().slice(0,10);
      }
    )
  }

  consultarAgendamentos(){
    this.agendaService.consultarAgendamentos(this.dataFormatada).subscribe(
      resposta => {
        this.agendamentosResposta = resposta;
  
        this.data = this.dataFormatada;
      }
    )
  }

  remover(idAgPaciente: number): void {
    if(confirm('Deseja cancelar a consulta?')) {
      this.agendaService.cancelarAgendamento(idAgPaciente).subscribe(
        response => {
          location.reload();
        }
      )
    }
  }

  getHorarios() {
    this.agendaService.getHorarios(this.dataFormatada).subscribe(
      resposta => {
        this.responsePeriodos = resposta;
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
    this.responsePeriodos.forEach(agenda => {
      var objMedico = JSON.parse(localStorage.getItem("medico"));
      agenda.medico.idUsuario = objMedico.idUsuario;
  
      var dt =  this.dataFormatada.slice(0,10).split('-');
      agenda.data = dt[2] + '/' + dt[1] + '/' + dt[0];
      // console.log(agenda.data);

    });

    this.agendaService.cadastrarAgenda(this.responsePeriodos, this.dataFormatada).subscribe(
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

  limparSelecao(){
    this.responsePeriodos.forEach(agenda => {
      if(agenda.disponibilidade == 1){
        agenda.disponibilidade = 0;
      }      
    });
  }

}
