import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseLojas, Lojas } from '../model/lojas.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LojaService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/loja';
  private readonly API2 = 'http://localhost:8080/lojas/';

  getLojas() {
    return this.http.get<ResponseLojas[]>(this.API);
  }

  getLojaById(id: number) {
    const URL = `${this.API}/id/${id}`
    console.log(URL);
    return this.http.get<Lojas>(URL);
  }
  
  getLojasPorLocalidade(local: string): Observable<any> {
    return this.http.get<ResponseLojas[]>(this.API2 + local);
  }

}
