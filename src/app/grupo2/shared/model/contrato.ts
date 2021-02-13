export interface Contrato {

    idContrato: number;
    dtVigencia: Date;
    plano: PlanosEntity;
}

export interface PlanosEntity {
    idPlano: number;
    nmPlano: String;
    dsPlano: String;
}

export interface ResponseContratos {
    contratos: Contrato[];
}