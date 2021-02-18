import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../pages/cliente/shared/cliente.service';
import { Usuario } from '../../usuario/shared/usuario.model';

@Component({
  selector: 'app-header-logado',
  templateUrl: './header-logado.component.html',
  styleUrls: ['./header-logado.component.css']
})
export class HeaderLogadoComponent implements OnInit {

  idUsuario: string;
  usuario : Usuario;
  cliente = JSON.parse(localStorage.getItem("cliente"));
  areaDoCliente : any;

  navbarOpen : boolean;
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    if(this.cliente != null) {
      this.idUsuario = this.cliente.idUsuario;
      //TODO: this.usuario; passar usuario para usuario
    }
    this.getAreaDoCliente();
  }
  toggleNavbar(){ 
    this.navbarOpen =! this.navbarOpen; 
    }

    logout(){
      localStorage.removeItem("cliente");
      localStorage.setItem("isLogado","false");
    }
    getAreaDoCliente(){
      this.clienteService.getAreaClienteById().subscribe(
        response => {
          this.areaDoCliente = response;
          console.log(response);
        }
      )
    }
}
