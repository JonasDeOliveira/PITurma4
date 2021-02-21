import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponsePeriodos } from './agenda.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamedicoService {

  constructor(private http : HttpClient) { }

  private readonly API = 'http://localhost:8080/agendamentos';
  private readonly API2 = 'http://localhost:8080/agPaciente/status';
  private readonly API3 = 'http://localhost:8080/horarios';
  private readonly API4 = 'http://localhost:8080/agendas';

  
  objMedico = JSON.parse(localStorage.getItem("medico"));

  getAgendamentos() {
    var data = new Date(Date.now()).toISOString().slice(0,10);

    const URL = `${this.API}/${data}/${this.objMedico.idUsuario}`;
    console.log(this.objMedico.idUsuario);
    
    return this.http.get(URL);
  }

  cancelarAgendamento(idAgPaciente: number): Observable<any>{
    const URL = `${this.API2}/${idAgPaciente}`;   
    return this.http.put<any>(URL, null);
  }

  getHorarios(data: any) {
    // var data = new Date(Date.now()).toISOString().slice(0,10);

    const URL = `${this.API3}/${data}/${this.objMedico.idUsuario}`;
    return this.http.get<ResponsePeriodos[]>(URL);
  }


  cadastrarAgenda(request: any, data: string): Observable<any> {
    const URL = `${this.API4}/${data}`
    return this.http.post<any>(URL, request);
  } 

  consultarAgendamentos(data: string) {
    const URL = `${this.API}/${data}/${this.objMedico.idUsuario}`;
    console.log(this.objMedico.idUsuario);
    
    return this.http.get(URL);
  }

}
