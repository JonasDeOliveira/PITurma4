import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-prescrever-medicacao',
  templateUrl: './prescrever-medicacao.component.html',
  styleUrls: ['./prescrever-medicacao.component.css'],
  providers: [NgbModalConfig, NgbModal]

})

export class PrescreverMedicacaoComponent implements OnInit {

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
