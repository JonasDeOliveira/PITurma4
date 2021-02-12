import { Component, Input, OnInit } from '@angular/core';
import { Lembrete, ResponseLembretes } from '../shared/lembrete.model';
import { LembreteService } from '../../lembretes/shared/lembrete.service'

@Component({
  selector: 'app-lembrete-lista',
  templateUrl: './lembrete-lista.component.html',
  styleUrls: ['./lembrete-lista.component.css']
})
export class LembreteListaComponent implements OnInit {

  @Input() idUsuario: string;
  lembretes : ResponseLembretes[];
  
  constructor(
    private lembreteService: LembreteService) { }

  ngOnInit(): void {
    this.listarLembretes();
  }

  listarLembretes() {
    this.lembreteService.getLembretesByUsuario(this.idUsuario).subscribe(
      response => {
        this.lembretes = response;
      }
    )
  }

}
