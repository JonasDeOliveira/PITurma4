import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoricopacienteService {

  constructor(private http : HttpClient) { 

  }

  private readonly API = 'http://localhost:8080/atendimentosPaciente/44132323';
  private readonly APII = 'http://localhost:8080/atendimento/medico/63';

  getDadosHistoricoCpf() {
    return this.http.get(this.API);
  }

  getDadosHistoricoMedico() {
    return this.http.get(this.APII);
  }
}
