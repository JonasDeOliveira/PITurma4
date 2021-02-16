import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoespecialistaService {

  constructor(private http : HttpClient) { }

  private readonly API = 'http://localhost:8080/atendimento/tela';

  getAtendimentos(idAgPaciente:any) {
   // var data = new Date(Date.now()).toISOString().slice(0,10);
    
    const URL = `${this.API}/${idAgPaciente}`;
    // `${this.API}/${data}/${this.objMedico.idUsuario}`;
    // console.log(this.objMedico.idUsuario);
    
    return this.http.get(URL);
  }

}
