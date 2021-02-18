export interface Cartao {

    nrCartao: string;
    nmCartao: string;
    codSeguranca: string;
    dtValidade: string;
    dtEmissao: string;
}

export interface ResponseCartao {
    cartao: Cartao
}
