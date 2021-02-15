import { Component, OnInit } from '@angular/core';
import { ResponseLojas } from '../../shared/model/lojas.model';
import { Servicos, ResponseServicos } from '../../shared/model/servico.model';
import { ServicoService } from '../../shared/service/servico.service';
import { LojaService } from '../../shared/service/lojas.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-agservico',
  templateUrl: './agservico.component.html',
  styleUrls: ['./agservico.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AgservicoComponent implements OnInit {
  
  local: string ;

  constructor(private servicoService : ServicoService, private lojaService : LojaService) { }

  responseServicos : ResponseServicos[];
  responseLojas : ResponseLojas[];

  ngOnInit(): void {
    this.listarServicos();
  }

  listarServicos(){
    this.servicoService.getServicos().subscribe(
      response => {
        this.responseServicos = response;
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
