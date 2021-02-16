export interface Planos {
    idPlano: BigInteger,
    nmPlano: string,
    dsPlano: string,
    vlPlano: number
    servicos:ServicoPlano
   
   
}

export interface ServicoPlano{
    idServicoPlano: BigInteger,
    dsServico: string
    
}

//GET Planos
export interface ResponsePlanos {
    planos: Planos[]
}


