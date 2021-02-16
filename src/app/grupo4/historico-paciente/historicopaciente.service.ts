import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router, NavigationEnd}  from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HistoricopacienteService {

  constructor(private http : HttpClient,private router: Router) { }
   
  private readonly API = 'http://localhost:8080/atendimentosPaciente';
  private readonly APII = 'http://localhost:8080/atendimento/medico';
  private readonly APIII = 'http://localhost:8080/prontuario';


objMedico = JSON.parse(localStorage.getItem("medico"));

  getDadosHistoricoCpf(cpf : string) {
    const URL = `${this.API}/${cpf}`
    return this.http.get(URL);
  }

  getDadosHistoricoMedico() {
    const URL = `${this.APII}/${this.objMedico.idUsuario}`;
    return this.http.get(URL);
  }

  getDadoProntuario(idProntuario : number) {
    const URL = `${this.APIII}/${idProntuario}`
    return this.http.get(URL);
  }

}
