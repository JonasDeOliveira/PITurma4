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

  pagamento: Pagamento = JSON.parse(localStorage.getItem("pagamento"));
  tipoPagamento: string = this.pagamento.formaPgt.dsFormaPagamento;
  
  especialidade: EspMed = JSON.parse(localStorage.getItem("espMed"));
  dsEspecialidade: string = this.especialidade.dsEspMed;
  idEsp: number = this.especialidade.idEspMed;

  consulta : TipoConsulta = JSON.parse(localStorage.getItem("tipoConsulta")); 
  dsConsulta : string = this.consulta.dsTipoConsulta;
  idTipoConsulta: number = this.consulta.idTipoConsulta;

  agenda: Agenda = JSON.parse(localStorage.getItem("agenda"));
  nmMedico : string = this.agenda.medico.nome;
  horario : Time = this.agenda.periodo.horaInicial;

  ngOnInit():void {
  
  }

  open(content) {
    this.modalService.open(content);
  }


  request: PagamentoPlano = {
    idAgPaciente: 10
  }


  
  responseContrato : Contrato;
  pagamentoPlEscolhido : Pagamento;
  idPgtoPlanoString : string;
 



 

  // request: CadastroAgPaciente = {
  //   idUsuario: 142,
  //   idAgenda: 0
  // }


  // criarAgPaciente(idAgenda: number) {
  //   console.log(idAgenda);
  //   // this.request.idAgenda = idAgenda;
  //   this.agPacienteService.cadastrarAgPaciente().subscribe(
  //     response => {
        
       
  //       console.log("response"  +  JSON.stringify(response))
  //       console.log("ls" + localStorage.getItem("idAgPaciente"));
  //     },
  //     error => {
  //       alert('erro ao selecionar nova consulta');
  //     }
  //   )
  // }


  
  cadastrarPagtoPlano() {
    // this.pagamentoPlanoService.cadastrarPlano(this.request).subscribe(
    //   response => {
    //     this.pagamentoPlEscolhido = response;
    //     this.salvarPagtoPlanoLs();
        
    //   },
    //   error => {
    //     alert('erro ao pagar consulta com plano');
    //   }
    // )
  }

}

// cadastrarPagtoCartao() {
//   this.pagamentoCartaoService.cadastrarCartao(this.request).subscribe(
//     response => {
//       this.pagamentoCartEscolhido = response;
//       this.salvarPagtoCartaoLs();
//       console.log(response);
//       console.log(localStorage.getItem("idPgto"))
//     },
//     error => {
//       alert('erro ao pagar consulta com cartão');
//     }
//   )
// }
