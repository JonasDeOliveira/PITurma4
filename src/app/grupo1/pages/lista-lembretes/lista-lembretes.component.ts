import { Component, OnInit } from '@angular/core';
import { Lembrete } from "../../lembretes/shared/lembrete.model"
import { LembreteItemListaComponent } from '../../lembretes/lembrete-item-lista/lembrete-item-lista.component';
import { ModalLembreteComponent } from '../../lembretes/modal-lembrete/modal-lembrete.component'
import "src/assets/grupo1/css/grupo1.component.css";


@Component({
  selector: 'app-lista-lembretes',
  templateUrl: './lista-lembretes.component.html',
  styleUrls: [ './lista-lembretes.component.css']
})
export class ListaLembretesComponent implements OnInit {

  lembretes : Lembrete[] = [
    {
      tituloLembrete: "Medicamento Controlado",
      descricaoLembrete: "Tomar comprimido de novalgina",
      dataLembrete: "22/12/2020",
      horaLembrete: "08:00",
      dataCriacao: "22/10/2020",
      nrRepeticao: 2,
      intervaloLembrete: "horas",
      vencido: false
    },
    {
      tituloLembrete: "Medicamento Controlado",
      descricaoLembrete: "Tomar comprimido de novalgina",
      dataLembrete: "22/12/2020",
      horaLembrete: "08:00",
      dataCriacao: "22/10/2020",
      nrRepeticao: 2,
      intervaloLembrete: "horas",
      vencido: false
    },
    {
      tituloLembrete: "Medicamento Controlado",
      descricaoLembrete: "Tomar comprimido de novalgina",
      dataLembrete: "22/12/2020",
      horaLembrete: "08:00",
      dataCriacao: "22/10/2020",
      nrRepeticao: 2,
      intervaloLembrete: "horas",
      vencido: false
    },
    {
      tituloLembrete: "Medicamento Controlado",
      descricaoLembrete: "Tomar comprimido de novalgina",
      dataLembrete: "22/12/2020",
      horaLembrete: "08:00",
      dataCriacao: "22/10/2020",
      nrRepeticao: 2,
      intervaloLembrete: "horas",
      vencido: true
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
