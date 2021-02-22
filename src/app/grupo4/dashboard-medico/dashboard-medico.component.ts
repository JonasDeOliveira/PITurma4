import { Component, OnInit } from '@angular/core';
import { DashboardmedicoService } from './dashboardmedico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-medico',
  templateUrl: './dashboard-medico.component.html',
  styleUrls: ['./dashboard-medico.component.css']
})
export class DashboardMedicoComponent implements OnInit {

  constructor(private dashboardService :DashboardmedicoService,private router: Router) { }

  agendamentosResposta: any;
  data: any;

  mostraSpin = false;

  ngOnInit(): void {
    this.getAgendamentos();
  }

  getAgendamentos(){
    this.mostraSpin = true;
    this.dashboardService.getAgendamentos().subscribe(
      resposta => {
        this.mostraSpin = false;
        this.agendamentosResposta = resposta;
        console.log(resposta);

        this.data = new Date(Date.now()).toISOString().slice(0,10);
      }
    );
  }

  limparStorage(){
    localStorage.removeItem("medico");
    this.router.navigate(['/login/medico']);
  }

}
