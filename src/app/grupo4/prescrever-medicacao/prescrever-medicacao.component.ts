import { Component, OnInit } from '@angular/core';
import { PrescrevermedicacaoService } from './prescrevermedicacao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Prescricao} from './prescricao.model';

@Component({
  selector: 'app-prescrever-medicacao',
  templateUrl: './prescrever-medicacao.component.html',
  styleUrls: ['./prescrever-medicacao.component.css'],

})

export class PrescreverMedicacaoComponent implements OnInit {

  constructor(private prescMedService : PrescrevermedicacaoService,
    private route: ActivatedRoute,
    private router: Router) { }
    
  prescricoesResposta: Prescricao;
  idMedico : any;
  idPaciente : any;
  data : any;

  ngOnInit(): void {
    // this.idMedico = this.route.snapshot.paramMap.get('idMedico');
    // this.idPaciente = this.route.snapshot.paramMap.get('idPaciente');

    this.idMedico = 63;
    this.idPaciente = 24;

    this.prescMedService.getPrescricoes(this.idMedico, this.idPaciente).subscribe(
      resposta => {
        this.prescricoesResposta = resposta;
        console.log(resposta);

        this.data = new Date(Date.now()).toISOString().slice(0,10);
      }
    );
  }
  
}
