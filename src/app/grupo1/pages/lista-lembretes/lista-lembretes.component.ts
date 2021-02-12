import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  idUsuario: string;

  constructor(private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router) { };

  ngOnInit(): void {
    this.idUsuario = this.route.snapshot.paramMap.get('idUsuario');
  }

  openModal() {
    this.modalRef = this.modalService.show(ModalLembreteComponent);
  }

}
