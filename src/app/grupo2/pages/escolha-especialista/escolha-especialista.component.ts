import { Component, OnInit } from '@angular/core';
import { ResponseAgenda } from '../../shared/model/agenda';
import { CadastroAgPaciente } from '../../shared/model/cadastroAgPaciente';
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

    ){}
  
  idEspMedString : string = localStorage.getItem("idEspMed");
  idEspMed : number = parseInt(this.idEspMedString);
  responseAgenda : ResponseAgenda[];
  idAgPacienteEscolhida: number;
  idAgPacienteString: string;
  request: CadastroAgPaciente = {
    idUsuario: 7,
    idAgenda: 27
  }
  
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

  criarAgPaciente() {
    this.agPacienteService.cadastrarAgPaciente(this.request).subscribe(
      response => {
        this.idAgPacienteEscolhida = response;
        this.salvarAgPacienteLs();
      },
      error => {
        alert('erro ao selecionar nova consulta');
      }
    )
  }

  salvarAgPacienteLs(){
    this.idAgPacienteString = this.idAgPacienteEscolhida.toString();
    localStorage.setItem("idAgPaciente", this.idAgPacienteString)
  }

}

