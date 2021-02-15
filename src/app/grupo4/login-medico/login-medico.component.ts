import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginmedicoService } from './loginmedico.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Login, ResultData } from './login.model'

@Component({
  selector: 'app-login-medico',
  templateUrl: './login-medico.component.html',
  styleUrls: ['./login-medico.component.css']
})

export class LoginMedicoComponent implements OnInit {

  loginCliente: Login = {
    idUsuario: null,
    dsSenha: "",
    dsEmail: ""
  }

  respostaLogin: ResultData;

  constructor(private loginService : LoginmedicoService,
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal) { }


  ngOnInit(): void {
  }

  
  logarCliente() {
    this.loginService.getAcessoCliente(this.loginCliente).subscribe(
      response => {
        this.respostaLogin = response;

        localStorage.setItem("medico", JSON.stringify(response.retorno));

        alert(response.mensagem);
        this.router.navigate(['/dashboard/medico']);
      },
      error => {
        alert(error.error.mensagem);
      }
    )
  }

  esqueceuSenha() {
    this.loginService.esqueceuASenha(this.loginCliente.dsEmail).subscribe(
      response => {
        alert(response.mensagem);
        window.location.reload(true);
      },
      error => {
        alert(error.error.mensagem);
      });
  }

  ver() {
    console.log(this.loginCliente);
  }

  open(content) {
    this.modalService.open(content);
  }


}
