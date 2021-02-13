import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormularioCadastro, ResponseFormularioCadastro, ResponseFormularioMeusDados} from './cliente.model';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/grupo1/usuario/shared/usuario.model';

@Injectable({
    providedIn: 'root'
  })
  export class ClienteService {
   
    constructor(private http: HttpClient) { }
  
    private readonly API = 'http://localhost:8080/cliente';
     
    getFormularioCadastro(){
       const URL = `${this.API}/cadastro`
      return this.http.get<ResponseFormularioCadastro>(URL);
    }

    getFormularioMeusDados(idUsuario: string): Observable<ResponseFormularioMeusDados>{
        const URL = `${this.API}/meus-dados/${idUsuario}`
       return this.http.get<ResponseFormularioMeusDados>(URL);
     }
   
  
}