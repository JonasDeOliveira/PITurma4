import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseTipoRefeicao, IdTipoRefeicao } from './tipoRefeicao.model';



@Injectable({
  providedIn: 'root'
})

export class TipoRefeicaoService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/tipo-refeicoes';

  getTipoRefeicoes() {
    return this.http.get<ResponseTipoRefeicao[]>(this.API);
  }
  
}