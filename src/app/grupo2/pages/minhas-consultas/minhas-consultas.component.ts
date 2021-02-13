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

  constructor(
    
    public agPacienteService: AgPacienteService,
  
    private router: Router
    ) {
    
   }


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

  atualizarAgPaciente(idAgPaciente : number) {
    this.agPacienteService.alterarAgPacientes(idAgPaciente).subscribe(
      response => {
        alert('consulta cancelada com sucesso');
        // console.log(this.router);
        // this.listarAgPacientePorUsuario(14);
        this.router.navigate(['/minhas-consultas']);
      },
      err => {
        console.log(err.message);
        alert('erro ao cancelar consultar')}
    
    
    )
    }
}


// if(confirm('Deseja remover a tarefa?')) {
//   this.tarefaService.deleteTarefa(tarefaId).subscribe(
//     response => {
//       this.listarTodas();