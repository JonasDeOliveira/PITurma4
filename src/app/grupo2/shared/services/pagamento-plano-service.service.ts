import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagamentoPlano } from '../model/pagamentoPlano';

@Injectable({
  providedIn: 'root'
})
export class PagamentoPlanoServiceService {

  constructor(private http: HttpClient) { }

  private readonly APICADASTRARPAGTOPLANO = 'http://localhost:8080/pagamento/plano';
  
  cadastrarPlano (request: PagamentoPlano): Observable<PagamentoPlano> {
    return this.http.post<PagamentoPlano>(this.APICADASTRARPAGTOPLANO, request);
  }
}
