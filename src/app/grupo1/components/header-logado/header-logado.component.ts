import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../usuario/shared/usuario.model';
import {AreaClienteComponent} from '../../pages/area-cliente/area-cliente.component'
import { ClienteService } from '../../pages/cliente/shared/cliente.service';
import { UsuarioModule } from '../../usuario/usuario.module';

//import { UsuarioModule } from '../../usuario/usuario.module';

@Component({
  selector: 'app-header-logado',
  templateUrl: './header-logado.component.html',
  styleUrls: ['./header-logado.component.css']
})
export class HeaderLogadoComponent implements OnInit {
  
  idUsuario: string;
  usuario:any;
  cliente = JSON.parse(localStorage.getItem("cliente"));

  navbarOpen : boolean;
  constructor(private clienteService: ClienteService) { }
  


  ngOnInit(): void {
    if(this.cliente != null) {
      this.idUsuario = this.cliente.idUsuario;
      this.getUsuario();
      //TODO: this.usuario; passar usuario para usuario
     
    }
  }


    toggleNavbar(){ 
    this.navbarOpen =! this.navbarOpen; 
    }

    logout(){
      localStorage.removeItem("cliente");
      localStorage.setItem("isLogado","false");
    }

    getUsuario(){
      this.clienteService.getAreaClienteById().subscribe(
        response => {
          this.usuario = response;
         console.log(response);
        }
     )
    }
}
