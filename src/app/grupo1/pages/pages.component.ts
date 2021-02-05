import { Component, OnInit } from '@angular/core';

//TODO: Não está pegando o grupo1.component.css
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css', '../grupo1.component.css']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
