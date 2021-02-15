import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseEspMed } from '../model/espMed';

@Injectable({
  providedIn: 'root'
})
export class EspMedServiceService {

constructor(private http: HttpClient) { }

private readonly APILISTARESPDISPONIVEIS = 'http://localhost:8080/especialidade/agenda/';


listarEspDisponiveis(idTipoConsulta: number){
  return this.http.get<ResponseEspMed[]>(this.APILISTARESPDISPONIVEIS+idTipoConsulta);
}
}
