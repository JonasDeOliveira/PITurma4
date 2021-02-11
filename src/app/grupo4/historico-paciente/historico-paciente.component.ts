import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';

@Component({
  selector: 'app-historico-paciente',
  templateUrl: './historico-paciente.component.html',
  styleUrls: ['./historico-paciente.component.css'],
  providers: [[NgbModalConfig, NgbModal]]
})
export class HistoricoPacienteComponent implements OnInit {

  constructor(private _location: Location, config: NgbModalConfig, private modalService: NgbModal) { 

  config.backdrop = 'static';
  config.keyboard = false;
  }
  open(content) {
    this.modalService.open(content ,{ size: 'lg'});
  }
  ngOnInit(): void {
  }

  voltar() {
    this._location.back();
  }

}
