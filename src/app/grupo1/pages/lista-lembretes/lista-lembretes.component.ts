import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalLembreteComponent } from '../../lembretes/modal-lembrete/modal-lembrete.component';
import "src/assets/grupo1/css/grupo1.component.css";


@Component({
  selector: 'app-lista-lembretes',
  templateUrl: './lista-lembretes.component.html',
  styleUrls: [ './lista-lembretes.component.css']
})
export class ListaLembretesComponent implements OnInit {

  modalRef: BsModalRef;


  constructor(private modalService: BsModalService) { };

  ngOnInit(): void {
  }

  openModal() {
    this.modalRef = this.modalService.show(ModalLembreteComponent);
  }

}
