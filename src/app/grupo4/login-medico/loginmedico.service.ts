import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginmedicoService {

  constructor(private http : HttpClient) { }

  private readonly API = 'http://localhost:8080/login/email';

  fazerLogin(email : string){
    const URL = `${this.API}/${email}`
    return this.http.get<Login>(URL); 

  }
  
}
