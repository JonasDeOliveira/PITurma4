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

  getAgendamentosPorUsuario(id: number){
    const URL = `${this.API}/${id}`
    console.log(URL);
    return this.http.get<AgServico[]>(URL);
  }

}