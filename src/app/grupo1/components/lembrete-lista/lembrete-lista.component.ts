import { Component, OnInit } from '@angular/core';
import { Lembrete } from "../lembrete-item-lista/lembrete.module";

@Component({
  selector: 'app-lembrete-lista',
  templateUrl: './lembrete-lista.component.html',
  styleUrls: ['./lembrete-lista.component.css']
})
export class LembreteListaComponent implements OnInit {

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
