import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agenda } from '../model/agenda';
import { Resposta } from '../model/resposta';


@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private http: HttpClient) { }

  private readonly APIAGENDAPORESP = 'http://localhost:8080/agenda/';
  private readonly MUDARSTATUSAGENDADA = 'http://localhost:8080/agenda/disponibilidade/';
  private readonly APIAGENDADATA = 'http://localhost:8080/filtro'

  listarPorEsp(idTipoConsulta: number, idEspecialidade: number){
    return this.http.get<Agenda[]>(this.APIAGENDAPORESP + idTipoConsulta + "/" + idEspecialidade);
  }

  mudarStatus(idAgPaciente: number){
    return this.http.get<boolean>(this.MUDARSTATUSAGENDADA + idAgPaciente);
  }

  filtrarAgendasPorData(agendas: Agenda[], data: Date){
    return this.http.get<Agenda[]>(this.APIAGENDADATA + agendas + data)
  }

}
