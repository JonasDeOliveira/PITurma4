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
  existe: boolean;

  constructor(private pacienteService : PacienteService,  private router: Router) { 
    this.existe = true;
  }

  ngOnInit(): void {
  }

  buscarCpf(){

    this.pacienteService.getPaciente(this.cpf).subscribe(
      response => {
        this.idPaciente = response;

        if (this.idPaciente != null){
        
          localStorage.setItem("idPaciente", JSON.stringify(this.idPaciente));
          this.router.navigate(['/programa-nutricional']);
        }

      }
    )

    if (this.idPaciente != null){
      this.existe = false;
    }
    
    console.log(this.cpf);
    console.log(this.idPaciente);

  }

}
