import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CadastroSolicitacao } from './solicitacao.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoexameService {

  constructor(private http : HttpClient) { }

  private readonly API = 'http://localhost:8080/solic_exame';

  objMedico = JSON.parse(localStorage.getItem("medico"));

  getTelaSolicitacao() {
    //TODO: pegar IDs do storage
    //const URL = `${this.API}/${idUsuario}/${idPaciente}`;
    
    const URL = `${this.API}/${this.objMedico.idUsuario}/6`;
    return this.http.get<any>(URL); 
  }

  cadastrarSolicitacaoExame(request: CadastroSolicitacao): Observable<CadastroSolicitacao> {
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.http.post<CadastroSolicitacao>(this.API, request, requestOptions);
  }

}
