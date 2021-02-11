import { Component, OnInit } from '@angular/core';
import { ResponseAgPacientes } from '../../model/agPaciente';
import { AgPacienteService } from '../../services/agPaciente';


@Component({
  selector: 'app-minhas-consultas',
  templateUrl: './minhas-consultas.component.html',
  styleUrls: ['./minhas-consultas.component.css']
})
export class MinhasConsultasComponent implements OnInit {

  constructor(public agPacienteService: AgPacienteService) { }

  responseAgPacientes : ResponseAgPacientes [];

  //implementar id usuario no parametro

    ngOnInit() : void{
    this.listarAgPacientePorUsuario(14);
  }

  listarAgPacientePorUsuario(idUsuario : number) {
    this.agPacienteService.buscarAgPacientes(idUsuario).subscribe(
      response => {
        this.responseAgPacientes = response;
      }
    )  
  }
}
