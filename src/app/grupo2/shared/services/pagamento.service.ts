import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagamento } from '../model/pagamento';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  constructor(private http : HttpClient) { }
  private readonly APIGETPAGAMENTO = 'http://localhost:8080/pagamento/ '

  buscarPagamento(idPagamento: number){
    return this.http.get<Pagamento>(this.APIGETPAGAMENTO+idPagamento);
  }
}


