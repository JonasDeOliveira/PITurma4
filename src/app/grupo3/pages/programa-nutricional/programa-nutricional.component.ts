import { Component, OnInit } from '@angular/core';
import { ProgramaNutriService} from '../../shared/ProgramaNutri/service/programaNutri.service';
import { Cardapio, DadosPaciente, ResponseCardapio, ResponseDadosPaciente} from '../../shared/ProgramaNutri/model/programaNutri.model';
import { TipoRefeicaoService } from '../../shared/ProgramaNutri/service/tipoRefeicao.service';
import { IdTipoRefeicao, ResponseTipoRefeicao } from '../../shared/ProgramaNutri/model/tipoRefeicao.model';
import { NullTemplateVisitor } from '@angular/compiler';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  idTipoRefeicao: number;
  nomeReceita: string;
  qtCalorias: number;
  dsDescricao: string;
  qtRendimento: number;

  cardapio: Cardapio;

  idCardapio: number;

  id: IdTipoRefeicao;

  
  

  constructor( 
    private programaNutriService: ProgramaNutriService, 
    private tipoRefeicaoService: TipoRefeicaoService,
    config: NgbModalConfig, 
    private modalService: NgbModal, 
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

//***************************DADOS PACIENTE***********************************************
//inicioDadosPaciente

//dadosPaciente: any = {
 // nome: '',
 // vlPeso: null,
 // vlAltura: null,
 // dsHabitosVicios: '',
 // dsAlergiasRestricoes: '',
 // dsObjetivo: ''
//}

//getExibirDadosPaciente(idUsuario: number){
//    this.programaNutriService.getExibirDadosPaciente(33).subscribe( 
 //     response => {
 //        this.responseDadosPaciente= response;
  //    }
  //  );
 //}

 
 //FimDadosPaciente

//*********************************TIPO REFEICAO**************************************
//inicioTipoRefeicao
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
  this.id.idTipoRefeicao = this.idTipoRefeicao; 
  
  this.cardapio.idTipoRefeicao = this.id;
  this.cardapio.nomeReceita = this.nomeReceita;
  this.cardapio.qtRendimento = this.qtRendimento;
  this.cardapio.qtCalorias = this.qtCalorias;
  this.cardapio.dsDescricao = this.dsDescricao;
  this.cardapio.idPaciente = this.idUsuario;
  this.cardapio.idMedico = 33;

  this.programaNutriService.criarCardapio(this.cardapio).subscribe(
    response => {
      this.responseString = response;
    },
    error => {
      alert('Algo inesperado aconteceu')
    }
  )

  alert(this.responseString);
  window.location.reload();
}

//Listar Cardapio do usuário
listarCardapios(){
  this.programaNutriService.getListarCardapios(this.idUsuario).subscribe (
   response => {
      this.responseCardapio = response;
      console.log("LISTA DE CARDAPIOS: "+response);
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
