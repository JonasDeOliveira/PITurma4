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
  lembretes: ResponseLembretes[];

  constructor(
    private lembreteService: LembreteService) { }

  ngOnInit(): void {
    this.listarLembretes(this.idUsuario);
  }

  //LISTAR LEMBRETES
  listarLembretes(idUsuario: string) {
    this.lembreteService.getLembretesByUsuario(idUsuario).subscribe(
      response => {
        this.lembretes = response;
      }
    )
  }

  listarLembretesMaisAntigos(idUsuario: string) {
    this.lembreteService.getLembretesByDataInversa(idUsuario).subscribe(
      response => {
        this.lembretes = response;
      }
    )
  }

  listarLembretesDataCriacao(idUsuario: string) {
    this.lembreteService.getLembretesByDataCriacao(idUsuario).subscribe(
      response => {
        this.lembretes = response;
      }
    )
  }

  //DELETAR LEMBRETE
  deletarLembrete(idLembrete: number, idUsuario: string): void {
    console.log(idLembrete);
    if (confirm("Deseja apagar o lembrete?")) {
      this.lembreteService.deleteLembrete(idLembrete).subscribe(
        response => {
          console.log(idUsuario);
          this.listarLembretes(idUsuario);
        }
      )
    }
  }

  public onChange(event): void {
    const opcao = event.target.value;

    switch (opcao) {
      case "1":
        console.log(opcao)
        this.listarLembretes(this.idUsuario);
        break;
      case "2":
        console.log(opcao)
        this.listarLembretesMaisAntigos(this.idUsuario);
        break;
      case "3":
        console.log(opcao)
        this.listarLembretesDataCriacao(this.idUsuario);
        break;
    }
  }

}
