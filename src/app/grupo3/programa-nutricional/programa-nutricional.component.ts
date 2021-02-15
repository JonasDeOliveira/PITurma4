import { Component, OnInit } from '@angular/core';
import { ProgramaNutriService} from '../shared/ProgramaNutri/programaNutri.service';
import { Cardapio, ResponseCardapio, ResponseDadosPaciente} from '../shared/ProgramaNutri/programaNutri.model';
import { TipoRefeicaoService } from '../shared/ProgramaNutri/tipoRefeicao.service';
import { ResponseTipoRefeicao } from '../shared/ProgramaNutri/tipoRefeicao.model';


@Component({
  selector: 'app-programa-nutricional',
  templateUrl: './programa-nutricional.component.html',
  styleUrls: ['./programa-nutricional.component.css']
})


export class ProgramaNutricionalComponent implements OnInit {

  constructor( private programaNutriService: ProgramaNutriService, private tipoRefeicaoService: TipoRefeicaoService) { }

    
  responseTipoRefeicao: ResponseTipoRefeicao[];

   responseDadosPaciente: ResponseDadosPaciente;


  ngOnInit(): void {
    this.listarTipoRefeicao();
   // this.getExibirDadosPaciente(14);
  
  }

  getExibirDadosPaciente(idUsuario: number){
    this.programaNutriService.getExibirDadosPaciente(idUsuario).subscribe( 
      response => {
         this.responseDadosPaciente= response;
      }
    );
 }


 listarTipoRefeicao(){
    this.tipoRefeicaoService.getTipoRefeicoes().subscribe(
      response => {
        this.responseTipoRefeicao= response;
  }
    );
}

request: Cardapio = {
    idPaciente: 24,
    idMedico: 33,
  idTipoRefeicao : {
    idTipoRefeicao: 3,
    dsTipoRefeicao: "Almoço"
  } ,
  nomeReceita: '',
  qtCalorias: 134,
  qtRendimento: 12,
  dsDescricao: ''
}

cadastrar() {
  this.programaNutriService.criarCardapio(this.request).subscribe(
    response => {
      this
      alert('Cardapio realizado com sucesso!');
    },
    error => {
      alert('algo inesperado aconteceu');
    }
  )
}
}