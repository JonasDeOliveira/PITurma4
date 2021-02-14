import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AgendamedicoService } from './agendamedico.service';

@Component({
  selector: 'app-agenda-medico',
  templateUrl: './agenda-medico.component.html',
  styleUrls: ['./agenda-medico.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AgendaMedicoComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal, private agendaService : AgendamedicoService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }

  agendamentosResposta: any;
  data: any;

  ngOnInit(): void {
    this.getAgendamentos();
  }

  getAgendamentos(){
  
    this.agendaService.getAgendamentos().subscribe(
      resposta => {
        this.agendamentosResposta = resposta;
        console.log(resposta);

        this.data = new Date(Date.now()).toISOString().slice(0,10);
      }
    );
  }

}
