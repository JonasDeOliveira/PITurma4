import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartaoComponent } from 'src/app/grupo1/cartoes/cartao/cartao.component';
import { threadId } from 'worker_threads';
import { Agenda} from '../../shared/model/agenda';
import { AgPaciente, Paciente,  } from '../../shared/model/agPaciente';
import {  CadastroAgPactPgto } from '../../shared/model/cadastroAgPactPgto';
import { Cliente } from '../../shared/model/cartao';
import { CartaoAgPaciente } from '../../shared/model/cartaoAgPaciente';
import { Contrato } from '../../shared/model/contrato';
import { EspMed } from '../../shared/model/espMed';
import { OutputConfirmacao } from '../../shared/model/outputConfirmacao';
import { Pagamento, TipoPagamento } from '../../shared/model/pagamento';
import { PagamentoPlano } from '../../shared/model/pagamentoPlano';
import { TipoConsulta } from '../../shared/model/tipoConsulta';
import { AgPacienteService } from '../../shared/services/agPaciente.service';
import { ConfirmacaoConsultaService } from '../../shared/services/confirmacao-consulta.service';
import { PagamentoService } from '../../shared/services/pagamento.service';
import { TipoConsultaService } from '../../shared/services/tipo-consulta.service';


@Component({
  selector: 'app-confirmacao-consulta',
  templateUrl: './confirmacao-consulta.component.html',
  styleUrls: ['./confirmacao-consulta.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ConfirmacaoConsultaComponent implements OnInit {

  constructor(
    config: NgbModalConfig, private modalService: NgbModal,
    public pagamentoService: PagamentoService,
    public agPacienteService: AgPacienteService,    
    public tipoConsultaService: TipoConsultaService,
    public confirmacaoService: ConfirmacaoConsultaService
    
    ) {
    
    config.backdrop = 'static';
    config.keyboard = false;

  }
  
  especialidade: EspMed = JSON.parse(localStorage.getItem("espMed"));
  dsEspecialidade: string = this.especialidade.dsEspMed;
  idEsp: number = this.especialidade.idEspMed;

  consulta : TipoConsulta = JSON.parse(localStorage.getItem("tipoConsulta")); 
  dsConsulta : string = this.consulta.dsTipoConsulta;
  idTipoConsulta: number = this.consulta.idTipoConsulta;

  agenda: Agenda = JSON.parse(localStorage.getItem("agenda"));
  nmMedico : string = this.agenda.medico.nome;
  horario : Time = this.agenda.periodo.horaInicial;
  idAgenda: number = this.agenda.idAgenda;

  cartao = JSON.parse(localStorage.getItem("cartao"));
  cartaoCortado = "**** **** **** " + this.cartao.nrCartao.substring(12,16);

  usuario = JSON.parse(localStorage.getItem("cliente"));
  idUsuario = this.usuario.idUsuario;

  consultaConfirmada : boolean = true;
  consultaNaoConfirmada : boolean = true;

  data: string;

  agPaciente: AgPaciente;
  pagamento: Pagamento;

  cadastroAgPaciente: CadastroAgPactPgto = {
    idAgenda: this.idAgenda,
    idUsuario: this.idUsuario,
  };

  vlComDesconto = localStorage.getItem("vlComDesconto");

  ngOnInit():void {

    this.consultaConfirmada = false;
    this.consultaNaoConfirmada = true;
    this.conversorData();
    console.log("idagenda " + this.idAgenda);
    console.log("idUsuario " + this.idUsuario);
    console.log("cadastr " + this.cadastroAgPaciente)
  }

  conversorData(){
    let data = JSON.parse(localStorage.getItem("data")).slice(0,10);
    let dataFormato = data.split("-");
    let dataFinal = `${dataFormato[2]}/0${dataFormato[1]-1}/${dataFormato[0]}`;
    this.data = dataFinal;
  }

  open(content) {
    this.modalService.open(content);
  }

  criarAgPctePgto (request: CadastroAgPactPgto){
    this.confirmacaoService.cadastrarPgtoAgP(request).subscribe(
      response => {
        console.log(response);
        this.consultaConfirmada = true;
        this.consultaNaoConfirmada = false;
      }
    )
  }

  mudarFlagConfirmacao(){
    this.consultaConfirmada = true;
    this.consultaNaoConfirmada = false;
  }

}
