import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseCartao } from '../model/cartao';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {

  constructor(private http: HttpClient) { }

  private readonly APICARTAOPORUSUARIO = 'http://localhost:8080/cartoes/';

  listarCartaoPorUsuario(idUsuario: number){
    // return this.http.get<ResponseAgenda[]>`${this.APIAGENDAPORESP}/${idTipoConsulta}/${idEspecialidade}`;
    return this.http.get<ResponseCartao[]>(this.APICARTAOPORUSUARIO + idUsuario);
  }

}