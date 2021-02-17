import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../shared/receitas.service'
import { ResponseReceitas, Receitas, Receita } from '../shared/receitas.model'
import { Router,  ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-resultado-receita',
  templateUrl: './resultado-receita.component.html',
  styleUrls: ['./resultado-receita.component.css']
})
export class ResultadoReceitaComponent implements OnInit {

  resultadoBuscaReceitas: any;
  palavraPesquisada: any;
  iptBusca: any;
  idReceita: any;
  receita: Receita;
  responseReceita: any;
  

  constructor(private router: Router, private receitaService: ReceitaService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.idReceita = this.activatedRoute.snapshot.paramMap.get("id");
    this.receitaService.mostrarReceita(this.idReceita).subscribe(
      response => { 
        this.receita = response;      
      }

    )
    

  }

  

}
