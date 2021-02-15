import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cartao, ResponseCartao, ResponseCartoes } from './cartao.model';

@Injectable({
    providedIn: 'root'
  })
  export class CartaoService {

  constructor(private http: HttpClient) { }

    private readonly API = 'http://localhost:8080/cartao';


  }