import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Agenda} from '../../shared/model/agenda';
import { AgPaciente,  } from '../../shared/model/agPaciente';
import { CadastroAgPaciente } from '../../shared/model/cadastroAgPaciente';
import { Contrato } from '../../shared/model/contrato';
import { EspMed } from '../../shared/model/espMed';
import { Pagamento } from '../../shared/model/pagamento';
import { PagamentoPlano } from '../../shared/model/pagamentoPlano';
import { TipoConsulta } from '../../shared/model/tipoConsulta';
import { AgPacienteService } from '../../shared/services/agPaciente.service';
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
    public tipoConsultaService: TipoConsultaService
    
    ) {
    
    config.backdrop = 'static';
    config.keyboard = false;

  }

  tipoPagamento: string = JSON.parse(localStorage.getItem("tipoPagamento"));
  dsTpPagamento: string; 
  
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

  ngOnInit():void {
    if (this.tipoPagamento == "1"){
      this.dsTpPagamento="Plano"
    } else if (this.tipoPagamento == "2"){
      this.dsTpPagamento="Cartão"
    }
    ;
  }

  open(content) {
    this.modalService.open(content);
  }

}
  
  