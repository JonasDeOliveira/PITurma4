import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AgendamentoConsultasComponent } from './pages/agendamento-consultas/agendamento-consultas.component';
import { CalendarioAgendamentoComponent } from './pages/calendario-agendamento/calendario-agendamento.component';
import { EscolhaEspecialistaComponent } from './pages/escolha-especialista/escolha-especialista.component';
import { PagamentoPlanoComponent } from './pages/pagamento-plano/pagamento-plano.component';
import { PagamentoParticularComponent } from './pages/pagamento-particular/pagamento-particular.component';
import { ConfirmacaoConsultaComponent } from './pages/confirmacao-consulta/confirmacao-consulta.component';
import { MinhasConsultasComponent } from './pages/minhas-consultas/minhas-consultas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, AgendamentoConsultasComponent, 
    CalendarioAgendamentoComponent, EscolhaEspecialistaComponent, PagamentoPlanoComponent, 
    PagamentoParticularComponent, ConfirmacaoConsultaComponent, MinhasConsultasComponent],
  imports: [
    CommonModule, RouterModule, HttpClientModule, FormsModule
  ]
})
export class Grupo2Module { }
