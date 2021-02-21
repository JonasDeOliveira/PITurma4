export interface Lojas {
    idLoja: number;
    nmLoja: string;
    enderecos: Endereco [];
    contatos: Contato [];
}

export interface Endereco {
    dsEndereco: string;
    dsComplemento: string;
    dsBairro: string;
    nrCep: string;
    idCidade: string;
}

export class Endereco {
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

