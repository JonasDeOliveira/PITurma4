import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormularioCadastro, ResponseFormularioCadastro } from './cliente.model';

@Injectable({
    providedIn: 'root'
  })
  export class ClienteService {
   
    constructor(private http: HttpClient) { }
  
    private readonly API = 'http://localhost:8080/cliente';
  
    getFormularioCadastro(){
      return this.http.get<ResponseFormularioCadastro>(this.API);
    }
  
}