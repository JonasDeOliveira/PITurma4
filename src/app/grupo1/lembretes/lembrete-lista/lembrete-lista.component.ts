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

  listarLembretes(): void {
    this.lembreteService.getLembretesByUsuario(this.idUsuario).subscribe(
      response => {
        this.lembretes = response;
      }
    )
  }

  deletarLembrete(idLembrete: number): void {
    let resposta = confirm("Deseja apagar o lembrete?");
    console.log(idLembrete);
    if(resposta) {    
      this.lembreteService.deleteLembrete(idLembrete).subscribe(
      response => {
        this.listarLembretes();
      }  
    )}
  }

  alerta() {
    console.log("cliquei!!!")
  }

}
