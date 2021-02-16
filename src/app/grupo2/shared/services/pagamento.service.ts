import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePagamento } from '../model/pagamento';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  constructor(private http : HttpClient) { }
  private readonly APIGETPAGAMENTO = 'http://localhost:8080/pagamento/ '

  buscarPagamento(idPagamento: number){
    return this.http.get<ResponsePagamento>(this.APIGETPAGAMENTO+idPagamento);
  }
}


