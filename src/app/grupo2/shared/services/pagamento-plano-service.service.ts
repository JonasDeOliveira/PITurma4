import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagamentoPlanoServiceService {

  constructor(private http: HttpClient) { }

  private readonly APICADASTRARPAGTOPLANO = 'http://localhost:8080/pagamento/plano';
  
}
