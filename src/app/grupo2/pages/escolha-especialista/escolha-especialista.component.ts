import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Agenda} from '../../shared/model/agenda';
import { TipoConsulta} from '../../shared/model/tipoConsulta';
import { EspMed } from '../../shared/model/espMed';
import { AgendaService } from '../../shared/services/agenda.service';
import { AgPacienteService } from '../../shared/services/agPaciente.service';


@Component({
  selector: 'app-escolha-especialista',
  templateUrl: './escolha-especialista.component.html',
  styleUrls: ['./escolha-especialista.component.css']
})
export class EscolhaEspecialistaComponent implements OnInit {

  constructor(
    public agendaService: AgendaService,
    public agPacienteService : AgPacienteService,


    ){  
   
  }

  // Valores armazenados no LS
  especialidade: EspMed = JSON.parse(localStorage.getItem("espMed"));
  dsEspecialidade: string = this.especialidade.dsEspMed;
  idEsp: number = this.especialidade.idEspMed;

  consulta : TipoConsulta = JSON.parse(localStorage.getItem("tipoConsulta")); 
  dsConsulta : string = this.consulta.dsTipoConsulta;
  idTipoConsulta: number = this.consulta.idTipoConsulta;


  arrayAgendas: Agenda[];
  arrayAgendasData: Agenda[];
  data: string;
  dateApi: Date;
  
  ngOnInit(): void {
    this.buscarAgenda(this.idTipoConsulta , this.idEsp);
    // this.buscarAgendaporData(this.arrayAgendas, this.dateApi);
    this.conversorData();
  }
   buscarAgenda(idTipoConsulta: number,idEspecialidade: number){
     this.agendaService.listarPorEsp(idTipoConsulta,idEspecialidade).subscribe(
      response => this.arrayAgendas = response
     )
   }

   buscarAgendaporData(agendas: Agenda[], data: Date){
     this.agendaService.filtrarAgendasPorData(agendas, data).subscribe(
       response => this.arrayAgendasData = response
     )
   }

  salvarAgendaLS(agenda: Agenda){
    localStorage.setItem("agenda", JSON.stringify(agenda));
    this.alterarStatus(agenda.idAgenda);
    console.log(localStorage.getItem("agenda"))
  }

  alterarStatus(idAgenda: number){
    this.agendaService.mudarStatus(idAgenda).subscribe(
    response => {
      if(response){console.log("disponibilidade da agenda alterada")};
    }
    )
  }

  conversorData(){
    let data = JSON.parse(localStorage.getItem("data")).slice(0,10);
    let dataFormato = data.split("-");
    let dataFinal = `${dataFormato[2]}/${dataFormato[1]-1}/${dataFormato[0]}`;
    this.dateApi = new Date(dataFormato[0],dataFormato[1]-1,dataFormato[2]);
    this.data = dataFinal;
    console.log(this.dateApi);
  }

  
}
  
