import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//imports Calendario
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { EspMed } from '../../shared/model/agenda';
import { TipoConsulta } from '../../shared/model/tipoConsulta';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-calendario-agendamento',
  templateUrl: './calendario-agendamento.component.html',
  styleUrls: ['./calendario-agendamento.component.css']
})



export class CalendarioAgendamentoComponent implements OnInit {

  model: NgbDateStruct;
  data: Date;                 
  date: {year: number, month: number};  

  constructor(
    private calendar: NgbCalendar,
    private router: Router
    ) {
  }

  especialidade: EspMed = JSON.parse(localStorage.getItem("espMed"));
  dsEspecialidade: string = this.especialidade.dsEspMed;

  consulta : TipoConsulta = JSON.parse(localStorage.getItem("tipoConsulta")); 
  dsConsulta : string = this.consulta.dsTipoConsulta;


  selectToday() {    
    this.model = this.calendar.getToday();    
  }

  ngOnInit(): void {
  }

  dataSelect(){
    console.log(this.model);
    this.data = new Date(this.model.year, this.model.month, this.model.day, 0, 0, 0, 0);

    localStorage.setItem("data", JSON.stringify(this.data));
    this.router.navigate(['escolha-especialista']);
  }

}
