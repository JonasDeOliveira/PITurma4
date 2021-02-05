import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-historico-paciente',
  templateUrl: './historico-paciente.component.html',
  styleUrls: ['./historico-paciente.component.css']
})
export class HistoricoPacienteComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  voltar() {
    this._location.back();
  }

}
