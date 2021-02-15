import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../model/pedido.model';

@Injectable({
  providedIn: 'root'
})

export class PedidoService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/pagamento-servico';


  createPedido(request: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.API, request);
  }
}