import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseServicos, Servicos } from '../model/servico.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ServicoService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/servicos';

  getServicos() {
    return this.http.get<ResponseServicos[]>(this.API);
  }

}
