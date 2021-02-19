import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agenda } from '../../shared/model/agenda';
import { Cliente } from '../../shared/model/cartao';
import { Contrato } from '../../shared/model/contrato';
import { EspMed } from '../../shared/model/espMed';
import { Pagamento, TipoPagamento } from '../../shared/model/pagamento';
import { PagamentoPlano } from '../../shared/model/pagamentoPlano';
import { TipoConsulta } from '../../shared/model/tipoConsulta';
import { ContratoService } from '../../shared/services/contrato-service';
import { PagamentoPlanoServiceService } from '../../shared/services/pagamento-plano-service.service';


@Component({
  selector: 'app-pagamento-plano',
  templateUrl: './pagamento-plano.component.html',
  styleUrls: ['./pagamento-plano.component.css']
})
export class PagamentoPlanoComponent implements OnInit {
  constructor(
  public contratoService: ContratoService,
  public pagamentoPlanoService: PagamentoPlanoServiceService,
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
  data = this.agenda.data;

  nmPlano: string;
  idPlano: number;
  imgPlano: string;
  dsContrato:string;
  tipoPagamento: TipoPagamento = {
    idFormaPagamento: 1,
    dsFormaPagamento: "Plano"
  }; 

  usuario: Cliente = JSON.parse(localStorage.getItem("cliente"));
  idUsuario:number = this.usuario.idUsuario;

  ngOnInit(): void {
    
    this.listarContratoPorUsuario(this.idUsuario);
  }

  listarContratoPorUsuario(idUsuario: number){
    this.contratoService.buscarPlanosPaciente(idUsuario).subscribe(
      response => {
      this.nmPlano=response.plano.nmPlano;
      this.dsContrato=response.plano.dsPlano;
      this.idPlano=response.plano.idPlano;
      if(this.idPlano==1){
        this.imgPlano="/assets/assets-grupo2/BASIC.png"
      } else if(this.idPlano==2){
        this.imgPlano="/assets/assets-grupo2/PLUS.png"
      } else if(this.idPlano==3){
        this.imgPlano="/assets/assets-grupo2/PREMIUM.png"
      }
      }
    )
  }
  
  //MUDAR PARA SALVAR O ID DO PLANO
  salvarTipoPagamento(){
    localStorage.setItem("tipoPagamento", JSON.stringify(this.tipoPagamento));
  }

  }


