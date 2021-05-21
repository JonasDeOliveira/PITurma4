import { Component, OnInit } from '@angular/core';
import { EspMed } from '../../shared/model/agenda';
import { TipoConsulta } from '../../shared/model/tipoConsulta';
import { EspMedServiceService } from '../../shared/services/esp-med-service.service';
import { TipoConsultaService } from '../../shared/services/tipo-consulta.service';


@Component({
  selector: 'app-agendamento-consultas',
  templateUrl: './agendamento-consultas.component.html',
  styleUrls: ['./agendamento-consultas.component.css']
})
export class AgendamentoConsultasComponent implements OnInit {
  
  constructor(
    
    public espMedService: EspMedServiceService,
    public tipoConsultaService : TipoConsultaService
    
    ){}

  responseEspMed : EspMed[];
  idEspMedString : string;
  idEspSelect : number;
  tipoConsultaEscolhida : TipoConsulta;
  idTipoConsulta : number;
  onLineClicado  : boolean = false;
  presencialClicado  : boolean = false;
  mostraSpinOn = false; 
  mostraSpinP = false;
  mostraSpin = false;

  ngOnInit(): void {
  
  }

  listarEspecialidades(idTipoConsulta: number){
    this.mostraSpinOn = false;
    this.mostraSpinP = false;
    this.mostraSpin = true;
    this.espMedService.listarEspDisponiveis(idTipoConsulta).subscribe(
      response => {
        this.mostraSpinOn = true;
        this.mostraSpinP = true;
        this.mostraSpin = false;
        this.responseEspMed = response;
        console.log(response);
        if (response.length == 0){
          alert('O tipo de consulta que você escolheu não está disponível para a especialidade selecionada.');
        };    
      }
    )
  }

  salvarEspLS(){
    this.espMedService.buscarEspPorId(this.idEspSelect).subscribe(
      response => {localStorage.setItem("espMed", JSON.stringify(response))
      console.log(localStorage.getItem("espMed"))
    }
    )
}

  salvarTipoConsultaPresencialLS(){
    this.onLineClicado = false;
    this.presencialClicado = true;
    this.tipoConsultaService.buscarTipoConsulta(2).subscribe(
      response => {
      this.tipoConsultaEscolhida = response;
      this.idTipoConsulta = this.tipoConsultaEscolhida.idTipoConsulta;
      this.listarEspecialidades(this.idTipoConsulta);
      localStorage.setItem("tipoConsulta", JSON.stringify(response));
      console.log(localStorage.getItem("tipoConsulta"))
    }
    )
  }

  salvarTipoConsultaOnlineLS(){
    this.onLineClicado = true;
    this.presencialClicado = false;
    this.tipoConsultaService.buscarTipoConsulta(1).subscribe(
      response => {
      this.tipoConsultaEscolhida = response;
      this.idTipoConsulta = this.tipoConsultaEscolhida.idTipoConsulta;
      this.listarEspecialidades(this.idTipoConsulta);
      localStorage.setItem("tipoConsulta", JSON.stringify(response));
      console.log(localStorage.getItem("tipoConsulta"))
    }
    )
  }
}
