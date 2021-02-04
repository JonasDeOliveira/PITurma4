import { Routes } from '@angular/router';
import { from } from 'rxjs';
import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component'


export const Grupo4RoutingModule: Routes = [
    {path: 'cadastro/medico' , component: CadastroMedicoComponent}
  
];
