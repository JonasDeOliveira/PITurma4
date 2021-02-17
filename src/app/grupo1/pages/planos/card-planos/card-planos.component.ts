import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../cliente/shared/cliente.service';
import { PlanosService } from '../shared/planos.service';

@Component({
  selector: 'app-card-planos',
  templateUrl: './card-planos.component.html',
  styleUrls: ['./card-planos.component.css']
})
export class CardPlanosComponent implements OnInit {
  responsePlanos: any;
 
  constructor(
    private planosService: PlanosService,
    clienteService: ClienteService
  ) {
    
   }

  ngOnInit(): void {
    this.getPlanos();
    
  }
  getPlanos() {
    this.planosService.getPlanos().subscribe(
      response => {
        console.log(response);
        this.responsePlanos = response;
      }
    )
    }

}
