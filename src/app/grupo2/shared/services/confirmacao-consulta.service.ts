import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CadastroAgPactPgto } from '../model/cadastroAgPactPgto';
import { OutputConfirmacao } from '../model/outputConfirmacao';

@Injectable({
  providedIn: 'root'
})
export class ConfirmacaoConsultaService {

  constructor(private http: HttpClient) { }

  private readonly APICADASTRARPAGTOCARTAO = 'http://localhost:8080/agPaciente/cadastrar';

  cadastrarPgtoAgP (request: CadastroAgPactPgto): Observable<boolean> {
    return this.http.post<boolean>(this.APICADASTRARPAGTOCARTAO, request);
  }
}

