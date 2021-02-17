import { Component, OnInit, Input } from '@angular/core';
import { Lembrete, LembreteIntervalo, ResponseLembretesIntervalo } from '../shared/lembrete.model';
import { LembreteService } from '../shared/lembrete.service';
//import { LembreteComponent } from '../shared/lembrete.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-lembrete',
  templateUrl: './modal-lembrete.component.html',
  styleUrls: ['./modal-lembrete.component.css']
})
export class ModalLembreteComponent implements OnInit {//

  idUsuario : string;
  responseLembreteIntervalos: ResponseLembretesIntervalo[];
  minDate: Date = new Date();
  maxDate: Date = new Date(2023, 1, 1)
 
  request: Lembrete =
    {
      idLembrete: null,
      idPaciente: "",
      nmTitulo: "",
      dsLembrete: "",
      dtLembrete: "",
      dtCriacao: "",
      hrHora: "",
      nrRepeticao: null,
      lembreteIntervalo:
      {
        idLembreteIntervalo: null,
        dsLembreteIntervalo: ""
      },
      vencido: false
    };

  constructor(private lembreteService: LembreteService,
                      public activeModal: NgbActiveModal,
                      private router: Router ) { };

  ngOnInit(): void {
    if(this.idUsuario != null) {
      console.log(this.request.idPaciente);
      this.listarIntervalos();
    }

  }

  listarIntervalos() {
    this.lembreteService.getIntervalosLembretes().subscribe(
      response => {
        this.responseLembreteIntervalos = response;
      }
    )
  }

  registrar() {
    console.log(this.request);

    this.lembreteService.createLembrete(this.request).subscribe(
      response => {
        alert('Lembrete cadastrado com sucesso!');
        this.activeModal.dismiss('Cross click')
        window.location.reload();
      },
      error => {
        console.log(error);
        alert('Algo inesperado aconteceu.');
        this.activeModal.dismiss('Cross click')
      }
    )
  }


  ver() {
    console.log(this.request);
    console.log(this.request.dtLembrete)
  }


}
