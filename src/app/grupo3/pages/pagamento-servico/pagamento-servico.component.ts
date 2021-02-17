import { Component, OnInit } from '@angular/core';
import { Cartao, ResponseCartao } from '../../shared/model/cartao.model';
import { CartaoService } from '../../shared/service/cartao.service';
import { PedidoService } from '../../shared/service/pedido.service';
import { Pedido, ResponsePedido } from '../../shared/model/pedido.model';

@Component({
  selector: 'app-pagamento-servico',
  templateUrl: './pagamento-servico.component.html',
  styleUrls: ['./pagamento-servico.component.css']
})

export class PagamentoServicoComponent implements OnInit {

  constructor(
    private cartaoService: CartaoService,
    private pedidoService: PedidoService
  ) { }

  responsePedido: ResponsePedido;
  responseCartao: ResponseCartao;
  idPedido: string;

  ngOnInit(): void {
    let agendamentoStorage = JSON.parse(localStorage.getItem("agendamentos"));
    this.idPedido = agendamentoStorage[0].idServico;
    this.pedidoService.getServico(this.idPedido).subscribe(
      response => {
        this.responsePedido = response;
        console.log(this.responsePedido);
      }
    )
  }

  //   localStorage.getItem("agendamentos");
  //   agendamentosServ = JSON.parse(localStorage.getItem("agendamentos"));

  // request: Pedido = {
  //   idPedido: null,
  //   paciente: {
  //     idPaciente: 1
  //   },
  //   agendamentos: {
  //     idAgendamento: 1,
  //     // idServico: {
  //     //   idServico: 1
  //     // },
  //     // idLoja: 1,
  //     // dtHr: ''
  //   }
    
  // }

  // requestCartao: Cartao = {
  //     nrCartao: '',
  //     nmCartao: '',
  //     codSeguranca: '',
  //     dtValidade: '',
  //     dtEmissao: ''
  // }
  
  registrarPedido() {
    // this.pedidoService.criarPedido(this.request).subscribe(
    //   response => {
    //     alert('Pedido finalizado com sucesso');
    //   },
    //   error => {
    //     alert('Algo inesperado aconteceu');
    //   }
    // )
  }
  
  registrarCartao() {
    // this.cartaoService.gravarCartao(this.requestCartao).subscribe(
    //   response => {
    //     alert('Cartão cadastrado com sucesso');
    //   },
    //   error => {
    //     alert('Algo inesperado aconteceu');
    //   }
    // )
  }

}
