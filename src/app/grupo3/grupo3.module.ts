import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramaNutricionalComponent } from './programa-nutricional/programa-nutricional.component';
import { AgendaAlimentarComponent } from './agenda-alimentar/agenda-alimentar.component';
import { ResultadoReceitaComponent } from './resultado-receita/resultado-receita.component';


@NgModule({
  declarations: [ProgramaNutricionalComponent, AgendaAlimentarComponent, ResultadoReceitaComponent],
  imports: [
    CommonModule
  ]
})
export class Grupo3Module { }
