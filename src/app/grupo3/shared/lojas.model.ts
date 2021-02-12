export interface Lojas {
    nmLoja: string;
    endereco: Endereco [];
    contato: Contato [];
}

export interface Endereco {
    dsEndereco: string;
    dsComplemento: string;
    dsBairro: string;
    nrCep: string;
    idCidade: string;
}

export interface Contato {
    nrDdd: string;
    dsContato: string;
}

// GET Lojas
export interface ResponseLojas {
    lojas: Lojas[]
}

