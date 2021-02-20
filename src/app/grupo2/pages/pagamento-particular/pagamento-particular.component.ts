import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../shared/model/cartao';
import { Agenda } from '../../shared/model/agenda';
import { CartaoAgPaciente} from '../../shared/model/cartaoAgPaciente';
import { EspMed } from '../../shared/model/espMed';
import { TipoPagamento } from '../../shared/model/pagamento';
import { TipoConsulta } from '../../shared/model/tipoConsulta';
import { CartaoService } from '../../shared/services/cartao.service';
import { ContratoService } from '../../shared/services/contrato-service';
import { PagamentoCartaoServiceService } from '../../shared/services/pagamento-cartao-service.service';

@Component({
  selector: 'app-pagamento-particular',
  templateUrl: './pagamento-particular.component.html',
  styleUrls: ['./pagamento-particular.component.css']
})
export class PagamentoParticularComponent implements OnInit {
 

  constructor(
    public contratoService: ContratoService,
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
  vlComDesconto = 0; 
  //TODO VALIDACAO PARA SE VLCOMDESCONTO<0, SETAR VLDESCONTO EM 0

  dataCartao= {
    anoVenc: "",
    mesVenc: ""
}

 

  cartao: CartaoAgPaciente = {
    nrCartao: "",
    codSeguranca: "",
    paciente : {
      nome: "",
    },
    dtValidade: ""
  };

  dsPlano = "";

  usuario: Cliente = JSON.parse(localStorage.getItem("cliente"));
  idUsuario: number = this.usuario.idUsuario;

  ngOnInit(): void {
    
    console.log(this.usuario.idUsuario)
    this.listarContratoPorUsuario(this.idUsuario);
    //QUEBRADO 
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

listarContratoPorUsuario(idUsuario: number){
  this.contratoService.buscarPlanosPaciente(idUsuario).subscribe(
    response => {
    localStorage.setItem("plano", JSON.stringify(response.plano));
    this.dsPlano=response.plano.dsPlano;
    if(response.plano.idPlano==1){
      this.desconto=50;
    } else if(response.plano.idPlano==2){
      this.desconto=100;
    } else if(response.plano.idPlano==3){
      this.desconto=150;
    }
    this.vlComDesconto=this.vlConsulta - this.desconto;
    localStorage.setItem("vlComDesconto", this.vlComDesconto.toString())
    }
  )
}

salvarCartaoLS(){
  this.cartao.dtValidade = `${this.dataCartao.anoVenc}-${this.dataCartao.mesVenc}-01`
  localStorage.setItem("cartao", JSON.stringify(this.cartao));
}
}

