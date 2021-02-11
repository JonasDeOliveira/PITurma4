import { Component, OnInit } from '@angular/core';
import { Lembrete } from '../shared/lembrete.model';

@Component({
  selector: 'app-lembrete-lista',
  templateUrl: './lembrete-lista.component.html',
  styleUrls: ['./lembrete-lista.component.css']
})
export class LembreteListaComponent implements OnInit {

  lembretes : Lembrete[] = [
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
    },    
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
      vencido: true
    },
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
    },
    {
      idPaciente: 12,
      nmTitulo: "Medicamento Novalgina",
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
      vencido: true
    },
    {
      idPaciente: 12,
      nmTitulo: "Consulta com Cardiologista",
      dsLembrete: "Cardiologista",
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
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
