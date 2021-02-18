import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from '../../shared/service/paciente.service';

@Component({
  selector: 'app-procurar-paciente',
  templateUrl: './procurar-paciente.component.html',
  styleUrls: ['./procurar-paciente.component.css']
})
export class ProcurarPacienteComponent implements OnInit {

  cpf: string;
  idPaciente: number;
  existeAlert: boolean;

  constructor(private pacienteService : PacienteService,  private router: Router) { 
    this.existeAlert = false;
  }

  ngOnInit(): void {
  }

  buscarCpf(){
    this.existeAlert = false;
    
    this.pacienteService.getPaciente(this.cpf).subscribe(
      (response) => {
        this.idPaciente = response;

        if (this.idPaciente != null){
          
          localStorage.setItem("idPaciente", JSON.stringify(this.idPaciente));
          this.router.navigate(['/programa-nutricional']);
        }

      }, (error) =>{
        this.existeAlert = true;   //exibe a div de erro
      }
    )
    
  }

}
