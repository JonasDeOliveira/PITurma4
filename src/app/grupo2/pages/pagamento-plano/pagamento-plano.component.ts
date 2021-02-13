import { Component, OnInit } from '@angular/core';
import { ResponseContrato } from '../../shared/model/contrato';
import { ContratoService } from '../../shared/services/contrato-service';


@Component({
  selector: 'app-pagamento-plano',
  templateUrl: './pagamento-plano.component.html',
  styleUrls: ['./pagamento-plano.component.css']
})
export class PagamentoPlanoComponent implements OnInit {

  constructor(public contratoService: ContratoService) { }

  responseContrato : ResponseContrato;

  ngOnInit(): void {
    this.listarContratoPorUsuario(6);
  }

  listarContratoPorUsuario(idUsuario: number){

    this.contratoService.buscarPlanosPaciente(idUsuario).subscribe(
      response => {
        console.log(response)
       this.responseContrato[0] = response;
      }
    )

    }
  }


