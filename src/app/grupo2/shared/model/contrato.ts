export interface Contrato {

    idContrato: number;
    dtVigencia: Date;
    plano: Planos;
}

export interface Planos {
    idPlano: number;
    nmPlano: String;
    dsPlano: String;
}
