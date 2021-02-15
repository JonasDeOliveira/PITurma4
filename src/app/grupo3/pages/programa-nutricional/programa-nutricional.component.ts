import { Component, OnInit } from '@angular/core';
import { ProgramaNutriService} from '../../shared/ProgramaNutri/service/programaNutri.service';
import { Cardapio, ResponseCardapio, ResponseDadosPaciente} from '../../shared/ProgramaNutri/model/programaNutri.model';
import { TipoRefeicaoService } from '../../shared/ProgramaNutri/service/tipoRefeicao.service';
import { ResponseTipoRefeicao } from '../../shared/ProgramaNutri/model/tipoRefeicao.model';
import { NullTemplateVisitor } from '@angular/compiler';


@Component({
  selector: 'app-programa-nutricional',
  templateUrl: './programa-nutricional.component.html',
  styleUrls: ['./programa-nutricional.component.css']
})


export class ProgramaNutricionalComponent implements OnInit {

  constructor( private programaNutriService: ProgramaNutriService, private tipoRefeicaoService: TipoRefeicaoService) { }

    responseTipoRefeicao: ResponseTipoRefeicao;
    responseDadosPaciente: ResponseDadosPaciente;
    responseCardapio: ResponseCardapio;


    idTipoRefSelecionada: number;
    idTipoRefString: string;

  //  idMedico: any;
  //idPaciente : any;

  ngOnInit(): void {
    this.listarTipoRefeicao();
  //  this.getExibirDadosPaciente(24);
  }

//***************************DADOS PACIENTE***********************************************
//inicioDadosPaciente
getExibirDadosPaciente(idUsuario: number){
    this.programaNutriService.getExibirDadosPaciente(idUsuario).subscribe( 
      response => {
         this.responseDadosPaciente= response;
      }
    );
 }
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
  idPaciente: 24,
  idMedico: 33,
 idTipoRefeicao : {
  idTipoRefeicao : null,
   dsTipoRefeicao: ''
  } ,
 nomeReceita: '',
 qtCalorias: 12,
 qtRendimento: 123,
 dsDescricao: ''
}

cadastrar() {
  this.programaNutriService.criarCardapio(this.request).subscribe(
    response => {
      alert('Cardapio realizado com sucesso!');
    },
    error => {
      alert('algo inesperado aconteceu');
    }
  )
}

//FimCardapio
}
