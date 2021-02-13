import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Solicitacao } from './solicitacao.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoexameService {

  constructor(private http : HttpClient) { }

  private readonly API = 'http://localhost:8080/solic_exame';

  getTelaSolicitacao(idUsuario:any, idPaciente:any) {
    const URL = `${this.API}/${idUsuario}/${idPaciente}`;
    return this.http.get<Solicitacao>(URL); 
  }

}
