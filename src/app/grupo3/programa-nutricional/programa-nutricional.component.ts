import { Component, OnInit } from '@angular/core';
import { ResponseTipoRefeicao, TipoRefeicao } from '../shared/tipoRefeicao.model';
import { TipoRefeicaoService } from '../shared/tipoRefeicao.service';

@Component({
  selector: 'app-programa-nutricional',
  templateUrl: './programa-nutricional.component.html',
  styleUrls: ['./programa-nutricional.component.css']
})
export class ProgramaNutricionalComponent implements OnInit {

  constructor(private tipoRefeicaoService: TipoRefeicaoService) { }

  responseTipoRefeicao: ResponseTipoRefeicao[];

  ngOnInit(): void {
    this.listarTipoRefeicao();
  }

  listarTipoRefeicao(){
    this.tipoRefeicaoService.getTipoRefeicoes().subscribe(
      response => {
        this.responseTipoRefeicao= response;
      }
    )
  }
}
