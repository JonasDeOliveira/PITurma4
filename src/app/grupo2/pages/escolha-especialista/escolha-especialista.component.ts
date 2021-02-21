import { Component, OnInit } from '@angular/core';
import { Agenda, Medico} from '../../shared/model/agenda';
import { TipoConsulta} from '../../shared/model/tipoConsulta';
import { EspMed } from '../../shared/model/espMed';
import { AgendaService } from '../../shared/services/agenda.service';
import { AgPacienteService } from '../../shared/services/agPaciente.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-escolha-especialista',
  templateUrl: './escolha-especialista.component.html',
  styleUrls: ['./escolha-especialista.component.css']
})
export class EscolhaEspecialistaComponent implements OnInit {

  constructor(
    public agendaService: AgendaService,
    public agPacienteService : AgPacienteService,
    private router: Router,
    ){  
   
  }

  // Valores armazenados no LS
  especialidade: EspMed = JSON.parse(localStorage.getItem("espMed"));
  dsEspecialidade: string = this.especialidade.dsEspMed;
  idEsp: number = this.especialidade.idEspMed;

  consulta : TipoConsulta = JSON.parse(localStorage.getItem("tipoConsulta")); 
  dsConsulta : string = this.consulta.dsTipoConsulta;
  idTipoConsulta: number = this.consulta.idTipoConsulta;
  agendaVazia : boolean = false;

  data: string;
  mostraSpin = false; 



  //TESTE AGRUPAR HORARIOS
  arrayAgendas: Agenda[];
  arrayPronto= [];
  arrayNomes=[];
  horariosFinal=[];
  horarioFormatado="";
 
  
  agendaParaLS={
    idAgenda:0,
    medico:{
      nome:"",
      espMed:{
        dsEspMed:""
      }, 
      preco:{
        valorConsulta: 0
      }
    }, 
    data: "",
    periodo:{
      horaInicial:""
    }
  }

  ngOnInit(): void {
    this.mostraSpin = true;
    this.buscarAgenda(this.idTipoConsulta , this.idEsp);
    this.conversorData();
  }

   buscarAgenda(idTipoConsulta: number,idEspecialidade: number){
    this.mostraSpin = true;
     this.agendaService.listarPorEsp(idTipoConsulta,idEspecialidade).subscribe(
      response => { 
        this.mostraSpin = false;
        this.arrayAgendas = response;
        this.arrayPronto = this.criarNovoArray();
        this.verificarAgenda(this.arrayPronto);
      }
     )
   }

   //teste horarios
  criarNovoArray(){
    let arrayFinal = [];
    this.arrayAgendas.forEach(element => {
      let novaAgenda={
        idAgenda:[],
        medico:{
          nome: "",
          dsEspMed:"",
          vlConsulta:0,
          dsEndImg: "",

        },
        data:"",
        horarios:[]
      };
      if(!(this.arrayNomes.includes(element.medico.nome))){
        // novaAgenda.idAgenda=element.idAgenda;
        novaAgenda.medico.nome=element.medico.nome;
        novaAgenda.medico.dsEspMed=element.medico.espMed.dsEspMed;
        novaAgenda.medico.vlConsulta=element.medico.preco.vlConsulta;
        novaAgenda.medico.dsEndImg=element.medico.dsEndImg;
        novaAgenda.data=element.data;
        arrayFinal.push(novaAgenda);
        this.arrayNomes.push(element.medico.nome)
      }
    })

    //acrescentando os horarios
    arrayFinal.forEach(elem =>{
      this.arrayAgendas.forEach(agenda =>{
        if(agenda.medico.nome==elem.medico.nome){
         let horaF = agenda.periodo.horaInicial.toString().slice(0,5);
         elem.idAgenda.push(agenda.idAgenda)
        elem.horarios.push(horaF);
        }
      })
    })
    return arrayFinal;
  }

  salvarAgendaLS(agenda, horario){
    this.agendaParaLS.medico.nome=agenda.medico.nome;
    this.agendaParaLS.medico.espMed.dsEspMed=agenda.medico.dsEspMed;
    this.agendaParaLS.medico.preco.valorConsulta=agenda.medico.vlConsulta;
    this.agendaParaLS.data=agenda.data;
    this.agendaParaLS.periodo.horaInicial=horario.toString().slice(0,5);
    let index = agenda.horarios.indexOf(horario)
    this.agendaParaLS.idAgenda = agenda.idAgenda[index];
    this.alterarStatus(agenda.idAgenda);
    localStorage.setItem("agenda", JSON.stringify(this.agendaParaLS));
    this.router.navigate(['/pagamento-particular']);
  }
  
  alterarStatus(idAgenda: number){
    this.agendaService.mudarStatus(idAgenda).subscribe(
    response => {
      if(response){console.log("disponibilidade da agenda alterada")};
    }
    )
  }

  conversorData(){
    let data = JSON.parse(localStorage.getItem("data")).slice(0,10);
    let dataFormato = data.split("-");
    let dataFinal = `${dataFormato[2]}/0${dataFormato[1]-1}/${dataFormato[0]}`;
    
    this.data = dataFinal;
    // console.log(this.data)

  }

  // verificarAgenda(response){
  //   let contador = 0;
  //   response.forEach(element => {
  //   if (element.length == 0) {
  //     this.agendaVazia = true;
  //   } else {
  //     this.agendaVazia = false;
  //   }
  //   })
  // }

  verificarAgenda(response){
    let contador = 0;
    response.forEach(element => {
     if (element.data == this.data) {
      contador ++;
     }
    });
    if (contador == 0) {
      this.agendaVazia = true;
    } else {
      this.agendaVazia = false;
    }
  }

  converterHorario(horario){
    let hor = horario.toString();
  };

}
  
