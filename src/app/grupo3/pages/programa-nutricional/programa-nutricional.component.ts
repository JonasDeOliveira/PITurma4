import { Component, OnInit } from '@angular/core';
import { ProgramaNutriService} from '../../shared/ProgramaNutri/service/programaNutri.service';
import { Cardapio, DadosPaciente, ResponseCardapio, ResponseDadosPaciente} from '../../shared/ProgramaNutri/model/programaNutri.model';
import { TipoRefeicaoService } from '../../shared/ProgramaNutri/service/tipoRefeicao.service';
import { ResponseTipoRefeicao } from '../../shared/ProgramaNutri/model/tipoRefeicao.model';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-programa-nutricional',
  templateUrl: './programa-nutricional.component.html',
  styleUrls: ['./programa-nutricional.component.css']
})


export class ProgramaNutricionalComponent implements OnInit {

  constructor( 
    private programaNutriService: ProgramaNutriService, 
    private tipoRefeicaoService: TipoRefeicaoService
  ) { }

   responseTipoRefeicao: ResponseTipoRefeicao;
   dadosPacienteResposta : DadosPaciente;
   responseCardapio: ResponseCardapio[];
   listCardapios: ProgramaNutriService[];

   idPaciente = localStorage.getItem("idPaciente");
   idUsuario = parseInt(this.idPaciente);

  ngOnInit(): void {
    this.listarTipoRefeicao();

   this.programaNutriService.getExibirDadosPaciente(this.idUsuario).subscribe(
    response => {
      this.dadosPacienteResposta=response;
    }
  );
  this.listCardapios= new Array; 
  
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

//**************************************CARDAPIO*******************************
//inicioCardapio
request: Cardapio = {
  idPaciente: this.idUsuario,
  idMedico: 63,
 idTipoRefeicao : {
  idTipoRefeicao : null,
   dsTipoRefeicao: ''
  } ,
 nomeReceita: '',
 qtCalorias: null,
 qtRendimento: null,
 dsDescricao: ''
}

cadastrar() {
  this.programaNutriService.criarCardapio(this.request).subscribe(
    response => {
     //   this.responseCardapio= response;
      alert('Cardapio realizado com sucesso!');
    },
    error => {
      alert('algo inesperado aconteceu');
    }
  )
}


//Listar Cardapio do usuário
listarCardapios(){
  this.programaNutriService.getListarCardapios(this.idUsuario).subscribe (
   response => {
      this.responseCardapio = response;
    }
  )
}

    
//FimCardapio

}
