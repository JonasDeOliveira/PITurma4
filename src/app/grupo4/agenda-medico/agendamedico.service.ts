import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamedicoService {

  constructor(private http : HttpClient) { }

  private readonly API = 'http://localhost:8080/agendamentos';
  private readonly API2 = 'http://localhost:8080/agPaciente/mudar-status';

  
  objMedico = JSON.parse(localStorage.getItem("medico"));

  getAgendamentos() {
    var data = new Date(Date.now()).toISOString().slice(0,10);

    const URL = `${this.API}/${data}/${this.objMedico.idUsuario}`;
    console.log(this.objMedico.idUsuario);
    
    return this.http.get(URL);
  }

  cancelarAgendamento(idAgPaciente: number, request: any): Observable<any>{
    const URL = `${this.API2}/${idAgPaciente}`;   
    return this.http.put<any>(URL, request );
  }
}
