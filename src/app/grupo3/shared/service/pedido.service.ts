import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido, ResponsePedido } from '../model/pedido.model';

@Injectable({
  providedIn: 'root'
})

export class PedidoService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/pedido';
  private readonly API2 = 'http://localhost:8080/pedidos';


  listarPedidos () {
    return this.http.get<ResponsePedido[]>(this.API2);
  }

  criarPedido(request: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.API, request);
  }

  getServico(id) {
    const URL = `${this.API}/${id}`;
    return this.http.get<any>(URL);
  }

  // getAgendamento(agendamentos: []) {
  //   const URL = `${this.API}`;
  //   return this.http.get<any>(URL);
  // }

}