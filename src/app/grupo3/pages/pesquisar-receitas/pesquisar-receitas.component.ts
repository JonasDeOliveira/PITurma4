import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../../shared/service/receitas.service'
import { ResponseReceitas, Receitas } from '../../shared/model/receitas.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisar-receitas',
  templateUrl: './pesquisar-receitas.component.html',
  styleUrls: ['./pesquisar-receitas.component.css']
})
export class PesquisarReceitasComponent implements OnInit {

  constructor(private receitaService : ReceitaService, private router: Router) { }
 
  responseReceitas : ResponseReceitas[];
  iptBusca='';
  
  ngOnInit(): void {

  }


  getCategoria(categoria : string) {
    this.iptBusca = categoria;
    this.listarReceitas();
  }
  
  listarReceitas() {
    this.receitaService.consultarReceitas(this.iptBusca).subscribe (
      response => {
        localStorage.setItem("resultReceitas", JSON.stringify(response));
        localStorage.setItem("palavraPesquisada", this.iptBusca);
        this.router.navigate(['/resultado-buscar-receitas']);
      }
    )
  }

}
