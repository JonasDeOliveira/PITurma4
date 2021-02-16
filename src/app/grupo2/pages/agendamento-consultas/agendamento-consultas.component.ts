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
 
 
  ngOnInit(): void {
      // this.listarEspecialidades(142);
    //TODO - Implementar localStorage
  }

  listarEspecialidades(idTipoConsulta: number){
    this.espMedService.listarEspDisponiveis(idTipoConsulta).subscribe(
      response => {
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
      response => localStorage.setItem("espMed", JSON.stringify(response))
    )
}

  salvarTipoConsultaPresencialLS(){
    this.tipoConsultaService.buscarTipoConsulta(2).subscribe(
      response => {
      this.tipoConsultaEscolhida = response;
      this.idTipoConsulta = this.tipoConsultaEscolhida.idTipoConsulta;
      this.listarEspecialidades(this.idTipoConsulta);
      localStorage.setItem("tipoConsulta", JSON.stringify(response));

    }
    )
  }

  salvarTipoConsultaOnlineLS(){
    this.tipoConsultaService.buscarTipoConsulta(1).subscribe(
      response => {
      this.tipoConsultaEscolhida = response;
      this.idTipoConsulta = this.tipoConsultaEscolhida.idTipoConsulta;
      this.listarEspecialidades(this.idTipoConsulta);
      localStorage.setItem("tipoConsulta", JSON.stringify(response));
    }
    )
  }
}
