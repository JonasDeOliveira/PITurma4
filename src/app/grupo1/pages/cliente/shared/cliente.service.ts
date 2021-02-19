import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseCidades, ResponseFormularioCadastro, ResponseFormularioMeusDados, ResponseAreadoCliente,OutputCliente, ResultData} from './cliente.model';
import { Observable } from 'rxjs';
import { ResponsePlanos } from '../../planos/shared/planos.model';
import { Usuario } from 'src/app/grupo1/usuario/shared/usuario.model';


@Injectable({
    providedIn: 'root'
  })
  export class ClienteService {
   
    constructor(private http: HttpClient) { }
  
    private readonly API = 'http://localhost:8080';
    private readonly APIViaCEP = 'http://viacep.com.br/ws/';
    cliente = JSON.parse(localStorage.getItem("cliente"));
     
    getFormularioCadastro(){
       const URL = `${this.API}/cliente/cadastro`
      return this.http.get<ResponseFormularioCadastro>(URL);
    }

  getFormularioMeusDados(): Observable<ResponseFormularioMeusDados> {
    const URL = `${this.API}/cliente/meus-dados/${this.cliente.idUsuario}`
    return this.http.get<ResponseFormularioMeusDados>(URL);
  }
 
 
  getCidadesByUf(idUf: number): Observable<ResponseCidades> {
    const URL = `${this.API}/cidadeBuscar/${idUf}`
    return this.http.get<ResponseCidades>(URL);
  }

  getAreaClienteById(): Observable<ResponseAreadoCliente> {
    const URL = `${this.API}/cliente/area-cliente/${this.cliente.idUsuario}`
    return this.http.get<ResponseAreadoCliente>(URL);

  }

 /* getUsuario(): Observable<Usuario> {
    const URL = `${this.API}/cliente/area-cliente/${this.cliente.idUsuario}`
    console.log(URL)
    return this.http.get<Usuario>(URL);
  }*/

  //TODO: Deletar?
  createUsuario(outputCliente: OutputCliente): Observable<OutputCliente> {
    return this.http.post<OutputCliente>('http://localhost:8080/usuario', outputCliente);
  }

  createCliente(outputCliente: OutputCliente): Observable<ResultData> {
    const URL = `${this.API}/cliente/cadastrar`;
    return this.http.post<ResultData>(URL, outputCliente);
  }

  alteraDadosCliente(idUsuario: number, request: OutputCliente): Observable<ResultData> {
    const URL = `${this.API}/cliente/alterar/${idUsuario}`
    return this.http.put<ResultData>(URL, request);
  }

  getPlanos() {
    return this.http.get<ResponsePlanos[]>('http://localhost:8080/planos');
  }

  getEnderecoByViaCep(cep){
    const URL = `${this.APIViaCEP}${cep}/json`
    return this.http.get(URL);
  }
}

