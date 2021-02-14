import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagamentoCartao } from '../model/pagamentoCartao';

@Injectable({
  providedIn: 'root'
})
export class PagamentoCartaoServiceService {

  constructor(private http: HttpClient) { }

  private readonly APICADASTRARPAGTOCARTAO = 'http://localhost:8080/pagamento/particular';
  
  cadastrarCartao (request: PagamentoCartao): Observable<PagamentoCartao> {
    return this.http.post<PagamentoCartao>(this.APICADASTRARPAGTOCARTAO, request);
}
}
