import { Component, OnInit } from '@angular/core';
import { ResponseCartao } from '../../shared/model/cartao';
import { CartaoService } from '../../shared/services/cartao.service';

@Component({
  selector: 'app-pagamento-particular',
  templateUrl: './pagamento-particular.component.html',
  styleUrls: ['./pagamento-particular.component.css']
})
export class PagamentoParticularComponent implements OnInit {

  constructor(public cartaoService: CartaoService) { }
  responseCartao :ResponseCartao[];
  ngOnInit(): void {
    this.listarCartao(40);
  }

  listarCartao(idUsuario: number){
    this.cartaoService.listarCartaoPorUsuario(idUsuario).subscribe(
      response => {this.responseCartao = response;}
    )
  }
}
