import { Component, OnInit } from '@angular/core';
import { ResponseReceitas, Receitas } from '../shared/receitas.model'
import { Router } from '@angular/router';
import { ReceitaService } from '../shared/receitas.service';

@Component({
  selector: 'app-resultado-buscar-receitas',
  templateUrl: './resultado-buscar-receitas.component.html',
  styleUrls: ['./resultado-buscar-receitas.component.css']
})
export class ResultadoBuscarReceitasComponent implements OnInit {

  ReceitaService: any;
  request: any;


  constructor(private router: Router, private receitaService: ReceitaService) { }

  resultadoBuscaReceitas: any;
  palavraPesquisada: any;
  response: any;
  iptBusca: any;
  idReceita: any;

  ngOnInit(): void {
    this.getReceitasBusca();
  }

 

  abrirReceita(id : number) {
    console.log(id);
    this.receitaService.mostrarReceita(id).subscribe(
      response => {
        localStorage.setItem("resultReceitas", JSON.stringify(response));
        this.response = response;
        localStorage.setItem("receita", JSON.stringify(this.response)); 
        console.log(response.dsReceita);
        console.log(response.nomeReceita);      
        //this.router.navigate(['/resultado-receita']);
      }
    )
  }

  listarReceitas() {
    this.receitaService.consultarReceitas(this.iptBusca).subscribe (
      response => {
        //this.responseReceitas = response;
        localStorage.setItem("resultReceitas", JSON.stringify(response));
        localStorage.setItem("palavraPesquisada", this.iptBusca);
        this.router.navigate(['/resultado-buscar-receitas']);
      }
    )
  }

  getId(idReceita : number) {
    this.idReceita = idReceita;
    console.log(idReceita);
    
  }

   getReceitasBusca() {
    this.resultadoBuscaReceitas = JSON.parse(localStorage.getItem("resultReceitas"));
    this.palavraPesquisada = localStorage.getItem("palavraPesquisada");
  }

 
}
