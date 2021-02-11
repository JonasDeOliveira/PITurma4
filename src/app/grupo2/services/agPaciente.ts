import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ResponseAgPacientes } from '../model/agPaciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AgPacienteService {

  constructor(private http: HttpClient) { }

  private readonly APIGETAGPACIENTE = 'http://localhost:8080/agPaciente/';

  buscarAgPacientes(idUsuario: Number){
    return this.http.get<ResponseAgPacientes[]>(this.APIGETAGPACIENTE+idUsuario);
  }

}



