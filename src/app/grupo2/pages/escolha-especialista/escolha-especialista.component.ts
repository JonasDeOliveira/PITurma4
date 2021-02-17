import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Agenda} from '../../shared/model/agenda';
import { TipoConsulta} from '../../shared/model/tipoConsulta';
import { EspMed } from '../../shared/model/espMed';
import { AgendaService } from '../../shared/services/agenda.service';
import { AgPacienteService } from '../../shared/services/agPaciente.service';


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

  salvarAgendaLS(agenda: Agenda){
    localStorage.setItem("agenda", JSON.stringify(agenda));
    this.alterarStatus(agenda.idAgenda);
    console.log(localStorage.getItem("agenda"))
  }

  alterarStatus(idAgenda: number){
    this.agendaService.mudarStatus(idAgenda).subscribe(
    response => {
      if(response){console.log("disponibilidade da agenda alterada")};
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
  
