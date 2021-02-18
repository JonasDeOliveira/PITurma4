import { Component, OnInit } from '@angular/core';
import { Cartao, ResponseCartao } from '../../shared/model/cartao.model';
import { CartaoService } from '../../shared/service/cartao.service';
import { PedidoService } from '../../shared/service/pedido.service';
import { Pedido, ResponsePedido } from '../../shared/model/pedido.model';
import { ResponseServicos } from '../../shared/model/servico.model';
import { ServicoService } from '../../shared/service/servico.service';
import { AgServico } from '../../shared/model/agservico.model';
import { AgServicoService } from '../../shared/service/agservico.service';

@Component({
  selector: 'app-pagamento-servico',
  templateUrl: './pagamento-servico.component.html',
  styleUrls: ['./pagamento-servico.component.css']
})

export class PagamentoServicoComponent implements OnInit {

  agendamento: AgServico[];

  constructor(
    public cartaoService: CartaoService,
    public pedidoService: PedidoService,
    public agendamentoService: AgServico
  ) {
    this.agendamento = new Array;
   }

  responsePedido: ResponsePedido;
  responseCartao: ResponseCartao;
  idPedido: string;
  responseServicos: ResponseServicos;
  responseAgendamentos: AgServicoService;

  //dados cartao
  nmTitular:string;
  nrCartao: string;
  qtdParcelas: number;

  // idLoja : number = this.agendamento.idLoja;
  // dataHora : string = this.agendamento.dtHr;
  // idServico: number = this.agendamento.idServico;


  ngOnInit(): void {
    this.getAgendamento();
    // let agendamentoStorage = JSON.parse(localStorage.getItem("agendamentos"));
    // this.idPedido = agendamentoStorage[0].idServico;
    // this.pedidoService.getServico(this.idPedido).subscribe(
    //   response => {
    //     this.responsePedido = response;
    //     console.log(this.responsePedido);
    //    }
    // )
  }

  getAgendamento(){
    this.agendamento = JSON.parse(localStorage.getItem("agendamentos"));
  }

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
