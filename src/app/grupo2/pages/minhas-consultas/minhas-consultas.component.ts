import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minhas-consultas',
  templateUrl: './minhas-consultas.component.html',
  styleUrls: ['./minhas-consultas.component.css']
})
export class MinhasConsultasComponent implements OnInit {

  show = {
    ag1: false,
    ag2: false,
    ag3: false,
    ag4: false,
    ag5: false,
    ag6: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  public abrir(num): void {
    this.show[num] = true
  }

  public fechar(num): void {
    this.show[num] = false
  }

}
