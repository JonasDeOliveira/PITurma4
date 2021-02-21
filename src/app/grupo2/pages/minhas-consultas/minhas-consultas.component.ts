import { Component, OnInit } from '@angular/core';
import { AgPaciente } from '../../shared/model/agPaciente';
import { AgPacienteService } from '../../shared/services/agPaciente.service';
import {  Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Resposta } from '../../shared/model/resposta';
import { Cliente } from '../../shared/model/cartao';
@Component({
  selector: 'app-minhas-consultas',
  templateUrl: './minhas-consultas.component.html',
  styleUrls: ['./minhas-consultas.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class MinhasConsultasComponent implements OnInit {
  constructor(
    public agPacienteService: AgPacienteService,
    private router: Router,
    config: NgbModalConfig, private modalService: NgbModal
    ) {
        config.backdrop = 'static';
       config.keyboard = false;
   }
  responseAgPacientes : AgPaciente [];
  respostaString: Resposta;
  
  mostraSpin = false; 

  usuario: Cliente = JSON.parse(localStorage.getItem("cliente"));
  idUsuario:number = this.usuario.idUsuario;
    ngOnInit() : void{
    this.listarAgPacientePorUsuario(this.idUsuario);
  }
  open(content) {
    this.modalService.open(content);
  }
  listarAgPacientePorUsuario(idUsuario : number) {
    this.mostraSpin = true;
    this.agPacienteService.buscarAgPacientes(idUsuario).subscribe(
      response => {
        this.mostraSpin = false; 
        this.responseAgPacientes = response;
        console.log(this.responseAgPacientes)
      }
    )  
  }
  atualizarAgPaciente(idAgPaciente : number) {
    this.agPacienteService.alterarAgPacientes(idAgPaciente).subscribe(
      response => {
        this.respostaString=response;
        this.listarAgPacientePorUsuario(this.idUsuario);
      }
    )
  }
  salvarParaRetorno( ){
    
  }

  voltarAgendamento(agPaciente: AgPaciente){
    localStorage.setItem("espMed", JSON.stringify(agPaciente.agenda.medico.espMed));
    this.router.navigate(['/calendario-agendamento']);
  }
}