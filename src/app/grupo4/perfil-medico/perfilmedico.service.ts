import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PerfilMedico } from './perfilmedico.model';



@Injectable({
  providedIn: 'root'
})
export class PerfilmedicoService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/perfilMedico';
  private readonly API2= 'http://localhost:8080/medico';

  objMedico = JSON.parse(localStorage.getItem("medico"));

  getDadosPerfil() {
    const URL = `${this.API}/${this.objMedico.idUsuario}`
    return this.http.get(URL);
  }

  
  updatePerfil(id: String , request: any): Observable<any> {
    const URL = `${this.API2}/${this.objMedico.idUsuario}`
    
    return this.http.put<any>(URL, request);
  }
}
