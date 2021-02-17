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

  constructor(private pacienteService : PacienteService,  private router: Router) { }

  ngOnInit(): void {
  }

  buscarCpf(){
    this.pacienteService.getPaciente(this.cpf).subscribe(
      response => {
        this.idPaciente = response;
      }
    )
    
    console.log(this.cpf);
    console.log(this.idPaciente);

    if (this.idPaciente != null){
        
      localStorage.setItem("idPaciente", JSON.stringify(this.idPaciente));
      this.router.navigate(['/programa-nutricional']);
    }
  }

}
