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
    this.listarLembretes(this.idUsuario);
  }

  listarLembretes(idUsuario: string){
    this.lembreteService.getLembretesByUsuario(idUsuario).subscribe(
      response => {
        this.lembretes = response;
      }
    )
  }

  deletarLembrete(idLembrete: number, idUsuario: string): void {
    console.log(idLembrete);
    if(confirm("Deseja apagar o lembrete?")) {    
      this.lembreteService.deleteLembrete(idLembrete).subscribe(
      response => {
        console.log(idUsuario);
        this.listarLembretes(idUsuario);
      }  
    )}
  }


}
