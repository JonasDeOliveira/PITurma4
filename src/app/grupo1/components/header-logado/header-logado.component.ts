import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../pages/cliente/shared/cliente.service';
import { Usuario } from '../../usuario/shared/usuario.model';
import {AreaClienteComponent} from '../../pages/area-cliente/area-cliente.component'
import { UsuarioModule } from '../../usuario/usuario.module';

//import { UsuarioModule } from '../../usuario/usuario.module';

@Component({
  selector: 'app-header-logado',
  templateUrl: './header-logado.component.html',
  styleUrls: ['./header-logado.component.css']
})
export class HeaderLogadoComponent implements OnInit {
  
  idUsuario: string;
  cliente = JSON.parse(localStorage.getItem("cliente"));
  areaDoCliente : any;

  navbarOpen : boolean;
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    if(this.cliente != null) {
      this.idUsuario = this.cliente.idUsuario;
      this.getAreaDoCliente();
    }

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
