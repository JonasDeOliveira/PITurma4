import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePlanos, Planos } from './planos.model';
import {ResponseAreadoCliente} from '../../cliente/shared/cliente.model'

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class PlanosService {
  
    constructor(private http: HttpClient) { }
  
    private readonly API = 'http://localhost:8080/planos';

    getPlanos() {
      return this.http.get<ResponsePlanos[]>(this.API);
    }
   /* getPlanoAtualById(idUsuario:number): Observable<ResponseAreadoCliente>{
      const URL = `${this.API}/cliente/area-cliente/${idUsuario}`
          return this.http.get<ResponseAreadoCliente>(URL);
      } */
    
  }