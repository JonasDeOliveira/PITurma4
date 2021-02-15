export interface Servicos {
    id: number;
    nome: string;
    preco: DoubleRange;
}

// GET Servicos
export interface ResponseServicos {
    servicos: Servicos[]
}
