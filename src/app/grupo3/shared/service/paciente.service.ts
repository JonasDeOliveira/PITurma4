import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PacienteService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/usuario/cpf/';

  getPaciente(cpf: string): Observable<number> {
    return this.http.get<number>(this.API + cpf);
  }
}