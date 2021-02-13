import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login.model';
import { LoginmedicoService } from './loginmedico.service';

@Component({
  selector: 'app-login-medico',
  templateUrl: './login-medico.component.html',
  styleUrls: ['./login-medico.component.css']
})

export class LoginMedicoComponent implements OnInit {

  constructor(private loginService : LoginmedicoService,
    private router: Router) { }



    
  ngOnInit(): void {
  }

  logar(dsEmail: string, dsSenha: string){
    this.loginService.fazerLogin(dsEmail).subscribe(
      response => {
        if(response.dsEmail == dsEmail && response.dsSenha == dsSenha){
          // console.log(dsEmail);
          // console.log(response.idUsuario);
        
          localStorage.setItem("medico", JSON.stringify(response));

          this.router.navigate(['/dashboard/medico']); 
        } else {
          alert("Login não realizado!");
        }
      },
      error => {
        alert("algo inesperado aconteceu");
      }
    )
  }

}
