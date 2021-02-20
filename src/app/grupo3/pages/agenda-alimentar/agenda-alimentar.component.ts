import { Component, OnInit } from '@angular/core';
import { Cardapio, ListarCardapios } from '../../shared/ProgramaNutri/model/programaNutri.model';
import { ProgramaNutriService } from '../../shared/ProgramaNutri/service/programaNutri.service';


@Component({
  selector: 'app-agenda-alimentar',
  templateUrl: './agenda-alimentar.component.html',
  styleUrls: ['./agenda-alimentar.component.css']
})

export class AgendaAlimentarComponent implements OnInit {
  id: number;
  response: any;
  responseCardapios:  Cardapio[];
  spinCarregando: boolean = true;
 
  constructor(private programaNutriService: ProgramaNutriService) { }

  ngOnInit(): void {
    this.exibirCardapio();
  }

  exibirCardapio() {
    
    this.id = JSON.parse(localStorage.getItem("cliente"))["idUsuario"];
    this.programaNutriService.getListarCardapios(this.id).subscribe((result) => {
      this.responseCardapios = result;
      this.spinCarregando = false;
      console.log(this.responseCardapios.length);
    }
    )
  }




}
