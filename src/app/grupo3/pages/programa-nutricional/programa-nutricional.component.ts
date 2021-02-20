import { Component, OnInit } from '@angular/core';
import { ProgramaNutriService} from '../../shared/ProgramaNutri/service/programaNutri.service';
import { Cardapio, DadosPaciente, ResponseCardapio, ResponseDadosPaciente} from '../../shared/ProgramaNutri/model/programaNutri.model';
import { TipoRefeicaoService } from '../../shared/ProgramaNutri/service/tipoRefeicao.service';
import { IdTipoRefeicao, ResponseTipoRefeicao } from '../../shared/ProgramaNutri/model/tipoRefeicao.model';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-programa-nutricional',
  templateUrl: './programa-nutricional.component.html',
  styleUrls: ['./programa-nutricional.component.css']
})


export class ProgramaNutricionalComponent implements OnInit {

  responseTipoRefeicao: ResponseTipoRefeicao;
  dadosPacienteResposta : DadosPaciente;
  responseCardapio: Cardapio[];
  listCardapios: ProgramaNutriService[];

  idPaciente = localStorage.getItem("idPaciente");
  idUsuario = parseInt(this.idPaciente);

  idTipoRefeicao: IdTipoRefeicao;
  nomeReceita: string;
  qtCalorias: number;
  dsDescricao: string;
  qtRendimento: number;

  cardapio: Cardapio;
  

  constructor( 
    private programaNutriService: ProgramaNutriService, 
    private tipoRefeicaoService: TipoRefeicaoService
  ) { 

    this.listCardapios= new Array; 
  }

  ngOnInit(): void {
    this.exibirDadosPaciente();
    this.listarTipoRefeicao();  
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
  this.cardapio.idTipoRefeicao = this.idTipoRefeicao;
  this.cardapio.nomeReceita = this.nomeReceita;
  this.cardapio.qtRendimento = this.qtRendimento;
  this.cardapio.qtCalorias = this.qtCalorias;
  this.cardapio.dsDescricao = this.dsDescricao;
  this.cardapio.idPaciente = this.idUsuario;
  this.cardapio.idMedico = 43;
  
  this.programaNutriService.criarCardapio(this.cardapio).subscribe(
    response => {
      alert('Cardapio realizado com sucesso!');
    },
    error => {
      alert('Algo inesperado aconteceu');
    }
  )
}

//Listar Cardapio do usuário
listarCardapios(){
  this.programaNutriService.getListarCardapios(this.idUsuario).subscribe (
   response => {
     // this.responseCardapio = response;
    }
  )
}

//Excluir Cardápio do Usuário
excluirCardapio(id: number){
  
}
  
//FimCardapio

}