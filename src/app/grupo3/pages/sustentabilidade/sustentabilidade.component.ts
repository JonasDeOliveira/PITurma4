import { Component, OnInit } from '@angular/core';
import { Lojas, ResponseLojas } from '../../shared/model/lojas.model';
import { LojaService } from '../../shared/service/lojas.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-sustentabilidade',
  templateUrl: './sustentabilidade.component.html',
  styleUrls: ['./sustentabilidade.component.css'],
  providers: [NgbModalConfig, NgbModal]
})

export class SustentabilidadeComponent implements OnInit {
  
  cliente = JSON.parse(localStorage.getItem("cliente"));
  ehLogado = JSON.parse(localStorage.getItem("isLogado"));

  local: string;

  constructor(private lojaService : LojaService) { 
  }

  responseLojas : ResponseLojas[];

  ngOnInit(): void {
    //this.listarLoja();
  }

  listarLoja(){
    this.lojaService.getLojas().subscribe (
      response => {
        this.responseLojas = response;
      }
    )
  }

  buscarLojaPorLocal(){
    this.lojaService.getLojasPorLocalidade(this.local).subscribe (
      response => {
        this.responseLojas = response;
      }
    )
  }

}
