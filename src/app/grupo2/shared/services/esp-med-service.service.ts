import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EspMed } from '../model/agenda';

@Injectable({
  providedIn: 'root'
})
export class EspMedServiceService {

constructor(private http: HttpClient) { }

private readonly APILISTARESPDISPONIVEIS = 'http://localhost:8080/especialidade/agenda/';
private readonly APIBUSCARESPPORID = 'http://localhost:8080/especialidade/';

listarEspDisponiveis(idTipoConsulta: number){
  return this.http.get<EspMed[]>(this.APILISTARESPDISPONIVEIS+idTipoConsulta);
}

buscarEspPorId(idEspMed: number){
  return this.http.get<EspMed>(this.APIBUSCARESPPORID+idEspMed);
}

}
