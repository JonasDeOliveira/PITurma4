import { Component, OnInit } from '@angular/core';
import { Cartao, ResponseCartao } from '../../shared/model/cartao.model';
import { CartaoService } from '../../shared/service/cartao.service';
import { PedidoService } from '../../shared/service/pedido.service';
import { Pedido, ResponsePedido } from '../../shared/model/pedido.model';
import { ResponseServicos, Servicos } from '../../shared/model/servico.model';
import { ServicoService } from '../../shared/service/servico.service';
import { AgServico } from '../../shared/model/agservico.model';
import { AgServicoService } from '../../shared/service/agservico.service';
import { element } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento-servico',
  templateUrl: './pagamento-servico.component.html',
  styleUrls: ['./pagamento-servico.component.css']
})

export class PagamentoServicoComponent implements OnInit {

  agendamentos: AgServico[];
  servicos: Servicos[];
  total: number;
  cartao: Cartao;
  pedido: Pedido;

  constructor(
    public cartaoService: CartaoService,
    public pedidoService: PedidoService,
    public agendamentoService: AgServico,
    public servicoService: ServicoService,
    private router: Router
  ) {
    this.agendamentos = new Array;
    this.servicos = new Array;
    this.total = 0;
    this.cartao = new Cartao;
    this.pedido = new Pedido; 
   }

  responsePedido: ResponsePedido;
  responseCartao: ResponseCartao;
  idPedido: string;
  responseServicos: ResponseServicos;
  responseAgendamentos: AgServicoService;

  //dados cartao
  nmTitular:string;
  nrCartao: string;
  cvv: string;
  mesVencimento: string;
  anoVencimento: string;
  qtdParcelas: number;

  ngOnInit(): void {
    this.getAgendamento();
    this.getServicos();
    
  }

  getAgendamento(){
    this.agendamentos = JSON.parse(localStorage.getItem("agendamentos"));
  }

  getServicos(){
    this.agendamentos.forEach(element => {
      this.servicoService.getServicoById(element.idServico).subscribe(
        response => {
          this.servicos.push(response);
          console.log(this.servicos);
          this.total += response.preco;
        }
      )
    })
    
  }

  
  registrarPedido() {

    //salvando os dados do cartão no obj cartão
    this.cartao.nmNome = this.nmTitular;
    this.cartao.codSeguranca = this.cvv;
    this.cartao.nrCartao = this.nrCartao;
    this.cartao.dtValidade = this.anoVencimento+"-"+this.mesVencimento+"-01 00:00:00";
    this.cartao.dtEmissao = "2022-02-02 21:30:00";
    this.cartao.usuario = JSON.parse(localStorage.getItem("cliente"));

    this.pedido.cartao = this.cartao;
    this.pedido.agendamentos = this.agendamentos;
    this.pedido.idUsuario = this.cartao.usuario.idUsuario;

    console.log(this.pedido);

    this.pedidoService.criarPedido(this.pedido).subscribe(
      response => {
        alert('Pedido finalizado com sucesso');
        

      }, error => {
        alert('Pedido finalizado com sucesso');
        this.router.navigate(['/confirmacao-agendamento']);
      }
    )
  }
  
}
