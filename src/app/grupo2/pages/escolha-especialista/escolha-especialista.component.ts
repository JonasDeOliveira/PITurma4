import { Component, OnInit } from '@angular/core';
import { ResponseAgenda } from '../../shared/model/agenda';
import { AgendaService } from '../../shared/services/agenda.service';

@Component({
  selector: 'app-escolha-especialista',
  templateUrl: './escolha-especialista.component.html',
  styleUrls: ['./escolha-especialista.component.css']
})
export class EscolhaEspecialistaComponent implements OnInit {

  constructor(public agendaService: AgendaService){}
  
  idEspMedString : string = localStorage.getItem("idEspMed");
  idEspMed : number = parseInt(this.idEspMedString);
  responseAgenda : ResponseAgenda[];
  
  ngOnInit(): void {
      this.buscarAgenda(1 , 3);
      
    
  }
   buscarAgenda(idTipoConsulta: number,idEspecialidade: number){
     this.agendaService.listarPorEsp(idTipoConsulta,idEspecialidade).subscribe(
      response => {
        this.responseAgenda = response;
        console.log(this.responseAgenda);
        console.log(response);
      }
     )
   }
  // TESTE MOSTRAR ESPECIALIDADE NA TRILHA - ERRO 
  //  mostrarLocalStorage(){
  //   response => {
  //     this.idEspMedString = response;
  //     console.log(this.idEspMedString);
  //       console.log(response);
  //   }
  //  }
}

