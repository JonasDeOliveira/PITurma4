import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Agenda, Medico } from '../../shared/model/agenda';
import { TipoConsulta} from '../../shared/model/tipoConsulta';
import { EspMed } from '../../shared/model/espMed';
import { CadastroAgPaciente } from '../../shared/model/cadastroAgPaciente';
import { Resposta } from '../../shared/model/resposta';
import { AgendaService } from '../../shared/services/agenda.service';
import { AgPacienteService } from '../../shared/services/agPaciente.service';
import { of } from 'rxjs';
import { AgPaciente } from '../../shared/model/agPaciente';

@Component({
  selector: 'app-escolha-especialista',
  templateUrl: './escolha-especialista.component.html',
  styleUrls: ['./escolha-especialista.component.css']
})
export class EscolhaEspecialistaComponent implements OnInit {

  constructor(
    public agendaService: AgendaService,
    public agPacienteService : AgPacienteService,
    // private formBuilder: FormBuilder,

    ){  
    //   this.form = this.formBuilder.group({
    //   periodo: new FormArray([], minSelectedCheckboxes(0))
    // });
  
  
    // of(this.getPeriodo()).subscribe(periodo => {
    //   this.periodoData = periodo;
    //   this.addCheckboxes();
    // });
  }

  // Valores armazenados no LS
  especialidade: EspMed = JSON.parse(localStorage.getItem("espMed"));
  dsEspecialidade: string = this.especialidade.dsEspMed;

  idEsp: number = this.especialidade.idEspMed;


  consulta : TipoConsulta = JSON.parse(localStorage.getItem("tipoConsulta")); 
  dsConsulta : string = this.consulta.dsTipoConsulta;

  idTipoConsulta: number = this.consulta.idTipoConsulta;

  arrayAgendas: Agenda[];
  agPacienteEscolhida: Agenda;
  idAgePaciente: number;


  
  // idAgPacienteString: string;
  // responseAgenda : Agenda;
  // respostaString:  Resposta;
  // especialidadeMedica: string = "";
  // idAgendaEscolhida: number;
  // idAgendaString: string;

  
  request: CadastroAgPaciente = {
    idUsuario: 142,
    idAgenda: 0
  }


  //Variaveis para o filtro
  form: FormGroup;
  periodoData = [];

  
  ngOnInit(): void {
      this.buscarAgenda(this.idTipoConsulta , this.idEsp);
  }
   buscarAgenda(idTipoConsulta: number,idEspecialidade: number){
     this.agendaService.listarPorEsp(idTipoConsulta,idEspecialidade).subscribe(
      response => this.arrayAgendas = response
     )
   }

  criarAgPaciente(idAgenda: number) {
    console.log(idAgenda);
    this.request.idAgenda = idAgenda;
    this.agPacienteService.cadastrarAgPaciente(this.request).subscribe(
      response => {
        localStorage.setItem("idAgPaciente", JSON.stringify(response));
        this.idAgePaciente = response.idAgPaciente;
        this.alterarStatus(this.idAgePaciente);
       
        console.log("response"  +  JSON.stringify(response))
        console.log("ls" + localStorage.getItem("idAgPaciente"));
      },
      error => {
        alert('erro ao selecionar nova consulta');
      }
    )
  }

  alterarStatus(idAgPaciente: number){
    this.agendaService.mudarStatus(idAgPaciente).subscribe(
    response => {
      alert(response.resposta);
    }
    )
  }

  // Metodos do filtro
  get periodoFormArray() {
    return this.form.controls.periodo as FormArray;
  }
  private addCheckboxes() {
    this.periodoData.forEach(() => this.periodoFormArray.push(new FormControl(false)));
  }
  
  getPeriodo() {
    return [
      { id: ["1", "2", "3", "4", "5"], name: 'manha' }, 
      { id: ["6", "7", "8", "9", "10", "11"], name: 'tarde' },
      { id: ["12", "13", "14", "15"], name: 'noite' }
  
    ];
  }
  
  submit() {
    const selectedPeriodoIds = this.form.value.periodo
      .map((checked, i) => checked ? this.periodoData[i].id : null)
      .filter(v => v !== null);
  
    console.log(selectedPeriodoIds);
  }
  }
  
  function minSelectedCheckboxes(min = 0) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => next ? prev + next : prev, 0);
  
    return totalSelected >= min ? null : { required: true };
  };
  
  return validator;
}
  
