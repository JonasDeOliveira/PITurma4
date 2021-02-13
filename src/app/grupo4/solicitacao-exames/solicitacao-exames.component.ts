import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-solicitacao-exames',
  templateUrl: './solicitacao-exames.component.html',
  styleUrls: ['./solicitacao-exames.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class SolicitacaoExamesComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
  }

}
