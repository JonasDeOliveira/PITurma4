import { Component, OnInit } from '@angular/core';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Cartao} from '../shared/cartao.model'

@Component({
  selector: 'app-modal-cartao',
  templateUrl: './modal-cartao.component.html',
  styleUrls: ['./modal-cartao.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalCartaoComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

   open(content){
     this.modalService.open(content);
   }
  ngOnInit(): void {
  }

}
