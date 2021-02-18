import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DtHorario, ResponseDatas } from '../model/horario.model';
import { AgServico, ResponseAgendamentos } from '../model/agservico.model';

@Injectable({
  providedIn: 'root'
})

export class AgServicoService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/agservico';
  private readonly API2 = 'http://localhost:8080/agservico/cancelar';

  getAgendamentosPorUsuario(id: number){
    const URL = `${this.API}/${id}`
    console.log(URL);
    return this.http.get<AgServico[]>(URL);
  }

  cancelarAgendamento(id: number){
    const URL = `${this.API2}/${id}`
    return this.http.put(URL, null);
  }
  
}