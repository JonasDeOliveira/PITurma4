import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//imports Calendario
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { EspMed } from '../../shared/model/agenda';
import { TipoConsulta } from '../../shared/model/tipoConsulta';


@Component({
  selector: 'app-calendario-agendamento',
  templateUrl: './calendario-agendamento.component.html',
  styleUrls: ['./calendario-agendamento.component.css']
})



export class CalendarioAgendamentoComponent implements OnInit {

  model: NgbDateStruct;                 
  date: {year: number, month: number};  

  constructor(private calendar: NgbCalendar) {
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

}
