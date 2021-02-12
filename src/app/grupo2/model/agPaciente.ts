import { Time } from '@angular/common';

export interface AgPaciente {
    idAgPaciente: number;
    agenda : Agenda;
    statusConsulta: StatusConsulta;
}

export interface Agenda {
    idAgenda: number;
    medico: Medico;
    diaDisponivel : Date;
    horaInicial : Time;
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


// GET agPacientes
export interface ResponseAgPacientes {
    agPacientes: AgPaciente[]
}

//GET agPaciente
export interface ResponseAgPaciente {
    agPaciente: AgPaciente
}