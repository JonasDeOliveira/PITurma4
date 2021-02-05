import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lembrete-item-lista',
  templateUrl: './lembrete-item-lista.component.html',
  styleUrls: ['./lembrete-item-lista.component.css']
})
export class LembreteItemListaComponent implements OnInit {

  lembretes = [
    {
      tituloLembrete: "Medicamento Controlado",
      descricaoLembrete: "Tomar comprimido de novalgina",
      dataLembrete: "22/12/2020",
      horaLembrete: "08:00",
      nrRepeticao: 2,
      intervaloLembrete: "horas"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
