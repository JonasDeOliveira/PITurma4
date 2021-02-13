import { Component, OnInit } from '@angular/core';
import { ResponseEspMed } from '../../shared/model/espMed';
import { EspMedServiceService } from '../../shared/services/esp-med-service.service';


@Component({
  selector: 'app-agendamento-consultas',
  templateUrl: './agendamento-consultas.component.html',
  styleUrls: ['./agendamento-consultas.component.css']
})
export class AgendamentoConsultasComponent implements OnInit {
  
  constructor(public espMedService: EspMedServiceService){}

  responseEspMed : ResponseEspMed[];
  
  ngOnInit(): void {
      this.listarEspecialidades();


  }

  listarEspecialidades(){
    this.espMedService.listarEspDisponiveis().subscribe(
      response => {
        this.responseEspMed = response;
        console.log(response);
      }
    )
  }

}
