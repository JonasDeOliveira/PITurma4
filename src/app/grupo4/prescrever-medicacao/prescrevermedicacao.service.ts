import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prescricao } from './prescricao.model';

@Injectable({
  providedIn: 'root'
})
export class PrescrevermedicacaoService {

  constructor(private http : HttpClient) { }

  private readonly API = 'http://localhost:8080/receituario';
  
  

  getPrescricoes(idMedico:any, idPaciente:any) {
    var data = new Date(Date.now()).toISOString().slice(0,10);
    
    const URL = `${this.API}/${idMedico}/${idPaciente}`;
    return this.http.get<Prescricao>(URL); 
  }

}
