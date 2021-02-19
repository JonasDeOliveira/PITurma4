import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agenda } from '../../shared/model/agenda';
import { CartaoAgPaciente, Paciente } from '../../shared/model/cartaoAgPaciente';
import { EspMed } from '../../shared/model/espMed';
import { TipoPagamento } from '../../shared/model/pagamento';
import { TipoConsulta } from '../../shared/model/tipoConsulta';
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

  especialidade: EspMed = JSON.parse(localStorage.getItem("espMed"));
  dsEspecialidade: string = this.especialidade.dsEspMed;
  idEsp: number = this.especialidade.idEspMed;

  consulta : TipoConsulta = JSON.parse(localStorage.getItem("tipoConsulta")); 
  dsConsulta : string = this.consulta.dsTipoConsulta;
  idTipoConsulta: number = this.consulta.idTipoConsulta;

  agenda: Agenda = JSON.parse(localStorage.getItem("agenda"));
  nmMedico : string = this.agenda.medico.nome;
  horario : Time = this.agenda.periodo.horaInicial;
  vlConsulta: number = this.agenda.medico.preco.vlConsulta;
  data = this.agenda.data;

  desconto = 0;
  vlComDesconto = this.vlConsulta - this.desconto; 
  //TODO VALIDACAO PARA SE VLCOMDESCONTO<0, SETAR VLDESCONTO EM 0

 

  // nmTitular:string = "";
  // nrCartao: string  = "";
  // mesVenc: string = "";
  // anoVenc: string = "";
  // cvv: string = "";
dataCartao= {
  anoVenc: "",
  mesVenc: ""
}

  cartao: CartaoAgPaciente = {
    nrCartao: "",
    codSeguranca: "",
    usuario : {
      nome: "",
    },
    dtValidade: ""
  };
  
  qtdadeParcString : string;
  qtadeParcelas : number = 1;
  // valorParcela : number = this.vlConsulta/this.qtadeParcelas;

  usuario = JSON.parse(localStorage.getItem("cliente"));
  idUsuario= this.usuario.idUsuario;
  idPlano: number = 1;
  dsPlano: string = "Basico"

  // idPlano= JSON.parse(localStorage.getItem("plano"));
  
  tipoPagamento: TipoPagamento = {
    idFormaPagamento: 2,
    dsFormaPagamento: "Cartão"
  }; 
  
  ngOnInit(): void {
    //QUEBRADO - ARRUMAR PARA SEGUNDA
    // this.listarCartao(this.idUsuario);
  }

  // listarCartao(idUsuario: number){
  //   this.cartaoService.listarCartaoPorUsuario(idUsuario).subscribe(
  //     response => {
  //     this.nmTitular = response[0].usuario.nome;
  //     this.nrCartao = response[0].nrCartao;

  //     }
  //   )
  // }
// TODO
  //MUDAR PARA SALVAR ID PLANO NO LS
 salvarTipoPlano(){
//     localStorage.setItem("tipoPagamento", JSON.stringify(this.tipoPagamento))
//     console.log(this.cartao)
}

// salvarQtdadeParcelasLS(){
//   this.qtdadeParcString = this.qtadeParcelas.toString();
//   localStorage.setItem("qtadeParcelas", this.qtdadeParcString)

// }

salvarCartaoLS(){
  this.cartao.dtValidade = `${this.dataCartao.anoVenc}-${this.dataCartao.mesVenc}-01`
  localStorage.setItem("cartao", JSON.stringify(this.cartao));
}
}

