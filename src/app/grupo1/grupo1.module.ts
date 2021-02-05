import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages/pages.component';
import { ComponentsComponent } from './components/components.component';
import { AreaClienteComponent } from './pages/area-cliente/area-cliente.component';


@NgModule({
  declarations: [ PagesComponent, ComponentsComponent, AreaClienteComponent],
  imports: [
    CommonModule
  ]
})
export class Grupo1Module { }
