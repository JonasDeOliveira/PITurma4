import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisarReceitasComponent } from './pesquisar-receitas/pesquisar-receitas.component';
import { ResultadoBuscarReceitasComponent } from './resultado-buscar-receitas/resultado-buscar-receitas.component';
import {RouterModule } from '@angular/router';

@NgModule({
  declarations: [PesquisarReceitasComponent, ResultadoBuscarReceitasComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class Grupo3Module { }
