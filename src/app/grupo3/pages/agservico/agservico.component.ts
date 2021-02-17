import { Component, OnInit } from '@angular/core';
import { ResponseLojas } from '../../shared/model/lojas.model';
import { Servicos, ResponseServicos } from '../../shared/model/servico.model';
import { ServicoService } from '../../shared/service/servico.service';
import { LojaService } from '../../shared/service/lojas.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HorarioService } from '../../shared/service/horario.service';
import { Horario, ResponseDatas, DtHorario } from '../../shared/model/horario.model';
import { AgServico } from '../../shared/model/agservico.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agservico',
  templateUrl: './agservico.component.html',
  styleUrls: ['./agservico.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AgservicoComponent implements OnInit {
  
  local: string; 
  idLoja: number; 
  idServico: number;
  horario: string;
  data: string; 
  agendamentos: AgServico[];
  servicos: Servicos[];
  ag: AgServico;
  

  hrManha: string[]; //todos os horários da manhã
  hrTarde: string[]; //todos os horários da tarde
  hrNoite: string[]; //todos os horários da noite

  hrManhaExibir: string[]; //apenas horários disponíveis da manhã
  hrTardeExibir: string[]; //apenas horários disponíveis da tarde
  hrNoiteExibir: string[]; //apenas horários disponíveis da noite

  hrIndisp: string[]; //recebe os horários que já estão agendados

  exibir: boolean; //variavel que exibe os horários
  exibir2: boolean; //variavel que exibe a parte de data/hora
  tem: boolean;

  responseServicos : ResponseServicos; //recebe os serviços
  responseLojas : ResponseLojas[]; //recebe as lojas
  responseDatas : ResponseDatas[];

  constructor(private servicoService : ServicoService, private lojaService : LojaService, config: NgbModalConfig, private modalService: NgbModal, private horarioService : HorarioService, private router: Router) { 
    config.backdrop = 'static';
    config.keyboard = false;

    this.exibir = false; //não exibe os horários
    this.exibir2 = false; //não exibe a parte3
    this.hrManha = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"];
    this.hrTarde = ["15:00", "15:30", "16:00", "16:30", "17:00", "17:30"];
    this.hrNoite = ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];
    this.hrManhaExibir = new Array; 
    this.hrTardeExibir = new Array; 
    this.hrNoiteExibir = new Array; 
    this.ag = new AgServico(); 
    this.agendamentos = new Array; 
    this.servicos = new Array;

  }

  ngOnInit(): void {
    this.listarServicos();
  }

  open(content) {
    this.modalService.open(content);
  }


  getLoja(id: number){
    this.idLoja = id; 
    console.log("Id seviço: "+ this.idServico);
    console.log("Id loja: "+id);

    this.exibir2 = true;
    
  }

  getServico(id: number){
    this.idServico = id;
    console.log("Id serviço: "+id);
  }

  getHora(hora: string){
    this.horario = hora;
    console.log("Horario: "+hora);
  }

  listarServicos(){
    this.servicoService.getServicos().subscribe(
      response => {
        this.responseServicos = response;
      }
    )

    
  }

  buscarLojaPorLocal(){
    this.lojaService.getLojasPorLocalidade(this.local).subscribe (
      response => {
        this.responseLojas = response;
      }
    )
  }

  getHorasIndisponiveis(data: string){
    this.data = data;

    this.horarioService.getHorasIndisponiveis(this.idLoja, data).subscribe(
      response => {
        this.hrIndisp = response;

        //comparando os horários 

        //horários manhã
        for(let m=0; m<6; m++){
          this.tem = false; 
          for(let i=0; i<this.hrIndisp.length; i++){
            if (this.hrManha[m].localeCompare(this.hrIndisp[i]) == 0){
              this.tem = true;
            }
          }
          if (this.tem == false){
            this.hrManhaExibir.push(this.hrManha[m]);
          }
        }

        //horários tarde
        for(let m=0; m<6; m++){
          this.tem = false; 
          for(let i=0; i<this.hrIndisp.length; i++){
            if (this.hrTarde[m].localeCompare(this.hrIndisp[i]) == 0){
              this.tem = true;
            }

          }
          if (this.tem == false){
            this.hrTardeExibir.push(this.hrTarde[m]);
          }
        }

        //horarios noite
        for(let m=0; m<6; m++){
          this.tem = false; 
          for(let i=0; i<this.hrIndisp.length; i++){
            if (this.hrNoite[m].localeCompare(this.hrIndisp[i]) == 0){
              this.tem = true;
            }

          }
          if (this.tem == false){
            this.hrNoiteExibir.push(this.hrNoite[m]);
          }
        }

        this.exibir = true;
      }
    )



    
    console.log(this.hrIndisp);
    
    
    this.exibir = true;
  }
  
  salvarAgServico(){

    //adicionar o agendamento atual no array de agendamentos 
    this.ag.idLoja = this.idLoja;
    this.ag.idServico = this.idServico;
    this.ag.dtHr =  this.data + " " + this.horario + ":00"; 

    //this.responseServicos.servicos.forEach(element => {
    //  if (this.idServico == element.id){
    //    this.servicos.push(element);
    //  }
    //});
    

    console.log(this.ag.dtHr);
    console.log("Serviço salvo com sucesso!");

    this.agendamentos.push(this.ag) ;
  }

  concluirAgServico(callback: any){

    this.salvarAgServico();

    //depois enviar o array agendamentos para a pag de pagamentos. 
    localStorage.setItem("agendamentos", JSON.stringify(this.agendamentos));
    localStorage.setItem("servicos", JSON.stringify(this.servicos));

    //FECHAR A MODAL AQUI
    callback('Cross click');
    this.router.navigate(['/pagamento-servico']);
  }

  novoAgServico(){
    
    this.salvarAgServico();
  }
  
}
