import { Component, OnInit } from '@angular/core';
import { PrescrevermedicacaoService } from './prescrevermedicacao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroPrescricao, Medicacao} from './prescricao.model';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-prescrever-medicacao',
  templateUrl: './prescrever-medicacao.component.html',
  styleUrls: ['./prescrever-medicacao.component.css'],

})

export class PrescreverMedicacaoComponent implements OnInit {

  constructor(config: NgbModalConfig, 
    private modalService: NgbModal, 
    private prescMedService : PrescrevermedicacaoService,
    private route: ActivatedRoute,
    private router: Router) {

      config.backdrop = 'static';
      config.keyboard = false;
  }


  open(content) {
    this.modalService.open(content);
  }


  request: CadastroPrescricao = {
    paciente:{
        idUsuario: null
    },
    prontuario:{
        idProntuario: null
    },
    medico:{
        idUsuario: null
    },
    tipoReceita: {
        idTipoReceita: null
    },
    dtEmissao: null,
    dsEndImgAssMed: '',
    prescricoes:[
        {
          idMedicacao: null,
          idFormaFarmac: null,
          idViaAdm: null,
          vlQuantidade: '',
          vlConcentracao: '',
          dsOrientacoes:''
        }
    ]
  }
    
  responsePrescricao: any;
  listaPrescricao = [];

  idMedicacao: any;
  vlQuantidade: any;
  vlConcentracao: any;
  idViaAdm: any;
  idFormaFarmac: any;
  dsOrientacoes: any;


  ngOnInit(): void {
    this.prescMedService.getTelaPrescricoes().subscribe(
      resposta => {
        this.responsePrescricao = resposta;
        var dtEmissao =  new Date(Date.now()).toISOString().slice(0,10).split('-');
        this.responsePrescricao.dtEmissao = dtEmissao[2] + '/' + dtEmissao[1] + '/' + dtEmissao[0];
        console.log(resposta);
      }
    );
  }


  registrar() {

    this.request.dtEmissao = this.responsePrescricao.dtEmissao;

    //TODO: PEGAR DO LOCAL STORAGE
    this.request.medico.idUsuario = 135;
    this.request.paciente.idUsuario = 6;
    this.request.prontuario.idProntuario = 2;
    this.request.dsEndImgAssMed = "teste";
    this.request.prescricoes = this.listaPrescricao;
    this.request.tipoReceita.idTipoReceita = 1;

    console.log(this.responsePrescricao.dtEmissao);
    console.log(this.request);

    this.prescMedService.cadastrarPrescricao(this.request).subscribe(
      response => {
        alert(response);
      },
      error => {
        alert(error);
      }
    )
  }


  addItem(){
    console.log(this.responsePrescricao);
    this.listaPrescricao.push({
      "idMedicacao": this.idMedicacao, 
      "dsMedicacao": this.responsePrescricao.listaMedicacao.find(x=>x.idMedicacao == this.idMedicacao).dsMedicacao, 

      "idFormaFarmac": this.idFormaFarmac,
      "dsFormaFarmac": this.responsePrescricao.listaFormaFarmac.find(x=>x.idFormaFarmac == this.idFormaFarmac).dsFormaFarmac,
      
      
      "idViaAdm": this.idViaAdm,
      "dsViaAdm": this.responsePrescricao.listaViaAdm.find(x=>x.idViaAdm == this.idViaAdm).dsViaAdm,

      "vlQuantidade": this.vlQuantidade,
      "vlConcentracao": this.vlConcentracao,
      "dsOrientacoes": this.dsOrientacoes
    })
    console.log(this.listaPrescricao);
  }

  removerItem(item){
     this.listaPrescricao.splice(this.listaPrescricao.indexOf(item),1)
  }
  
}
