export interface Servicos {
    nome: string;
    preco: DoubleRange;
}

// GET Servicos
export interface ResponseServicos {
    servicos: Servicos[]
}
