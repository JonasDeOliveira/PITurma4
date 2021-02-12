import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseContrato} from '../model/contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  constructor(private http: HttpClient) { }

  private readonly APIGETCONTRATO = 'http://localhost:8080/contrato/';

  buscarContratoPorUsuario(idUsuario: Number){
    return this.http.get<ResponseContrato>(this.APIGETCONTRATO+idUsuario);
  }
}
