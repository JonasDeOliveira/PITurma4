import { Component, OnInit, Input } from '@angular/core';
import { Lembrete, LembreteIntervalo, ResponseLembretesIntervalo } from '../shared/lembrete.model';
import { LembreteService } from '../shared/lembrete.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-lembrete',
  templateUrl: './modal-lembrete.component.html',
  styleUrls: ['./modal-lembrete.component.css']
})
export class ModalLembreteComponent implements OnInit {//

  responseLembreteIntervalos: ResponseLembretesIntervalo[];

  lembrete: Lembrete =
    {
      idLembrete: 1,
      idPaciente: 12,
      nmTitulo: "Medicamento Controlado",
      dsLembrete: "Tomar comprimido de novalgina",
      dtLembrete: "22/12/2020",
      dtCriacao: "22/10/2020",
      hrHora: "08:00",
      nrRepeticao: 2,
      lembreteIntervalo:
      {
        idLembreteIntervalo: 1,
        dsLembreteIntervalo: "hora(s)"
      },
      vencido: false
    };

  constructor(private lembreteService: LembreteService,
                      public activeModal: NgbActiveModal) { };

  ngOnInit(): void {
    this.listarIntervalos();
  }

  listarIntervalos() {
    this.lembreteService.getIntervalosLembretes().subscribe(
      response => {
        this.responseLembreteIntervalos = response;
      }
    )
  }

}
