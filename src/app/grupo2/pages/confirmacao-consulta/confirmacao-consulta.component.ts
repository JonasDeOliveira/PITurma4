import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioModule } from 'src/app/grupo1/usuario/usuario.module';
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

  tipoPagamento: TipoPagamento = JSON.parse(localStorage.getItem("tipoPagamento"));
  idTipoPagamento: number = this.tipoPagamento.idFormaPagamento;
  dsTipoPagamento: string = this.tipoPagamento.dsFormaPagamento;
  
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

  parcelas: number = JSON.parse(localStorage.getItem("qtadeParcelas"));
  cartao: CartaoAgPaciente = JSON.parse(localStorage.getItem("cartao"))

  usuario = JSON.parse(localStorage.getItem("cliente"));
  idUsuario = this.usuario.idUsuario;
  

  consultaConfirmada : boolean = true;
  consultaNaoConfirmada : boolean = true;

 


  //TIRAR APOS MERGE
  // idUsuario = 142;

  data: string;

  agPaciente: AgPaciente;
  pagamento: Pagamento;

  cadastroAgPaciente: CadastroAgPactPgto = {
    idAgenda: this.idAgenda,
    idUsuario: this.idUsuario,
    nrParcelas: this.parcelas,
    tipoPgto: {
      idFormaPagamento: this.idTipoPagamento,
      dsFormaPagamento: this.dsTipoPagamento
    },
    cartao: this.cartao
  };



  

  ngOnInit():void {

    console.log(this.idUsuario);

    console.log(this.cartao)
    this.consultaConfirmada = false;
    this.consultaNaoConfirmada = true;
    if (this.tipoPagamento.idFormaPagamento == 1){
      this.tipoPagamento.dsFormaPagamento="Plano"
    } else if (this.tipoPagamento.idFormaPagamento == 2){
      this.tipoPagamento.dsFormaPagamento="Cartão"
    }
    this.conversorData();
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
