import { Component, OnInit } from '@angular/core';
import { DashboardmedicoService } from './dashboardmedico.service';

@Component({
  selector: 'app-dashboard-medico',
  templateUrl: './dashboard-medico.component.html',
  styleUrls: ['./dashboard-medico.component.css']
})
export class DashboardMedicoComponent implements OnInit {

  constructor(private dashboardService :DashboardmedicoService) { }

  agendamentosResposta: any;
  data: any;

  

  ngOnInit(): void {
    this.getAgendamentos();
  }

  getAgendamentos(){
  
    this.dashboardService.getAgendamentos().subscribe(
      resposta => {
        this.agendamentosResposta = resposta;
        console.log(resposta);

        this.data = new Date(Date.now()).toISOString().slice(0,10);
      }
    );
  }

}
