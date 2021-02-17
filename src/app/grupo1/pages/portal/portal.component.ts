import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("cliente") == null && localStorage.getItem("isLogado") == null) {
      localStorage.setItem("isLogado", JSON.stringify(false))
    } 
  }

}
