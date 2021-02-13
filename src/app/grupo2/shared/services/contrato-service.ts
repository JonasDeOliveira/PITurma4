import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ResponseContratos } from '../model/contrato';

@Injectable({
  providedIn: 'root'
})

export class ContratoService {

  constructor(private http: HttpClient) { }

  private readonly APIGETPLANOPORPACIENTE = 'http://localhost:8080/contrato-usuario/';

  buscarPlanosPaciente(idUsuario: Number){
    return this.http.get<ResponseContratos[]>(this.APIGETPLANOPORPACIENTE+idUsuario);
  }

}
