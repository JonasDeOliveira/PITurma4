import { Component, OnInit } from '@angular/core';
import { SolicitacaoexameService } from './solicitacaoexame.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Solicitacao} from './solicitacao.model';

@Component({
  selector: 'app-solicitacao-exames',
  templateUrl: './solicitacao-exames.component.html',
  styleUrls: ['./solicitacao-exames.component.css'],
})
export class SolicitacaoExamesComponent implements OnInit {


  constructor(private solicitacaoService : SolicitacaoexameService,
    private route: ActivatedRoute,
    private router: Router) { }

  responseTelaSolicitacao : Solicitacao;
  idUsuario : any;
  idPaciente : any;
  data : any;
  listaExame = [];
  select = '';

  ngOnInit(): void {
    // this.idUsuario = this.route.snapshot.paramMap.get('idMedico');
    // this.idPaciente = this.route.snapshot.paramMap.get('idPaciente');

    this.idUsuario = 88;
    this.idPaciente = 6;

    this.solicitacaoService.getTelaSolicitacao(this.idUsuario, this.idPaciente).subscribe(
      resposta => {
        this.responseTelaSolicitacao = resposta;
        console.log(resposta);

        this.data = new Date(Date.now()).toISOString().slice(0,10);
      }
    );
  }

  addItem(){
    this.listaExame.push(this.select)
  }

  removerItem(item){
    this.listaExame.splice(this.listaExame.indexOf(item),1)
  }

}
