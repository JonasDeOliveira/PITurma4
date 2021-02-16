import { SelectorListContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EspMed } from '../../shared/model/agenda';
import { EspMedServiceService } from '../../shared/services/esp-med-service.service';


@Component({
  selector: 'app-agendamento-consultas',
  templateUrl: './agendamento-consultas.component.html',
  styleUrls: ['./agendamento-consultas.component.css']
})
export class AgendamentoConsultasComponent implements OnInit {
  
  constructor(public espMedService: EspMedServiceService){}

  responseEspMed : EspMed[];
  idEspMedString : string;
  idEspSelect : number;
  teste : string = "selecione"

  
  ngOnInit(): void {
      this.listarEspecialidades(1);


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
    this.espEscolhida();
    localStorage.setItem("idEspMed", this.idEspMedString);  
    
  }

  espEscolhida(){
    this.idEspMedString = this.idEspSelect.toString();
    console.log(this.idEspMedString)
  }



}
