import { Component, OnInit } from '@angular/core';
import { PerfilmedicoService } from './perfilmedico.service'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-perfil-medico',
  templateUrl: './perfil-medico.component.html',
  styleUrls: ['./perfil-medico.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class PerfilMedicoComponent implements OnInit {

  /*constructor() {
    
  ngOnInit(): void {
  }*/


  constructor(private perfilService : PerfilmedicoService, config: NgbModalConfig, private modalService: NgbModal){
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }
  

  dadosRetorno : any

  ngOnInit(): void {this.getDadosPerfil()};


   getDadosPerfil(){
    this.perfilService.getDadosPerfil().subscribe(
      retorno => {
        this.dadosRetorno = retorno; 
        console.log(retorno);
      }
    )
  }



}
