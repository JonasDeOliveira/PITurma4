import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResponseAgPaciente } from '../../shared/model/agPaciente';
import { ResponsePagamento } from '../../shared/model/pagamento';
import { ResponseTipoConsulta } from '../../shared/model/tipoConsulta';
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

  reponsePagamento: ResponsePagamento;
  responseTipoConsulta: ResponseTipoConsulta;
  responseAgPaciente: ResponseAgPaciente;

  ngOnInit(): void {
    this.listarPagamento(33);
    this.listarAgPaciente(3);
    this.listarTipoConsulta(1)
  }

  open(content) {
    this.modalService.open(content);
  }

  listarPagamento(idPagamento: number){
    this.pagamentoService.buscarPagamento(idPagamento).subscribe(
      response => {this.reponsePagamento = response}
    )
  };
  listarAgPaciente(idAgPaciente: number){
    this.agPacienteService.listarAgPacientePorId(idAgPaciente).subscribe(
      response => {this.responseAgPaciente = response}
    )
  };
  listarTipoConsulta(idTipoConsulta: number){
    this.tipoConsultaService.buscarTipoConsulta(idTipoConsulta).subscribe(
      response => {this.responseTipoConsulta = response}
    )
  };

}


