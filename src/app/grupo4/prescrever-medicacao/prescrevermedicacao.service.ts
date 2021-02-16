import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CadastroPrescricao} from './prescricao.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PrescrevermedicacaoService {

  constructor(private http : HttpClient) { }

  private readonly API = 'http://localhost:8080/receituario';
  
  objMedico = JSON.parse(localStorage.getItem("medico"));

  getTelaPrescricoes() {
    //TODO: pegar ID PACIENTE do storage
    //const URL = `${this.API}/${idUsuario}/${idPaciente}`;

    const URL = `${this.API}/${this.objMedico.idUsuario}/6`;
    return this.http.get<any>(URL); 
  }

  cadastrarPrescricao(request: CadastroPrescricao): Observable<CadastroPrescricao> {
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.http.post<CadastroPrescricao>(this.API, request, requestOptions);
  }

}
