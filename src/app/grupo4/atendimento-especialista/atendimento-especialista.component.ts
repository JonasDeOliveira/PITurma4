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
          idUsuario : null,
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
      dtAtendimento : "",
    }

    botaoEnviar = false;

    open(content) {
      this.modalService.open(content);
    }
  
    atendimentoResposta: any;
    
  ngOnInit(): void {
    this.request.agPaciente.idAgPaciente=this.route.snapshot.paramMap.get("id");
    this.request.paciente.idUsuario=this.route.snapshot.paramMap.get("idPaciente");
    
    var objAtendimento = JSON.parse(localStorage.getItem("atendimento"));
    if (objAtendimento!= null) {
      this.request.vlPeso= objAtendimento.vlPeso;
      this.request.vlAltura= objAtendimento.vlAltura;
      this.request.dsHabitosVicios= objAtendimento.dsHabitosVicios;
      this.request.dsAlergiasRestricoes= objAtendimento.dsAlergiasRestricoes;
      this.request.dsMedicacaoUsoContinuo= objAtendimento.dsMedicacaoUsoContinuo;
      this.request.dsProblemasSaude= objAtendimento.dsProblemasSaude;
      this.request.prontuario.dsSubjetivo= objAtendimento.prontuario.dsSubjetivo;
      this.request.prontuario.dsObjetivo= objAtendimento.prontuario.dsObjetivo;
      this.request.prontuario.dsAvaliacao= objAtendimento.prontuario.dsAvaliacao;
      this.request.prontuario.dsPlano= objAtendimento.prontuario.dsPlano;
      this.request.prontuario.dsObservacoes= objAtendimento.prontuario.dsObservacoes;
      this.botaoEnviar = true;
    }

    console.log(this.request.dtAtendimento)
    this.atendEspService.getAtendimentos(this.request.agPaciente.idAgPaciente).subscribe(
      resposta => {
        this.atendimentoResposta = resposta;

        localStorage.setItem("paciente", JSON.stringify(resposta));
        console.log(resposta);
      }
    );
  }

  registrar() {
    this.request.dtAtendimento = this.atendimentoResposta.data;
    console.log(this.request.dtAtendimento);
    var objMedico = JSON.parse(localStorage.getItem("medico"));
    this.request.medico.idUsuario = objMedico.idUsuario;
  
    localStorage.setItem("atendimento", JSON.stringify(this.request));

    this.atendEspService.cadastrarAtendimento(this.request).subscribe(
      response => {
        alert('Prontuário inserido com sucesso!');
        this.botaoEnviar = true;
      },
      error => {
        console.log(error);
        alert('Algo inesperado aconteceu!');
      }
    )
  }

  limparStorage(){
    localStorage.removeItem("paciente");
    localStorage.removeItem("atendimento");
  }

}
