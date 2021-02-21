import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../shared/model/cartao';
import { Agenda } from '../../shared/model/agenda';
import { CartaoAgPaciente} from '../../shared/model/cartaoAgPaciente';
import { EspMed } from '../../shared/model/espMed';
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

  agenda = JSON.parse(localStorage.getItem("agenda"));
  nmMedico : string = this.agenda.medico.nome;
  horario = this.agenda.periodo.horaInicial;
  horarioFormatado = "";
  vlConsulta: number = this.agenda.medico.preco.valorConsulta;
  data = this.agenda.data;

  desconto = 0;
  vlComDesconto = 0; 
  limiteDesconto =0;
  descontoString = "";

  dataCartao= {
    anoVenc: "",
    mesVenc: ""
}
  dsPlano = "";

  cartao: CartaoAgPaciente = {
    nrCartao: "",
    codSeguranca: "",
    paciente : {
      nome: "",
    },
    dtValidade: ""
  };

  usuario: Cliente = JSON.parse(localStorage.getItem("cliente"));
  idUsuario: number = this.usuario.idUsuario;

  mostraSpin = false; 

  ngOnInit(): void {
    this.mostraSpin = true; 
    console.log(this.usuario.idUsuario);
    this.listarContratoPorUsuario(this.idUsuario);
    this.converterHorario(this.horario);
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

  converterHorario(horario){
      let hor = horario.toString();
      this.horarioFormatado = hor.slice(0,5)
      console.log(this.horarioFormatado)
    };


listarContratoPorUsuario(idUsuario: number){
  this.contratoService.buscarPlanosPaciente(idUsuario).subscribe(
    response => {
    this.mostraSpin = false; 
    localStorage.setItem("plano", JSON.stringify(response.plano));
    this.dsPlano=response.plano.dsPlano;
    if(response.plano.idPlano==1){
      this.desconto=0.1;
      this.limiteDesconto=30;
      this.descontoString = "10%";
    } else if(response.plano.idPlano==2){
      this.desconto=0.2;
      this.limiteDesconto=50;
      this.descontoString = "20%";
    } else if(response.plano.idPlano==3){
      this.desconto=0.3;
      this.limiteDesconto=100;
      this.descontoString = "30%";
    }
    if(this.vlConsulta * this.desconto<=this.limiteDesconto){
      this.vlComDesconto=this.vlConsulta * (1-this.desconto);
    } else {
      this.vlComDesconto=this.vlConsulta-this.limiteDesconto;
    }
    
    localStorage.setItem("vlComDesconto", this.vlComDesconto.toString())
    console.log(response)
    }
  )
}

salvarCartaoLS(){
  this.cartao.dtValidade = `${this.dataCartao.anoVenc}-${this.dataCartao.mesVenc}-01`
  localStorage.setItem("cartao", JSON.stringify(this.cartao));
  console.log(this.cartao)
}
}

