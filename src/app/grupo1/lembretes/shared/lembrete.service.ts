import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ResponseLembretes, Lembrete, ResponseLembrete, LembreteIntervalo, ResponseLembreteIntervalo, ResponseLembretesIntervalo } from './lembrete.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/lembrete';

  //GET todos os lembretes
  getLembretes() {
    return this.http.get<ResponseLembretes[]>(this.API);
  }

  //GET todos INTERVALOS dos lembretes (form)
  getIntervalosLembretes() {
    const URL = `${this.API}/intervalos`

    return this.http.get<ResponseLembretesIntervalo[]>(URL);
  }

  //GET lembrete pelo id
  getLembrete(id: string): Observable<ResponseLembrete> {
    const URL = `${this.API}/${id}`

    return this.http.get<ResponseLembrete>(URL);
  }

  //GET lembretes by usuario e ordenar por mais recente
  getLembretesByUsuario(idUsuario: string): Observable<ResponseLembretes[]> {
    const URL = `${this.API}/user/${idUsuario}`

    return this.http.get<ResponseLembretes[]>(URL);
  }

  //GET lembretes by usuario e ordenar por mais antigo
  getLembretesByDataInversa(idUsuario: string): Observable<ResponseLembretes[]> {
    const URL = `${this.API}/user/${idUsuario}/dt-antiga`

    return this.http.get<ResponseLembretes[]>(URL);
  }

  //GET lembretes by usuario e ordenar por data de criação
  getLembretesByDataCriacao(idUsuario: string): Observable<ResponseLembretes[]> {
    const URL = `${this.API}/user/${idUsuario}/dt-criacao`

    return this.http.get<ResponseLembretes[]>(URL);
  }

  //POST cadastrar lembrete
  createLembrete(request: Lembrete): Observable<Lembrete> {
    return this.http.post<Lembrete>(this.API, request);
  }

  //PUT atualizar lembrete
  updateLembrete(id: string, request: Lembrete): Observable<Lembrete> {
    const URL = `${this.API}/${id}`
    
    return this.http.put<Lembrete>(URL, request);
  }

  //DELETE remover lembrete
  deleteLembrete(idLembrete: number): Observable<any> {
    const URL = `${this.API}/${idLembrete}`;
    
    return this.http.delete<any>(URL);
  }
}
