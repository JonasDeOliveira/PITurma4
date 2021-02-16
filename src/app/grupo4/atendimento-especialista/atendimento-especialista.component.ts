import { Component, OnInit } from '@angular/core';
import { AtendimentoespecialistaService } from './atendimentoespecialista.service';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-atendimento-especialista',
  templateUrl: './atendimento-especialista.component.html',
  styleUrls: ['./atendimento-especialista.component.css'],
  providers: [[NgbModalConfig, NgbModal]]
})
export class AtendimentoEspecialistaComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private atendEspService : AtendimentoespecialistaService,
    private route: ActivatedRoute,
    private router: Router) {
    }

     open(content) {
      this.modalService.open(content);
    }
  
    atendimentoResposta: any;
    idAgPaciente : any;
    
  ngOnInit(): void {
    this.idAgPaciente = 1;

    this.atendEspService.getAtendimentos(this.idAgPaciente).subscribe(
      resposta => {
        this.atendimentoResposta = resposta;
        console.log(resposta);
      }
    );
  }

}
