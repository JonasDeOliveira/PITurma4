import { Component, OnInit } from '@angular/core';
import { Lembrete, LembreteIntervalo } from '../shared/lembrete.model';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-lembrete',
  templateUrl: './modal-lembrete.component.html',
  styleUrls: ['./modal-lembrete.component.css']
})
export class ModalLembreteComponent implements OnInit {

  public modalRef: BsModalRef;

  lembreteIntervalos : LembreteIntervalo[] = [
    {
      idLembreteIntervalo: 1,
      dsLembreteIntervalo: "hora(s)"
    },
    {
      idLembreteIntervalo: 2,
      dsLembreteIntervalo: "dia(s)"
    }];

  lembrete : Lembrete = 
    {
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

  constructor() { };

  ngOnInit(): void {
  }



}
