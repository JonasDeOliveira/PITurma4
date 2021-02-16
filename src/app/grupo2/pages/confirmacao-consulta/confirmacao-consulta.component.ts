import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgPaciente,  } from '../../shared/model/agPaciente';
import { Pagamento } from '../../shared/model/pagamento';
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

  pagamento: Pagamento = JSON.parse(localStorage.getItem("pagamento"));
  tipoPagamento: string = this.pagamento.formaPgt.dsFormaPagamento;
  tipoConsulta: TipoConsulta = JSON.parse(localStorage.getItem("tipoConsulta"));
  dsTipoConsulta: string = this.tipoConsulta.dsTipoConsulta;
  agPaciente: AgPaciente = JSON.parse(localStorage.getItem("agPaciente"));
  nomeMedico: string = this.agPaciente.agenda.medico.nome;
  especialidade: string = this.agPaciente.agenda.medico.espMed.dsEspMed;
  data: Date = this.agPaciente.agenda.data;

  ngOnInit(): void {
  
  }

  open(content) {
    this.modalService.open(content);
  }

}


