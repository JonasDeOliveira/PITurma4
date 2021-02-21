import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, ResultData  } from './login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginmedicoService {

  constructor(private http : HttpClient) { }

  private readonly API = 'http://localhost:8080/login';

  getAcessoCliente(login: Login): Observable<ResultData>{
    const URL = `${this.API}/cliente`
   return this.http.post<ResultData>(URL, login);
 }

 esqueceuASenha(email: String) {
  const URL = `${this.API}/esqueceu-senha`

  return this.http.post<ResultData>(URL, email);
 }

}
