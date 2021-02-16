import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DtHorario, ResponseDatas } from '../model/horario.model';

@Injectable({
  providedIn: 'root'
})

export class HorarioService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/agservico/horarios';
  private readonly API2 = 'http://localhost:8080/agservico/horarios';

  getHorasIndisponiveis(id: number, data: string): Observable<string[]> {
    const URL = `${this.API}/${id}/${data}`
    console.log(URL);
    return this.http.get<string[]>(URL);
  }


  /*getHorasIndisponiveis(id: number, data: string): Observable<ResponseDatas[]> {
    const URL = `${this.API}/${id}/${data}`
    console.log(URL);
    return this.http.get<ResponseDatas[]>(URL);
  } */

}
