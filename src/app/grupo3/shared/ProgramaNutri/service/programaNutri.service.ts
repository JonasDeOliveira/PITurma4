import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cardapio, DadosPaciente, ResponseDadosPaciente} from '../model/programaNutri.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProgramaNutriService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/programa-nutricional/';

  private readonly API2 = 'http://localhost:8080/cardapio';

  getExibirDadosPaciente(idUsuario: number) {
    return this.http.get<ResponseDadosPaciente>(this.API+idUsuario);
 }


criarCardapio(request: Cardapio): Observable<Cardapio> {
  return this.http.post<Cardapio>(this.API2, request);
}
}

