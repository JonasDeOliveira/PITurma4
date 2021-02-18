import { Component, OnInit } from '@angular/core';
import { SolicitacaoexameService } from './solicitacaoexame.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroSolicitacao, Exames} from './solicitacao.model';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-solicitacao-exames',
  templateUrl: './solicitacao-exames.component.html',
  styleUrls: ['./solicitacao-exames.component.css'],
  providers: [[NgbModalConfig, NgbModal]]
})
export class SolicitacaoExamesComponent implements OnInit {


  constructor(config: NgbModalConfig, private modalService: NgbModal, 
    private solicitacaoService : SolicitacaoexameService,
    private route: ActivatedRoute,
    private router: Router) { 

      config.backdrop = 'static';
      config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }


  request: CadastroSolicitacao = {
    prontuario: {
      idProntuario: null
    },
    paciente: {
      idUsuario: null
    },
    medico: {
      idUsuario: null
    },
    dtSolicitacao: null,
    dsIndicacaoClin: '',
    exames: [
      {
        idTipoExame: null
      }
    ]
  }


  responseTelaSolicitacao : any;
  listaExame = [];
  select : Exames;


  ngOnInit(): void {
    this.solicitacaoService.getTelaSolicitacao().subscribe(
      resposta => {
        this.responseTelaSolicitacao = resposta;
        var dtSolicitacao =  new Date(Date.now()).toISOString().slice(0,10).split('-');
        this.responseTelaSolicitacao.dtSolicitacao = dtSolicitacao[2] + '/' + dtSolicitacao[1] + '/' + dtSolicitacao[0];
        console.log(resposta);
      }
    );
  }

  
  registrar() {
    this.request.dtSolicitacao = this.responseTelaSolicitacao.dtSolicitacao;

    //TODO: PEGAR DO LOCAL STORAGE
    this.request.medico.idUsuario = 128;
    this.request.paciente.idUsuario = 6;
    this.request.prontuario.idProntuario = 7;
    
    this.request.exames = this.listaExame;

    console.log(this.request.dtSolicitacao);

    this.solicitacaoService.cadastrarSolicitacaoExame(this.request).subscribe(
      response => {
        alert(response);
      },
      error => {
        alert(error);
      }
    )
  }


  addItem(){
    console.log(this.select);
    this.listaExame.push({"idTipoExame":this.select, "dsTipoExame": this.responseTelaSolicitacao.listaTipoExame.find(x=>x.idTipoExame == this.select).dsTipoExame})
  }

  removerItem(item){
    this.listaExame.splice(this.listaExame.indexOf(item),1)
  }
}
