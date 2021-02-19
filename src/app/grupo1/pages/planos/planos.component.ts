import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css']
})
export class PlanosComponent implements OnInit {

  ehLogado = JSON.parse(localStorage.getItem("isLogado"));
  mostrandoSpin: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
