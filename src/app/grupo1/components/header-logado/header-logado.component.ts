import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-logado',
  templateUrl: './header-logado.component.html',
  styleUrls: ['./header-logado.component.css']
})
export class HeaderLogadoComponent implements OnInit {

  navbarOpen : boolean;
  constructor() { }

  ngOnInit(): void {
  }
  toggleNavbar(){ 
    this.navbarOpen =! this.navbarOpen; 
    };
}
