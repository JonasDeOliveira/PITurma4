import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Agenda, Medico } from '../../shared/model/agenda';
import { CadastroAgPaciente } from '../../shared/model/cadastroAgPaciente';
import { Resposta } from '../../shared/model/resposta';
import { AgendaService } from '../../shared/services/agenda.service';
import { AgPacienteService } from '../../shared/services/agPaciente.service';
import { of } from 'rxjs';

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
  
  idEspMedString : string = localStorage.getItem("idEspMed");
  idEspMed : number = parseInt(this.idEspMedString);
  responseAgenda : Agenda;
  arrayAgendas: Agenda[];
  respostaString:  Resposta;
  especialidadeMedica: string = "";
  idAgPacienteEscolhida: number;
  idAgPacienteString: string;
  request: CadastroAgPaciente = {
    idUsuario: 7,
    idAgenda: 27
  }
  idAgendaEscolhida: number;
  idAgendaString: string;
  form: FormGroup;
  periodoData = [];

  
  ngOnInit(): void {
      this.buscarAgenda(1 , 20);
  }
   buscarAgenda(idTipoConsulta: number,idEspecialidade: number){
     this.agendaService.listarPorEsp(idTipoConsulta,idEspecialidade).subscribe(
      response => {
        this.arrayAgendas = response;
        this.especialidadeMedica = this.arrayAgendas[0].medico.espMed.dsEspMed;
        
      }
     )
   }

  criarAgPaciente() {
    this.agPacienteService.cadastrarAgPaciente(this.request).subscribe(
      response => {
        this.idAgPacienteEscolhida = response;
        console.log("response"  + response)
        this.salvarAgPacienteLs();
        console.log("ls" + localStorage.getItem("idAgPaciente"));
        this.alterarStatus(this.idAgPacienteEscolhida);
      },
      error => {
        alert('erro ao selecionar nova consulta');
      }
    )
  }

  salvarAgPacienteLs(){
    this.idAgPacienteString = this.idAgPacienteEscolhida.toString();
    localStorage.setItem("idAgPaciente", this.idAgPacienteString)
  }

  alterarStatus(idAgPaciente: number){
    idAgPaciente = this.idAgPacienteEscolhida;
    this.agendaService.mudarStatus(idAgPaciente);
    response => {
      this.respostaString = response;
      alert(response.resposta);
    }
  }
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
  
