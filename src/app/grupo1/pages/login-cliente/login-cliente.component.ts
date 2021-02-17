import { Component, OnInit } from '@angular/core';
import { LoginUsuario, ResultData } from '../cliente/shared/cliente.model'
import { LoginClienteService } from '../cliente/shared/loginCliente.service';
import "src/assets/grupo1/css/grupo1.component.css";
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class LoginClienteComponent implements OnInit {

  loginCliente: LoginUsuario = {
    idUsuario: null,
    dsSenha: "",
    dsEmail: ""
  }
  respostaLogin: ResultData;

  constructor(private loginService: LoginClienteService,
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  logarCliente() {
    this.loginService.getAcessoCliente(this.loginCliente).subscribe(
      response => {
        this.respostaLogin = response;

        localStorage.setItem("cliente", JSON.stringify(response.retorno));

        alert(response.mensagem);
        this.router.navigate([`/area-cliente`]);
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
