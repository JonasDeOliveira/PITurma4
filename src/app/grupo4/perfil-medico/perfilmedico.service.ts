import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PerfilmedicoService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/perfilMedico/128';

  getDadosPerfil() {
    return this.http.get(this.API);
  }
}
