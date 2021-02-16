import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//imports Calendario
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';


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

  selectToday() {    
    this.model = this.calendar.getToday();    
  }

  ngOnInit(): void {
  }

}
