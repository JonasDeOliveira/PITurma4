import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AgPaciente, ResponseAgPaciente, ResponseAgPacientes } from '../model/agPaciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AgPacienteService {

  constructor(private http: HttpClient) { }

  private readonly APIGETAGPACIENTE = 'http://localhost:8080/agPaciente/';
  private readonly APIMUDARSTATUSAGPACIENTE = 'http://localhost:8080/agPaciente/mudar-status';

  buscarAgPacientes(idUsuario: number){
    return this.http.get<ResponseAgPacientes[]>(this.APIGETAGPACIENTE+idUsuario);
  }

  // getAgPaciente(idUsuario: string): Observable<ResponseAgPaciente> {
  //   const URL = `${this.APIGETAGPACIENTE}/${idUsuario}`

  //   return this.http.get<ResponseAgPaciente>(URL);
  // }
  
  // alterarAgPacientes(idAgPaciente: number){
  //   return this.http.get<any>(this.APIMUDARSTATUSAGPACIENTE+idAgPaciente);

  // }


  alterarAgPacientes(idAgPaciente: number): Observable<ResponseAgPacientes> {
    const URL = `${this.APIMUDARSTATUSAGPACIENTE}/${idAgPaciente}`
    return this.http.get<ResponseAgPacientes>(URL);
  }

}




