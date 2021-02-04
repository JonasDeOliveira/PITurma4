import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesteComponent } from './teste/teste.component';
import { PagesComponent } from './pages/pages.component';
import { ComponentsComponent } from './components/components.component';


@NgModule({
  declarations: [TesteComponent, PagesComponent, ComponentsComponent],
  imports: [
    CommonModule
  ]
})
export class Grupo1Module { }
