import { Component, OnInit } from '@angular/core';
import { Cartao } from '../shared/cartao.model';
import { CartaoService } from '../shared/cartao.service';
import { PedidoService } from '../shared/pedido.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-pagamento-servico',
  templateUrl: './pagamento-servico.component.html',
  styleUrls: ['./pagamento-servico.component.css']
})

export class PagamentoServicoComponent implements OnInit {

  constructor(
    private cartaoService: CartaoService,
    private pedidoService: PedidoService,

  ) { }

  request: Cartao = {
    nrCartao: '',
    codSeguranca: '',
    dtValidade: '',
    dtEmissao: ''
  }

  requestPedido: Pedido = {
    vlTotal: '',
    agendamentos: [],
  }

  ngOnInit(): void {
  }

  registrarCartao() {
    this.cartaoService.createCartao(this.request).subscribe(
      response => {
        alert('Cartão cadastrado com sucesso');
      },
      error => {
        alert('Algo inesperado aconteceu');
      }
    )
  }

  registrarPedido() {
    this.pedidoService.createPedido(this.requestPedido).subscribe(
      response => {
        alert('Pedido finalizado com sucesso');
      },
      error => {
        alert('Algo inesperado aconteceu');
      }
    )
  }

}
