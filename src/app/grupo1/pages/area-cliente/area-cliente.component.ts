import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente/shared/cliente.service';
import { PlanosService } from '../planos/shared/planos.service'
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalLembreteComponent } from '../../lembretes/modal-lembrete/modal-lembrete.component';
import { LembreteService } from '../../lembretes/shared/lembrete.service';



@Component({
  selector: 'app-area-cliente',
  templateUrl: './area-cliente.component.html',
  styleUrls: ['./area-cliente.component.css'],

})
export class AreaClienteComponent implements OnInit {

  idUsuario: string;
  cliente = JSON.parse(localStorage.getItem("cliente"));
  ehLogado = JSON.parse(localStorage.getItem("isLogado"));

  constructor(private clienteService: ClienteService,
    private lembreteService: LembreteService,
    private planosService: PlanosService,
    private router: Router,
    private modalService: NgbModal) { }

  areaDoCliente: any;

  ngOnInit(): void {
    console.log(this.ehLogado);
    if (this.cliente != null) {
      this.idUsuario = this.cliente.idUsuario;
      this.getAreaDoCliente();
    }
  }


  getAreaDoCliente() {
    this.clienteService.getAreaClienteById().subscribe(
      response => {
        this.areaDoCliente = response;
        console.log(response);
      }
    )
  }
  open() {
    const modalRef = this.modalService.open(ModalLembreteComponent);
    modalRef.componentInstance.request.idPaciente = this.idUsuario;
    modalRef.componentInstance.idUsuario = this.idUsuario;
  }
  removeTarefa(idLembrete) {
    if (confirm("Deseja apagar o lembrete?")) {
      this.lembreteService.deleteLembrete(idLembrete).subscribe(
        response => {
          this.getAreaDoCliente();
        }
      )
    }
  }


}
