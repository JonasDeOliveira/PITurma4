import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { /* IMPORTS NECESSÁRIOS */ } from './cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/cliente';

  //MÉTODOS AQUI

}