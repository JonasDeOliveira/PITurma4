

export interface Cartao{
    idCartao: number;
    idUsuario: number;
    nrCartao: string;
    codSeguranca: string;
    dtValidade: Date;
    dtEmissao: Date;
}

export interface ResponseCartao {
    cartao: Cartao[]
}
