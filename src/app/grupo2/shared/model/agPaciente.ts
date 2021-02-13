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
    nome: String;
    espMed: EspMed;

}

export interface EspMed {
    idEspMed: number;
    dsEspMed: String;
}

export interface StatusConsulta {
    idStatusConsulta: number;
    dsStatusConsulta: String;
}

export interface Periodo {
    idPeriodo: number;
    horaInicial: Time;

}


// GET agPacientes
export interface ResponseAgPacientes {
    agPacientes: AgPaciente[]
}

