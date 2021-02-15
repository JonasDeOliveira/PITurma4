import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { HistoricopacienteService } from './historicopaciente.service'

@Component({
  selector: 'app-historico-paciente',
  templateUrl: './historico-paciente.component.html',
  styleUrls: ['./historico-paciente.component.css'],
  providers: [[NgbModalConfig, NgbModal]]
})
export class HistoricoPacienteComponent implements OnInit {

  constructor(private historicoService : HistoricopacienteService, private _location: Location, config: NgbModalConfig, private modalService: NgbModal) { 

  config.backdrop = 'static';
  config.keyboard = false;
  }

  historicoResposta: any
  historicoMedicoResposta: any

  open(content) {
    this.modalService.open(content ,{ size: 'lg'});
  }
  ngOnInit(): void {
    this.getDadosHistoricoCpf();
    this.getDadosHistoricoMedico();
  }

  voltar() {
    this._location.back();
  }
  getDadosHistoricoCpf(){
    this.historicoService.getDadosHistoricoCpf().subscribe( 
      resposta => {
         this.historicoResposta = resposta;
        console.log(resposta);
      }
    );
  }

  getDadosHistoricoMedico(){
    this.historicoService.getDadosHistoricoMedico().subscribe( 
      respostaMed => {
         this.historicoMedicoResposta = respostaMed;
        console.log(respostaMed);
      }
    );
  }

}
