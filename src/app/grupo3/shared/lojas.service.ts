import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseLojas, Lojas } from './lojas.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LojaService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/loja';

  getLojas() {
    return this.http.get<ResponseLojas[]>(this.API);
  }

  
}
