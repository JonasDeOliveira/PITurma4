import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contrato } from '../../shared/model/contrato';
import { Pagamento } from '../../shared/model/pagamento';
import { PagamentoPlano } from '../../shared/model/pagamentoPlano';
import { ContratoService } from '../../shared/services/contrato-service';
import { PagamentoPlanoServiceService } from '../../shared/services/pagamento-plano-service.service';


@Component({
  selector: 'app-pagamento-plano',
  templateUrl: './pagamento-plano.component.html',
  styleUrls: ['./pagamento-plano.component.css']
})
export class PagamentoPlanoComponent implements OnInit {
  constructor(
  public contratoService: ContratoService,
  public pagamentoPlanoService: PagamentoPlanoServiceService,
  private router: Router 
  ) { }

  request: PagamentoPlano = {
    idAgPaciente: 10
  }

  responseContrato : Contrato;
  pagamentoPlEscolhido : Pagamento;
  idPgtoPlanoString : string;

  ngOnInit(): void {
    this.listarContratoPorUsuario(14);
  }

  listarContratoPorUsuario(idUsuario: number){

    this.contratoService.buscarPlanosPaciente(idUsuario).subscribe(
      response => {
       this.responseContrato = response;
      }
    )
  }
    
    cadastrarPagtoPlano() {
      this.pagamentoPlanoService.cadastrarPlano(this.request).subscribe(
        response => {
          this.pagamentoPlEscolhido = response;
          this.salvarPagtoPlanoLs();
        },
        error => {
          alert('erro ao pagar consulta com plano');
        }
      )
    }
    salvarPagtoPlanoLs(){
      this.idPgtoPlanoString = this.pagamentoPlEscolhido.toString();
      localStorage.setItem("idPgto", this.idPgtoPlanoString)
    }

  }


