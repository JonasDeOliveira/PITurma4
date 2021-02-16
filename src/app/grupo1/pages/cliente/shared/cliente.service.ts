import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { ResponseCidades, ResponseFormularioCadastro, ResponseFormularioMeusDados, ResponseAreadoCliente} from './cliente.model';
=======
import { Injectable, Output } from '@angular/core';
import { OutputCliente, ResponseCidades, ResponseFormularioCadastro, ResponseFormularioMeusDados} from './cliente.model';
>>>>>>> 8b2d62cc2e62841f1bf68c70080c9cd5bfa37ce2
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  export class ClienteService {
   
    constructor(private http: HttpClient) { }
<<<<<<< HEAD
  
    private readonly API = 'http://localhost:8080';
     
    getFormularioCadastro(){
       const URL = `${this.API}/cliente/cadastro`
      return this.http.get<ResponseFormularioCadastro>(URL);
    }

    getFormularioMeusDados(idUsuario: number): Observable<ResponseFormularioMeusDados>{
        const URL = `${this.API}/cliente/meus-dados/${idUsuario}`
       return this.http.get<ResponseFormularioMeusDados>(URL);
     }
    getCidadesByUf(idUf: number): Observable<ResponseCidades>{
        const URL = `${this.API}/cidadeBuscar/${idUf}`
        return this.http.get<ResponseCidades>(URL);

    }

    getAreaClienteById(idUsuario: number): Observable<ResponseAreadoCliente>{
      const URL = `${this.API}/cliente/area-cliente/${idUsuario}`
      return this.http.get<ResponseAreadoCliente>(URL);

  }
  
  getPlanoAtualById(idUsuario:number): Observable<ResponseAreadoCliente>{
  const URL = `${this.API}/cliente/area-cliente/${idUsuario}`
      return this.http.get<ResponseAreadoCliente>(URL);
  }

}
=======
  
    private readonly API = 'http://localhost:8080';
         
    getFormularioCadastro(){
       const URL = `${this.API}/cliente/cadastro`
      return this.http.get<ResponseFormularioCadastro>(URL);
    }

    getFormularioMeusDados(idUsuario: number): Observable<ResponseFormularioMeusDados>{
        const URL = `${this.API}/cliente/meus-dados/${idUsuario}`
       return this.http.get<ResponseFormularioMeusDados>(URL);
    }
    getCidadesByUf(idUf: number): Observable<ResponseCidades>{
        const URL = `${this.API}/cidadeBuscar/${idUf}`
        return this.http.get<ResponseCidades>(URL);
    }
    createCliente(outputCliente: OutputCliente): Observable<OutputCliente> {
        return this.http.post<OutputCliente>('http://localhost:8080/cliente/cadastrar', outputCliente);
    }
    }
>>>>>>> 8b2d62cc2e62841f1bf68c70080c9cd5bfa37ce2
