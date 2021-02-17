import { Component, OnInit } from '@angular/core';
import { AtendimentoespecialistaService } from './atendimentoespecialista.service';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Atendimento } from './atendimento.model';

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

    request: Atendimento = {
      paciente: {
          idUsuario : null,
      },
      medico: {
          idUsuario : 135,
      },
      prontuario: {
          dsSubjetivo : "",
          dsObjetivo : "",
          dsAvaliacao : "",
          dsPlano : "",
          dsObservacoes : "",
      },
      agPaciente: {
          idAgPaciente : null,
      },
      vlPeso : null,
      vlAltura : null,
      dsHabitosVicios : "",
      dsAlergiasRestricoes : "",
      dsMedicacaoUsoContinuo : "",
      dsProblemasSaude : "",
      dtAtendimento : "17/02/2021",
      //capturar a data do dia nesse formato e o id do medico do login
  }

     open(content) {
      this.modalService.open(content);
    }
  
    atendimentoResposta: any;
    
  ngOnInit(): void {
    this.request.agPaciente.idAgPaciente=this.route.snapshot.paramMap.get("id");
    this.request.paciente.idUsuario=this.route.snapshot.paramMap.get("id");
    //this.request.dtAtendimento = new Date(Date.now()).toISOString().slice(0,10);

    this.atendEspService.getAtendimentos(this.request.agPaciente.idAgPaciente).subscribe(
      resposta => {
        this.atendimentoResposta = resposta;
        console.log(resposta);
      }
    );
  }

  registrar() {
    this.atendEspService.cadastrarAtendimento(this.request).subscribe(
      response => {
        alert('Prontuário inserido com sucesso!');
      },
      error => {
        console.log(error);
        alert('Algo inesperado aconteceu!');
      }
    )
  }

}
