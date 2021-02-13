import { Component, OnInit } from '@angular/core';
import { ResponseAgPacientes } from '../../shared/model/agPaciente';
import { AgPacienteService } from '../../shared/services/agPaciente.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-minhas-consultas',
  templateUrl: './minhas-consultas.component.html',
  styleUrls: ['./minhas-consultas.component.css']
})
export class MinhasConsultasComponent implements OnInit {

  constructor(public agPacienteService: AgPacienteService) { }

  
  private route: ActivatedRoute
  private router: Router
  
  responseAgPacientes : ResponseAgPacientes [];
  
  idAgPaciente: number;
  request: any;

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

  atualizarAgPaciente() {
    this.agPacienteService.alterarAgPacientes (this.idAgPaciente, this.request).subscribe(
      response => {
        alert('consulta cancelada com sucesso');
        this.router.navigate(['/minhas-consultas']);
      },
      err => alert('algo inesperado aconteceu')
    )
  }
}
