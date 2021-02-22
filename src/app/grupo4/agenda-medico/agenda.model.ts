export interface Periodo {
    idPeriodo: number;
    dsPerido: string;
    horaInicial: string;
}

export interface ResponsePeriodos {
    periodos : Periodo[]
}