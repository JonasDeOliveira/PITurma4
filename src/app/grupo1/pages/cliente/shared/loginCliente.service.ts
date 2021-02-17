import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUsuario, ResultData } from './cliente.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class LoginClienteService {
         
    constructor(private http: HttpClient) { }
  
    private readonly API = 'http://localhost:8080/login';
    cliente = JSON.parse(localStorage.getItem("cliente"));

    getAcessoCliente(loginUsuario: LoginUsuario): Observable<ResultData>{
        const URL = `${this.API}/cliente`
       return this.http.post<ResultData>(URL, loginUsuario);
     }

     esqueceuASenha(email: String) {
      const URL = `${this.API}/esqueceu-senha`

      return this.http.post<ResultData>(URL, email);
     }

     conferirSenha(senha: String) {
      const URL = `${this.API}/conferir-senha/${this.cliente.idUsuario}`
      return this.http.post<ResultData>(URL, senha)
    }

  }