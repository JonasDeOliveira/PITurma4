import { Component, OnInit } from '@angular/core';
import { ProgramaNutriService} from '../../shared/ProgramaNutri/service/programaNutri.service';
import { Cardapio, DadosPaciente, ResponseCardapio, ResponseDadosPaciente} from '../../shared/ProgramaNutri/model/programaNutri.model';
import { TipoRefeicaoService } from '../../shared/ProgramaNutri/service/tipoRefeicao.service';
import { IdTipoRefeicao, ResponseTipoRefeicao } from '../../shared/ProgramaNutri/model/tipoRefeicao.model';
import { NullTemplateVisitor } from '@angular/compiler';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Location} from '@angular/common';

@Component({
  selector: 'app-programa-nutricional',
  templateUrl: './programa-nutricional.component.html',
  styleUrls: ['./programa-nutricional.component.css']
})


export class ProgramaNutricionalComponent implements OnInit {

  responseTipoRefeicao: IdTipoRefeicao[];
  dadosPacienteResposta : DadosPaciente;
  responseCardapio: Cardapio[];
  responseString: String = "";
  listCardapios: ProgramaNutriService[];

  idPaciente = localStorage.getItem("idPaciente");
  idUsuario = parseInt(this.idPaciente);

  medico = JSON.parse(localStorage.getItem("medico"));
  idMedico = this.medico.idUsuario;

  idTipoRefeicao: number;
  nomeReceita: string;
  qtCalorias: number;
  dsDescricao: string;
  qtRendimento: number;

  cardapio: Cardapio;

  idCardapio: number;

  id: IdTipoRefeicao;

  spinResponseCardapio: boolean = false;

  constructor( 
    private programaNutriService: ProgramaNutriService, 
    private tipoRefeicaoService: TipoRefeicaoService,
    config: NgbModalConfig, 
    private modalService: NgbModal, 
    private _location: Location
  ) { 
    this.cardapio = new Cardapio;
    this.id = new IdTipoRefeicao;
    this.listCardapios= new Array; 
  }

  ngOnInit(): void {
    this.exibirDadosPaciente();
    this.listarTipoRefeicao();  
    this.listarCardapios();
  }

  open(content, id: number) {
    this.modalService.open(content);
    this.idCardapio = id;
  }

  exibirDadosPaciente(){
    this.programaNutriService.getExibirDadosPaciente(this.idUsuario).subscribe(
      response => {
        this.dadosPacienteResposta=response;
      }
    );
  }

  voltar() {
    this._location.back();
    // this.veioDoAtendimento = false;
  }
  
 listarTipoRefeicao(){
    this.tipoRefeicaoService.getTipoRefeicoes().subscribe(
      response => {
        this.responseTipoRefeicao= response; 
  }
    );
}


cadastrar() {

  this.cardapio = new Cardapio;
  this.id = new IdTipoRefeicao;

  if (this.idTipoRefeicao == null){
    alert('Selecione a refeição antes de salvar');
  }else if (this.nomeReceita == null){
    alert('Insira o nome do prato');
  }else if (this.qtRendimento == null){
    alert('Insira o rendimento');
  }else if (this.qtCalorias == null){
    alert('Insira as colorias');
  }else if (this.dsDescricao == null){
    alert('Insira algo na descrição')
  }else{
    this.id.idTipoRefeicao = this.idTipoRefeicao; 
    this.cardapio.idTipoRefeicao = this.id;
    this.cardapio.nomeReceita = this.nomeReceita;
    this.cardapio.qtRendimento = this.qtRendimento;
    this.cardapio.qtCalorias = this.qtCalorias;
    this.cardapio.dsDescricao = this.dsDescricao;
    this.cardapio.idPaciente = this.idUsuario;
    this.cardapio.idMedico = this.idMedico;

    this.programaNutriService.criarCardapio(this.cardapio).subscribe(
      response => {
        this.responseString = response;
      }
    )
    alert("Cardápio salvo com sucesso!");
    window.location.reload();
  }

}

//Listar Cardapio do usuário
listarCardapios(){
  this.spinResponseCardapio = true;
  this.programaNutriService.getListarCardapios(this.idUsuario).subscribe (
   response => {
      this.responseCardapio = response;
      this.spinResponseCardapio = false;
    }
  )
}

//Excluir Cardápio do Usuário
excluirCardapio(callback: any){

  callback('Cross click');//fechar a modal
  this.programaNutriService.excluirCardapio(this.idCardapio).subscribe(
    response =>{
      this.responseString = response;
      alert("Refeição excluída com sucesso!");
    }
  )
  window.location.reload();
}
  
//FimCardapio

}
