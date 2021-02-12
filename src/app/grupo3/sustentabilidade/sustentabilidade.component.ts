import { Component, OnInit } from '@angular/core';
import { Lojas, ResponseLojas } from '../shared/lojas.model';
import { LojaService } from '../shared/lojas.service';

@Component({
  selector: 'app-sustentabilidade',
  templateUrl: './sustentabilidade.component.html',
  styleUrls: ['./sustentabilidade.component.css']
})

export class SustentabilidadeComponent implements OnInit {

  constructor(private LojaService : LojaService) { }

  responseLojas : ResponseLojas[];

  ngOnInit(): void {
    this.listarLoja();
  }

  listarLoja(){
    this.LojaService.getLojas().subscribe (
      response => {
        this.responseLojas = response;
      }
    )
  }

}
