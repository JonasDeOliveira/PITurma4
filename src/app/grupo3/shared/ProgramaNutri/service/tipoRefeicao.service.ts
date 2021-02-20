import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseTipoRefeicao, IdTipoRefeicao } from '../model/tipoRefeicao.model';



@Injectable({
  providedIn: 'root'
})

export class TipoRefeicaoService {

  constructor(private http: HttpClient) { }

  private readonly API4 = 'http://localhost:8080/tipo-refeicoes';

  getTipoRefeicoes() {
    return this.http.get<IdTipoRefeicao[]>(this.API4);
  }
  
}