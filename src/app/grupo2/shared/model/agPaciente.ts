import { Time } from '@angular/common';


export interface AgPaciente {
    idAgPaciente: number;
    agenda : AgendaAgPcte;
    statusConsulta: StatusConsulta;
    paciente: Paciente;
}

export interface AgendaAgPcte {
    idAgenda: number;
    medico: MedicoAgPaciente;
    data : Date;
    periodo : Periodo;

}

export interface MedicoAgPaciente {
    nome: string;
    espMed: EspMed;
   
}

export interface EspMed {
    idEspMed: number;
    dsEspMed: string;
}


export interface Periodo {
    idPeriodo: number;
    horaInicial: Time;
    dsPeriodo?:string;

}

export interface StatusConsulta {
    idStatusConsulta: number;
    dsStatusConsulta: string;
}


export interface Paciente{
    idPaciente?: number;
    nome?: string;

}










