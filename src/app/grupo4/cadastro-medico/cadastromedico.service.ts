import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastromedicoService {

  constructor(private http : HttpClient) { 

  }

  private readonly API = 'http://localhost:8080/cadastroMedico';

  getDadosCadastro() {
    return this.http.get(this.API);
  }
  
}
