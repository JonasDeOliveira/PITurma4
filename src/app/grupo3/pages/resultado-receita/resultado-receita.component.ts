import { Component, OnInit } from '@angular/core';
import { ResponseReceitas, Receitas, Receita } from '../../shared/model/receitas.model'
import { Router,  ActivatedRoute} from '@angular/router';
import { ReceitaService } from '../../shared/service/receitas.service';


@Component({
  selector: 'app-resultado-receita',
  templateUrl: './resultado-receita.component.html',
  styleUrls: ['./resultado-receita.component.css']
})
export class ResultadoReceitaComponent implements OnInit {
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
