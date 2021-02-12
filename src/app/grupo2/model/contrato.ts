export interface Contrato {

    idContrato: number;
    dtVigencia: Date;
    plano: Plano;
}

export interface Plano {
    idPlano: number;
    nmPlano: String;
    dsPlano: String;
}

export interface ResponseContrato {
    contrato: Contrato
}