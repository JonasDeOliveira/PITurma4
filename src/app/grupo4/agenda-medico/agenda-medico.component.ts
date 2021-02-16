import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AgendamedicoService } from './agendamedico.service';
import { ResponsePeriodos } from './agenda.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda-medico',
  templateUrl: './agenda-medico.component.html',
  styleUrls: ['./agenda-medico.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AgendaMedicoComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal, 
    private agendaService : AgendamedicoService, private router: Router) {
      
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }

  agendamentosResposta: any;
  data: any;
  responsePeriodos: ResponsePeriodos[];

  ngOnInit(): void {
    this.getAgendamentos();
    this.getHorarios();
  }

  getAgendamentos(){
    this.agendaService.getAgendamentos().subscribe(
      resposta => {
        this.agendamentosResposta = resposta;
        console.log(resposta);

        this.data = new Date(Date.now()).toISOString().slice(0,10);
      }
    )
  }

  remover(idAgPaciente: number): void {
    if(confirm('Deseja cancelar a consulta?')) {
      this.agendaService.cancelarAgendamento(idAgPaciente).subscribe(
        response => {
          this.router.navigate(['/agenda/medico']); 
          console.log(idAgPaciente)
        }
      )
    }
  }

  getHorarios() {
    this.agendaService.getHorarios().subscribe(
      response => {
        this.responsePeriodos = response;
        console.log(response);

        this.data = new Date(Date.now()).toISOString().slice(0,10);
      }
    )
  }

  registrar(data: Date): void {
    this.agendaService.abrirAgenda(data).subscribe(
      response => {
        alert('Agenda cadastrada com sucesso!');
        this.router.navigate(['/agenda/medico']);
      },
      error => {
        alert('Algo inesperado aconteceu!');
      }
    )
  }

}
