import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages/pages.component';
import { ComponentsComponent } from './components/components.component';
import { PlanosComponent } from './pages/planos/planos.component';
import { PortalComponent } from './pages/portal/portal.component';

@NgModule({
  declarations: [PagesComponent, ComponentsComponent, PlanosComponent, PortalComponent],
  imports: [
    CommonModule
  ]
})
export class Grupo1Module { }
