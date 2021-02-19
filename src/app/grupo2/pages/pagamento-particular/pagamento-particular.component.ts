import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agenda } from '../../shared/model/agenda';
import { AgPaciente, Paciente } from '../../shared/model/agPaciente';
import { CartaoAgPaciente } from '../../shared/model/cartaoAgPaciente';
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

 

  nmTitular:string = "";
  nrCartao: string  = "";
  mesVenc: string = "";
  anoVenc: string = "";
  cvv: string = "";
  

  cartao: CartaoAgPaciente = {
    nrCartao: this.nrCartao,
    codSeguranca : this.cvv,
    usuario : {
      nome: this.nmTitular,
    },
    dtValidade : `${this.anoVenc}-${this.mesVenc}-01`

  };
  
  qtdadeParcString : string;
  qtadeParcelas : number = 1;
  // valorParcela : number = this.vlConsulta/this.qtadeParcelas;

  usuario: Paciente = JSON.parse(localStorage.getItem("cliente"));
  idUsuario:number = this.usuario.idPaciente
  
  tipoPagamento: TipoPagamento = {
    idFormaPagamento: 2,
    dsFormaPagamento: "Cartão"
  }; 
  
  ngOnInit(): void {
    //QUEBRADO - ARRUMAR PARA SEGUNDA
    // this.listarCartao(this.idUsuario);
  }

  listarCartao(idUsuario: number){
    this.cartaoService.listarCartaoPorUsuario(idUsuario).subscribe(
      response => {
      this.nmTitular = response[0].usuario.nome;
      this.nrCartao = response[0].nrCartao;

      }
    )
  }
  salvarTipoPagamento(){
    localStorage.setItem("tipoPagamento", JSON.stringify(this.tipoPagamento))
    console.log(this.cartao)
}

salvarQtdadeParcelasLS(){
  this.qtdadeParcString = this.qtadeParcelas.toString();
  localStorage.setItem("qtadeParcelas", this.qtdadeParcString)
  console.log(localStorage.getItem("qtadeParcelas"))

}
}

