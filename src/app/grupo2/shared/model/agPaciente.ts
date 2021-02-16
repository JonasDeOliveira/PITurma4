import { Time } from '@angular/common';

export interface AgPaciente {
    idAgPaciente: number;
    agenda : Agenda;
    statusConsulta: StatusConsulta;
}

export interface Agenda {
    idAgenda: number;
    medico: Medico;
    data : Date;
    periodo : Periodo;
}

export interface Medico {
    nome: string;
    espMed: EspMed;

}

export interface EspMed {
    idEspMed: number;
    dsEspMed: string;
}

export interface StatusConsulta {
    idStatusConsulta: number;
    dsStatusConsulta: string;
}

export interface Periodo {
    idPeriodo: number;
    horaInicial: Time;

}
