import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePlanos, Planos } from './planos.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class PlanosService {
  
    constructor(private http: HttpClient) { }
  
    private readonly API = 'http://localhost:8080/planos';

    getPlanos() {
      return this.http.get<ResponsePlanos[]>('http://localhost:8080/planos');
    }
  }