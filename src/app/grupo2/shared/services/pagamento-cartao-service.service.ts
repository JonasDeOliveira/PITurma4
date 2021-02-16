import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagamento } from '../model/pagamento';
import { PagamentoCartao } from '../model/pagamentoCartao';

@Injectable({
  providedIn: 'root'
})
export class PagamentoCartaoServiceService {

  constructor(private http: HttpClient) { }

  private readonly APICADASTRARPAGTOCARTAO = 'http://localhost:8080/pagamento/cartao';
  
  cadastrarCartao (request: PagamentoCartao): Observable<Pagamento> {
    return this.http.post<Pagamento>(this.APICADASTRARPAGTOCARTAO, request);
}
}
