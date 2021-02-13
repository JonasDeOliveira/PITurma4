import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardmedicoService {

  constructor(private http : HttpClient) { }

  private readonly API = 'http://localhost:8080/agendamentos';
  
  
  //ARRUMAR COM O LOCALSTORAGE
  objMedico = JSON.parse(localStorage.getItem("medico"));

  getAgendamentos() {
    var data = new Date(Date.now()).toISOString().slice(0,10);

    const URL = `${this.API}/${data}/${this.objMedico.idUsuario}`;
    console.log(this.objMedico.idUsuario);
    
    return this.http.get(URL);
  }

}
