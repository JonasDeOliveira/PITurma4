import { Component, Input, OnInit } from '@angular/core';
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

  historicoCpfResposta: any
  historicoMedicoResposta: any
  prontuarioResposta: any
  veioDoAtendimento;

  mostraSpin = false;

  open(content, id) {
    this.getDadoProntuario(id);
    this.modalService.open(content ,{ size: 'lg'});
  }
  ngOnInit(): void {
    this.getDadosHistoricoMedico();
  }

  voltar() {
    this._location.back();
    this.veioDoAtendimento = false;
  }
  
  getDadosHistoricoCpf(cpf: string){
    this.historicoService.getDadosHistoricoCpf(cpf).subscribe( 
      resposta => {
        this.historicoCpfResposta = resposta;
        console.log(resposta);
        this.veioDoAtendimento = true;
      },
       error => {
        console.log(error);
        alert('cpf já cadastrado');
      }
    );
  }
  getDadoProntuario(idProntuario : number){
    this.mostraSpin = true;
    this.historicoService.getDadoProntuario(idProntuario).subscribe( 
      resposta => {
        this.mostraSpin = false;
        this.prontuarioResposta = resposta;
        console.log(resposta);
      }
    );
  }

  getDadosHistoricoMedico(){
    this.mostraSpin = true;
    this.historicoService.getDadosHistoricoMedico().subscribe( 
      respostaMed => {
        this.mostraSpin = false;
        this.historicoMedicoResposta = respostaMed;
        console.log(respostaMed);
      },
    );
  }

}
