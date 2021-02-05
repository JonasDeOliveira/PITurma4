import { Routes } from '@angular/router';
import { PlanosComponent } from './pages/planos/planos.component';
import { PortalComponent } from './pages/portal/portal.component';

export const Grupo1RoutingModule: Routes = [

    {
        path:'planos', component: PlanosComponent
    } ,
    
    {
        path:'portal', component: PortalComponent
    } 
];
