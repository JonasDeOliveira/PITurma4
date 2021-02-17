import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receita, Receitas, ResponseReceita, ResponseReceitas } from '../model/receitas.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/receitas';
  private readonly API2 = 'http://localhost:8080/receita/';
  
  
 
  consultarReceitas(iptBusca) {
    const URL = `${this.API}/${iptBusca}`;
    return this.http.get<ResponseReceitas[]>(URL);
  }
  
  getReceitaId(idReceita: number) {
   //const URL = `${this.API}/${id}`
    //return this.http.get<ResponseReceitas>(URL);
    return this.http.get<ResponseReceitas[]>(this.API2 + idReceita);
  }

  mostrarReceita(idReceita: number){
   // const URL = `${this.API2}/${idReceita}`
    return this.http.get<Receita>(this.API2+idReceita);
  }


}