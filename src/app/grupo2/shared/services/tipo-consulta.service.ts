import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoConsulta } from '../model/tipoConsulta';

@Injectable({
  providedIn: 'root'
})
export class TipoConsultaService {

  constructor(private http : HttpClient) { }
  private readonly APIGETTIPOCONSULTA = 'http://localhost:8080/tipoConsulta/ '

  buscarTipoConsulta(idTipoConsulta: number){
    return this.http.get<TipoConsulta>(this.APIGETTIPOCONSULTA+idTipoConsulta);
  }
}


