import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagamento } from '../model/pagamento';
import { PagamentoPlano } from '../model/pagamentoPlano';

@Injectable({
  providedIn: 'root'
})
export class PagamentoPlanoServiceService {

  constructor(private http: HttpClient) { }

  private readonly APICADASTRARPAGTOPLANO = 'http://localhost:8080/pagamento/plano';
  
  cadastrarPlano (request: PagamentoPlano): Observable<Pagamento> {
    return this.http.post<Pagamento>(this.APICADASTRARPAGTOPLANO, request);
  }
}
