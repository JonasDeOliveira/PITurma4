import { Component, OnInit } from '@angular/core';
import { ResponseContratos } from '../../shared/model/contrato';
import { ContratoService } from '../../shared/services/contrato-service';


@Component({
  selector: 'app-pagamento-plano',
  templateUrl: './pagamento-plano.component.html',
  styleUrls: ['./pagamento-plano.component.css']
})
export class PagamentoPlanoComponent implements OnInit {

  constructor(public contratoService: ContratoService) { }

  responseContratos : ResponseContratos [];

  ngOnInit(): void {
    this.listarContratoPorUsuario(6);
  }

  listarContratoPorUsuario(idUsuario: number){

    this.contratoService.buscarPlanosPaciente(idUsuario).subscribe(
      response => {
       this.responseContratos = response;
      }
    )

    }
  }


