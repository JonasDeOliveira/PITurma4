export interface Servicos {
    id: number;
    nome: string;
    preco: number;
}

// GET Servicos
export interface ResponseServicos {
    servicos: Servicos[]
}
