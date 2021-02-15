import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseCartao } from '../../shared/model/cartao';
import { PagamentoCartao } from '../../shared/model/pagamentoCartao';
import { CartaoService } from '../../shared/services/cartao.service';
import { PagamentoCartaoServiceService } from '../../shared/services/pagamento-cartao-service.service';

@Component({
  selector: 'app-pagamento-particular',
  templateUrl: './pagamento-particular.component.html',
  styleUrls: ['./pagamento-particular.component.css']
})
export class PagamentoParticularComponent implements OnInit {

  constructor(
    public cartaoService: CartaoService,
    public pagamentoCartaoService: PagamentoCartaoServiceService,
    private router: Router 
    ) { }

  request: PagamentoCartao = {
    idAgPaciente: 3,
    parcelas: 1,
    }

  responseCartao :ResponseCartao[];
  idPagamentoCartEscolhido : number;
  idPgtoCartaoString : string;


  ngOnInit(): void {
    this.listarCartao(1);
  }

  listarCartao(idUsuario: number){
    this.cartaoService.listarCartaoPorUsuario(idUsuario).subscribe(
      response => {this.responseCartao = response;}
    )
  }
      
  cadastrarPagtoCartao() {
    this.pagamentoCartaoService.cadastrarCartao(this.request).subscribe(
      response => {
        this.idPagamentoCartEscolhido = response;
        this.salvarPagtoCartaoLs();
        console.log(response);
        console.log(localStorage.getItem("idPgto"))
      },
      error => {
        alert('erro ao pagar consulta com cartão');
      }
    )
  }
  salvarPagtoCartaoLs(){
    this.idPgtoCartaoString = this.idPagamentoCartEscolhido.toString();
    localStorage.setItem("idPgto", this.idPgtoCartaoString)
  }

}


