import { Time } from '@angular/common';

export interface Agenda {
    idAgenda: number;
    medico: Medico;
    data : Date;
    periodo : Periodo;
}

export interface Medico {
    nome: string;
    espMed: EspMed;
    preco: Preco; 
    dsEndImg: string;

}

export interface Preco{
    vlConsulta : number; 
}

export interface EspMed {
    dsEspMed: string;
}


export interface Periodo {
    horaInicial: Time;
    dsPeriodo: string;

}

export interface ResponseAgenda {
    agenda: Agenda[]
}
