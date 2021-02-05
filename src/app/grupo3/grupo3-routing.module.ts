import { Routes } from '@angular/router';
import { AgendaAlimentarComponent } from './agenda-alimentar/agenda-alimentar.component';
import { ProgramaNutricionalComponent } from './programa-nutricional/programa-nutricional.component';
import { ResultadoReceitaComponent } from './resultado-receita/resultado-receita.component';


export const Grupo3RoutingModule: Routes = [

  {path:'agenda-alimentar', component: AgendaAlimentarComponent},
{path: 'resultado-receita', component: ResultadoReceitaComponent},
{path:'programa-nutricional', component: ProgramaNutricionalComponent}

];
