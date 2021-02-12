import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalLembreteComponent } from '../../lembretes/modal-lembrete/modal-lembrete.component';
import "src/assets/grupo1/css/grupo1.component.css";


@Component({
  selector: 'app-lista-lembretes',
  templateUrl: './lista-lembretes.component.html',
  styleUrls: [ './lista-lembretes.component.css']
})
export class ListaLembretesComponent implements OnInit {

  idUsuario: string;

  constructor(private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router) { };

  ngOnInit(): void {
    this.idUsuario = this.route.snapshot.paramMap.get('idUsuario');
  }

  open() {
    const modalRef = this.modalService.open(ModalLembreteComponent);
    modalRef.componentInstance.name = 'World';
  }

}
