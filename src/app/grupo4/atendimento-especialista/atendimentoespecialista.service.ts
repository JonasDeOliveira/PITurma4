import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Atendimento } from './atendimento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoespecialistaService {

  constructor(private http : HttpClient) { }

  private readonly API = 'http://localhost:8080/atendimento';
  

  getAtendimentos(idAgPaciente:any) {
    
    const URL = `${this.API}/tela/${idAgPaciente}`;
    // `${this.API}/${data}/${this.objMedico.idUsuario}`;
    // console.log(this.objMedico.idUsuario);
    
    return this.http.get(URL);
  }

  cadastrarAtendimento(request: Atendimento): Observable<Atendimento> {
    return this.http.post<Atendimento>(this.API, request);
  }

}
