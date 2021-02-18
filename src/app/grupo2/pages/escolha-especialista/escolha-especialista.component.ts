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

  data: Date = JSON.parse(localStorage.getItem("data"));;
  
  ngOnInit(): void {
    this.buscarAgenda(this.idTipoConsulta , this.idEsp);
    this.buscarAgendaporData(this.arrayAgendas, this.data);
    ;
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

  
}
  
