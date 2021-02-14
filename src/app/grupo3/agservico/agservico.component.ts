import { Component, OnInit } from '@angular/core';
import { Servicos, ResponseServicos } from '../shared/servico.model';
import { ServicoService } from '../shared/servico.service';

@Component({
  selector: 'app-agservico',
  templateUrl: './agservico.component.html',
  styleUrls: ['./agservico.component.css']
})
export class AgservicoComponent implements OnInit {

  constructor(private servicoService : ServicoService) { }

  responseServicos : ResponseServicos[];

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

}
