import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EspMed } from '../model/agenda';

@Injectable({
  providedIn: 'root'
})
export class EspMedServiceService {

constructor(private http: HttpClient) { }

private readonly APILISTARESPDISPONIVEIS = 'http://localhost:8080/especialidade/agenda/';


listarEspDisponiveis(idTipoConsulta: number){
  return this.http.get<EspMed[]>(this.APILISTARESPDISPONIVEIS+idTipoConsulta);
}
}
